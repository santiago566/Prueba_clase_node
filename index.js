//constante que llama ala framework

const express = require('express')
const app = express()


// http://localhost:3000/aprox?l=4
app.get('/aprox', (req, res) => {
    const longitud = parseInt(req.query.l);

    let resultado = 0;
    let operacion = "";

    for (let i = 0; i < longitud; i++) {
        let denominador = 2 * i + 1;
        let signo = (i % 2 === 0) ? "+" : "-";
        let termino = (4 / denominador) * Math.pow(-1, i);
        
        resultado += termino;
        
        if (i === 0) {
            operacion += `4/${denominador}`;
        } else {
            operacion += ` ${signo} 4/${denominador}`;
        }
    }

    res.json({ resultado, operacion });
});


app.listen(3000);