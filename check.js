var htmlfile = new ActiveXObject('htmlfile');
htmlfile.write('<meta http-equiv=\"x-ua-compatible\" content=\"IE=11\" /><script>window.localStorage = { getItem: function(k){return null;}, setItem: function(k,v){} };</script><script src=\"file:///' + 'C:/Users/umut/Desktop/rastgele-site/index.html'.replace(/\\\\/g, '/') + '\"></script>');
var win = htmlfile.parentWindow;
try {
    WScript.Echo('factsDB type is: ' + typeof win.factsDB);
} catch(e) {
    WScript.Echo('Error: ' + e.message);
}
