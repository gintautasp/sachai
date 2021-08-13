
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
	
		/**
		*	Pelytes užvedimui ir nuvedimui ant figuros reikalingos funkcijos + spalvinimas
		*	
		*	bigImg - suveikia užvedus pelyte ant figuros
		*		funkcija reikalauja figuros pavadinimo, spalvos ir koordinates
		*
		*			1) funkcija pereina per visas figuros ejimu koordinates 
		*				1.1) jei tikrinamoje koordinateje nera jokios figuros, kreipiamasi i  funkcija pazymeti_langeli. Perduodama naujos padeties koordinate ir rodiklis 1
		*					1.1.1) funkcija pazymeti_langeli naujos padeties koordinateje nuspalvina fona pagal rodikli 1 (melynai)
		*				1.2) tikrina ar koordinate turi figura ir ar ji nera užvestoji figura
		*					1.2.1) tikrina ar naujoje pozicijoje esanti figura yra priešingos spalvos užvestajai. Esant priešingai spalvai kreipiamasi i funkcija pazymeti_langeli. Perduodama naujos padeties koordinate ir rodiklis 2
		*						1.2.1.1) funkcija pazymeti_langeli priešingos spalvos figuros koordinateje nuspalvina fona pagal rodikli 2 (raudonai)
		*/
		function rodyti_ejimus ( koord, langelisz ) {	
			
			galimybes = lst_figuros [ koord ];
			
			for ( ii = 0; ii < galimybes.galimuEjimuSkaicius(); ii++ ) {														// imame po viena galima ejima
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( ii );												// pasiimame ejimo padeti
				
				if ( nauja_padetis.yraTuscia() )  {  																	// ar langelis i kuri eitume tušcias ? 
					
					langelisz.parodytiKaipGalimaEjima ( nauja_padetis.koordinate() );
				}
				
				if ( ! nauja_padetis.yraTuscia() ) {																	// tikrina ar langelis užimtas
					
					if ( lst_figuros [ nauja_padetis.koordinate() ].yraKitosSpalvos ( galimybes.spalva ) ) {
						
						langelisz.parodytiKaipGalimaKirtima ( nauja_padetis.koordinate() );
					}
				}
			}
		}
		
		function slepti_ejimus ( koord, langelisz ) {																			// nuvedus nuo figuros panaikina stiliaus atributus nuo visu jos galimu poziciju
			
			galimybes = lst_figuros [ koord ];
			 
			for ( ix = 0; ix < galimybes.galimuEjimuSkaicius(); ix++ ) {
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( ix );
					
				langelisz.parodytiPaprastai ( nauja_padetis.koordinate() );
			}
		}