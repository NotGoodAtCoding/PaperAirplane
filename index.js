//Elements are lazy-rendered into the page using immediately invoked functions
// just a note: never do this ever. It's trash. I just didn't want to have to
// get everyone setup with react or angular or something that requires npm.

(function renderIntro() {
    // Put introduction here

    var intro = "Hey look an intro";

    document.getElementById('intro').innerHTML = "<div>" + intro + "</div>"
})();

(function renderIntro() {

    // Put introduction here
    var intro = "Hey look an intro";

    document.getElementById('intro').innerHTML = "<div>" + intro + "</div>"
})();

(function renderSteps() {

    // Put steps here
    var instructions =
        [
            {
                "title": "Zero indexed steps",
                "image": "",
                "body": [
                    "Body paragraph goes here", "Add another for another paragraph"
                ]
            }
        ];

    var i=1;
    var comp = "<div>";
    instructions.forEach(function(instruction) {
        comp += (
          "<h3>" + "Step " + i + ": " + instruction.title + "</h3>"
        );
        instruction.body.forEach(function (paragraph){
            comp += ("<p>" + paragraph + "</p>");
        });
        i++;
    });
    comp += "</div";
    document.getElementById("steps").innerHTML =
        comp;
})();

function scrollerino(anchorID) {
    document.getElementById(anchorID).scrollIntoView();
}