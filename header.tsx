import Link from "next/link"

const Header = () => {
    return (
        <>
    <div id="homepg_top_banner">
        <p id="banner_msg">
            Support{" "}
        <a href="#" id="banner_link">
            [insert cause here].
        </a>
        </p>
    </div>
    <nav id="nav_bar">
        <div className="nav_link" id="index_logo">
      <a href="ggxcn_home.html">
        <img src="the_index_logo.jpg" alt="Nonprofit Index home" id="logo" />
      </a>
    </div>
    <ul id="nav_list_container">
      <li className="nav_link">
        <Link href='about/about/page.tsx'>About</Link>
      </li>
      <li className="nav_link">
        <Link href="nonprofits.html">Nonprofits</Link>
      </li>
      <li className="nav_link" id="search">
        <input type="search" id="search_bar" />
        <button type="submit" id="search_button">
          <span className="material-symbols-outlined">search</span>
        </button>
      </li>
      <li className="nav_link">
        <Link href="signup.html">Sign up</Link>
      </li>
      <li className="nav_link">
        <Link href="login.html">Log in</Link>
      </li>
    </ul>
  </nav>
  </>
    );
};

export default Header;
