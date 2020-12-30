const countries = [
    {
        "id": 1,
        "name": "Afghanistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}, {\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 2,
        "name": "Aland Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Regional Office"
    },
    {
        "id": 3,
        "name": "Albania",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Regional Office"
    },
    {
        "id": 4,
        "name": "Algeria",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 5,
        "name": "American Samoa",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Regional Office"
    },
    {
        "id": 6,
        "name": "Andorra",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Regional Office"
    },
    {
        "id": 7,
        "name": "Angola",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 8,
        "name": "Anguilla",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 9,
        "name": "Antarctica",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "Regional Office"
    },
    {
        "id": 10,
        "name": "Antigua and Barbuda",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 11,
        "name": "Argentina",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Regional Office"
    },
    {
        "id": 12,
        "name": "Armenia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 13,
        "name": "Aruba",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 14,
        "name": "Australia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Regional Office"
    },
    {
        "id": 15,
        "name": "Austria",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Regional Office"
    },
    {
        "id": 16,
        "name": "Azerbaijan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 17,
        "name": "Bahamas",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 18,
        "name": "Bahrain",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 19,
        "name": "Bangladesh",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 20,
        "name": "Barbados",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 21,
        "name": "Belarus",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Regional Office"
    },
    {
        "id": 22,
        "name": "Belgium",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Regional Office"
    },
    {
        "id": 23,
        "name": "Belize",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 24,
        "name": "Benin",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 25,
        "name": "Bermuda",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 26,
        "name": "Bhutan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 27,
        "name": "Bolivia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Regional Office"
    },
    {
        "id": 28,
        "name": "Bonaire, Sint Eustatius and Saba",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 29,
        "name": "Bosnia and Herzegovina",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Regional Office"
    },
    {
        "id": 30,
        "name": "Botswana",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 31,
        "name": "Bouvet Island",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "Regional Office"
    },
    {
        "id": 32,
        "name": "Brazil",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Regional Office"
    },
    {
        "id": 33,
        "name": "British Indian Ocean Territory",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 34,
        "name": "Brunei Darussalam",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 35,
        "name": "Bulgaria",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Regional Office"
    },
    {
        "id": 36,
        "name": "Burkina Faso",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 37,
        "name": "Burundi",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 38,
        "name": "Cambodia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 39,
        "name": "Cameroon",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 40,
        "name": "Canada",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 41,
        "name": "Cape Verde",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 42,
        "name": "Cayman Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Regional Office"
    },
    {
        "id": 43,
        "name": "Central African Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 44,
        "name": "Chad",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Regional Office"
    },
    {
        "id": 45,
        "name": "Chile",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Regional Office"
    },
    {
        "id": 46,
        "name": "China",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 47,
        "name": "Christmas Island",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 48,
        "name": "Cocos (Keeling) Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Regional Office"
    },
    {
        "id": 49,
        "name": "Colombia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Regional Office"
    },
    {
        "id": 50,
        "name": "Comoros",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 51,
        "name": "Congo",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 52,
        "name": "Congo, the Democratic Republic of the",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 53,
        "name": "Cook Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Representation Office"
    },
    {
        "id": 54,
        "name": "Costa Rica",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 55,
        "name": "Cote D'Ivoire",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 56,
        "name": "Croatia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 57,
        "name": "Cuba",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 58,
        "name": "Curacao",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 59,
        "name": "Cyprus",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 60,
        "name": "Czech Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 61,
        "name": "Denmark",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 62,
        "name": "Djibouti",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 63,
        "name": "Dominica",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 64,
        "name": "Dominican Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 65,
        "name": "Ecuador",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Representation Office"
    },
    {
        "id": 66,
        "name": "Egypt",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 67,
        "name": "El Salvador",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 68,
        "name": "Equatorial Guinea",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 69,
        "name": "Eritrea",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 70,
        "name": "Estonia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 71,
        "name": "Ethiopia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 72,
        "name": "Falkland Islands (Malvinas)",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Representation Office"
    },
    {
        "id": 73,
        "name": "Faroe Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 74,
        "name": "Fiji",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Representation Office"
    },
    {
        "id": 75,
        "name": "Finland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 76,
        "name": "France",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 77,
        "name": "French Guiana",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Representation Office"
    },
    {
        "id": 78,
        "name": "French Polynesia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Representation Office"
    },
    {
        "id": 79,
        "name": "French Southern Territories",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "Representation Office"
    },
    {
        "id": 80,
        "name": "Gabon",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 81,
        "name": "Gambia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 82,
        "name": "Georgia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 83,
        "name": "Germany",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 84,
        "name": "Ghana",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 85,
        "name": "Gibraltar",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 86,
        "name": "Greece",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 87,
        "name": "Greenland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 88,
        "name": "Grenada",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 89,
        "name": "Guadeloupe",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 90,
        "name": "Guam",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Representation Office"
    },
    {
        "id": 91,
        "name": "Guatemala",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 92,
        "name": "Guernsey",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 93,
        "name": "Guinea",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 94,
        "name": "Guinea-Bissau",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 95,
        "name": "Guyana",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Representation Office"
    },
    {
        "id": 96,
        "name": "Haiti",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 97,
        "name": "Heard Island and Mcdonald Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "Representation Office"
    },
    {
        "id": 98,
        "name": "Holy See (Vatican City State)",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 99,
        "name": "Honduras",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 100,
        "name": "Hong Kong",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 101,
        "name": "Hungary",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 102,
        "name": "Iceland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 103,
        "name": "India",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 104,
        "name": "Indonesia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 105,
        "name": "Iran, Islamic Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 106,
        "name": "Iraq",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 107,
        "name": "Ireland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 108,
        "name": "Isle of Man",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 109,
        "name": "Israel",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 110,
        "name": "Italy",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 111,
        "name": "Jamaica",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 112,
        "name": "Japan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 113,
        "name": "Jersey",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 114,
        "name": "Jordan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 115,
        "name": "Kazakhstan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 116,
        "name": "Kenya",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 117,
        "name": "Kiribati",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Representation Office"
    },
    {
        "id": 118,
        "name": "Korea, Democratic People\"s Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 119,
        "name": "Korea, Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 120,
        "name": "Kosovo",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 121,
        "name": "Kuwait",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 122,
        "name": "Kyrgyzstan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 123,
        "name": "Lao People's Democratic Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 124,
        "name": "Latvia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 125,
        "name": "Lebanon",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 126,
        "name": "Lesotho",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 127,
        "name": "Liberia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 128,
        "name": "Libyan Arab Jamahiriya",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 129,
        "name": "Liechtenstein",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 130,
        "name": "Lithuania",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 131,
        "name": "Luxembourg",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 132,
        "name": "Macao",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 133,
        "name": "Macedonia, the Former Yugoslav Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 134,
        "name": "Madagascar",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 135,
        "name": "Malawi",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 136,
        "name": "Malaysia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 137,
        "name": "Maldives",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 138,
        "name": "Mali",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 139,
        "name": "Malta",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 140,
        "name": "Marshall Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Representation Office"
    },
    {
        "id": 141,
        "name": "Martinique",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 142,
        "name": "Mauritania",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 143,
        "name": "Mauritius",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 144,
        "name": "Mayotte",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Representation Office"
    },
    {
        "id": 145,
        "name": "Mexico",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Representation Office"
    },
    {
        "id": 146,
        "name": "Micronesia, Federated States of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Representation Office"
    },
    {
        "id": 147,
        "name": "Moldova, Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 148,
        "name": "Monaco",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 149,
        "name": "Mongolia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Representation Office"
    },
    {
        "id": 150,
        "name": "Montenegro",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Representation Office"
    },
    {
        "id": 151,
        "name": "Montserrat",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 152,
        "name": "Morocco",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 153,
        "name": "Mozambique",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 154,
        "name": "Myanmar",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 155,
        "name": "Namibia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 156,
        "name": "Nauru",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 157,
        "name": "Nepal",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 158,
        "name": "Netherlands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 159,
        "name": "Netherlands Antilles",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 160,
        "name": "New Caledonia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 161,
        "name": "New Zealand",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 162,
        "name": "Nicaragua",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 163,
        "name": "Niger",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 164,
        "name": "Nigeria",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 165,
        "name": "Niue",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 166,
        "name": "Norfolk Island",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 167,
        "name": "Northern Mariana Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 168,
        "name": "Norway",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 169,
        "name": "Oman",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 170,
        "name": "Pakistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 171,
        "name": "Palau",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 172,
        "name": "Palestinian Territory, Occupied",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 173,
        "name": "Panama",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 174,
        "name": "Papua New Guinea",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 175,
        "name": "Paraguay",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Country Office"
    },
    {
        "id": 176,
        "name": "Peru",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Country Office"
    },
    {
        "id": 177,
        "name": "Philippines",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 178,
        "name": "Pitcairn",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 179,
        "name": "Poland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 180,
        "name": "Portugal",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 181,
        "name": "Puerto Rico",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 182,
        "name": "Qatar",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 183,
        "name": "Reunion",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 184,
        "name": "Romania",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 185,
        "name": "Russian Federation",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 186,
        "name": "Rwanda",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 187,
        "name": "Saint Barthelemy",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 188,
        "name": "Saint Helena",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 189,
        "name": "Saint Kitts and Nevis",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 190,
        "name": "Saint Lucia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 191,
        "name": "Saint Martin",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 192,
        "name": "Saint Pierre and Miquelon",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 193,
        "name": "Saint Vincent and the Grenadines",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 194,
        "name": "Samoa",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 195,
        "name": "San Marino",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 196,
        "name": "Sao Tome and Principe",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 197,
        "name": "Saudi Arabia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 198,
        "name": "Senegal",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 199,
        "name": "Serbia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 200,
        "name": "Serbia and Montenegro",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 201,
        "name": "Seychelles",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 202,
        "name": "Sierra Leone",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 203,
        "name": "Singapore",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 204,
        "name": "Sint Maarten",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 205,
        "name": "Slovakia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 206,
        "name": "Slovenia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 207,
        "name": "Solomon Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 208,
        "name": "Somalia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 209,
        "name": "South Africa",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 210,
        "name": "South Georgia and the South Sandwich Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Antarctica",
        "office": "Country Office"
    },
    {
        "id": 211,
        "name": "South Sudan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 212,
        "name": "Spain",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 213,
        "name": "Sri Lanka",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 214,
        "name": "Sudan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 215,
        "name": "Suriname",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Country Office"
    },
    {
        "id": 216,
        "name": "Svalbard and Jan Mayen",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 217,
        "name": "Swaziland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 218,
        "name": "Sweden",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 219,
        "name": "Switzerland",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 220,
        "name": "Syrian Arab Republic",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 221,
        "name": "Taiwan, Province of China",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 222,
        "name": "Tajikistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 223,
        "name": "Tanzania, United Republic of",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 224,
        "name": "Thailand",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 225,
        "name": "Timor-Leste",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 226,
        "name": "Togo",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 227,
        "name": "Tokelau",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 228,
        "name": "Tonga",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 229,
        "name": "Trinidad and Tobago",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 230,
        "name": "Tunisia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 231,
        "name": "Turkey",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 232,
        "name": "Turkmenistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 233,
        "name": "Turks and Caicos Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 234,
        "name": "Tuvalu",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 235,
        "name": "Uganda",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 236,
        "name": "Ukraine",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 237,
        "name": "United Arab Emirates",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 238,
        "name": "United Kingdom",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Europe",
        "office": "Country Office"
    },
    {
        "id": 239,
        "name": "United States",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 240,
        "name": "United States Minor Outlying Islands",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 241,
        "name": "Uruguay",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Country Office"
    },
    {
        "id": 242,
        "name": "Uzbekistan",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 243,
        "name": "Vanuatu",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 244,
        "name": "Venezuela",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "South America",
        "office": "Country Office"
    },
    {
        "id": 245,
        "name": "Viet Nam",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 246,
        "name": "Virgin Islands, British",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 247,
        "name": "Virgin Islands, U.s.",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "North America",
        "office": "Country Office"
    },
    {
        "id": 248,
        "name": "Wallis and Futuna",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Oceania",
        "office": "Country Office"
    },
    {
        "id": 249,
        "name": "Western Sahara",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 250,
        "name": "Yemen",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Asia",
        "office": "Country Office"
    },
    {
        "id": 251,
        "name": "Zambia",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    },
    {
        "id": 252,
        "name": "Zimbabwe",
        "languages": "[{\"url\": \"https://www.undp.org\", \"name\": \"English\"},{\"url\": \"https://www.undp.org\",\"name\": \"Spanish\"}]",
        "continent": "Africa",
        "office": "Country Office"
    }
];
export default countries;