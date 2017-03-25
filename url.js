//<![CDATA[
var key = window.location.href.split("yürü/")[1].replace("/","")
var urls={
'sv':'http://www.zaferzent.com/
}
if(key){
    if(urls[key]){
        window.location.href=urls[key]
    }else{
        document.write("'"+key+"' bulunamadı :(");
    }
}
//]]>
