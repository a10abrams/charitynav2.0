import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useGlobalGivingData } from './api/api'
import { useGalleryPhotos } from '../lib/hooks/useGalleryPhotos'
import React, { useEffect, useState} from 'react'
import NavBar from '@/components/navigation'
import SupportBanner from '../components/support_banner'
import Footer from '../components/footer'
import CarouselComponent from '../components/carousel_component'

const Home = () => {
  const { galleryPhotos } = useGalleryPhotos(5);

  // JSX structure for Home page
  return (
    <>
        <Head>
          <title>The News Trend-Based Nonprofit Index</title>
          <meta name="description" content="Your trusted source for comprehensive insights into charitable organizations focusing on humanist topics in the news. At our heart, we are a beacon of hope and compassion, curating information on nonprofits responding to the pressing challenges of our time." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div id = "container">
          <Navbar/>
          <SupportBanner/>
          <div id = "site_content">
            <div id = "home_gallery">
              
            </div>
            <div className = "container_pg_layout_01"> 
              <div className = "left_gallery_layout_01">
                <CarouselComponent photos={ galleryPhotos }/>
              </div>
              <div className = "article_layout_01">
                <h1 className = "article_title_layout_01">
                  Welcome to The News Trend-Based Nonprofit Index.
                </h1>
                <p className = "article_content_layout_01" id = "home_blurb">
                  Empowering causes isn&apos;t just a wish; it&apos;s a choice we make. Dive into the heart of current
                  events and discover the humans making a difference.
                  <span id = "opening_cta">Your click can be the
                  catalyst for change -&#160;
                  <Link href = "/search/search_page" id = "search_inline">
                    how will you respond?
                  </Link>
                  </span>
                </p>
              </div>
              <div className = "right_gallery_layout_01">
                {/* container for api info */}
                
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    </>
  )
};

export default Home;
