import React from 'react';
import { useSelector } from 'react-redux';

import { Menu } from './Menu';
import { Resumen } from '../options/Resumen';
import { Equipo } from '../options/Equipo';
import { Jornada } from '../options/Jornada';
import { Estadisticas } from '../options/Estadisticas';
import { Configuracion } from '../options/Configuracion';
import { menuOptions } from '../../helpers/menuOptions';

export const Principal = () => {
	const { optionActive } = useSelector((state) => state.menu);

	return (
		<>
			<div className="totalHeight">
				<Menu />
				{optionActive === menuOptions.resumen ? (
					<Resumen />
				) : optionActive === menuOptions.equipos ? (
					<Equipo />
				) : optionActive === menuOptions.jornadas ? (
					<Jornada />
				) : optionActive === menuOptions.estadisticas ? (
					<Estadisticas />
				) : (
					<Configuracion />
				)}
			</div>
		</>
	);
};
