const express = require('express');

const app = express();

app.use(express.static('./dist/WorldTourRecipes'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/WorldTourRecipes/'}),
);

app.listen(process.env.PORT || 8080);
