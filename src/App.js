import React, { Component } from 'react';
import uniqid from 'uniqid';
import './App.js';
import Section from './components/Section.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  render() {
    return (
      <div>
        <Section
          title={'General Information'}
          // sections={['Name', 'Email', 'Phone Number']}
        />
        {/* <Section
          title={'Educational Experience'}
          section={['School Name', 'Title of Study', 'Date of Study']}
        />
        <Section
          title={'Practical Experience'}
          section={[
            'Company Name',
            'Position Title',
            'Main tasks of your jobs',
            'Date from and until When you worked for the company',
          ]}
        /> */}
      </div>
    );
  }
}

export default App;
