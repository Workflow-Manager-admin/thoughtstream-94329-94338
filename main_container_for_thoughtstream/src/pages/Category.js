// PUBLIC_INTERFACE
import React from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 * Category component that displays posts filtered by a specific category.
 * Uses route parameters to identify which category to display.
 */
const Category = () => {
  const { id } = useParams();
  
  // Mock data for categories and posts
  const categories = {
    1: 'Technology',
    2: 'Travel',
    3: 'Food',
    4: 'Lifestyle',
    5: 'Personal'
  };
  
  const categoryName = categories[id] || 'Unknown Category';
  
  // Mock data for posts in this category
  const categoryPosts = [
    {
      id: 1,
      title: "The Evolution of Modern Web Development",
      excerpt: "Exploring how web development has transformed over the last decade and what skills are essential for modern developers.",
      image: "https://via.placeholder.com/400x250",
      date: "May 15, 2023",
      author: "Jamie Smith",
      category: categoryName
    },
    {
      id: 7,
      title: "Understanding the Basics of Machine Learning",
      excerpt: "A beginner-friendly guide to the core concepts and applications of machine learning in today's world.",
      image: "https://via.placeholder.com/400x250",
      date: "April 10, 2023",
      author: "Robin Chen",
      category: categoryName
    },
    {
      id: 12,
      title: "The Future of Remote Work Technologies",
      excerpt: "How new tools and platforms are reshaping the landscape of remote collaboration and digital workplaces.",
      image: "https://via.placeholder.com/400x250",
      date: "March 28, 2023",
      author: "Alex Morgan",
      category: categoryName
    },
    {
      id: 18,
      title: "Cybersecurity Essentials for Everyone",
      excerpt: "Simple but effective practices to protect your digital life in an increasingly connected world.",
      image: "https://via.placeholder.com/400x250",
      date: "March 15, 2023",
      author: "Jordan Riley",
      category: categoryName
    }
  ];

  return (
    <div className="category-page">
      <div className="page-header">
        <h1 className="page-title">{categoryName}</h1>
        <p className="page-description">
          Browse all posts in the {categoryName.toLowerCase()} category
        </p>
      </div>
      
      <div className="posts-grid category-posts">
        {categoryPosts.length > 0 ? (
          categoryPosts.map(post => (
            <div className="post-card" key={post.id}>
              <div className="post-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-card-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="post-author">By {post.author}</span>
                  <Link to={`/post/${post.id}`} className="read-more-link">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-posts-message">
            <p>No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
