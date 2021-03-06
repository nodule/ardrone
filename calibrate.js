module.exports = {
  name: "calibrate",
  ns: "ardrone",
  description: "Asks the drone to calibrate a device. Currently the AR.Drone firmware supports only one device that can be calibrated: the magnetometer, which is device number 0.  The magnetometer can only be calibrated while the drone is flying, and the calibration routine causes the drone to yaw in place a full 360 degrees.",
  phrases: {
    active: "Calibrating device {{input.device}}.."
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      },
      device: {
        title: "Device",
        type: "number",
        "default": 0
      }
    },
    output: {}
  },
  fn: function calibrate(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.calibrate($.device);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}