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
            <h2 className='about-title fs-26 ls-1'>About Bookaholic</h2>
            <p className='fs-17'>
There are so many book blogs, all very good. The book blogging world is one of the oldest and bustling, close-knit communities, way before Bookstagram (Bookish community on Instagram), Book Twitter, Booktube (Bookish community on Youtube) and other social media communities gained prominence. Book blogs are old souls. They save you with short recommendations and long essays, rambling posts and pictures of lovely stacks on the nightstand. In the present times, the walls of book blogging have expanded to accommodate literary travel, literary lifestyle, bookish hygge and cosy reading nights. It is difficult to choose a few blogs for a list because there are so many wonderful ones, and of course many more that I myself visit often</p>
            <p className='fs-17'> Here are some stylish book blogs that are aesthetically pleasing, have clean and thoughtful designs, and post great content including book recommendations, literary travel and more. Be it honest book talk or drop-dead gorgeous book photography or easy navigation, these definitely spark joy. You will find some of the best book blogs that’ll help you decide whether a new book is for you, blogs that talk about monetizing blogging and those that help you do some arm chair travelling with a book.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About