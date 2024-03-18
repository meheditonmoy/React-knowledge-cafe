
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Banner from './components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markReadingTime, setMarkReadingTime] = useState(0)

  const heandleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const heandleMarkAsRead = (id, time)  => {
    const newReadingTime = markReadingTime + time ;
    setMarkReadingTime(newReadingTime);
    // remove item who mark as read
    // console.log('remove id :',id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      
      <Banner></Banner>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs heandleAddToBookmark={heandleAddToBookmark}
        heandleMarkAsRead={heandleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} markReadingTime={markReadingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
