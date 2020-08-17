import React from 'react';
import {
  Row, Col, Avatar, Button, Tooltip, Icon,
} from 'antd';
import img from '../../img/profile.jpeg';
import linkedin from '../../img/linkedin.svg';
import facebook from '../../img/facebook.svg';
import Card from '../customcard/CustomCard';

const Introduction = () => (
  <div>
    <Card>
      <Row type="flex" justify="start" align="middle">
        <Col lg={3} xs={24} className="textAlignCenter">
          <Avatar src={img} size={180} />
        </Col>
        <Col lg={{ span: 14, offset: 1 }} xs={24} className="textAlignSmall">
          <h1 className="mb-0">Shubham Patil</h1>
          <h3>MS CS Student @ Arizona State University</h3>
          <Row type="flex">
            <Col lg={1} xs={6}>
              <a href="https://www.linkedin.com/in/shubham-patil-3746b058/" target="_blank" rel="noreferrer noopener">
                <Avatar src={linkedin} />
              </a>
            </Col>
            <Col lg={1} xs={6}>
              <a href="https://github.com/pshubham95" target="_blank" rel="noreferrer noopener">
                <Avatar style={{ backgroundColor: 'black', color: 'white' }} icon="github" />
              </a>
            </Col>
            <Col lg={1} xs={6}>
              <a href="https://www.facebook.com/shubhampatil6" target="_blank" rel="noreferrer noopener">
                <Avatar src={facebook} />
              </a>
            </Col>
            <Col lg={1} xs={6}>
              <Avatar icon="code" style={{ backgroundColor: '#101010', color: 'white' }} />
            </Col>
          </Row>
        </Col>
        <Col lg={6} xs={24} className="mtSmall-15">
          <Row type="flex" justify="end" align="middle">
            <Col span={24} className="textAlignCenter">
              <Tooltip placement="bottom" title="Email: pshubham@gmail.com">
                <Button href="mailto:pshubham@gmail.com" shape="round" target="_blank" type="primary" icon="mail" size="large">
                    Contact
                </Button>
              </Tooltip>
            </Col>
          </Row>
          <Row type="flex" justify="end" align="middle" className="mt-10">
            <Col span={24} className="textAlignCenter">
              <a href="https://github.com/pshubham95/pshubham95.github.io/tree/src" target="_blank" rel="noreferrer noopener">
                <Icon type="link" />
                {' '}
                Source code for this website (built using React
                {' '}
                <img className="footerImage" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20" />
                {' '}
                )
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  </div>
);

export default Introduction;
