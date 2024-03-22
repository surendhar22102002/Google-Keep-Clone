import './Header.css';

const Header = () => {
    return (
        <>
            <div className="hearder_div">
                <img
                    src="../../../public/Google_Keep_icon_(2020).svg.png"
                    alt="Google Keep Icon"
                    className="keepImg"
                    width={"40px"}
                />
                <div>
                    <h1 className="header_h1">Google Keep</h1>
                </div>
            </div>
        </>
    );
};

export default Header;
