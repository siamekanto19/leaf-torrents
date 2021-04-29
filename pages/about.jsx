import React from 'react'
import Head from 'next/head'

export default function about() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <article className="mt-28 w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto">
        <h1 className="text-green-600 text-lemon-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center tracking-wider">
          About Leaf Torrents
        </h1>
        <p className="mt-10 text-lg lg:text-xl text-gray-800">
          In Simple Words, Leaf Torrents is a Powerful Torrent Indexer App. Leaf
          Torrents isn't just another Torrent Website where you download
          contents from. Rather, Leaf Torrents is a service that let's you crawl
          over multiple popular Torrent Websites and check all of the Website's
          Torrent Listings in a single organized place. How cool is that?
          <br /> <br />
          What do we normally do when we need to download Torrents? We run from
          one website to another in search for our desired Torrent File if we
          can't find it in our first try. That's a lot of hassle if you ask me!
          Leaf Torrents is here just to solve that one problem. With Leaf
          Torrents, you can type your Search Query and crawl most of the popular
          Torrent Websites for results to that query. After crawling, we will
          show you all of the Torrent Listings that we have found for your
          desired keyword. <br /> <br /> And guess what, for most of the Torrent
          Results that we find for you, you can even download the Torrent right
          from here! You won't even need to visit other Torrent Websites to
          download! We know you love Magnet Links. We try our best to find
          Magnet Links for all of the Torrents, but even if we can't find Magnet
          Links, we can also provide you with the .torrent files for smooth
          downloading! Now that's not a bad deal, right? 😁
        </p>
      </article>
    </div>
  )
}
