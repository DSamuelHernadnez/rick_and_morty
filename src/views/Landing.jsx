import { useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate =  useNavigate()
    return(
        <>
        <div>
            <h1> Bienvenidos a la Landing Page</h1>
        </div>
        <button onClick={()=> navigate("/home") }>Ingresar</button>
        </>
    )
}
export default Landing