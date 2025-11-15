import { useNavigate } from "react-router-dom";

export function Header(){
    const navigate = useNavigate();
    function goToHome(){
        navigate('/home')
    }

    return(
        <div>
            <h1>This is Header</h1>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}