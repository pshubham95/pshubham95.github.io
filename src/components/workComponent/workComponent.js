import React from 'react';
import { Row, Col, Avatar } from 'antd';
import PropTypes from 'prop-types';
import geAviation from '../../img/ge_aviation.png';
import geDigital from '../../img/ge_digital.png';
import aws from '../../img/aws.jpg';

const workComponent = (props) => {
  const {
    company,
    title,
    description,
    image,
  } = props;

  const getImageIdentifier = (imageIdentifier) => {
    switch (imageIdentifier) {
      case 'geAviation': return geAviation;
      case 'geDigital': return geDigital;
      case 'aws': return aws;
      default: return geDigital;
    }
  };

  return (
    <Row className="mt-15">
      <Col lg={2} xs={4} md={2}>
        <Avatar src={getImageIdentifier(image)} size={60} />
      </Col>
      <Col lg={{ span: 22, offset: 0 }} xs={{ span: 19, offset: 1 }} md={{ span: 21, offset: 1 }}>
        <h2 className="mb-0">{company}</h2>
        <h3>{title}</h3>
        <div className="divBorderDashed" />
        <div className="mt-15">
          <ul>
            {description.map(e => (
              // eslint-disable-next-line react/no-danger
              <li key={e} dangerouslySetInnerHTML={{ __html: e }} />
            ))
           }
          </ul>
        </div>
      </Col>
    </Row>
  );
};

workComponent.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};

export default workComponent;
