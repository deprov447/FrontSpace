const express = require("express");
const router = express();

router.get("/categories", (req, res) => {
  const categoriesArray = [
    {
      name: "DemoCategory1",
      img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      desc: "This is just a demo category, no real importance",
    },
  ];
  res.json(categoriesArray);
});

module.exports = router;
