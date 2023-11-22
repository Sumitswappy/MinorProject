import React from 'react';
import { MDBNavbarLink,MDBIcon } from 'mdb-react-ui-kit';
import './Category.css';
export default function Category() {
  return (
    <div className='categories'>
          
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="cogs" size='2x'/><br/>
              Engineering
            </MDBNavbarLink>
        
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="chart-line" size='2x' /><br/>
              Management
            </MDBNavbarLink>
          
          
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="briefcase-medical" size='2x' /><br/>
              Medical
            </MDBNavbarLink>
        
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="film" size='2x'/><br/>
              Mass Communication
            </MDBNavbarLink>
         
          
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="socks" size='2x'/><br/>
              Design
            </MDBNavbarLink>
       
        
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="gavel" size='2x' /><br/>
              Law
            </MDBNavbarLink>
         
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon far icon="building" size='2x' /><br/>
              Architecture
            </MDBNavbarLink>
        
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="laptop" size='2x'/><br/>
              Computers
            </MDBNavbarLink>
         
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="paint-brush" size='2x' /><br/>
              Art & Humanities
            </MDBNavbarLink>
         
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="hand-holding-usd" size='2x' /><br/>
              Commerce
            </MDBNavbarLink>
         
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="atom" size='2x'/><br/>
              Science
            </MDBNavbarLink>
         
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="concierge-bell" size='2x'/><br/>
              Hotel Management
            </MDBNavbarLink>
         
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="chalkboard-teacher" size='2x'/><br/>
              Teaching
            </MDBNavbarLink>
         
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="flask" size='2x'/><br/>
              Pharmacy
            </MDBNavbarLink>
         
            <MDBNavbarLink active aria-current='page' href='#'>
            <MDBIcon fas icon="plane-departure" size='2x' /><br/>
              Travel & Tourism
            </MDBNavbarLink>
       </div>
  );
}
