
	function Pestininkas ( padetis_esama,  spalva ) {								// reikalina esama padetis ir spalvos nr. ( 0-1)
		
		this.spalva = spalva;													// i�saugoma paduota spalva, kaip kintamasis
		
		this.padetis_esama = padetis_esama;									// i�saugoma paduota koordinate, kaip kintamasis
		
		this.simboliai = [  '&#x265F;',  '&#x2659;' ];								// dvieju spalvu variantu masyvas ( 0 juoda, 1 balta)
		
		eiles_nr = this.padetis_esama.vert;										// kintamajam priskiriama pestininko esama padetis vertikalioje asyje (nr langelio)
	
		if ( spalva == "0" ) {														// jei spalva juoda
			
			if ( eiles_nr == "7" ) {													//eiles nr pradineje pozicijoje
				
				this.ejimo_pokyciai = [ { horiz: 0, vert: -1 }, { horiz: 0, vert: -2 } ];					// dudamas pirmo ejimo ejimu rinkinys
				
			} else {																// jei eiles nr ne pradineje pozicijoje
				
				this.ejimo_pokyciai = [ { horiz: 0, vert: -1 } ];									// duodamas standartinis ejimu rinkinys
			}
		}
		
		if ( spalva == "1" ) {														// jei spalva juoda
			
			if ( eiles_nr == "2" ) {													//eiles nr pradineje pozicijoje
				
				this.ejimo_pokyciai = [ { horiz: 0, vert: 1 }, { horiz: 0, vert: 2 } ];						// dudamas pirmo ejimo ejimu rinkinys
				
			} else {																// jei eiles nr ne pradineje pozicijoje
				
				this.ejimo_pokyciai = [ { horiz: 0, vert: 1 } ];									// duodamas standartinis ejimu rinkinys
			}	
		}		
	}
	
	Pestininkas.prototype = new Figura();										// nustatomas Figuros klases paveldejimas
	
