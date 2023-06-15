const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.post('/test',(req,res) => {
    console.log('----', req.body);
    res.send('POOOST')
})
module.exports = router;
