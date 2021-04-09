import React from 'react'

export default function Torrent(props) {
  return (
    <div className="shadow-sm border rounded bg-gray-100 transform hover:-translate-y-4 hover:border-gray-300 transition-transform duration-100 cursor-pointer w-full relative overflow-x-hidden flex flex-col">
      {props.torrent.seeders <= 10 && (
        <div className="bg-red-500 h-8 text-xs text-lemon-md text-white w-full grid place-items-center">
          Low Seeder ( Not Recommended )
        </div>
      )}
      {props.torrent.seeders >= 500 && props.torrent.seeders < 1500 && (
        <div className="bg-yellow-300 h-8 text-xs text-lemon-md text-gray-800 w-full grid place-items-center">
          Decent Seeder ( Recommended )
        </div>
      )}
      {props.torrent.seeders >= 1500 && props.torrent.seeders < 3000 && (
        <div className="bg-green-600 h-8 text-xs text-lemon-md text-white w-full grid place-items-center">
          High Seeder ( Highly Recommended )
        </div>
      )}
      {props.torrent.seeders >= 3000 && (
        <div className="bg-pink-600 h-8 text-xs text-lemon-md text-white w-full grid place-items-center">
          Most Popular
        </div>
      )}
      <div className="w-full h-full p-4 lg:p-5">
        <h1 className="text-lemon-bold text-gray-800">
          {props.torrent.fileName}
        </h1>
        <div className="w-full flex justify-between items-center mt-2 text-lemon-md text-sm text-gray-600">
          <p>Seeder: {props.torrent.seeders}</p>
          <p>Leecher: {props.torrent.leechers}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-lemon-md text-xs mt-2">
            Size: {props.torrent.size}
          </p>
          {props.torrent.link && props.torrent.link.startsWith('magnet') && (
            <a href={props.torrent.link}>
              <button className="px-3 mt-4 h-10 bg-blue-500 hover:bg-blue-600 text-white text-lemon-md text-xs rounded">
                Magnet Download
              </button>
            </a>
          )}
          {props.torrent.link && !props.torrent.link.startsWith('magnet') && (
            <a href={props.torrent.link}>
              <button className="px-4 mt-4 h-10 bg-blue-500 hover:bg-blue-600 text-white text-lemon-md text-xs rounded">
                Download
              </button>
            </a>
          )}
        </div>
        {props.torrent.resolution && (
          <p className="font-semibold mt-2">
            Resolution: {props.torrent.resolution}
          </p>
        )}
        <p className="mt-2 font-medium text-gray-600">
          Uploaded {props.torrent.uploaded} on {props.torrent.sourceName}
        </p>
      </div>
    </div>
  )
}
