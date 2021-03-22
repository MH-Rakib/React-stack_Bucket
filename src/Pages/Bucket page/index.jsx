import brandlogo from '../../Assets/brand-logo/brand-logo.svg';
import deleteIcon from '../../Assets/icons/delete-icon.png';
import editIcon from '../../Assets/icons/edit-icon.png';
import moremenu from '../../Assets/icons/more-menu.png';
import plusIcon from '../../Assets/icons/plus-icon.png';
import printerIcon from '../../Assets/icons/printer-icon.png';

function BucketPage() {
    return (
        <div>
            {/* Navigation bar */}
            <nav className="nav __shadow--lg">
                <div className="container nav__container">
                    <div className="nav__brand">
                        <img className="nav__brand-logo" src={brandlogo} alt="Brand Logo" />
                        <h1 className="nav__brand-name">Stack Learner</h1>
                    </div>
                    <div className="nav__menu nav__menu--right">
                        <div className="nav__menu-items">
                            <img className="nav__menu-icon" src={moremenu} alt="More Menu" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Page Content  */}
            <main className="container __margin--ylg">
                {/* Add New Bucket  */}
                <div className="section add-item __shadow--sm">
                    <div className="add-item__relative">
                        <div className="add-item__input">
                            <img
                                className="add-item__icon"
                                src={plusIcon}
                                alt="Create New Bucket"
                            />
                            <input
                                className="add-item__input-field"
                                type="text"
                                placeholder="Create New Bucket"
                            />
                        </div>
                    </div>
                </div>

                {/* Bucket List Table  */}
                <div className="section table __shadow--sm">
                    <table className="table__table">
                        <thead className="table__thead">
                            <tr>
                                <th>Bucket</th>
                                <th>Created</th>
                                <th>Costs</th>
                                <th className="align-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table__tbody">
                            <tr>
                                <th>Holiday Shopping</th>
                                <th className="text-secondary">4 April 2020</th>
                                <th>4850 BDT</th>
                                <th className="align-right">
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={editIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={deleteIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={printerIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>Holiday Shopping</th>
                                <th className="text-secondary">4 April 2020</th>
                                <th>4850 BDT</th>
                                <th className="align-right">
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={editIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={deleteIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={printerIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>Holiday Shopping</th>
                                <th className="text-secondary">4 April 2020</th>
                                <th>4850 BDT</th>
                                <th className="align-right">
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={editIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={deleteIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={printerIcon}
                                            alt="Edit"
                                        />
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
export default BucketPage;
