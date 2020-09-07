let webpack = require("webpack");
let BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    let mode_env = argv.mode || "development";

    return {
        devtool: "source-map",
        entry: {
            main: "./lib/index",
        },

        output: {
            library: "@biagri/redux-dynamic-modules",
            libraryTarget: "umd",
            filename:
                mode_env === "production"
                    ? "@biagri/redux-dynamic-modules.min.js"
                    : "@biagri/redux-dynamic-modules.js",
            path: __dirname + "/dist/",
        },

        externals: {
            "prop-types": "prop-types",
            react: "react",
            redux: "redux",
            "react-redux": "react-redux",
            "redux-saga": "redux-saga",
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: "static",
                reportFilename: `react-redux-module.stats.html`,
                openAnalyzer: false,
            }),
        ],
    };
};
