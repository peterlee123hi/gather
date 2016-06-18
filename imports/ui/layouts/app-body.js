import { Meteor } from 'meteor/meteor';
import { StudyGroups } from '../../api/study-groups/study-groups.js';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../components/header.js';
import '../components/sidebar.js';

import './app-body.html';

Template.App_body.onCreated(function appBodyOnCreated() {
  this.subscribe('userData');
  this.subscribe('studyGroups');

  Session.set('page', 'users');
  Session.set('selectedClassmates', []);
});

Template.App_body.onRendered(function appBodyOnRendered() {
  if (!Meteor.user()) {
    FlowRouter.go('App.login');
  } else if (!Meteor.user().profile.studentData) {
    FlowRouter.go('App.edit');
  };
});