module.exports = {
  name: "disableEmergency",
  ns: "ardrone",
  description: "Causes the emergency REF bit to be set to 1 until navdata.droneState.emergencyLanding is 0. This recovers a drone that has flipped over and is showing red lights to be flyable again and show green lights. It is also done implicitly when creating a new high level client.",
  phrases: {
    active: "Disabling Emergency"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      }
    },
    output: {}
  },
  fn: function disableEmergency(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.disableEmergency();
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}