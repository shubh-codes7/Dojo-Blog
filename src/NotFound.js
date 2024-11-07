import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>page not found 404</p>
            <Link to='/'>Back to home page</Link>
        </div>
     );
}
 
export default NotFound;