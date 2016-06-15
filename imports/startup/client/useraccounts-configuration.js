import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
  onLogoutHook: () => {
    FlowRouter.go('login');
  }
});
