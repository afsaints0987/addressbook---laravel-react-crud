$(document).ready(function(){
    // Disable inspect element
    $(document).bind('contextmenu', function(e){
        e.preventDefault();
    })

    $(document).keydown(function(e){
        if(e.which === 123){
           return false;
        }
    });

    // Clear input value
    $('#email-id').val('');

    let emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    let qrcode = new QRCode(('qrcode'), {
        text: '',
        width: 250,
        height: 250,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
    

    // Generate QR code

    $('#generate').click(function(){

        let emailId = $('#email-id').val();

        // Validate Email
        if(!emailId){
            $('.text-danger').text('Your email address please...');
            return;
            
        }
        if(!emailReg.test(emailId)){
            $('.text-danger').text('Mali naman yan email address mo e. ULIT!!!');
            return;
            
        }
        
        qrcode.makeCode(emailId);
        
        
        
    });
    
    // Clear error message while typing
    $('#email-id').keypress(function(e){
        $('.text-danger').empty();
        
    })

});
   
    
    
    

