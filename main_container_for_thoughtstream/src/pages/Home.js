// PUBLIC_INTERFACE
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home page component for ThoughtStream blog displaying featured posts
 * and a grid of recent posts.
 */
const Home = () => {
  // Mock data for featured post and recent posts
  const featuredPost = {
    id: 1,
    title: "The Evolution of Modern Web Development",
    excerpt: "Exploring how web development has transformed over the last decade and what skills are essential for modern developers.",
    image: "https://via.placeholder.com/800x400",
    date: "May 15, 2023",
    author: "Jamie Smith",
    category: "Technology"
  };

  const recentPosts = [
    {
      id: 2,
      title: "Finding Balance in a Digital World",
      excerpt: "Strategies for maintaining focus and well-being in an increasingly connected environment.",
      image: "https://via.placeholder.com/400x250",
      date: "May 10, 2023",
      author: "Alex Johnson",
      category: "Lifestyle"
    },
    {
      id: 3,
      title: "Hidden Gems in Southeast Asia",
      excerpt: "Discover these off-the-beaten-path destinations that offer authentic cultural experiences.",
      image: "https://via.placeholder.com/400x250",
      date: "May 5, 2023",
      author: "Pat Rivera",
      category: "Travel"
    },
    {
      id: 4,
      title: "Sustainable Cooking Practices",
      excerpt: "How to reduce waste and make environmentally conscious choices in your kitchen.",
      image: "https://via.placeholder.com/400x250",
      date: "April 28, 2023",
      author: "Jordan Lee",
      category: "Food"
    },
    {
      id: 5,
      title: "The Power of Daily Journaling",
      excerpt: "How keeping a daily journal can improve mental clarity and emotional well-being.",
      image: "https://via.placeholder.com/400x250",
      date: "April 22, 2023",
      author: "Taylor Morgan",
      category: "Personal"
    },
    {
      id: 6,
      title: "Building a Personal Brand Online",
      excerpt: "Steps to establish and grow your professional presence in the digital space.",
      image: "https://via.placeholder.com/400x250",
      date: "April 15, 2023",
      author: "Casey Williams",
      category: "Career"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to ThoughtStream</h1>
        <p className="hero-description">
          Explore thoughts, experiences, and insights across various topics in a clean, modern space.
        </p>
      </section>

      <section className="featured-post-section">
        <h2 className="section-title">Featured Post</h2>
        <div className="featured-post">
          <div className="featured-post-image">
            <img src={featuredPost.image} alt={featuredPost.title} />
          </div>
          <div className="featured-post-content">
            <div className="post-meta">
              <span className="post-category">{featuredPost.category}</span>
              <span className="post-date">{featuredPost.date}</span>
            </div>
            <h2 className="post-title">{featuredPost.title}</h2>
            <p className="post-excerpt">{featuredPost.excerpt}</p>
            <div className="post-footer">
              <span className="post-author">By {featuredPost.author}</span>
              <Link to={`/post/${featuredPost.id}`} className="btn read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-posts-section">
        <h2 className="section-title">Recent Posts</h2>
        <div className="posts-grid">
          {recentPosts.map(post => (
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
