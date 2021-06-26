    
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        principal.focus();
        document.getElementById("principal").focus();
    }

  