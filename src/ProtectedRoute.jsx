import React from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom';
function ProtectedRoute({children}) {
    const auth= useAuth();
    if(auth.user){
        return children
    }else{
        return <Navigate to='/blog-site-login' />
    }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute