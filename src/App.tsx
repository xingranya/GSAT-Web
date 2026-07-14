import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Features from './pages/Features';
import Architecture from './pages/Architecture';
import Developer from './pages/Developer';
import Download from './pages/Download';
import Changelog from './pages/Changelog';

export default function App() {
  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen flex flex-col font-sans bg-background text-foreground">
        <ScrollToTop />
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/download" element={<Download />} />
            <Route path="/changelog" element={<Changelog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
