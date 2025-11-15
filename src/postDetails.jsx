
import { useParams } from "react-router-dom"

export function Details(){
    const {id} = useParams();
    return(
              <>
        <h1>post details</h1>
        <h3>post id : {id} </h3>
        </>
    )

}
