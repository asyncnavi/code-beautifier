import logo from '../assets/images/logo.ico'
import "./titlebar.scss"

export default function TitleBar({title}) {
    return (
        <div className="title_bar_container">
            <div className="title_bar_title">
                <span><img alt="logo" src={logo} />{title}</span>
            </div>
            <div className="title_bar_btn_container">
                <div className="title_bar_btn red" />
                <div className="title_bar_btn yellow" />
                <div className="title_bar_btn green" />
            </div>
        </div>
    )
}