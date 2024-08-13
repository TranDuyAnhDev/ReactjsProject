/**
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 * */

module.exports = {
    'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    'env': {
        'node': true,
        'commonjs': true,
        'es6': true
    },
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'rules': {
        semi: 1,
        quotes: [2, 'single'],
        indent: ['error', 4, {
            ignoredNodes: ['TemplateLiteral'],
            SwitchCase: 1,
        }],
        'no-tabs': 0,
        'no-unused-vars': 0,
        'no-mixed-spaces-and-tabs': 0,
        'react/no-access-state-in-setstate': 0,
        'import/no-unresolved': 0,
        'max-len': [1, { code: 170, tabWidth: 4 }],
        'react/jsx-key': 0,
        'react/prop-types': 0,
        'react/display-name': 0,
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
        'import/resolver': {
            'webpack': {
                'config': 'webpack.config.js'
            },
            alias: [
                ['@components', './src/components'],
                ['@actions', './src/actions'],
                ['@apis', './src/apis'],
                ['@assets', './src/assets'],
                ['@commons', './src/commons'],
                ['@constants', './src/constants'],
                ['@containers', './src/containers'],
                ['@helpers', './src/helpers'],
                ['@hook', './src/hook'],
                ['@reducers', './src/reducers'],
                ['@redux', './src/redux'],
                ['@sagas', './src/sagas'],
                ['@createV2', './src/createV2'],
                ['@socket', './src/socket'],
            ],
        },
    },
};
