import Box from "../components/Loading_box"
import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

function requestCar() {
    return false;
}

export default function Car(){
    return (
        <div class="min-h-screen flex flex-col">
            <Navbar // insertamos barra de navegacion
            /> 
            <main className="flex-1">

            {requestCar()? // si tenemos datos de la request de la api rest muestra el siguiente div
            <div class="contenedor">
             <div class="izquierda" style={{width:"70%"}}>Div izquierdo
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             </div>
             <div class="derecha" style={{width:"30px"}}>factura</div>
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

