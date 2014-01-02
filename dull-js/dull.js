var dull = function(name,gender,verb) {
		if(name) {
			var name = name;
		} else {
			var name = "Jack";
		}

		if(gender) {
			var gender = gender;
			if(gender === "male" || gender === "Male") {
				var gender = "boy";
			} else {
				var gender = "girl";
			}
		} else {
			var gender = "male";
		}

		if(verb) {
			var verb = verb;
		} else {
			var verb = "bullgit";
		}
	  	
	  	var el = document.querySelector(".output");
	  

	for(i=0;i<50;i++) {
			if(i%5===0) {
				el.innerHTML += "<p>" +
					"All work and no " + verb + " makes " + name + " a dull " + gender + ". " +
					"All work and no " + verb + " makes " + name + " a dull " + gender + ". " +
					"All work and no " + verb + " makes " + name + " a dull " + gender + ". " +
					"All work and no " + verb + " makes " + name + " a dull " + gender + ". " +
					"All work and no " + verb + " makes " + name + " a dull " + gender + ". </p>";

				}
			el.innerHTML += "All work and no " + verb + " makes " + name + " a dull " + gender + ". ";
		}
}