import React, {useState} from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
function Login() {
  const [user, setuser] = useState({username:"", password:""});
  const navigate= useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setuser({...user, [name]:value});
  };
  const auth= useAuth();
  const handleSubmit= (e)=>{
    e.preventDefault();
    auth.login(user);

    navigate("/")
  }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span className={styles.header}>Login</span>
        <form className={styles.loginForm}  onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder='Enter your username' className={styles.loginInput} value={user.username}
            onChange={(e)=>{handleChange(e)}} required />

            <input type="password" name="password" placeholder='Enter your Password' className={styles.loginInput} value={user.password}
            onChange={handleChange} required />

            <button className={styles.loginButton}>LOGIN</button>
        </form>
        </div>

    </div>
  )
}

export default Login