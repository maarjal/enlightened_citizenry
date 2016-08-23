import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: "/results/:zipcode"});
  this.route('results2');
  this.route('results3');
  this.route('bills', {path: "/bills/:bills_id"});
});

export default Router;
