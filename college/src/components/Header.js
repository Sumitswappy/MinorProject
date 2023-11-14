import React from 'react';
import Navbar from './Navbar.js';
import Carousel from './Carousel';
import Tabs from './Tabs';
import HelpfulReviews from './HelpfulReviews';
import Footer from './Footer';
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
