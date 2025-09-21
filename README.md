# Steps for creating this project.
1. First I changed Website name & icon.
2. I installed react-router-dom, Tailwindcss plugin & Google-font.
3. Import 'BrowserRouter' from "react-router-dom" in main.jsx file.
4. {useLocation, Link, useNavigate} from "react-router-dom" in Navbar.jsx file.
4. I have created a new ".env" file.
    a). A ".env" file is a simple, plain-text file used to store configuration settings and sensitive information, such as API keys and database credentials, in a key-value pair format.
5. I have created a "components" folder inside /src folder.
6. Inside components folder, I've created Navbar file.
7. Then I've created Hero.jsx file and export to Home.jsx file inside "pages" folder.
8. To create "Featured Vehicles" section behind 'Luxuary car on Rent' - I created "CarCard.jsx" file inside component folder and exported to ......
9. Now I have created a "FeaturedSection.jsx" file inside components folder. In FeaturedSection.jsx file I import "useNavigate" from 'react-router-dom' then create a 'const navigate' variable using UseNavigate() function, and Implement on a button using 'onClick={}' function and then exported to Home.jsx file.