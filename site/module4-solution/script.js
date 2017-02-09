(function(window){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var index in names) {
        var name = names[index];
        var firstLetter = name.toLowerCase().charAt(0);
        if (firstLetter == 'j') {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }
})(window);


