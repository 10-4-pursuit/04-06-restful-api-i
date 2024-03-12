const express = require('express');
const app = require('./index.js')

const PORT = process.env.PORT || 3016

app.listen(PORT, () => {
    console.log(` This server is listening on port ${PORT}`)
}
)