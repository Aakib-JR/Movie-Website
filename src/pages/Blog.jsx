import React, {useEffect, useState} from 'react';
import './blog.css';
import BlogCard from '../components/BlogCard';


function Blog(){

    const [blogs,setBlogs] = useState([]);


    const fetchData = async()=>{

        try{

            const res = await fetch(
                "http://localhost:5000/blogs"
            );

            const data = await res.json();

            setBlogs(data);

        }
        catch(error){

            console.log(error.message);

        }

    };


    useEffect(()=>{

        fetchData();

    },[]);



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