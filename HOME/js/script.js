$(document).ready(function() {

$(".broken").draggable();
$(".healing").draggable();
$(".saved").draggable();
$(".human").draggable();
$(".flawed").draggable();
$(".loved").draggable();

$(".line").droppable({
	drop : function() {
		$(".line").addClass("finish");
		$(".line").effect("highlight");
		$(".move").addClass("moved");
	}
});

});