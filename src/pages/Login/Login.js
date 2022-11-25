import { useContext ,useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import './login.css'
import axios from 'axios'
function Login(){
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
      const {user, loading, error, dispatch } = useContext(AuthContext)
      const handleChange=(e)=>{
        setCredentials(prev=>({
            ...prev,
            [e.target.id]:e.target.value
        }))
      }

      const navigate = useNavigate()

      const handleClick= async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/booking-ui/")
        }catch(err){
            console.log(err)
            dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
        }
      }
    return(
      <div className='login'>
          <div className='login_container'>
               <input type="text" 
               onChange={handleChange}
               placeholder='username' 
               id='username' 
               className='Login_input'/>
               <input type="password" 
               onChange={handleChange}
               placeholder='password' 
               id='password' 
               className='Login_input'/>
               <button disabled={loading}
               onClick={handleClick} className='login_btn'>Login</button>
               {error && <span>{error.message}</span>}
          </div>
      </div>
    )
}
export default Login