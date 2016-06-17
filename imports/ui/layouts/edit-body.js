import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './edit-body.html';

Template.Edit_body.onCreated(function editBodyOnCreated() {
  this.subscribe('userData');
  
  if (!Meteor.user()) {
    FlowRouter.go('App.login');
  }
});