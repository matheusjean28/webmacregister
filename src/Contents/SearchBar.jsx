import './ContentsStyles/SearchBar.css'
export default function SearchBar() {
    return (
        <>
            <div className="SearchBarConteiner">
                <select name="#" id="Categ">
                    <option value="Model">Model</option>
                    <option value="Client">Client</option>
                    <option value="Problem">Problem</option>
                    <option value="Already Used">Already Used</option>
                </select>

                <input id="SearchBarTextInput" type="text" placeholder='Input Mac'/>
                <button id="SubmitSearchButton" className="SubmitSearch" type="submit">Search</button>
            </div>

        </>
    )
}