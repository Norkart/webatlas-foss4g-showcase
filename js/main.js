/**
*
* INTERESTED IN .JS, FME, DATA ANALYSIS, GEOSERVER, POSTGRESQL/POSTGIS, SPATIAL NERDING? 
* CONTACT NORKART AS (http://norkart.no) FOR MORE INFORMATION!
*
* DO YOU LOVE OUR TILESETS AND WANT TO USE THEM IN YOUR PROJECTS? 
* CONTACT NORKART AS (http://norkart.no) FOR INFORMATION ON LICENSING FOR NON-COMMERCIAL AND COMMERCIAL USE
* 
*/

var map;

$(document).ready(function() {
	//use the 
    map = new WebatlasMap('map', {maxZoom: 13, customer: 'WA_JS_V3_Coursework'});
	map.removeControl(map.LayerControl)

    map.setView(new L.LatLng(63.4410597431246,10.4027997216313),5);
/*
    var norkartIcon = L.icon({
	    iconUrl: 'leaf-green.png',
	    iconSize:     [38, 95], // size of the icon
	    shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
*/
});