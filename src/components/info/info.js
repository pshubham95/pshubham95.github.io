import React from 'react';
import { Icon } from 'antd';
import Card from '../customcard/customcard';
import InfoItem from '../infoItem/infoItem';
import { ReactComponent as locationSvg } from '../../img/iconmonstr-location-1.svg';

const info = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>Personal Information</h2>
      <div style={{ minHeight: '0.5px', border: '0.4px solid' }} />
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
        itemProp={<span><a href="/files/503113699_DOCSPOC_62_1564731822071.pdf">Personal Resume</a></span>}
      />
    </Card>
  </div>
);

export default info;
