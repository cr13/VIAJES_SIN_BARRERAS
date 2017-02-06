function notificacion(tipo,mensaje,allow_dismiss,progressbar){
  var notify = $.notify({
      message: mensaje
    },{
      // settings
      element: 'body',
      position: null,
      type: tipo,
      allow_dismiss: allow_dismiss,
      showProgressbar: progressbar,
      offset: 200,
      placement: {
        from: "top",
        align: "center"
      },delay: 2000,
      animate: {
        enter: 'animated bounceInDown',
		    exit: 'animated bounceOutUp'
    	}
    });
};

//VAciar formularios

function vaciar(id){

  document.getElementById(id).reset();

}
