import React from 'react';
import { Row, Col, Rate } from 'antd';
import Card from '../customcard/customcard';

const language = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>Languages</h2>
      <div style={{ minHeight: '0.5px', border: '0.4px solid' }} />
      <Row className="mt-15 ml-5">
        <Col span={8}>
          <h4>English</h4>
        </Col>
        <Col span={16} style={{ marginTop: '-8px' }}>
          <Rate disabled defaultValue={5} style={{ color: '#74b9ff' }} />
          <br />
          Professional proficiency
        </Col>
      </Row>
      <Row className="mt-15 ml-5">
        <Col span={8}>
          <h4>Marathi</h4>
        </Col>
        <Col span={16} style={{ marginTop: '-8px' }}>
          <Rate disabled defaultValue={5} style={{ color: '#74b9ff' }} />
          <br />
          Native speaker
        </Col>
      </Row>
      <Row className="mt-15 ml-5">
        <Col span={8}>
          <h4>Hindi</h4>
        </Col>
        <Col span={16} style={{ marginTop: '-8px' }}>
          <Rate disabled defaultValue={4.5} allowHalf style={{ color: '#74b9ff' }} />
          <br />
          Native speaker
        </Col>
      </Row>
    </Card>
  </div>
);

export default language;
