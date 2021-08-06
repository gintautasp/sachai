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

function Figura( padetis_esama, figuros_reiksme, spalva ) {

	this.padetis_esama = padetis_esama;
	
	if (figuros_reiksme =="K"){
		this.ejimo_pokyciai = [ { horiz: -1, vert: 1 }, { horiz: 0, vert: 1 }, { horiz: 1, vert: 1 }, { horiz: 1, vert: 0 }, { horiz: 1, vert: -1}, { horiz: 0, vert: -1 }, { horiz: -1, vert: -1 }, { horiz: -1, vert: 0 } ];
	}
	if (figuros_reiksme =="Z"){
		this.ejimo_pokyciai = [ { horiz: -2, vert: -1 }, { horiz: -1, vert: -2}, { horiz: 1, vert: -2 }, { horiz: 2, vert: -1 }, { horiz: 2, vert: 1}, { horiz: 1, vert: 2 }, { horiz: -1, vert: 2 }, { horiz: -2, vert: 1 } ];
	}
	if (figuros_reiksme =="B"){
		this.ejimo_pokyciai = [ { horiz: -1, vert: 0 },{ horiz: -2, vert: 0 },{ horiz: -3, vert: 0 },{ horiz: -4, vert: 0 },{ horiz: -5, vert: 0 },{ horiz: -6, vert: 0 },{ horiz: -7, vert: 0 },
						{ horiz: 1, vert: 0 },{ horiz: 2, vert: 0 },{ horiz: 3, vert: 0 },{ horiz: 4, vert: 0 },{ horiz: 5, vert: 0 },{ horiz: 6, vert: 0 },{ horiz: 7, vert: 0 }, 
						{ horiz: 0, vert: 1 },{ horiz: 0, vert: 2 },{ horiz: 0, vert: 3 },{ horiz: 0, vert: 4 },{ horiz: 0, vert: 5 },{ horiz: 0, vert: 6 },{ horiz: 0, vert: 7 },
						{ horiz: 0,vert: -1 },{ horiz: 0,vert: -2 },{ horiz: 0,vert: -3 },{ horiz: 0,vert: -4 },{ horiz: 0,vert: -5 },{ horiz: 0,vert: -6 },{ horiz: 0,vert: -7 } ];
	}
	if (figuros_reiksme =="V"){
		this.ejimo_pokyciai = [ { horiz: -1, vert: 0 },{ horiz: -2, vert: 0 },{ horiz: -3, vert: 0 },{ horiz: -4, vert: 0 },{ horiz: -5, vert: 0 },{ horiz: -6, vert: 0 },{ horiz: -7, vert: 0 },
						{ horiz: 1, vert: 0 },{ horiz: 2, vert: 0 },{ horiz: 3, vert: 0 },{ horiz: 4, vert: 0 },{ horiz: 5, vert: 0 },{ horiz: 6, vert: 0 },{ horiz: 7, vert: 0 }, 
						{ horiz: 0, vert: 1 },{ horiz: 0, vert: 2 },{ horiz: 0, vert: 3 },{ horiz: 0, vert: 4 },{ horiz: 0, vert: 5 },{ horiz: 0, vert: 6 },{ horiz: 0, vert: 7 },
						{ horiz: 0,vert: -1 },{ horiz: 0,vert: -2 },{ horiz: 0,vert: -3 },{ horiz: 0,vert: -4 },{ horiz: 0,vert: -5 },{ horiz: 0,vert: -6 },{ horiz: 0,vert: -7 },
						
						{ horiz: -1,vert: -1 },{ horiz: -2,vert: -2 },{ horiz: -3,vert: -3 },{ horiz: -4,vert: -4 },{ horiz: -5,vert: -5 },{ horiz: -6,vert: -6 },{ horiz: -7,vert: -7 } ,
						{ horiz: 1,vert: 1 },{ horiz: 2,vert: 2 },{ horiz: 3,vert: 3 },{ horiz: 4,vert: 4 },{ horiz: 5,vert: 5 },{ horiz: 6,vert: 6 },{ horiz: 7,vert: 7 } ,
						{ horiz: 1,vert: -1 },{ horiz: 2,vert: -2 },{ horiz: 3,vert: -3 },{ horiz: 4,vert: -4 },{ horiz: 5,vert: -5 },{ horiz: 6,vert: -6 },{ horiz: 7,vert: -7 } ,
						{ horiz: -1,vert: 1 },{ horiz: -2,vert: 2 },{ horiz: -3,vert: 3 },{ horiz: -4,vert: 4 },{ horiz: -5,vert: 5 },{ horiz: -6,vert: 6 },{ horiz: -7,vert: 7 } ];
	}
	if (figuros_reiksme =="R"){
		this.ejimo_pokyciai = [ { horiz: -1,vert: -1 },{ horiz: -2,vert: -2 },{ horiz: -3,vert: -3 },{ horiz: -4,vert: -4 },{ horiz: -5,vert: -5 },{ horiz: -6,vert: -6 },{ horiz: -7,vert: -7 } ,
						{ horiz: 1,vert: 1 },{ horiz: 2,vert: 2 },{ horiz: 3,vert: 3 },{ horiz: 4,vert: 4 },{ horiz: 5,vert: 5 },{ horiz: 6,vert: 6 },{ horiz: 7,vert: 7 } ,
						{ horiz: 1,vert: -1 },{ horiz: 2,vert: -2 },{ horiz: 3,vert: -3 },{ horiz: 4,vert: -4 },{ horiz: 5,vert: -5 },{ horiz: 6,vert: -6 },{ horiz: 7,vert: -7 } ,
						{ horiz: -1,vert: 1 },{ horiz: -2,vert: 2 },{ horiz: -3,vert: 3 },{ horiz: -4,vert: 4 },{ horiz: -5,vert: 5 },{ horiz: -6,vert: 6 },{ horiz: -7,vert: 7 } ];
	}
	if (figuros_reiksme =="P"){
		eiles_nr=this.padetis_esama.vert;
		if(spalva =="0"){
			if (eiles_nr=="7"){
				this.ejimo_pokyciai = [ { horiz: 0,vert: -1},{ horiz: 0,vert: -2}];
			}else{
				this.ejimo_pokyciai = [ { horiz: 0,vert: -1}];
			}
		}
		if(spalva =="1"){
			if (eiles_nr=="2"){
				this.ejimo_pokyciai = [ { horiz: 0,vert: 1},{ horiz: 0,vert: 2}];
			}else{
				this.ejimo_pokyciai = [ { horiz: 0,vert: 1}];
			}
		}
	}
	
	
	this.galimuEjimuSkaicius = function() {
		
		return this.ejimo_pokyciai.length;
	}
	
	this.naujaPadetisPagalGalimaEjima = function ( nr_galimo_ejimo ) {
		
		nauja_padetis = this.padetis_esama.pridetiPokyti ( this.ejimo_pokyciai [ nr_galimo_ejimo ] );

		return nauja_padetis;
	}
}