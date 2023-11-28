export default function Home() {
    return (
    <>
    <Header/>
  <div className="container">
    <img src="clay-banks-Pcg6X4QG63M-unsplash.jpg" id="site_img" />
    {/*onhover make attribute + link to cause in pic*/}
    <div className="container2" id="site_opener">
      <h1>The News Trend-Based Nonprofit Index</h1>
      <p id="opener_msg">
        With the power of GlobalGiving and Charity Navigator, The News
        Trend-Based Nonprofit Index empowers the informed.
      </p>
      {/*this could link to the sign up page?*/}
      <div id="join_cta">
        <input
          type="text"
          id="join_cta_email"
          placeholder="Email@example.com"
        />
        <button type="submit" id="join_cta_button">
          Get involved!
        </button>
      </div>
    </div>
  </div>
  <div id="modus_o">
    <p id="modus_txt">
      Empowering causes isn't just a wish; it's a choice we make. If you're
      uncertain about where to begin, start here! Dive into the heart of current
      events and discover the humans making a difference. Your click can be the
      catalyst for change –{" "}
      <a href="#" id="search_inline">
        how will you respond?
      </a>
    </p>
  </div>
  <div id="trending_opener">
    <div id="trending_opener_title">Spotlight</div>
    <p id="trending_opener_cap">
      Nonprofits that cure the
      I-want-to-do-something-about-this-rather-than-just-read-about-it feeling.
    </p>
  </div>
  <div id="trending_nps_grid_container">
    {/*there should be a couple of these; write the rest using js*/}
    <div id="trending_nps_container">
      <div className="trending_np">
        {/*maybe make img a?*/}
        <a className="trending_np_pic" href="#" />
        <div className="trending_np_info">
          <span className="trending_np_info_cat">
            <a href="#" className="trending_np_info_cat_link">
              Disaster Response
            </a>
          </span>
          |
          <span className="trending_np_info_region">
            <a href="#" className="trending_np_info_region_link">
              Morocco
            </a>
          </span>
          <div className="trending_np_info_proj_name">
            <a href="#" className="trending_np_info_proj_link">
              Morocco Earthquake Relief Fund
            </a>
          </div>
          <div className="trending_np_info_org_name">
            <a href="#" className="trending_np_info_org_link">
              by GlobalGiving
            </a>
          </div>
          <div className="trending_np_info_proj_blurb">
            A powerful earthquake hit Morocco on Sept. 8, killing more than
            2,800 people, injuring thousands more, and causing widespread
            damage. Your donation to the Morocco Earthquake Relief Fund will
            provide emergency relief and long-term support to affected
            communities.
          </div>
          <div className="trending_np_info_goal">
            <div className="goal_progress">
              <div className="goal_progress_amt">$60</div>
              raised of $600 goal
              <div className="goal_thermometer">
                <div className="goal_thermometer_percent" />
              </div>
            </div>
            <div className="goal_donate_button">
              <button type="button" className="donate_proj_link">
                DONATE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*THIS IS JUST PLACEHOLDER !!!!!*/}
      <div className="trending_np">
        {/*maybe make img a?*/}
        <a className="trending_np_pic" href="#" />
        <div className="trending_np_info">
          <span className="trending_np_info_cat">
            <a href="#" className="trending_np_info_cat_link">
              Disaster Response
            </a>
          </span>
          |
          <span className="trending_np_info_region">
            <a href="#" className="trending_np_info_region_link">
              Morocco
            </a>
          </span>
          <div className="trending_np_info_proj_name">
            <a href="#" className="trending_np_info_proj_link">
              Morocco Earthquake Relief Fund
            </a>
          </div>
          <div className="trending_np_info_org_name">
            <a href="#" className="trending_np_info_org_link">
              by GlobalGiving
            </a>
          </div>
          <div className="trending_np_info_proj_blurb">
            A powerful earthquake hit Morocco on Sept. 8, killing more than
            2,800 people, injuring thousands more, and causing widespread
            damage. Your donation to the Morocco Earthquake Relief Fund will
            provide emergency relief and long-term support to affected
            communities.
          </div>
          <div className="trending_np_info_goal">
            <div className="goal_progress">
              <div className="goal_progress_amt">$60</div>
              raised of $600 goal
              <div className="goal_thermometer">
                <div className="goal_thermometer_percent" />
              </div>
            </div>
            <div className="goal_donate_button">
              <button type="button" className="donate_proj_link">
                DONATE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="trending_np">
        {/*maybe make img a?*/}
        <a className="trending_np_pic" href="#" />
        <div className="trending_np_info">
          <span className="trending_np_info_cat">
            <a href="#" className="trending_np_info_cat_link">
              Disaster Response
            </a>
          </span>
          |
          <span className="trending_np_info_region">
            <a href="#" className="trending_np_info_region_link">
              Morocco
            </a>
          </span>
          <div className="trending_np_info_proj_name">
            <a href="#" className="trending_np_info_proj_link">
              Morocco Earthquake Relief Fund
            </a>
          </div>
          <div className="trending_np_info_org_name">
            <a href="#" className="trending_np_info_org_link">
              by GlobalGiving
            </a>
          </div>
          <div className="trending_np_info_proj_blurb">
            A powerful earthquake hit Morocco on Sept. 8, killing more than
            2,800 people, injuring thousands more, and causing widespread
            damage. Your donation to the Morocco Earthquake Relief Fund will
            provide emergency relief and long-term support to affected
            communities.
          </div>
          <div className="trending_np_info_goal">
            <div className="goal_progress">
              <div className="goal_progress_amt">$60</div>
              raised of $600 goal
              <div className="goal_thermometer">
                <div className="goal_thermometer_percent" />
              </div>
            </div>
            <div className="goal_donate_button">
              <button type="button" className="donate_proj_link">
                DONATE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*THIS IS JUST PLACEHOLDER !!!!!*/}
    </div>
  </div>
  <div id="more_button">
    <button type="button" id="load_more">
      More
    </button>
  </div>
  <div id="next_tools_grid_container">
    <div id="title_tools_container">Explore</div>
    <div id="tools_links_container">
      <span className="tools_links_buttons" id="left_tool_link">
        <div className="box_img">
          <a href="#">
            <img
              src="charity_water_child_smile.jpg"
              className="img_tools_links"
            />
          </a>
        </div>
        <a href="#donorbasicslink" className="box_links">
          Donor basics{" "}
          {/*"A page abt how this is just an encyclopedia of sorts--I am not here to take your money/there are no affiliate links/never any tracking + a link to globalgiving + charity navigator's safety and rules "*/}
        </a>
      </span>
      <span className="tools_links_buttons" id="mid_tool_link">
        <div className="box_img">
          <a href="#">
            <img src="outdoor_family.jpg" className="img_tools_links" />
          </a>
        </div>
        <a href="#safetylink" className="box_links">
          Safety{" "}
          {/*REITERATE THAT THIS IS NOT GOING TO TAKE UR MONEY. Incl link to how to not get scammed*/}
        </a>
      </span>
      <span className="tools_links_buttons" id="right_tool_link">
        <div className="box_img">
          <a href="#">
            <img src="medical_outreach.jpeg" className="img_tools_links" />
          </a>
        </div>
        <a href="#searchlink" className="box_links">
          Search
        </a>
      </span>
    </div>
  </div>
  <footer>
    <div className="foot_col" id="site_info">
      <img
        src="transparent_index_logo.png"
        id="logo_transparent"
        alt="Nonprofit Index logo"
      />
      <p id="footer_tagline">
        <i>Empowering the informed.</i>
      </p>
    </div>
    <div className="foot_col lower_foot_col" id="misc_links">
      <div className="misc_title">About</div>
      <ul className="footer_nav_list">
        <li>
          <a className="misc_nav_links" href="/about.html">
            About us
          </a>
        </li>
        <li>
          <a className="misc_nav_links" href="#">
            Safety statement
          </a>
        </li>
        <li>
          <a className="misc_nav_links" href="#">
            Developing
          </a>
        </li>
      </ul>
    </div>
    <div className="foot_col lower_foot_col" id="accounts">
      <div className="misc_title">My account</div>
      <ul className="footer_nav_list">
        <li>
          <a className="misc_nav_links" href="#">
            Log in
          </a>
        </li>
        <li>
          <a className="misc_nav_links" href="#">
            Sign up
          </a>
        </li>
        <li>
          <a className="misc_nav_links" href="#">
            My causes
          </a>
        </li>
      </ul>
    </div>
    <div className="foot_col lower_foot_col" id="contact">
      <div className="misc_title">Contact</div>
      <ul className="footer_nav_list">
        <li>
          <a className="misc_nav_links" href="#">
            Email form
          </a>
        </li>
        <li>
          <a className="misc_nav_links" href="#">
            Github
          </a>
        </li>
      </ul>
    </div>
    <div id="copyright">
      Copyright © 2023 Alexis Abramson |
      <a id="repo_home_link" href="#insertgithubreadme">
        README.md
      </a>
    </div>
  </footer>
</>

        )
}
