const signout = (req, res) => {
  req.logout((err) => {
    if (err) res.sendStatus(500);
  });
  res.sendStatus(200);
};

module.exports = signout;
