import Link from 'next/link'
import NavBar from '../../components/navigation'
import SupportBanner from '@/components/support_banner';
import Footer from '../components/footer'

export default function Search() {
    return (
        <>
        <div id = "container">
            <NavBar/>
            <SupportBanner/>
            <div id = "site_content">
                <h1>Welcome to the search page.</h1>
                <p>lorem lorem</p>
            </div>
        </div>
       </>
    );
}
