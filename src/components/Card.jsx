import React from 'react';

export default function Card(){
    return (
        <div class="card contenedor" // creamos la card que envuelve la imagen izquierda y texto derecha
        > 

        <img src='../../public/favicon1.png' style={{width:"200px" ,height:"200px"}} //imgen en izquierda
        />
     
        <div className='derecha ' style={{margin:"40px"}} // conjunto de info en la derecha dividido en dos
        >
                <p style={{fontSize:"10px"}} >(3 disponibles)</p>
                <p style={{fontSize:"20px"}} >Apple iPhone 13 (128 GB) Meia-noite - Distribuidor Autorizado</p>
                <p style={{fontSize:"12px"}} >$877.000</p>
                <div class="input-group center" style={{width:"100px"}}>
                    <button id="decrement">-</button>
                    <input style={{width:"50px"}} type="number" id="input" value="0" readonly/>
                    <button id="increment">+</button>
                </div>
                <p  style={{color:"green"}}>ENVIO GRATIS</p>
                <p >EN stock</p>
            

        </div>
        </div>
        


    )
}