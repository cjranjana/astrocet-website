import React from 'react'

const contact = () => {
  const footerStyle = {
    padding: '20px 0',
    backgroundColor: 'white',
    zIndex: '100',
    position : 'relative',
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
      <div className="text-center">
        <h3 style={headingStyle}>CONTACT US</h3>
        <div style={socialIconsContainer} className="social-icons">
          <div className="facebook"><a href="#"><i style={socialIconStyle} className="fab fa-facebook-f"></i></a></div>
          <div className="linkedin"><a href="#"><i style={socialIconStyle} className="fab fa-linkedin-in"></i></a></div>
          <div className="twitter"><a href="#"><i style={socialIconStyle} className="fab fa-twitter"></i></a></div>
          <div className="instagram"><a href="#"><i style={socialIconStyle} className="fab fa-instagram"></i></a></div>
        </div>
      </div>
      <div className="text-center">
        <form action="" style={formStyle} className="d-flex justify-content-center">
          <input type="email" className="form-control" style={{ width: '200px' }} placeholder="Email address" />
          <div className="subscribe">
            <button type="submit" className="btn btn-primary ml-2">SUBSCRIBE</button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <div className="row">
          <div className="col-md-6">
            <ul style={listStyle} className="list-unstyled">
              <li style={listItemStyle}>Name</li>
              <li style={listItemStyle}>Email</li>
              <li style={listItemStyle}>Mob</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul style={listStyle} className="list-unstyled">
              <li style={listItemStyle}>Name</li>
              <li style={listItemStyle}>Email</li>
              <li style={listItemStyle}>Mob</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p style={copyrightStyle}>Made by AstroCET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default contact;





    



