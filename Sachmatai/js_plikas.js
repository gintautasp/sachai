
	function nustatyti_spalva ( koordinate, spalva ) {
		
		document.getElementById ( koordinate ).style.backgroundColor = spalva; 
	}
	
	function parodyti_paprastai ( koordinate ) {
		
		document.getElementById ( koordinate ).removeAttribute( 'style' );
	}