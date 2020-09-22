module.exports = {
    'rules': {
        'click-events-have-key-events': 'off',
        'react/destructuring-assignment': [
            2,
            'always',
            {
                'ignoreClassFields': true
            }
        ],
        'jsx-a11y/label-has-for': [
            2,
            {
                'components': [
                    'Label'
                ],
                'required': {
                    'some': [
                        'nesting',
                        'id'
                    ]
                },
                'allowChildren': false
            }
        ]
    }
};
