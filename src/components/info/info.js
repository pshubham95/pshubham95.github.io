import React from 'react';
import { Icon } from 'antd';
import Card from '../customcard/customcard';
import InfoItem from '../infoItem/infoItem';
import { ReactComponent as locationSvg } from '../../img/iconmonstr-location-1.svg';

const info = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>Personal Information</h2>
      <div className="divBorder" />
      <InfoItem
        iconProp={<Icon style={{ fontSize: '20px' }} component={locationSvg} />}
        itemProp={<span>Tempe, Arizona</span>}
      />
      <InfoItem
        iconProp={<Icon style={{ fontSize: '20px' }} type="mail" theme="filled" />}
        itemProp={<span><a href="mailto:pshubham@gmail.com">pshubham@gmail.com</a></span>}
      />
      <InfoItem
        iconProp={<Icon style={{ fontSize: '20px' }} type="file-protect" />}
        itemProp={<span><a href="https://drive.google.com/file/d/1Rkrl5GwY87fWy-qWR7JwnJOB8r8WN7dL/view?usp=sharing" target="_blank" rel="noreferrer noopener">Personal Resume</a></span>}
      />
    </Card>
  </div>
);

export default info;
