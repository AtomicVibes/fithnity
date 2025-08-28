import React, { useEffect, useRef } from 'react';

// Define a basic interface for the TomTom map object
interface TomTomMap {
  remove: () => void;
}

// Define a basic interface for the tt object
interface TomTomSDK {
  map: (options: object) => TomTomMap;
}

declare global {
  interface Window {
    tt: TomTomSDK;
  }
}

const Map = () => {
  const mapElement = useRef(null);
  const map = useRef<TomTomMap | null>(null);

  useEffect(() => {
    const apiKey = 'ZFEe96gYAL4ZMqtz9oYzjSVUszQAoNjD';

    const initMap = () => {
      if (window.tt && mapElement.current && !map.current) {
        map.current = window.tt.map({
          key: apiKey,
          container: mapElement.current,
          center: [4.895168, 52.370216], // Amsterdam
          zoom: 10,
        });
      }
    };

    // Wait for the TomTom script to load
    if (!window.tt) {
      const script = document.querySelector('script[src*="tomtom"]');
      if (script) {
        script.addEventListener('load', initMap);
      }
    } else {
      initMap();
    }


    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      const script = document.querySelector('script[src*="tomtom"]');
      if (script) {
        script.removeEventListener('load', initMap);
      }
    };
  }, []);

  return <div id="map" ref={mapElement} style={{ height: '500px', width: '100%' }} />;
};

export default Map;
