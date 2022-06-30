import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';

import { Resumen } from '../options/Resumen';
import { Equipo } from '../options/Equipo';
import { Match } from '../options/Match';
import { Estadisticas } from '../options/Estadisticas';
import { menuOptions } from '../../helpers/menuOptions';
import { menuChangeOptionActive } from '../../actions/menu';

export const Menu = () => {
	const dispatch = useDispatch();

	const [key, setKey] = useState(menuOptions.resumen);

	const onSelectTab = (k) => {
		setKey(k);
		dispatch(menuChangeOptionActive(k));
	};
	return (
		<>
			<Tabs id="tabs-menu" activeKey={key} onSelect={onSelectTab}>
				<Tab eventKey={menuOptions.resumen} title="Resumen">
					<Resumen />
				</Tab>
				<Tab eventKey={menuOptions.equipo} title="Equipo">
					<Equipo />
				</Tab>
				<Tab eventKey={menuOptions.matches} title="Matches">
					<Match />
				</Tab>
				<Tab eventKey={menuOptions.estadisticas} title="Estadísticas">
					<Estadisticas />
				</Tab>
			</Tabs>
		</>
	);
};
