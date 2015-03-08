exports.authenticate=
{
  name: "ah-passport-plugin/github/callback",
  description: "Just a simple demo github login - callback action",
  
  run:function(api, connection, next)
  {
  	api.log("ah-passport-plugin: Github callback action running", "debug");

    api.AHPassportPlugin.authenticate('github', { failureRedirect: '/api/ah-passport-plugin/github/authenticate' }),
    next(connection, true);
  }
};