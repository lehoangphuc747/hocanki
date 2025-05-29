import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import lunr from 'lunr';
import './CustomHeader.css';

const CustomHeader = ({
  logo,
  menuItems,
  textColor = "#FFFFFF",
  onMenuClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchIndex, setSearchIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Load search index on component mount
  useEffect(() => {
    async function loadSearchIndex() {
      const response = await fetch('/search-index.json'); // Adjust this path if necessary
      const indexJson = await response.json();
      const index = lunr(function () {
        this.ref('id');
        this.field('title');
        this.field('content');
        indexJson.forEach((doc) => {
          this.add(doc);
        });
      });
      setSearchIndex(index);
    }
    loadSearchIndex();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query && searchIndex) {
      const results = searchIndex.search(query).map(({ ref }) => {
        const doc = indexJson.find((doc) => doc.id === ref);
        return doc;
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const closeSearchOverlay = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Scroll event to change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`custom-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX size={24} color={textColor} /> : <FiMenu size={24} color={textColor} />}
        </div>

        <div className="header-logo">
          <a href="/" aria-label="Home">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <nav className="header-menu">
          {menuItems.map((item, index) => (
            <a href={item.link} key={index} style={{ color: textColor }}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-icons">
          <FiSearch size={24} color={textColor} onClick={handleSearchClick} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-overlay-content">
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              autoFocus
            />
            <button className="close-search-btn" onClick={closeSearchOverlay}>
              <FiX size={24} />
            </button>
            <div className="search-results">
              {searchResults.map((result, index) => (
                <a href={result.url} key={index} className="search-result-item">
                  <h4>{result.title}</h4>
                  <p>{result.content.slice(0, 100)}...</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="overlay-close-button" onClick={toggleMobileMenu}>
            <FiX size={24} color="#FFFFFF" />
          </div>
          <nav className="mobile-menu">
            {menuItems.map((item, index) => (
              <a href={item.link} key={index} onClick={toggleMobileMenu} style={{ color: textColor }}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default CustomHeader;
