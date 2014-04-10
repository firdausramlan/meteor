Package.describe({
  name: "random",
  test: "random-test",
  summary: "Random number generator and utilities",
  version: '1.0.0',
  internal: true
});

Package.on_use(function (api) {
  api.use('underscore');
  api.export('Random');
  api.add_files('random.js');
  api.add_files('deprecated.js');
});

Package.on_test(function(api) {
  api.use('random');
  api.use('tinytest');
  api.add_files('random_tests.js', ['client', 'server']);
});
