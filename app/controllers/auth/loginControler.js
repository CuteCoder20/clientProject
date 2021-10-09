const passport = require("passport");
const bcrypt = require("bcrypt");
function loginControler() {
    return {
      login(req, res,) {
        res.render("login");
      },
  
      postlogin(req, res, next) {
        passport.authenticate("local", (err, user, info) => {
          if (err) {
            req.flash("error", info.message);
            return next(err);
          }
  
          if (!user) {
            req.flash("error", info.message);
            return res.redirect("/usamalogin");
          }
          req.logIn(user, (err)=>{
              if (err) {
                req.flash("error", info.message)
                return next(err)
              }
              return res.redirect("/usamahome")
            })
        })(req, res, next);
      },

      logout(req, res) {
       req.logout()
       return res.redirect("/usamalogin")
      },
    };
  }
  
  
  module.exports=loginControler;