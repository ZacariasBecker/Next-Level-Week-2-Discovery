const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
const { urlencoded } = require('express')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
    // receber os dados do req.body
    .use(urlencoded({ extended: true }))
    // configurar arquivos estaticos (css, scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)