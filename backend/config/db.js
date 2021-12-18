const mongoose = require('mongoose')

mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.kud18.mongodb.net/dental?retryWrites=true&w=majority`,
  function (err) {
    console.log(err)
  }
);

module.exports = mongoose
