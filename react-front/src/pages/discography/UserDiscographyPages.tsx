import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserDiscographyPages: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">ディスコグラフィー</h1>
      <div className="text-center mb-8">
        <h2 className="text-x1 front-bold mb-4">▶アルバム</h2>
        {/* ここにアルバムのリストを表示する */}
      </div>
      <div className="text-center mb-8">
        <h2 className="text-x1 front-bold mb-4">▶シングル</h2>
        {/* ここにシングルのリストを表示する */}
      </div>
      <div className="text-center mb-8">
        <h2 className="text-x1 front-bold mb-4">▶その他</h2>
        {/* ここにシングルのリストを表示する */}
      </div>
      <div className="text-center mb-8">
        <h2 className="text-x1 front-bold mb-4">▶DVD</h2>
        {/* ここにシングルのリストを表示する */}
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

export default UserDiscographyPages
