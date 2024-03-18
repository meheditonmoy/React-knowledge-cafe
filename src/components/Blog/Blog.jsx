import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, heandleAddToBookmark, heandleMarkAsRead }) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20  space-y-4'>
            <img className='w-full h-40 mb-8' src={cover} alt={`Cover img of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => heandleAddToBookmark(blog)} className='text-2xl ml-2'><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => heandleMarkAsRead(id, reading_time)}
            className='text-purple-600 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    heandleAddToBookmark: PropTypes.func,
    heandleMarkAsRead: PropTypes.func
}
export default Blog;