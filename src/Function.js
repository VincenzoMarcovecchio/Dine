import { Link } from 'react-router-dom';
import React from 'react';

export const gatheringimg = () => {
  return (
    <>
      <picture>
        <source
          media='(min-width:1024px)'
          srcSet='./images/homepage/family-gathering-desktop.jpg, 
              ./images/homepage/family-gathering-desktop@2x.jpg 2x'
        />
        <source
          media='(min-width:500px)'
          srcSet='./images/homepage/family-gathering-tablet.jpg,
               ./images/homepage/family-gathering-tablet@2x.jpg 2x'
        />
        <img
          className='img-slider img-gathering'
          src='./images/homepage/family-gathering-mobile.jpg'
          srcSet='./images/homepage/family-gathering-mobile.jpg, 
              ./images/homepage/family-gathering-mobile@2x.jpg 2x'
        />
      </picture>
    </>
  );
};

export const gatheringtext = () => {
  return (
    <>
      <div className='containerr'>
        <h2>Family Gathering</h2>
        <p>
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
        </p>
        <Link to='/contact'>
          <button className='button-on-ligth'>book a table</button>
        </Link>
      </div>
    </>
  );
};

export const specialimg = () => {
  return (
    <>
      <picture>
        <source
          media='(min-width:1024px)'
          srcSet='./images/homepage/special-events-desktop.jpg, 
              ./images/homepage/special-events-desktop@2x.jpg 2x'
        />
        <source
          media='(min-width:500px)'
          srcSet='./images/homepage/special-events-tablet.jpg,
               ./images/homepage/special-events-tablet@2x.jpg 2x'
        />
        <img
          className='img-slider img-special'
          src='./images/homepage/social-events-mobile.jpg'
          srcSet='./images/homepage/social-events-mobile@2x.jpg, 
              ./images/homepage/special-events-mobile@2x.jpg 2x'
        />
      </picture>
    </>
  );
};
export const specialtext = () => {
  return (
    <>
      <div className='containerr'>
        <h2>Special Events</h2>
        <p>
          Whether it’s a romantic dinner or special date you’re celebrating with
          others we’ll look after you. We’ll be sure to mark your special date
          with an unforgettable meal.
        </p>
        <Link to='/contact'>
          <button className='button-on-ligth'>book a table</button>
        </Link>
      </div>
    </>
  );
};

export const socialimg = () => {
  return (
    <>
      <picture>
        <source
          media='(min-width:1024px)'
          srcSet='./images/homepage/social-events-desktop.jpg, 
              ./images/homepage/social-events-desktop@2x.jpg 2x'
        />
        <source
          media='(min-width:500px)'
          srcSet='./images/homepage/social-events-tablet.jpg,
               ./images/homepage/social-events-tablet@2x.jpg 2x'
        />
        <img
          className='img-slider img-social'
          src='./images/homepage/social-events-mobile.jpg'
          srcSet='./images/homepage/social-events-mobile.jpg, 
              ./images/homepage/social-events-mobile@2x.jpg 2x'
        />
      </picture>
    </>
  );
};

export const socialtext = () => {
  return (
    <>
      <div className='containerr'>
        <h2>Social Events</h2>
        <p>
          Are you looking to have a larger social event? No problem! We’re more
          than happy to cater for big parties. We’ll work with you to make your
          event a hit with everyone.
        </p>
        <Link to='/contact'>
          <button className='button-on-ligth'>book a table</button>
        </Link>
      </div>
    </>
  );
};

export default Function;
