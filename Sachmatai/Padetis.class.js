/*
	padeties_raides = [ 'z', 'x', 'y', 'o', 'k', 'l', 'm', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'n', 's', 't', 'u', 'v' ];	

	padeties_galimos_raides = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];									// lentoje esancios galimos raides

	function Padetis ( eil_padeties )  { 													// i funkcija paduodama koordinate pvz a2
		
		this.horiz = eil_padeties.slice ( 0, 1 );											// kintamajam horiz priskiriama raidine reiksme

		this.vert =  parseInt ( eil_padeties.slice ( 1, 2 ) );									// kintamajam vert priskiriama skaitine reiksme
	
		this.pridetiPokyti = function ( pokytis_padeties ) {									//

			nr_horiz = padeties_raides.indexOf ( this.horiz );	
			
			nr_nauj_horiz = nr_horiz + pokytis_padeties.horiz;
			
			padeties_raide = padeties_raides [ nr_nauj_horiz ]; 
			
			nr_nauj_vert = this.vert + pokytis_padeties.vert;
			
			if ( between ( nr_nauj_vert, 0, 9 ) && ( padeties_galimos_raides.indexOf ( padeties_raide ) != -1 ) ) { // neišėjo už lentos ribų
			
				return new Padetis ( padeties_raide + nr_nauj_vert ); 
			}
			return this;
		}
		
		this.koordinate = function() {																	// sujungia horizontalę ir vertikalę į vieną koordinatę 
			
			return this.horiz + this.vert;
		}
		
	}
	*/
	
	padeties_galimos_raides = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];									// lentoje esancios galimos raides

	function Padetis ( eil_padeties )  { 													// i funkcija paduodama koordinate pvz a2
		
		this.horiz = eil_padeties.slice ( 0, 1 );											// kintamajam horiz priskiriama raidine reiksme

		this.vert =  parseInt ( eil_padeties.slice ( 1, 2 ) );									// kintamajam vert priskiriama skaitine reiksme
	
		this.pridetiPokyti = function ( pokytis_padeties ) {									
			
			nr_horiz = padeties_galimos_raides.indexOf ( this.horiz ) + pokytis_padeties.horiz ;		// pradinis horizontalios asies indekso nr + pokytis		pvz. a=0, b=1  	pestininko atveju butu a+0, b+0 , nes jis juda vertikalioje asyje
			 
			nr_nauj_vert = this.vert + pokytis_padeties.vert;								// pradine vertikalios asies verte + pokytis 			pvz. a=0, b=1  	pestininko atveju butu a+1 arba a+2, b+1 arba b+2 , nes jis juda vertikalioje asyje
			
			if ( between ( nr_nauj_vert, 0, 9 ) && between ( nr_horiz, -1, 8 ) ) { 					// neišėjo už lentos ribų
			
				return new Padetis ( padeties_galimos_raides [ nr_horiz ] + nr_nauj_vert ); 		// jei neiseina uz ribu grazina koordinate, kuri yra lentoje
			}
			return this;
		}
		
		this.koordinate = function() {																	// sujungia horizontalę ir vertikalę į vieną koordinatę 
			
			return this.horiz + this.vert;
		}
		
	}

