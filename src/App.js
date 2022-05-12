import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Header from './components/Main/Header'
import './style.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Buy from './components/Main/Buy/Buy'
import Footer from './components/Main/Footer'

function App() {
  const [IsDark, setIsDark] = useState(true)

  return (
    <div className="App">
      <div className={IsDark ? 'dark' : ''}>
        <div className="bg:white dark:bg-bg-dark">
          <Router>
            <Header setIsDark={setIsDark} IsDark={IsDark} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Sacrifice" element={<Buy />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default App
