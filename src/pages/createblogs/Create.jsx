import React, {useState, useContext} from 'react'
import styles from './Create.module.css'
import { useNavigate } from 'react-router-dom'
import BlogContext from'../../context/BlogContext'



function Create() {
 const {blogDispatch} = useContext(BlogContext)
  const navigate= useNavigate();


  const initialState= {
    title:"",
    type:"",
    description:""
  }
  const [formValue, setformValue] = useState(initialState)

    const  formValueHandler = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setformValue({...formValue, [name]:value}); 
    }


    const handleSubmit= (e)=>{
      e.preventDefault();
      console.log(formValue);

      const newBlog= {
        id:Math.random(),
        title:formValue.title,
        type:formValue.type,
        description:formValue.description
      }

      blogDispatch({ type: "BLOG_CREATE", payload: newBlog });
      navigate('/')
    }



  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span className={styles.header}>Create New Blog</span>
            <form className={styles.createForm} onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder='Enter your blog title'
                 required className={styles.createInput}  value={formValue.title} onChange={formValueHandler}/>


                <input type="text" name="type" placeholder='Enter your blog type' 
                required className={styles.createInput}  value={formValue.type} onChange={formValueHandler}/>


                <textarea name="description" cols="30" 
                rows="10" placeholder='Enter description'
                 className={styles.createDescription} value={formValue.description} onChange={formValueHandler}>

                 </textarea>

                <button className={styles.createButton}>Create Blog</button>
            </form>
        </div>
    </div>
  )
}

export default Create