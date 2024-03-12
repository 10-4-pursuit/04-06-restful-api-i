const express = require('express');
const app = require('./index.js')

const PORT = process.env.PORT || 3017

app.listen(PORT, () => {
    console.log(` This server is listening on port ${PORT}`)
}
)