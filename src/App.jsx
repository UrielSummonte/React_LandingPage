import Body from './components/Body'
import Footer from './components/Footer'
import GameList from './components/GameList'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'


function App() {

  return (
    <div className='min-h-screen bg-ac-dark text-white assassins-bg'>
     <Navbar />   
     <Body /> 
     <Timeline />
     <GameList />
     <Footer />
    </div>
  )
}

export default App
