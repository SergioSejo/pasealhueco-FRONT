import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { MatchTable } from './MatchTable';

export const Match = () => {
	const [option, setOption] = useState('2021');

	const onSelectOption = (k) => {
		setOption(k);
	};

	return (
		<>
			<div className="matches_cabecera">
				<span>Introduzca el año para ver los partidos: </span>
				<DropdownButton
					id="dropdown-basic-button"
					title={option}
					onSelect={onSelectOption}
					className="matches_dropdown"
				>
					<Dropdown.Item eventKey="2016">2016</Dropdown.Item>
					<Dropdown.Item eventKey="2017">2017</Dropdown.Item>
					<Dropdown.Item eventKey="2018">2018</Dropdown.Item>
					<Dropdown.Item eventKey="2019">2019</Dropdown.Item>
					<Dropdown.Item eventKey="2020">2020</Dropdown.Item>
					<Dropdown.Item eventKey="2021">2021</Dropdown.Item>
				</DropdownButton>
			</div>
			<div>
				<MatchTable year={option} />
			</div>
		</>
	);
};
