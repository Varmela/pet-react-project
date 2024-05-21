import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import logo from "./pet.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({ onSearch }) => {
  
  const nav = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [query, setQuery] = useState('');

  const handleSelect = (eventKey) => {
    setShowDropdown(false);
    nav(eventKey);
  };

  const handleSearch = () => {
    if (query) {
      nav(`/search/${query}`);
    }
  };

  // Paths where the search bar should be displayed
  const searchPaths = ['/','/dogs','/cats','/birds', '/search/:query'];

  return (
    <section className="header">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
        <img className="logo-header" src={logo} alt="logo" />
        <Dropdown show={showDropdown} onSelect={handleSelect}>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Animal Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="/dogs">Dogs</Dropdown.Item>
            <Dropdown.Item eventKey="/cats">Cats</Dropdown.Item>
            <Dropdown.Item eventKey="/birds">Birds</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {searchPaths.includes(location.pathname) && (
        <div className="search-container">
          <input 
            className="search-inp" 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for animals..."
          />
          <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
      )}
      <div className="links">
        <Link to="/"><IoHomeOutline size={"25px"} /></Link>
        <Link to="/about-us">About Us <FcAbout size={"24px"} style={{ marginRight: '8px' }} /></Link>
        <Link to="/contact-us">Contact us <GrContact size={"24px"} style={{ marginRight: '8px' }} /></Link>
      </div>
    </section>
  );
};

export default Header;
