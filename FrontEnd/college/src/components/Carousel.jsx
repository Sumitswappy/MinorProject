import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption,MDBBtn } from 'mdb-react-ui-kit';
import CustomSearch from './CustomSearch';
import './Carousel.css';

export default function Carousel() {
  return (
    <div>
      <MDBCarousel showControls light fade>
        <MDBCarouselItem itemId={1}>
          <img src='https://scontent.fccu2-4.fna.fbcdn.net/v/t1.6435-9/66443477_2412997372128629_3033068314881425408_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=peZBra8DOKwAX-6aXVG&_nc_ht=scontent.fccu2-4.fna&oh=00_AfDiEsv7Dgl5QtWvmZNTodUyoKrHpY4_iuEpccDjOriY_Q&oe=6577D987' className='d-block w-100' alt='...' style={{ maxHeight: '400px' }} width="844" height="400"  />
          <MDBCarouselCaption>
            <h5>S. P. Jain Institute of Management and Research</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src='https://assets.telegraphindia.com/telegraph/2021/Dec/1639305481_iit-kharagpur.jpg' className='d-block w-100' alt='...' style={{ maxHeight: '400px' }} width="844" height="600" />
          <MDBCarouselCaption>
            <h5>IIT Kharagpur</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src='https://kiit.ac.in/wp-content/uploads/2018/07/KIIT-Campus-Front-Library.jpg' className='d-block w-100' alt='...' style={{ maxHeight: '400px' }} width="844" height="600"  />
          <MDBCarouselCaption>
            <h5>KIIT-Kalinga Institute of Industrial Technology</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        
      </MDBCarousel>
      <CustomSearch/>
    </div>
  );
}
