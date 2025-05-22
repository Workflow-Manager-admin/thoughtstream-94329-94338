// PUBLIC_INTERFACE
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

/**
 * MainContainer serves as the primary layout container for the ThoughtStream blog.
 * It provides a consistent structure with header, content area with sidebar, and footer.
 * The content area uses Outlet from react-router to render the current route's content.
 */
const MainContainer = () => {
  return (
    <div className="app">
      <Header />
      
      <div className="main-wrapper">
        <div className="container">
          <div className="content-layout">
            <main className="main-content">
              <Outlet />
            </main>
            <Sidebar />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainContainer;
