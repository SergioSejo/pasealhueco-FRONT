import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { JornadaTable } from './JornadaTable';

export const Jornada = () => {
	const [option, setOption] = useState('2021');

	const onSelectOption = (k) => {
		setOption(k);
	};

	return (
		<>
			<div className="jornadas_cabecera">
				<span>Introduzca el año para ver las jornadas: </span>
				<DropdownButton
					id="dropdown-basic-button"
					title={option}
					onSelect={onSelectOption}
					className="jornadas_dropdown"
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
				<JornadaTable year={option} />
			</div>
		</>
	);
};
