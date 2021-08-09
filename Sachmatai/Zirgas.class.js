
	function Zirgas ( padetis_esama,  spalva ) {
	
		this.spalva = spalva;
		
		this.padetis_esama = padetis_esama;
		
		this.simboliai = [ '&#x265E;', '&#x2658;' ]
		
		this.ejimo_pokyciai = [ { horiz: -2, vert: -1 }, { horiz: -1, vert: -2}, { horiz: 1, vert: -2 }, { horiz: 2, vert: -1 }, { horiz: 2, vert: 1}, { horiz: 1, vert: 2 }, { horiz: -1, vert: 2 }, { horiz: -2, vert: 1 } ];
	}
	
	Zirgas.prototype = new Figura();