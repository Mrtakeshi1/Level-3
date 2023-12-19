function BlogPost(props){
    console.log(props)
    return(
        <div>
            <h1>{props.item.title}</h1>
            <h3>{props.item.subTitle}</h3>
            <p>Posted by {props.item.author} on {props.item.date}</p>
        </div>
    )
}

export default BlogPost