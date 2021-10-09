function homeControler() {
  return {
    index(req, res) {
      res.render("signup");
    },
    home(req, res) {
      res.render("home");
    },
    fourpage(req, res) {
      res.render("404")
    },
  };
}

module.exports = homeControler;
