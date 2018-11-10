
var common = require("../../helpers/common");

var command = function (msg, server) {
  var args = msg.message.split(/ +/);
  if (args.length == 0) return;

  if (server.isPermitted(msg.user_id)) {
    var speed = parseFloat(msg.args[0]);
    speed = common.numberClamp(speed, 0.25, 4.0);
    server.permitted[msg.user_id].speed = speed;

    msg.response(server.lang('myspeed.okay', { speed: speed }));
  } else {
    msg.response(server.lang('myspeed.deny'));
  }
};

exports.register = function (commands) {
  commands.add('myspeed', command);
};

exports.unRegister = function (commands) {d
  commands.remove('myspeed');
};