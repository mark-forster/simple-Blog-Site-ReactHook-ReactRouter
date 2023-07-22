import './App.css';
import Navbar from './component/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Auth/Login';
import Create from './pages/createblogs/Create';
import About from './pages/about/About';
import { BlogProvider } from './context/BlogContext';
import Home from './pages/home/Home';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
// import Login from './pages/auth/Login';

function App() {
  return (
    <BlogProvider>
        <AuthProvider>
        <Navbar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog-site-login' element={<Login />} />

          <Route path='/create'
           element={<ProtectedRoute>
            <Create />
            </ProtectedRoute>}
            >
            </Route> 

          <Route path='/about' element={<About />}></Route>
      </Routes>
        </AuthProvider>
    </BlogProvider>
  );
}

export default App;
