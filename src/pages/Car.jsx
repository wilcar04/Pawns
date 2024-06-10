import Box from "../components/Loading_box"
import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
import { useState,useEffect } from 'react';
import Checkout from "../pages/checkout"
import { Navigate } from "react-router-dom";
import {getCarStorageItem,setCarStorageItem,removeCarStorageItem} from "../components/carrostorage"
const handleClick = () => {
    window.location.href = "/";
  };
  



export default function Car(){
    const [Productlist, setProductlist] = useState(JSON.parse(getCarStorageItem()));

    const calculateSubTotal = () => {
      let subTotal = 0;
      Productlist.forEach(item => {
        subTotal += parseInt(item[2]);
      });
    
      return subTotal;
    };
    
    
    const calculateIva = () => {
      const subTotal = calculateSubTotal();
      const iva = subTotal * 0.19;
    
      return iva;
    };
    
    const calculateOrderTotal = () => {
      const subTotal = calculateSubTotal();
      const iva = calculateIva();
      const orderTotal = subTotal + iva;
    
      return orderTotal;
    };


    useEffect(() => {
      const intervalId = setInterval(() => {
        setProductlist(JSON.parse(getCarStorageItem()));
      }, 100);
  
      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }, []);    

    const [NetwordPlayed, setLoading] = useState(false);

    function requestCar() {
     if ((getCarStorageItem())===(JSON.stringify([]))) {
      return false
     }else{return true}
  }
  ;

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
        
        <div className="min-h-screen flex flex-col">
            <Navbar // insertamos barra de navegacion
            /> 
            <main className="flex-1">
            {requestCar()? // si tenemos datos de la request de la api rest muestra el siguiente div
            <div className="contenedor">
              <label></label>
             <div className="izquierda" style={{width:"70%"}}>
             
             {Productlist.map((item, index) => ( // iteramos el componente card segun el numero de contadores
              <Card key={index} Pdprofile={Productlist[index]} />
))}

             </div>
             <div className="derecha" style={{width:"30px"}}>
            <div className="card " style={{backgroundColor:"white",borderColor:"purple",border:"2px solid purple"}}// creamos la card que envuelve la imagen izquierda y texto derecha
             > 
             <div className='contenedor' style={{margin:"10px"}}> </div>
             <div className='contenedor' style={{margin:"20px"}}> <p style={{textAlign:"left"}}>TU COMPRA</p> </div>
             <div className='contenedor' style={{margin:"10px",marginLeft:"20px"}}> <p style={{textAlign:"left",color:"grey"}} className='izquierda'>Sub Total</p> <p className='derecha'>{calculateSubTotal()}</p></div>
             <hr className="center" style={{width:"90%", height:"3px" , backgroundColor:"grey"}}/>
             <div className='contenedor' style={{margin:"10px",marginLeft:"20px"}}> <p style={{textAlign:"left",color:"grey"}} className='izquierda'>Descuentos Aplicables</p> <p className='derecha'>0.00</p></div>
             <hr className="center" style={{width:"90%", height:"3px" , backgroundColor:"grey"}}/>
             <div className='contenedor' style={{margin:"10px",marginLeft:"20px"}}> <p style={{textAlign:"left",color:"grey"}} className='izquierda'>Iva</p> <p className='derecha'>{calculateIva()}</p></div>
             <hr className="center" style={{width:"90%", height:"3px" , backgroundColor:"grey"}}/>
             <div className='contenedor' style={{margin:"10px",marginLeft:"20px"}}> <p style={{textAlign:"left"}} className='izquierda'>ORDEN TOTAL</p> <p className='derecha'>{calculateOrderTotal()}</p></div>
             <button onClick={() =>{""}} style={{margin:"10px",minHeight:"60px",minWidth:"170px",borderRadius:"10px" ,
              color:"white" ,backgroundColor:"darkblue"}} >PAGAR</button>
             </div>

             
             
             </div>
           </div>
           
            :
                           // si no muestra el siguiente div
            <div>
                <div>  
                    <img src="box.svg" className="center" style={{ width:"130px",height:"170px"}}/>
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
        : <div className="min-h-screen flex flex-col">
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

