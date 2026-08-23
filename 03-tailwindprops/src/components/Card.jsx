import React from "react";

function Card({username, btnText="Visit Me"}){
    console.log(username)
    //Instead of using "username" directly, we can also use "props.username" defining "props" inside Card()
    return(
        <>
            <div className="w-[350px]  my-2 mx-2 bg-[rgba(39, 163, 255, 0.16)] min-h-[450px]" style={{ background:' rgba(39, 163, 255, 0.16)', boxShadow: '0px 14px 37px -10px rgba(179, 179, 179, 0.17)',borderRadius: '34px'}}>
          <img src='/src/assets/Search 1.png' />  
          <h1>{username}</h1>
          <div className="container px-[20px] w-full flex justify-center items-center text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, magnam. Distinctio ipsum saepe iure architecto rerum molestias perspiciatis quae repellendus. Illum architecto blanditiis explicabo mollitia atque rem! Iste, consequatur saepe?
          </div>
          <button className="p-2 my-4 rounded-xl border-2 border-black/70"> {btnText} </button>
        </div>
        
        </>
    )
}

export default Card