# Steps for creating this project.

### .env, Navbar, Hero, Home.
1. First I changed Website name & icon.
2. I installed react-router-dom, Tailwindcss plugin & Google-font.
3. Import 'BrowserRouter' from "react-router-dom" in main.jsx file.
4. {useLocation, Link, useNavigate} from "react-router-dom" in Navbar.jsx file.
4. I have created a new ".env" file.
    a). A ".env" file is a simple, plain-text file used to store configuration settings and sensitive information, such as API keys and database credentials, in a key-value pair format.
5. I have created a "components" folder inside /src folder.
6. "Navbar.jsx" file is created inside components folder. Then exported to "App.jsx" file. Then
7. "Hero.jsx" file is created inside components folder. Then exported to "Home.jsx" file inside "pages" folder.


### CarCard, FeaturedSection(import- CarCard, Title), Title, Banner, Testimonial(import- Title), NewsLetter, Footer.
8. "CarCard.jsx" file is created inside components folder. The 'Luxuary car on Rent' section is created in this file. Then exported to "FeaturedSection.jsx" file.
9. "FeaturedSection.jsx" file is created inside components folder. In "FeaturedSection.jsx" file I import "useNavigate" from 'react-router-dom' then create a 'const navigate' variable using UseNavigate() function, and Implement on a button using 'onClick={}' function and then exported to Home.jsx file. and files also connected with it like "CarCard.jsx" & "Title.jsx".
10. "Banner.jsx" file is created inside components folder. Then Exported to "Home.jsx" file.
11. "Testimonial.jsx" file is created inside components folder. Then Exported to "Home.jsx" file.
12. "NewsLetter.jsx" file is created inside components folder. Then Exported to "Home.jsx" file.
13. "Footer.jsx" file is created inside components folder. Then Exported to App.jsx" file so it can implement to all "pages".


###  CarDetails(import- Loader)
14. "CarDetails.jsx" file is created inside pages folder. Then Exported to "App.jsx" file.