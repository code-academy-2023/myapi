const db = require('../database');

const borrower = {
    getAll: function (callback) {
        return db.query('select * from borrower', callback);
    },
    getById: function (id, callback) {
        return db.query('select * from borrower where idBorrower=?', [id], callback);
    },

    add: function (borrower, callback) {
        return db.query(
            'insert into borrower (fname,lname) values(?,?)',
            [borrower.fname, borrower.lname],
            callback
        );
    },
    delete: function (id, callback) {
        return db.query('delete from borrower where idBorrower=?', [id], callback);
    },
    update: function (id, borrower, callback) {
        return db.query(
            'update borrower set fname=?,lname=? where idBorrower=?',
            [borrower.fname, borrower.lname, id],
            callback
        );
    }
};
module.exports = borrower;