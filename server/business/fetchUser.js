const fetchUser = (req, res, next) => {
  res.send(req.user);
};

module.exports = fetchUser;
