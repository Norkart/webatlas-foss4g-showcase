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
    map = new WebatlasMap('map', {
        maxZoom: 14,
        customer: 'WA_JS_V3_Coursework'
    });
    map.removeControl(map.LayerControl)
    map.removeControl(map.zoomControl);

	var sidebar = L.control.sidebar('sidebar', {
	    position: 'left'
	});
	map.addControl(sidebar);
	sidebar.show();
	
    var norkartIcon = L.icon({
        iconUrl: 'img/norkartIcon.png',
        iconSize: [15, 20],
        iconAnchor: [7, 10],
    });

    L.marker([63.4410597431246, 10.4027997216313], {
        icon: norkartIcon
    }).addTo(map);
    L.marker([59.8915770986138, 10.5230465046887], {
        icon: norkartIcon
    }).addTo(map);
    L.marker([61.1235647369621, 10.45737117203], {
        icon: norkartIcon
    }).addTo(map);
    L.marker([60.3573913134054, 5.3429104995275], {
        icon: norkartIcon
    }).addTo(map);

    routePoints = [{
        lat: 63.4410597431246,
        lng: 10.4027997216313,
        zoom: 5
    }, {
        lat: 63.4410597431246,
        lng: 10.4027997216313,
        zoom: 9
    }, {
        lat: 63.4410597431246,
        lng: 10.4027997216313,
        zoom: 12
    }, {
        lat: 63.4410597431246,
        lng: 10.4027997216313,
        zoom: 14
    }, {
        lat: 63.4410597431246,
        lng: 10.4027997216313,
        zoom: 12
    }, {
        lat: 63.4410597431246,
        lng: 10.4027997216313,
        zoom: 9
    }, {
        lat: 63.4410597431246,
        lng: 10.4027997216313,
        zoom: 5
    }, {
        lat: 62.320039453318856,
        lng: 9.263877868652344,
        zoom: 9
    }, {
        lat: 62.320039453318856,
        lng: 9.263877868652344,
        zoom: 12
    }, {
        lat: 62.320039453318856,
        lng: 9.263877868652344,
        zoom: 14
    },{
        lat: 62.320039453318856,
        lng: 9.263877868652344,
        zoom: 10
    },{
        lat: 62.320039453318856,
        lng: 9.263877868652344,
        zoom: 8
    }];

    nextRoutePoint_index = 0;
	
    // map.on('', function() {
    // 	console.log("event");
    // 	nextRoutePoint();
    // })

    nextRoutePoint();
    setInterval(nextRoutePoint,4000);
    function nextRoutePoint() {
    	console.log("next");
		map.setView(new L.LatLng(routePoints[nextRoutePoint_index].lat,routePoints[nextRoutePoint_index].lng), routePoints[nextRoutePoint_index].zoom);
		nextRoutePoint_index += 1;
		if(nextRoutePoint_index >= routePoints.length) {
			nextRoutePoint_index = 0;
		}
    }
});