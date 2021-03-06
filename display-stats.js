// ==UserScript==
// @name         Display Stats
// @namespace    https://github.com/EFox2413/initiumGrease
// @version      0.1
// @description  try to take over the world!
// @author       EFox2413
// @match        https://www.playinitium.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var $ = window.jQuery; 

var charDiv = $('.character-display-box').children(" div:nth-child(3)").children( 'a' );
var statsItems;
var statsID = ["S", "D", "I", "W"];
var href = $( '.character-display-box').children().first().attr( "rel" );

$.ajax({
    url: href,
    type: "GET",
    
    success: function(data) {
        statsItems = $(data).find('.main-item-subnote');
        
        statsItems.each(function( index ) {
            if ( index > 0 ) {
                charDiv.append( " <span style=\"font-size:small\"> " + statsID[index - 1] + ":" +  $( this ).text().split(" ")[0] + " </span>");
            }
        });
    }
});
