export default function Home() {
    return (
    <>
    <div id="homepg_top_banner">
        <p id="banner_msg">Support <a href="#" id="banner_link">insert cause here.</a></p>
    </div>
    <nav id="nav_bar">
        <div className="nav_link" id="index_logo">
            <a href="ggxcn_home.html">
                <img src="the_index_logo.jpg" alt="Nonprofit Index home" id="logo">
            </a>
        </div>
        <ul id="nav_list_container">
            <li className="nav_link">
                <a href="about.html">
                    About
                </a>
            </li>
            <li className="nav_link">
                <a href="nonprofits.html">
                    Nonprofits
                </a>
            </li>
            <li className="nav_link" id="search">
                <input type="search" id="search_bar"></input>
                <button type="submit" id="search_button">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </li>
            <li className="nav_link">
                <a href="#"> <!--may have to add "tagindex:0" if the href is just a popup on the page and not an indie link-->
                    Sign up
                </a>
            </li>
            <li className="nav_link">
                <a href="#">
                    Log in
                </a>
            </li>
        </ul>
    </nav>
    <div className="container">
        <img src= "cropped_hands_puzzle.jpg" id="about_banner"/>
        <div className="container2" id="about_opener">
            <h1>About Us</h1>
    </div>
    <div id="about_container">
        <div id="about_blurb">
            <p id="about_quote">
                "When I was a boy and I would see scary things in the news, my mother would say to me, 'Look for the helpers. You will always find people who are helping.'"
            </p>
            <p id="author_about_quote">
                -Fred Rogers
            </p>
            <div id="about_blurb_grid">
                <div id="about_grid_item_1">
                    <p className="about_grid_accent">
                        Dynamic updates
                    </p>
                    <p className="about_grid_statement">
                         because the world never stops
                    </p>
                </div>
                <div id="about_grid_item_2">
                    <p className="about_grid_accent">
                        400K+
                    </p>
                    <p className="about_grid_statement">
                        vetted organizations
                    </p> 
                </div>
                <div id="about_grid_item_3">
                    <p className="about_grid_accent">
                        Powered by
                    </p>
                    <p className="about_grid_statement">
                        GlobalGiving and CharityNavigator
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div id="about_article">
        <div id="para_1_about_article">
            Welcome to The News Trend-Based Nonprofit Index, your trusted source for comprehensive insights into charitable organizations focusing on humanist topics in the news. At our heart, we are a beacon of hope and compassion, meticulously curating information on nonprofits responding to the pressing challenges of our time, including natural disasters, acts of terrorism, and human rights issues. Our platform is a testament to the dedication of one individual, passionate about making a difference in the world.
        </div>
        <div id="para_2_about_article">
            In a landscape often cluttered with information, our founder envisioned a singular platform where users could easily navigate the complex realm of charitable organizations. The driving force behind our initiative is the belief in the power of humanism<code>&#8212;</code>the understanding that empathy, reason, and ethics are the foundation of positive change. With a keen eye on global events, we provide in-depth analyses, transparent evaluations, and up-to-date information on nonprofits, enabling you to make informed decisions about your charitable contributions. At The Index, we bridge the gap between those who want to help and the organizations making a real impact. Join us on this philanthropic journey, where every click contributes to a better world.
        </div>
    </div>
    <div id="search_cta">
        <a href="#" id="button_search_link">
            Find a cause
        </a>
    </div>
    <div id="about_carousel">
        <div className="ab_carousel_items" id="carousel_1">
            <a href="#some_fund">
                <img src="#some_charity_img">
            </a>
            <div className="carousel_txt">
                <div>
                    <a href="#search_link_for_geographical" className="carousel_geo_link">
                        Country
                    </a>
                </div>
                <div>
                    <a href="#link_to_actual_charity_pg" className="carousel_project_link">
                        This is the name of the project
                    </a>
                </div>
                <div className="hover_txt_carousel">

                </div>
            </div>
        </div>
        <div className="ab_carousel_items" id="carousel_2">
            <a href="#some_fund">
                <img src="#some_charity_img">
            </a>
            <div className="carousel_txt">
                <div>
                    <a href="#search_link_for_geographical" className="carousel_geo_link">
                        Country
                    </a>
                </div>
                <div>
                    <a href="#link_to_actual_charity_pg" className="carousel_project_link">
                        This is the name of the project
                    </a>
                </div>
                <div className="hover_txt_carousel">

                </div>
            </div>
        </div>
        <div className="ab_carousel_items" id="carousel_3">
            <a href="#some_fund">
                <img src="#some_charity_img">
            </a>
            <div className="carousel_txt">
                <div>
                    <a href="#search_link_for_geographical" className="carousel_geo_link">
                        Country
                    </a>
                </div>
                <div>
                    <a href="#link_to_actual_charity_pg" className="carousel_project_link">
                        This is the name of the project
                    </a>
                </div>
                <div className="hover_txt_carousel">

                </div>
            </div>
        </div>
        <div className="ab_carousel_items" id="carousel_4">
            <a href="#some_fund">
                <img src="#some_charity_img">
            </a>
            <div className="carousel_txt">
                <div>
                    <a href="#search_link_for_geographical" className="carousel_geo_link">
                        Country
                    </a>
                </div>
                <div>
                    <a href="#link_to_actual_charity_pg" className="carousel_project_link">
                        This is the name of the project
                    </a>
                </div>
                <div className="hover_txt_carousel">

                </div>
            </div>
        </div>
        <div className="ab_carousel_items" id="carousel_5">
            <a href="#some_fund">
                <img src="#some_charity_img">
            </a>
            <div className="carousel_txt">
                <div>
                    <a href="#search_link_for_geographical" className="carousel_geo_link">
                        Country
                    </a>
                </div>
                <div>
                    <a href="#link_to_actual_charity_pg" className="carousel_project_link">
                        This is the name of the project
                    </a>
                </div>
                <div className="hover_txt_carousel">

                </div>
            </div>
        </div>
        <div className="ab_carousel_items" id="carousel_6">
            <a href="#some_fund">
                <img src="#some_charity_img">
            </a>
            <div className="carousel_txt">
                <div>
                    <a href="#search_link_for_geographical" className="carousel_geo_link">
                        Country
                    </a>
                </div>
                <div>
                    <a href="#link_to_actual_charity_pg" className="carousel_project_link">
                        This is the name of the project
                    </a>
                </div>
                <div className="hover_txt_carousel">

                </div>
            </div>
        </div>
    </div>

    <footer>
        <div className="foot_col" id="site_info">
            <img src="transparent_index_logo.png" id="logo_transparent" alt="Nonprofit Index logo">
            <p id="footer_tagline"><i>Empowering the informed.</i></p>
            
        </div>
        <div className="foot_col lower_foot_col" id="misc_links">
            <div className="misc_title">
                About
            </div>
            <ul className="footer_nav_list">
                <li>
                    <a className="misc_nav_links" href="#">About us</a>
                </li>
                <li>
                    <a className="misc_nav_links" href="#">Safety statement</a>
                </li>
                <li>
                    <a className="misc_nav_links" href="#">Developing</a>
                </li>
            </ul>
        </div>
        <div className="foot_col lower_foot_col" id="accounts">
            <div className="misc_title">
                My account
            </div>
            <ul className="footer_nav_list">
                <li>
                    <a className="misc_nav_links" href="#">Log in</a>
                </li>
                <li>
                    <a className="misc_nav_links" href="#">Sign up</a>
                </li>
                <li>
                    <a className="misc_nav_links" href="#">My causes</a>
                </li>
            </ul>
        </div>
        <div className="foot_col lower_foot_col" id="contact">
            <div className="misc_title">
                Contact
            </div>
            <ul className="footer_nav_list">
                <li>
                    <a className="misc_nav_links" href="#">Email form</a>
                </li>
                <li>
                    <a className="misc_nav_links" href="#">Github</a>
                </li>
            </ul>
        </div>
        <div id="copyright">
            Copyright &copy; 2023 Alexis Abramson
            |
            <a id="repo_home_link" href="#insertgithubreadme">README.md</a>
        </div>
    </footer>
    </>
        )
}