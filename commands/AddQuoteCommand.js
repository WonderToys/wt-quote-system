const Command = require('wtools/Command');

const quoteStore = require('../providers/quoteStore');

// -----
//  AddQuoteCommand
// -----

class AddQuoteCommand extends Command {
  // -----
  //  Properties
  // -----

  get command() {
    return '!addquote';
  }

  get usage() {
    return '!addquote [user] "[quote]"'
  }

  get description() {
    return 'Add a quote.';
  }

  // -----
  //  Public
  // -----
  action(request, reply) {
    const params = request.params;
    let username = params[0];
    let quote = params[1];

    if ( params.length > 2 ) {
      quote = params.slice(1).join(' ');
    }

    quoteStore.add(username, quote)
      .then((doc) => {
        reply(`I've added quote #${ doc.number } to the database. You're welcome.`);
      });
  }
};

// Exports
module.exports = AddQuoteCommand;