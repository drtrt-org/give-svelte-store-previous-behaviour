module.exports = {
    branches: ["main", { name: "beta", prerelease: true }],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "conventionalcommits",
            },
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "conventionalcommits",
            },
        ],
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md",
            },
        ],
        [
            "@semantic-release/exec",
            {
                prepareCmd: "typedoc --out docs",
                successCmd: "git checkout beta && git merge main && git push origin beta",
            },
        ],
        "@semantic-release/npm",
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "CHANGELOG.md", "docs/"],
                message:
                    "chore(release): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
        [
            "@semantic-release/github",
            {
                successComment:
                    "This PR was included in release version ${nextRelease.version} :tada:",
                failComment: "The release failed with the following error: ${error.message}",
                releasedLabels: ["released"],
                issue: {
                    successComment:
                        "This issue was resolved in version ${nextRelease.version} :tada:",
                    failComment:
                        "There was a problem with the release of version ${nextRelease.version}, that should have addressed this issue. The error was: ${error.message}",
                    failTitle: "Release failed for version ${nextRelease.version}",
                },
            },
        ],
    ],
    releaseRules: [
        {
            type: "docs",
            release: "patch",
        },
    ],
};
