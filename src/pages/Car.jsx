import Box from "../components/Loading_box"
import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
import { useState } from 'react';

function requestCar() {
    return true;
}

export default function Car(){
    
    let variableList = [];
  
    for(let i = 1; i <= 5; i++){
      const [count, setCount] = useState(0);
      variableList.push([count, setCount]);
    }

              
    return (
        <div class="min-h-screen flex flex-col">
            <Navbar // insertamos barra de navegacion
            /> 
            <main className="flex-1">

            {requestCar()? // si tenemos datos de la request de la api rest muestra el siguiente div
            <div class="contenedor">
             <div class="izquierda" style={{width:"70%"}}>Div izquierdo
             
             {variableList.map((item, index) => ( // iteramos el comonente card segun el numero de contadores
              <Card key={index} count={item[0]} setCount={item[1]} />
))}

             </div>
             <div class="derecha" style={{width:"30px"}}>
                
                factura {variableList[3][0]} 
             
             
             </div>
           </div>
           
            :
                           // si no muestra el siguiente div
            <div>
                <Box /> 
            </div>    
            }

            </main>
            <Footer //insertamos footer 
            />
        </div>      
    )
}

