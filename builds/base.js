module.exports = {

    board_env: "STM32F103RE_creality",
    //active: false,    // disable this build
    //only: "stable",   // build only stable or nightly branch
    //only: "nightly",   // build only stable or nightly branch
    meta: {
        stable_name: "ender3pro_v4.2.2_M{{marlin_version}}-base-{{current_date}}",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}-base-{{uid}}"
    },

    based_on: {   // default Ender-3 Pro Marlin example config
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",   // latest stable
        nightly_branch: "bugfix-2.1.x"                 // latest nightly
    },


    configuration:     {   // "Configuration.h" customizations
        enable: [


//            ["STRING_CONFIG_H_AUTHOR", "(Ender-3 Pro)"],

        ]
    },
    
    
    
    configuration_adv: {   // "Configuration_adv.h" customizations
        enable: [


        ]
    }
};
