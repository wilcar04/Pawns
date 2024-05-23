import React, { useState } from 'react';

const Card= ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


    return (
        <div class="card contenedor" // creamos la card que envuelve la imagen izquierda y texto derecha
        > 

        <img src='../../public/favicon1.png' style={{width:"200px" ,height:"200px"}} //imgen en izquierda
        />
     
        <div className='derecha ' style={{margin:"40px"}} // conjunto de info en la derecha dividido en dos
        >
                <p style={{fontSize:"10px" ,textAlign:"left"}} >(3 disponibles)</p>
                <p style={{fontSize:"20px",textAlign:"left"}} >Apple iPhone 13 (128 GB) Meia-noite - Distribuidor Autorizado</p>
                <p style={{fontSize:"12px",textAlign:"left"}} >$877.000</p>
                <div class="input-group center" style={{width:"100px"}}>
                <button onClick={increment}> + </button>
                <input style={{width:"50px"}} type="number" id="input" value={count} readonly/>
                <button onClick={decrement}> - </button>
                </div>
                <p  style={{color:"green",textAlign:"left"}}>ENVIO GRATIS</p>
                <p >EN stock</p>
            

        </div>
        </div>
        


    )
}

export default Card;