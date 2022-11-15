function Pagination(props)
{
    // console.log(props.filterproduct)

           let numberOfPages=[]
           for(let i=1;i<=Math.ceil(props.filterproduct.length/props.itemsPerPage);i++)
           {
               numberOfPages.push(i);     //push method use to Add items to the Array 
           } 

           let pages= numberOfPages.map((pageNumber)=>{
           return (
               <li className="" id={pageNumber} onClick={showNextProductsHandler} >{pageNumber}</li>
           )
           })


           
           function showNextProductsHandler(event)
           {
               console.log(event.target.id)
               let cur_page=event.target.id
               props.setCurrentPage(cur_page)
           }

   //rendering

   return(
       <section>
           <ul className="pagination flex" style={{ "margin-top": "280px"}}>
               {pages}
           </ul>
       </section>

   )
}

export default Pagination;