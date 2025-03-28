import axios from "axios"
import { useState, useEffect } from "react"

import LongCard from "../component/LongCard";
function LandingPage(){
    const [dataProduct,setDataProduct] = useState([]);
    const [inputBox,setInputBox] = useState("");
    useEffect(()=>{getDataProduct()},[inputBox])
    
    function searchData (value,byLongCard){
        if(byLongCard){
            if (inputBox.split(" ").includes(value)) {return;}
            else setInputBox((prev) => (prev ? `${prev} ${value}` : value));
        }else{setInputBox(value)}
    }

    const getDataProduct = async () =>{
        try{
            console.log(inputBox)
        const response = await axios.get(`http://localhost:4001/trips?keywords=${inputBox}`)
        // console.log(response.data.data)
        setDataProduct(response.data.data)
        }catch(error){console.log("❌")}
    }
    
    return(
    <>
     <section className="flex flex-col justify-center items-center gap-6 pb-10">
        <h1 className="text-blue-500 font-semibold text-3xl mt-10">เที่ยวไหนดี</h1>
        <div className="flex flex-col w-[80%] max-w-2xl">
        <label htmlFor="FindVisit" className=" text-xs" >ค้นหาที่เที่ยว</label>
        <input  id="FindVisit" 
                placeholder="หาที่เที่ยวแล้วไปกัน ..." 
                className="w-full text-center shadow-md rounded text-sm hover:cursor-pointer"
                value={inputBox}
                onChange={(e)=>searchData(e.target.value,false)}  />
        </div>
        {dataProduct.map((item)=>
            <LongCard   key={item.eid} 
                        title={item.title} 
                        eid={item.eid} 
                        url={item.url} 
                        description={item.description} 
                        photos={item.photos} 
                        tags={item.tags}
                        onTagClick={searchData}/> 
    )}

    </section>
    </>
    )
}
export default LandingPage