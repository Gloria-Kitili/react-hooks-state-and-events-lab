import React,{useState} from "react";

function Item({name,category}){
  const[inCart,setClassName]=useState(false)

  const AddedToCart =() =>{
    setClassName(()=> !inCart)
  }
  return(
    <li className = {AddedToCart ? 'in-Cart':''}>
      <span>{name}</span>
    <span className = 'category'> {category} </span>
    <button className = 'add' onClick ={AddedToCart}> 
    {AddedToCart ? 'Add to' : 'Remove From'}
    </button>
    </li>
  )
}

/*function Item({ name, category }) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}*/

export default Item;
