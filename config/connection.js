const { MongoClient } = require('mongodb');
const state = {
    db: null
};

const url = 'mongodb://localhost:27017';
const dbname = 'shopping';

module.exports.connect = async function(done) {
    if (state.db) return done(); // If already connected, call done

    try {
        const client = await MongoClient.connect(url, );
        state.db = client.db(dbname);
        done();
    } catch (err) {
        done(err);
    }
};

module.exports.get = function() {
    if (!state.db) {
        throw new Error('Database not connected. Call connect() first.');
    }
    return state.db;
};
