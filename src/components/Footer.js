import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <footer>
        <Link to='/'>
          <img className='logo' src='/images/icons/logo.svg' alt='logo' />
        </Link>
        <div>
          Marthwaite, Sedbergh <br /> Cumbria <br /> +00 44 123 4567
        </div>
        <div>
          Open Times <br />
          Mon - Fri: 09:00 AM - 10:00 PM <br />
          Sat - Sun: 09:00 AM - 11:30 PM
        </div>
      </footer>
    </>
  );
}
