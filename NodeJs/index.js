// // /* Mengecek Os */
// // const os = require('os');

// // console.log('memory yang tersedia : ', os.freemem());
// const hitung = require('./function.js')

// console.log('ini adalah luas lingkaran = 5,' ,hitung.luaslingkaran(5));
// console.log('ini adalah luas keliling = 5,' ,hitung.luaskeliling(5));

const http = require('http');
const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

function getHtml(HtmlFileName) {
    const HtmlFilePath = path.join(PUBLIC_DIRECTORY, HtmlFileName);
    return fs.readFileSync(HtmlFilePath, 'utf-8');
}

function OnRequest(req, res) {
    switch (req.url) {
        case "/":
            res.writeHead(200)
            res.end(getHtml("index.html"))
            return;
        
        case "/about":
            res.writeHead(200)
            res.end(getHtml("about.html"))
            return;
    
        default:
            res.writeHead(404)
            res.end(getHtml("error.html"))
            return;
    }
}

const cek = http.createServer(OnRequest);

cek.listen(8000, '127.0.0.1', () => {
    console.log("Server sudah berjalan, silahkan buka http://127.0.0.1:%d", 8000);
})