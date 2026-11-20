import {useEffect, useState} from 'react';
import './blog.css';
import BlogCard from '../components/BlogCard';
import { BLOG_DATA_URL } from '../data/api';


function Blog(){

    const [blogs,setBlogs] = useState([]);


    useEffect(() => {
        let isCurrent = true;

        fetch(BLOG_DATA_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch blog data: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (isCurrent) {
                    setBlogs(data.blogs);
                }
            })
            .catch((error) => {
                console.error('Blog data request failed:', error);
            });

        return () => {
            isCurrent = false;
        };
    }, []);



    return(

        <section id="blogs" className="blogs">

            <div className="container-fluid">


                <h4 className="section-title">
                    Our Blog
                </h4>



                <div className="blog-slider">


                    {
                        blogs.map((blog)=>(

                            <BlogCard
                                key={blog._id}
                                blog={blog}
                            />

                        ))
                    }


                </div>


            </div>


        </section>

    )

}


export default Blog;