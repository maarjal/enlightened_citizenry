import Ember from 'ember';

export default Ember.Route.extend ({
  model: function() {
    var url = "http://congress.api.sunlightfoundation.com/committees/?apikey=b88f167fdac34860bf4220a9d104ec29&per_page=all";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
