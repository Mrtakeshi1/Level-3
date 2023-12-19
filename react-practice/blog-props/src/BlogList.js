import BlogPost from './BlogPost'
import info from './info'

function BlogList(){
    const post = info.map(item =>{
        return(
            <BlogPost 
            item = {item}
            />
        )
    })
    return(
        <div className='main-container'>
            <div className='blog-list'>
                {post}
            </div>
        </div>
    )
    
}

export default BlogList