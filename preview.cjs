// Servidor opcional para a prévia local. Não é executado pelo GitHub Pages.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = __dirname;
const allowed = new Set(["/index.html", "/styles.css", "/config.js", "/script.js", "/assets/profile.png", "/assets/favicon.svg", "/robots.txt", "/sitemap.xml"]);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml; charset=utf-8" };
http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  const file = pathname === "/" ? "/index.html" : pathname;
  if (!allowed.has(file)) { res.writeHead(404); res.end("Não encontrado"); return; }
  fs.readFile(path.join(root, file), (error, data) => {
    if (error) { res.writeHead(404); res.end("Não encontrado"); return; }
    res.writeHead(200, { "Content-Type": types[path.extname(file)], "Cache-Control": "no-store" });
    res.end(data);
  });
}).listen(4173, "127.0.0.1", () => console.log("Local: http://127.0.0.1:4173"));
