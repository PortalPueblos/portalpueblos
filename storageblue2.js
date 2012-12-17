//<![CDATA[
imgr = new Array();
imgr[0] = "http://portaldelospueblos.com.ar/portal/imagenes/no-image.png";
showRandomImg = true;

aBold = true;

summaryPost = 100;
summaryPost1 = 140;
summaryTitle = 25;

numposts1 = 15;
numposts2 = 4;
numposts3 = 5;
numposts4 = 5;
numposts5 = 10;
numposts6 = 5;
numposts7 = 6; //4

function removeHtmlTag(strx,chop){
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}

s = s.join("");
s = s.substring(0,chop-1);
return s;
}
function showrecentposts(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img = new Array();
document.write('<ul>');
for (var i = 0; i < numposts1; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}

for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}

if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";
postdate = entry.published.$t;
if(j>imgr.length-1) j=0;
img[i] = imgr[j];
s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];
for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}

var daystr = day+ ' ' + m + ' ' + y ;
var trtd = '<li class="car"><div class="thumb"><a href="'+posturl+'"><img width="145" height="100" class="alignnone" src="'+img[i]+'"/></a></div><p><a class="slider_title" href="'+posturl+'">'+posttitle+'</a></p></li>';

document.write(trtd);
j++;
}
document.write('</ul>');
}
function showrecentposts2(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i < numposts2; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["de enero de","de febrero de","de marzo de","de abril de","de mayo de","de junio de","de julio de","de agosto de","de septiembre de","de octubre de","de noviembre de","de diciembre de"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;

 if (i==0) {
	var trtd = '<div class="boxcontent"><div class="thumb"><h2><a href="'+posturl+'">'+posttitle+'</a></h2><a href="'+posturl+'"><img width="221" height="120" src="'+img[i]+'"/></a></div><h5>'+daystr+'</h5><div class="more">M&aacute;s noticias  </div><ul>';
	document.write(trtd);
}
 if ((i>0)&&(i<numposts2))
    {
	var trtd = '<li><a href="'+posturl+'">'+posttitle+'</a></li>';
	document.write(trtd);
}

	j++;
}
document.write('</ul></div>');

}

function showrecentposts3(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i < numposts3; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;

	var trtd = '<div class="contentdiv"><a href="'+posturl+'"><img width="407" height="240" class="alignnone" src="'+img[i]+'"/></a><div class="sliderPostInfo"><h2 class="featuredTitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost)+'...</p></div></div>';
	document.write(trtd);


	j++;
}

}

function showrecentposts4(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i < numposts3; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;

	var trtd = '<li><a class="toc" href="#"><img width="75" height="50" class="alignnone" src="'+img[i]+'"/></a></li>';
	document.write(trtd);


	j++;
}

}
function showrecentposts5(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts4 <= json.feed.entry.length) {
		maxpost = numposts4;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
  	for (var i = 0; i < maxpost; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["de enero de","de febrero de","de marzo de","de abril de","de mayo de","de junio de","de julio de","de agosto de","de septiembre de","de octubre de","de noviembre de","de diciembre de"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
    pcm='<a href="'+posturl+'">'+pcm+' comments</a>';
	
 if (i==0) {
	var trtd = '<li class="first"><div class="entry-thumb"><a href="'+posturl+'"><img width="110" height="80" src="'+img[i]+'"/> </a></div><h2 class="entry-title"><a href="'+posturl+'">'+posttitle+'</a></h2><div class="entry-meta"><span class="meta-date">'+daystr+'</span></div><div class="entry-excerpt"><p>'+removeHtmlTag(postcontent,summaryPost)+'...    <a href="'+posturl+'" class="meta-more"><strong>Seguir leyendo </strong><span class="meta-nav"></span></a></p></div></li>';
	document.write(trtd);
}
 if ((i>0)&&(i<maxpost))
    {
	var trtd = '<li class="catlist"><a href="'+posturl+'">'+posttitle+'</a></li>';
	document.write(trtd);
}
	j++;
}

}
function showrecentposts6(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img = new Array();

for (var i = 0; i < numposts5; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}

for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}

if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";

postdate = entry.published.$t;

if(j>imgr.length-1) j=0;
img[i] = imgr[j];

s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];

for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}

var daystr = day+ ' ' + m + ' ' + y ;


var trtd = '<li><a href="'+posturl+'">'+posttitle+' </a></li>';
document.write(trtd);

j++;
}

}
function showrecentposts7(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
	if (numposts6 <= json.feed.entry.length) {
		maxpost = numposts6;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
     for (var i = 0; i < maxpost; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["de enero de","de febrero de","de marzo de","de abril de","de mayo de","de junio de","de julio de","de agosto de","de septiembre de","de octubre de","de noviembre de","de diciembre de"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
    pcm='<a href="'+posturl+'">'+pcm+' comments</a>';
	
 if (i==0) {
	var trtd = '<div class="bottomBox_wide left"><div class="thumb"><a href="'+posturl+'"><img width="190" height="140" src="'+img[i]+'"/></a></div><div class="featuredPost lastPost"><h2 class="postTitle"><a href="'+posturl+'">'+posttitle+'</a></h2>	<p>'+removeHtmlTag(postcontent,summaryPost1)+'... <a href="'+posturl+'"><strong>Seguir leyendo </strong></a></p><div class="clear"></div></div></div><ul><div class="bottomBox_narrow right">';					 
		document.write(trtd);
	          }
	if ((i>0)&&(i<maxpost)) {
var trtd = '<li><a href="'+posturl+'">'+posttitle+' </a></li>';
	document.write(trtd);
	 }				
	 j++;
	}
	document.write('</ul></div>');
}

//]]>