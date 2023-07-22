import React, {useContext} from 'react'
import styles from './Blog.module.css'
import BlogContext from '../../context/BlogContext'
import { useAuth } from '../../context/AuthContext';
function Blog() {
     const {blogs, blogDispatch}=useContext(BlogContext);
     const auth= useAuth();
  return (
    <div className={styles.container}>
        <div className={styles.blog} >
          <h1> All Blogs</h1>

          {
           Object.values(blogs).map(blog=>{
            return (
               <div className={styles.blog} key={blog.id}>
                 <h3 className={styles.blogTitle}>{blog.title}</h3>
                 <h3 className={styles.blogType}>{blog.type}</h3>
                 <p className={styles.blogDescription}>{blog.description}</p>
                {
                  auth.user ?  <button className={styles.blogDelete} onClick={()=>blogDispatch({type:"BLOG_DELETE", payload:blog})}>Delete</button> : <p></p>
                }
               </div>
            )
           })
          }
          
        </div>
    </div>
  )
}

export default Blog