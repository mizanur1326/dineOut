import './App.css'
import Header from './Header'
import MainContent from './MainContent'

function App() {
  return (
    <>
      <div className="text-white bg-background">
        <div className="container mx-auto px-4 h-screen flex flex-col">
          <Header />
          <MainContent />
        </div>
      </div>
    </>

  )
}

export default App
