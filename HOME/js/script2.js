$(document).ready(function() {

$(".headerimg").draggable();

$(".body").droppable({
	drop : function() {
		$(".body").addClass("finish");
		$(".body").effect("highlight");
		$(".move").addClass("moved");
	}
});

});