import React from 'react';
import HeroSection from './components/hero-section';
import Navbar from '@/shared-components/navbar';
import BrandSection from './components/brand-section';
import OurServicesSection from './components/our-services-section';
import InfographicsSection from './components/infographics-section';
import TestimonialSection from './components/testimonial-section';
import Faq from './components/faq-section';
import Blog from './components/blog';
import CallToActionSection from './components/call-to-action-section';
import Footer from '@/shared-components/footer';


export default function Home() {
  return (
    <div className='font-sans'>
      <Navbar/>
      <HeroSection/>
      <BrandSection/>
      <OurServicesSection/>
      <InfographicsSection/>
      <TestimonialSection/>
      <Faq/>
      <Blog/>
      <CallToActionSection/>
      <Footer/>
    </div>
  );
}
