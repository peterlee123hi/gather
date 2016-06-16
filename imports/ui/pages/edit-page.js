import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';

import './edit-page.html';

// Find a smarter way to find universities and load the classes
var universityClasses = {
  'UC Berkeley': [
    'CS70',
    'CS61A',
    'CS61B',
    'CS61C',
    'CS170',
    'CS188'
  ],
  'Harvard': [
    'CS50',
    'CS51',
    'CS20'
  ]
};

var majors = [
  'Computer Science',
  'EECS',
  'Cognitive Science'
];

var years = [
  'Freshman',
  'Sophomore',
  'Junior',
  'Senior'
];

Template.Edit_page.onCreated(function editPageOnCreated() {
  // Why does the reactive dictionary seem to not be working?

  this.state = new ReactiveDict();
  this.state.setDefault({
    university: 'UC Berkeley',
    classesAdded: []
  });
});

Template.Edit_page.helpers({
  universities() {
    return Object.keys(universityClasses);
  },

  classes() {
    const instance = Template.instance();
    return universityClasses[instance.state.university];
  },

  years() {
    return years;
  },

  majors() {
    return majors;
  },

  classesAdded() {
    const instance = Template.instance();
    return instance.state.classesAdded;
  }
});

Template.Edit_page.events({
  'click .js-select-university'(event, instance) {
    // Double check that this.text() works!!!
    instance.state.set('university', this.text());
  },

  'click .js-add-class'(event) {
    event.preventDefault();

    // Add class to reactive dictionary
  },

  'click .js-submit'(event) {
    event.preventDefault();

    // Create student data using form inputs
    // Add to user object in users collection
    // Redirect to home page
  }
});
