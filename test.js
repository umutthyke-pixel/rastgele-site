var htmlfile = new ActiveXObject('htmlfile');
htmlfile.write('<meta http-equiv=\"x-ua-compatible\" content=\"IE=11\" /><script>window.localStorage = { getItem: function(k){return null;}, setItem: function(k,v){} };</script><script src=\"file:///' + 'C:/Users/umut/Desktop/rastgele-site/debug.js'.replace(/\\\\/g, '/') + '\"></script>');
var win = htmlfile.parentWindow;
try {
    win.eval('nextFact();');
    WScript.Echo('nextFact ran successfully');
} catch(e) {
    WScript.Echo('Error: ' + e.message);
}
