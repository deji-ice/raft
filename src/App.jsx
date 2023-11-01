import './App.css'
import Financial from './component/Financial'
import Review from './component/Review'
import Intro from './component/intro'
import NavBar from './component/navbar'

function App() {


  return (
    <div className="font-sfProDisplay font-normal">
      <NavBar />
      <Intro/>
      <Financial/>
      <Review/>
    </div>
  )
}

export default App
