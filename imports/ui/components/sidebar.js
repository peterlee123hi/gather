import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './sidebar.html'

Template.App_sidebar.onRendered(function appSidebarOnRendered() {
  const studentData = Meteor.user().profile.studentData;
  Session.set('selectedClass', studentData.classes[0]);
});

Template.App_sidebar.helpers({
  classes() {
    const studentData = Meteor.user().profile.studentData;
    return studentData.classes;
  },

  selectedClass(className) {
    return Session.get('selectedClass') === className && 'active';
  },

  isPage(page) {
    return Session.get('page') === page;
  }
});

Template.App_sidebar.events({
  'click .class'(event) {
    const target = event.target;
    const className = target.text;
    Session.set('selectedClass', className);
  }
});