import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeeLookup() {
      this.sendAction('committeeLookup');   
    }
  }
});
