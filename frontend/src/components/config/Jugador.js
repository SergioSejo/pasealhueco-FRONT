import React from 'react';

import luffy from '../../images/Luffy.jpeg';

export const Jugador = () => {
	const handleEditJugador = () => {};

	return (
		<>
			<div className="form-foto-jugador">
				<form onSubmit={handleEditJugador} className="form-jugador">
					<div>
						<label>Name</label>
						<input
							type="text"
							placeholder="Name"
							name="name"
							className="auth__input"
							autoComplete="off"
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							name="email"
							type="email"
							className="auth__input"
							autoComplete="off"
							placeholder="name@example.com"
						/>
					</div>
					<div>
						<label>Edad</label>
						<input
							name="age"
							type="text"
							className="auth__input"
							autoComplete="off"
							placeholder="30"
						/>
					</div>
					<div>
						<label>Pie</label>
						<input
							name="foot"
							type="text"
							className="auth__input"
							autoComplete="off"
							placeholder="Derecho/Izquierdo/Ambidiestro"
						/>
					</div>
					<div>
						<label>Equipo</label>
						<input
							name="team"
							type="text"
							className="auth__input"
							autoComplete="off"
							placeholder="Sad Eyes"
						/>
					</div>
					<button type="submit" className="btn btn-primary btn-block">
						Modificar datos
					</button>
				</form>
			</div>
			<div className="form-foto-jugador">
				<img
					src={luffy}
					alt="luffy"
					width="500"
					height="500"
					className="center"
					rounded="true"
				/>
			</div>
		</>
	);
};
