let header = document.getElementsByTagName("header");
header [0].innerHTML = `<nav class="Nav-bar">
        <ul class="Nav-links">

        <li class="Nav-left">

           
            <div class="nav-item dropdown">
                <a href="Menu.html" class="main-menu">
                    MENU <i class="uil uil-angle-down"></i>
                </a>

                <ul class="dropdown-menu">
                    <li><a href="index.html">HOME</a></li>
                    <hr style="border-top: 1px solid #ccc; width: 90px; margin: 5px 0;">
                    <li><a href="category.html?category=pants">JACKETS</a></li>
                    <li><a href="category.html?category=tops">TOPS</a></li>
                    <li><a href="category.html?category=pants">PANTS</a></li>
                    <li><a href="category.html?category=shoes">SHOES</a></li>
                    <li><a href="category.html?category=belts">BELTS</a></li>
                    <li><a href="About.html">ABOUT</a></li>
                    <li><a href="contact.html">CONTACTS</a></li>
                    <li><a href="Privacy.html">PRIVACY POLICY</a></li>
                    
                </ul>
            </div>
            <div class="nav-item"><a class="custom-item" href="index.html"><i class="uil uil-home-alt"></i></a></div>
            <div class="nav-item"><a class="custom-item" href="Women.html">SHOP WOMEN</a></div>
            <div class="nav-item"><a class="custom-item" href="Gallery.html">SHOP MEN</a></div>
            <div class="nav-item"><a class="custom-item" href="Arrival.html">CURRENT ARRIVALS</a></div>

        </li>

        <li class="Hamburger">
            <button class="hamburger-btn">
                <i class="uil uil-bars"></i>
            </button>
        </li>

        
        <li class="Logo" alt="Kuro Atelier logo">
            <a href="index.html">
                <div class="Logo-img"></div>
            </a>
        </li>

      
        <li class="Nav-right">
            <div class="search-container" alt="Search bar">
                <input type="text" class="head-search" placeholder="">
                <button class="search-icon" alt="Search button">
                    <i class="uil uil-search"></i>
                </button>
            </div>
        </li>

    </ul>
</nav>`

let footer = document.getElementsByTagName("footer");
footer [0].innerHTML = `<ul>
            <li><a href="About.html">ABOUT</a></li>
            <li><a href="contact.html">CONTACT</a></li>
            <li><a href="Privacy.html">PRIVACY POLICY</a></li>
            <li><a href="Terms.html">TERMS OF SERVICE</a></li>
        </ul>

        <h1>Kuro Atelier © 2026</h1>`


