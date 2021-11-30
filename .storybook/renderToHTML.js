import { renderToStaticMarkup } from 'react-dom/server'
import { AllHtmlEntities } from 'html-entities'
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'
const entities = new AllHtmlEntities()

export default (story) => {
	let html = prettier.format(entities.decode(renderToStaticMarkup(story())), {
		parser: 'html',
		plugins: [HTMLParser],
	});
	var output = html;
	return output;
}
  