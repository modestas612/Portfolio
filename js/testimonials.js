var slideItem = 1;
showDivs(slideItem);

    function plusDivs(n) {
        showDivs(slideItem += n);
    }

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("item");
            if (n > x.length) {slideItem = 1}    
                if (n < 1) {slideItem = x.length}
                    for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none";  
                    }
            x[slideItem-1].style.display = "block";  
        }




