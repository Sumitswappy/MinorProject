import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';
import './HelpfulReviews.css'
const HelpfulReviews = () => {
  const reviews = [
    {
      id: 1,
      user: 'John Doe',
      date: 'November 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor elit ut turpis gravida, ut rhoncus odio laoreet.',
      helpfulCount: 15,
    },
    {
      id: 2,
      user: 'Jane Smith',
      date: 'November 5, 2023',
      content: 'Sed euismod urna a leo blandit, ac varius libero volutpat. Proin consequat lacinia purus eu egestas.',
      helpfulCount: 12,
    },
    {
      id: 3,
      user: 'Jane Smith',
      date: 'November 5, 2023',
      content: 'Sed euismod urna a leo blandit, ac varius libero volutpat. Proin consequat lacinia purus eu egestas.',
      helpfulCount: 12,
    },
    {
      id: 4,
      user: 'Jane Smith',
      date: 'November 5, 2023',
      content: 'Sed euismod urna a leo blandit, ac varius libero volutpat. Proin consequat lacinia purus eu egestas.',
      helpfulCount: 12,
    },
    {
      id: 5,
      user: 'Jane Smith',
      date: 'November 5, 2023',
      content: 'Sed euismod urna a leo blandit, ac varius libero volutpat. Proin consequat lacinia purus eu egestas.',
      helpfulCount: 12,
    },
    {
      id: 6,
      user: 'Jane Smith',
      date: 'November 5, 2023',
      content: 'Sed euismod urna a leo blandit, ac varius libero volutpat. Proin consequat lacinia purus eu egestas.',
      helpfulCount: 12,
    },
  ];

  const sortedReviews = reviews.sort((a, b) => b.helpfulCount - a.helpfulCount);

  return (
    <div>
      <h2 className='mb-3 p-4'>Most Helpful Reviews of the Month</h2>
      <MDBCarousel showControls dark>
        {sortedReviews.map((review, index) => (
          // Display two reviews at a time
          index % 2 === 0 && (
            <MDBCarouselItem key={review.id} itemId={review.id}>
              <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                {/* First Review Card */}
                <MDBCol sm='6'>
                  <MDBCard className="custom-card-size d-flex flex-column h-100">
                    <MDBCardHeader>{review.user}</MDBCardHeader>
                    <MDBCardBody className="d-flex flex-column">
                      <MDBCardTitle>{review.date}</MDBCardTitle>
                      <MDBCardText>{review.content}</MDBCardText>
                      <MDBCardText>Helpful Count: {review.helpfulCount}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className="text-muted mt-auto">2 days ago</MDBCardFooter>
                  </MDBCard>
                </MDBCol>

                {/* Second Review Card (if available) */}
                {sortedReviews[index + 1] && (
                  <MDBCol sm='6'>
                    <MDBCard className="custom-card-size d-flex flex-column h-100">
                      <MDBCardHeader>{sortedReviews[index + 1].user}</MDBCardHeader>
                      <MDBCardBody className="d-flex flex-column">
                        <MDBCardTitle>{sortedReviews[index + 1].date}</MDBCardTitle>
                        <MDBCardText>{sortedReviews[index + 1].content}</MDBCardText>
                        <MDBCardText>Helpful Count: {sortedReviews[index + 1].helpfulCount}</MDBCardText>
                      </MDBCardBody>
                      <MDBCardFooter className="text-muted mt-auto">2 days ago</MDBCardFooter>
                    </MDBCard>
                  </MDBCol>
                )}
              </MDBRow>
            </MDBCarouselItem>
          )
        ))}
      </MDBCarousel>
    </div>
  );
};

export default HelpfulReviews;
