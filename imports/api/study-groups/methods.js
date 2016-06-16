import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { StudyGroups } from './study-groups.js';

const GROUP_ID_ONLY = new SimpleSchema({
  groupId: { type: String }
}).validator();

export const insert = new ValidatedMethod({
  name: 'studyGroups.insert',
  validate: StudyGroups.schema.validator(),
  run() {
    return StudyGroups.insert({});
  }
});

export const remove = new ValidatedMethod({
  name: 'studyGroups.remove',
  validate: GROUP_ID_ONLY,
  run({ groupId }) {
    StudyGroups.remove(groupId);
  }
});

const GROUPS_METHODS = _.pluck([
  insert,
  remove
], 'name');

if (Meteor.isServer) {
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(GROUPS_METHODS, name);
    },

    connectionId() { return true; },
  }, 5, 1000);
}
