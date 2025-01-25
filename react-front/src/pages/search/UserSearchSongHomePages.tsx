import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  handleSearchTitleClick,
  handleHomeBackClick,
} from '../home/event/event'

const UserSearchSongHomePages: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">きょくをさがす</h1>
      <div className="text-center">
        <p className="text-xs front-bold">▶タイトルなんとなく覚えてるよ</p>
      </div>
      <button
        onClick={() => handleSearchTitleClick(navigate)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-700"
      >
        タイトルでさがす
      </button>
      <div className="text-center">
        <p className="text-xs front-bold">▶フェスでよくやる曲がしりたい？</p>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-700">
        キーワードでさがす
      </button>
      <div className="text-center">
        <p className="text-xs front-bold">
          ▶ライブやミュージックビデオがみたい！
        </p>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-700">
        えいぞうからさがす
      </button>
      <div className="text-center">
        <p className="text-xs front-bold">▶一番短い曲はどれ？</p>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-700">
        再生時間からさがす
      </button>
      <button
        onClick={() => handleHomeBackClick(navigate)}
        className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        ホームに戻る
      </button>
    </div>
  )
}

export default UserSearchSongHomePages
