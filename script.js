
document.addEventListener('keydown', function(event){
    var keyMap = {
        'A': {keyId: 'keyA', keySoundId: 'soundA'},
        'B': {keyId: 'keyB', keySoundId: 'soundB'},
        'C': {keyId: 'keyC', keySoundId: 'soundC'},
        'D': {keyId: 'keyD', keySoundId: 'soundD'},
        'E': {keyId: 'keyE', keySoundId: 'soundE'},
        'F': {keyId: 'keyF', keySoundId: 'soundF'},
        'G': {keyId: 'keyG', keySoundId: 'soundG'},
    }
    var key = event.key.toUpperCase();
    var keyInfo = keyMap[key];

    if (key){
        document.getElementById(keyInfo.keyId).classList.add("clicked");
        document.getElementById(keyInfo.keySoundId).currentTime = 0;
        document.getElementById(keyInfo.keySoundId).play();
        
    }
});
document.addEventListener('keyup', function(event){
    var keyMap = {
        'A': "keyA",
        'B': "keyB",
        'C': "keyC",
        'D': "keyD",
        'E': "keyE",
        'F': "keyF",
        'G': "keyG"
    }
    var key = event.key.toUpperCase();
    var keyId = keyMap[key];

    if (key){
        document.getElementById(keyId).classList.remove("clicked");
    }
});


function playSound(id){
    document.getElementById("sound"+id.charAt(id.length - 1)).currentTime = 0;
    document.getElementById("sound"+id.charAt(id.length - 1)).play();
};

