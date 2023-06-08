import React from 'react';
import uniqid from 'uniqid';
import SubSection from './SubSection';

const Section = (props) => {
  const { title, section } = props;
  const sectionObj = {};

  section.forEach((label) => {
    sectionObj[label] = uniqid();
  });

  console.log(sectionObj);

  return (
    <div>
      <div className="title">{title}</div>
      <SubSection sections={sectionObj} />
    </div>
  );
};

export default Section;
