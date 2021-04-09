import Link from 'next/link'
import { useRouter } from 'next/router'
import Torrent from '../../components/Torrent'

export const getServerSideProps = async (context) => {
  const keyword = context.query.params[0]
  const page = context.query.page
  const url = `https://leaf-torrents.vercel.app/api/search/${keyword}/${page}`
  const res = await fetch(url).then((res) => res.json())

  return {
    props: { res },
  }
}

export default function params({ res }) {
  const router = useRouter()
  const { params, page } = router.query

  return (
    <div className="mt-28">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto flex flex-col space-y-7">
        {res.torrents.map((torrent, index) => {
          return <Torrent key={index} torrent={torrent} />
        })}
      </div>
      <div className="w-10/12 md:w-3/4 lg:w-2/3 2xl:w-1/2 mx-auto flex justify-around items-center my-5">
        {res.pagination.prevPage && (
          <Link href={`/search/${params[0]}?page=${res.pagination.prevPage}`}>
            <button className="w-32 h-14 bg-green-600 rounded text-lemon-bold text-white hover:bg-gray-800">
              Previous
            </button>
          </Link>
        )}
        {res.pagination.nextPage && (
          <Link href={`/search/${params[0]}?page=${res.pagination.nextPage}`}>
            <button className="w-32 h-14 bg-green-600 rounded text-lemon-bold text-white hover:bg-gray-800">
              Next
            </button>
          </Link>
        )}
      </div>
      {!res && (
        <div className="text-gray-800 text-4xl text-lemon-bold">
          No Results Found
        </div>
      )}
    </div>
  )
}
