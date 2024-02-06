// LandingPage.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './landingPage.css';

const LandingPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    { id: 1, image: 'https://storage.googleapis.com/novella_horses/novella%20location/1924133_29_0.jpg', description: 'Description 1' },
    { id: 2, image: 'https://storage.googleapis.com/novella_horses/novella%20location/1924133_2_0.jpg', description: 'Description 2' },
    { id: 3, image: 'https://storage.googleapis.com/novella_horses/novella%20location/1924133_32_0.jpg', description: 'Description 3' },
    { id: 4, image: 'https://storage.googleapis.com/novella_horses/novella%20location/1924133_34_0.jpg', description: 'Description 3' },
    // Add more slides as needed
  ];

  return (
    <div className='landing-page'>
        <div className='slider-container'>
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
      </div>
      <div className='page-title'>
        <h1>Welcome to Novella Farms Equine Database</h1>
        <div className='description'>
        <p>Welcome to our website, where equestrian dreams come to life in the heart of the Pacific Northwest. Our platform utilizes the power of React and MongoDB to bring you a seamless and immersive experience in the world of hunter jumper programs.
<br/>
Key Features:
<br/>
- Horse Showcase: Explore our stunning collection of horses, each with its own unique profile and achievements.
<br/>
- Rider Profiles: Get to know the talented riders who contribute to the success of our program.
<br/>
- Filter and Search: Use advanced filters to find the perfect horse based on criteria such as age, program, and more.
<br/>
- Add Your Horse: If you're a horse owner, easily add your horse to our program and showcase their stats.
<br/>

Join us on this journey of elegance, skill, and community. Explore our website and be a part of the Novella Farms Hunter Jumper Program today!
</p>
</div>
      </div>
    </div>
  );
};

export default LandingPage;