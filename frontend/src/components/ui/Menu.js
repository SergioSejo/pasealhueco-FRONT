import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { menuChangeOptionActive } from '../../actions/menu';

import { menuOptions } from '../../helpers/menuOptions';

import logo from '../../images/icono.png';

export const Menu = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);
	const { optionActive } = useSelector((state) => state.menu);

	const handleOptionActive = (option) => {
		dispatch(menuChangeOptionActive(option));
	};

	const handleLogout = () => {
		dispatch(startLogout());
	};
	return (
		<>
			<div className="vertical-menu totalHeight">
				<div className="auth__logoCenter">
					<a href="/principal">
						<img
							src={logo}
							alt="LOGO"
							width="80"
							height="80"
							className="center"
							rounded="true"
						/>
					</a>
					<div className="marginName">Hola {name}!</div>
				</div>
				<div className="optionsMenu">
					<div>
						<a
							href="/principal"
							onClick={(e) => {
								e.preventDefault();
								handleOptionActive(menuOptions.principal);
							}}
							className={optionActive === menuOptions.principal ? 'active' : ''}
						>
							Principal
						</a>
					</div>

					<div>
						<a
							href="/principal"
							onClick={(e) => {
								e.preventDefault();
								handleOptionActive(menuOptions.equipos);
							}}
							className={optionActive === menuOptions.equipos ? 'active' : ''}
						>
							Equipos
						</a>
						<a
							href="/principal"
							onClick={(e) => {
								e.preventDefault();
								handleOptionActive(menuOptions.jornadas);
							}}
							className={optionActive === menuOptions.jornadas ? 'active' : ''}
						>
							Jornadas
						</a>
						<a
							href="/principal"
							onClick={(e) => {
								e.preventDefault();
								handleOptionActive(menuOptions.estadisticas);
							}}
							className={
								optionActive === menuOptions.estadisticas ? 'active' : ''
							}
						>
							Estadísticas
						</a>
					</div>

					<div>
						<a
							href="/principal"
							onClick={(e) => {
								e.preventDefault();
								handleOptionActive(menuOptions.config);
							}}
							className={optionActive === menuOptions.config ? 'active' : ''}
						>
							Configuración
						</a>
						<button className="btn btn-primary" onClick={handleLogout}>
							<i className="fas fa-sign-out-alt"></i>
							<span> Salir</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
