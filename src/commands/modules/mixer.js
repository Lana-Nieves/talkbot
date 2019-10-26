/*jshint esversion: 9 */

var Command = require('@models/Command'),
  Common = require('@helpers/common'),
  CommentBuilder = require('@models/CommentBuilder');

class Mixer extends Command {

  get group () {  return 'control'; }
  get hidden () { return false; }

  get subcommands(){
    return [
      ["permit", ":channel", ":user?"]
    ]
  }

  unpermit({input, subcommand}) {

  }

  execute ({input}) {
    var server = input.server;


  }
}

//registration
exports.register =  (commands) => {
  commands.addAll([
    Mixer.command
  ]);
};

exports.unRegister = (commands) => {
  commands.removeAll([
    Mixer.command
  ]);
};

exports.Mixer = Mixer;
