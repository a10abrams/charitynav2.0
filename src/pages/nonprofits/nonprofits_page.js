import Link from 'next/link'
import NavBar from '../../components/navigation'
import SupportBanner from '../../components/support_banner'
import Footer from '../../components/footer'

export default function Nonprofits() {
    return (
        <>
        <div id = "container">
            <NavBar/>
            <SupportBanner/>
            <div id = "site_content">
            <div id = "home_gallery">
              
            </div>
            <div className = "container_pg_layout_01"> 
              <div className = "left_gallery_layout_01">
              
              </div>
              <div className = "article_layout_01">
                <h1 className = "article_title_layout_01">
                  Nonprofits
                </h1>
                <p className = "article_content_layout_01" id = "np_blurb">
                    lorem lorem
                </p>
              </div>
              <div className = "right_gallery_layout_01">
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        </>
    );
}
