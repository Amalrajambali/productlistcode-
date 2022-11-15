import React, { useState } from 'react'
import Pagination from './Pagination'
import Popup from './Popup'


function ProductList(props) {


let[showPopup,setShowPopup]=useState(false)
let[currentProduct,setCurrentProduct]=useState()



//pagination
let [currentPage,setCurrentPage]=useState(1)
let [itemsPerPage,setItemsPerPage]=useState(6)


let indexOfLastDish = currentPage * itemsPerPage ;
let indexOfFirstDish = indexOfLastDish - itemsPerPage;



let filterproduct=props.allproduct.map((items,index)=>{
    return(
        
        <>
            <li style={{"margin-top": "90px"}} onClick={()=>{showPopUpHandler(items.title)}}>
            <img src={items.image} style={{}}></img><br></br>
            <h3>{items.title}</h3>
            </li>

        </>
    )
})


let showTheseProducts = filterproduct.slice(indexOfFirstDish,indexOfLastDish)



//lets show the popup
function showPopUpHandler(productname)
{
    setShowPopup(true)
    setCurrentProduct(productname)
}

//lets close the popup
function ClosePopUpHandler()
{
    setShowPopup(false)
}



  return (
    <div className='main-container'>
        {showPopup && <Popup ClosePopUpHandler={ClosePopUpHandler} currentProduct={currentProduct} allproduct={props.allproduct}/>} 
        <div className='herostyle'> 
           <h2 className='caption'>
           𝓛𝓲𝓯𝓮 𝓲𝓼 𝓷𝓸𝓽 𝓹𝓮𝓻𝓯𝓮𝓬𝓽 𝔀𝓲𝓽𝓱𝓸𝓾𝓽 𝓼𝓱𝓸𝓹𝓹𝓲𝓷𝓰
           </h2>
        </div>
        <h1>𝓢𝓱𝓸𝓹 𝓽𝓲𝓵𝓵 𝔂𝓸𝓾 𝓭𝓻𝓸𝓹!</h1>
        <h5>Click the product to see more details...</h5>
        <ul>
           {showTheseProducts}
        </ul>

        <Pagination
                    filterproduct={filterproduct}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />  
     
        
    </div>
  )
}

export default ProductList