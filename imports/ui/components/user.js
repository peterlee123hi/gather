import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import './user.html';

var selectedColor = '#4caf50';
var unselectedColor = '#2196f3';

Template.App_user.onRendered(function appUserOnRendered() {
  if (Session.get('page') === 'create') {
    $('.user-panel').css('cursor', 'pointer');
  }
});

Template.App_user.helpers({
  selected() {
    const instance = Template.instance();
    var studentID = this.student._id;
    const isSelected = function() {
      return $.inArray(studentID, Session.get('selectedClassmates')) !== -1;
    };
    console.log(isSelected());
    return Session.get('page') === 'create' &&
      isSelected() && 
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
    if (Session.get('page') === 'create') {
      var selectedClassmates = Session.get('selectedClassmates');
      var studentID = this.student._id; 
      const isSelected = function() {
        return $.inArray(studentID, Session.get('selectedClassmates')) !== -1;
      };
      if (isSelected()) {
        var index = selectedClassmates.indexOf(studentID);
        selectedClassmates.splice(index, 1);
        Session.set('selectedClassmates', selectedClassmates);
      } else {
        selectedClassmates.push(studentID);
        Session.set('selectedClassmates', selectedClassmates);
      }
    }
  }
});