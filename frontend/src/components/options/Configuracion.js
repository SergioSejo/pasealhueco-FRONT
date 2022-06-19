import React from 'react';

import { Jugador } from '../config/Jugador';

export const Configuracion = () => {
	return (
		<>
			<div className="contenido">
				<div className="contenido-options">
					<h1>Configuracion</h1>
					<button>Datos personales</button>
					<button>Contraseña</button>
					<button>Editar equipo</button>
					<button>Otros</button>
				</div>
				<div className="contenido-config">
					<Jugador />
				</div>
			</div>
		</>
	);
};
