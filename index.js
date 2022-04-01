/* const http = require('http');
const fs = require('fs');

function onRequest(req, res) {
    const html = fs.readFileSync('./index.html', 'utf-8')
    
    res.writeHead(200);
    res.end(html);
}

const server = http.createServer(onRequest);

server.listen(8000, 'localhost', () => {
    console.log("Server sudah berjalan, silahkan buka http://localhost:%d", 8000);
})
 */


// //json parse
// /**
//  * Impor HTTP Standar Library dari Node.js
//  * Hal inilah yang nantinya akan kita gunakan untuk membuat
//  * HTTP Server
//  * */
// const http = require('http');

// function toJSON(value) {
//     return JSON.stringify(value);
// }

// function onRequest(req, res) {
//     if (req.headers['content-type'] !== 'application/json') {
//     const badRequestJSON = toJSON({
//         status: "FAIL",
//         message: "Request must be in JSON format"
//     })
    
//         res.setHeader('Content-Type', 'application/json');
//         res.writeHead(400);
//         res.end(badRequestJSON);
//         return;
//     }

//     let requestJSON = '';

//     req.on('data', chunk => {
//         requestJSON += chunk;
//     })

//     req.on('end', () => {
//     try {
//         requestJSON = JSON.parse(requestJSON); 

//     if (requestJSON.username !== 'sabrina' || requestJSON.password !== '123456') {
//         const unauthorizedJSON = toJSON({
//             status: "FAIL",
//             message: "Invalid username or password"
//         })

//             res.setHeader('Content-Type', 'application/json');
//             res.writeHead(401);
//             res.end(unauthorizedJSON);
//             return;
//         }

//         const authenticatedJSON = toJSON({
//             status: "OK",
//             message: "Hello, Sabrina!"
//         })


//         res.setHeader('Content-Type', 'application/json');
//         res.writeHead(200);
//         res.end(authenticatedJSON);
//         return;
//     }

//     catch(err) {
//         const badRequestJSON = toJSON({
//             status: "FAIL",
//             message: "Invalid JSON syntax"
//         })

//         res.setHeader('Content-Type', 'application/json');
//         res.writeHead(400);
//         res.end(badRequestJSON);
//         return;
//         }
//     })
// }

// const server = http.createServer(onRequest);

// // Jalankan server
// server.listen(8000, 'localhost', () => {
//     console.log("Server sudah berjalan, silahkan buka http://localhost:%d", 8000);
// })


// const htpp = require('http');
// const fs = require('fs');
// const path = require('path');
// const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

// function getHtml(HtmlFileName) {
//     const HtmlFilePath = path.join(PUBLIC_DIRECTORY, HtmlFileName);
//     return fs.readFileSync(HtmlFilePath, 'utf-8');
// }

// function OnRequest(req, res) {
//     switch (req.url) {
//         case "/":
//             res.writeHead(200)
//             res.end(getHtml("index.html"))
//             return;
        
//         case "/about":
//             res.writeHead(200)
//             res.end(getHtml("about.html"))
//             return;
    
//         default:
//             res.writeHead(404)
//             res.end(getHtml("error.html"))
//             return;
//     }
// }

// const cek = http.CreateServer(OnRequest);

// cek.listen(8000, 'localhost', () => {
//     console.log("Server sudah berjalan, silahkan buka http://localhost:%d", 8000);
// })