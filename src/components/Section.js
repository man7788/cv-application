import React from 'react';
import uniqid from 'uniqid';
import SubSection from './SubSection';

const Section = (props) => {
  const { title } = props;

  return (
    <div>
      {title}
      <SubSection
        sections={{ Name: uniqid(), Email: uniqid(), 'Phone Number': uniqid() }}
      />
      {/* <SubSection /> */}
      {/* <SubSection /> */}
    </div>
  );
};

export default Section;
