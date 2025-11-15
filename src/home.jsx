import { useNavigate } from "react-router-dom";

export function Home(){
    const navigate = useNavigate();
    function goToHeader(){
        navigate('/header')
    }

    return(
        <div>
            <h1>This is Homepage</h1>
            <button onClick={goToHeader}>Header</button>
        </div>
    )
}