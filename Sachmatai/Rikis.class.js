
	function Rikis ( padetis_esama,  spalva ) {
		
		this.spalva = spalva;
		
		this.padetis_esama = padetis_esama;		
	
		this.ejimo_pokyciai = [ { horiz: -1,vert: -1 },{ horiz: -2,vert: -2 },{ horiz: -3,vert: -3 },{ horiz: -4,vert: -4 },{ horiz: -5,vert: -5 },{ horiz: -6,vert: -6 },{ horiz: -7,vert: -7 } ,
						{ horiz: 1,vert: 1 },{ horiz: 2,vert: 2 },{ horiz: 3,vert: 3 },{ horiz: 4,vert: 4 },{ horiz: 5,vert: 5 },{ horiz: 6,vert: 6 },{ horiz: 7,vert: 7 } ,
						{ horiz: 1,vert: -1 },{ horiz: 2,vert: -2 },{ horiz: 3,vert: -3 },{ horiz: 4,vert: -4 },{ horiz: 5,vert: -5 },{ horiz: 6,vert: -6 },{ horiz: 7,vert: -7 } ,
						{ horiz: -1,vert: 1 },{ horiz: -2,vert: 2 },{ horiz: -3,vert: 3 },{ horiz: -4,vert: 4 },{ horiz: -5,vert: 5 },{ horiz: -6,vert: 6 },{ horiz: -7,vert: 7 } ];		
	}
	
	Rikis.prototype = new Figura();