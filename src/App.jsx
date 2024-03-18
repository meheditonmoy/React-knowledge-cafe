
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Banner from './components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([])

  const heandleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      
      <Banner></Banner>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs heandleAddToBookmark={heandleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
