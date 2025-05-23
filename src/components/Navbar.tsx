import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar bg-primary/20 shadow-sm">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost md:text-xl text-md">D&D Party Builder</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/my-party' >My Party</Link></li>
        </ul>
      </div>
    </div>
  )
}

