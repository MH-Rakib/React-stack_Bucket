// Assets
import brandlogo from '../../Assets/brand-logo/brand-logo.svg';
import deleteIcon from '../../Assets/icons/delete-icon.png';
import downArrowIcon from '../../Assets/icons/down-arrow-white-icon.png';
import leftArrowIcon from '../../Assets/icons/left-arrow-icon.png';
import moreMenuIcon from '../../Assets/icons/more-menu.png';
import plusIcon from '../../Assets/icons/plus-icon.png';
import printerIcon from '../../Assets/icons/printer-white-icon.png';
import rightArrowIcon from '../../Assets/icons/right-arrow-icon.png';

function BucketDetails() {
    return (
        <div>
            {/* Navigation Bar */}
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
                {/* Add Item */}
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
                        <div className="add-item__filter-overlay hide">
                            <ul className="add-item__filter-list">
                                <li className="add-item__filter-item">
                                    <div className="add-item__filter-content">
                                        <img
                                            className="add-item__filter-icon"
                                            src={plusIcon}
                                            alt="Item"
                                        />
                                        Egg
                                    </div>
                                </li>
                                <li className="add-item__filter-item">
                                    <div className="add-item__filter-content">
                                        <img
                                            className="add-item__filter-icon"
                                            src={plusIcon}
                                            alt="Item"
                                        />
                                        Egg
                                    </div>
                                </li>
                                <li className="add-item__filter-item">
                                    <div className="add-item__filter-content">
                                        <img
                                            className="add-item__filter-icon"
                                            src={plusIcon}
                                            alt="Item"
                                        />
                                        Egg
                                    </div>
                                </li>
                                <li className="add-item__filter-item">
                                    <div className="add-item__filter-content">
                                        <img
                                            className="add-item__filter-icon"
                                            src={plusIcon}
                                            alt="Item"
                                        />
                                        Egg
                                    </div>
                                </li>
                                <li className="add-item__filter-item">
                                    <div className="add-item__filter-content">
                                        <img
                                            className="add-item__filter-icon"
                                            src={plusIcon}
                                            alt="Item"
                                        />
                                        Egg
                                    </div>
                                </li>
                                <li className="add-item__filter-item">
                                    <div className="add-item__filter-content">
                                        <img
                                            className="add-item__filter-icon"
                                            src={plusIcon}
                                            alt="Item"
                                        />
                                        Egg
                                    </div>
                                </li>
                                <li className="add-item__filter-item">
                                    <div className="add-item__filter-content">
                                        <img
                                            className="add-item__filter-icon"
                                            src={plusIcon}
                                            alt="Item"
                                        />
                                        Egg
                                    </div>
                                </li>
                                <li className="add-item__filter-item">
                                    <div className="add-item__filter-content">
                                        <img
                                            className="add-item__filter-icon"
                                            src={plusIcon}
                                            alt="Item"
                                        />
                                        Egg
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                    <div className="add-item__suggestions">
                        <div className="add-item__suggestion-control add-item__suggestion-control--prev">
                            <img
                                className="add-item__suggestion-control-icon"
                                src={leftArrowIcon}
                                alt="Previous"
                            />
                        </div>
                        <div className="add-item__suggestion-chips">
                            <div className="add-item__suggestion-chip-item">Egg</div>
                            <div className="add-item__suggestion-chip-item">Carrot</div>
                            <div className="add-item__suggestion-chip-item">Banana</div>
                            <div className="add-item__suggestion-chip-item">Apple</div>
                            <div className="add-item__suggestion-chip-item">Coke</div>
                            <div className="add-item__suggestion-chip-item">Water</div>
                            <div className="add-item__suggestion-chip-item">Medicine</div>
                            <div className="add-item__suggestion-chip-item">Milk</div>
                            <div className="add-item__suggestion-chip-item">Apple</div>
                            <div className="add-item__suggestion-chip-item">Coke</div>
                            <div className="add-item__suggestion-chip-item">Water</div>
                            <div className="add-item__suggestion-chip-item">Medicine</div>
                            <div className="add-item__suggestion-chip-item">Apple</div>
                            <div className="add-item__suggestion-chip-item">Coke</div>
                            <div className="add-item__suggestion-chip-item">Water</div>
                            <div className="add-item__suggestion-chip-item">Medicine</div>
                            <div className="add-item__suggestion-chip-item">Milk</div>
                        </div>
                        <div className="add-item__suggestion-control add-item__suggestion-control--next">
                            <img
                                className="add-item__suggestion-control-icon"
                                src={rightArrowIcon}
                                alt="Next"
                            />
                        </div>
                    </div>
                </div>

                {/* Item Table */}
                <section className="section table __shadow--sm">
                    <table className="table__table">
                        <thead className="table__thead">
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Cost</th>
                                <th className="align-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table__tbody">
                            <tr>
                                <th>
                                    <div className="table__item-name">
                                        <input id="check" type="checkbox" />
                                        <label htmlFor="check">Carrots</label>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__item-input">
                                        <span
                                            className="auto-grow-input"
                                            role="textbox"
                                            aria-placeholder="500G"
                                            contentEditable
                                        >
                                            2KG
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__item-input">
                                        <span
                                            className="auto-grow-input"
                                            role="textbox"
                                            contentEditable
                                        >
                                            250
                                        </span>
                                        <span>BDT</span>
                                    </div>
                                </th>
                                <th className="align-right">
                                    <button
                                        className="icon-button icon-button--custom"
                                        type="button"
                                    >
                                        <img
                                            className="icon-button__icon"
                                            src={deleteIcon}
                                            alt="Delete"
                                        />
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="section table table--success __shadow--sm">
                    <table className="table__table">
                        <thead className="table__thead">
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Cost</th>
                                <th className="align-right">
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={printerIcon}
                                            alt="Print"
                                        />
                                    </button>
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={downArrowIcon}
                                            alt="Print"
                                        />
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table__tbody">
                            <tr>
                                <th>
                                    <div className="table__item-name">
                                        <input id="check" type="checkbox" />
                                        <label htmlFor="check">Carrots</label>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__item-input">
                                        <span
                                            className="auto-grow-input"
                                            role="textbox"
                                            aria-placeholder="500G"
                                            contentEditable
                                        >
                                            2KG
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__item-input">
                                        <span
                                            className="auto-grow-input"
                                            role="textbox"
                                            contentEditable
                                        >
                                            250
                                        </span>
                                        <span>BDT</span>
                                    </div>
                                </th>
                                <th className="align-right">
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={deleteIcon}
                                            alt="Delete"
                                        />
                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="table__item-name">
                                        <input id="check" type="checkbox" />
                                        <label htmlFor="check">Carrots</label>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__item-input">
                                        <span
                                            className="auto-grow-input"
                                            role="textbox"
                                            aria-placeholder="500G"
                                            contentEditable
                                        >
                                            2KG
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__item-input">
                                        <span
                                            className="auto-grow-input"
                                            role="textbox"
                                            contentEditable
                                        >
                                            250
                                        </span>
                                        <span>BDT</span>
                                    </div>
                                </th>
                                <th className="align-right">
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={deleteIcon}
                                            alt="Delete"
                                        />
                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <div className="table__item-name">
                                        <input id="check" type="checkbox" />
                                        <label htmlFor="check">Carrots</label>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__item-input">
                                        <span
                                            className="auto-grow-input"
                                            role="textbox"
                                            aria-placeholder="500G"
                                            contentEditable
                                        >
                                            2KG
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <div className="table__item-input">
                                        <span
                                            className="auto-grow-input"
                                            role="textbox"
                                            contentEditable
                                        >
                                            250
                                        </span>
                                        <span>BDT</span>
                                    </div>
                                </th>
                                <th className="align-right">
                                    <button className="icon-button" type="button">
                                        <img
                                            className="icon-button__icon"
                                            src={deleteIcon}
                                            alt="Delete"
                                        />
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
export default BucketDetails;
