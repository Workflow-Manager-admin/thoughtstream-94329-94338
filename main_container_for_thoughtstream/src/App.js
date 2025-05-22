import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/layout/MainContainer';
import Home from './pages/Home';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import Category from './pages/Category';
import './App.css';

/**
 * App component serves as the main entry point and sets up routing
 * for the ThoughtStream blog platform.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="post/:id" element={<BlogPost />} />
          <Route path="categories/:id" element={<Category />} />
          {/* Additional routes can be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
