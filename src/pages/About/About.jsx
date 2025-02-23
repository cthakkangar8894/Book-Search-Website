import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <h4>"A book is a dream that you hold in your hands." – Neil Gaiman</h4>
            <p className='fs-17'>Welcome to BookHub, your ultimate destination for discovering books and exploring knowledge. Whether you’re searching for a classic masterpiece, a modern bestseller, or a hidden gem, BookHub helps you find the right book with ease.</p>
            <p className='fs-17'>Our platform provides detailed information about books, including the title, author, edition, and a brief summary, allowing you to explore and choose the perfect read. With an intuitive search system, you can quickly find books across various genres, authors, and topics.</p>
            <p className='fs-17'>At BookHub, we believe that books are the key to endless learning and imagination. Our goal is to make book discovery effortless, ensuring that every reader can access valuable information and find stories that inspire, educate, and entertain.</p>
            <p className='fs-17'>Start your journey through the world of books today. BookHub—where every book has a story, and every story finds its reader.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
