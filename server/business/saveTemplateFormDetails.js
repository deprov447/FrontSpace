const ejs = require("ejs");

module.exports = (req, res) => {
  const formData = req.body;
  //   const ejsTemplate = "<h1>HELLO WORLD <%= people %></h1>";
  //   res.send(ejs.render(ejsTemplate, formData));

  //   console.log(html);
  res.sendStatus(201);
};
