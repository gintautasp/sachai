function figuros_baltos ( baltieji ) {
	const map1 = new Map();
	
	map1.set('K', '&#x2654;');
	map1.set('V', '&#x2655;');
	map1.set('R', '&#x2657;');
	map1.set('Z', '&#x2658;');
	map1.set('B', '&#x2656;');
	map1.set('P', '&#x2659;');
	
	for ( i = 0; i < baltieji.length; i++ ) {
		figuros_reiksme = baltieji[ i ].substring ( 0, 1 );
		figuros_koordinate = baltieji[ i ].substring ( 1, 3 );
		
		vieta = document.getElementById ( figuros_koordinate );
		
		vieta.setAttribute("onmouseover", "bigImg('"+figuros_reiksme+"',1,'"+figuros_koordinate+"')"); 
		vieta.setAttribute("onmouseout", "normalImg('"+figuros_reiksme+"',1,'"+figuros_koordinate+"')"); 

		vieta.innerHTML =map1.get(figuros_reiksme) ;
	}
}

function figuros_juodos ( juodieji ) {
	
	const map1 = new Map();
	
	map1.set('K', '&#x265A;');
	map1.set('V', '&#x265B;');
	map1.set('R', '&#x265D;');
	map1.set('Z', '&#x265E;');
	map1.set('B', '&#x265C;');
	map1.set('P', '&#x265F;');

	for ( i = 0; i < juodieji.length; i++ ) {
		figuros_reiksme = juodieji[ i ].slice (0,1);
		figuros_koordinate = juodieji[ i ].slice (1,3);
		
		vieta = document.getElementById ( figuros_koordinate);
		
		vieta.setAttribute("onmouseover", "bigImg('"+figuros_reiksme+"',0,'"+figuros_koordinate+"')"); 
		vieta.setAttribute("onmouseout", "normalImg('"+figuros_reiksme+"',0,'"+figuros_koordinate+"')"); 
		
		vieta.innerHTML = map1.get(figuros_reiksme) ;
	}
}

function sudaryti() {

	juodieji = document.getElementById ( 'juodieji' ).value.split ( ',' );
	baltieji = document.getElementById ( 'baltieji' ).value.split ( ',' );

	figuros_baltos  ( baltieji );
	figuros_juodos ( juodieji );			
}