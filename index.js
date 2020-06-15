const express = require ('express');
const app = express ();

app.use(express.json())

app.get('/:num', (request, response)=>{

const num = request.params.num

/*ler numero*/
let numero = 78;
let ResultadoHexadecimal = numero.toString(16);

		    response.json({
                
        ResultadoHexadecimal,
    })
})
app.listen(4000, ()=>{
    console.log('Subiu  o servidor')
})

