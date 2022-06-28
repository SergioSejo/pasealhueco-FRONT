import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import jornadaService from '../../services/jornadaService';

export const JornadaTable = (year) => {
	const jornadaServices = new jornadaService();
	const [jornadas, setJornadas] = useState([]);

	useEffect(() => {
		const getJornadas = async () => {
			const jornadasPorAño = await jornadaServices.getByYear(year.year);
			console.log('jornadasPorAño: ', jornadasPorAño);
			setJornadas(jornadasPorAño?.body);
		};
		getJornadas();
	}, [year.year]);

	//funcion para pintar las filas
	const renderTableHeader = () => {
		let bodyTR = [];
		jornadas.forEach((element) => {
			//Las fechas dan guerra, mirar si guardar en otro formato y no string
			bodyTR.push(
				<tr key={element.matchDate}>
					<td>{bodyTR.length + 1}</td>
					<td>{element.team_1.team.name}</td>
					<td>{element.team_2.team.name}</td>
					<td>
						{element.team_1.score}-{element.team_2.score}
					</td>
					<td>{element.matchDate}</td>
					<td>16:00</td>
					<td>{element.place}</td>
				</tr>
			);
		});
		return bodyTR;
	};

	return (
		<>
			<Table responsive="sm" striped>
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
				<tbody>{renderTableHeader()}</tbody>
			</Table>
		</>
	);
};
