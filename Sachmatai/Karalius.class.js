

	function Karalius (  padetis_esama, spalva ) {
		
		this.spalva = spalva;
		
		this.padetis_esama = padetis_esama;
		
		this.ejimo_pokyciai = [ { horiz: -1, vert: 1 }, { horiz: 0, vert: 1 }, { horiz: 1, vert: 1 }, { horiz: 1, vert: 0 }, { horiz: 1, vert: -1}, { horiz: 0, vert: -1 }, { horiz: -1, vert: -1 }, { horiz: -1, vert: 0 } ]
		
	}
	
	Karalius.prototype = new Figura();