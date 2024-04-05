import './Header.css';

const Header = () => {
    return (
        <>
            <div className="hearder_div">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/436px-Google_Keep_icon_%282020%29.svg.png"
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
