
		lst_figuros = {}															// sukuriama tuscia struktura
		
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
		
		function pazymeti_langeli ( nauja_padetis, rodiklis ){								//pazymi langelį pagal naujos padėties koordinates ir rodiklį, kuris nurodo spalvą arba stiliaus elementų panaikinimą
			
			koordinate = nauja_padetis.horiz + nauja_padetis.vert ;						// apjjungia naujos padėties vertikalę ir horizontalę į vieną koordinatės elementą
			
			if ( rodiklis == 1 ) {													// rodiklis gali būti 1 tik, kai naujo ėjimo langelis tuščias
				
					document.getElementById ( koordinate ).style.backgroundColor = 'blue';
				
			}else { 															// jei rodiklies nėra ==1 
				
				if ( rodiklis == 2 ){												// tikrina ar rodiklis == 2	
				
					document.getElementById ( koordinate ).style.backgroundColor = 'red';	// jei rodiklis ==2, tai reiškia, kad langelyje yra  priešingos spalvos figūra. Jos foną spalvina raudonai
					
				} else {
					
					document.getElementById ( koordinate ).removeAttribute( 'style' );		// jei rodiklis nėra lygus 1 ar 2 (pagal nutylėjima paduodama 0 reikšmė) nuo paduotų koordinačių nuimami stiliaus atributai
																			// fono spalva grįžta į pradinę
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
					pazymeti_langeli ( nauja_padetis, rodiklis );																	// jie tuščias, pažyme kaip galimą ėjimo langelį ( rodiklis = 1 ) 
				}
				
				if ( ( document.getElementById ( nauja_padetis.koordinate() ).innerHTML.trim() != "" ) ) {										// tikrina ar langelis užimtas
					
					if ( 
																														// jei langelyje esančios figūros spalva yra priešinga
							lst_figuros [ nauja_padetis.koordinate() ].spalva															// užvestosios, langelį nuspalvina raudonai.
																														// rodiklis =2
						!= 
							galimybes.spalva 
					
					) {
						
						rodiklis = 2;
						pazymeti_langeli ( nauja_padetis, rodiklis ); 
					}
				}
			}
		}
		
		function slepti_ejimus ( koord ) {																						// nuvedus nuo figūros panaikina stiliaus atributus nuo visų jos galimų pozicijų
			
			rodiklis = 0;
			 
			galimybes = lst_figuros [ koord ];
			 
			for ( i = 0; i < galimybes.galimuEjimuSkaicius(); i++ ) {
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( i );
					
				pazymeti_langeli ( nauja_padetis, rodiklis );
				
			}
		}
		
		function sudelioti ( figuros, spalva ) {																		// sudeda figūras, gautas iš funkcijos sudaryti, į įvedime nurodytas koordinates
		
			for ( i = 0; i < figuros.length; i++ ) {																	// ciklas leidžiamas pagal gautų figūrų skaičių
				
				figuros_reiksme = figuros [ i ].slice ( 0, 1 );															// imamas figūros pirmas simbolis, kuris nurodo figūros pavadinimą
				figuros_koordinate = figuros [ i ].slice ( 1, 3 );															// imamas figūros antrasis ir trečiasis simbolis. Jie kartu sudaro koordinatę lentoje
				
				lst_figuros [ figuros_koordinate ] = make_figura ( figuros_reiksme, spalva, figuros_koordinate );						// į lst_figuros masyva talpinami elementai pagal ID(koordintę). Kiekvienas elementas saugo figūros reikšmę, spalvą, koordinatę
				
				vieta = document.getElementById ( figuros_koordinate );													// kintamajasis vieta pasiima iš sachmatai_standart.html ID, kuris lygus figūros_koordinate 
					
				vieta.setAttribute ( "onmouseover", "rodyti_ejimus('" + figuros_koordinate + "')" ); 									// turimam ID priskiriami atributai pelytės užvedimui ir nuvedimui
				vieta.setAttribute ( "onmouseout", "slepti_ejimus('" + figuros_koordinate + "')" ); 									// užvedus aktyvuojama funkcija rodyti_ejimus su jau įvesta esama koordinate
																											// nuvedus aktyvuojama funkcija slepti_ejimus, kuri turi tą pačią koordinatę
				vieta.innerHTML = lst_figuros [ figuros_koordinate ].simboliai [ parseInt ( spalva ) ] ;								// į lentą sudedamos figūros pagal koordinatę, figūrą ir spalvą
			}
			console.log ( lst_figuros );				//pasitikrinimui
		}		
		
		function sudaryti() {																					// paspaudus mygtuką sudaryti imamos reikšmės iš juodųjų ir baltųjų text lauko

			juodieji = document.getElementById ( 'juodieji' ).value.split ( ',' );												// jas splitina pagal kablelį
			baltieji = document.getElementById ( 'baltieji' ).value.split ( ',' );

			sudelioti ( baltieji, '1' );																				// gautos reikšmės paduodamos į funkciją sudėlioti ir prie jų pridedamas spalvos skaičius
			sudelioti ( juodieji, '0' );			
		}		