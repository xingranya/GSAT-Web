import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Developer from './pages/Developer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="flex-grow pt-24 pb-16 px-6 lg:px-8 max-w-[1180px] mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
