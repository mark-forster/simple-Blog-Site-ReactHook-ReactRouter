import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Navbar.module.css'
function Navbar() {
  const auth= useAuth();
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <h1 className={styles.header}> <Link to="/" >Blog Site</Link></h1>
        <nav className={styles.navbar}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to='create'>Create</NavLink>
            {
              auth.user ? <button onClick={auth.logout} style={{
                color: '#fffffe',
                background:"#6346ea",
                borderRadius: "5px",
                padding: " 10px 10px",
                border: "none"

              }}>Logout</button>:
              <NavLink to='blog-site-login'>Login</NavLink>
            }
        </nav>
        </div>
    </div>
  )
}

export default Navbar