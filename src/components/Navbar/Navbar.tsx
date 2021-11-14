import { useHistory } from "react-router";

function Navbar() {
  const history = useHistory();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a
          className="navbar-brand"
          onClick={() => {
            history.push("/listing");
          }}
        >
          Job Listing Application (Sriharsh Dubale)
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
