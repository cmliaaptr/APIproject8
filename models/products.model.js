const db = require('./db');

const Products = {
    getAll: callback => {
        db.query('SELECT * FROM products', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM products WHERE id = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query(
            'INSERT INTO products (name, price) VALUES (?, ?)',
            [data.name, data.price],
            callback
        );
    },

    update: (id, data, callback) => {
        db.query(
            'UPDATE products SET name = ?, price = ? WHERE id = ?',
            [data.name, data.price, id],
            callback
        );
    },

    delete: (id, callback) => {
        db.query('DELETE FROM products WHERE id = ?', [id], callback);
    }
};

module.exports = Products;
