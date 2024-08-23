document.getElementById('sendBtn').addEventListener('click', function() {
    var chatInput = document.getElementById('chatInput');
    var message = chatInput.value.trim();
    if (message) {
        var chatlogs = document.getElementById('chatlogs');
        chatlogs.innerHTML += '<p class="user">[You]: ' + message + '</p>';
        chatlogs.scrollTop = chatlogs.scrollHeight;
        chatInput.value = '';
    }
});
