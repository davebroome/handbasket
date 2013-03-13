
// ----------------------------------------------------------------------
// Show Icon
// ----------------------------------------------------------------------

// Show on NOTHS websites only
function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf('.notonthehighstreet.com') > -1 || tab.url.indexOf('.noths.com') > -1) {
        chrome.pageAction.show(tabId);
    }
};

// Listen for URL changes of any tab
chrome.tabs.onUpdated.addListener(checkForValidUrl);


// ----------------------------------------------------------------------
// Handle Click
// ----------------------------------------------------------------------

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.pageAction.setIcon({path: "ajax-loader.gif", tabId: tab.id});
    sendMessageToTab(tab.id);
});

function sendMessageToTab(tabId) {
    chrome.tabs.sendMessage(tabId, {}, null);
}
