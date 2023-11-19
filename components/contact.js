import React from 'react'

const contact = () => {
  const footerStyle = {
    padding: '20px 0',
    backgroundColor: 'white',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
  };

  const socialIconStyle = {
    marginRight: '10px',
    fontSize: '24px',
  };

  const socialIconsContainer = {
    display: 'flex',
    justifyContent: 'center',
  };
  const formStyle = {
    marginBottom: '20px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const copyrightStyle = {
    fontSize: '12px',
    marginTop: '20px',
    color: 'white',
  };
  return (
    <footer style={footerStyle}>
      <div className="text-center z-10">
        <h3 style={headingStyle}>CONTACT US</h3>
        <div style={socialIconsContainer} className="social-icons z-10">
          <div className="facebook z-10"><a href="#"><i style={socialIconStyle} className="fab fa-facebook-f z-10"></i></a></div>
          <div className="linkedin z-10"><a href="#"><i style={socialIconStyle} className="fab fa-linkedin-in z-10"></i></a></div>
          <div className="twitter z-10"><a href="#"><i style={socialIconStyle} className="fab fa-twitter z-10"></i></a></div>
          <div className="instagram z-10"><a href="#"><i style={socialIconStyle} className="fab fa-instagram z-10"></i></a></div>
        </div>
      </div>
      <div className="text-center z-10">
        <form action="" style={formStyle} className="d-flex justify-content-center z-10">
          <input type="email" className="form-control z-10" style={{ width: '200px' }} placeholder="Email address" />
          <div className="subscribe z-10">
            <button type="submit" className="btn btn-primary ml-2 z-10">SUBSCRIBE</button>
          </div>
        </form>
      </div>
      <div className="text-center z-10">
        <div className="row z-10">
          <div className="col-md-6 z-10">
            <ul style={listStyle} className="list-unstyled z-10">
              <li style={listItemStyle}>Name</li>
              <li style={listItemStyle}>Email</li>
              <li style={listItemStyle}>Mob</li>
            </ul>
          </div>
          <div className="col-md-6 z-10">
            <ul style={listStyle} className="list-unstyled z-10">
              <li style={listItemStyle}>Name</li>
              <li style={listItemStyle}>Email</li>
              <li style={listItemStyle}>Mob</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center z-10">
        <p style={copyrightStyle}>Made by AstroCET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default contact;





    



