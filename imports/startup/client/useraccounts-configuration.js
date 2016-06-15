import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
  defaultTemplate: 'Login_page',
  defaultLayout: 'Login_body',
  defaultContentRegion: 'main',
  defaultLayoutRegions: {},
  onLogoutHook: () => {
    FlowRouter.go('login');
  }
});
