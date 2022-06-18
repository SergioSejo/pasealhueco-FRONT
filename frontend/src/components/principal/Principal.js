import React from 'react';
import { useSelector } from 'react-redux';

import { Menu } from '../ui/Menu';
import { Jornada } from './Jornada';
import { Equipo } from './Equipo';
import { menuOptions } from '../../helpers/menuOptions';

export const Principal = () => {
	const { optionActive } = useSelector((state) => state.menu);

	return (
		<>
			<div className="totalHeight">
				<Menu />
				{optionActive === menuOptions.jornadas ? <Jornada /> : <Equipo />}
			</div>
		</>
	);
};
