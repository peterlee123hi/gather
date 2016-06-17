import '../../api/study-groups/methods.js';
import '../../api/study-groups/server/publications.js';

// Publish user data
Meteor.publish('userData', function () {
    return Meteor.users.find({
      _id: this.userId
    });
});

Meteor.publish('classmates', function() {
  const user = Meteor.users.findOne(this.userId);
  const userStudentData = user.profile.studentData;
  return Meteor.users.find({
    'profile.studentData.classes': {
      '$in': userStudentData.classes
    }
  });
});