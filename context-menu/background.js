chrome.contextMenus.create({
    id: "Twitter Extension",
    title: "Twitter Toolkit",
    contexts: ["selection"],            // selection, link, image, page
})

chrome.contextMenus.onClicked.addListener((selectedText)=>{
    alert(selectedText.selectionText)
})