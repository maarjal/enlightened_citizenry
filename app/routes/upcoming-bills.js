import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = "http://congress.api.sunlightfoundation.com/bills/?apikey=b88f167fdac34860bf4220a9d104ec29&chamber=house&per_page=all";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
