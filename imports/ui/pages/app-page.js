import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';

import '../components/users-view.js';
import '../components/study-groups-view.js';
import '../components/create-view.js';

import './app-page.html';

Template.App_page.helpers({
  isPage(page) {
    return Session.get('page') === page;
  }
});