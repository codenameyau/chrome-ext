'use strict';

var inputInterval = document.getElementById('.input-interval');
var inputDismissTime = document.getElementById('.input-dismiss-time');
var toggleButton = document.getElementById('.toggle-btn');


function restoreOptions() {
  chrome.storage.sync.get('toggle-btn', function(items) {

  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
