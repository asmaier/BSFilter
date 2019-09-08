/*
 * bullshit Filter - Content Script
 *
 * This is the primary JS file that manages the detection and filtration of bullshit from the web page.
 */

var xpathPatterns = [];

chrome.storage.sync.get({
    blacklist: 'bullshit'
}, function(items) {
    badWords = items.blacklist.toLowerCase().split(/\r?\n/);
    for(var i = 0; i < badWords.length; i++) {

        var word = badWords[i];
        xpathPatterns.push(
            "//text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + word + "')]",
            "//a[contains(translate(@href, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + word + "')]",
            "//img[contains(translate(@src, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + word + "')]",
            "//img[contains(translate(@alt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + word + "')]"
        );
    }
});

function filterNodes() {
    var array = new Array();
    for (i = 0; i < xpathPatterns.length; i++) {
        var xpathResult =
            document.evaluate(xpathPatterns[i],
                document, null,
                XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
        var thisNode = xpathResult.iterateNext();
        while (thisNode) {
            array.push(thisNode);
            thisNode = xpathResult.iterateNext();
        }
    }
    //deletedCount = deletedCount + array.length;
    for (var i = 0; i < array.length; i++) {
        var p = array[i].parentNode;
        if (p !== null)
            p.removeChild(array[i]);
    }
}

window.addEventListener("load", function() {
    filterNodes()
});

setTimeout(filterNodes, 1000);
setInterval(filterNodes, 2000);

window.addEventListener("scroll", function() {
    filterNodes()
});




