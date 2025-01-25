import React from 'react'
import { useNavigate } from 'react-router-dom'
import { handleHomeBackClick, handleSearchClick } from '../home/event/event'

const UserSearchSongPages: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">タイトルでさがす</h1>
      <div className="text-center mb-4">
        <p className="text-xs front-bold">▶タイトルをいれてね</p>
      </div>
      <div className="text-center mb-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="例:恋のメガラバ"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md"
      >
        検索
      </button>
      <button
        onClick={() => handleSearchClick(navigate)}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      >
        キーワードで探す
      </button>
      <button
        onClick={() => handleSearchClick(navigate)}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      >
        映像から探す
      </button>
      <button
        onClick={() => handleSearchClick(navigate)}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      >
        再生時間から探す
      </button>
      <button
        onClick={() => handleSearchClick(navigate)}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      >
        もどる
      </button>
    </div>
  )
}

export default UserSearchSongPages
