
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Banner from './components/Header/Header'


function App() {


  return (
    <>
      
      <Banner></Banner>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
