import React, { useState } from 'react';

const Card= ({ count, setCount ,Pdprofile}) => {
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
                  {Pdprofile[0]==="0"? <p style={{color:"red",fontSize:"10px" ,textAlign:"left"}} >(No quedan unidades disponibles)</p>:
                  <p style={{fontSize:"10px" ,textAlign:"left"}} >({Pdprofile[0]} disponibles)</p>}
                  <p style={{fontSize:"20px",textAlign:"left"}} >{Pdprofile[1]}</p>
                  <p style={{fontSize:"12px",textAlign:"left"}} >${Pdprofile[2]}</p>
                  <div class="input-group center" style={{width:"100px"}}>
                  <button onClick={increment}> + </button>
                  <input style={{width:"50px"}} type="number" id="input" value={count} readonly/>
                  <button onClick={decrement}> - </button>
                  </div>
                  {Pdprofile[3]==="0"? <p  style={{color:"green",textAlign:"left"}}>ENVIO GRATIS</p> : <p  style={{color:"gray",textAlign:"left"}}>ENVIO: {Pdprofile[3]}</p>}
                  {Pdprofile[0]==="0"? <p >❌ No hay Stock</p>:<p >✅EN STOCK {Pdprofile[0]}</p>}
              

          </div>
        </div>
        


    )
}

export default Card;