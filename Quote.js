const Persistable = require('wtools/Persistable');

// -----
//  Quote
// -----

class Quote extends Persistable {
  constructor() {
    super();

    this.username = String;
    this.quote = String;
    this.number = Number;
    this.date = {
      type: Date,
      default: new Date()
    };
  }

  // -----
  //  Hooks
  // -----

  preSave() {
    return Quote.find({}, { sort: '-number' })
      .then((docs) => {
        let number = 1;
        if ( docs.length > 0 ) {
          number = docs[0].number + 1;
        }

        this.number = number;
      })    
  }
};

// Exports
module.exports = Quote;