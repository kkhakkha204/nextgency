import React from 'react';

const Header = () => {
    return (
        <header className="py-4 flex">
            <div className="container">
                <div className="flex justify-between ">
                    <div>
                        <img className="h-8 w-8" src="/assets/images/logos/logo_favicon.png" alt=""/>
                    </div>
                    <div>
                        <button> Hợp tác ngay </button>
                        <span>menu</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;