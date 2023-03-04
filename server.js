const express = require('express');

const Port = process.env.Port || 3500

// App initialisation and middleware
const app = express();


app.listen(Port, console.log(`Process in running on Port ${Port}`))