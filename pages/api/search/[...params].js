// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TorrentIndexer from 'torrent-indexer'
const Torrent = new TorrentIndexer()

export default async (req, res) => {
  // Get The Queries
  const { params } = req.query
  const query = params[0]
  const page = parseInt(params[1])

  // Pagination Logics
  if (!page) {
    page = 1
  }

  // Make the Search
  let results = await Torrent.search(query)

  // Paginate
  const pagination = {
    totalPages: Math.floor(results.length / 15),
  }
  if (pagination.totalPages > 1 && page == pagination.totalPages) {
    pagination.nextPage = false
    pagination.prevPage = page - 1
  } else if (pagination.totalPages > 1 && page < pagination.totalPages) {
    pagination.nextPage = page + 1
    pagination.prevPage = page - 1
  } else {
    pagination.nextPage = false
    pagination.prevPage = false
  }

  if (pagination.prevPage == 0) {
    pagination.prevPage = false
  }

  results = results.slice().sort((a, b) => b.seeders - a.seeders)

  const paginatedResults = results.slice(page * 15, page * 15 + 15)
  // Response
  res.status(200).json({
    pagination: pagination,
    torrents: paginatedResults,
  })
}
