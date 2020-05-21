document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('saveBtn').onclick = function(){
        var saveText = document.getElementById('text').value

        chrome.storage.sync.set({'savedText':saveText})

    }
    document.getElementById("getBtn").onclick = function(){
        chrome.storage.sync.get(['savedText'],function(data){
            alert("Value is "+data.savedText)
        })
    }
})