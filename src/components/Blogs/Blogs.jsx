import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ heandleAddToBookmark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blogs: {blogs.length}</h2>
            {
                blogs.map(vlog => <Blog
                    key={vlog.id}
                    blog={vlog}
                    heandleAddToBookmark={heandleAddToBookmark
                    }
                >
                </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    heandleAddToBookmark: PropTypes.func
};
export default Blogs;