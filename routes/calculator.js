
/*
 * GET calculator listing.
 */

exports.futureValueCalculator = function (req, res) {
    res.render('Calculators/FutureValueCalculator', { title: 'ejs' });
};

exports.presentValueCalculator = function (req, res) {
    res.render('Calculators/PresentValueCalculator', { title: 'ejs' });
};

exports.PERatioCalculator = function (req, res) {
    res.render('Calculators/PERatioCalculator', { title: 'ejs' });
};

exports.DOLCalculator = function (req, res) {
    res.render('Calculators/DOLCalculator', { title: 'ejs' });
};

exports.DFLCalculator = function (req, res) {
    res.render('Calculators/DFLCalculator', { title: 'ejs' });
};

exports.DCLCalculator = function (req, res) {
    res.render('Calculators/DCLCalculator', { title: 'ejs' });
};

exports.operatingIncomeCalculator = function (req, res) {
    res.render('Calculators/OperatingIncomeCalculator', { title: 'ejs' });
};

exports.ROECalculator = function (req, res) {
    res.render('Calculators/ROECalculator', { title: 'ejs' });
};

exports.breakEvenPoint = function (req, res) {
    res.render('Calculators/BreakEvenPointCalculator', { title: 'ejs' });
};