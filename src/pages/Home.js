import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import {
  gatheringtext,
  gatheringimg,
  specialtext,
  specialimg,
  socialtext,
  socialimg,
} from '../Function.js';

export default function Home() {
  const handleChange = (e) => {
    const gathering = document.getElementById('gathering');
    const special = document.getElementById('special');
    const social = document.getElementById('social');

    const line = document.querySelectorAll('.line-2');

    if (e.target.id === 'gathering') {
      setimg(gatheringimg);
      settext(gatheringtext);
      line[0].classList.add('actives');
      line[1].classList.remove('actives');
      line[2].classList.remove('actives');
      gathering.classList.add('black');
      special.classList.remove('black');
      social.classList.remove('black');
    } else if (e.target.id === 'special') {
      setimg(specialimg);
      settext(specialtext);
      line[0].classList.remove('actives');
      line[1].classList.add('actives');
      line[2].classList.remove('actives');
      gathering.classList.remove('black');
      special.classList.add('black');
      social.classList.remove('black');
    } else {
      setimg(socialimg);
      settext(socialtext);
      line[0].classList.remove('actives');
      line[1].classList.remove('actives');
      line[2].classList.add('actives');
      gathering.classList.remove('black');
      special.classList.remove('black');
      social.classList.add('black');
    }
  };

  const [img, setimg] = useState(gatheringimg);
  const [text, settext] = useState(gatheringtext);

  return (
    <>
      <header className='hero'>
        <picture>
          <source
            media='(min-width:1024px)'
            srcSet='./images/homepage/hero-bg-desktop.jpg, 
              ./images/homepage/hero-bg-desktop@2x.jpg 2x'
          />
          <source
            media='(min-width:500px)'
            srcSet='./images/homepage/hero-bg-tablet.jpg,
               ./images/homepage/hero-bg-tablet@2x.jpg 2x'
          />
          <img
            className='hero-bg'
            src='./images/homepage/hero-bg-mobile.jpg'
            srcSet='./images/homepage/hero-bg-mobile.jpg, 
              ./images/homepage/hero-bg-mobile@2x.jpg 2x'
          />
        </picture>

        <div className='text-hero'>
          <img className='logo' src='/images/icons/logo.svg' alt='logo' />
          <h1> Exquisite dining since 1989</h1>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <Link  to='/contact'>
    <button className='btn-on-dark'> book a table </button>
          </Link>
        </div>
      </header>
      <main>
        <section className='description-1'>
          <picture>
            <source
              media='(min-width:1024px)'
              srcSet='./images/homepage/enjoyable-place-desktop.jpg, 
              ./images/homepage/enjoyable-place-desktop@2x.jpg 2x'
            />
            <source
              media='(min-width:500px)'
              srcSet='./images/homepage/enjoyable-place-tablet.jpg,
               ./images/homepage/enjoyable-place-tablet@2x.jpg 2x'
            />
            <img
              className='img-sheeps'
              src='./images/homepage/enjoyable-place-mobile.jpg'
              srcSet='./images/homepage/enjoyable-place-mobile.jpg, 
              ./images/homepage/enjoyable-place-mobile@2x.jpg 2x'
            />
          </picture>

          <div className='text-description-1'>
            <span className='line'>⚬</span>
            <h2>Enjoyable place for all the family</h2>
            <p>
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </section>
        <section className='description-2'>
          <picture>
            <source
              media='(min-width:1024px)'
              srcSet='./images/homepage/locally-sourced-desktop.jpg, 
              ./images/homepage/locally-sourced-desktop@2x.jpg 2x'
            />
            <source
              media='(min-width:500px)'
              srcSet='./images/homepage/locally-sourced-tablet.jpg,
               ./images/homepage/locally-sourced-tablet@2x.jpg 2x'
            />
            <img
              className='img-pan'
              src='./images/homepage/locally-sourced-mobile.jpg'
              srcSet='./images/homepage/locally-sourced-mobile.jpg, 
              ./images/homepage/locally-sourced-mobile@2x.jpg 2x'
            />
          </picture>
          <div className='text-description-2'>
            <span className='line'>⚬</span>
            <h2>The most locally sourced food</h2>
            <p>
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you're eating the freshest, most
              sustainable food
            </p>
          </div>
        </section>
      </main>
      <section className='highlights'>
        <div className='highlights-text'>
          <span className='line'>⚬</span>
          <h2> A few highlights from our menu</h2>
          <p>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className='highlights-grids'>
          <div className='salmon'>
            <picture>
              <source
                media='(min-width:500px)'
                srcSet='./images/homepage/salmon-desktop-tablet.jpg, 
              ./images/homepage/salmon-desktop-tablet@2x.jpg 2x'
              />
              <img
                className='img-salmon'
                src='./images/homepage/salmon-mobile.jpg'
                srcSet='./images/homepage/salmon-mobile.jpg, 
              ./images/homepage/salmon-mobile@2x.jpg 2x'
              />
            </picture>
            <div className='description'>
              <h3>Seared Salmon Fillet</h3>
              <p>
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className='fillet'>
            <picture>
              <source
                media='(min-width:500px)'
                srcSet='./images/homepage/beef-desktop-tablet.jpg, 
              ./images/homepage/beef-desktop-tablet@2x.jpg 2x'
              />
              <img
                className='img-fillet'
                src='./images/homepage/beef-mobile.jpg'
                srcSet='./images/homepage/beef-mobile.jpg, 
              ./images/homepage/beef-mobile@2x.jpg 2x'
              />
            </picture>
            <div className='description'>
              <h3>Rosemary Filet Mignon</h3>
              <p>
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className='mousse'>
            <picture>
              <source
                media='(min-width:500px)'
                srcSet='./images/homepage/chocolate-desktop-tablet.jpg, 
              ./images/homepage/chocolate-desktop-tablet@2x.jpg 2x'
              />
              <img
                className='img-mousse'
                src='./images/homepage/chocolate-mobile.jpg'
                srcSet='./images/homepage/chocolate-mobile.jpg, 
              ./images/homepage/chocolate-mobile@2x.jpg 2x'
              />
            </picture>
            <div className='description'>
              <h3>Summer Fruit Chocolate Mousse</h3>
              <p>
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='image-slider'>
        <div className='text-slider'>
          <span className='patterns-lines'></span>
          <div className='container-1'>{img}</div>
          <div className='btn-group'>
            <span
              onClick={handleChange}
              id='gathering'
              className='black btn-slider'
            >
              <span className='line-2 actives'></span>
              family gathering
            </span>
            <span onClick={handleChange} id='special' className='btn-slider'>
              <span className='line-2'></span>
              special events
            </span>
            <span onClick={handleChange} id='social' className='btn-slider'>
              <span className='line-2'></span>
              social events
            </span>
          </div>
          {text}
        </div>
      </section>
      <section className='reservation'>
        <picture>
          <source
            media='(min-width:1024px)'
            srcSet='./images/homepage/ready-bg-desktop.jpg, 
              ./images/homepage/ready-bg-desktop@2x.jpg 2x'
          />
          <source
            media='(min-width:500px)'
            srcSet='./images/homepage/ready-bg-tablet.jpg,
               ./images/homepage/ready-bg-tablet@2x.jpg 2x'
          />
          <img
            className='bg-upperfooter'
            src='./images/homepage/ready-bg-mobile.jpg'
            srcSet='./images/homepage/ready-bg-mobile.jpg, 
              ./images/homepage/ready-bg-mobile@2x.jpg 2x'
          />
        </picture>
        <div className='reservation-text'>
          <h2>Ready to make a reservation</h2>
          <Link to='/contact'>
            <button className='button-on-dark'>book a table</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
