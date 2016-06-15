import { Meteor } from 'meteor/meteor';

import { StudyGroups } from '../study-groups.js';

Meteor.publish('studyGroups.retrieve', function studyGroupsRetieve() {
  return StudyGroups.find({
    members: { $elemMatch: this.userId }
  }, {
    fields: StudyGroups.publicFields
  });
});
