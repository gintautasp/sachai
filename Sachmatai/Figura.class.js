
	function Figura() {	

		this.padetis_esama = new Padetis ( "a1" );										// bet kokia reiksme
		
		this.spalva = '-1';
		
		this.ejimo_pokyciai = [];														// priskiriamas tuscias masyvas
		
		this.galimuEjimuSkaicius = function() {											// metodas ejimu skaiciui gauti
			
			return this.ejimo_pokyciai.length;
		}
		
		this.naujaPadetisPagalGalimaEjima = function ( nr_galimo_ejimo ) {						//
			
			nauja_padetis = new Padetis ( this.padetis_esama.koordinate() );

			if ( this.galimuEjimuSkaicius() > nr_galimo_ejimo ) {
			
				nauja_padetis = this.padetis_esama.pridetiPokyti ( this.ejimo_pokyciai [ nr_galimo_ejimo ] );
			}
			
			return nauja_padetis;
		}	
		
		this.yraKitosSpalvos = function ( spalva ) {
			
			// jei langelyje esančios figūros spalva yra priešinga	// užvestosios, langelį nuspalvina raudonai.	// rodiklis =2																						
			return ( this.spalva != spalva );
		}
		
	}
	/*  		arba galime daryti taip
	Figura.prototype.galimuEjimuSkaicius = function() {										
			
		return this.ejimo_pokyciai.length;
	}
		
	Figura.prototype.naujaPadetisPagalGalimaEjima = function ( nr_galimo_ejimo ) {
			
		nauja_padetis = this.padetis_esama.pridetiPokyti ( this.ejimo_pokyciai [ nr_galimo_ejimo ] );

		return nauja_padetis;
	}	
	*/