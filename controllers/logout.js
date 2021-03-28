const logoutController = async (req, res) => {
  if (req.logout) {
    req.logout();
    res.redirect("/login");
    return;
  }
  res.sendStatus(200);
};

module.exports = {
  logoutController,
};
