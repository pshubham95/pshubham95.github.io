import React from 'react';
import Skill from '../skill/Skill';
import Card from '../customcard/CustomCard';
import camelToNormal from '../../utils/index';
import skillJson from '../../conf/skills.json';

const info = () => {
  const sections = Object.keys(skillJson);
  return (
    <div className="lesspaddingtop">
      <Card>
        <h2>Skills</h2>
        <div className="divBorder" />
        {sections.map(e => (
          <div key={e}>
            <div className="mt-15 ml-15">
              <h3 style={{ textTransform: 'capitalize' }}>{camelToNormal(e)}</h3>
              <div className="divBorderDashed" />
            </div>
            <div className="mt-5 ml-20">
              <Skill skills={skillJson[e]} />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default info;
