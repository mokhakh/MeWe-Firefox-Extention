
$(document).on("mouseover","img.post-photo_single-photo",function() {
    var parent= $(this).parent();
    var btn = parent.find(".ext_desktop_dl_btn");
    if(btn.length==0)
    parent.append('<a class="ext_desktop_dl_btn ext_windows_font" type="button" data-shortcode="B13KMWplQ6b"><span class="ext_icon"></span><span class="ext_text">DOWNLOAD</span></a>')   ;
});

$(document).on("mouseover",".post-photo_gif-wrapper",function() {
    var parent= $(this).parent();
    var btn = parent.find(".ext_desktop_gif_btn");
    if(btn.length==0)
    parent.append('<a class="ext_desktop_gif_btn ext_windows_font" type="button" data-shortcode="B13KMWplQ6b"><span class="ext_icon"></span><span class="ext_text">DOWNLOAD</span></a>')   ;
});

$(document).on("mouseover",".chat-message_img_gif-wrapper img",function() {
    var parent= $(this).parent();
    var btn = parent.find(".ext_desktop_gif_btn");
    if(btn.length==0)
    parent.append('<a class="ext_desktop_gif_btn ext_windows_font" type="button" data-shortcode="B13KMWplQ6b"><span class="ext_icon"></span></a>')   ;
});

$(document).on("mouseover",".chat-message_img",function() {
    var parent= $(this).parent();
    var btn = parent.find(".ext_desktop_dl_btn");
    if(btn.length==0)
    parent.append('<a class="ext_desktop_dl_btn ext_windows_font" type="button" data-shortcode="B13KMWplQ6b"><span class="ext_icon"></span></a>')   ;
});




$(document).on("click","a.ext_desktop_dl_btn",function(){
       var img= $(this).parent().find("img");
    
    if(img.length==0)
        return;        
    var url = $(img[0]).attr("src");  
    try{
        
        browser.runtime.sendMessage({"url": url,"ext":".jpg"});
        //Download({url: url});
    }catch(e){
        console.log(e);
    }
});

$(document).on("click","a.ext_desktop_gif_btn",function(){
    var img= $(this).parent().find("img");
 
 if(img.length==0)
     return;        
 var url = $(img[0]).attr("src");        
 try{
     
     browser.runtime.sendMessage({"url": url,"ext":".gif"});
     //Download({url: url});
 }catch(e){
     console.log(e);
 }
});

