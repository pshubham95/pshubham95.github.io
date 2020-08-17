import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Rate } from 'antd';

const skill = (props) => {
  const { skills } = props;
  return (
    skills.map(e => (
      <Row type="flex" justify="end" align="middle" key={`${e.rating}_${e.name}`}>
        <Col span={12}>
          <div key={e.name} className="mt-5">{e.name}</div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Rate style={{ color: '#74b9ff' }} allowHalf defaultValue={e.rating} count={5} disabled />
        </Col>
      </Row>
    ))
  );
};

skill.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

export default skill;
