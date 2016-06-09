Template.autoNumeric.onRendered(function () {
    var input    = $(this.find('input')),
        config   = { // default config
            aSep:     ',',
            dGroup:   3,
            aDec:     '.',
            altDec:   null,
            aSign:    '',
            pSign:    'p',
            vMin:     '0.00',
            vMax:     '999999999.99',
            mDec:     null,
            mRound:   'S',
            aPad:     true,
            nBracket: null,
            wEmpty:   'empty',
            lZero:    'allow',
            aForm:    true
        };
    var settings = _.pick(this.data, _.keys(config));
    _.defaults(settings, config);
    input.autoNumeric('init', settings);

    this.autorun(function () {
        input.autoNumeric('set', Template.currentData().value)
    });
});

Template.autoNumeric.onDestroyed(function () {
    $(this.find('input')).autoNumeric('destroy');
});