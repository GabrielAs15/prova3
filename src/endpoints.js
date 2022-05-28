import {Router} from 'express'
import {Semaforo, DiaSemana, SequenciaPar} from "./services.js"



const server = Router();
server.get("/semaforo", (req,resp) =>{
    try{
        const x = req.query.x;
        const y = Semaforo(x);

        resp.send({
            msg: y
        })

    }
   catch(err){
       resp.status(404).send({
           erro: err.message
       })
   } 

})

server.get("/diasemana", (req, resp) => {
    try{
        const f = req.query.f;
        const r = DiaSemana(f);

        resp.send({
            msg: r
        })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post("/sequenciapar", (req,resp) => {  
    try { 
        const e = req.body;
        const d = SequenciaPar(String(e));

        resp.send({
            msg: d
        })
    }

    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;