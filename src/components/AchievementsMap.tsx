import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Location {
  name: string;
  coordinates: [number, number]; // [lat, lng]
  achievement: string;
}

const locations: Location[] = [
  {
    name: "KIIRA MOTORS CORPORATION",
    coordinates: [0.3527, 32.6150],
    achievement: "Your achievement at Kiira Motors here..."
  },
  {
    name: "SUNBIRD AI",
    coordinates: [0.3483, 32.6052],
    achievement: "Your achievement at Sunbird AI here..."
  },
  {
    name: "MAKERERE UNIVERSITY",
    coordinates: [0.3350, 32.5675],
    achievement: "Your achievement at Makerere University here..."
  },
  {
    name: "UNIVERSITY OF CAPE TOWN",
    coordinates: [-33.9575, 18.4606],
    achievement: "Your achievement at University of Cape Town here..."
  }
];

const AchievementsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [25, -5], // Center between Uganda and South Africa
      zoom: 3,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add markers for each location
    locations.forEach((location) => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.width = '16px';
      el.style.height = '16px';
      el.style.backgroundColor = 'hsl(var(--primary))';
      el.style.borderRadius = '50%';
      el.style.border = '3px solid hsl(var(--background))';
      el.style.cursor = 'pointer';
      el.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
      el.style.transition = 'transform 0.2s ease';

      el.addEventListener('mouseenter', (e) => {
        el.style.transform = 'scale(1.5)';
        setHoveredLocation(location);
        setTooltipPosition({ x: e.clientX, y: e.clientY });
      });

      el.addEventListener('mousemove', (e) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
        setHoveredLocation(null);
      });

      new mapboxgl.Marker(el)
        .setLngLat([location.coordinates[1], location.coordinates[0]]) // Mapbox uses [lng, lat]
        .addTo(map.current!);
    });

    setIsMapInitialized(true);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapInitialized) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-mono text-sm text-muted-foreground mb-4">Achievements Map</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Where I've Made an Impact</h3>
          
          <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-4 text-sm">
              To display the map, please enter your Mapbox public token. 
              Get one at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
            </p>
            <input
              type="text"
              placeholder="Enter Mapbox public token..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-md font-mono text-sm mb-4"
            />
            <button
              onClick={initializeMap}
              disabled={!mapboxToken}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
            >
              Load Map
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-sm text-muted-foreground mb-4">Achievements Map</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">Where I've Made an Impact</h3>
        
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-border">
          <div ref={mapContainer} className="absolute inset-0" />
          
          {/* Hover Tooltip */}
          {hoveredLocation && (
            <div
              className="fixed z-50 max-w-xs bg-card border border-border rounded-lg p-4 shadow-lg pointer-events-none"
              style={{
                left: tooltipPosition.x + 15,
                top: tooltipPosition.y + 15,
              }}
            >
              <h4 className="font-bold text-sm mb-2">{hoveredLocation.name}</h4>
              <p className="text-muted-foreground text-xs">{hoveredLocation.achievement}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AchievementsMap;
