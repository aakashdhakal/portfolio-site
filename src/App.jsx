import { useState } from 'react'
import './style.css'

function Button({ onClick, children }) {
  return (
    <button  className="primary-btn" onClick={onClick}>{children}</button>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default function App() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <Navbar />
    </div>
  )
}
//add preloader during loading

