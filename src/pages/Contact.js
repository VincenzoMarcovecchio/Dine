import React, { Component } from 'react';
import Footer from '../components/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

const nameinput = document.getElementsByName('name');
const emailinput = document.getElementsByName('email');

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      month: '',
      day: '',
      year: '',
      hour: '',
      minutes: '',
      am: '',
      people: 1,
      formErrors: {
        name: '',
        date: '',
        time: '',
        email: '',
      },
    };

    this.howmany = (people) => {
      if (people > 1) {
        return <strong className='people'>people</strong>;
      } else {
        return <strong>person</strong>;
      }
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  incrementItem = () => {
    this.setState({ people: this.state.people + 1 });
  };

  decreaseItem = () => {
    this.setState({
      people: this.state.people === 0 ? 0 : this.state.people - 1,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state) === true) {
      console.log(`
        --SUBMITTING--
         Name: ${this.state.name}
        
        Email: ${this.state.email}
        
      `);
    } else {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          date: 'This field is incomplete',
          time: 'This field is incomplete',
          email: 'This field is required',
        },
      });

      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'name':
        formErrors.name =
          value.length < 3 ? 'minimum 3 characaters required' : '';
        break;

      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'This field is required';
        break;
      case 'month':
        formErrors.date = value.length === '' ? 'This field is incomplete' : '';
        break;
      case 'day':
        formErrors.date = value.length === '' ? 'This field is incomplete' : '';
        break;
      case 'year':
        formErrors.date = value.length === '' ? 'This field is incomplete' : '';
        break;
      case 'hour':
        formErrors.time = value.length === '' ? 'This field is incomplete' : '';
        break;
      case 'minutes':
        formErrors.time = value.length === '' ? 'This field is incomplete' : '';
        break;
      case 'am':
        formErrors.time = value.length === '' ? 'This field is incomplete' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
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
            <Link to='/'>
              <img className='logo' src='/images/icons/logo.svg' alt='logo' />
            </Link>
            <h1> Reservation</h1>
            <p>
              We can't wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We'll be happy
              to accomodate you
            </p>
            <button className='btn-on-dark'>Reserve place</button>
          </div>
          <div className='form-container container'>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className='input-field col s12'>
                <input
                  noValidate
                  onChange={this.handleChange}
                  id='name'
                  name='name'
                  type='text'
                  className={formErrors.name.length > 0 ? 'error' : ''}
                />

                <label
                  className={formErrors.name.length > 0 ? 'error-color' : ''}
                  for='name'
                >
                  Name
                </label>
              </div>
              <div className='input-field col s12'>
                <input
                  noValidate
                  className={formErrors.email.length > 0 ? ' error' : ''}
                  onChange={this.handleChange}
                  id='email'
                  name='email'
                  type='email'
                />
                {formErrors.email.length > 0 && (
                  <span className='errorMessage'>{formErrors.email}</span>
                )}
                <label
                  className={formErrors.email.length > 0 ? 'error-color' : ''}
                  for='email'
                >
                  Email
                </label>
              </div>

              <div id='date' className='row row-date'>
                <div
                  className={
                    formErrors.date.length > 0
                      ? 'input-field col s4 error'
                      : 'input-field col s4'
                  }
                >
                  <label
                    className={
                      formErrors.date.length > 0 ? ' pick error-color' : 'pick'
                    }
                    for='month'
                  >
                    Pick a date
                    {formErrors.date.length > 0 && (
                      <span className='errorMessage-pick'>
                        {formErrors.date}
                      </span>
                    )}
                  </label>
                  <select
                    className={formErrors.date.length > 0 ? ' error' : ''}
                    onChange={this.handleChange}
                    name='month'
                    id='month'
                  >
                    <option value='' disabled selected>
                      MM
                    </option>
                    <option value='01'>Janaury</option>
                    <option value='02'>February</option>
                    <option value='03'>March</option>
                    <option value='04'>April</option>
                    <option value='05'>May</option>
                    <option value='06'>June</option>
                    <option value='07'>July</option>
                    <option value='08'>August</option>
                    <option value='09'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                  </select>
                </div>
                <div className='input-field col s4'>
                  <select
                    onChange={this.handleChange}
                    className={formErrors.date.length > 0 ? ' error' : ''}
                    name='day'
                    id='day'
                  >
                    <option value='' disabled selected>
                      DD
                    </option>

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
                  <select
                    className={formErrors.date.length > 0 ? ' error' : ''}
                    onChange={this.handleChange}
                    name='year'
                    id='year'
                  >
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
                  <label
                    className={
                      formErrors.time.length > 0 ? ' pick error-color' : 'pick'
                    }
                    for='hour'
                  >
                    {formErrors.time.length > 0 && (
                      <span className='errorMessage-pick'>
                        {formErrors.time}
                      </span>
                    )}
                    Pick a time
                  </label>
                  <select
                    className={formErrors.time.length > 0 ? ' error' : ''}
                    onChange={this.handleChange}
                    name='hour'
                    id='hour'
                  >
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
                  <select
                    className={formErrors.time.length > 0 ? ' error' : ''}
                    onChange={this.handleChange}
                    name='minutes'
                    id='minutes'
                  >
                    <option value=''>00</option>
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
                  <select
                    className={formErrors.time.length > 0 ? ' error' : ''}
                    onChange={this.handleChange}
                    name='am'
                  >
                    <option value='' disabled selected>
                      AM
                    </option>
                    <option value='AM'>AM</option>
                    <option value='PM'>PM</option>
                  </select>
                </div>
              </div>
              <div className='input-field col 12 persons'>
                <span className='minus' onClick={this.decreaseItem}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='7' height='3'>
                    <path fill='#9E7F66' d='M6.425 2.977V.601H.629v2.376z' />
                  </svg>
                </span>
                <strong className='people'>
                  {this.state.people} {this.howmany(this.state.people)}
                </strong>
                <span className='plus' onClick={this.incrementItem}>
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
              <button type='submit' className='button-on-ligth'>
                make a reservation
              </button>
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
