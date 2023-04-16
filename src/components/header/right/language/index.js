export default function Language(){
    return(
        <div className="menu">
        <input type="text" list="inbox" placeholder="english" role="combobox" />               
            <datalist id="inbox">
                <option >العربية</option>
                <option >український</option>
                <option >Việt</option>
                <option >ελληνικά</option>
                <option >English</option>
                <option>Español</option>
                <option>Dansk</option>
                <option >Tiếng</option>
                <option >український</option>
                <option >简体中文</option>
            </datalist>
            </div>
    )
}