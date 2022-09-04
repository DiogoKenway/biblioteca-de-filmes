import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Movie from './pages/movie/Movie'
import Search from './pages/search/Search'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path="movie/:id" element={<Movie />}/>
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
