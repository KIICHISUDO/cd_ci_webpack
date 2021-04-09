const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/public`,
        filename: "main.js"
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./index.html",
                    to: "./"
                }
            ]
        })
    ]
};
