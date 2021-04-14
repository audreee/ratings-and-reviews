let express = require('express');
let API_KEY = require('../../config.js');
let axios = require('axios');

module.exports = {
    getProducts: (req, res) => {
        let options = {
            method: 'GET',
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.product_id}`,
            headers: {
                'Authorization': API_KEY
            }
        };
        axios(options)
            .then((response) => {
                res.send(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}