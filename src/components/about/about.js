import React from 'react';
import Card from '../customcard/customcard';

const about = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>About Me</h2>
      <div className="divBorder" />
      <div className="mt-5" style={{ fontWeight: '400' }}>
        I’m a computer science graduate student at Arizona State University.
        I have around 3 years of professional experience working as a software engineer at
        {' '}
        General Electric.
        I’ve experience in the fields of full stack web development, hybrid mobile apps.
        <br />
        <br />
        Apart from coding, I also enjoy trekking and photography.
      </div>
    </Card>
  </div>
);

export default about;
