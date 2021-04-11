import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Torrent from '../../components/Torrent'

export const getServerSideProps = async (context) => {
  // Get the Queries from URL
  const keyword = context.query.params[0]
  const page = context.query.page
  // Make the API Request to fetch torrents
  const host = 'https://leaftorrents.vercel.app'
  const url = `${host}/api/search/${keyword}/${page}`
  const res = await fetch(url).then((res) => res.json())
  // Redirect to 404 page if no torrent is found
  if (!res.pagination.nextPage && !res.pagination.prevPage) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  } else if (!res.torrents) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  // Return the fetched torrents to the template
  return {
    props: { res },
  }
}

export default function params({ res }) {
  // Get Required Queries for template from URL
  const router = useRouter()
  const { params, page } = router.query

  return (
    <div className="mt-24">
      <Head>
        <meta name="theme-color" content="#1f2937" />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      {/* Show the Total number of torrents and pages. Also show which page the user is on currently */}
      {(res.pagination.nextPage || res.pagination.prevPage) && (
        <div className="font-bold w-11/12 md:w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto text-center text-gray-700">
          <p className="text-lemon-md text-xl text-center leading-8">
            Search Results for : <br />
            {params[0].split('+').join(' ')}
          </p>
          <p className="mt-2 text-sm text-gray-500 text-lemon-md">
            Total {res.pagination.results} Torrents were found
          </p>
          <p className="mt-2 text-sm text-gray-500 text-lemon-md">
            Showing {page} of {res.pagination.totalPages} Pages
          </p>
        </div>
      )}
      {/* Map through the torrent entries found in the response and render a Torrent component for each of the torrents */}
      <div className="w-11/12 md:w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto flex flex-col space-y-7 mt-8">
        {res.torrents.map((torrent, index) => {
          return <Torrent key={index} torrent={torrent} />
        })}
      </div>
      {/* Next Page and Previous Page Buttons */}
      <div className="w-10/12 md:w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto flex justify-around items-center my-8">
        {res.pagination.prevPage && (
          <Link href={`/search/${params[0]}?page=${res.pagination.prevPage}`}>
            <button className="px-5 h-12 bg-green-600 rounded text-lemon-md text-white hover:bg-gray-800 flex items-center">
              <img
                className="h-8 mr-3 transform rotate-180"
                src="/icons/arrow.svg"
                alt=""
              />
              <span>Prev</span>
            </button>
          </Link>
        )}
        {res.pagination.nextPage && (
          <Link href={`/search/${params[0]}?page=${res.pagination.nextPage}`}>
            <button className="px-5 h-12 bg-green-600 rounded text-lemon-md text-white hover:bg-gray-800 flex items-center">
              <span>Next</span>
              <img className="h-8 ml-3" src="/icons/arrow.svg" alt="" />
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
