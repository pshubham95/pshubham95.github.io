import React from 'react';
import {
  Icon,
} from 'antd';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import Card from '../customcard/customcard';

const gallery = () => {
  const images = [...Array(19).keys()].map((_, i) => ({
    original: `/portfolio_images/IMG_${i + 1}.jpg`,
    thumbnail: `/portfolio_images/IMG_${i + 1}.jpg`,
  }));
  return (
    <div className="lesspaddingtop">
      <Card>
        <h2>
          Some clicks by me
          {' '}
          <Icon type="camera" />
        </h2>
        <div style={{ minHeight: '0.5px', border: '0.4px solid' }} />
        <div className="mt-10">
          <ImageGallery items={images} />
        </div>
      </Card>
    </div>
  );
};

export default gallery;
