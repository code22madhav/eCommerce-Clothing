import Directory from "./component/directory/directory-component";
import Navbar from "./component/Navbar-component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
const App= ()=> {
  const categories=[
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ]
  return (
    <>
    <Navbar/>
    <Router>
      <div className="container" style={{'padding-top': '5rem'}}>
        <Routes>
        <Route exact path="/" element={<Directory categories={categories}/>}/>
        </Routes>
      </div>
    </Router>
    </>
    
  );
}

export default App;
