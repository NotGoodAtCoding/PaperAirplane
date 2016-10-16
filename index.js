//Elements are lazy-rendered into the page using immediately invoked functions
// just a note: never do this ever. It's trash. I just didn't want to have to
// get everyone setup with react or angular or something that requires npm.

(function renderIntro() {
    // Put introduction here

    var intro = "These instructions will guide you through the steps needed to create and fly a stunt paper airplane. Paper airplanes are a great way to pass the time. They can soar through the sky, be great for settling things with your rival, or even getting the kids to play outdoors! After following these steps, you will be soaring through the air!";

    document.getElementById('intro').innerHTML = "<div>" + intro + "</div>"
})();

(function renderConclusion() {

    // Put conclusion here
    var conclusion = "You are now ready to impress the world with your impeccable ability to create an amazing paper airplane that flies through the sky like a real airplane!";

    document.getElementById('conclusion').innerHTML = "<div>" + conclusion + "</div>"
})();

(function renderSteps() {

    // Put steps here
    var instructions =
        [
            {
                "title": "Folding Steps",
                "image": "",
                "body": [
			"You will need to obtain one piece of paper with equal length sides.",
			"WARNING: When performing the folding steps, be careful of paper edge so as not to cut yourself.",
                    "1. Fold your paper in half, creating a crease down the middle vertically, then unfold. (Creating a crease makes future steps much simpler to perform since it can provide a reference point, as well as making future folds easier.)", 
					"2. Now fold your paper in half horizontally to create a crease, then unfold.",
					"3. Fold the left side end of your paper towards the middle vertical crease.",
					"4. Fold the top and bottom corner edges of your previous fold to align with its vertical edge.",
					"5. From the left middle point, fold your fold from step 3 towards your horizontal middle crease.",
					"6. Fold in half from your horizontal crease.",
					"7. Starting from the folded triangle corner, pinpoint the spot where the triangle's corner meets the bottom edge, and perform a tuck-in fold at approximately a 30 degree angle.",
					"8. Finally, fold your two top flaps downward to make the wings.",
					"9. Proceed to throwing steps."
                ]
            },
			{
				"title": "Throwing Steps",
				"image": "",
				"body": [
					"WARNING: When performing throwing steps, be careful of the direction of the plane. It could potentially hit someone, especially in the eye.",
					"1. Locate the spot on the bottom of the paper airplane where the most layers overlap. This is the center of gravity.",
					"2. Hold the airplane by pinching lightly at the center of gravity with your index finger and thumb.",
					"3. Keeping it level, release the airplane with a gentle, steady push.",
					"4. Take note of the flight behavior and make adjustments where necessary to improve flight.",
					"5. Return to step 2 until the optimal flight is achieved."
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