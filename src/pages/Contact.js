import React, { useState, Component } from 'react';
import Footer from '../components/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      email: null,
      month: null,
      day: null,
      year: null,
      hour: null,
      minutes: null,
      am: null,
      people: null,
      formErrors: {
        date: '',
        time: '',
        email: '',
      },
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <div className='contact'>
          <picture>
            <source
              media='(min-width:1024px)'
              srcSet='./images/booking/hero-bg-desktop.jpg, 
            ./images/booking/hero-bg-desktop@2x.jpg 2x'
            />
            <source
              media='(min-width:500px)'
              srcSet='./images/booking/hero-bg-tablet.jpg, 
            ./images/booking/hero-bg-tablet@2x.jpg 2x'
            />
            <img
              className='bg-contact'
              src='./images/homepage/ready-bg-mobile.jpg'
              srcSet='./images/booking/hero-bg-mobile.jpg, 
            ./images/booking/hero-bg-mobile@2x.jpg 2x'
            />
          </picture>
          <div className='text-hero'>
            <img className='logo' src='/images/icons/logo.svg' alt='logo' />
            <h1> Reservation</h1>
            <p>
              We can't wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We'll be happy
              to accomodate you
            </p>
            <button className='btn-on-dark'>Reserve place</button>
          </div>
          <div className='form-container container'>
            <form>
              <div className='input-field col s12'>
                <input id='name' type='text' className='validate' />
                <label for='name'>Name</label>
              </div>
              <div className='input-field col s12'>
                <input id='email' type='email' autocomplete='off' />
                <label for='email'>Email</label>
              </div>

              <div id='date' className='row row-date'>
                <div className='input-field col s4'>
                  <label className='pick' for='month'>
                    Pick a date
                  </label>
                  <select id='month'>
                    <option value='' disabled selected>
                      MM
                    </option>
                    <option value='1'>Janaury</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                  </select>
                </div>
                <div className='input-field col s4'>
                  <select id='day'>
                    <option value='' disabled selected>
                      DD
                    </option>
                    <option value='00'>00</option>
                    <option value='01'>01</option>
                    <option value='02'>02</option>
                    <option value='03'>03</option>
                    <option value='04'>04</option>
                    <option value='05'>05</option>
                    <option value='06'>06</option>
                    <option value='07'>07</option>
                    <option value='08'>08</option>
                    <option value='09'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                  </select>
                </div>
                <div className='input-field col s4'>
                  <select id='year'>
                    <option value='' disabled selected>
                      YYYY
                    </option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                  </select>
                </div>
              </div>
              <div id='time' className='row row-time'>
                <div className='input-field col s4'>
                  <label className='pick' for='hour'>
                    Pick a time
                  </label>
                  <select id='hour'>
                    <option value='' disabled selected>
                      8
                    </option>
                    <option value='01'>01</option>
                    <option value='0'>02</option>
                    <option value='03'>03</option>
                    <option value='04'>04</option>
                    <option value='05'>05</option>
                    <option value='06'>06</option>
                    <option value='07'>07</option>
                    <option value='08'>08</option>
                    <option value='09'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                  </select>
                </div>

                <div className='input-field col s4'>
                  <select id='minutes'>
                    <option value='00'>00</option>
                    <option value='01'>01</option>
                    <option value='02'>02</option>
                    <option value='03'>03</option>
                    <option value='04'>04</option>
                    <option value='05'>05</option>
                    <option value='06'>06</option>
                    <option value='07'>07</option>
                    <option value='08'>08</option>
                    <option value='09'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                    <option value='32'>32</option>
                    <option value='33'>33</option>
                    <option value='34'>34</option>
                    <option value='35'>35</option>
                    <option value='36'>36</option>
                    <option value='37'>37</option>
                    <option value='38'>38</option>
                    <option value='39'>39</option>
                    <option value='40'>40</option>
                    <option value='41'>41</option>
                    <option value='42'>42</option>
                    <option value='43'>43</option>
                    <option value='44'>44</option>
                    <option value='45'>45</option>
                    <option value='46'>46</option>
                    <option value='47'>47</option>
                    <option value='48'>48</option>
                    <option value='49'>49</option>
                    <option value='50'>50</option>
                    <option value='51'>51</option>
                    <option value='52'>52</option>
                    <option value='53'>53</option>
                    <option value='54'>54</option>
                    <option value='55'>55</option>
                    <option value='56'>56</option>
                    <option value='57'>57</option>
                    <option value='58'>58</option>
                    <option value='59'>59</option>
                  </select>
                </div>
                <div id='am' className='input-field col s4'>
                  <select>
                    <option value='AM'>AM</option>
                    <option value='PM'>PM</option>
                  </select>
                </div>
              </div>
              <div className='input-field col 12 persons'>
                <span className='minus'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='7' height='3'>
                    <path fill='#9E7F66' d='M6.425 2.977V.601H.629v2.376z' />
                  </svg>
                </span>
                <strong className='people'> 2 People</strong>
                <span className='plus'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    height='11'
                  >
                    <path
                      fill='#9E7F66'
                      d='M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z'
                    />
                  </svg>
                </span>
              </div>
              <button className='button-on-ligth'>make a reservation</button>
            </form>
          </div>
          <div className='lines'></div>
          <div className='patterns'></div>
          <Footer />
        </div>
      </div>
    );
  }
}
