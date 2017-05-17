const random = require('random-js')();
const Quote = require('../Quote');

// -----
//  QuoteStore
// -----

class QuoteStore {
  // -----
  //  Private
  // -----

  _getByNumber(number) {
    return Quote.findOne({ number });
  }

  _getRandomQuote() {
    return Quote.find({})
      .then((docs) => {
        const number = random.integer(0, docs.length - 1);
        return docs[number];
      });
  }

  // -----
  //  Public
  // -----

  getOne(number) {
    if ( number != null ) {
      return this._getByNumber(number);
    }

    return this._getRandomQuote();
  }

  add(username, quote) {
    const doc = Quote.create({ username, quote });
    return doc.save();
  }

  delete(number) {
    if ( number == null ) {
      return Promise.resolve(0);
    }

    return Quote.deleteOne({ number });
  }
};

// Exports
module.exports = new QuoteStore();