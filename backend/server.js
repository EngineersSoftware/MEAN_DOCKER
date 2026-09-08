const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb:27017/mean_docker';

mongoose.connect(MONGO_URI)
                .then(() => console.log('Conectado a MongoDB'))
                .catch((err) => console.error('Error al conectar a MongoDB:', err));

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number
});
const Product = mongoose.model('Product', ProductSchema);

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});