import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />

      </Routes>
    </BrowserRouter>  
  );
}

export default App;
