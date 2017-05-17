const Command = require('wtools/Command');

const quoteStore = require('../providers/quoteStore');

// -----
//  DelQuoteCommand
// -----

class DelQuoteCommand extends Command {
  // -----
  //  Properties
  // -----

  get command() {
    return '!delquote';
  }

  get usage() {
    return '!delquote [number]'
  }

  get description() {
    return 'Delete a quote.';
  }

  // -----
  //  Public
  // -----
  action(request, reply) {
    const params = request.params;
    if ( params.length > 0 ) {
      const number = parseInt(params[0]);

      quoteStore.delete(number)
        .then((count) => {
          if ( count == 0 ) {
            reply(`I can't find quote #${ number }. FeelsBadMan`);
          }
          else {
            reply(`I've deleted quote #${ number }. You're welcome.`);
          }
        });
    }
  }
};

// Register
module.exports = DelQuoteCommand;