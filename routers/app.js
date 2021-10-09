const homeControler=require("../app/controllers/homeControler")
const signupControler=require("../app/controllers/auth/signupControler")
const loginControler=require("../app/controllers/auth/loginControler")
const contactControler=require("../app/controllers/auth/contactControler")

const guest=require("../app/middleware/guest")

function Router(app){
    
    app.get("/",guest,homeControler().index)
    app.get("/usamahome",guest, homeControler().home)
    app.get("/usamasignup",guest,signupControler().signup)
    app.post("/usamasignup",signupControler().postsignup)
    app.get("/usamalogin",guest, loginControler().login)
    app.post("/usamalogin",loginControler().postlogin)
    app.get("/usamacontact",contactControler().contact)
    app.post("/usamacontact",contactControler().contactpost)
    app.get('/logout',loginControler().logout)
    app.get("*",homeControler().fourpage)
    
}


module.exports=Router;