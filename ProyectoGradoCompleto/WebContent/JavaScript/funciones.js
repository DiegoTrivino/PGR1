x = $(document); 
x.ready(inicializarEventos);

function inicializarEventos(){
	/////Evento del boton	
	$("#boton").click(function () {
		
		/*$.ajax(
	            {
	                type: "GET",
	                url: 'http://localhost:8080/ProyectoGrado/rest/servicios/conexion',
	                data: "{}",
	                success: function (data) {

	                    alert(data);
	                    $("#ver").append(data);
	                },
	                error: function (msg, url, line) {
	                    alert('error trapped in error: function(msg, url, line)');
	                    alert('msg = ' + msg + ', url = ' + url + ', line = ' + line);

	                }
	            });*/
		$.post( "http://localhost:8080/ProyectoGrado/rest/servicios/conexion", function( data ) {
			  alert( "Data Loaded: " + data);
			  $("#ver").append(data);
			});
	});
	////Evento del form
	//Program a custom submit function for the form
	$("#j_idt12").submit(function(event){
		//disable the default form submission
		  event.preventDefault();
		 alert("Comenzó");
		  //grab all form data  
		  var formData = new FormData($(this)[0]);
		 
		  $.ajax({
		    url: 'http://localhost:8080/ProyectoGradoCompleto/rest/servicios/datos',
		    type: 'POST',
		    data: formData,
		    mimeType:"multipart/form-data",
		    async: false,
		    cache: false,
		    contentType: false,
		    processData: false,         
		    success     : function(r) {
	          alert(r);
	          //if (errors != null) { } else context.close();
		    },
		    error: function(){
		    	alert("No se pudo enviar la petición");
		    }
	  });
	  alert("Termino");
	});
	
	/*$("#multiform").submit(function(e)
			{
				var formObj = $(this);
				var formURL = formObj.attr("action");

				if(window.FormData !== undefined)  // for HTML5 browsers
				{
				
					var formData = new FormData(this);
					$.ajax({
			        	url: 'http://localhost:8080/ProyectoGrado/rest/servicios/datos',
						type: "POST",
						data:  formData,
						mimeType:"multipart/form-data",
						contentType: false,
			    	    cache: false,
						processData:false,
						success: function(data, textStatus, jqXHR)
					    {
					    },
					  	error: function(jqXHR, textStatus, errorThrown) 
				    	{
				    	} 	        
				   });
			        e.preventDefault();
			   }
			   else  //for olden browsers
				{
					//generate a random id
					var  iframeId = "unique" + (new Date().getTime());

					//create an empty iframe
					var iframe = $('<iframe src="javascript:false;" name="'+iframeId+'" />');

					//hide it
					iframe.hide();

					//set form target to iframe
					formObj.attr("target",iframeId);

					//Add iframe to body
					iframe.appendTo("body");
					iframe.load(function(e)
					{
						var doc = getDoc(iframe[0]);
						var docRoot = doc.body ? doc.body : doc.documentElement;
						var data = docRoot.innerHTML;
						//data return from server.
						
					});
				
				}

			});*/
	
}