import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Form</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/todos">Todos</Link>
    </nav>
  )
}

export default Navbar;