import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('legislators', {path: "/legislators/:zipcode"});
  this.route('committees');
  this.route('bills');
  this.route('bill', {path: "/bill/:bill_id"});
  this.route('upcoming-bills');
});

export default Router;
