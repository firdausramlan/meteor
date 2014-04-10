Package.describe({
  name: "oauth1",
  test: "oauth1-test",
  summary: "Common code for OAuth1-based login services",
  version: "1.0.0",
  internal: true
});

Package.on_use(function (api) {
  api.use('random');
  api.use('service-configuration', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('underscore', 'server');
  api.use('http', 'server');

  api.export('OAuth1Binding', 'server');
  api.export('OAuth1Test', 'server', {testOnly: true});

  api.add_files('oauth1_binding.js', 'server');
  api.add_files('oauth1_server.js', 'server');
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.use('random');
  api.use('service-configuration', 'server');
  api.use('oauth1', 'server');
  api.use('oauth', 'server');
  api.add_files("oauth1_tests.js", 'server');
});
