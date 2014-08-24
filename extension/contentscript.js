/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /Album Only/;


// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerText)) {
  // The regular expression produced a match, so notify the background page.
  //document.body.querySelector(".number").firstChild.data = "dos";
  //var replaced = $("body").html().replace(/Album Only/g,'<div style="background-image:url(\''+chrome.extension.getURL('mid-fing.png')+'\');width:22px;height:30px;background-size:100%";display:inline;position:relative;"> </div>');
  var replaced = $("body").html().replace(/Album Only/g,'<img src="'+chrome.extension.getURL('mid-fing.png')+'">');


$("body").html(replaced);
  //document.body.innerText = document.body.innerText.replace("Album Only","Middle Finger");
  chrome.extension.sendRequest({}, function(response) {});
} else {
  // No match was found.
}
