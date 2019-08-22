import React from 'react';
import { Avatar, Row, Col } from 'antd';
import Card from '../customcard/customcard';
import geAvi from '../../img/ge_aviation.png';
import geDig from '../../img/ge_digital.png';

const workEx = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>Work Experience</h2>
      <div className="divBorder" />
      <Row className="mt-15">
        <Col lg={2} xs={4} md={2}>
          <Avatar src={geAvi} size={60} />
        </Col>
        <Col lg={{ span: 22, offset: 0 }} xs={{ span: 19, offset: 1 }} md={{ span: 21, offset: 1 }}>
          <h2 className="mb-0">GE Aviation</h2>
          <h3>Software Engineer ( Nov 2018 - Jul 2019)</h3>
          <div style={{ minHeight: '0.5px', border: '0.4px dashed' }} />
          <div className="mt-15">
            <ul>
              <li>
                Worked on tech stack migration of
                a tool used for contract modeling of commerical aircraft engines.
                This included designing wireframes using
                {' '}
                <b>Sketch</b>
                {' '}
                after coordinating with users and product owners
              </li>
              <li>
                Translated the wireframes into usable screens using
                {' '}
                <b>React JS</b>
                {' '}
                and
                {' '}
                <b>Ant Design</b>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="mt-15">
        <Col lg={2} xs={4} md={2}>
          <Avatar src={geDig} size={60} />
        </Col>
        <Col lg={{ span: 22, offset: 0 }} xs={{ span: 19, offset: 1 }} md={{ span: 21, offset: 1 }}>
          <h2 className="mb-0">GE Digital</h2>
          <h3>Software Engineer ( July 2017 - Nov 2018)</h3>
          <div style={{ minHeight: '0.5px', border: '0.4px dashed' }} />
          <div className="mt-15">
            <ul>
              <li>
                Developed an inventory management mobile application using
                {' '}
                <b>Cordova</b>
                {' '}
                for a health care platform.
                The app was mainly used in hospitals for asset management of surgical kits.
              </li>
              <li>
                Worked on the user interface microservice implentation using for the
                {' '}
                <b>Angular 6 and Node JS (Express)</b>
                {' '}
                . Followed scrum throughout the project and used git for version control.
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="mt-15">
        <Col lg={2} xs={4} md={2}>
          <Avatar src={geDig} size={60} />
        </Col>
        <Col lg={{ span: 22, offset: 0 }} xs={{ span: 19, offset: 1 }} md={{ span: 21, offset: 1 }}>
          <h2 className="mb-0">GE Digital</h2>
          <h3>Software Engineering Specialist ( July 2016 - July 2017)</h3>
          <div style={{ minHeight: '0.5px', border: '0.4px dashed' }} />
          <div className="mt-15">
            <ul>
              <li>
                Built a solution prototype for monitoring temperature,
                humidity and particle count of
                clean rooms after a factory visit.
              </li>
              <li>
                Configured edge devices in the clean room and used a
                {' '}
                <b>python</b>
                {' '}
                script
                to ingest real-time data to
                cloud.
              </li>
              <li>
                Developed desktop and web applications using
                {' '}
                <b>Electron, React and Node JS</b>
                {' '}
                to monitor these ambient
                parameters.
              </li>

            </ul>
          </div>
        </Col>
      </Row>
    </Card>
  </div>
);

export default workEx;
