import React from 'react'
import "./Containerbox.css"
const Containerbox = ({img,desc,oldprice,newprice}) => {
  return (
    
        <div class="card">
  <img class="card-img-top" src={img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{desc}</h5>
    <p class="ab card-text">${oldprice}</p>
    <b class="card-text">${newprice}</b><br/>
    <a href="#" class="btn btn-danger">Add to cart</a>
  </div>
</div>

 
    
  )
}

export default Containerbox;