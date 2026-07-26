import {
    translateElements
} from "./shared-SBA6FH4J.js";
import {
    loadFallbackTranslation
} from "./shared-S7PVGXSP.js";
import "./shared-PU6GMLSZ.js";
import {
    readAppConfig
} from "./shared-TMCNPBCK.js";
import "./shared-UUDV3B35.js";
var _a;
var seconds = ((_a = readAppConfig().secondsLeftBeforeFinal) == null ? void 0 : _a.toString()) || "10";
translateElements(loadFallbackTranslation, {
    you_have_10_seconds_tap_to_earn: {
        macros: "{seconds}",
        macrosValue: seconds
    },
    you_have_10_seconds: {
        macros: "{seconds}",
        macrosValue: seconds
    }
});