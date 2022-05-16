const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const url = req.url;
  if (url === "/users") {
    res.write(
      `<html>
            <head>
            </head>
            <body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </body>
        </html>`
    );
    return res.end();
  } else if (url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    return res.end();
  }
  res.write(
    `<html>
            <head>
            </head>
            <body>
                <h1>Hello from my world</h1>
                <form method="POST" action="/create-user">
                    <input type="text" name="user"/>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>`
  );
  res.end();
});

server.listen(3000);
