const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.send('ola mundo');
});

app.listen(PORT, () => {
    console.log(`Este app está escutando na port ${PORT}`);
});