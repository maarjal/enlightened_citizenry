import Ember from 'ember';

export default Ember.Route.extend ({
  actions: {
    zipcodeLookup(params) {
      this.transitionTo("legislators", params.zipcode);
    },
    committeeLookup() {
      this.transitionTo('committees');
    },
    billsLookup() {
      this.transitionTo('bills');
    },
    upcomingBills() {
      this.transitionTo('upcoming-bills');
    }
  }
});
