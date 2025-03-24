import React from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import './index.css';
import { Next, Privious } from "../../res/Icons/Icon";
import { useNavigate } from "react-router-dom";
import { productdata } from "../Product/data";

const AllProduct = () => {
    const [users,setUsers] = useState(productdata.slice(0,1000));
    const [pageNumber,setPageNumber] = useState(0);

    const usersperpage = 8;
    const pagesVisited = pageNumber * usersperpage;

    const pageCount = Math.ceil(users.length / usersperpage);

    const changePage = ({selected}) => {
        setPageNumber(selected)

    }

    const navigate = useNavigate();
  
    const goNavigate = (e, url) => {
      e.preventDefault()
      window.scrollTo(0,0);
      navigate(url)
    };

   const displayUsers = users.length && users.slice(pagesVisited, pagesVisited + usersperpage).map((productdata,index) => {
        return (

                <div className="productBox  " key={`productdata_${productdata},${index}`}>
                    <div className="flex col" >
                        <img src={productdata?.productimg} alt="" />
                        <div className="flex col gap-2 text-left p-1">
                        <div className="product-name flex col gap-1 ">
                        <p>{productdata?.productname}</p>
                        <span>{productdata?.productweight}</span>
                        </div>
                        <h6>{productdata?.productOwner}</h6>
                        <div className="productCase flex row gap-1 middle">
                            <span className="flex row">Rs.<div>{productdata?.productamount}</div></span>
                            <p>{productdata?.productcaseback}</p>
                        </div>
                        <button onClick={(e)=>goNavigate(e, `/productdata/${productdata.id}`)}>Buy Now</button>
                        </div>
                        </div>   
                       
                    </div>
                 
                     
                 
        )
   })
   return(
      
      <div className="container h-full flex col gap-4 center middle  ">
        <div className="container allproduct flex row gap-3 wrap  center ">
        {displayUsers}</div><div className="flex-1"></div> <ReactPaginate
        previousLabel = {<Privious />}
        previousClassName={"previous"}
        nextLabel={<Next />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationbttn"}
        previousLinkClassName={"previousbttn"}
        nextLinkClassName={"nextbttn"}
        disabledClassName={"paginationDisable"}
        activeClassName={"pagitationActive"}
        />
      </div>
    ) 
 }
export default AllProduct