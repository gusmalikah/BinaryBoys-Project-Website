import "../index.css"
function Footer(){
    return(
        <footer>
            <h1>Developers</h1>
            <div className="container">
                <div className="dev-1">
                    <img alt="" src="../Images/n.png" className="small-img"/>
                    <h3>Nils Dunlop</h3>
                </div>
                <div>
                    <img alt="" src="../Images/h.png" className="small-img"/>
                    <h3>Malik Hannan</h3>
                </div>
                <div>
                    <img alt="" src="../Images/w.png" className="small-img"/>
                    <h3>Malik Waleed</h3>
                </div>
            </div>
        </footer>
    )
}
export default Footer