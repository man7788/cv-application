import React from 'react';
import '../styles/Section.css';
import uniqid from 'uniqid';
// import SubSection from './SubSection';
import SubSection from './SubSectionFunction';

const Section = (props) => {
  const { title, section } = props;
  const sectionObj = {};

  section.forEach((label) => {
    sectionObj[label] = uniqid();
  });

  // console.log(sectionObj);

  return (
    <div className="section">
      <div className="title">{title}</div>
      <SubSection sections={sectionObj} />
    </div>
  );
};

export default Section;
