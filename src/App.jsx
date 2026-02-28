import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Practice from './pages/Practice'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
