

function Popup({ClosePopUpHandler,currentProduct,allproduct}) {
 
// function ClosePopUpHandler()
// {
//   props.setShowPopup(false)
// }
 console.log(allproduct)

 
  let productDetails=allproduct.filter((item)=>{
      return item.title===currentProduct
  }).map((item)=>{
    return(
      <div className='popup-content-data'>

        <div className='popup-header'>
          <img src={item.image}></img>
        </div>
        <div style={{"display":"flex"}}>
        <h5 className='popup-header-item'>{item.category}</h5>
        <h4 style={{"margin-left": "89px","padding-top": "13px","color":'red'}}>Rating : {item.rating.rate}/5</h4> 
        </div>
        <h3 className="price">Price :{item.price}</h3> 
        <h2>{item.title}</h2>
        <p style={{"fontSize":"15px"}}>{item.description}</p>
        
      </div>
    )

  })

  
//render
  return (
    <div className='popup'>
        <div className="popup-content">

             {productDetails}

            <button>Order now</button>
            <h5 className='popup-close' onClick={ClosePopUpHandler}>close</h5>
        </div>
    </div>
  )
}

export default Popup 