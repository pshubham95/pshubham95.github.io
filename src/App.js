import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './margin_padding_helper.css';
import Introduction from './components/introduction/introduction';
import About from './components/about/about';
import Info from './components/info/info';
import Skills from './components/skills/skills';
import WorkEx from './components/workex/workex';
import Education from './components/education/education';
import Languages from './components/languages/languages';
import Medium from './components/medium/medium';
import Recommendations from './components/recommendations/reco';
import Gallery from './components/gallery/gallery';
import './App.css';

function App() {
  return (
    <div>
      <Row>
        <Col span={24} className="gradient-background" />
      </Row>
      <Row>
        <Introduction />
      </Row>
      <div className="pl-15 pr-15">
        <Row type="flex">
          <Col lg={{ span: 16, order: 1 }} xs={{ span: 24, order: 2 }} className="mt-15">
            <WorkEx />
            <div className="mt-15">
              <Recommendations />
            </div>
            <div className="mt-15">
              <Medium />
            </div>
            <div className="mt-15">
              <Gallery />
            </div>
          </Col>
          <Col lg={{ span: 7, offset: 1, order: 2 }} xs={{ span: 24, offset: 0, order: 1 }} className="mt-15">
            <About />
            <div className="mt-15">
              <Info />
            </div>
            <div className="mt-15">
              <Skills />
            </div>
            <div className="mt-15">
              <Education />
            </div>
            <div className="mt-15">
              <Languages />
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <div className="mt-10 footerClass">
          Made with
          {' '}
          <span style={{ color: '#f73f51' }}>❤</span>
          {' '}
          by
          {' '}
          <span style={{ color: 'white' }}>Shubham Patil</span>
          {' '}
          using React
          {' '}
          <img className="footerImage" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20" />
        </div>
      </Row>
    </div>
  );
}

export default App;
