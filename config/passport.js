const LocalStragey=require("passport-local").Strategy
const userModel=require("../app/model/user")
const bcrypt=require("bcrypt")
function passportInt(passport){
    
    passport.use(new LocalStragey({usernameField:"email"}, async(email, password, done)=>{

    const user=await  userModel.findOne({email:email})

    if (!user) {
        return done(null, false, {message:"no user with this email"})
    }

    bcrypt.compare(password, user.password).then(match=>{
        if (match) {
        return done(null, user, {message:"User Logged in succcessfuly"})
        }
    
        return done(null, false, {message:"wrong username or password"})
    })
    }))

    passport.serializeUser((user, done)=>{
        done(null, user.id)
    })

    passport.deserializeUser((id , done)=>{
        userModel.findById(id, (err, user)=>{
            
            done(err , user)
        })

    })
}


module.exports=passportInt;