
// Assuming global CSS import is handled in App.js

const Header = () => {
    // Functionality for smooth scrolling (as defined in original HTML JS)
    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className="container">
                <div className="header-content">
                    {/* Logo Section */}
                    <div className="logo">
                        <span className="logo-icon">🏥</span>
                        {/* Updated title: Likita Ba Boka Ba (A Doctor, Not a Sorcerer) */}
                        <h1>Likita Ba Boka Ba</h1>
                    </div>
                    
                    {/* Navigation Section */}
                    <nav>
                        <ul>
                            <li>
                                <a href="#home" onClick={(e) => smoothScroll(e, 'home')}>Gida</a>
                            </li>
                            <li>
                                <a href="#articles" onClick={(e) => smoothScroll(e, 'articles')}>Labarai</a>
                            </li>
                            <li>
                                <a href="#categories" onClick={(e) => smoothScroll(e, 'categories')}>Nau'i-nau'i</a>
                            </li>
                            <li>
                                {/* Assuming 'Game da mu' links to a section called 'about' */}
                                <a href="#about" onClick={(e) => smoothScroll(e, 'about')}>Game da mu</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')}>Tuntuɓe mu</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;