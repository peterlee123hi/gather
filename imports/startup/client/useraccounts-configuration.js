import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

Accounts.onLogin(function() {
  if (!Meteor.user().studentData) {
    FlowRouter.go('App.edit');
  } else {
    Flowrouter.go('App.home');
  }
});

AccountsTemplates.configure({
  onLogoutHook: () => {
    FlowRouter.go('login');
  }
});
