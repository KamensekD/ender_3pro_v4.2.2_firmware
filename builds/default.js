module.exports = {
    board_env: "STM32F103RE_creality",
    active: true,
    only: "stable",
    meta: {
        stable_name: "ender_3pro_v4.2.2-2.1.2-default-{{uid}}",
        nightly_name: "ender_3pro_v4.2.2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV427/",
        stable_branch: "release-2.1.2}",
        nightly_branch: "bugfix-2.1.x"
    }
};

// trying barebones default build but unfortunately it fails at
// creating release with: "Request failed with status code 403" and "Error: Process completed with exit code 1."
