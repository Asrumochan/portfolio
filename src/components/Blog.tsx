import { blogPosts } from '../constants/portfolioData';

function Blog() {
  return (
    <section id="blog" className="section">
      <h3>Blog</h3>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article className="glass-card" key={post.title}>
            <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
            <h4>{post.title}</h4>
            <p>{post.excerpt}</p>
            <a href={post.url}>Read more</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
