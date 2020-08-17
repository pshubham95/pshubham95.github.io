import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './margin_padding_helper.css';
import Joyride from 'react-joyride';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Info from './components/info/Info';
import Skills from './components/skills/Skills';
import WorkEx from './components/workex/WorkEx';
import Education from './components/education/Education';
import Languages from './components/languages/Languages';
import Medium from './components/medium/Medium';
import Recommendations from './components/recommendations/Recommendations';
import Gallery from './components/gallery/Gallery';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.isFirstTime = localStorage.getItem('isFirstTime');
    this.state = {
      steps: [
        {
          target: '.my-first-step',
          disableBeacon: true,
          content: 'Introduction',
        },
        {
          target: '.my-other-step',
          placement: 'right-start',
          content: 'Work Experience',
        },
        {
          target: '.my-third-step',
          placement: 'right-start',
          content: 'Project',
        },
        {
          target: '.my-fourth-step',
          placement: 'left-start',
          content: 'About me',
        },
        {
          target: '.my-fifth-step',
          placement: 'left-start',
          content: 'Personal Information',
        },
        {
          target: '.my-sixth-step',
          placement: 'left-start',
          content: 'Skills',
        },
        {
          target: '.my-seventh-step',
          placement: 'left-start',
          content: 'Education',
        },
        {
          target: '.my-eigth-step',
          placement: 'left-start',
          content: 'Recommendation',
        },
      ],
    };
  }

  render() {
    const { steps } = this.state;
    localStorage.setItem('isFirstTime', 'false');
    return (
      <div>
        { /*! this.isFirstTime && <Joyride showProgress showSkipButton run steps={steps} continuous /> */}
        <Row>
          <Col span={24} className="gradient-background" />
        </Row>
        <Row className="my-first-step">
          <Introduction />
        </Row>
        <div className="pl-15 pr-15">
          <Row type="flex">
            <Col
              lg={{ span: 16, order: 1 }}
              xs={{ span: 24, order: 2 }}
              className="mt-15"
            >
              <div className="my-other-step">
                <WorkEx />
              </div>
              <div className="mt-15 my-third-step">
                <Projects />
              </div>
            </Col>
            <Col
              lg={{ span: 7, offset: 1, order: 2 }}
              xs={{ span: 24, offset: 0, order: 1 }}
              className="mt-15"
            >
              <div className="my-fourth-step">
                <About />
              </div>
              <div className="mt-15 my-fifth-step">
                <Info />
              </div>
              <div className="mt-15 my-sixth-step">
                <Skills />
              </div>
              <div className="mt-15 my-seventh-step">
                <Education />
              </div>
              <div className="mt-15 my-eigth-step">
                <Recommendations />
              </div>
              <div className="mt-15">
                <Languages />
              </div>
              <div className="mt-15">
                <Medium />
              </div>
            </Col>
          </Row>
          <div className="mt-15">
            <Gallery />
          </div>
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
            <img
              className="footerImage"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt=""
              height="20"
            />
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
