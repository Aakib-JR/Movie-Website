import './blogCard.css';

function BlogCard({ blog }) {
    return (
        <div className="blog-card">
            <article>

                <div className="post-img">
                    <img 
                        src={blog.thumbnail} 
                        alt={blog.title}
                    />
                </div>


                <p className="post-category">
                    {blog.category}
                </p>


                <h2 className="title">
                    <a href="#">
                        {blog.title}
                    </a>
                </h2>


                <div className="author-box">

                    <img 
                        src={blog.author.image}
                        alt={blog.author.name}
                        className="post-author-img"
                    />


                    <div className="post-meta">

                        <p className="post-author-list">
                            {blog.author.name}
                        </p>


                        <p className="post-date">
                            {blog.date}
                        </p>

                    </div>

                </div>


            </article>
        </div>
    );
}

export default BlogCard;