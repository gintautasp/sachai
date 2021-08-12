
	function Bokstas ( padetis_esama,  spalva ) {															// reikalina esama padetis ir spalvos nr. ( 0-1)
		
		this.spalva = spalva;																			// i�saugoma paduota spalva, kaip kintamasis
			
		this.padetis_esama = padetis_esama;															// i�saugoma paduota koordinate, kaip kintamasis

		this.simboliai = [  '&#x265C;', '&#x2656;' ]														// dvieju spalvu variantu masyvas ( 0 juoda, 1 balta)
	
		this.ejimo_pokyciai = [ 																		// visi galimi figuros ejimai
				{ horiz: -1, vert: 0 },{ horiz: -2, vert: 0 },{ horiz: -3, vert: 0 },{ horiz: -4, vert: 0 },{ horiz: -5, vert: 0 },{ horiz: -6, vert: 0 },{ horiz: -7, vert: 0 },
				{ horiz: 1, vert: 0 },{ horiz: 2, vert: 0 },{ horiz: 3, vert: 0 },{ horiz: 4, vert: 0 },{ horiz: 5, vert: 0 },{ horiz: 6, vert: 0 },{ horiz: 7, vert: 0 }, 
				{ horiz: 0, vert: 1 },{ horiz: 0, vert: 2 },{ horiz: 0, vert: 3 },{ horiz: 0, vert: 4 },{ horiz: 0, vert: 5 },{ horiz: 0, vert: 6 },{ horiz: 0, vert: 7 },
				{ horiz: 0,vert: -1 },{ horiz: 0,vert: -2 },{ horiz: 0,vert: -3 },{ horiz: 0,vert: -4 },{ horiz: 0,vert: -5 },{ horiz: 0,vert: -6 },{ horiz: 0,vert: -7 } ];
	}
	
	Bokstas.prototype = new Figura();																	// nustatomas Figuros klases paveldejimas