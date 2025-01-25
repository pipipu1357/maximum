import React from 'react'
import Button from '../../components/Button'
import {
  handleSearchClick,
  handleDiscographyClick,
  handleGachagachaClick,
} from './event/event'
import { useNavigate } from 'react-router-dom'

interface UserHomePagesProps {
  title: string
}

const UserHomePages: React.FC<UserHomePagesProps> = ({ title }) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>
      <Button
        label="曲をを探す"
        onClick={() => handleSearchClick(navigate)}
        className="hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      />
      <Button
        label="ディスコグラフィー"
        onClick={() => handleDiscographyClick(navigate)}
        className="hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      />
      <Button
        label="今日の亮君ガチャ"
        onClick={() => handleGachagachaClick(navigate)}
        className="hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
      />
    </div>
  )
}

export default UserHomePages
