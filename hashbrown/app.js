
$(document).ready(function(){
    // Disabled inspect element
    $(document).bind('contextmenu', function(e){
        e.preventDefault();
    })

    $(document).keydown(function(e){
        if(e.which === 123){
           return false;
        }
    });

    // Clear input value

    $('#hashkey').val("");

    // Generate Hash Key
    $('#generate').click(function(){
        $('#hashkey').val(function(){
            let result = [];
            let randomKeys = Math.random().toString(32).substring(2, 15);
            let randomKeyslength = randomKeys.length;
            for (let i = 0; i <= 4; i++) {
                result.push(randomKeys.charAt(Math.floor(Math.random() * randomKeyslength)));
            }
            return result.join(randomKeys.toUpperCase());
        });
    });

    // Copy Hash Key
    $('#copy').click(function(){
        $('#hashkey').focus();
        $('#hashkey').select();
        try {
            let success = document.execCommand('copy');
        } catch(err){
            console.log("Unable to copy");
        }
    });
});