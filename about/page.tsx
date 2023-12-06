import Link from 'next/link'
import NavBar from '../navigation'

export default function About() {
    return (
        <>
        <div id = "container">
            <NavBar/>
            <div id = "site_content">
                <h1>Welcome to the about page.</h1>
                <p>lorem lorem</p>
            </div>
        </div>
       </>
    );
}
