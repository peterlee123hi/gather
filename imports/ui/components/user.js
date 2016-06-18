import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { $ } from 'meteor/jquery';

import './user.html';

var selectedColor = '#4caf50';
var unselectedColor = '#2196f3';

Template.App_user.onCreated(function appUserOnCreated() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    'selected': false
  });
});

Template.App_user.onRendered(function appUserOnRendered() {
  if (Session.get('page') === 'create') {
    $('.user-panel').css('cursor', 'pointer');
  }
});

Template.App_user.helpers({
  selected() {
    const instance = Template.instance();
    return Session.get('page') === 'create' &&
      instance.state.get('selected') && 
      'selected';
  },

  studentName() {
    return this.student.profile.name;
  },

  studentImage() {
    const studentData = this.student.profile.studentData;
    return studentData.picture;
  },

  studentUniversity() {
    const studentData = this.student.profile.studentData;
    return studentData.university;
  },

  studentMajor() {
    const studentData = this.student.profile.studentData;
    return studentData.major;
  },

  studentYear() {
    const studentData = this.student.profile.studentData;
    return studentData.year;
  },

  studentFacebook() {
    return this.student.services.facebook.link;
  },

  studentEmail() {
    return this.student.services.facebook.email;
  }
});

Template.App_user.events({
  'click .user-panel'(event, instance) {
    instance.state.set('selected', !instance.state.get('selected'));
  }
});