import React from 'react';
import Navbar from './Navbar.js';
import Carousel from './Carousel.jsx';
import Tabs from './Tabs.js';
import HelpfulReviews from './HelpfulReviews.js';
import Footer from './Footer.jsx';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel/>
        <Tabs/>
        <HelpfulReviews/>
        <Footer/>
    </div>
  );
}
