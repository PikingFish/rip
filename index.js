const express = require("express");
const passport = require('passport');
const LocalStrategy = require('passport-local');

const tasks = {
    1: {
      "title": "Каркас потолка",
      "description": "Каркас для потолка из спаренных профилей. Применяется повсеместно. - 5000р",
      "image": "1.jpg"
    },
    2: {
      "title": "Каркас потолка совершенно другой формы - 100 долларов",
      "description": "На этот раз концептуально другая конструкция - бесплатный образец",
      "image": "2.jpg"
    },
    3: {
      "title": "Готовый продукт",
      "description": "Светится!",
       "image": "3.jpg"
    }
};

const app = express();
app.set("view engine", "hbs");

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

app.use('/prod/:id', function (req, res) {
  res.render("prod.hbs", tasks[req.params.id])
});

app.use("//", function(_, response) {
  response.render("list.hbs",
    Object.keys(tasks).map(a => ({"id": a, ...tasks[a]}))
  );
});

app.use("*", function (req, res) {
  res.status(404).send("404 ERROR");
});

app.listen(5000);
