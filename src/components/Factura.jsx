import React, { useState } from 'react';


const Factura= ({ counts, data ,onclicka}) => {
    return (
        <div className="card " style={{backgroundColor:"white",borderColor:"purple",border:"2px solid purple"}}// creamos la card que envuelve la imagen izquierda y texto derecha
        > 
        <div className='contenedor' style={{margin:"10px"}}> </div>
        <div className='contenedor' style={{margin:"20px"}}> <p style={{textAlign:"left"}}>TU COMPRA</p> </div>
        <div className='contenedor' style={{margin:"10px",marginLeft:"20px"}}> <p style={{textAlign:"left",color:"grey"}} className='izquierda'>Sub Total</p> <p className='derecha'>0.00</p></div>
        <hr className="center" style={{width:"90%", height:"3px" , backgroundColor:"grey"}}/>
        <div className='contenedor' style={{margin:"10px",marginLeft:"20px"}}> <p style={{textAlign:"left",color:"grey"}} className='izquierda'>Descuentos Aplicables</p> <p className='derecha'>0.00</p></div>
        <hr className="center" style={{width:"90%", height:"3px" , backgroundColor:"grey"}}/>
        <div className='contenedor' style={{margin:"10px",marginLeft:"20px"}}> <p style={{textAlign:"left",color:"grey"}} className='izquierda'>Iva</p> <p className='derecha'>0.00</p></div>
        <hr className="center" style={{width:"90%", height:"3px" , backgroundColor:"grey"}}/>
        <div className='contenedor' style={{margin:"10px",marginLeft:"20px"}}> <p style={{textAlign:"left"}} className='izquierda'>ORDEN TOTAL</p> <p className='derecha'>0.00</p></div>
        <button onclick={onclicka}  style={{margin:"10px",minHeight:"60px",minWidth:"170px",borderRadius:"10px" ,
         color:"white" ,backgroundColor:"darkblue"}} >PAGAR</button>
        

        </div>
        


    )
}

export default Factura;