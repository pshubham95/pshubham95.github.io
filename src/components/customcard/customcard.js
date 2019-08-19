import React from 'react';
import './customcard.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const customcard = (props) => {
  const { children } = props;
  return (
    <Card className="card">
      {children}
    </Card>
  );
};

customcard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default customcard;
