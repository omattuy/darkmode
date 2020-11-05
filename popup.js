let changeColor = document.getElementById('changeColor');
let dark_mode = true;

changeColor.onclick = function(element) {
    let color = "white";
    dark_mode = !dark_mode;
    if (dark_mode == true) {
        color = "white";
    } else {
        color = "black";
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};