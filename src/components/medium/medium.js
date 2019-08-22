import React from 'react';
import Card from '../customcard/customcard';

const medium = () => (
  <div className="lesspaddingtop">
    <Card>
      <h2>My Medium</h2>
      <div className="divBorder" />
      <div className="mt-10">
        <iframe className="iframeStyle" src="https://medium.com/@pshubham" title="Medium profile" />
      </div>
    </Card>
  </div>
);

export default medium;
