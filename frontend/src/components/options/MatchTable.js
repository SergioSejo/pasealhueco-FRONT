import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import matchService from '../../services/matchService';

export const MatchTable = (year) => {
	const matchServices = new matchService();
	const [matches, setMatches] = useState([]);

	useEffect(() => {
		const getMatches = async () => {
			const matchesByYear = await matchServices.getByYear(year.year);
			setMatches(matchesByYear?.body);
		};
		getMatches();
	}, [year.year]);

	//funcion para pintar las filas
	const renderTableHeader = () => {
		let bodyTR = [];
		if (matches) {
			matches.forEach((element) => {
				let matchDate = new Date(parseFloat(element.date)).toLocaleDateString(
					'es'
				);
				let matchHour = new Date(parseFloat(element.date)).toLocaleTimeString();
				bodyTR.push(
					<tr key={element.date}>
						<td>{bodyTR.length + 1}</td>
						<td>{element.team_1.team.name}</td>
						<td>{element.team_2.team.name}</td>
						<td>
							{element.team_1.score}-{element.team_2.score}
						</td>
						<td>{matchDate}</td>
						<td>{matchHour}</td>
						<td>{element.place}</td>
					</tr>
				);
			});
			return bodyTR;
		}
	};

	return (
		<>
			<Table responsive="sm" striped>
				<thead>
					<tr>
						<th>Partido</th>
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
