const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const session = require("express-session");
const flash = require("connect-flash")


const port = 5000;

app.use(session({
    secret: "qualquercoisa",
    cookie: { maxAge: 30000000 },
    saveUninitialized: true,
    resave: true
}))

app.use(flash());




//const session = require('express-session');

//VIEW ENGINE
app.set('view engine', 'ejs')

//STATIC
app.use(express.static('public'));

//BODY-PARSER
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



//ROTAS

//INDEX
const index = require('./routes/turmas_router')
app.use('/', index)

const periodo = require('./routes/periodos_router')
app.use('/', periodo)
const curso = require('./routes/cursos_router')
app.use('/', curso)
const aluno = require('./routes/alunos_router')
app.use('/', aluno)
const funcioanrio = require('./routes/funcionarios_router')
app.use('/', funcioanrio)
const matricula = require('./routes/matricula_router')
app.use('/', matricula)
const cursoPeriodo = require('./routes/curso_periodo_router')
app.use('/', cursoPeriodo)


//TURMA ROTA






//servidor 
app.listen(port, () => {
    console.log("Sevidor rodando na porta" + port)
})