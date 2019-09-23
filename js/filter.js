/*
 * FilterBubble - Content Script
 *
 * This is the primary JS file that manages the detection and filtration of words from the web page.
 */

var xpathPatterns = [];

chrome.storage.sync.get({
    blacklist: 'FilterBubble'
}, function(items) {
    badWords = items.blacklist.toLowerCase().split(/\r?\n/);
    for(var i = 0; i < badWords.length; i++) {

        var word = badWords[i];
        xpathPatterns.push(
            ["//body//*[not(self::script or self::style)]/text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + word + "')]", word],
            ["//body//a[contains(translate(@href, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + word + "')]", word],
            ["//body//img[contains(translate(@src, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + word + "')]", word],
            ["//body//img[contains(translate(@alt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'" + word + "')]", word]
        );
    }
});

function filterNodes() {
    var array = new Array();
    for (i = 0; i < xpathPatterns.length; i++) {
        var xpathResult =
            document.evaluate(xpathPatterns[i][0],
                document, null,
                XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
        var thisNode = xpathResult.iterateNext();
        while (thisNode) {
            // only when we have a match for the whole word add the node to the array
            // actually we allow for variations like "_word_" "words" or "_words"
            var regex = new RegExp("(\\b|_)(" + xpathPatterns[i][1] + ")(\\b|_|s)", "i");
            if(regex.test(thisNode.data)) {
                array.push(thisNode);
            }
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




