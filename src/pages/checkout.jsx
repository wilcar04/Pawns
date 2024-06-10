import Box from "../components/Loading_box"
import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
import { useState,useEffect } from 'react';
import {getCarStorageItem,setCarStorageItem,removeCarStorageItem} from "../components/carrostorage"

const handleClick = () => {
    window.location.href = "/";
  };
  
function requestCar(bol) {
    return bol;
}
;


export default function Checkout(){
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

    
    const [NetwordPlayed, setLoading] = useState(false);
    const [payed, setpayed] = useState(true);
    const pays = () => {
      setpayed(false);
    };
    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 1000); // Simulando una carga de datos
    }, []);
      
    return (

      NetwordPlayed?  (
        
        <div className="min-h-screen flex flex-col">
            <Navbar // insertamos barra de navegacion
            /> 
            <main className="flex-1">
            {payed? // si tenemos datos de la request de la api rest muestra el siguiente div
            <div style={{margin:"30px"}} className="contenedor">
             <div className="izquierda" style={{width:"70%"}}>


             <label style={{fontWeight:"bold",marginRight:"auto",fontSize:"30px"}} > Checkout  </label>
             <br></br>
             <label style={{fontWeight:"500"}} >Detalles de la facturacón</label>
             <br></br>
             <br></br>

             <div style={{width:"50%"}} className="contenedor">
              
             <div style={{marginLeft:"10%"}} className="izquierda" >
             <label style={{fontWeight:"500"}}>Nombres<label style={{color:"red"}}>*</label></label>
             <input id="nombre" style={{width:"220%",borderRadius:"40px",borderColor:"grey",border:"2px solid grey"}}  ></input>
             </div>
             
             <div style={{marginLeft:"60%"}}  className="derecha" >
             <label style={{fontWeight:"500"}}>Apellidos<label style={{color:"red"}}>*</label></label>
             <br></br>
             <input id="apellido" style={{width:"220%",borderRadius:"40px",borderColor:"grey",border:"2px solid grey"}}  ></input>
             </div>
             
             </div>
             <br></br>
             <br></br>

             <label style={{fontWeight:"500"}}>Departamento <label style={{color:"red"}}>*</label></label>
       
             <br></br>
             <select style={{width:"90%",borderColor:"grey",border:"2px solid grey"}} name="departamentos_colombia"> 
             <option value="Bogotá">Bogotá</option> 
             <option value="Antioquia">Antioquia</option> 
             <option value="Valle del Cauca">Valle del Cauca</option> 
             <option value="Atlántico">Atlántico</option> 
             <option value="Cundinamarca">Cundinamarca</option> 
             <option value="Santander">Santander</option> 
             <option value="Nariño">Nariño</option>
             <option value="Caldas">Caldas</option> 
             <option value="Tolima">Tolima</option> 
             <option value="Meta">Meta</option> 
             </select>
             <br></br>
             <br></br>

             <label style={{fontWeight:"500"}}>Dirección <label style={{color:"red"}}>*</label></label>
             <br></br>
             <input id="Dir" style={{borderRadius:"40px",width:"90%",borderColor:"grey",border:"2px solid grey" ,value:"Calle,Avenida,etc"}}  />
             <br></br>
             <br></br>
             <input id="Dir_ext" style={{borderRadius:"40px",width:"90%",borderColor:"grey",border:"2px solid grey",value:"apto,numero de apt,edificio,etc"}}  />
             <br></br>
             <br></br>


             <label style={{fontWeight:"500"}}>Municipio/Ciudad <label style={{color:"red"}}>*</label></label>
             <br></br>
             <input id="municipio" style={{borderRadius:"40px",width:"90%",borderColor:"grey",border:"2px solid grey"}}  ></input>
             <br></br>
             <br></br>

             <label style={{fontWeight:"500"}}>Codigo Postal</label>
             <br></br>
             <input id="codP" style={{borderRadius:"40px",width:"90%",borderColor:"grey",border:"2px solid grey"}}  ></input>
             <br></br>
             <br></br>

             <label style={{fontWeight:"500"}}>Número de teléfono</label>
             <br></br>
             <input id="telefono" style={{borderRadius:"40px",width:"90%",borderColor:"grey",border:"2px solid grey"}}  ></input>
             <br></br>
             <br></br>

             <label style={{fontWeight:"500"}}>Correo electrónico</label>
             <br></br>
             <input id="email" style={{borderRadius:"40px",width:"90%",borderColor:"grey",border:"2px solid grey"}}  ></input>
             <br></br>
             <br></br>

             <div  style={{width:"100%",marginLeft:"30%"}} className="contenedor">
              
             <input id="terminos" type="checkbox"   ></input>

             <label style={{fontWeight:"500"}}>Acepto Terminos y Condiciones<label style={{color:"red"}}>*</label></label>
              
             </div>
             <br></br>
             <br></br>

             <label style={{fontWeight:"500",fontSize:"22px"}}>Información Adicional</label>
             <br></br>
             <label style={{fontWeight:"500"}}>Notas Adicionales</label>
             <br></br>
             <input id="notes" style={{borderRadius:"40px",height:"20%",width:"90%",borderColor:"grey",border:"2px solid grey"}}  ></input>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>


             </div>



             <div className="derecha" style={{width:"30px"}}>

             <div className="card " style={{backgroundColor:"white",borderColor:"purple",border:"2px solid purple"}}>
             <label style={{fontWeight:"500",fontSize:"25px"}} >Método de Entrega</label>
             <br></br>
             <label style={{fontWeight:"300"}} >Seleciona su metodo de pago de envio preferido para usar en esta orden</label>
             <br></br>
             <br></br>

              
             <label style={{fontWeight:"500"}}>Envio gratis{ <label style={{color:"red"}}>*</label>}</label>
             <br></br>
             <label style={{fontSize:"10px"}}>Recibira su envio sin ningun costo extra, cada producto goza de su propio tipo de envio </label>             
             <br></br>
             <label style={{fontWeight:"500"}}>Envio estandar<label style={{color:"red"}}>*</label></label>
             <br></br>
             <label style={{fontSize:"10px"}}>Envio Recibira su envio con el costo extra definido por el vendedor, cada producto goza de su propio tipo de envio</label>
             <br></br>
             <br></br>
             </div>

             
             <div className="card " style={{backgroundColor:"white",borderColor:"purple",border:"2px solid purple"}}>

             <label style={{fontWeight:"500",fontSize:"25px"}}>Método de Pago </label>
             <br></br>
             <label >Selecione el metodo de pago preferido para usar en esta orden </label>
             <br></br>
             <br></br>
             <label style={{fontWeight:"500"}}>Tarjeta de debito/Credito <label style={{color:"red"}}>*</label></label>
             <br></br>
             <label  >Nequi</label>
             <br></br>
             <label  >PSE</label>             
             <br></br>
             <br></br>
             <input id="card" style={{borderRadius:"40px",borderColor:"grey",border:"2px solid grey"}}  ></input>
             <div style={{width:"50%"}} className="contenedor">
              
             <div style={{marginLeft:"10%",marginRight:"10%"}} className="izquierda" >
              <br></br>
             <input id="fecha_card" style={{width:"430%",borderRadius:"40px",borderColor:"grey",border:"2px solid grey"}}  ></input>
             </div>
             
             <div style={{marginLeft:"60%"}}  className="derecha" >
             <br></br>
             <input id="secure_card_code" style={{width:"900%",borderRadius:"40px",borderColor:"grey",border:"2px solid grey"}}  ></input>
             </div>
      
             </div>
             <br></br>
             </div>

             <div className="card " style={{backgroundColor:"white",borderColor:"purple",border:"2px solid purple"}}>
             <img src="../../public/box.svg" className="center" style={{ width:"130px",height:"170px"}}/>
             <label  >{(Productlist.length < 1)? ` ${Productlist[0][1]} Y ESTA SIENDO PROCESADO`:` ${Productlist[0][1]} Y OTROS ESTAN SIENDO PROCESADOS` }</label>             
             </div>


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
              <button onClick={ pays } style={{margin:"10px",minHeight:"60px",minWidth:"170px",height:"40px",borderRadius:"10px" ,
                    color:"white" ,backgroundColor:"darkblue"}} >PAGAR</button>     
              </div>
             
             </div>

           </div>
           
            :
                           // si no muestra el siguiente div
            <div>
                <div>  
                    <img src="../../public/box.svg" className="center" style={{ width:"130px",height:"170px"}}/>
                    <hr className="center" style={{width:"25%", height:"3px" , backgroundColor:"black"}}/>
                    <p style={{color:"red"}}>¡Tu Pedido se completo!</p>
                    <br></br>
                    <label>Tu producto {Productlist[0][1]} </label>
                    <br></br>
                    <label>mas los que has indexado ya se encuentran de camino a </label>
                    <br></br>
                    <label> {document.getElementById("Dir").value}</label>
                    <hr className="center" style={{width:"25%", height:"3px" , backgroundColor:"black"}}/>
                    <button onClick={handleClick } style={{margin:"10px",height:"40px",borderRadius:"10px" ,
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

