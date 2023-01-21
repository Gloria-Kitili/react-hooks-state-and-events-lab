import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,filterCategory] = useState(items)
  
  function SelectedCategory(event){
    const category = event.target.value
    const categoryItems = items.filter ((item)=> item.category === category)
    filterCategory (categoryItems)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {SelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className='Items'>
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  )
}


export default ShoppingList;
