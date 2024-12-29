import React from 'react'
import UserHomePages from './home/UserHomePages'
import UserSearchSongPages from './search/UserSearchSongPages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserHomePages title="ホルモン曲検索" />} />
        <Route path="/search" element={<UserSearchSongPages />} />
      </Routes>
    </Router>
  )
}

export default App
