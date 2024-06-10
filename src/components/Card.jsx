import React, { useState } from 'react';
import {setCarStorageItemstring,getCarStorageItem,setCarStorageItem,removeCarStorageItem} from "../components/carrostorage"

const Card= ({Pdprofile}) => {
    // Create an Array
    const [Productlist, setProductlist] = useState(JSON.parse(getCarStorageItem()));

    return (
        <div className="card contenedor" // creamos la card que envuelve la imagen izquierda y texto derecha
        > 

        <img src='../../public/favicon1.png' style={{width:"200px" ,height:"200px"}} //imgen en izquierda
        />
     
        <div className='derecha ' style={{margin:"40px"}} // conjunto de info en la derecha dividido en dos
        >
                <button onClick={() =>{
                  
                  if (((((Productlist)).length)) === 1 ) {
                    (removeCarStorageItem(JSON.stringify(Pdprofile)));
                  } else{
                    (removeCarStorageItem(JSON.stringify(Pdprofile)+","));
                  }
              }} 
                style={{marginLeft:"90%",width:"5%",borderRadius:"30px",color:"white",backgroundColor:"darkred"}} >x</button>
                {Pdprofile[0]==="0"? <p style={{color:"red",fontSize:"10px" ,textAlign:"left"}} >(No quedan unidades disponibles)</p>:
                <p style={{fontSize:"10px" ,textAlign:"left"}} >({Pdprofile[0]} disponibles)</p>}
                <p style={{fontSize:"20px",textAlign:"left"}} >{Pdprofile[1]}</p>
                <p style={{fontSize:"12px",textAlign:"left"}} >${Pdprofile[2]}</p>
                {Pdprofile[3]==="0"? <p  style={{color:"green",textAlign:"left"}}>ENVIO GRATIS</p> : <p  style={{color:"gray",textAlign:"left"}}>ENVIO: {Pdprofile[3]}</p>}
                {Pdprofile[0]==="0"? <p >❌ No hay Stock</p>:<p >✅EN STOCK {Pdprofile[0]}</p>}

        </div>
        </div>
        


    )
}

export default Card;