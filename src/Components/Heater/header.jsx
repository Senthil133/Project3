import React from "react";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import "./header.css";
import { categorydata } from "../../pages/CreateListing/categorydata";
import { Categories, DropDown, Language, Like, Search, User,Location,Close } from "../../res/Icons/Icon";

const Header = () => {

    const [collapse, setCollapse] = useState("");
    const navigate = useNavigate();
  
    const goNavigate = (e, url) => {
      e.preventDefault()
      window.scrollTo(0,0);
      navigate(url)
    };

    const toggleSection = (e) => {
        if(collapse === "open") setCollapse("")
         else setCollapse("open") 
     }

    return(
       <div className="Header">
        <div className="topHeader ">
            <div className="container py-2 px-2 flex gap-4 middle">
            <div className="logo">
                <button onClick={(e)=>goNavigate(e, "/")}><span>FURREX</span></button>
            </div>
            <div className="Location flex row gap-1"><Location /><input placeholder="Brazil, Rio De Janeiro" /></div>
            <div className="Search flex middle row gap-1 px-2 py-2" ><Search /> <input placeholder="search" /></div>
            <div className="flex row gap-2">
                <Language />
                <span>English</span>
                <DropDown />

            </div>
            <button onClick={(e)=>goNavigate(e, "/myWishList")} style={{color:"#F46B5B"}}><Like /></button>
            <button className="LoginButton" onClick={(e)=>goNavigate(e, "/createAccount")}>Login</button>
            <button  onClick={(e)=>goNavigate(e, "/admin")}><User /></button>
            </div>

        </div>
        <div className="bottomHaeder  ">
            <div className="container flex  py-2 px-2">
            <div className="flex gap-4">
                <button className="flex row gap-1 middle center"><Categories /> All Categories</button>
                <button>Blog</button>
                <button onClick={(e)=>goNavigate(e, "/contact")}>Contact Us</button>
            </div>
            <div className="flex-1"></div>
            <div className="flex gap-4">
                <button onClick={(e)=>goNavigate(e, "/myListing")}>My Listing</button>
                <button onClick={() => toggleSection() }  className="sell">SELL</button>
                
            </div>
            </div>
        </div>
        <div className={`catBox ${collapse}`}>
                    <div className="catContainer flex middle center">
                    <div className="categoriesCon flex middle center">
        <div className="categories flex col gap-4">
            <div className="flex ">
                <span>Choose a Category</span>
                <div className="flex-1"></div>
                <button onClick={() => toggleSection() } ><Close /></button>
            </div>
            <div className="categoriesBox flex row wrap gap-4">
                {categorydata && categorydata.length && categorydata.map((categorydata,index)=>(
                   <button onClick={(e)=>goNavigate(e, `/categorydata/${categorydata.categoryname}`)} className="Box flex middle center" key={`categorydata_${index}${categorydata}`}>
                   <span>{categorydata?.categoryname}</span>
               </button>
                ))}
               
            </div>

        </div>
        </div>
                    </div>
                </div>
       </div>
    )
}

export default Header