import { Modal } from "react-bootstrap";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./Nav.scss";
import PropTypes from "prop-types";
import SearchBox from "../../shared-components/Search-box/SearchBox";
import { useEffect, useState } from "react";

const Nav = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();

    netlifyIdentity.on("init", (user) => setUser(user));
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });
    netlifyIdentity.on("logout", () => setUser(null));

    netlifyIdentity.init();
  }, []);

  const handleLoginClick = () => {
    if (user) {
      netlifyIdentity.logout();
    } else {
      netlifyIdentity.open();
    }
  };

  const handleCloseSearchModal = () => setShowSearchModal(false);
  const handleShowSearchModal = () => setShowSearchModal(true);

  return (
    <section className="navbar">
      {/* Logo Section */}
      <a className="icon-box" href="#home">
        <img src="/assets/logo/Logo.svg" alt="Digilearn Logo" />
      </a>

      {/* Menu Toggle Button */}
      <button className="menu" onClick={() => setSidebarOpen(true)}>
        <IoMdMenu />
      </button>

      {/* Desktop Navigation */}
      <section className="nav-list-box">
        <a href="#about-us">About us</a>
        <a href="#our-class">Our class</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </section>

      {/* Search Box Section */}
      <section className="search-box">
        <img
          className="cart"
          src="/assets/icons/ShoppingBag.svg"
          alt="Shopping bag icon"
        />
        <button className="search-mobile" onClick={handleShowSearchModal}>
          <img src="/assets/icons/Search.svg" alt="search icon" />
        </button>
        <Modal show={showSearchModal} onHide={handleCloseSearchModal}>
          <Modal.Header>
            <SearchBox />
          </Modal.Header>
        </Modal>
        <SearchBox />

        {/* 🔐 Login / Logout Button */}
        <button className="btn btn-outline-primary ms-2" onClick={handleLoginClick}>
          {user ? "Logout" : "Login"}
        </button>
      </section>

      {/* Sidebar Menu */}
      <section className={"sidebar-menu" + (isSidebarOpen ? " show" : "")}>
        <button className="btn-wrapper" onClick={() => setSidebarOpen(false)}>
          <IoMdClose />
        </button>
        <ul className="menu-list" onClick={() => setSidebarOpen(false)}>
          <li>
            <a href="#about-us">About us</a>
          </li>
          <li>
            <a href="#our-class">Our class</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </section>
    </section>
  );
};

Nav.propTypes = { toggleModal: PropTypes.func };

export default Nav;
