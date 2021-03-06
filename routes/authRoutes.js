const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', 
        passport.authenticate('google'), 
        (req, res) => {
            res.redirect('/surveys')
        }
    );

    app.get('/api/logout/', (req, res) => {
        // logout() is a function provided by passport.js
        req.logout();
        // res.send(req.user); // should be empty
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        // res.send(req.session);
        res.send(req.user);
    });
}
