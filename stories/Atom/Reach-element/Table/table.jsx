import React from 'react';
import './table.scss';

const TableScroll = ({ tableType, children }) => (tableType == 'scroll' ?
	<div className="scroll" tabindex="0">
		{children}
	</div>
	: children
);

export const variant_options = {
	default: "",
	striped: "striped",
	border: "border",
};

export const variant_options1 = {
	large: "",
	small: "small",
};

export const variant_options2 = {
	auto: "",
	stacked: "stacked",
  scroll: "scroll",
};

export const TableTag = ({ text, tdtext, details, variant, size, responsive, ...args }) => {
	return (
		<TableScroll tableType={responsive}>
      {variant === 'default' && size === 'large' && responsive === 'auto'
      ? (
        <table>
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
      )
      : (
        <table className={[`${variant_options[`${variant}`]}`, `${variant_options1[`${size}`]}`, `${variant_options2[`${responsive}`]}`].join(` `)}>
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
      )}
		</TableScroll>
	);
};

TableTag.defaultProps = {
	variant: 'default',
	size: 'large',
	responsive: 'auto',
};
