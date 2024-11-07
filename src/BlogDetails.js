import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const navigate = useNavigate(); 
    const {id} = useParams();
    const {blogs_1, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
    console.log(blogs_1);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/')
        })

    }
    

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs_1 && (
                <article>
                    <h2>{blogs_1.title}</h2>
                    <p>Written by: {blogs_1.author}</p>
                    <div>{blogs_1.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )} 
        </div>
     );
}
 
export default BlogDetails;