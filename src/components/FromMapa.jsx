import React from 'react';
import '../style/Map.css';

function FromMapa() {
  return (
    <div className="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1416520.6319166876!2d-84.57955128499844!3d10.742656589411055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1726518589143!5m2!1ses-419!2scr" 
        width="600" 
        height="450" 
        className="mapa"
        title="Map"
      >
      </iframe>
    </div>
  );
}

export default FromMapa;
