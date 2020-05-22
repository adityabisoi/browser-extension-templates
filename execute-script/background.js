chrome.browserAction.onClicked.addListener(function () {
    var num = 123
    chrome.tabs.executeScript(null, {
        code: "var numbers = '" + num + "'"
    }, function () {
        chrome.tabs.executeScript(null, {
            file: "script.js"
        })
    })
})