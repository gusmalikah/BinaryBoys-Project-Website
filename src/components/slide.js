import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url: '../Images/a.jpg',
  caption: 'First Slide'
  },
  {
  url: '../Images/a.jpg',
  caption: 'Second Slide'
  },
  {
  url: '../Images/a.jpg',
  caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img alt="" src={fadeImage.url} className="big-img"/>
            </div>
            <h2 className='desc'>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow