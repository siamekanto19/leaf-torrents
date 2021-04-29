import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  // Effect
  useEffect(() => {
    document.getElementById('keywordInput').focus()
    return () => {}
  }, [])

  // Router Helpers
  const router = useRouter()

  // States
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Functions
  const handleClick = () => {
    if (!query) {
      return
    }
    setIsLoading(true)
    const keyword = query.split(' ').join('+').trim()
    router.push(`/search/${keyword}?page=1`)
  }
  // Search on Enter Press
  const handleKeyup = (e) => {
    if (!query) {
      return
    }

    if (e.keyCode == 13) {
      setIsLoading(true)
      const keyword = query.split(' ').join('+').trim()
      router.push(`/search/${keyword}?page=1`)
    }
  }

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center home-section">
      {/* Render Head Contents */}
      <Head>
        <title>Leaf Torrents</title>
        <meta
          name="description"
          content="Leaf Torrents is a Powerful Torrent Indexer that lets you search and download Torrents from most of the popular Torrent Websites and combine them in a single place."
        />
      </Head>
      <div className="w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto">
        {/* Logo and Hero Text */}
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto">
          <img
            src="icons/leaf.svg"
            className="h-20 mr-4 md:mr-6 lg:mr-8"
            alt=""
          />
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl tracking-widest text-center text-lemon-bold mt-4 lg:mt-0">
            Leaf Torrents
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center relative">
          {/* Input Box to make the search */}
          <input
            className="mt-10 lg:mt-14 xl:mt-16 md:text-lg rounded lg:rounded-l text-center xl:text-xl text-lemon-bold px-4 h-14 lg:h-16 bg-white w-full text-gray-800 shadow-md"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyup}
            placeholder="Enter Keyword"
            id="keywordInput"
          />
          {/* Search Button for Desktop */}
          <button
            onClick={handleClick}
            className="hidden lg:flex absolute rounded-r bottom-0 right-0 bg-green-600 w-20 lg:w-36 xl:w-40 2xl:w-44 shadow-md text-lg text-white text-lemon-bold h-14 lg:h-16 hover:bg-green-700 justify-center items-center"
          >
            {!isLoading && (
              <>
                <img src="icons/search.svg" className="h-7 mr-3" alt="" />
                <span>Search</span>
              </>
            )}
            {isLoading && (
              <img
                className="h-8 animate-spin"
                src="icons/loading.svg"
                alt=""
              />
            )}
          </button>
          {/* Search Button for Mobile */}
          <button
            onClick={handleClick}
            className="bg-green-600 w-1/2 mx-auto rounded shadow-md mt-4 lg:hidden text-lg text-lemon-bold text-white h-14 hover:bg-green-700 flex justify-center items-center"
          >
            {!isLoading && (
              <>
                <img src="icons/search.svg" className="h-7 mr-3" alt="" />
                <span>Search</span>
              </>
            )}
            {isLoading && (
              <img
                className="h-8 animate-spin"
                src="icons/loading.svg"
                alt=""
              />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
