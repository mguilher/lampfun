function getParameterByName( name ){
    var regexS = "[\\?&]"+name+"=([^&#]*)", 
  regex = new RegExp( regexS ),
  results = regex.exec( window.location.search );
  if( results == null ){
    return "";
  } else{
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

var mapColor=[{Key:'A',Value:"pDivWhite"},
{Key:'B',Value:"pDivBlue"},
{Key:'C',Value:"pDivRed"},
{Key:'D',Value:"pDivBlue"},
{Key:'E',Value:"pDivWhite"},
{Key:'F',Value:"pDivYellow"},
{Key:'G',Value:"pDivRed"},
{Key:'H',Value:"pDivBlue"},
{Key:'I',Value:"pDivBlue"},
{Key:'J',Value:"pDivBlue"},
{Key:'K',Value:"pDivBlue"},
{Key:'L',Value:"pDivBlue"},
{Key:'M',Value:"pDivOrange"},
{Key:'N',Value:"pDivBlue"},
{Key:'O',Value:"pDivRed"},
{Key:'P',Value:"pDivBlue"},
{Key:'Q',Value:"pDivRed"},
{Key:'R',Value:"pDivBlue"},
{Key:'S',Value:"pDivWhite"},
{Key:'T',Value:"pDivYellow"},
{Key:'U',Value:"pDivBlue"},
{Key:'V',Value:"pDivRed"},
{Key:'W',Value:"pDivBlue"},
{Key:'X',Value:"pDivYellow"},
{Key:'Y',Value:"pDivRed"},
{Key:'Z',Value:"pDivRed"}];

var map=[{Key:'A',Value:{top:'229',left:'185'}},
{Key:'B',Value:{top:'215',left:'273'}},
{Key:'C',Value:{top:'209',left:'345'}},
{Key:'D',Value:{top:'210',left:'479'}},
{Key:'E',Value:{top:'198',left:'558'}},
{Key:'F',Value:{top:'212',left:'714'}},
{Key:'G',Value:{top:'179',left:'801'}},
{Key:'H',Value:{top:'155',left:'923'}},
{Key:'I',Value:{top:'378',left:'68'}},
{Key:'J',Value:{top:'403',left:'200'}},
{Key:'K',Value:{top:'410',left:'283'}},
{Key:'L',Value:{top:'406',left:'386'}},
{Key:'M',Value:{top:'399',left:'484'}},
{Key:'N',Value:{top:'368',left:'584'}},
{Key:'O',Value:{top:'338',left:'691'}},
{Key:'P',Value:{top:'333',left:'802'}},
{Key:'Q',Value:{top:'329',left:'1044'}},
{Key:'R',Value:{top:'549',left:'139'}},
{Key:'S',Value:{top:'567',left:'223'}},
{Key:'T',Value:{top:'587',left:'299'}},
{Key:'U',Value:{top:'578',left:'409'}},
{Key:'V',Value:{top:'578',left:'523'}},
{Key:'W',Value:{top:'564',left:'617'}},
{Key:'X',Value:{top:'548',left:'716'}},
{Key:'Y',Value:{top:'532',left:'841'}},
{Key:'Z',Value:{top:'529',left:'1017'}}];


var mapkeys=[];
mapkeys['A']=0;
 mapkeys['B']=1;
 mapkeys['C']=2;
 mapkeys['D']=3;
 mapkeys['E']=4;
 mapkeys['F']=5;
 mapkeys['G']=6;
 mapkeys['H']=7;
 mapkeys['I']=8;
 mapkeys['J']=9;
 mapkeys['K']=10;
 mapkeys['L']=11;
 mapkeys['M']=12;
 mapkeys['N']=13;
 mapkeys['O']=14;
 mapkeys['P']=15;
 mapkeys['Q']=16;
 mapkeys['R']=17;
 mapkeys['S']=18;
 mapkeys['T']=19;
 mapkeys['U']=20;
 mapkeys['V']=21;
 mapkeys['W']=22;
 mapkeys['X']=23;
 mapkeys['Y']=24;
 mapkeys['Z']=25;
//console.log(map);
var run=[5,20,2,10,24,14,20];
var bext=null;
function myMove() {

	if(bext!=null){clearInterval(bext);}
	
    var pos = 0;
    var id = setInterval(frame, 800);
    function frame() {
        if (pos == run.length) {
		pos=0;
		clearInterval(id);
		$('#position4').hide();
		bext = setInterval(myMove, 3000);
        } else if (run[pos] < 26){
		var obj=map[run[pos]];
		$('#position4').removeClass();
		$('#position4').addClass(mapColor[run[pos]].Value);
		$('#position4').show();
		$("#position4").offset(obj.Value);
		//console.log(obj);
        pos++; 
        }else{
		$('#position4').hide();
		console.log(run[pos]);
		 pos++; 
		}
    }
}

function showall(){
	for(var i=0;i<map.length;i++){
	var ctl=$("<div>");
	ctl.addClass(mapColor[i].Value);
	$("#targetElement").append(ctl);
	ctl.offset(map[i].Value);
	}
}

function sendData(){
	var p="m=";
	var txt=$("#txtdata").val();
	//console.log(txt);
	txt=txt.toUpperCase();
	for(var i=0;i<txt.length;i++){
		if(mapkeys[txt[i]]!=undefined){p+=mapkeys[txt[i]];}
		else{p+="69";}
		if((i+1)<txt.length) p+=",";
	}
	console.log(p);
	location.search = p;
}

$( document ).ready(function( event ) {
var result =  getParameterByName('m');
if(result!=""){
   run=result.split(',');
   myMove();
}
});

var c=65;

/*$( "div" ).click(function( event ) {
  
  $("#position4").offset({ top: event.clientY, left: event.clientX });
  
  var dd = "{Key:'" + String.fromCharCode(c) + "',Value:{top:'" + event.clientY + "',left:'" + event.clientX + "'}},";
  console.log(dd);
  map.push({Key: String.fromCharCode(c),Value:{top: event.clientY ,left:event.clientX }})
  c++;
});*/


