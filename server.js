const app = require('./index.js');

const PORT = process.env.PORT || 3003;

app.listen(3003, () => {
    console.log(`Server is listening on port ${PORT}`);
});