import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Apps } from '../../imports/collections/apps';
import AppDetail from './app_detail';

const PER_PAGE = 20;

class AppList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    // props.employees => an array of employee objects
    return (
      <div>
        <div className="app-list">
          {this.props.apps.map(app =>
            <AppDetail key={app._id} app={app} />
          )}
        </div>
        <button onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary">
          Load More...
        </button>
      </div>
    );
  }
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('apps', PER_PAGE);

  // return an object.  Whatever we return will be sent to EmployeeList
  // as props
  return { apps: Apps.find({}).fetch() };
}, AppList);