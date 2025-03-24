import "./myWishList.css";
import React, { useState } from 'react';
import Header from "../../Components/Heater/header";
import Footer from "../../Components/Footer/footer";
// import user from "./Components/AllProduct/allData.json";
import { productdata } from "../../Components/Product/data";
import { Delete } from "../../res/Icons/Icon";
import { useNavigate } from "react-router-dom";

const MyListing = () => {
    const [cardDataList, setCardDataList] = useState([...productdata])
    const navigate = useNavigate();
  
    const goNavigate = (e, url) => {
      e.preventDefault()
      window.scrollTo(0,0);
      navigate(url)
    };
  

    const deleteSection = (index) => {
        const deleteData = [...cardDataList];
        deleteData.splice(index,1);
        setCardDataList(deleteData);
       }
    return(
        <div>
            <Header />
            <div className="myWishList container px-2 flex py-4 col gap-3">
                <h1>My wishlist</h1>
                <div className="flex row wrap gap-2 center">
                {cardDataList && cardDataList.length && cardDataList.map((productdata,index) => (
                <div className="productBox  " key={`productdata_${productdata},${index}`} dataList={cardDataList}
                setDataList={setCardDataList}
                index={index}
                data={productdata}>
                    <div className="flex col" >
                        <div >
                        <img src={productdata?.productimg} alt="" />
                        </div>
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
                        <div className="flex row gap-1">
                        <button onClick={(e)=>goNavigate(e, `/productdata/${productdata.id}`)}>Buy Now</button>
                       <div className="Delete" > <button onClick={()=>deleteSection(index) } ><Delete /></button></div>
                        </div>
                        </div>
                        </div>   
                       
                    </div>  
    ))}
</div>
            </div>

            <Footer />
        </div>
    )
}

export default MyListing