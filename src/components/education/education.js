import React from 'react';
import {
  Row, Col, Avatar, Tag,
} from 'antd';
import Card from '../customcard/customcard';
import asu from '../../img/asu_sun.png';
import coep from '../../img/coep.jpg';


const education = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>Education</h2>
      <div className="divBorder" />
      <div className="mt-15">
        <Row className="ml-10">
          <Col span={16}>
            <h4 className="mb-0">MS Computer Science</h4>
            <div className="ml-5">
                Arizona State University
            </div>
          </Col>
          <Col span={8}>
            <Avatar src={asu} size={50} shape="square" />
          </Col>
        </Row>

        <Row className="ml-10 mt-35">
          <Col span={16}>
            <h4 className="mb-0">BTech. Computer Engineering</h4>
            <div className="ml-5">
                College of Engineering Pune
            </div>
            <div className="ml-5">
              <Tag color="blue">
                  7.73 / 10
              </Tag>
            </div>
          </Col>
          <Col span={8}>
            <Avatar src={coep} size={60} shape="square" />
          </Col>
        </Row>
      </div>
    </Card>
  </div>
);

export default education;
