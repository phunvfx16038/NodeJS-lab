const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body>");
    res.write(
      "<form method='POST' action='/message'><input type='text' name='message'></input><button type='submit'>Send</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split("=")[1];
      console.log(message);
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body>");
  res.write("<h1>Hello from my Node.js server!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  handler: requestHandler,
  someText: "Some text",
};
