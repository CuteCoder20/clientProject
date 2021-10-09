const userModel = require("../../model/user");
const bcrypt = require("bcrypt");
function signupControler() {
  return {
    signup(req, res) {
      res.render("signup");
    },

    async postsignup(req, res) {
      const { name, email, phone, password, cpassword } = req.body;

      if (!name || !email || !phone || !password || !cpassword) {
        req.flash("error", "All fields are required");
        req.flash("name", name);
        req.flash("email", email);
        req.flash("phone", phone);
        return res.redirect("/usamasignup");
      }

      userModel.exists({ email: email }).then((err, result) => {
        if (result) {
          req.flash("error", "Email alredy taken");
          req.flash("name", name);
          req.flash("email", email);
          req.flash("phone", phone);
          return res.redirect("/usamasignup");
        }
      });

      const hashpassword = await bcrypt.hash(password, 10);

      if (password === cpassword) {
        const user = new userModel({
          name: name,
          email: email,
          phone: phone,
          password: hashpassword,
        });

        user
        .save()
        .then((err) => {
        return res.redirect("/usamalogin");
        })
        .catch((err) => {
        req.flash("error", "Email alredy taken");
        req.flash("name", name);
        req.flash("email", email);
        req.flash("phone", phone);
        return res.redirect("/signup");
          });
      } else {
        req.flash("error", "Confirm password not match");
        req.flash("name", name);
        req.flash("email", email);
        req.flash("phone", phone);
        return res.redirect("/usamasignup");
      }
    },
  };
}

module.exports = signupControler;
