import "./myListing.css";
import Header from "../../Components/Heater/header";
import Footer from "../../Components/Footer/footer";
// import user from "./Components/AllProduct/allData.json";
import { productdata } from "../../Components/Product/data";
import { Edit } from "../../res/Icons/Icon";
import React, { useState } from 'react';

const MyListing = () => {
    const [cardDataList, setCardDataList] = useState([...productdata])

    const deleteSection = (index) => {
        const deleteData = [...cardDataList];
        deleteData.splice(index,1);
        setCardDataList(deleteData);
       }
    return(
        <div>
            <Header />
            <div className="myListing container px-2 flex py-4 col gap-3">
                <h1>My Listing</h1>
                <div className="flex row wrap gap-2 center">
                {cardDataList && cardDataList.length && cardDataList.map((productdata,index) => (
                <div className="productBox  " key={`productdata_${productdata},${index}`} 
                dataList={cardDataList}
                setDataList={setCardDataList}
                index={index}
                data={productdata}
                >
                    <div className="flex col" >
                        <div className="relative">
                        <img src={productdata?.productimg} alt="" />
                        </div>
                        <div className="Edit"><button><Edit /></button></div>
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
                        <button onClick={()=>deleteSection(index) }>Delete</button>
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