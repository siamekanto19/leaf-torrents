// Import Torrent Search Library
import Torrent from 'torrent-search-api'
// Enable all of the Public Torrent Providers where the search will be performed
Torrent.enablePublicProviders()

export default async (req, res) => {
  // Get The Queries from client
  const { params } = req.query
  const query = params[0]
  const page = parseInt(params[1])

  // Set the page query to 1 if it doesn't come from client
  if (!page) {
    page = 1
  }

  // Make the Search
  let results = await Torrent.search(query)

  // Paginate
  const pagination = {
    totalPages: Math.floor(results.length / 15),
    results: results.length,
  }
  // Pagination Logics
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
  // Generate the paginated result for torrents
  const paginatedResults = results.slice(page * 15, page * 15 + 15)
  // Send the torrents along with pagination to the client as Response
  res.status(200).json({
    pagination: pagination,
    torrents: paginatedResults,
  })
}
