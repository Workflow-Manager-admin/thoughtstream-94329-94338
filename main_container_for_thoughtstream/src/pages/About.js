// PUBLIC_INTERFACE
import React from 'react';

/**
 * About page component for ThoughtStream blog explaining the purpose
 * and mission of the blog.
 */
const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">About ThoughtStream</h1>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            ThoughtStream began as a personal project to share insights and experiences across various 
            topics that matter to me. As someone passionate about technology, travel, personal growth, 
            and creativity, I wanted a space where I could explore these interests in depth and connect 
            with like-minded individuals.
          </p>
          <p>
            What started as a simple blog has evolved into a platform where authentic stories and 
            thoughtful perspectives can flourish, free from the noise and distractions of mainstream 
            social media.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            ThoughtStream is dedicated to creating a space for meaningful content that informs, 
            inspires, and encourages reflection. We believe in the power of personal narratives 
            and expert insights to foster understanding and growth.
          </p>
          <p>
            Our mission is to offer content that is:
          </p>
          <ul className="mission-list">
            <li><strong>Authentic</strong> - Genuine experiences and perspectives</li>
            <li><strong>Thoughtful</strong> - Well-researched and carefully considered</li>
            <li><strong>Diverse</strong> - Covering a wide range of topics and viewpoints</li>
            <li><strong>Accessible</strong> - Presented in a clear, engaging manner</li>
            <li><strong>Inspiring</strong> - Encouraging readers to explore and create</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h2>The Author</h2>
          <div className="author-bio">
            <div className="author-image">
              <img src="https://via.placeholder.com/200x200" alt="Author" />
            </div>
            <div className="author-details">
              <h3>Jordan Taylor</h3>
              <p className="author-title">Founder & Writer</p>
              <p>
                Jordan is a software developer, avid traveler, and lifelong learner with a 
                background in technology and digital media. With over a decade of experience 
                in the tech industry and a passion for storytelling, Jordan created ThoughtStream 
                as a way to share insights and connect with a community of curious minds.
              </p>
              <p>
                When not writing or coding, Jordan can be found hiking trails, experimenting with 
                new recipes, or diving into a good book.
              </p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Get In Touch</h2>
          <p>
            Have questions, suggestions, or just want to say hello? I'd love to hear from you! 
            Visit the <a href="/contact" className="text-link">Contact page</a> to get in touch.
          </p>
          <p>
            For collaboration inquiries or guest post opportunities, please email: 
            <a href="mailto:hello@thoughtstream.com" className="text-link">hello@thoughtstream.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
