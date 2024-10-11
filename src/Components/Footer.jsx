import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <p>
        This website is for development purposes only. It is not intended for
        actual use.
      </p>
      <p>Built by Abhishek Agarwal</p>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    height: '4rem',
    marginTop: '11rem',
  },
};

export default Footer;
