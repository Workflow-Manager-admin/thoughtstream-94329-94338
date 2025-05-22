// PUBLIC_INTERFACE
import React from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 * BlogPost component for displaying individual blog post content.
 * Uses route parameters to identify which post to display.
 */
const BlogPost = () => {
  const { id } = useParams();
  
  // Mock post data - in a real app, this would be fetched based on the ID
  const post = {
    id: parseInt(id),
    title: "The Evolution of Modern Web Development",
    content: `
      <p>Web development has undergone a remarkable transformation over the past decade. What was once a relatively straightforward process of creating HTML pages has evolved into a complex ecosystem of frameworks, libraries, and tools that enable developers to build increasingly sophisticated applications.</p>
      
      <h2>The Rise of JavaScript Frameworks</h2>
      <p>Perhaps the most significant change in web development has been the rise of JavaScript frameworks like React, Angular, and Vue. These tools have revolutionized how developers approach building user interfaces, enabling more interactive and responsive web applications.</p>
      
      <p>React, in particular, introduced a component-based architecture that has become the industry standard. By breaking UIs into reusable components, developers can create more maintainable and scalable applications. The virtual DOM concept also significantly improved performance by minimizing direct manipulation of the DOM.</p>
      
      <h2>The Shift to Static Site Generators and JAMstack</h2>
      <p>Another notable trend has been the shift toward static site generators and the JAMstack architecture. This approach pre-renders pages at build time rather than on each request, resulting in faster load times and improved security.</p>
      
      <p>Tools like Next.js and Gatsby have gained popularity by combining the benefits of static generation with the interactivity of client-side applications. This hybrid approach offers the best of both worlds: the performance and SEO benefits of server-rendered content and the rich user experience of single-page applications.</p>
      
      <h2>The Importance of Performance Optimization</h2>
      <p>As web applications have become more complex, performance optimization has become increasingly important. Techniques like code splitting, lazy loading, and tree shaking help reduce bundle sizes and improve loading times.</p>
      
      <p>The introduction of Web Vitals as key performance metrics has also focused attention on user experience factors like loading speed, interactivity, and visual stability.</p>
      
      <h2>The Future of Web Development</h2>
      <p>Looking ahead, several trends are likely to shape the future of web development:</p>
      
      <ul>
        <li><strong>WebAssembly</strong> will enable high-performance applications in the browser</li>
        <li><strong>AI-assisted development</strong> will automate routine coding tasks</li>
        <li><strong>Edge computing</strong> will distribute processing closer to users</li>
        <li><strong>Progressive Web Apps</strong> will continue to blur the line between web and native applications</li>
      </ul>
      
      <p>For developers looking to stay relevant, continuous learning and adaptation will be essential. The pace of change in web development shows no signs of slowing down, making it both challenging and exciting field to work in.</p>
    `,
    image: "https://via.placeholder.com/1200x600",
    date: "May 15, 2023",
    author: "Jamie Smith",
    authorAvatar: "https://via.placeholder.com/50x50",
    category: "Technology",
    tags: ["Web Development", "JavaScript", "React", "Front-end"],
    readTime: "8 min read"
  };

  // If post couldn't be found (in real app, you'd handle API errors)
  if (!post) {
    return (
      <div className="error-message">
        <h2>Post not found</h2>
        <p>The post you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn">Return to Home</Link>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <div className="post-header">
        <div className="post-meta">
          <Link to={`/categories/${post.category.toLowerCase()}`} className="post-category">
            {post.category}
          </Link>
          <span className="post-date">{post.date}</span>
          <span className="post-read-time">{post.readTime}</span>
        </div>
        
        <h1 className="post-title">{post.title}</h1>
        
        <div className="post-author">
          <div className="author-avatar">
            <img src={post.authorAvatar} alt={post.author} />
          </div>
          <span>By {post.author}</span>
        </div>
      </div>
      
      <div className="post-featured-image">
        <img src={post.image} alt={post.title} />
      </div>
      
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <div className="post-tags">
        {post.tags.map((tag, index) => (
          <Link key={index} to={`/tag/${tag.toLowerCase()}`} className="post-tag">
            #{tag}
          </Link>
        ))}
      </div>
      
      <div className="post-navigation">
        <Link to={`/post/${post.id - 1}`} className="post-nav-link prev-post">
          ← Previous Post
        </Link>
        <Link to={`/post/${post.id + 1}`} className="post-nav-link next-post">
          Next Post →
        </Link>
      </div>
      
      <div className="post-comments">
        <h3 className="comments-title">Comments</h3>
        <p className="comments-placeholder">Comments system will be implemented here.</p>
      </div>
    </article>
  );
};

export default BlogPost;
