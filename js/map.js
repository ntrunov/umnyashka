"use strict";

(function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.95894743882332, 38.03639790740961],
      zoom: 16,
      controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.95894743882332, 38.03639790740961], {
      hintContent: '',
      balloonContent: ''
    });

    myMap.geoObjects.add(myPlacemark);
  }

})();
