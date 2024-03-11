const app = require('./index');
const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server starting on http://localhost:${PORT}/`);
});