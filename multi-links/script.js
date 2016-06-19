'use strict';

var linksTextarea = document.getElementById('textarea-links');
var openLinksBtn = document.getElementById('open-links-btn');

function saveUrls(e) {
  // User hit ctrl + v
  if (e.ctrlKey && e.keyCode === 86) {
    var links = linksTextarea.value.trim().split('\n');
    chrome.storage.sync.set({ 'links': links });
    linksTextarea.value = links.join('\n') + '\n';
  }
}

function openUrls(e) {
  debugger;
}

linksTextarea.addEventListener('keyup', saveUrls);
openLinksBtn.addEventListener('click', openUrls);

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChanges = changes[key];
  }
})
