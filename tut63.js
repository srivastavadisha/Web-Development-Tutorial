// console.log("Hello World"); 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World, this is disha');
res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo selectors and more designing</title>
    <style>
        .container{
            border: 2px solid red;
            background-color: aliceblue;
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }
        a{
            text-decoration: none;      /*will remove the underline read more which was there by default*/
            color: black;
        }
        a:hover{
            color:brown;
            background-color:coral;
        }
        a:visited{
            background-color: yellow;
        }
        a:active{
            background-color: blueviolet;
        }
        .btn{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bold;
            color: white;
            background-color: red;
            padding: 6px;
            border: none; 
            cursor: pointer;
            font-size: 13px;
            border-radius: 4px;
        }
        .btn:hover{
            color: darkgoldenrod;
            background-color: antiquewhite;
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="container" id="cont1">
        <h3>This is my heading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus debitis praesentium explicabo inventore. Animi aspernatur ea id est eveniet blanditiis suscipit! Quo, debitis quae vel in velit ad porro quia? Eveniet, omnis. Necessitatibus!</p>
        <a href="https://yahoo.com" class="btn">Read more</a>
        <button class="btn">Contact us</button>
    </div>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});