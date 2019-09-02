browser.runtime.onMessage.addListener(download);

function download(message) {      
    var url = message.url;    
    var name= "mewe-img-"+(new Date().getTime())+".jpg"
    browser.downloads.download({url: url,filename: name});
    console.log(message);
}


