import { renderToStaticMarkup } from 'react-dom/server'
import { decode } from 'html-entities'
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'

export default (story) => {
	let html = prettier.format(decode(renderToStaticMarkup(story)), {
		parser: 'html',
		plugins: [HTMLParser],
	});
	var output = html;
	return output;
}
