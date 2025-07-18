import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TopHead       from './components/TopHead';
import Header        from './components/Header';
import Footer        from './components/Footer';

import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import ServicesPage  from './pages/ServicesPage';
import ProductsPage  from './pages/ProductsPage';
import NewsPage      from './pages/NewsPage';
import PostDetail    from './pages/PostDetail';
import ProductDetail from './pages/ProductDetail';
import ContactPage   from './pages/ContactPage';

export default function App() {
  return (
    <>
      <TopHead />
      <Header />

      <main>
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/services"       element={<ServicesPage />} />
          <Route path="/products"       element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/news"           element={<NewsPage />} />
          <Route path="/news/:slug"     element={<PostDetail />} />
          <Route path="/contact"        element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}



