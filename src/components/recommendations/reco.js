import React from 'react';
import { Row, Col, Icon } from 'antd';
import Card from '../customcard/customcard';

const reco = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>Recommendations</h2>
      <div style={{ minHeight: '0.5px', border: '0.4px solid' }} />
      <Row className="mt-15">
        <Col span={24}>
          <p>
            " Shubham is an extremely talented UI developer. We worked together for only 10 months but that was enough for me to understand his potential. He is technically very adept and does all his work with great responsibility and accountability. He showed maturity and professionalism beyond his years of experience. Even though he is so young in his career, he led the UI development of one of the critical products. He will be a great asset for any team and organization. I will take him in my team any day. Highly recommended!! "
          </p>
          <div className="ml-10">
            <h3 className="mb-0 mt-0">Hitesh Mahajan</h3>
            <h4>Director - Software Engineering , GE Aviation</h4>
          </div>
        </Col>
      </Row>
      <Row className="mt-15">
        <Col span={24}>
          <a href="https://www.linkedin.com/in/shubham-patil-3746b058/" style={{ fontSize: '16px' }}>
            <Icon type="link" />
             &nbsp; More on Linkedin
          </a>
        </Col>
      </Row>
    </Card>
  </div>
);

export default reco;
