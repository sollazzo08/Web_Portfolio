import React from "react";
import { Link } from "react-router-dom";
import AdminLoginModal from "./modals/AdminLoginModal";
import "../../styles/_navbar.scss";
import "../../styles/_icons.scss";

const PromptAdmin = ({adminLoggedIn}) => {
  if (adminLoggedIn) {
    return <AdminLoginModal />;
  } else return null;
}

class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { adminClicked: false };
    this.handleAdminClick = this.handleAdminClick.bind(this);
  }

  handleAdminClick(e) {
    e.preventDefault();
    this.setState({ adminClicked: true });
    return <PromptAdmin />
  }

  render() {
    const adminClicked = this.state.adminClicked;

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top">
          <Link className="logo py-0 pl-4" to="/">
            MS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse pt-0" id="navbarResponsive">
            <ul className="navbar-nav ml-auto pr-4">
              <li className="nav-item">
                <div className="icon-sizes">
                  <a
                    href="mailto:msollazzo08@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className=" pr-2 fab fa-google fa-1x"></i>
                  </a>
                  <a
                    href="https://github.com/sollazzo08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="pr-2 fab fa-github"></i>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/msollazzo-CS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="pr-4 fab fa-linkedin"></i>
                  </a>
                  <Link
                    className="custom-nav-link"
                    to={"/admin"}
                    data-toggle="modal"
                    data-target="#promptAdmin"
                    onClick={this.handleAdminClick}
                  >
                    Admin
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      {adminClicked && <PromptAdmin adminLoggedIn={adminClicked}/>}
      </div>
    );
  }
}

export default navbar;
