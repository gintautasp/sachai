
	function Rikis ( padetis_esama,  spalva ) {									// reikalina esama padetis ir spalvos nr. ( 0-1)
		
		this.spalva = spalva;													// išsaugoma paduota spalva, kaip kintamasis
		
		this.padetis_esama = padetis_esama;									// išsaugoma paduota koordinate, kaip kintamasis
		
		this.simboliai = [ '&#x265D;',  '&#x2657;' ]								// dvieju spalvu variantu masyvas ( 0 juoda, 1 balta)
		
		this.ejimo_pokyciai = [												// visi galimi figuros ejimai
						{ horiz: -1,vert: -1 },{ horiz: -2,vert: -2 },{ horiz: -3,vert: -3 },{ horiz: -4,vert: -4 },{ horiz: -5,vert: -5 },{ horiz: -6,vert: -6 },{ horiz: -7,vert: -7 } ,
						{ horiz: 1,vert: 1 },{ horiz: 2,vert: 2 },{ horiz: 3,vert: 3 },{ horiz: 4,vert: 4 },{ horiz: 5,vert: 5 },{ horiz: 6,vert: 6 },{ horiz: 7,vert: 7 } ,
						{ horiz: 1,vert: -1 },{ horiz: 2,vert: -2 },{ horiz: 3,vert: -3 },{ horiz: 4,vert: -4 },{ horiz: 5,vert: -5 },{ horiz: 6,vert: -6 },{ horiz: 7,vert: -7 } ,
						{ horiz: -1,vert: 1 },{ horiz: -2,vert: 2 },{ horiz: -3,vert: 3 },{ horiz: -4,vert: 4 },{ horiz: -5,vert: 5 },{ horiz: -6,vert: 6 },{ horiz: -7,vert: 7 } ];		
	}
	
	Rikis.prototype = new Figura();												// nustatomas Figuros klases paveldejimas