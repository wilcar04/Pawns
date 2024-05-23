import Box from "../components/Loading_box"
import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
import { useState,useEffect } from 'react';
import Factura from "../components/Factura";

const handleClick = () => {
    window.location.href = "/";
  };
  
function requestCar() {
    return true;
}
;


export default function Car(){
    const [NetwordPlayed, setLoading] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 1000); // Simulando una carga de datos
    }, []);

    let variableList = [];
  
    for(let i = 1; i <= 5; i++){
      const [count, setCount] = useState(0);
      variableList.push([count, setCount]);
    };
    
    return (

        NetwordPlayed?  (
        
        <div class="min-h-screen flex flex-col">
            <Navbar // insertamos barra de navegacion
            /> 
            <main className="flex-1">
            {requestCar()? // si tenemos datos de la request de la api rest muestra el siguiente div
            <div class="contenedor">
             <div class="izquierda" style={{width:"70%"}}>
             
             {variableList.map((item, index) => ( // iteramos el comonente card segun el numero de contadores
              <Card key={index} count={item[0]} setCount={item[1]} />
))}

             </div>
             <div class="derecha" style={{width:"30px"}}>
                
                <Factura></Factura> {variableList[3][0]} 
             
             
             </div>
           </div>
           
            :
                           // si no muestra el siguiente div
            <div>
                <div>  
                    <img src="../../public/box.svg" className="center" style={{ width:"130px",height:"170px"}}/>
                    <hr className="center" style={{width:"25%", height:"3px" , backgroundColor:"black"}}/>
                    <p style={{color:"red"}}>¡TU CARRITO ESTA VACIO!</p>
                    <hr className="center" style={{width:"25%", height:"3px" , backgroundColor:"black"}}/>
                    <button onClick={ handleClick } style={{margin:"10px",height:"40px",borderRadius:"10px" ,
                    color:"white" ,backgroundColor:"blue"}} >Regresa al Inicio</button>
                </div>
            </div>    
            }

            </main>
            <Footer //insertamos footer 
            />
        </div>      )
        : <div class="min-h-screen flex flex-col">
            <Navbar // insertamos barra de navegacion
            />
              <main className="flex-1">
                <Box/>
              </main> 
            <Footer //insertamos footer 
            />
        </div>
    )
}

