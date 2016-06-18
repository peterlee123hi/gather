import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './user.html';

Template.App_user.helpers({
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
