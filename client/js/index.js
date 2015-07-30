function toggleScrubber(scrubber) {
      (function(style) {
            style.display = style.display === 'none' ? '' : 'none';
        })(document.getElementById(scrubber).style);
    }
