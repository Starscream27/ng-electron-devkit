const DefinePlugin = require('webpack/lib/DefinePlugin');

export const electronConfig = {
    target: 'electron-renderer',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    },
    externals: [
        { sharp: 'commonjs sharp' },
        { leveldown: 'require("leveldown")' }
    ],
    plugins: [
        new DefinePlugin({
            'process.env.FLUENTFFMPEG_COV': false
        }),
    ]
};