var options = {
    type: "basic",          // basic, image, list, etc
    title: "Simple notification",
    message: "Message content",
    iconUrl: "icon.png"
}

chrome.notifications.create(options,callback)

function callback(){
    alert("Hello")
}

chrome.notifications.onClicked.addListener(redirectWindow)

function redirectWindow(){
    alert("Redirect")
}