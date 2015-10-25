module.exports = {
    entry: "./frontend/src/app.js",
    output: {
        filename: "./static/build/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
};