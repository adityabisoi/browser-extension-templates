document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('saveBtn').onclick = function(){
        var saveText = document.getElementById('text').value
        alert(saveText)
    }
})