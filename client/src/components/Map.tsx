/**
 * GOOGLE MAPS FRONTEND INTEGRATION - ESSENTIAL GUIDE
 *
 * USAGE FROM PARENT COMPONENT:
 * ======
 *
 * const mapRef = useRef<google.maps.Map | null>(null);
 *
 * <MapView
 *   initialCenter={{ lat: 40.7128, lng: -74.0060 }}
 *   initialZoom={15}
 *   onMapReady={(map) => {
 *     mapRef.current = map; // Store to control map from parent anytime, google map itself is in charge of the re-rendering, not react state.
 * </MapView>
 *
 * ======
 * Available Libraries and Core Features:
 * -------------------------------
 * 📍 MARKER (from `marker` library)
 * - Attaches to map using { map, position }
 * new google.maps.marker.AdvancedMarkerElement({
 *   map,
 *   position: { lat: 37.7749, lng: -122.4194 },
 *   title: "San Francisco",
 * });
 *
 * -------------------------------
 * 🏢 PLACES (from `places` library)
 * - Does not attach directly to map; use data with your map manually.
 * const place = new google.maps.places.Place({ id: PLACE_ID });
 * await place.fetchFields({ fields: ["displayName", "location"] });
 * map.setCenter(place.location);
 * new google.maps.marker.AdvancedMarkerElement({ map, position: place.location });
 *
 * -------------------------------
 * 🧭 GEOCODER (from `geocoding` library)
 * - Standalone service; manually apply results to map.
 * const geocoder = new google.maps.Geocoder();
 * geocoder.geocode({ address: "New York" }, (results, status) => {
 *   if (status === "OK" && results[0]) {
 *     map.setCenter(results[0].geometry.location);
 *     new google.maps.marker.AdvancedMarkerElement({
 *       map,
 *       position: results[0].geometry.location,
 *     });
 *   }
 * });
 *
 * -------------------------------
 * 📐 GEOMETRY (from `geometry` library)
 * - Pure utility functions; not attached to map.
 * const dist = google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
 *
 * -------------------------------
 * 🛣️ ROUTES (from `routes` library)
 * - Combines DirectionsService (standalone) + DirectionsRenderer (map-attached)
 * const directionsService = new google.maps.DirectionsService();
 * const directionsRenderer = new google.maps.DirectionsRenderer({ map });
 * directionsService.route(
 *   { origin, destination, travelMode: "DRIVING" },
 *   (res, status) => status === "OK" && directionsRenderer.setDirections(res)
 * );
 *
 * -------------------------------
 * 🌦️ MAP LAYERS (attach directly to map)
 * - new google.maps.TrafficLayer().setMap(map);
 * - new google.maps.TransitLayer().setMap(map);
 * - new google.maps.BicyclingLayer().setMap(map);
 *
 * -------------------------------
 * ✅ SUMMARY
 * - “map-attached” → AdvancedMarkerElement, DirectionsRenderer, Layers.
 * - “standalone” → Geocoder, DirectionsService, DistanceMatrixService, ElevationService.
 * - “data-only” → Place, Geometry utilities.
 */

/// <reference types="@types/google.maps" />
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

/** 
 * --- COMPONENTE MAPVIEW ---
 */
interface MapViewProps {
  initialCenter: { lat: number; lng: number };
  initialZoom: number;
  className?: string;
  onMapReady?: (map: google.maps.Map) => void;
}

const MapView: React.FC<MapViewProps> = ({ initialCenter, initialZoom, className, onMapReady }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      // Priorizando a chave de ambiente do seu projeto
      const apiKey = import.meta.env.VITE_FRONTEND_FORGE_API_KEY || process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker,places,geocoding,geometry,routes`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const mapOptions: google.maps.MapOptions = {
        center: initialCenter,
        zoom: initialZoom,
        mapId: 'otica-life-map-id', // ID para habilitar marcadores avançados
        disableDefaultUI: false,
        zoomControl: true,
      };

      mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions);
      onMapReady?.(mapInstanceRef.current);
    };

    loadGoogleMaps();
  }, [initialCenter, initialZoom, onMapReady]);

  return <div ref={mapRef} className={className} />;
};

/** 
 * --- COMPONENTE PRINCIPAL LOCATION ---
 */
export default function Location() {
  // Coordenadas ajustadas para precisão máxima no número 308 em Mangabeira
  const oticaLocation = {lat: -7.16490, lng: -34.84234};

  const handleOpenGoogleMaps = () => {
    // URL formatada para abrir diretamente no ponto exato com marcador
    const url = `https://www.google.com/maps/search/?api=1&query=${oticaLocation.lat},${oticaLocation.lng}`;
    window.open(url, "_blank");
  };

  return (
    <section id="location" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
                Nossa <span className="text-[#FF8C00]">Localização</span>
              </h2>
              <p className="text-gray-400 text-lg font-body leading-relaxed">
                Visite nossa unidade em Mangabeira e conheça nossa curadoria exclusiva de armações premium.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF8C00]/10 p-3 rounded-lg">
                  <MapPin className="text-[#FF8C00] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Endereço</h4>
                  <p className="text-gray-400">Rua Comerciante Alfredo Ferreira da Rocha, 308</p>
                  <p className="text-gray-400">Mangabeira, João Pessoa - PB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FF8C00]/10 p-3 rounded-lg">
                  <Clock className="text-[#FF8C00] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Horário</h4>
                  <p className="text-gray-400">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-gray-400">Sábado: 08:00 às 13:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FF8C00]/10 p-3 rounded-lg">
                  <Phone className="text-[#FF8C00] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Contato</h4>
                  <p className="text-gray-400">(83) 99153-6110</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleOpenGoogleMaps}
              className="flex items-center gap-2 bg-[#FF8C00] hover:bg-[#e67e00] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              <Navigation className="w-5 h-5" />
              Abrir no Google Maps
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[500px]"
          >
            <MapView 
              initialCenter={oticaLocation}
              initialZoom={17}
              className="w-full h-full"
              onMapReady={(map) => {
                // Forçando a criação do marcador assim que o mapa carregar
                if (window.google && window.google.maps) {
                  new window.google.maps.Marker({
                    position: oticaLocation,
                    map: map,
                    title: "Ótica Life",
                    animation: window.google.maps.Animation.DROP
                  });
                }
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}