import React from 'react';
import { IconButton  } from "@material-ui/core";
import { PlayCircleOutline, FileCopyOutlined} from "@material-ui/icons";
import html from '../assets/images/html.svg'
import css from '../assets/images/css.svg'
import javascript from '../assets/images/javascript.svg'
import react_logo from "../assets/images/react.png"
import "./toolbar.scss";


/*
    @author : Navraj
    @modified : 27 Nov, 2020
 */

const languages = [
    {
        value : "xml",
        img:html
    },
    {
        value : "css",
        img : css
    },
    {
        value : "javascript",
        img : javascript
    },
    {
        value : "jsx",
        img : react_logo
    },

];

function Toolbar(props) {

    const {beautifierFunc,language,onLanguageChange,copyToClipboardFunc } = props;

    return(
        <div className="tool_bar_container">
            <div className="language_selector_container">
                {
                    languages.map( (item,index) => {
                        return(
                            <div key={index} className = { language === item.value ? "active" : "" } data-language={item.value}   onClick = { (e) =>  onLanguageChange(e)  }  style={{ backgroundImage : `url(${item.img})` }}  />
                        )
                    } )
                }

            </div>
            <div className = "title_bar_actions">
                <IconButton onClick={copyToClipboardFunc}>
                    <FileCopyOutlined htmlColor="#fff"/>
                </IconButton>
                <IconButton onClick={beautifierFunc}>
                    <PlayCircleOutline htmlColor="#fff"/>
                </IconButton>
            </div>
        </div>
    )
}
export default Toolbar;
