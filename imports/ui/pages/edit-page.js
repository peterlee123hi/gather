import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';

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
  this.state = new ReactiveDict();
  this.state.setDefault({
    university: 'UC Berkeley',
    classesAdded: [],
    invalidClassSelection: false
  });
});

Template.Edit_page.helpers({
  universities() {
    return Object.keys(universityClasses);
  },

  classes() {
    const instance = Template.instance();
    return universityClasses[instance.state.get('university')];
  },

  years() {
    return years;
  },

  majors() {
    return majors;
  },

  classesAdded() {
    const instance = Template.instance();
    return instance.state.get('classesAdded');
  },

  invalidClassSelection() {
    const instance = Template.instance();
    return instance.state.get('invalidClassSelection') && 'has-error';
  }
});

Template.Edit_page.events({
  'change #university'(event, instance) {
    const target = event.target;
    const text = target.value;
    instance.state.set('university', text);
    instance.state.set('classesAdded', []);
  },

  'click .js-add-class'(event, instance) {
    event.preventDefault();
    var classesAdded = instance.state.get('classesAdded');
    const target = $('#class');
    const text = target.val();
    if (!classesAdded.includes(text)) {
      classesAdded.push(text);
      instance.state.set('classesAdded', classesAdded);
    }
  },

  'click .js-remove-class'(event, instance) {
    event.preventDefault();
    var classesAdded = instance.state.get('classesAdded');
    const target = event.target;
    const text = target.value;
    const index = classesAdded.indexOf(text);
    classesAdded.splice(index, 1);
    instance.state.set('classesAdded', classesAdded);
  },

  'click .js-submit'(event, instance) {
    event.preventDefault();

    const university = instance.state.get('university');
    const classesAdded = instance.state.get('classesAdded');
    const year = $('#year').val();
    const major = $('#major').val();

    const validateForm = function() {
      var valid = true;

      if (instance.state.get('classesAdded').length == 0) {
        instance.state.set('invalidClassSelection', true);
        valid = false;
      } else {
        instance.state.set('invalidClassSelection', false);
        valid = valid && true;
      }

      return valid;
    }

    if (validateForm()) {
      const studentData = {
        'university': university,
        'classes': classesAdded,
        'year': year,
        'major': major
      };

      Meteor.users.update(Meteor.userId(), {
        $set: {
          'profile.studentData': studentData
        }
      });

      FlowRouter.go('App.home');
    }
  }
});