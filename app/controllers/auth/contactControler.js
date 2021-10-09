const contactModel = require("../../model/contact");

function contactControler() {
  return {
    contact(req, res) {
      res.render("contact");
    },

    contactpost(req, res) {
      const { fname, lname, email, message } = req.body;

      if (!fname || !lname || !email || !message) {
        req.flash("error", "All fields are required");
        req.flash("fname", fname);
        req.flash("lname", lname);
        req.flash("email", email);
        req.flash("message", message);
        return res.redirect("/usamacontact");
      }

      const contact = new contactModel({
        fname: fname,
        lname: lname,
        email: email,
        message: message,
      });

      contact
        .save()
        .then((err) => {
          req.flash("error", "Submit successfuly");
          return res.redirect("/usamacontact");
        })
        .catch((err) => {
          req.flash("error", "Somewthing went wrong");
          req.flash("fname", fname);
          req.flash("lname", lname);
          req.flash("email", email);
          req.flash("message", message);
          return res.redirect("/contact");
        });
    },
  };
}

module.exports = contactControler;
