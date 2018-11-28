const path = require('path')
const src = path.resolve(__dirname, "../src")
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                include: [
                    path.resolve(__dirname),
                    src,
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'virtual-dom': src
        }
    }
}
