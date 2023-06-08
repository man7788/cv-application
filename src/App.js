import './App.js';
import Section from './components/Section.js';

const App = () => {
  return (
    <div>
      <Section
        title={'General Information'}
        section={['Name', 'Email', 'Phone Number']}
      />
      <Section
        title={'Educational Experience'}
        section={['School Name', 'Title of Study', 'Date of Study']}
      />
      <Section
        title={'Practical Experience'}
        section={[
          'Company Name',
          'Position Title',
          'Main task of your jobs',
          'Date from and until when you worked for that company',
        ]}
      />
    </div>
  );
};

export default App;
