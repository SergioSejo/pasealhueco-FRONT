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

	//render table
	const renderTable = () => {
		let journey = 1;
		let arrayJourney = [];
		let allTables = [];
		let journeyTable;
		let maxJourney = Math.max(...matches.map((o) => o.journey));
		if (matches.length === 0) {
			return <h1 className="journey_center">No hay partidos disponibles</h1>;
		}
		while (journey <= maxJourney) {
			arrayJourney = matches.filter((m) => {
				return m.journey === journey;
			});

			journeyTable = (
				<div key={'div-journey' + journey}>
					<h2 key={'h2-' + journey} className="journey_center">
						Jornada {journey}
					</h2>
					<Table key={'table-' + journey} responsive="sm" striped>
						{renderTableHeader(journey)}
						{renderTableRows(journey, arrayJourney)}
					</Table>
				</div>
			);
			allTables.push(journeyTable);
			journey++;
		}

		return allTables;
	};

	//render table header
	const renderTableHeader = (journey) => {
		let tableHeader = (
			<thead key={'thead-' + journey}>
				<tr key={'tr-' + journey}>
					<th key={'th-partido-' + journey}>Partido</th>
					<th key={'th-local-' + journey}>Local</th>
					<th key={'th-visitante-' + journey}>Visitante</th>
					<th key={'th-resultado-' + journey}>Resultado</th>
					<th key={'th-fecha-' + journey}>Fecha</th>
					<th key={'th-hora-' + journey}>Hora</th>
					<th key={'th-campo-' + journey}>Campo</th>
				</tr>
			</thead>
		);
		return tableHeader;
	};

	//render rows
	const renderTableRows = (journey, arrayJourney) => {
		let bodyTR = [];
		let distinctRow;
		if (arrayJourney) {
			arrayJourney.forEach((element) => {
				let matchDate = new Date(parseFloat(element.date)).toLocaleDateString(
					'es'
				);
				let matchHour = new Date(parseFloat(element.date)).toLocaleTimeString();
				distinctRow = journey + '-' + (bodyTR.length + 1);
				bodyTR.push(
					<tr key={'tr-' + distinctRow}>
						<td key={'td-partido-' + distinctRow}>{bodyTR.length + 1}</td>
						<td key={'td-local-' + distinctRow}>{element.team_1.team.name}</td>
						<td key={'td-visitante-' + distinctRow}>
							{element.team_2.team.name}
						</td>
						<td key={'td-resultado-' + distinctRow}>
							{element.team_1.score}-{element.team_2.score}
						</td>
						<td key={'td-fecha-' + distinctRow}>{matchDate}</td>
						<td key={'td-hora-' + distinctRow}>{matchHour}</td>
						<td key={'td-campo-' + distinctRow}>{element.place}</td>
					</tr>
				);
			});
			return <tbody>{bodyTR}</tbody>;
		}
	};

	return <>{renderTable()}</>;
};
