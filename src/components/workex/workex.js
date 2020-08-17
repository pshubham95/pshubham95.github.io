import React from 'react';
import Card from '../customcard/CustomCard';
import workJson from '../../conf/workex.json';
import WorkComponent from '../workComponent/workComponent';

const workEx = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>Work Experience</h2>
      <div className="divBorder" />
      {workJson.map(e => (
        <WorkComponent
          key={e.title}
          company={e.company}
          title={e.title}
          description={e.description}
          image={e.imageIdentifer}
        />
      ))}
    </Card>
  </div>
);

export default workEx;
