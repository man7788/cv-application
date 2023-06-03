import React from 'react';
import uniqid from 'uniqid';
import Form from './Form';

const Section = (props) => {
  const { title } = props;

  return (
    <div>
      {title}
      <Form
        sections={{ Name: uniqid(), Email: uniqid(), 'Phone Number': uniqid() }}
      />
      {/* <Form /> */}
      {/* <Form /> */}
    </div>
  );
};

export default Section;
