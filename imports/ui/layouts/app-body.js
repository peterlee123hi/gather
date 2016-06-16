import './app-body.html';

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { StudyGroups } from '../../api/study-groups/study-groups.js';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Components used in layout
import '../components/header.js';
import '../components/sidebar.js';

Template.App_body.onCreated(function appBodyOnCreated() {
  if (!Meteor.user()) {
    FlowRouter.go('App.login');
  }

  this.state = new ReactiveDict();
  this.state.setDefault({
    // Add default state values
  });
});

Template.App_body.helpers({
  // Add helpers
});
