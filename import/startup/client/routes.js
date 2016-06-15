import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load templates including layouts and pages
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/login-body.js';
import '../../ui/layouts/edit-body.js';

import '../../ui/pages/users-page.js';
import '../../ui/pages/login-page.js';
import '../../ui/pages/edit-page.js';
import '../../ui/pages/study-groups-page.js';
import '../../ui/pages/create-page.js';
import '../../ui/pages/user-page.js';

// Define routes
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Users_page' });
  }
});

FlowRouter.route('/edit', {
  name: 'App.edit',
  action() {
    BlazeLayout.render('Edit_body', { main: 'Edit_page' });
  }
});

FlowRouter.route('/studygroups', {
  name: 'App.studygroups',
  action() {
    BlazeLayout.render('App_body', { main: 'Study_groups_page' });
  }
});

FlowRouter.route('/create', {
  name: 'App.create',
  action() {
    BlazeLayout.render('App_body', { main: 'Create_page' });
  }
})

FlowRouter.route('/user/:_id', {
  name: 'App.user',
  action() {
    BlazeLayout.render('App_body', { main: 'User_page' });
  },
});

// Configure account routess
AccountsTemplates.configureRoute('signIn', {
  name: 'login',
  path: '/login',
  template: 'Login_page',
  layoutTemplate: 'Login_body',
  contentRegion: 'main'
});
