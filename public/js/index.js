function toggleScrubber(scrubber) {
      (function(style) {
            style.display = style.display === 'none' ? '' : 'none';
        })(document.getElementById(scrubber).style);
    }

function changePage()
{
        var keyPressed = event.keyCode || event.which;

        //if ENTER is pressed
        if(keyPressed==13)
        {
            console.log("The user would like to go to page " + document.getElementById("pageInput").value);
            keyPressed=null;
        }
        else
        {
            return false;
        }
}
