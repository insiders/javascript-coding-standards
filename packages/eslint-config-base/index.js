module.exports = {
    'extends': [
        'eslint-config-airbnb-base',
        './rules'
    ].map(require.resolve)
};
