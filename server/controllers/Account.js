const loginPage = (req, res) => res.render('login');

const signupPage = (req, res) => res.render('signup');

const logout = (req, res) => res.redirect('/');

const login = async (req, res) => res.status(501).json({ error: 'Not implemented yet.' });

const signup = async (req, res) => res.status(501).json({ error: 'Not implemented yet.' });

module.exports = {
  loginPage,
  signupPage,
  logout,
  login,
  signup,
};