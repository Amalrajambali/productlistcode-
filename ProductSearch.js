import React from 'react'
import { useState } from 'react'

function ProductSearch(props) {
 
    const [searchPdt,setSearchPdt]=useState("")
    const [searchItem,setSearchItem]=useState("")

    function additem(event)
    {
        setSearchPdt(event.target.value);
        console.log(searchPdt)
    }

    let title=props.allproduct.map((item,index)=>{
        return <option>{item.title}</option>
    })


    function searchRes(value)
    {
        console.log(value)
        let filter_Product=props.allproduct.filter((item,index)=>{
            return searchPdt==item.title
            }
        ).map((pdt)=>{
            return(
                <li className='catgry-product'>
                    <img src={pdt.image} style={{}}></img><br></br>
                     <h4>{pdt.title}</h4>
                     <h3> $. {pdt.price}</h3>
                </li>
            )
        })
        setSearchItem(filter_Product)
    }
    
console.log(searchItem)
  return (
    <div class="wrap">
    <div class="search">
    {/* placeholder="What are you looking for?" name='message' value={searchPdt} onChange={additem}  */}
      <select class="searchTerm" style={{"height":"auto"}} onChange={additem}>
        <option>What are you looking for?</option>
        {title}
        </select> 
      <button type="submit" class="searchButton" onClick={()=>{searchRes(searchPdt)}}>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/search-more.png" style={{"margin-left": "-11px","marginTop":"-7px"}}/>
     </button>
     
   </div>  

   <div style={{"height":"430px"}}>
      <ul>
        {searchItem}
      </ul>
   </div>
    
   </div>
  )
}

export default ProductSearch