Package.describe({
  summary: "Wrapper around npm package : ga-report",
  version: "1.0.0",
  git: "https://github.com/maxnowack/ga-report.git"
});

Npm.depends( {
	"ga-report": "1.0.0"
} );

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles('maxnowack:gareport.js', 'server');
  if(api.export) api.export('Report');
});
