//-----Dibujar posicion----
$(function() {
	$('#plano').svg({onLoad: drawInitial});
	
});

function drawInitial(svg) {
	var circleab = svg.circle(465, 75, 5, {fill: 'cyan', stroke: 'cyan', strokeWidth: 3, id: 'circleab'});

	//var g = svg.group({stroke: 'red', strokeWidth: 2});
}

function drawShape(svg) {
	
	var data = {
				"action": 1
			};
			data = $.param(data);
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "funcionesruta.php", //Relative or absolute path to response.php file
				data: data,
				success: function(data) {
						var total = Object.keys(data).length;;
						var aux = 1;
						//alert (total);
						jQuery.each( data, function( i, val ) {
							setTimeout(function(){ 
								//alert("alert con coordenada "+i+": "+val );
								if(aux === total)
								{
									drawposition(val,svg,"yellow");
								}
								else
								{
									drawposition(val,svg,"red");
								}
								aux++;
							},1000*i);							
						});
				}
			});
}
function drawposition(val,svg,colortono){
	var shape = this.id;
	//$('#plano').svg('get').clear();
	var svg = $('#plano').svg('get');
	var arr = val.split(';');
	x=parseInt(arr[0]);
	y=parseInt(arr[1]);
	var circle = svg.circle(x, y, 5, {fill: colortono, stroke: colortono, strokeWidth: 3, id: 'circle'});
	//transform: translate(100, 100);*
}


