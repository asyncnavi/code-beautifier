import beautify from 'js-beautify';
import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';
import parserHtml from 'prettier/parser-html';

const HTML = 'xml';
const CSS = 'css';
const JS = 'javascript';
const JSX = 'jsx';

class Beautifier {
    constructor() {
        this.beautify = this.beautify.bind(this);
        this.HTML_BEAUTIFIER = this.HTML_BEAUTIFIER.bind(this);
        this.CSS_BEAUTIFIER = this.CSS_BEAUTIFIER.bind(this);
        this.JS_BEAUTIFIER = this.JS_BEAUTIFIER.bind(this);
        this.JSX_BEAUTIFIER = this.JSX_BEAUTIFIER.bind(this)
    }


    beautify(lang, code) {

        switch (lang) {
            case HTML:
                return this.HTML_BEAUTIFIER(code);
                break;
            case CSS:
                return this.CSS_BEAUTIFIER(code);
                break;
            case JS:
                return this.JS_BEAUTIFIER(code);
                break;
            case JSX:
                return this.JSX_BEAUTIFIER(code);
                break;
            default:
                console.log("nothing to formate here");
                break;
        }
    }

    HTML_BEAUTIFIER(code) {
        return beautify.html(code);
    }
    CSS_BEAUTIFIER(code) {
        return beautify.css(code);
    }
    JS_BEAUTIFIER(code) {
        return beautify.js(code);
    }
    JSX_BEAUTIFIER(code) {
        return prettier.format(code, {
            parser: "babel",
            plugins: [parserBabel, parserHtml]
        })
    }

}

export default Beautifier;