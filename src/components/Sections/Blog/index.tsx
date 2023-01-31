import { useState, useEffect } from "react";
import SectionHeading from "../../Layout/SectionHeading";
import BlogCard from "./BlogCard";
import axios from "axios";
import { useAppContext } from "../../../context";
import { BlogType } from "../../../types";

const Blog = () => {
  const { blogRef } = useAppContext();
  const [blogs, setBlogs] = useState<BlogType[] | []>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_REMOTE_API_BASEURL}/blogs.json`
      );

      setBlogs(response.data.blogs);
    };

    fetchBlogs();
  }, []);

  return (
    <section ref={blogRef} className="blog" id="blog">
      <SectionHeading heading="Latest News from Blog" />
      <div className="container flex justify-center items-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id.toString()} blog={blog} />
        ))}
      </div>
      <div className="btn-wrapper flex justify-center items-center">
        <button className="btn btn-secondary">View All</button>
      </div>
    </section>
  );
};

export default Blog;
