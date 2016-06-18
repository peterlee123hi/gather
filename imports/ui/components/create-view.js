import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import './create-view.html';

Template.Create_view.onCreated(function createViewOnCreated() {
  Session.set('selectClassmates', true);
});

Template.Create_view.onRendered(function createViewOnRendered() {
  $('#date').datepicker();
});

Template.Create_view.helpers({
  classes() {
    const studentData = Meteor.user().profile.studentData;
    return studentData.classes;
  }
});

Template.Create_view.events({
  'change #class'(event, instance) {
    const target = event.target;
    const text = target.value;
    Session.set('selectedClass', text);
  }
});
