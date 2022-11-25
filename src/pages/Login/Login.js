import { useContext ,useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
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
      const handleClick= async (e) =>{
        console.log("run")
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/api/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        }catch(err){
            dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
        }
      }
      console.log(user)
    return(
      <div className='login'>
          <div className='login_container'>
               <input type="text" 
               onChange={()=>handleChange}
               placeholder='username' 
               id='username' 
               className='Login_input'/>
               <input type="password" 
               onChange={()=>handleChange}
               placeholder='password' 
               id='password' 
               className='Login_input'/>
               <button onClick={handleClick} className='login_btn'>Login</button>
               {error && <span>{error.message}</span>}
          </div>
      </div>
    )
}
export default Login