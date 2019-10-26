/*jshint esversion: 9 */
// class for all the details of a command
var Common = require('@helpers/common');

class Command {

  static get subcommands () {
    return [
      ['thing', ':channel?', ':user?']
    ]
  }

  static get command (){
    return this.instance = this.instance || new this;
  }

  get hidden() {
    return true;
  }

  get order() {
    return 99;
  }

  get command_name() {
    return this.constructor.name.toLowerCase();
  }

  get group() {
    return 'misc';
  }

  get short_help() {
    return `${this.command_name}.shorthelp`;
  }



  get long_help() {
    return `${this.command_name}.longhelp`;
  }

  get sequence() {
    return {
      message : 0,
      token : 0,
    };
  }

  /**
   * [execute main command execute function]
   *
   * @param {*} msg
   * @param {*} server
   * @param {*} world
   *
   * @return  {[type]}  [return description]
   */
  run (args) {
    this.execute(args);
  }

  processSubcommandItem(arg_thing){
    return {
      isVariable : arg_thing.indexOf(':') > -1,
      variable : arg_thing.replace(/\?\.:/g, ''),
      optional : arg_thing.indexOf('?') > -1,
      restOfArgs : arg_thing.indexOf('...') > -1,
    };
  }

  processSubcommands(args) {
    let input = args.input;

    for (let i = 0; i < this.subcommands.length; i++) {
      const commandLine = this.subcommands[i];

      let cmdThingo = {
      };

      for (let j = 0; j < commandLine.length; j++) {
        let command = commandLine[j];
        command = this.processSubcommandItem(command);

        if(!comamnd.isVariable && j == 0) {
          cmdThingo.command = comamnd.variable;
        } else {
          continue;
        }

        if(comamnd.isVariable && j > 0) {
          cmdThingo[command.variable] = input[j];
        }

      }


    }
  }

  /**
   * [execute main command execute function]
   *
   * @param {*} msg
   * @param {*} server
   * @param {*} world
   *
   * @return  {[type]}  [return description]
   */

  execute (details, server, world) {
    Common.out('Please implement the execute function');
  }


  /**
   * [listeners register listeners]
   *
   * @return  {[type]}  [return description]
   */
  get listeners() {
    var self = this;
    return {
      message : self.onMessage || null,
      token : self.onToken || null,

      messageDelivered : self.onMessageDelivered || null,
      validate: self.onValidate || null,

      joinVoice: self.onJoinVoice || null,
      leaveVoice: self.onLeaveVoice || null,

      follow: self.onFollow || null,
      unfollow: self.onUnfollow || null,

      configureVoice: self.onConfigureVoice || null
    }
  }
}

module.exports = Command;
