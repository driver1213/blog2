// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs');
// app.use(express.static('public'));

// app.use(require('./routes/'));
// app.use(require('./routes/blogs.js'));
// app.use(require('./routes/editblogs.js'));

// app.listen(3000, () => {
//   console.log('Listening on 3000');
// });



const db = require('./models')

db.team.findAll({include: [ {model: db.player}]})
.then(results =>{
  results.forEach(record =>{
    console.log(record.firstName, record.player.firstName)
  })
});

