
	function Langelis() {
	
		this.parodytiKaipGalimaEjima = function ( koordinate ) {
			
			nustatyti_spalva ( koordinate, 'blue' );
		}
		
		this.parodytiKaipGalimaKirtima = function ( koordinate ) {
			
			nustatyti_spalva ( koordinate,  'red' );
		}
		
		this.parodytiPaprastai = function ( koordinate ) {
			
			parodyti_paprastai ( koordinate )
		}
	}
	
	function Langelisx() {
		

		this.parodytiKaipGalimaKirtima = function ( koordinate ) {
			
			nustatyti_spalva_jq ( koordinate,  'red' );
		}
		
		this.parodytiPaprastai = function ( koordinate ) {
			
			parodyti_paprastai ( koordinate )
		}
	}
	
	
	