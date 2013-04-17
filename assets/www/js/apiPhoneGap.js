(function() {
  
    $(document).on("deviceready", function() {
        
        navigator.splashscreen.hide();
        
        $("#btnClose").click(function (){
            
            showConfirm();
        });

    });
    
    $(document).on("pause",function (){
        navigator.notification.beep(1);
        closeApp();
    });


    function closeApp(){
        navigator.notification.vibrate(2500);
        navigator.app.exitApp();
    }
    
     function onConfirm(button){
        switch (button){
            case 1: closeApp();
                break;
            case 2: ;
                break;
                
        }
    }
    function showConfirm() {
    navigator.notification.confirm(
    'Estas Seguro?!',     // mensaje (message)
    onConfirm,      // función 'callback' a llamar con el índice del botón pulsado (confirmCallback)
    'Aplicacion',            // titulo (title)
        'Si,No'       // botones (buttonLabels)
    );
        
}

   
}());


  
  





   


