
	function Figura () {

		this.padetis_esama = 'a1';
	}
	
	Figura.prototype.galimuEjimuSkaicius = function() {
			
		return this.ejimo_pokyciai.length;
	}
		
	Figura.prototype.naujaPadetisPagalGalimaEjima = function ( nr_galimo_ejimo ) {
			
		nauja_padetis = this.padetis_esama.pridetiPokyti ( this.ejimo_pokyciai [ nr_galimo_ejimo ] );

		return nauja_padetis;
	}	