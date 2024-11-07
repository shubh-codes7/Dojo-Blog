import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails';
import Create from './Create';
import NotFound from './NotFound';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/blogs/:id' element={<BlogDetails/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>

      </div>
      </Router>
    </div>
  );
}

export default App;