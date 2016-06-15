import { Meteor } from 'meteor/meteor';

import { StudyGroups } from '../study-groups.js';

// This might not be right...
// It's suppose to find every study group
// where the student is a member of the
// study group.
Meteor.publish('studyGroups.retrieve', function studyGroupsRetieve() {
  return StudyGroups.find({
    members: { $elemMatch: this.userId }
  }, {
    fields: StudyGroups.publicFields
  });
});
