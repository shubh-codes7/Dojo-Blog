import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

  const {blogs_1, error, isLoading} = useFetch('http://localhost:8000/blogs');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs_1.filter(blogs_1 => blogs_1.id !== id);
  //   setBlogs(newBlogs);
  // }


  return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs_1 && <BlogList blogs_2={blogs_1} title="All blogs" /*handleDelete={handleDelete} */ />}     
    </div>
   );
}
 
export default Home;