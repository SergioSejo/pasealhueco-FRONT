import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import jornadaService from '../../services/jornadaService';

export const JornadaTable = (year) => {
	const jornadaServices = new jornadaService();
	const [jornadas, setJornadas] = useState([]);

	useEffect(() => {
		getJornadas();
	});

	const getJornadas = async () => {
		const algo = await jornadaServices.getByYear(year);
		console.log('Jornadas', algo.body.jornadas);
	};

	//setJornadas(jornadaServices.getByYear(año));

	//funcion para pintar las filas
	/*const renderTableHeader = () => {
		if (jornadas.length === 0) {
			return (
				<tr>
					<td>1</td>
					<td>Sad Eyes</td>
					<td>Q3</td>
					<td>3-1</td>
					<td>23-06-2022</td>
					<td>16:00</td>
					<td>Campo 2 Moratalaz</td>
				</tr>
			);
		}
	};*/

	return (
		<>
			<Table responsive="sm">
				<thead>
					<tr>
						<th>Jornada</th>
						<th>Local</th>
						<th>Visitante</th>
						<th>Resultado</th>
						<th>Fecha</th>
						<th>Hora</th>
						<th>Campo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Sad Eyes</td>
						<td>Q3</td>
						<td>3-1</td>
						<td>23-06-2022</td>
						<td>16:00</td>
						<td>Campo 2 Moratalaz</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
};
