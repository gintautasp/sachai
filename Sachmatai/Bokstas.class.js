
	function Bokstas ( padetis_esama,  spalva ) {
		
		this.spalva = spalva;
		
		this.padetis_esama = padetis_esama;	

		this.simboliai = [  '&#x265C;', '&#x2656;' ]
	
		this.ejimo_pokyciai = [ { horiz: -1, vert: 0 },{ horiz: -2, vert: 0 },{ horiz: -3, vert: 0 },{ horiz: -4, vert: 0 },{ horiz: -5, vert: 0 },{ horiz: -6, vert: 0 },{ horiz: -7, vert: 0 },
				{ horiz: 1, vert: 0 },{ horiz: 2, vert: 0 },{ horiz: 3, vert: 0 },{ horiz: 4, vert: 0 },{ horiz: 5, vert: 0 },{ horiz: 6, vert: 0 },{ horiz: 7, vert: 0 }, 
				{ horiz: 0, vert: 1 },{ horiz: 0, vert: 2 },{ horiz: 0, vert: 3 },{ horiz: 0, vert: 4 },{ horiz: 0, vert: 5 },{ horiz: 0, vert: 6 },{ horiz: 0, vert: 7 },
				{ horiz: 0,vert: -1 },{ horiz: 0,vert: -2 },{ horiz: 0,vert: -3 },{ horiz: 0,vert: -4 },{ horiz: 0,vert: -5 },{ horiz: 0,vert: -6 },{ horiz: 0,vert: -7 } ];
	}
	
	Bokstas.prototype = new Figura();