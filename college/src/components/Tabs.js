import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,MDBIcon,
    MDBCardText
  } from 'mdb-react-ui-kit';

export default function Tabs() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <MDBTabs pills justify className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
          <MDBIcon fas icon="landmark" size='2x'/>
            <h6>Colleges</h6>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
          <MDBIcon fas icon="graduation-cap" size='2x'/>
            <h6>Courses</h6>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
          <MDBIcon fas icon="location-arrow" size='2x'/>
            <h6>Location</h6>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={justifyActive === 'tab1'}>
          <MDBCard className='mt-3'>
            <MDBCardBody>
              <MDBCardTitle>College 1</MDBCardTitle>
              <MDBCardText>Details about Engineering College 1.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          {/* Add more college cards for the Engineering Colleges */}
        </MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab2'}>
          <MDBCard className='mt-3'>
            <MDBCardBody>
              <MDBCardTitle>College 1</MDBCardTitle>
              <MDBCardText>Details about Medical College 1.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          {/* Add more college cards for the Medical Colleges */}
        </MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab3'}>
          <MDBCard className='mt-3'>
            <MDBCardBody>
              <MDBCardTitle>College 1</MDBCardTitle>
              <MDBCardText>Details about Arts and Science College 1.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          {/* Add more college cards for the Arts and Science Colleges */}
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}