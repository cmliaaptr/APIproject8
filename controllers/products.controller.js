const Products = require('../models/products.model');

// GET semua product
exports.getAllProducts = async (req, res) => {
    Products.getAll((err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

// GET product by ID
exports.getProductById = (req, res) => {
    const { id } = req.params;
    Products.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Product not found' });
        res.json(results[0]);
    });
};

// POST create new product
exports.createProduct = (req, res) => {
    const data = req.body;
    Products.create(data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, ...data });
    });
};

// PUT update product by ID
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Products.update(id, data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Produk berhasil diupdate' });
    });
};

// DELETE product by ID
exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    Products.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product berhasil dihapus' });
    });
};
