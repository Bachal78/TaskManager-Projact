"use client"

import { useState } from "react";

const Button=()=>{
    //Hook: useState (use for intercaty)
    const [count, setCount]=useState(0)  //setterfunction
    

    const handleClick=()=>{
        setCount(count+1)
    };
    return(
        <div>
        <button onClick={(handleClick)} className="bg-red-600 text-white p-4 rounded-md">Click</button>
        <p>count:`${count}`</p>
        </div>
    )
}

export default Button