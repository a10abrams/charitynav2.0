import Link from 'next/link'
import Image from 'next/image'
import styles from 'globals'

export default function NavBar () {
    return (
        <>
        <div id = "nav_container">
            <nav id = "left_aligned_bar">
                <div style={{position: "fixed", top: "0"}}>
                    <div className = "content_link">
                        <Link href = "/">Home placeholder</Link>
                    </div>
                    <div className = "content_link">
                        <Link href = "/about/about_page">About Us</Link>
                    </div>
                    <div className = "content_link">
                        <Link href = "/nonprofits/nonprofits_page">Nonprofits</Link>
                    </div> 
                    <div className = "content_link">
                        <Link href = "/search/search_page">Search</Link>
                    </div>
                </div>
                <div style={{position: "fixed", bottom: "0"}}>
                    <div className = "content_link">
                        <Link href = "#">Login</Link>
                    </div>
                    <div className = 'content_link'>
                        <Link href ="#">Sign up</Link>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}
