document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('saveBtn').onclick = function(){
        var saveText = document.getElementById('text').value
        
        chrome.storage.sync.set({'savedText':saveText})

        chrome.storage.sync.get(['savedText'],function(data){
            alert("Value is "+data.savedText)
        })
    }
})