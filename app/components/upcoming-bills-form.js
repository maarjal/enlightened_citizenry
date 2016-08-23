import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upcomingBills() {
      this.sendAction('upcomingBills');
    }
  }
});
