chrome.browserAction.onClicked.addListener(function(){})
chrome.tabs.create({url:'https://www.google.com'},function(data){
    console.log(data)
})