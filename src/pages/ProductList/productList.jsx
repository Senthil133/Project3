import React from "react";
import { useState } from "react";
import "./productList.css";
import Header from "../../Components/Heater/header";
import Footer from "../../Components/Footer/footer";
import Product from "../../Components/Product";
import image from "../../res/Images/placeholder.png";
import { Add, Like, Share, Sub } from "../../res/Icons/Icon";
import { useParams } from "react-router-dom";
 import { productdata } from "../../Components/Product/data";

const ProductList = () => {
    let {productdataId} = useParams()

    const product = productdata.find((p)=>p.id == productdataId)

   
  
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //   setCount(function (prevCount) {
    //     return (prevCount += 1);
    //   });
    // }
  
    // const  decrement = ()  => {
    //   setCount(function (prevCount) {
    //     if (prevCount > 0) {
    //       return (prevCount -= 1); 
    //     } else { 
    //       return (prevCount = 0);
    //     }
    //   });
    // }
    const [active, setActive] = useState(false);
        const handleClick = () => {
            setActive(!active);
        };
    return(
        <div >
         <Header />
         <div className="container  px-2 py-4 flex r col gap-4">
       
            <div className="productList flex row gap-4 "  >
                <div className="listImage flex row  gap-2">
                    
                    <div className="productListImage2 flex col gap-1 middle center">
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    </div>
                    <div className="productListImg col wrap ">
                    <img src={image} alt="" />
                    </div>
                </div>
                <div className="imageDetails  flex col gap-2">
                    <div className="flex row ">
                        <span className="fw-500 fs-28">{product?.productname}({product?.productweight})</span>
                        <div className="flex-1"></div>
                        <div className="flex row gap-1">
                            <button className="like" onClick={handleClick}
                             style={{ color: active ? "#F46B5B" : "white" ,width:"24px",height:"24px"}} ><Like /></button>
                            <button style={{width:"24px",height:"24px"}}><Share /></button>
                        </div>
                    </div>
                    <div className="owner">
                    <h6 className="fw-400 fs-14"> by  <span>{product?.productOwner}</span></h6> 
                    </div>
                    <div className="productCase flex row gap-6 middle">
                    <div className="flex row">Rs.<span>{product?.productamount}</span></div>
                    <p>{product?.productcaseback}</p>
                </div>
                {/* <div className="addItem flex row gap-2">
                    <div className="subBox flex middle center" onClick={decrement}><Sub /></div>
                    <span className="flex middle center">{count}</span>
                    <div className="addBox flex middle center" onClick={increment}><Add /></div>

                </div> */}
                <div className="chat flex roe gap-1">
                    <button className="chatButton">Chat</button>
                    <button className="callButton">Call</button>

                </div>
                <div><hr></hr></div>
                <div className="discription">
                    <p>{product?.productdescription}</p>
                </div>
                
                </div>
            </div>
    
            <div className="homeproduct flex col gap-4 py-4  ">
                    <div className="flex row">
                        <h2 className="fw-500 fs-24">Organic Fruits, Veggies & Greens</h2>
                        <div className="flex-1"></div>
                        <span  className="seeMore">see more</span>
                    </div>
                    <div className="homeProductItem">
                        <Product />
                    </div>

                </div>
         </div>
         <Footer />
        </div>
    )
}

export default ProductList