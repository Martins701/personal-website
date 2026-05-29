
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import FullPage from './pages/FullPage'

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Header />
          <Routes>
            <Route path="/" element={<FullPage />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
