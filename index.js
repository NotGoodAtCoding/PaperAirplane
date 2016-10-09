
(function render() {

    // Put steps here

    var instructions =
        [
            {
                "title": "Zero indexed steps",
                "image": "Doesn't do anything yet",
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
    });
    comp += "</div";
    document.getElementById("example").innerHTML =
        comp;
})();
