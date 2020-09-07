const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;//Requiring JSW Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt;//Requiring the Extract Strategy

const Doctor = require('../models/doctor');

//Setting up our secret key
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.code
}

//Getting user info from token
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    Doctor.findById(jwtPayLoad._id, function(err, user){
        if (err){console.log('Error in finding user from JWT'); return;}

        if (user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })

}));

module.exports = passport;
