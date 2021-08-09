
	function Pestininkas ( padetis_esama,  spalva ) {
		
		this.spalva = spalva;
		
		this.padetis_esama = padetis_esama;		
	
		eiles_nr = this.padetis_esama.vert;
	
		if ( spalva =="0" ) {
			
			if (eiles_nr == "7" ){
				
				this.ejimo_pokyciai = [ { horiz: 0,vert: -1}, { horiz: 0,vert: -2} ];
				
			}else{
				
				this.ejimo_pokyciai = [ { horiz: 0,vert: -1} ];
			}
		}
		
		if ( spalva =="1" ) {
			
			if ( eiles_nr=="2" ) {
				
				this.ejimo_pokyciai = [ { horiz: 0,vert: 1}, { horiz: 0,vert: 2} ];
				
			}else{
				
				this.ejimo_pokyciai = [ { horiz: 0,vert: 1} ];
			}
		}		
	}
	
	Pestininkas.prototype = new Figura();
	
