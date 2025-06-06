import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Connect from "./pages/Connect"
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
