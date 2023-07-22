const createBlog = (state, blog)=>{
    return [...state, blog];
}

const deleteBlog= (state, blog)=>{
        let filter= state.filter(stateBlog=>{
            return stateBlog.id !== blog.id
        });
        return filter;
}

const blogReducer= (state, action) =>{
    switch(action.type){
        case "BLOG_CREATE":
        return createBlog(state, action.payload);
        case "BLOG_DELETE":
        return deleteBlog(state, action.payload);

        default: 
        return state;
    }
}



export default blogReducer