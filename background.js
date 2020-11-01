chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#1b1d20'}, function() {
        console.log("The color is #1b1d20.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {schemes: ["http", "https"]},
          })],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});