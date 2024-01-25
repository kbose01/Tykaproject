import React from 'react'
import dataone from '../Data/Dataone';
import Containerbox from '../Containerbox/Containerbox';
import Footer from '../Footer/Footer';
import "./Men.css";
const Men = () => {
  return (

    <div>
      <div className='hai'>
        
      
     
       {
      dataone.map((datas,index)=>(
        <Containerbox key={index} img={datas.img} desc={datas.desc} oldprice={datas.oldprice} newprice={datas.newprice}/>

      ))
      }
      <Footer/>
    </div>
    </div>
  )
}

export default Men;