
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import FullPage from './pages/FullPage'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Header />
          <Routes>
            <Route path="/" element={<FullPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
