import { useContext } from "react";
import { MyContext } from "./App";

export function Description(){
    const data = useContext(MyContext)
    
    return(
        <>
        <h1>Description</h1>
        <p>{data}</p>
        </>
    )
}