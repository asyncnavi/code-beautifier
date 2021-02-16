import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/jsx/jsx";
import "codemirror/addon/wrap/hardwrap"
import "codemirror/addon/edit/matchbrackets"
import "codemirror/addon/edit/matchtags"
import "codemirror/addon/edit/closebrackets"
import "codemirror/addon/hint/anyword-hint"
import "codemirror/addon/hint/xml-hint"
import "codemirror/addon/hint/html-hint"
import "codemirror/addon/hint/css-hint"
import "codemirror/addon/hint/javascript-hint"
import "codemirror/addon/display/placeholder"
import { Controlled } from "react-codemirror2";

const Editor = (props) => {
    return (
        <div>
            <Controlled style = {{fontSize : "3rem !important"}} onBeforeChange={props.onChange} value={props.code} options={
                {
                    lint: true,
                    mode:props.language,
                    lineNumbers :true,
                    theme:"material",
                    lineWrapping:props.wrapLines,
                    matchBrackets: true,
                    matchTags : true,
                    autoCloseBrackets : true,
                    tabSize : 4,
                    placeholder  : `1.Paste Your code here..\n2.Click on run button\n3.See the magic.🎉`

                }
            } />
        </div>
    )
}
export default Editor