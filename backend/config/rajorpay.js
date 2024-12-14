const Rajorpay = require('razorpay');
require('dotenv').config();

exports.instance = new Rajorpay({
    key_id: rzp_live_eMweeorqkvWbCJ,
    key_secret: r94Eigdonunvat4dakEfQVKe
})
