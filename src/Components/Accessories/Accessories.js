import React from 'react'
import Containerbox from '../Containerbox/Containerbox';
import datatwo from '../Data/Datatwo';
import Footer from '../Footer/Footer';

const Accessories= () => {
  return (
    
    <div>
      <div className='hai'>
      {
    datatwo.map((datas,index)=>(
    <Containerbox key={index} img={datas.img} desc={datas.desc} oldprice={datas.oldprice} newprice={datas.newprice}/>
    ))
    }
    <Footer/>
    </div>
    </div>
    
  )
}


export default Accessories;