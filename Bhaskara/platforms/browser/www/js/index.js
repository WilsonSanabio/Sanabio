var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function eq2g()	{
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
		
	if (a % 1 != 0){
		a = parseFloat(a.replace(',', '.'));
	}
	
	if (b % 1 != 0){
		b = parseFloat(b.replace(',', '.'));
	}
	
	if (c % 1 != 0){
		c = parseFloat(c.replace(',', '.'));
	}

	if(a == 1){
		aa = "";
		aaa = "";
	}
	else if(a == -1){
		aa = "";
		aaa = "- ";
	}
	else if(a < 0){
		aa = a * -1;
		aaa = " - ";
	}else{
		aa = a;
		aaa = "";
	}

	if(b == 1){
		bb = "";
		bbb = " + ";
	}
	else if(b == -1){
		bb = "";
		bbb = " - ";
	}
	else if(b > 0){
		bb = b;
		bbb = " + ";
	}
	else {
		bb = b * -1;
		bbb = " - ";
	}
	
	if(c > 0){
		cc = c;
		ccc = "b + ";
	}else{
		cc = c * -1;
		ccc = "b - ";
	}

	
	var delta = b * b - 4 * a * c;
	
	x1 = (-b + Math.sqrt(delta)) / (2 * a);
	x2 = (-b - Math.sqrt(delta)) / (2 * a);
	
	if(delta < 0) {
		volta = "A equação não possui raizes reais.";
	}
	else {
		if (delta == 0){
			volta = "As variáveis x1 e x2 são iguais. <br>Seus valores são " + x1.toFixed(2);
		}
		else{
			volta = "O valor de x1 é " + x1.toFixed(2) + "<br>e o valor de x2 é " + x2.toFixed(2);
		}
	}

	exp = " Para a expressão: " + aaa + aa + "a<SUP>2</SUP>" + bbb + bb + ccc + cc + " = 0 ";
	document.getElementById("level1").innerHTML = exp;
	document.getElementById("level").innerHTML = volta;
	document.getElementById("a").value = "";
	document.getElementById("b").value = "";
	document.getElementById("c").value = "";
}

function exitFromApp(){
	console.log("Fechando Aplicação");
	navigator.app.exitApp();
}