import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load templates including layouts and pages

// Define routes
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Users_page' });
  }
});

FlowRouter.route('/login', {
  name: 'App.login',
  action() {
    BlazeLayout.render('Login_body');
  },
});

FlowRouter.route('/edit', {
  name: 'App.edit',
  action() {
    BlazeLayout.render('Edit_body');
  },
});

// TODO Add user and study groups routes

// Configure account routess
AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
});
