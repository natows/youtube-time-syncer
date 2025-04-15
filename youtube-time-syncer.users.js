// ==UserScript==
// @name         youtube time restoring script for unlogged users
// @namespace    http://tampermonkey.net/
// @version      2025-04-15
// @description  try to take over the world!
// @author       Natalia Owsiejko
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function saveTime() {
        const video = document.querySelector('video')
        localStorage.setItem('time', video.currentTime)
    }

    function playVideoOnTime() {
        const interval = setInterval(() => {
            const video = document.querySelector('video');
            if (video){
                clearInterval(interval);
                //video.pause();
                video.currentTime = localStorage.getItem('time');
                video.play();
            }
        }, 500);
    };
    window.addEventListener('beforeunload', function(){
        console.log("zapisuje czas przed odswiezeniem")

        saveTime();
    });
    window.addEventListener('load', function(){
        playVideoOnTime();


    });
})();
