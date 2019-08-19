import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const infoItem = (props) => {
  const {
    itemProp,
    iconProp,
  } = props;
  return (
    <Row className="mt-10">
      <Col span={2}>
        {iconProp}
      </Col>
      <Col span={22}>
        { itemProp }
      </Col>
    </Row>
  );
};

infoItem.propTypes = {
  iconProp: PropTypes.node.isRequired,
  itemProp: PropTypes.node.isRequired,
};

export default infoItem;
