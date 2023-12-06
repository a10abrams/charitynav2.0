import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from './navigation'
import { getGalleryPhotos } from "../lib/api"
import React, {useState} from 'react'

export default function Home() {
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
        <div id = "site_content">
          <div id = "gallery">

          </div>
            <h1>Welcome to the index.</h1>
        </div>
      </div>
    </>
  )
}
