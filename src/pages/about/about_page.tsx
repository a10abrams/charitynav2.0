import Link from 'next/link'
import NavBar from '../../components/navigation'
import SupportBanner from '@/components/support_banner';
import Footer from '../../components/footer'

export default function About() {
    return (
        <>
        <div id = "container">
            <NavBar/>
            <SupportBanner/>
            <div id = "site_content">
                <div id = "about_gallery">

                </div>
                <div className = "container_pg_layout_01">
                    <div className = "left_gallery_layout_01" id = "about_left_gallery">
                    </div>
                    <div className = "article_layout_01" id = "about_article_layout">
                        <h1 className = "article_title_layout_01">
                            About Us
                        </h1>
                        <div id = "about_container">
                            <div id="about_blurb">
                                <p id="about_quote">
                                "When I was a boy and I would see scary things in the news, my mother would say to me, 'Look for the helpers. You will always find people who are helping.'"
                                </p>
                                <p id="author_about_quote">
                                    -Fred Rogers
                                </p>
                            </div>
                            <div id = "about_blurb_infograph">
                                <div id = "about_info_item_1">
                                    <p className="about_info_accent">
                                        Dynamic updates
                                    </p>
                                    <p className="about_info_statement">
                                        because the world never stops
                                    </p>
                                </div>
                                <div id="about_info_item_2">
                                    <p className="about_info_accent">
                                    400K+
                                    </p>
                                    <p className="about_info_statement">
                                    vetted organizations 
                                    </p>
                                </div>
                                <div id="about_info_item_3">
                                    <p className="about_info_accent">
                                    Powered by
                                    </p>
                                    <p className="about_info_statement">
                                    GlobalGiving and Charity Navigator
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "right_gallery_layout_01" id = "about_right_gallery"></div>
                </div>
            </div>
            <Footer/>
        </div>
       </>
    );
}
