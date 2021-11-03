import React from 'react';
import './table.scss';

const TableScroll = ({ tableType, children }) => (tableType == 'scroll' ?
	<div className="scroll">
		{children}
	</div>
	: children
);

export const TableTag = ({ text, tdtext, details, variant, size, responsive, ...args }) => {
	return (
		<TableScroll tableType={responsive}>
			<table className={[`${variant}`, `${size}`, `${responsive}`].join(' ')}>
				<thead>
					<tr>
						<th>{text}</th>
						<th>{text}</th>
						<th>{text}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{tdtext}</td>
						<td>{tdtext}</td>
						<td>{details}</td>
					</tr>
					<tr>
						<td>{tdtext}</td>
						<td>{tdtext}</td>
						<td>{details}</td>
					</tr>
					<tr>
						<td>{tdtext}</td>
						<td>{tdtext}</td>
						<td>{details}</td>
					</tr>
					<tr>
						<td>{tdtext}</td>
						<td>{tdtext}</td>
						<td>{details}</td>
					</tr>
				</tbody>
			</table>
		</TableScroll>
	);
};

TableTag.defaultProps = {
	variant: 'default-style',
	size: 'large',
	responsive: 'auto',
};
