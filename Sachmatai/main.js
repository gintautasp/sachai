
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
		function bigImg ( figura, spalva, koord ) {	
			
			galimybes = make_figura ( figura, spalva, koord );
			
			for ( i = 0; i < galimybes.galimuEjimuSkaicius(); i++ ) {
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( i );
				
				
				if ((document.getElementById(nauja_padetis.koordinate()).innerHTML.trim() == ""))  {
					
					rodiklis = 1;
					pazymeti_langeli ( nauja_padetis,rodiklis ); 
					
				}if (( nauja_padetis != galimybes.padetis_esama )&&(document.getElementById(nauja_padetis.koordinate()).innerHTML.trim() != "")) {
					
					if(((document.getElementById(nauja_padetis.koordinate()).getAttribute("onmouseover")).slice(11,12))!=spalva){
						
						rodiklis = 2;
					
						pazymeti_langeli ( nauja_padetis,rodiklis ); 
					}
				}
			}
		}
		
		function normalImg(figura,spalva,koord) {
			
			rodiklis = 0;
			 
			galimybes = make_figura ( figura, spalva, koord );
			 
			for ( i = 0; i < galimybes.galimuEjimuSkaicius(); i++ ) {
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( i );
				
				if ( nauja_padetis != galimybes.padetis_esama ) {
					
					pazymeti_langeli ( nauja_padetis,rodiklis ); 
			
				}
			}
		}
		
		function pazymeti_langeli ( nauja_padetis, rodiklis ){
			
			koordinate =nauja_padetis.horiz +nauja_padetis.vert ;
			
			if (rodiklis ==1){
				
					document.getElementById ( koordinate).style.backgroundColor="blue";
			}else if (rodiklis ==2){
				
					document.getElementById ( koordinate).style.backgroundColor="red";
			}else{
				document.getElementById ( koordinate).removeAttribute("style");
			}
		}