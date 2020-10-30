let changeColor = document.getElementById('changeColor');
let dark_mode = true;

/* chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
}); */

changeColor.onclick = function(element) {
    let color = "white";
    dark_mode = !dark_mode;
    if (dark_mode == true) {
        color = "white";
    } else {
        color = "black";
    }
    //let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};