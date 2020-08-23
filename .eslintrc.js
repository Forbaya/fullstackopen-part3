module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es2020': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'arrow-spacing': [
            'error', { 'before': true, 'after': true }
        ],
        'eqeqeq': 'error',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'no-console': 0,
        'no-trailing-spaces': 'error',
        'object-curly-spacing': [
            'error', 'always'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
