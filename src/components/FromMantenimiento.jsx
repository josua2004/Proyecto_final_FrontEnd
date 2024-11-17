import React from 'react';
import '../style/Mantenimiento.css';

function FormMantenimiento() {


  return (
    <div className="mantenimiento-container">
      <h1>Bienvenidos a la página de Mantenimiento de Homes-A/E</h1>

      {/* Formulario de Reporte de Mantenimiento */}
      <section className="reporte-mantenimiento">
        <h2>Reporte de Mantenimiento</h2>
        <form className="formulario-reporte">
          <label htmlFor="ubicacion">Ubicación de la Propiedad:</label>
          <input type="text" id="ubicacion" name="ubicacion" placeholder="Escriba la dirección o el número de propiedad" />

          <label htmlFor="descripcion">Descripción del Problema:</label>
          <textarea id="descripcion" name="descripcion" placeholder="Describa el problema"></textarea>

          <label htmlFor="urgencia">Urgencia:</label>
          <select id="urgencia" name="urgencia">
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>

          <label htmlFor="imagen">Adjuntar Imagen:</label>
          <input type="file" id="imagen" name="imagen" accept="image/*" />

          <button type="submit">Enviar Reporte</button>
        </form>
      </section>

      {/* Panel de Control de Solicitudes */}
      <section className="panel-solicitudes">
        <h2>Solicitudes de Mantenimiento</h2>
        <div className="solicitudes-lista">
          <div className="solicitud-item">
            <h3>Propiedad #123</h3>
            <p>Descripción: Fuga en la tubería</p>
            <p>Urgencia: Alta</p>
            <p>Estado: En proceso</p>
            <button>Ver Detalles</button>
          </div>
          {/* Aquí puedes mapear otras solicitudes */}
        </div>
      </section>

      {/* Asignación de Técnicos */}
      <section className="asignacion-tecnicos">
        <h2>Asignación de Técnicos</h2>
        <form className="formulario-asignacion">
          <label htmlFor="solicitud">Seleccionar Solicitud:</label>
          <select id="solicitud" name="solicitud">
            <option value="123">Propiedad #123 - Fuga en la tubería</option>
            {/* Aquí se pueden añadir más opciones de solicitudes */}
          </select>

          <label htmlFor="tecnico">Asignar Técnico:</label>
          <input type="text" id="tecnico" name="tecnico" placeholder="Nombre del técnico" />

          <label htmlFor="fecha">Fecha de Reparación:</label>
          <input type="date" id="fecha" name="fecha" />

          <button type="submit">Asignar Técnico</button>
        </form>
      </section>
    </div>
  );
}

export default FormMantenimiento;
