import './App.css'
import Header from './Header'
import MainContent from './MainContent'

function App() {
  return (
    <>
      <div class="text-white bg-background">
        <div class="container mx-auto px-4 h-screen flex flex-col">
          <Header />
          <MainContent />
        </div>
      </div>
    </>

  )
}

export default App
