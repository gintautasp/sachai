
	function Langelis() {
		
		this.pasiimti = function ( koordinate ) {
			
			return document.getElementById ( koordinate );
		}
		
		this.parodytiKaipGalimaEjima = function ( koordinate ) {
			
			this.pasiimti ( koordinate ).style.backgroundColor = 'blue';
		}
		
		this.parodytiKaipGalimaKirtima = function ( koordinate ) {
			
			this.pasiimti ( koordinate ).style.backgroundColor = 'red';
		}
		
		this.parodytiPaprastai = function ( koordinate ) {
			
			this.pasiimti ( koordinate ).removeAttribute( 'style' );
		}
	}