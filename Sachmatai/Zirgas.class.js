
	function Zirgas ( padetis_esama,  spalva ) {				// reikalina esama padetis ir spalvos nr. ( 0-1)
	
		this.spalva = spalva;								// išsaugoma paduota spalva, kaip kintamasis
		
		this.padetis_esama = padetis_esama;				// išsaugoma paduota koordinate, kaip kintamasis
		
		this.simboliai = [ '&#x265E;', '&#x2658;' ]				// dvieju spalvu variantu masyvas ( 0 juoda, 1 balta)
		
		this.ejimo_pokyciai = [							// visi galimi figuros ejimai
			{ horiz: -2, vert: -1 }, { horiz: -1, vert: -2}, { horiz: 1, vert: -2 }, { horiz: 2, vert: -1 }, { horiz: 2, vert: 1}, { horiz: 1, vert: 2 }, { horiz: -1, vert: 2 }, { horiz: -2, vert: 1 } ];
	}	
	
	Zirgas.prototype = new Figura();						// nustatomas Figuros klases paveldejimas