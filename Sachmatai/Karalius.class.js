

	function Karalius (  padetis_esama, spalva ) {									// reikalina esama padetis ir spalvos nr. ( 0-1)
			
		this.spalva = spalva;													// išsaugoma paduota spalva, kaip kintamasis
		
		this.padetis_esama = padetis_esama;									// išsaugoma paduota koordinate, kaip kintamasis
		
		this.simboliai = [ '&#x265A;', '&#x2654;' ];								// dvieju spalvu variantu masyvas ( 0 juoda, 1 balta)
		
		this.ejimo_pokyciai = [												// visi galimi figuros ejimai
		 		{ horiz: -1, vert: 1 }, { horiz: 0, vert: 1 }, { horiz: 1, vert: 1 }, { horiz: 1, vert: 0 }, { horiz: 1, vert: -1}, { horiz: 0, vert: -1 }, { horiz: -1, vert: -1 }, { horiz: -1, vert: 0 } ];
	}
	
	Karalius.prototype = new Figura();											// nustatomas Figuros klases paveldejimas