// components/Blog.js
import React from 'react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Optimizing React Performance with Memoization",
      publication: "Medium",
      date: "March 15, 2023",
      link: "#"
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch",
      publication: "Dev.to",
      date: "January 8, 2023",
      link: "#"
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      publication: "CSS-Tricks",
      date: "November 22, 2022",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="container">
        <h2 className="section-title">Articles & Publications</h2>
        <div className="articles-list">
          {articles.map(article => (
            <div key={article.id} className="article-item">
              <h3>{article.title}</h3>
              <p className="publication-details">
                {article.publication} • {article.date}
              </p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="read-more">
                Read Article →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;