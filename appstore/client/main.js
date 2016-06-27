import React from 'react';
import ReactDOM from 'react-dom';

import AppList from './components/app_list';

const App = () => {
  return (
    <div>
      <AppList />
    </div>
  );
};

// After Meteor loads in t8he browser, render my app to the DOM.
Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});