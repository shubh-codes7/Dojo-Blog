import {useState} from "react";
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Rathod')
    const [isPending, setisPending] = useState(false)
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setisPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            // alert("new blog added");
            setisPending(false)
            navigate('/')
        })


    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author:</label>
                <select
                    required
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="Shubham">Shubham</option>
                    <option value="Rathod">Rathod</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;