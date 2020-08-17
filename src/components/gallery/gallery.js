import React, { Fragment } from 'react';
import {
  Icon,
} from 'antd';
import 'react-image-gallery/styles/css/image-gallery.css';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Card from '../customcard/CustomCard';

class gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      lightboxIsOpen: false,
    };
  }

  toggleLightbox = (selectedIndex) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
  };

  render() {
    const images = [...Array(19).keys()].map((_, i) => ({
      source: `/portfolio_images/IMG_${i + 1}.jpg`,
    }));
    const isLoading = false;
    const { selectedIndex, lightboxIsOpen } = this.state;
    return (
      <div className="lesspaddingtop">
        <Card>
          <h2>
            Some clicks by me
            {' '}
            <Icon type="camera" />
          </h2>
          <div className="divBorder" />
          <div className="mt-10">
            <Fragment>
              {!isLoading ? (
                <Gallery>
                  {images.map((e, j) => (
                    <Image onClick={() => this.toggleLightbox(j)} key={e.source}>
                      <img
                        src={e.source}
                        alt={e.source}
                        style={{
                          cursor: 'pointer',
                          position: 'absolute',
                          maxWidth: '100%',
                        }}
                      />
                    </Image>
                  ))}
                </Gallery>
              ) : null}

              <ModalGateway>
                {lightboxIsOpen && !isLoading ? (
                  <Modal onClose={this.toggleLightbox}>
                    <Carousel
                      currentIndex={selectedIndex}
                      frameProps={{ autoSize: 'height' }}
                      views={images}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </Fragment>
          </div>
        </Card>
      </div>
    );
  }
}

const gutter = 2;

const Gallery = props => (
  <div
    style={{ overflow: 'hidden', marginLeft: -gutter, marginRight: -gutter,
    }}
    {...props}
  />
);

const Image = props => (
  <div
    style={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      float: 'left',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '16%',
      position: 'relative',
      width: `calc(25% - ${gutter * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
);

export default gallery;
