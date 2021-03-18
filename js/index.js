'use strict';

$(() => {    
    // Create upload widget
    var uploadWidget = cloudinary.createUploadWidget({
        cloudName: '<YOUR_CLOUD_NAME>',
        uploadPreset: 'autotagging-preset',
        sources: [
            'local'
        ],
        cropping: false,
        multiple: false,
        styles: {
            palette: {
                window: "#10173a",
                sourceBg: "#20304b",
                windowBorder: "#7171D0",
                tabIcon: "#79F7FF",
                inactiveTabIcon: "#8E9FBF",
                menuIcons: "#CCE8FF",
                link: "#72F1FF",
                action: "#5333FF",
                inProgress: "#00ffcc",
                complete: "#33ff00",
                error: "#cc3333",
                textDark: "#000000",
                textLight: "#ffffff"
            }
        }
    }, (error, result) => uploadCallback(error, result));

    // Hide info link
    var $infoLink = $('#info_link');
    $infoLink.hide();
    
    function uploadCallback(error, result) {         
        if (!error && result && result.event === "success") {   
            
            // Cloudinary API info
            const apiKey = '';
            const apiSecret = '';
            const baseUrl = 'api.cloudinary.com/v1_1/<YOUR_CLOUD_NAME>/resources/video/upload/';    

            const url = 'https://' + baseUrl + result.info.public_id;

            $infoLink.attr("href", url);
            $infoLink.show();
        }    
    }    

    $('#upload_widget_opener').click(() => {        
        uploadWidget.open();        
    });     
})
