import React from "react";
import MyFooter from "../Footer/MyFooter";
import MyHeader from "../Header/MyHeader";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <div className="header__container">
                        <MyHeader />
                    </div>
                </div>
                <div className="main">
                    {/* ----content------ */}
                    <div className="main__container">{children}</div>
                </div>
                <div className="footer">
                    <div className="footer__container">
                        <MyFooter />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
