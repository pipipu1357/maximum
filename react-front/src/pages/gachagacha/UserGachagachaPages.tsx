import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserGachagachaPages: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">今日の亮君ガチャ</h1>
      <div className="text-center mb-4">
        <p className="text-xs front-bold">
          ▶ランダムで今日の亮君ガチャをよもう
        </p>
      </div>

      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
        ガチャをまわす
      </button>

      <div className="w-80  rounded-lg shadow-md mt-4 mb-4">
        {/* ガチャの結果を表示するスペース */}
        <p className="text-lg font-bold text-center text-red-600">
          2005年9月20日の亮君
        </p>
      </div>

      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      >
        もどる
      </button>
    </div>
  )
}

export default UserGachagachaPages
