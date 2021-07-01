import React from 'react'
import '../App.css'
import e1 from '../assets/images/events/e1.jpg' 
import e2 from '../assets/images/events/e2.jpg' 
import e3 from '../assets/images/events/e3.jpg' 
import e4 from '../assets/images/events/e4.jpg' 
import e5 from '../assets/images/events/e5.jpg' 
import e6 from '../assets/images/events/e6.jpg' 
import e7 from '../assets/images/events/e7.jpg' 
import e8 from '../assets/images/events/e8.jpg' 
import e9 from '../assets/images/events/e9.jpg'

const Events = ({ currentView, direction }) => {
  const setClass = () => {
    const isMobile = window.screen.width < 992;
    
    if (isMobile) {
      return 'events';
    }

    if (currentView === 4 && direction === 'up') {
      return 'events slide-up-in'; 
    }

    if (!(currentView === 4) && direction === 'up') {
      return 'events events--off slide-up-out'; 
    }

    if (currentView === 4 && direction === 'down') {
      return 'events slide-down-in'; 
    }

    if (!(currentView === 4) && direction === 'down') {
      return 'events events--off slide-down-out'; 
    }
  }

  return (
    <div className={setClass()}>
      <div className="events__box">
        <p className="events__box--above">Book it!</p>
        <h1 className="events__box--header">Upcoming events</h1>
        <div className="events__box__line"></div>
        <p className="events__box--description">Buy Travis Scott tickets from the official website. Find Travis Scott tour schedule, concert details, reviews and photos.</p>
        <div className="events__images">
          <img src={e1} className="events__image" alt="event"/>
          <img src={e2} className="events__image"  alt="event"/>
          <img src={e3} className="events__image"  alt="event"/>
          <img src={e4} className="events__image"  alt="event"/>
          <img src={e5} className="events__image"  alt="event"/>
          <img src={e6} className="events__image"  alt="event"/>
          <img src={e7} className="events__image"  alt="event"/>
          <img src={e8} className="events__image"  alt="event"/>
          <img src={e9} className="events__image"  alt="event"/>
        </div>
      </div>
      <div className="events__box">
        <div className="events__event-box">
          <div className="events__date">
            <span>Mar</span>
            <span className="events__date--number">14</span>
          </div>
          <div className="events__place">
            <span className="events__place--local">ARTSCAPE THEATRE</span>
            <span>Cape Town, South Africa</span>
          </div>
          <button className="events__button">
            BUY TICKETS!
          </button>
        </div>
        <div className="events__event-box">
          <div className="events__date">
            <span>Mar</span>
            <span className="events__date--number">21</span>
          </div>
          <div className="events__place">
            <span className="events__place--local">CITY AUDITORIUM</span>
            <span>Okayama, Japan</span>
          </div>
          <button className="events__button events__button--sold-out">
            SOLD OUT!
          </button>
        </div>
        <div className="events__event-box">
          <div className="events__date">
            <span>Mar</span>
            <span className="events__date--number">28</span>
          </div>
          <div className="events__place">
            <span className="events__place--local">ROYAL THEATRE</span>
            <span>Brussels, Belgium</span>
          </div>
          <button className="events__button">
            BUY TICKETS!
          </button>
        </div>
        <div className="events__event-box">
          <div className="events__date">
            <span>APR</span>
            <span className="events__date--number">05</span>
          </div>
          <div className="events__place">
            <span className="events__place--local">FELLOWS MANSION</span>
            <span>Copenhagen, Denmark</span>
          </div>
          <button className="events__button events__button--sold-out">
            SOLD OUT!
          </button>
        </div>
        <div className="events__event-box">
          <div className="events__date">
            <span>APR</span>
            <span className="events__date--number">12</span>
          </div>
          <div className="events__place">
            <span className="events__place--local">SIBELIUS ACADEMY</span>
            <span>Helsinki, Finland</span>
          </div>
          <button className="events__button">
            BUY TICKETS!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Events;