$(document).ready(function(){
	var params = getUrlVars();
	if(params.length > 1){
		var review = params["review"];
		var name = params["name"];
		var email = params["email"];
		var fileupload = params["fileupload"]

		alert("Review: " + review + "\nName: " + name + "\nEmail: " + email + "\nFile: " +fileupload);
	}

	expandXClicked("work");

	$(".switch").click(function(){
		var id = $(this).attr('id');
		switch(id){
			case "workToggle": {
				toggleXClicked("work");
				break;
			}
			case "skillsToggle": {
				toggleXClicked("skills");
				break;
			}
			case "educationToggle": {
				toggleXClicked("education");
				break;
			}
		}
		
	})

	$("#expandAll").click(function(){
		expandAllClicked();
	})

	$("#collapseAll").click(function(){
		collapseAllClicked();
	})

	function toggleXClicked(idKey){
		$("#"+idKey+"Details").slideToggle("slow");
		$("#"+idKey+"Toggle").find("span").toggleClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#"+idKey+"Toggle").find("span").toggleClass("glyphicon-chevron-down",1000,"easeOutShine");
	}

	function expandXClicked(idKey){
		$("#"+idKey+"Details").slideDown("slow");
		$("#"+idKey+"Toggle").find("span").removeClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#"+idKey+"Toggle").find("span").addClass("glyphicon-chevron-down",1000,"easeOutShine");
	}

	function collapseXClicked(idKey){
		$("#"+idKey+"Details").slideUp("slow");
		$("#"+idKey+"Toggle").find("span").addClass("glyphicon-chevron-right",1000,"easeOutShine");
		$("#"+idKey+"Toggle").find("span").removeClass("glyphicon-chevron-down",1000,"easeOutShine");
	}

	function expandAllClicked(){
		expandXClicked("work");
		expandXClicked("skills");
		expandXClicked("education");
	}

	function collapseAllClicked(){
		collapseXClicked("work");
		collapseXClicked("skills");
		collapseXClicked("education");
	}

	function getUrlVars(){
    	var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    return vars;
	}



})


