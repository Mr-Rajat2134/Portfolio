// import React from 'react'
// import './Footer.css'

// const Footer = () => {
//   return (
//     <section className='footer'>

// Copyright &#169; 2024 RajatPortfolio. All right received. 



//     </section>
//   )
// }

// export default Footer
import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Image Upload
      </Typography>
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>
      {image && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h6">Preview:</Typography>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: 10 }} />
        </div>
      )}
    </Container>
  );
}

export default ImageUpload;
