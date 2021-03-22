// Assets
import brandlogo from '../../Assets/brand-logo/brand-logo.svg';
import moreMenuIcon from '../../Assets/icons/more-menu.png';

function NotFound() {
    return (
        <div>
            <nav className="nav __shadow--lg">
                <div className="container nav__container">
                    <div className="nav__brand">
                        <img className="nav__brand-logo" src={brandlogo} alt="Brand Logo" />
                        <h1 className="nav__brand-name">Stack Learner</h1>
                    </div>
                    <div className="nav__menu nav__menu--right">
                        <div className="nav__menu-items">
                            <img className="nav__menu-icon" src={moreMenuIcon} alt="More Menu" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Page Content  */}
            <main className="container __margin--ylg">
                <h1 className="nav__brand-name">404 page not found</h1>
            </main>
        </div>
    );
}
export default NotFound;
