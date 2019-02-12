//Function for the tab feature of our boards display section
//Used to switch between the tabs of the details for the boards
function openBoardDetailsText(detailsTextName,boardDetailsButtonName) {	//Function takes 2 inputs, ID of the button that is cliked on and ID of the section to display
	var i;
  	var x = document.getElementsByClassName("boardDetailsText");	//Store the DOM object for the class in variable x
  	//Make all the objects for the above class as diplay none
	for (i = 0; i < x.length; i++) {
    	x[i].style.display = "none"; 
  	}
  	document.getElementById(detailsTextName).style.display = "block";	//Change the display type of the section to show from none to block
  
  	//Code to add class of active to the button of the section that is showing currently
	//It is done for CSS purpose
  	var y = document.getElementsByClassName("boardDetailsButton");
  	for (i = 0; i < y.length; i++) {
    	y[i].classList.remove("active"); 
  	}
  	document.getElementById(boardDetailsButtonName).classList.add("active");
}


//Functions for the list feature for our team section

//Function to move the list one place left of the current position
function goLeft(){
	var teamMembers = document.getElementsByClassName("teamNames");	//Get all the DOM elements with class name teamNames
	var noOfteamMembers = teamMembers.length;
	var looping=0;
	var firstShowingMember;
	
	//Find the first showing member of the list
	if(teamMembers[0].classList.contains('show')) {
		firstShowingMember = 0;
	} else {
		while(teamMembers[looping].classList.contains('hidden')) {
			looping = looping+1;
		}
		firstShowingMember = looping;
	}
	
	//If the first showing member is the first one in the list then the left button does not do anyting
	if (firstShowingMember == 0) {
		return;
	} else {
		//Remove hidden class and add show class to member left of the first showing memeber
		teamMembers[firstShowingMember-1].classList.add("show");
		teamMembers[firstShowingMember-1].classList.remove("hidden");
		
		//Remove show class and add hidden class to member left of the last showing memeber
		teamMembers[firstShowingMember+3].classList.add("hidden");
		teamMembers[firstShowingMember+3].classList.remove("show");
	}
}

//Function to move the list one place right of the current position
function goRight(){
	var teamMembers = document.getElementsByClassName("teamNames");		//Get all the DOM elements with class name teamNames
	var noOfteamMembers = teamMembers.length;
	var looping=0;
	var firstShowingMember;
	
	//Find the first showing member of the list
	if(teamMembers[0].classList.contains('show')) {
		firstShowingMember = 0;
	} else {
		while(teamMembers[looping].classList.contains('hidden')) {
			looping = looping+1;
		}
		firstShowingMember = looping;
	}
	
	//If the last showing member is the last member of the list then the button does nothing
	if ((firstShowingMember+3) == (noOfteamMembers-1)) {
		return;
	} else {
		//Remove show class and add hidden class to first showing member
		teamMembers[firstShowingMember].classList.add("hidden");
		teamMembers[firstShowingMember].classList.remove("show");
		
		//Remove hidden class and add show class to member right of the last shwoing member
		teamMembers[firstShowingMember+4].classList.remove("hidden");
		teamMembers[firstShowingMember+4].classList.add("show");
	}
}
