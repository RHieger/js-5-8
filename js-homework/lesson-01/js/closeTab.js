// closeTab.js
//
// Robert Hieger
//
// June 20, 2017

$(document).ready(function()    {

    var currentTab = $('#closeTab');

    $(currentTab).on('click', function()    {

        window.top.close();

    });

});

