
	
	lst_figuros = {}															// sukuriama tuscia struktura
	
	langelis = new Langelis();


	$( document ).ready ( function() {

		function nustatyti_spalva_jq ( koordinate, spalva ) {
			
			$ ( '#' + koordinate ).css ( 'background-color', spalva ); 
		}
		
		function parodyti_paprastai_jq ( koordinate ) {
			
			$ ( '#' + koordinate ).css( 'background-color', '' );
		}

		function Langelisx() {

			this.parodytiKaipGalimaEjima = function ( koordinate ) {
				
				nustatyti_spalva_jq ( koordinate, 'blue' );
			}			

			this.parodytiKaipGalimaKirtima = function ( koordinate ) {
				
				nustatyti_spalva_jq ( koordinate,  'red' );
			}
			
			this.parodytiPaprastai = function ( koordinate ) {
				
				parodyti_paprastai ( koordinate )
			}
		}
		
		Langelisx.prototype = langelis;
		
		langelisx = new Langelisx();
		
		function sudelioti ( figuros, spalva ) {			// sudeda figūras, gautas iš funkcijos sudaryti, į įvedime nurodytas koordinates
			
			console.log ( figuros.length );
		
			for ( t = 0; t < figuros.length; t++ ) {																	// ciklas leidžiamas pagal gautų figūrų skaičių
				
				figuros_reiksme = figuros [ t ].slice ( 0, 1 );															// imamas figūros pirmas simbolis, kuris nurodo figūros pavadinimą
				figuros_koordinate = figuros [ t ].slice ( 1, 3 );															// imamas figūros antrasis ir trečiasis simbolis. Jie kartu sudaro koordinatę lentoje
				
				lst_figuros [ figuros_koordinate ] = make_figura ( figuros_reiksme, spalva, figuros_koordinate );						// į lst_figuros masyva talpinami elementai pagal ID(koordintę). Kiekvienas elementas saugo figūros reikšmę, spalvą, koordinatę
				
				// vieta = ;
									
				$( '#' +  figuros_koordinate ).mouseover ( function() {
					
					koord = lst_figuros [ this.id ].padetis_esama.koordinate(); 
					
					rodyti_ejimus ( koord, langelisx );
				}); 									// turimam ID priskiriami atributai pelytės užvedimui ir nuvedimui
				
				$( '#' +  figuros_koordinate ).mouseout ( function() {
				
					koord = lst_figuros [ this.id ].padetis_esama.koordinate();
					slepti_ejimus( koord, langelisx ); 
				}); 									// užvedus aktyvuojama funkcija rodyti_ejimus su jau įvesta esama koordinate
																											// nuvedus aktyvuojama funkcija slepti_ejimus, kuri turi tą pačią koordinatę
				$( '#' +  figuros_koordinate ).html ( lst_figuros [ figuros_koordinate ].simboliai [ parseInt ( spalva ) ] );								// į lentą sudedamos figūros pagal koordinatę, figūrą ir spalvą
				
				console.log( t );
				// console.log ( lst_figuros );	
			}
			console.log ( lst_figuros );				//pasitikrinimui
		}		
		
		$( "#sudaryk" ).click ( function() {																					// paspaudus mygtuką sudaryti imamos reikšmės iš juodųjų ir baltųjų text lauko

			juodieji = $( '#juodieji' ).val().split ( ',' );												// jas splitina pagal kablelį
			baltieji = $( '#baltieji' ).val().split ( ',' );
			console.log ( juodieji );
			sudelioti ( baltieji, '1' );																				// gautos reikšmės paduodamos į funkciją sudėlioti ir prie jų pridedamas spalvos skaičius
			sudelioti ( juodieji, '0' );			
		});
	});