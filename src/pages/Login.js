import axios from 'axios'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showWrongCredentials, setWrongCredentials] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin = async () => {
    setLoading(true);
    try{
      // // Wrong Credentials
      // setWrongCredentials(false);
      // // Login
      // const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/login/`, {}, 
      // { auth: { username, password} })

      // // Store user
      // localStorage.setItem('user', JSON.stringify(response.data) );
      
      // Navigate to dashboard
      navigate("/dashboard");
    }catch(e){
      console.log("login failed")
      // wrong credentials
      setWrongCredentials(true)
    }
    setLoading(false);
  }

  const onKeyUp = (e) => {
    if(e.key === 'Enter') onLogin()    
  }

  return <main className="d-flex vh-100 justify-content-center align-items-center">

    <div>
      <div className='bg-white d-flex justify-content-center align-items-center flex-column p-3' style={{ height: "100px"}}>        
        <img src={logo}  className='h-100' alt=''/>
      </div>
      <div className="mb-3 mt-3">
        <b>Email</b>
        <input type="email" className="form-control mt-2" placeholder="Please enter your username" 
          onChange={(e) => setUsername(e.target.value)}  onKeyUp={(e) => onKeyUp(e)}/>
      </div>
      <div className="mb-3">
        <b>Password</b>
        <input type="email" className="form-control mt-2" placeholder="Please enter your password" 
          onChange={(e) => setPassword(e.target.value)} onKeyUp={(e) => onKeyUp(e)}/>
      </div>
      <button type="button" className="acclaim-button btn btn-primary w-100 d-flex justify-content-center align-items-center"
        onClick={() => onLogin()}>
        <span>Login</span>
        {loading?
        <div className="spinner-border spinner-border-sm ms-2" role="status" />
        :null}
      </button>

      {showWrongCredentials?
      <div class="alert alert-danger mt-3" role="alert">
        <div>Something goes wrong</div>
        <small>An error occurred. Please try again later</small>
      </div>
      :null}



    </div>
  </main>
}