Package.describe({
	name: 'gibson:meteor-autonumeric',
	version: '0.0.1',
	summary: 'Add jquery-autoNumeric library support',
	git: 'https://github.com/gibson/meteor-autonumeric',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('0.9.0');
	api.use([
		'jquery',
		'templating',
		'underscore'
	], 'client');
	api.addFiles([
		'lib/autoNumeric.js',
		'client/autoNumeric.html',
		'autonumeric.js'
	], 'client');
});

Package.onTest(function (api) {
	api.use('tinytest');
	api.use('gibson:autonumeric');
	api.addFiles('autonumeric-tests.js');
});
