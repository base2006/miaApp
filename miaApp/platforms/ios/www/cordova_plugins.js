cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cellules.cordova.audiofrequency/www/audiofrequency.js",
        "id": "com.cellules.cordova.audiofrequency.AudioFrequency",
        "clobbers": [
            "cordova.plugins.audiofrequency"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.1-dev",
    "com.cellules.cordova.audiofrequency": "0.0.1"
}
// BOTTOM OF METADATA
});