import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load templates including layouts and pages
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/login-body.js';
import '../../ui/layouts/edit-body.js';

import '../../ui/pages/app-page.js';
import '../../ui/pages/login-page.js';
import '../../ui/pages/edit-page.js';

// Configure routes
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_page' });
  },
});

FlowRouter.route('/edit', {
  name: 'App.edit',
  action() {
    BlazeLayout.render('Edit_body', { main: 'Edit_page' });
  }
});

FlowRouter.route('/login', {
  name: 'App.login',
  action() {
    BlazeLayout.render('Login_body', { main: 'Login_page' });
  }
});
