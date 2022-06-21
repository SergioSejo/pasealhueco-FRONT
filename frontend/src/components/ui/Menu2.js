import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import { menuOptions } from '../../helpers/menuOptions';
import { menuChangeOptionActive } from '../../actions/menu';

export const Menu2 = () => {
	const dispatch = useDispatch();
	const { optionActive } = useSelector((state) => state.menu);

	const handleOptionActive = (option) => {
		dispatch(menuChangeOptionActive(option));
	};
	return (
		<>
			<ListGroup as="ul">
				<ListGroup.Item
					action
					className={optionActive === menuOptions.resumen ? 'active' : ''}
					onClick={(e) => {
						e.preventDefault();
						handleOptionActive(menuOptions.resumen);
					}}
				>
					Resumen
				</ListGroup.Item>
				<ListGroup.Item
					action
					className={optionActive === menuOptions.equipos ? 'active' : ''}
					onClick={(e) => {
						e.preventDefault();
						handleOptionActive(menuOptions.equipos);
					}}
				>
					Equipo
				</ListGroup.Item>
				<ListGroup.Item
					action
					className={optionActive === menuOptions.jornadas ? 'active' : ''}
					onClick={(e) => {
						e.preventDefault();
						handleOptionActive(menuOptions.jornadas);
					}}
				>
					Jornadas
				</ListGroup.Item>
				<ListGroup.Item
					action
					className={optionActive === menuOptions.estadisticas ? 'active' : ''}
					onClick={(e) => {
						e.preventDefault();
						handleOptionActive(menuOptions.estadisticas);
					}}
				>
					Estadísticas
				</ListGroup.Item>
			</ListGroup>
		</>
	);
};
