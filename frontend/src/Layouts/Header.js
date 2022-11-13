const Header = () => {
    return (
        <Fragment>
            <div className="container">
                <nav className="navbar is-light" role="navigation"
                    aria-label="main navigation"/>

                    <div className="navbar-brand">
                    <a className="navbar-item has-background-success" href="#"/>
                        <h1 className="has-text-white">GeeksforGeeks</h1>
                    </div>

                    <a role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item"> Home </a>

                        <a className="navbar-item"> Blogs </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link"> More </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item"> About us </a>
                            <a className="navbar-item"> Tutorials </a>
                            <a className="navbar-item"> Practice </a>
                        </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-success">
                            <strong>Sign up</strong>
                            </a>
                            <a className="button is-light"/> Log in </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </Fragment>
           
        


    )
}
export default Header;

	