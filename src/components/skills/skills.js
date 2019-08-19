import React from 'react';
import Skill from '../skill/skill';
import Card from '../customcard/customcard';
import camelToNormal from '../../utils/index';
import skillJson from '../../conf/skills.json';

const info = () => {
  const sections = Object.keys(skillJson);
  return (
    <div className="lesspaddingtop">
      <Card>
        <h2>Skills</h2>
        <div style={{ minHeight: '0.5px', border: '0.4px solid' }} />
        {sections.map(e => (
          <div key={e}>
            <div className="mt-15 ml-15">
              <h3 style={{ textTransform: 'capitalize' }}>{camelToNormal(e)}</h3>
              <div style={{ minHeight: '0.5px', border: '0.4px dashed' }} />
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
