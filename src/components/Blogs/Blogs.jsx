import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;