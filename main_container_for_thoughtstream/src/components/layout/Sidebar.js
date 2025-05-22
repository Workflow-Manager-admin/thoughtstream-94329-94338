// PUBLIC_INTERFACE
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Sidebar component for the ThoughtStream blog that displays categories, 
 * recent posts, and a newsletter signup form.
 */
const Sidebar = () => {
  // Mock data for initial development
  const categories = [
    { id: 1, name: 'Technology', count: 12 },
    { id: 2, name: 'Travel', count: 8 },
    { id: 3, name: 'Food', count: 5 },
    { id: 4, name: 'Lifestyle', count: 9 },
    { id: 5, name: 'Personal', count: 7 }
  ];

  const recentPosts = [
    { id: 1, title: 'Getting Started with React Hooks', date: '2 days ago' },
    { id: 2, title: 'My Journey Through South America', date: '1 week ago' },
    { id: 3, title: 'The Best Coffee Shops in Portland', date: '2 weeks ago' },
    { id: 4, title: 'Mindfulness Practices for Developers', date: '3 weeks ago' }
  ];

  const tags = [
    'React', 'Travel Tips', 'Recipes', 'Productivity', 'Coding', 
    'Books', 'Self-improvement', 'Photography', 'Design', 'Health'
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-widget">
        <h3 className="widget-title">Categories</h3>
        <ul className="category-list">
          {categories.map(category => (
            <li key={category.id} className="category-item">
              <Link to={`/categories/${category.id}`} className="category-link">
                {category.name}
                <span className="category-count">{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget">
        <h3 className="widget-title">Recent Posts</h3>
        <ul className="recent-posts-list">
          {recentPosts.map(post => (
            <li key={post.id} className="recent-post-item">
              <Link to={`/post/${post.id}`} className="recent-post-link">
                <h4 className="recent-post-title">{post.title}</h4>
                <span className="recent-post-date">{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget">
        <h3 className="widget-title">Popular Tags</h3>
        <div className="tags-cloud">
          {tags.map((tag, index) => (
            <Link key={index} to={`/tag/${tag}`} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-widget">
        <h3 className="widget-title">Newsletter</h3>
        <p className="widget-description">
          Subscribe to our newsletter to get the latest updates directly in your inbox.
        </p>
        <form className="newsletter-form">
          <input 
            type="email" 
            className="newsletter-input" 
            placeholder="Your email address" 
            required 
          />
          <button type="submit" className="btn newsletter-btn">
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
