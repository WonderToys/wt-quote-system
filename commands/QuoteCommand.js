const moment = require('moment');
const Command = require('wtools/Command');

const quoteStore = require('../providers/quoteStore');

// -----
//  QuoteCommand
// -----

class QuoteCommand extends Command {
  // -----
  //  Properties
  // -----

  get command() {
    return '!quote';
  }

  get usage() {
    return '!quote [number]?'
  }

  get description() {
    return 'Get a quote.';
  }

  // -----
  //  Public
  // -----
  action(request, reply) {
    const params = request.params;
    let number = null;

    if ( params.length >= 1 ) {
      number = parseInt(params[0]);
    }

    quoteStore.getOne(number)
      .then((quote) => {
        if ( quote == null ) return;
        
        const date = moment(quote.date);
        reply(`#${ quote.number }: "${ quote.quote }" -${ quote.username } (${ date.format('MMM D, YYYY') })`);
      });
  }
};

// Exports
module.exports = QuoteCommand;