import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home'
import Repository from './pages/Repository/Repository'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [owner, setOwner] = useState("godaddy")
  const [repos, setRepos] = useState([])

  // Fetch the repos from the owner when component loads or owner change
  useEffect(() => {
    async function LoadRepos(owner) {
        const apiUrl = `https://api.github.com/orgs/${owner}/repos`
        await fetch(apiUrl)
          .then(response => response.json())
          .then(data => setRepos(data))
          .catch(err => console.log(err));
    }
    LoadRepos(owner)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home repos={repos}/>} />
        <Route path="/repository/:repoName" element={<Repository repos={repos}/>} />
      </Routes>
    </>
  )
}

export default App
