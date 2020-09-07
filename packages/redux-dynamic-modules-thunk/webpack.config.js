let webpack = require("webpack");
let BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    let mode_env = argv.mode || "development";

    return {
        mode: mode_env,
        devtool: "source-map",
        entry: {
            main: "./lib/index",
        },

        output: {
            library: "@biagri/redux-dynamic-modules-thunk",
            libraryTarget: "umd",
            filename:
                mode_env === "production"
                    ? "@biagri/redux-dynamic-modules-thunk.min.js"
                    : "@biagri/redux-dynamic-modules-thunk.js",
            path: __dirname + "/dist/",
        },

        externals: {
            react: "react",
            redux: "redux",
            "react-redux": "react-redux",
            "redux-thunk": "redux-thunk",
            "@biagri/redux-dynamic-modules-core":
                "@biagri/redux-dynamic-modules-core",
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
