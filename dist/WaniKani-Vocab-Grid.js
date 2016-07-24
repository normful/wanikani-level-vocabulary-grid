// ==UserScript==
// @name         WaniKani Level Vocabulary Grid
// @description  Rearranges the WaniKani Level Vocabulary into a grid
// @author       Norman Sue
// @namespace    normful
// @version      0.3.0
// @license      MIT
// @match        http://www.wanikani.com/level*
// @match        http://www.wanikani.com/vocabulary*
// @match        http://www.wanikani.com/kanji*
// @match        https://www.wanikani.com/level*
// @match        https://www.wanikani.com/vocabulary*
// @match        https://www.wanikani.com/kanji*
// @run-at       document-end
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var cssUrl = 'https://normful.github.io/WaniKani-Vocab-Grid-Plain.css';
    var cssId  = 'normful-wanikani-level-vocabulary-grid';

    if (!document.getElementById(cssId)) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id    = cssId;
        link.rel   = 'stylesheet';
        link.type  = 'text/css';
        link.href  = cssUrl;
        link.media = 'all';
        head.appendChild(link);
    }
})();
