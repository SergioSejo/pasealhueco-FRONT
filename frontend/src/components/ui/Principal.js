import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from './Header';
import { Menu } from './Menu';
import { Resumen } from '../options/Resumen';
import { Equipo } from '../options/Equipo';
import { Match } from '../options/Match';
import { Estadisticas } from '../options/Estadisticas';
import { Configuracion } from '../options/Configuracion';
import { menuOptions } from '../../helpers/menuOptions';

export const Principal = () => {
	const { optionActive } = useSelector((state) => state.menu);

	const variable = false;

	return (
		<>
			<Header />
			<Menu />
			{variable &&
				(optionActive === menuOptions.resumen ? (
					<Resumen />
				) : optionActive === menuOptions.equipo ? (
					<Equipo />
				) : optionActive === menuOptions.matches ? (
					<Match />
				) : optionActive === menuOptions.estadisticas ? (
					<Estadisticas />
				) : (
					<Configuracion />
				))}
		</>
	);
};
