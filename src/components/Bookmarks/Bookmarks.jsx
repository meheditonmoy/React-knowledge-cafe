
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, markReadingTime }) => {
    return (
        <div className="md:w-1/3 bg-slate-400 ml-4 mt-2 p-4">
            <h3 className="text-3xl mb-4">Mark Reading Time :{markReadingTime}</h3>
            <h3 className="text-2xl text-center">
                Bookmarked Blogs  : {bookmarks.length}
            </h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    markReadingTime: PropTypes.number
}

export default Bookmarks;