import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

import logo from '../../images/icono.png';

export const Menu = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);

	const handleOptionActive = (option) => {
		//dispatch(startLogout());
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
							onClick={handleOptionActive('principal')}
							className={'active'}
						>
							Principal
						</a>
					</div>

					<div>
						<a href="/principal" onClick={handleOptionActive('principal')}>
							Equipos
						</a>
						<a href="/principal" onClick={handleOptionActive('jornadas')}>
							Jornadas
						</a>
						<a href="/principal" onClick={handleOptionActive('estadisticas')}>
							Estadísticas
						</a>
					</div>

					<div>
						<a href="/principal" onClick={handleOptionActive('config')}>
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
