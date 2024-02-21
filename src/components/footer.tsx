import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="foot_col" id="site_info">
                    <img src="transparent_index_logo.png" id="logo_transparent" alt="Nonprofit Index logo" />
                    <p id="footer_tagline"><i>Empowering the informed.</i></p>
                </div>
                <div className="foot_col lower_foot_col" id="misc_links">
                    <div className="misc_title">
                    About
                    </div>
                    <ul className="footer_nav_list">
                    <li>
                        <Link className="misc_nav_links" href="#">About us</Link>
                    </li>
                    <li>
                        <Link className="misc_nav_links" href="#">Safety statement</Link>
                    </li>
                    <li>
                        <Link className="misc_nav_links" href="#">Developing</Link>
                    </li>
                    </ul>
                </div>
                <div className="foot_col lower_foot_col" id="accounts">
                    <div className="misc_title">
                    My account
                    </div>
                    <ul className="footer_nav_list">
                    <li>
                        <Link className="misc_nav_links" href="#">Log in</Link>
                    </li>
                    <li>
                        <Link className="misc_nav_links" href="#">Sign up</Link>
                    </li>
                    <li>
                        <Link className="misc_nav_links" href="#">My causes</Link>
                    </li>
                    </ul>
                </div>
                <div className="foot_col lower_foot_col" id="contact">
                    <div className="misc_title">
                    Contact
                    </div>
                    <ul className="footer_nav_list">
                    <li>
                        <Link className="misc_nav_links" href="#">Email form</Link>
                    </li>
                    <li>
                        <Link className="misc_nav_links" href="#">Github</Link>
                    </li>
                    </ul>
                </div>
            </footer>   
        </>
    )
}
