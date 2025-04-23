import './navbar.css';

function Navbar() {
  const total = 2500;
  const token = true;
  return (
    <nav className="navbar-container">
      <h2 className="navbar-title">Pizzeria Mama Mia!</h2>
      <div className="buttons-container">
        <ul>
          <li>
            <button className="button-primary">🍕 Home</button>
          </li>
          {token ? (
            <>
              <li>
                <button className="button-primary">🙋‍♂️ Profile</button>
              </li>
              <li>
                <button className="button-primary">↖️ Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button className="button-primary">🔐 Login</button>
              </li>
              <li>
                <button className="button-primary">🔐 Register</button>
              </li>
            </>
          )}
        </ul>
        <span className="button-secondary">🛒 Total: $:{total}</span>
      </div>
    </nav>
  );
}

export default Navbar;
