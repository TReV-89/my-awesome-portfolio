import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  name: string;
  coordinates: [number, number]; // [lat, lng]
  achievement: string;
}

const locations: Location[] = [
  {
    name: "KIIRA MOTORS CORPORATION",
    coordinates: [0.558156526614822, 33.23301646441791],
    achievement: `Increased Production Efficiency: Contributed to the production of 28 buses and increased production rate of 6.6-meter EV buses by 40%.     
                  Improved Battery Life: Developed an energy consumption model that reduced battery degradation costs by 33%.
                  Enhanced Testing: Conducted 13 successful dynamic tests without any powertrain or electrical engineering system failures.`
  },
  {
    name: "SUNBIRD AI",
    coordinates: [0.3483, 32.6052],
    achievement: `Language Model Development: Developed a language identification model with 99.93% accuracy and fine-tuned medical-domain large language models for offline applications.
                  Noise Classification: Developed a noise classification model with 81% accuracy and deployed it on Raspberry Pi modules using edge computing.
                  Model Improvement: Improved the factuality response of Sunflower, Uganda's first multilingual large language model, by over 15% through reinforcement learning.`
  },
  {
    name: "MAKERERE UNIVERSITY",
    coordinates: [0.3350, 32.5675],
    achievement: `Class Representative (2022-2025):
                  Collaborated with other class representatives to replace blackboards with whiteboards in over 15 classrooms.
                  Bachelor of Science in Electrical Engineering (2022-2025):
                  Maintained a CGPA above 4.0 (4.11).`
  },
  {
    name: "UNIVERSITY OF CAPE TOWN",
    coordinates: [-33.9575, 18.4606],
    achievement: `Certificate in Introduction to Java (CSC1016S, January 2020 - December 2020)
                  Certificate in Introduction to Python (CSC1017S, January 2020 - December 2020)`
  }
];

const AchievementsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const createCustomIcon = (isActive: boolean) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        width: ${isActive ? '20px' : '16px'};
        height: ${isActive ? '20px' : '16px'};
        background-color: ${isActive ? 'hsl(142, 76%, 36%)' : 'hsl(var(--primary))'};
        border-radius: 50%;
        border: 3px solid hsl(var(--background));
        box-shadow: 0 0 ${isActive ? '15px' : '10px'} rgba(0,0,0,0.3);
        transition: all 0.3s ease;
      "></div>`,
      iconSize: [isActive ? 20 : 16, isActive ? 20 : 16],
      iconAnchor: [isActive ? 10 : 8, isActive ? 10 : 8],
    });
  };

  const flyToLocation = (location: Location) => {
    if (map.current) {
      map.current.flyTo(location.coordinates, 12, {
        duration: 1.5
      });
      setActiveLocation(location.name);
    }
  };

  const resetView = () => {
    if (map.current) {
      map.current.flyTo([0, 25], 3, {
        duration: 1.5
      });
      setActiveLocation(null);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map with dark theme tiles
    map.current = L.map(mapContainer.current, {
      center: [0, 25], // Center between Uganda and South Africa
      zoom: 3,
      scrollWheelZoom: false,
    });

    // Use CartoDB dark theme tiles (free, no API key needed)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map.current);

    // Add markers for each location
    locations.forEach((location) => {
      const marker = L.marker(location.coordinates, {
        icon: createCustomIcon(false),
      }).addTo(map.current!);

      markersRef.current.set(location.name, marker);

      marker.on('mouseover', (e) => {
        setHoveredLocation(location);
        const containerPoint = map.current!.latLngToContainerPoint(e.latlng);
        const mapRect = mapContainer.current!.getBoundingClientRect();
        setTooltipPosition({
          x: mapRect.left + containerPoint.x,
          y: mapRect.top + containerPoint.y,
        });
      });

      marker.on('mousemove', (e) => {
        const containerPoint = map.current!.latLngToContainerPoint(e.latlng);
        const mapRect = mapContainer.current!.getBoundingClientRect();
        setTooltipPosition({
          x: mapRect.left + containerPoint.x,
          y: mapRect.top + containerPoint.y,
        });
      });

      marker.on('mouseout', () => {
        setHoveredLocation(null);
      });
    });

    return () => {
      map.current?.remove();
      map.current = null;
      markersRef.current.clear();
    };
  }, []);

  // Update marker icons when activeLocation changes
  useEffect(() => {
    markersRef.current.forEach((marker, name) => {
      marker.setIcon(createCustomIcon(name === activeLocation));
    });
  }, [activeLocation]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-sm text-muted-foreground mb-4">Achievements Map</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">Where I've Made an Impact</h3>
        
        {/* Location Links */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={resetView}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeLocation === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
            }`}
          >
            Overview
          </button>
          {locations.map((location) => (
            <button
              key={location.name}
              onClick={() => flyToLocation(location)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeLocation === location.name
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-border">
          <div ref={mapContainer} className="absolute inset-0" />
          
          {/* Active Location Info Panel */}
          {activeLocation && (
            <div className="absolute bottom-4 left-4 right-4 z-[1000] bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
              <h4 className="font-bold text-sm mb-2">{activeLocation}</h4>
              <p className="text-muted-foreground text-xs">
                {locations.find(l => l.name === activeLocation)?.achievement}
              </p>
            </div>
          )}
          
          {/* Hover Tooltip */}
          {hoveredLocation && !activeLocation && (
            <div
              className="fixed z-[1000] max-w-xs bg-card border border-border rounded-lg p-4 shadow-lg pointer-events-none"
              style={{
                left: tooltipPosition.x + 15,
                top: tooltipPosition.y + 15,
              }}
            >
              <h4 className="font-bold text-sm mb-2">{hoveredLocation.name}</h4>
              <p className="text-muted-foreground text-xs whitespace-pre-line">{hoveredLocation.achievement}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AchievementsMap;
