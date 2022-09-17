import React, { useState, useEffect } from "react";
import SectionHeading from "../../Layout/SectionHeading";
import BlogCard from "./BlogCard";
import axios from "axios";
import { useData } from "../../Layout/Global";

const Blog = () => {
  const { blogRef } = useData();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("http://localhost:3001/api/blogs");

      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);

  return (
    <section ref={blogRef} className="blog" id="blog">
      <SectionHeading heading="Latest News from Blog" />
      <div className="container flex justify-center items-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="btn-wrapper flex justify-center items-center">
        <button className="btn btn-secondary">View All</button>
      </div>
    </section>
  );
};

export default Blog;
