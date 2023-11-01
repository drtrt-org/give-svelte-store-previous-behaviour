module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:node/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "node/no-missing-import": "off",
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", "parent", "sibling", "index"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
    overrides: [
        {
            files: ["*.ts"],
        },
    ],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};
