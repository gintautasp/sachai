
		lst_figuros = {}

		function make_figura ( figura, spalva, koord ) {
			
			switch ( figura ) {

				case 'K': galimybes = new Karalius ( new Padetis ( koord ), spalva ); break;
				case 'Z': galimybes = new Zirgas ( new Padetis ( koord ), spalva ); break;
				case 'V': galimybes = new Valdove ( new Padetis ( koord ), spalva ); break;
				case 'B': galimybes = new Bokstas ( new Padetis ( koord ), spalva ); break;
				case 'R': galimybes = new Rikis ( new Padetis ( koord ), spalva ); break;
				case 'P': galimybes = new Pestininkas ( new Padetis ( koord ), spalva ); break;
			}			
			return galimybes;
		}
		
		function pazymeti_langeli ( nauja_padetis, rodiklis ){
			
			koordinate = nauja_padetis.horiz + nauja_padetis.vert ;
			
			if ( rodiklis == 1 ) {
				
					document.getElementById ( koordinate ).style.backgroundColor = 'blue';
				
			}else { 
				
				if ( rodiklis == 2 ){
				
					document.getElementById ( koordinate ).style.backgroundColor = 'red';
					
				} else {
					
					document.getElementById ( koordinate ).removeAttribute( 'style' );
				}
			}
		}		

		/**
		*	Pelytės užvedimui ir nuvedimui ant figūros reikalingos funkcijos + spalvinimas
		*	
		*	bigImg - suveikia užvedus pelytę ant figūros
		*		funkcija reikalauja figūros pavadinimo, spalvos ir koordinatės
		*
		*			1) funkcija pereina per visas figūros ėjimų koordinates 
		*				1.1) jei tikrinamoje koordinatėje nėra jokios figūros, kreipiamasi į  funkciją pazymeti_langeli. Perduodama naujos padėties koordinatė ir rodiklis 1
		*					1.1.1) funkcija pazymeti_langeli naujos padėties koordinatėje nuspalvina foną pagal rodiklį 1 (mėlynai)
		*				1.2) tikrina ar koordinatė turi figūra ir ar ji nėra užvestoji figūra
		*					1.2.1) tikrina ar naujoje pozicijoje esanti figūra yra priešingos spalvos užvestajai. Esant priešingai spalvai kreipiamasi į funkciją pazymeti_langeli. Perduodama naujos padėties koordinatė ir rodiklis 2
		*						1.2.1.1) funkcija pazymeti_langeli priešingos spalvos figūros koordinatėje nuspalvina foną pagal rodiklį 2 (raudonai)
		*/
		function rodyti_ejimus ( koord ) {	
			
			galimybes = lst_figuros [ koord ];
			
			for ( i = 0; i < galimybes.galimuEjimuSkaicius(); i++ ) {																// imame po viena galima ejima
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( i );															// pasiimame ejimo padėtį
				
				if ( ( document.getElementById ( nauja_padetis.koordinate() ).innerHTML.trim() == "" ) )  {  									// ar langelis į kurį eitume tuščias ? 
					
					rodiklis = 1;
					pazymeti_langeli ( nauja_padetis, rodiklis );																		// jie tuščias, pažyme kaip galimą ėjimo langelį ( rodiklis = 1 ) 
				}
				
				if ( 
						( nauja_padetis != galimybes.padetis_esama )  																// ar nera bereikalinga
					&& 
						( document.getElementById ( nauja_padetis.koordinate() ).innerHTML.trim() != "" ) 
				) {
					
					if ( 
																														// ( document.getElementById ( nauja_padetis.koordinate() ).getAttribute( "onmouseover" ) ).slice ( 11, 12 ) 
							lst_figuros [ nauja_padetis.koordinate() ].spalva
						 
						!= 
							galimybes.spalva 
					
					) {
						
						rodiklis = 2;
						pazymeti_langeli ( nauja_padetis, rodiklis ); 
					}
				}
			}
		}
		
		function slepti_ejimus ( koord ) {
			
			rodiklis = 0;
			 
			galimybes = lst_figuros [ koord ];
			 
			for ( i = 0; i < galimybes.galimuEjimuSkaicius(); i++ ) {
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( i );
				
				if ( nauja_padetis != galimybes.padetis_esama ) {
					
					pazymeti_langeli ( nauja_padetis, rodiklis );
				}
			}
		}
		
		function sudelioti ( figuros, spalva ) {
		
			for ( i = 0; i < figuros.length; i++ ) {
				
				figuros_reiksme = figuros [ i ].slice ( 0, 1 );
				figuros_koordinate = figuros [ i ].slice ( 1, 3 );
				
				lst_figuros [ figuros_koordinate  ] = make_figura ( figuros_reiksme, spalva, figuros_koordinate );
				
				vieta = document.getElementById ( figuros_koordinate );
				
				vieta.setAttribute ( "onmouseover", "rodyti_ejimus('"+figuros_koordinate +"')" ); 
				vieta.setAttribute ( "onmouseout", "slepti_ejimus('" + figuros_koordinate +"')" ); 
				
				vieta.innerHTML = lst_figuros [ figuros_koordinate ].simboliai [ parseInt ( spalva ) ] ;
			}
			console.log ( lst_figuros );
		}		
		
		function sudaryti() {

			juodieji = document.getElementById ( 'juodieji' ).value.split ( ',' );
			baltieji = document.getElementById ( 'baltieji' ).value.split ( ',' );

			sudelioti ( baltieji, '1' );
			sudelioti ( juodieji, '0' );			
		}		