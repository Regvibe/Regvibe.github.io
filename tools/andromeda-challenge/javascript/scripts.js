let com_A = 0;
let com_B = 0;
let com_C = 0;
            
let sec = 0;
let moy = 0;
let meilleur = 0;
            
function compter_A() {
    if (com_A == 0) {
                setInterval(moyenne, 10)
    }
                
    if (com_A == 0 || com_C == com_A) {
        com_A += 1;
					
		document.getElementById("prev").src = "step-images/step2.png";
        //document.getElementById("compteur_A").innerHTML = com_A;
    }
}
            
 function compter_B() {
                if (com_A == com_B + 1) {
                    com_B += 1;
					document.getElementById("prev").src = "step-images/step5.png";
                    //document.getElementById("compteur_B").innerHTML = com_B;
                    }
                }
            
            function compter_C() {
                if (com_B == com_C + 1) {
					com_C += 1;
					document.getElementById("prev").src = "step-images/step7.png";
					//document.getElementById("compteur_C").innerHTML = com_C;
                    }
                }
			
			function viser_A() {
                if (com_A > 0 && com_C == com_A) {
                    document.getElementById("prev").src = "step-images/step1.png";
                    }
					
                }
				
			function viser_B() {
                if (com_A == com_B + 1) {
                    document.getElementById("prev").src = "step-images/step4.png";
                    }
                }
				
			function sorti_A() {
				if (com_A == (com_B+1)) {
					document.getElementById("prev").src = "step-images/step3.png";
				}
			}
			
			function sorti_B() {
				if (com_B == com_A && com_B != 0) {
					document.getElementById("prev").src = "step-images/step6.png";
				}
			}
			
			function sorti_C() {
				if (com_C == com_B && com_C != 0) {
					document.getElementById("prev").src = "step-images/step8.png";
				}
			}
            
            function moyenne() {
                sec += 10;
                moy = (com_A/sec*1000).toFixed(2);
		document.getElementById("moyenne").innerHTML = moy;
                
		if (moy > meilleur && sec > 1000) {
                    meilleur = moy;
                    document.getElementById("meilleur").innerHTML = meilleur;
                }		
				
	}