import React from 'react'

const UserSearchSongPages: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">曲をさがす</h1>
      <input
        type="text"
        placeholder="曲名を入力してください"
        className="px-4 py-2 mb-4 border border-gray-300 rounded-md"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
        さがす
      </button>
    </div>
  )
}

export default UserSearchSongPages
