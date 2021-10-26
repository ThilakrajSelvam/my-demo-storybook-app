module.exports = function (api) {
    api.cache(false);
    const presets = [
        ["@babel/preset-typescript"],
        [
            '@babel/preset-env',
            {
                corejs: {
                  version: "3",
                },
                useBuiltIns: 'usage',
                targets: {
                  "edge": "17",
                  "firefox": "60",
                  "chrome": "67",
                  "safari": "11.1",
                  "ie": "11"
                }
            }
        ],
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ],

    ];
    return {
        sourceType: 'unambiguous',
        presets,
    }
}
