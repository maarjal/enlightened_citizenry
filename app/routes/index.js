import Ember from 'ember';

export default Ember.Route.extend ({
  actions: {
    zipcodeLookup(params) {
      this.transitionTo("results", params.zipcode);
    },
    committeeLookup() {
      this.transitionTo('results2');
    }
  }
});
