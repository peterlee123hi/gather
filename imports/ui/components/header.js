import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './header.html';

Template.App_header.helpers({
  studentFirstName() {
    return Meteor.user().services.facebook.first_name;
  }
});

Template.App_header.events({
  'click #logout'() {
    Meteor.logout(function() {
      FlowRouter.go('App.login');
    });
  },

  'click #edit-profile'() {
    FlowRouter.go('App.edit');
  },

  'click #view'() {
    Session.set('page', 'studyGroups');
  },

  'click #create'() {
    Session.set('page', 'create');
  },

  'click #search-student'(event) {
    event.preventDefault();
    Session.set('studentSearchQuery', $('search-box').val());
    $('search-box').val('');
  },

  'click #brand'() {
    Session.set('page.users');
  }
});