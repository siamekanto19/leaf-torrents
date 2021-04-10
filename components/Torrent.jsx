import React from 'react'

export default function Torrent(props) {
  return (
    <div className="shadow-sm border rounded bg-gray-100 transform hover:border-gray-400 transition-transform duration-100 cursor-pointer w-full relative overflow-x-hidden flex flex-col">
      {props.torrent.seeds <= 10 && (
        <div className="bg-red-500 h-8 text-xs text-lemon-md text-white w-full grid place-items-center">
          Low Seeder
        </div>
      )}
      {props.torrent.seeds >= 500 && props.torrent.seeds < 1500 && (
        <div className="bg-yellow-300 h-8 text-xs text-lemon-md text-gray-800 w-full grid place-items-center">
          Decent Seeder
        </div>
      )}
      {props.torrent.seeds >= 1500 && props.torrent.seeds < 3000 && (
        <div className="bg-green-600 h-8 text-xs text-lemon-md text-white w-full grid place-items-center">
          High Seeder
        </div>
      )}
      {props.torrent.seeds >= 3000 && (
        <div className="bg-pink-600 h-8 text-xs text-lemon-md text-white w-full grid place-items-center">
          Most Popular
        </div>
      )}
      <div className="w-full h-full p-4 lg:p-5">
        <h1 className="text-lemon-bold text-gray-800">{props.torrent.title}</h1>
        <div className="w-full flex justify-between items-center mt-2 text-lemon-md text-sm text-gray-600">
          <p>Seeder: {props.torrent.seeds}</p>
          <p>Leecher: {props.torrent.peers}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <p className="text-lemon-md text-sm mt-2">
              Size: {props.torrent.size}
            </p>
          </div>
          <div className="flex flex-col items-end">
            {props.torrent.magnet && (
              <a href={props.torrent.magnet}>
                <button className="px-3 mt-2 h-10 bg-indigo-600 hover:bg-indigo-700 text-white text-lemon-md text-xs rounded">
                  Magnet Download
                </button>
              </a>
            )}
            {props.torrent.link && (
              <a href={props.torrent.link}>
                <button className="px-4 mt-2 h-10 bg-blue-500 hover:bg-blue-600 text-white text-lemon-md text-xs rounded">
                  File Download
                </button>
              </a>
            )}
            {props.torrent.desc && (
              <a href={props.torrent.desc} target="_blank">
                <button className="px-4 mt-4 h-10 bg-gray-700 hover:bg-gray-800 text-white text-lemon-md text-xs rounded">
                  Visit Provider
                </button>
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 font-medium text-gray-600">
          Uploaded {props.torrent.time} on {props.torrent.provider}
        </p>
      </div>
      {!props.torrent.link && !props.torrent.magnet && props.torrent.desc && (
        <div className="w-full h-14 bg-blue-200 text-gray-800 text-sm grid place-items-center text-lemon-md text-center px-6">
          Visit Provider to download this torrent manually
        </div>
      )}
    </div>
  )
}
