import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';

import './user.js';

import './users-view.html';

Template.Users_view.onCreated(function usersViewOnCreated() {
  this.subscribe('classmates');
});

Template.Users_view.helpers({
  classmateIDs() {
    var className = Session.get('selectedClass');
    var classmates = Meteor.users.find({
      'profile.studentData.classes': className
    }).fetch();
    var ids = [];

    classmates.forEach(function(classmate) {
      if (classmate._id != Meteor.user()._id) {
        ids.push(classmate._id);
      }
    });
    return ids;
  },

  getStudent(id) {
    var student = Meteor.users.findOne(id);
    return student;
  }
});
