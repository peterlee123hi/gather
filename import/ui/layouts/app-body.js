import './app-body.html';

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Lists } from '../../api/lists/lists.js';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { TAPi18n } from 'meteor/tap:i18n';

Template.App_body.onCreated(function appBodyOnCreated() {
  if (!Meteor.user()) {
    FlowRouter.go('login');
  }

  // Add subscriptions

  this.state = new ReactiveDict();
  this.state.setDefault({
    // Add default state values
  });
});
