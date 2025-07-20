import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import TopHead       from './components/TopHead';
import Header        from './components/Header';
import Footer        from './components/Footer';

import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NewsPage      from './pages/NewsPage';
import PostDetail    from './pages/PostDetail';
import ProductDetail from './pages/ProductDetail';
import ContactPage   from './pages/ContactPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import SustainabilityPage from './pages/SustainabilityPage';

export default function App() {
  return (
    <>
      <TopHead />
      <Header />

      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/news"           element={<NewsPage />} />
          <Route path="/news/:slug"     element={<PostDetail />} />
          <Route path="/contact"        element={<ContactPage />} />
          <Route path="/capabilities"   element={<CapabilitiesPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}



