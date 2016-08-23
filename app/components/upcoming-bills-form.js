import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upcomingBills(value) {
      this.sendAction('upcomingBills', value);
    }
  }
});
