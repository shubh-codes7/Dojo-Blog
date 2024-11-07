import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs_3 = props.blogs_2;
  const title = props.title;
  // const handleDelete = props.handleDelete;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs_3.map((blg) => (
        <div className="blog-preview" key={blg.id}>
          <Link to={`/blogs/${blg.id}`}>
            <h3>{blg.title}</h3>
            <p>Written by: {blg.author}</p>
            {/* <button onClick = {() => handleDelete(blg.id)}>delete</button> */}
          </Link>
          
        </div>
      ))}
    </div>
  );
};


// const BlogList = (props) => {
//   // const blogs_3 = props.blogs_2; //no need to assign again

//   return (
//     <div className="blog-list">
//       {props.blogs_2.map((blg) => (  //can just use props.varable_holder to map the object
//         <div className="blog-preview" key={blg.id}>
//           <h2>{blg.title}</h2>
//           <p>Written by: {blg.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// };


BlogList.defaultProps = {
  title: "unassigned",
};
export default BlogList;
