import { useState, useContext } from "react"
import UserContext from "../context/userContext"

function Login() {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);  
    // setUser is the method from object that we created in the userContextProvider...

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser( Username, Password );
    }

    return (
        <>
          Login Here!
          <input type="text" 
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username" />
          <input type="text" 
          value={Password}
          onChange={(e) => {setPassword(e.target.value)}}
          placeholder="Enter Password" />
          <button onClick={HandleSubmit}> Submit </button>
        </>
    )
}

export default Login;