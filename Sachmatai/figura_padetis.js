padeties_raides = [ 'z', 'x', 'y', 'o', 'k', 'l', 'm', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'n', 's', 't', 'u', 'v' ];

padeties_galimos_raides = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];

function Padetis ( eil_padeties )  { 
	
	this.horiz = eil_padeties.slice ( 0, 1 );

	this.vert =  parseInt(eil_padeties.slice ( 1, 2 ));

	this.pridetiPokyti = function ( pokytis_padeties ) {

		nr_horiz = padeties_raides.indexOf ( this.horiz );
		
		nr_nauj_horiz = nr_horiz + pokytis_padeties.horiz;
		
		padeties_raide = padeties_raides [ nr_nauj_horiz ]; 
		
		nr_nauj_vert = this.vert + pokytis_padeties.vert;
		
		if ( ( nr_nauj_vert > 0) && ( nr_nauj_vert < 9 )  && ( padeties_galimos_raides.indexOf ( padeties_raide ) != -1 ) ) { // neišejo u lentos ribu
		
			return new Padetis ( padeties_raide + nr_nauj_vert ); 
		}
		return this;
	}
	
	this.koordinate = function() {
		
		return this.horiz + this.vert;
	}
	
}

