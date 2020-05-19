var options = {
    type: "basic",
    title: "Simple notification",
    message: "Message content",
    iconUrl: "icon.png"
}

chrome.notifications.create(options,callback)

function callback(){
    alert("Hello")
}
