(function () {

    'use strict';

    /**
     * This object provides the string identifiers for the available events
     * @class
     * @readonly
     * @enum {string}
    **/
    function Events () {
        
        // ## APPLICATION EVENTS

        this.APPLICATION = {};

        Object.defineProperties(this.APPLICATION, {
            /**
             * Description of the accessor
             * @type {boolean}
             * @memberof Namespace.LoadingManager#
            **/
            MAIN_LOOP               : { get: function () { return "mainLoop"; } },
            LOAD_PROGRESS           : { get: function () { return "loadProgress"; } },
            LOAD_COMPLETED          : { get: function () { return "loadCompleted"; } },
            INTERFACE_MANAGER_READY : { get: function () { return "interfaceManagerReady"; } },
            GET_SAVE                : { get: function () { return "getSave"; } },
            SET_SAVE                : { get: function () { return "setSave"; } },
            SAVED_DATA_SENT         : { get: function () { return "savedDataSent"; } },
            RESET_SAVE              : { get: function () { return "resetSave"; } },
            SAVE_RESET              : { get: function () { return "saveReset"; } }
        });



        // ## GAME LOGIC EVENTS
        this.GAME = {};

        Object.defineProperties(this.GAME, {
            /**
             * Description of the accessor
             * @type {boolean}
             * @memberof Namespace.LoadingManager#
            **/
            START_BOOT                    : { get: function () { return "startBoot"; } },
            START_PRELOAD                 : { get: function () { return "startPreload"; } },
            START_MENUS                   : { get: function () { return "startMenus"; } },
            GOTO_TITLE_CARD               : { get: function () { return "goToTC"; } },
            GOTO_BRAIN_SCREEN             : { get: function () { return "goToBrainScreen"; } },
            GOTO_GARDEN_SCREEN            : { get: function () { return "goToGardenScreen"; } },
            GOTO_TOYCHEST_SCREEN          : { get: function () { return "goToToyChestScreen"; } },
            GOTO_TOYCHEST_ACTIVITY_SCREEN : { get: function () { return "goToToyChestActivityScreen"; } },
            GOTO_LESSON_SCREEN            : { get: function () { return "goToLessonScreen"; } },
            GOTO_ACTIVITY                 : { get: function () { return "goToActivity"; } },
            BACK_FROM_ACTIVITY            : { get: function () { return "backFromActivity"; } },
            KALULU_TOYCHEST_LOCKED        : { get: function () { return "kaluluToyChestLocked"; } },
            UNLOCK_REWARD_TOYCHEST        : { get: function () { return "unlockRewardToyChest"; } }
			
        });


        // ## COMMANDS ADDRESSED TO GAME LOGIC
        this.COMMANDS = {};

        Object.defineProperties(this.COMMANDS, {
            /**
             * Description of the accessor
             * @type {boolean}
             * @memberof Namespace.LoadingManager#
            **/
            BOOT_STATE_REQUEST                    : { get: function () { return "bootStateRequest"; } },
            GOTO_TITLE_CARD_REQUEST               : { get: function () { return "goToTCRequest"; } },
            GOTO_BRAIN_SCREEN_REQUEST             : { get: function () { return "goToBrainScreenRequest"; } },
            GOTO_TOYCHEST_SCREEN_REQUEST          : { get: function () { return "goToToyChestScreenRequest"; } },
            GOTO_TOYCHEST_ACTIVITY_SCREEN_REQUEST : { get: function () { return "goToToyChestActivityScreenRequest"; } },
            GOTO_GARDEN_SCREEN_REQUEST            : { get: function () { return "goToGardenScreenRequest"; } },
            GOTO_LESSON_SCREEN_REQUEST            : { get: function () { return "goToLessonScreenRequest"; } },
            GOTO_ACTIVITY_REQUEST                 : { get: function () { return "goToActivityRequest"; } },
            GOTO_ASSESSMENT_REQUEST               : { get: function () { return "goToAssessmentRequest"; } }
        });

        // ## COMMANDS ADDRESSED TO GAME LOGIC
        this.DEBUG = {};

        Object.defineProperties(this.DEBUG, {
            /**
             * Description of the accessor
             * @type {boolean}
             * @memberof Namespace.LoadingManager#
            **/
            UNLOCK_DEBUG             : { get: function () { return "unlockDebug"; } },
            UNLOCK_NEUROENERGY_DEBUG : { get: function () { return "unlockNeuroEnergyDebug"; } },
            SKIP_KALULU              : { get: function () { return "skipKalulu"; } },
            RESET_SAVE_REQUEST       : { get: function () { return "resetSaveRequest"; } },
			UNLOCK_REWARD_TOYCHEST_DEBUG        : { get: function () { return "unlockRewardToyChestDebug"; } },
			UNLOCK_ALL_REWARDS       : { get: function () { return "UnlockAllRewards"; } }
        });


    }
    
    module.exports = new Events();
})();