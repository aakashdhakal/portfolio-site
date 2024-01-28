import './Navbar.css';

export default function Navbar() {
    return (    <nav className="navbar">
      <div className="logo-name">
       <img src="/akash.svg" alt="" className="name"/>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blogs</a></li>
       <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    )
}