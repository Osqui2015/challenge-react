// QuiltedImageList.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { StyledImageList, StyledTextField, StyledModal } from './styles';
import { fetchRandomFlickrData, fetchFlickrData, srcset } from './api';

export default function QuiltedImageList() {
  const [itemData, setItemData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState(null);

  React.useEffect(() => {
    fetchRandomFlickrData().then((data) => setItemData(data));
  }, []);

  React.useEffect(() => {
    fetchFlickrData(searchTerm).then((data) => setItemData(data));
  }, [searchTerm]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledTextField
          type="text"
          label="Buscar imágenes"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      {itemData.map((item) => (
        <Grid item key={item.img} xs={12} sm={6} md={4}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            onClick={() => handleImageClick(item.img)}
            style={{ cursor: 'pointer', width: '100%' }}
          />
        </Grid>
      ))}
      <StyledModal
        open={Boolean(selectedImage)}
        onClose={handleCloseModal}
        aria-labelledby="image-modal-title"
        aria-describedby="image-modal-description"
      >
        <Grid item xs={12} md={8}>
          <Box className="centered-content">
            <img {...srcset(selectedImage, 500)} alt="Selected" />
          </Box>
        </Grid>
      </StyledModal>
    </Grid>
  );
}
