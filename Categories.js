import React, { useState } from 'react'
import Pagination from './Pagination';



function Categories(props) {

const [filterproduct,setFilterProduct]=useState([])

//pagination
    let [currentPage,setCurrentPage]=useState(1)
    let [itemsPerPage,setItemsPerPage]=useState(4)


    let indexOfLastDish = currentPage * itemsPerPage ;
    let indexOfFirstDish = indexOfLastDish - itemsPerPage;

    let showTheseProducts = filterproduct.slice(indexOfFirstDish,indexOfLastDish)

    function FilterdProducts(product)
    {
        let filter_Product=props.allproduct.filter((item,index)=>{
            return item.category==product
        }).map((pdt)=>{
            return(
                <li className='catgry-product'>
                    <img src={pdt.image} style={{}}></img><br></br>
                     <h4>{pdt.title}</h4>
                     <h3> $. {pdt.price}</h3>
                </li>
            )
        })
        setFilterProduct(filter_Product)

        console.log( props.limitproduct)
    }

//    let firstcategory=props.limitproduct.map((pdt)=>{
//     return(
//         <li className='catgry-product'>
//             <img src={pdt.image} style={{}}></img><br></br>
//              <h4>{pdt.title}</h4>
//              <h3> $. {pdt.price}</h3>
//         </li>
//     )

//    })
 
    let category=props.allcatagories.map((item,index)=>{
        return(
            <li onClick={()=>{FilterdProducts(item)}}>{item}</li>
        )
    })

  return (
        <div className=''>
            <hr></hr>
            <ul className='cat-list'>
            {category}
            </ul>
            <ul>
                {showTheseProducts.length!=0?showTheseProducts:<h1 className='warning'>Please select yout category....</h1>}
            </ul>
            <Pagination
                    filterproduct={filterproduct}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />           



        <hr />
        </div>

  )
}

export default Categories