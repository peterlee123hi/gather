import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';

export const StudyGroups = new Mongo.Collection('StudyGroups');

StudyGroups.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

StudyGroups.schema = new SimpleSchema({
  name: {
    type: String,
    min: 1,
    max: 36
  },
  date: {
    type: Date
  },
  location: {
    type: String,
    max: 500
  },
  members: {
    type: Object // Array of IDs
  },
  class: {
    type: String,
    max: 500
  },
  purpose: {
    type: String,
    optional: true,
    max: 1000
  }
});

StudyGroups.attachSchema(StudyGroups.schema);

StudyGroups.publicFields = {
  name: 1,
  date: 1,
  location: 1,
  members: 1,
  class: 1,
  purpose: 1
}
