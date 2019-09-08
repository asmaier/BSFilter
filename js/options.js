// Saves options to chrome.storage
function save_options() {
    var blacklist = document.getElementById('blacklist').value;
    chrome.storage.sync.set({
        blacklist: blacklist.trim(),
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Words saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores options stored in chrome.storage.
function restore_options() {
    // Use default value blacklist = 'FilterBubble'
    chrome.storage.sync.get({
        blacklist: 'FilterBubble',
    }, function(items) {
        document.getElementById('blacklist').value = items.blacklist;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

