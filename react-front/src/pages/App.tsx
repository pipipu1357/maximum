import React from 'react'
import UserHomePages from './home/UserHomePages'
import UserSearchSongHomePages from './search/UserSearchSongHomePages'
import UserDiscographyPages from './discography/UserDiscographyPages'
import UserGachaGachaPages from './gachagacha/UserGachagachaPages'
import UserSearchSongTitlePages from './search/UserSearchSongTitlePages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHomePages title="ホルモン曲検索" />} />
        <Route path="/search" element={<UserSearchSongHomePages />} />
        <Route path="/search/title" element={<UserSearchSongTitlePages />} />
        <Route path="/discography" element={<UserDiscographyPages />} />
        <Route path="/gachagacha" element={<UserGachaGachaPages />} />
      </Routes>
    </Router>
  )
}

export default App
