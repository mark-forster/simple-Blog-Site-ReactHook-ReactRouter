import { createContext, useReducer } from "react";
import blogReducer from "./BlogReducer";

const BLOGS= [
{
    id:"1",
    "title":"React Router",
    "type":"Web Development",
    "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i",
},
{
    id:"2",
    "title":"Flutter Begin",
    "type":"Android Development",
    "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i",
},
{
    id:"1",
    "title":"C# for Beginners",
    "type":"Desktop Development",
    "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their i",
},
    
]

const BlogContext= createContext();

export const BlogProvider = ({children})=>{
 const[blogs, blogDispatch] =useReducer(blogReducer, BLOGS)
    return (
        <BlogContext.Provider value={{blogs:blogs, blogDispatch:blogDispatch}}>
        {children}
    </BlogContext.Provider>
    )
   
}


export default BlogContext;
