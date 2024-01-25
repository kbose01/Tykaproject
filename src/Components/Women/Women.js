import React from 'react';
import data from '../Data/Data';
import Containerbox from '../Containerbox/Containerbox';
import Footer from '../Footer/Footer';

const Women = () => {
  return (
    <div>
       <div className='hai'>
      {
      data.map((datas,index)=>(
        <Containerbox key={index} img={datas.img} desc={datas.desc} oldprice={datas.oldprice} newprice={datas.newprice}/>

      ))
      }
      </div>
      <Footer/>
      </div>
  )
}

export default Women;