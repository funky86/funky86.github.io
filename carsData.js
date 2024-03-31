const carsData = [
    {
        "model": "Tesla Model 3",
        "year": "Sep 2023",
        "usableBattery": 57.5,
        "realRange": 415.0,
        "consumptionAverage": 139.0,
        "evDatabaseUrl": "https://ev-database.org/car/1991/Tesla-Model-3"
    },
    {
        "model": "Tesla Model 3 Long Range Dual Motor",
        "year": "Sep 2023",
        "usableBattery": 75.0,
        "realRange": 500.0,
        "consumptionAverage": 150.0,
        "evDatabaseUrl": "https://ev-database.org/car/1992/Tesla-Model-3-Long-Range-Dual-Motor"
    },
    {
        "model": "BYD ATTO 3",
        "year": "Aug 2022",
        "usableBattery": 60.5,
        "realRange": 330.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/1782/BYD-ATTO-3"
    },
    {
        "model": "Tesla Model Y Long Range Dual Motor",
        "year": "Feb 2022",
        "usableBattery": 75.0,
        "realRange": 435.0,
        "consumptionAverage": 172.0,
        "evDatabaseUrl": "https://ev-database.org/car/1619/Tesla-Model-Y-Long-Range-Dual-Motor"
    },
    {
        "model": "MG MG4 Electric 64 kWh",
        "year": "Oct 2022",
        "usableBattery": 61.7,
        "realRange": 360.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1708/MG-MG4-Electric-64-kWh"
    },
    {
        "model": "Tesla Model Y",
        "year": "Nov 2022",
        "usableBattery": 57.5,
        "realRange": 350.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1743/Tesla-Model-Y"
    },
    {
        "model": "BYD SEAL 82.5 kWh AWD Excellence",
        "year": "Sep 2023",
        "usableBattery": 82.5,
        "realRange": 490.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/2002/BYD-SEAL-825-kWh-AWD-Excellence"
    },
    {
        "model": "BMW iX xDrive40",
        "year": "Oct 2021",
        "usableBattery": 71.0,
        "realRange": 360.0,
        "consumptionAverage": 197.0,
        "evDatabaseUrl": "https://ev-database.org/car/1472/BMW-iX-xDrive40"
    },
    {
        "model": "BMW i4 eDrive40",
        "year": "Nov 2021",
        "usableBattery": 80.7,
        "realRange": 515.0,
        "consumptionAverage": 157.0,
        "evDatabaseUrl": "https://ev-database.org/car/1252/BMW-i4-eDrive40"
    },
    {
        "model": "BYD DOLPHIN 60.4 kWh",
        "year": "Jul 2023",
        "usableBattery": 60.5,
        "realRange": 340.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1919/BYD-DOLPHIN-604-kWh"
    },
    {
        "model": "Volkswagen ID.4 Pro",
        "year": "Oct 2023",
        "usableBattery": 77.0,
        "realRange": 435.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/2028/Volkswagen-ID4-Pro"
    },
    {
        "model": "Volvo EX30 Single Motor ER",
        "year": "Jun 2023",
        "usableBattery": 64.0,
        "realRange": 365.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1910/Volvo-EX30-Single-Motor-ER"
    },
    {
        "model": "BYD SEAL 82.5 kWh RWD Design",
        "year": "Sep 2023",
        "usableBattery": 82.5,
        "realRange": 500.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/2001/BYD-SEAL-825-kWh-RWD-Design"
    },
    {
        "model": "BMW iX3",
        "year": "Sep 2021",
        "usableBattery": 74.0,
        "realRange": 385.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/1535/BMW-iX3"
    },
    {
        "model": "Audi Q6 e-tron quattro",
        "year": "Apr 2024",
        "usableBattery": 94.9,
        "realRange": 460.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/2146/Audi-Q6-e-tron-quattro"
    },
    {
        "model": "Citroen e-C3",
        "year": "Feb 2024",
        "usableBattery": 44.0,
        "realRange": 265.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/2039/Citroen-e-C3"
    },
    {
        "model": "Tesla Model Y Performance",
        "year": "Mar 2022",
        "usableBattery": 75.0,
        "realRange": 415.0,
        "consumptionAverage": 181.0,
        "evDatabaseUrl": "https://ev-database.org/car/1183/Tesla-Model-Y-Performance"
    },
    {
        "model": "Kia Niro EV",
        "year": "Jun 2022",
        "usableBattery": 64.8,
        "realRange": 385.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1666/Kia-Niro-EV"
    },
    {
        "model": "Hyundai Kona Electric 65 kWh",
        "year": "Jul 2023",
        "usableBattery": 65.4,
        "realRange": 390.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1830/Hyundai-Kona-Electric-65-kWh"
    },
    {
        "model": "BMW i4 eDrive35",
        "year": "Nov 2022",
        "usableBattery": 67.0,
        "realRange": 430.0,
        "consumptionAverage": 156.0,
        "evDatabaseUrl": "https://ev-database.org/car/1785/BMW-i4-eDrive35"
    },
    {
        "model": "BYD HAN",
        "year": "Mar 2023",
        "usableBattery": 85.4,
        "realRange": 475.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1784/BYD-HAN"
    },
    {
        "model": "Renault Scenic E-Tech EV87 220hp",
        "year": "Dec 2023",
        "usableBattery": 87.0,
        "realRange": 490.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/2069/Renault-Scenic-E-Tech-EV87-220hp"
    },
    {
        "model": "Mercedes-Benz EQB 250+",
        "year": "Oct 2023",
        "usableBattery": 70.5,
        "realRange": 415.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1988/Mercedes-Benz-EQB-250plus"
    },
    {
        "model": "BYD TANG",
        "year": "Aug 2022",
        "usableBattery": 86.4,
        "realRange": 355.0,
        "consumptionAverage": 243.0,
        "evDatabaseUrl": "https://ev-database.org/car/1783/BYD-TANG"
    },
    {
        "model": "Dacia Spring Electric 45",
        "year": "Jul 2022",
        "usableBattery": 25.0,
        "realRange": 165.0,
        "consumptionAverage": 152.0,
        "evDatabaseUrl": "https://ev-database.org/car/1705/Dacia-Spring-Electric-45"
    },
    {
        "model": "BMW iX1 eDrive20",
        "year": "Sep 2023",
        "usableBattery": 64.7,
        "realRange": 390.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1996/BMW-iX1-eDrive20"
    },
    {
        "model": "Rolls-Royce Spectre",
        "year": "Oct 2023",
        "usableBattery": 102.0,
        "realRange": 465.0,
        "consumptionAverage": 219.0,
        "evDatabaseUrl": "https://ev-database.org/car/1765/Rolls-Royce-Spectre"
    },
    {
        "model": "Fiat 500e Hatchback 42 kWh",
        "year": "Nov 2020",
        "usableBattery": 37.3,
        "realRange": 235.0,
        "consumptionAverage": 159.0,
        "evDatabaseUrl": "https://ev-database.org/car/1285/Fiat-500e-Hatchback-42-kWh"
    },
    {
        "model": "Renault Megane E-Tech EV60 220hp",
        "year": "Apr 2022",
        "usableBattery": 60.0,
        "realRange": 380.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1521/Renault-Megane-E-Tech-EV60-220hp"
    },
    {
        "model": "Tesla Model S Dual Motor",
        "year": "Jan 2023",
        "usableBattery": 95.0,
        "realRange": 575.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/1404/Tesla-Model-S-Dual-Motor"
    },
    {
        "model": "Tesla Model S Plaid",
        "year": "Nov 2022",
        "usableBattery": 95.0,
        "realRange": 560.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1405/Tesla-Model-S-Plaid"
    },
    {
        "model": "BMW iX1 xDrive30",
        "year": "Nov 2022",
        "usableBattery": 64.7,
        "realRange": 380.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1701/BMW-iX1-xDrive30"
    },
    {
        "model": "Kia EV6 Long Range 2WD",
        "year": "Oct 2021",
        "usableBattery": 74.0,
        "realRange": 410.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1481/Kia-EV6-Long-Range-2WD"
    },
    {
        "model": "Hongqi E-HS9 99 kWh",
        "year": "Dec 2022",
        "usableBattery": 90.0,
        "realRange": 370.0,
        "consumptionAverage": 243.0,
        "evDatabaseUrl": "https://ev-database.org/car/1747/Hongqi-E-HS9-99-kWh"
    },
    {
        "model": "CUPRA Born 150 kW - 58 kWh",
        "year": "Oct 2021",
        "usableBattery": 58.0,
        "realRange": 350.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1516/CUPRA-Born-150-kW---58-kWh"
    },
    {
        "model": "Honda e:Ny1",
        "year": "Jun 2023",
        "usableBattery": 61.9,
        "realRange": 335.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1940/Honda-eNy1"
    },
    {
        "model": "MG ZS EV Long Range",
        "year": "Nov 2021",
        "usableBattery": 68.3,
        "realRange": 370.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1541/MG-ZS-EV-Long-Range"
    },
    {
        "model": "Skoda Enyaq 85",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 450.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/2020/Skoda-Enyaq-85"
    },
    {
        "model": "Toyota bZ4X FWD",
        "year": "Jun 2022",
        "usableBattery": 64.0,
        "realRange": 340.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1564/Toyota-bZ4X-FWD"
    },
    {
        "model": "CUPRA Born 170 kW - 77 kWh",
        "year": "Mar 2022",
        "usableBattery": 77.0,
        "realRange": 450.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1518/CUPRA-Born-170-kW---77-kWh"
    },
    {
        "model": "Volkswagen ID.7 Pro",
        "year": "Aug 2023",
        "usableBattery": 77.0,
        "realRange": 475.0,
        "consumptionAverage": 162.0,
        "evDatabaseUrl": "https://ev-database.org/car/1839/Volkswagen-ID7-Pro"
    },
    {
        "model": "MG MG4 Electric 51 kWh",
        "year": "Oct 2022",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1707/MG-MG4-Electric-51-kWh"
    },
    {
        "model": "Porsche Macan 4 Electric",
        "year": "Jan 2024",
        "usableBattery": 95.0,
        "realRange": 485.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/2084/Porsche-Macan-4-Electric"
    },
    {
        "model": "BMW iX xDrive50",
        "year": "Nov 2021",
        "usableBattery": 105.2,
        "realRange": 505.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/1473/BMW-iX-xDrive50"
    },
    {
        "model": "BYD SEAL U 71.8 kWh Comfort",
        "year": "May 2024",
        "usableBattery": 71.8,
        "realRange": 340.0,
        "consumptionAverage": 211.0,
        "evDatabaseUrl": "https://ev-database.org/car/2094/BYD-SEAL-U-718-kWh-Comfort"
    },
    {
        "model": "Volkswagen ID. Buzz Pro",
        "year": "Sep 2022",
        "usableBattery": 77.0,
        "realRange": 345.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/1651/Volkswagen-ID-Buzz-Pro"
    },
    {
        "model": "BMW i7 xDrive60",
        "year": "Nov 2022",
        "usableBattery": 101.7,
        "realRange": 510.0,
        "consumptionAverage": 199.0,
        "evDatabaseUrl": "https://ev-database.org/car/1676/BMW-i7-xDrive60"
    },
    {
        "model": "BMW i5 eDrive40 Sedan",
        "year": "May 2023",
        "usableBattery": 81.2,
        "realRange": 470.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/1906/BMW-i5-eDrive40-Sedan"
    },
    {
        "model": "Renault 5 E-Tech 52kWh 150hp",
        "year": "Sep 2024",
        "usableBattery": 52.0,
        "realRange": 330.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/2135/Renault-5-E-Tech-52kWh-150hp"
    },
    {
        "model": "Hyundai IONIQ 5 Long Range 2WD",
        "year": "Apr 2022",
        "usableBattery": 74.0,
        "realRange": 390.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1662/Hyundai-IONIQ-5-Long-Range-2WD"
    },
    {
        "model": "Tesla Model Y",
        "year": "May 2023",
        "usableBattery": 57.5,
        "realRange": 350.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1974/Tesla-Model-Y"
    },
    {
        "model": "Kia EV9 99.8 kWh AWD",
        "year": "Sep 2023",
        "usableBattery": 96.0,
        "realRange": 435.0,
        "consumptionAverage": 221.0,
        "evDatabaseUrl": "https://ev-database.org/car/1835/Kia-EV9-998-kWh-AWD"
    },
    {
        "model": "Nissan Leaf",
        "year": "Mar 2022",
        "usableBattery": 39.0,
        "realRange": 235.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1656/Nissan-Leaf"
    },
    {
        "model": "Hyundai IONIQ 6 Long Range 2WD",
        "year": "Dec 2022",
        "usableBattery": 74.0,
        "realRange": 495.0,
        "consumptionAverage": 149.0,
        "evDatabaseUrl": "https://ev-database.org/car/1718/Hyundai-IONIQ-6-Long-Range-2WD"
    },
    {
        "model": "BMW i4 M50",
        "year": "Nov 2021",
        "usableBattery": 80.7,
        "realRange": 450.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/1519/BMW-i4-M50"
    },
    {
        "model": "Lucid Air Grand Touring",
        "year": "Feb 2023",
        "usableBattery": 112.0,
        "realRange": 665.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1316/Lucid-Air-Grand-Touring"
    },
    {
        "model": "Volkswagen ID.3 Pro",
        "year": "Mar 2023",
        "usableBattery": 58.0,
        "realRange": 350.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1831/Volkswagen-ID3-Pro"
    },
    {
        "model": "Renault Zoe ZE50 R110",
        "year": "Nov 2019",
        "usableBattery": 52.0,
        "realRange": 315.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/1164/Renault-Zoe-ZE50-R110"
    },
    {
        "model": "Hyundai IONIQ 6 Long Range AWD",
        "year": "Nov 2022",
        "usableBattery": 74.0,
        "realRange": 440.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1719/Hyundai-IONIQ-6-Long-Range-AWD"
    },
    {
        "model": "Mercedes-Benz EQA 250+",
        "year": "Oct 2023",
        "usableBattery": 70.5,
        "realRange": 425.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1985/Mercedes-Benz-EQA-250plus"
    },
    {
        "model": "Opel Astra Electric",
        "year": "Jun 2023",
        "usableBattery": 50.8,
        "realRange": 320.0,
        "consumptionAverage": 159.0,
        "evDatabaseUrl": "https://ev-database.org/car/1792/Opel-Astra-Electric"
    },
    {
        "model": "Volvo EX30 Single Motor",
        "year": "Jun 2023",
        "usableBattery": 49.0,
        "realRange": 280.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1909/Volvo-EX30-Single-Motor"
    },
    {
        "model": "Audi Q8 e-tron 55 quattro",
        "year": "Dec 2022",
        "usableBattery": 106.0,
        "realRange": 505.0,
        "consumptionAverage": 210.0,
        "evDatabaseUrl": "https://ev-database.org/car/1770/Audi-Q8-e-tron-55-quattro"
    },
    {
        "model": "Peugeot e-3008 73 kWh",
        "year": "Nov 2023",
        "usableBattery": 73.0,
        "realRange": 385.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/2003/Peugeot-e-3008-73-kWh"
    },
    {
        "model": "Kia EV6 GT",
        "year": "Apr 2022",
        "usableBattery": 74.0,
        "realRange": 360.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/1471/Kia-EV6-GT"
    },
    {
        "model": "Hyundai IONIQ 5 N",
        "year": "Nov 2023",
        "usableBattery": 80.0,
        "realRange": 385.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/2044/Hyundai-IONIQ-5-N"
    },
    {
        "model": "Mini Countryman E",
        "year": "Feb 2024",
        "usableBattery": 64.7,
        "realRange": 380.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1994/Mini-Countryman-E"
    },
    {
        "model": "Peugeot e-3008 98 kWh Long Range",
        "year": "Jun 2024",
        "usableBattery": 98.0,
        "realRange": 510.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/2005/Peugeot-e-3008-98-kWh-Long-Range"
    },
    {
        "model": "Nissan Ariya 87kWh",
        "year": "Jul 2022",
        "usableBattery": 87.0,
        "realRange": 450.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1302/Nissan-Ariya-87kWh"
    },
    {
        "model": "Audi Q4 e-tron 45",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 420.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/2013/Audi-Q4-e-tron-45"
    },
    {
        "model": "Fisker Ocean Extreme",
        "year": "Mar 2023",
        "usableBattery": 106.5,
        "realRange": 520.0,
        "consumptionAverage": 205.0,
        "evDatabaseUrl": "https://ev-database.org/car/1711/Fisker-Ocean-Extreme"
    },
    {
        "model": "Jeep Avenger Electric",
        "year": "Jan 2023",
        "usableBattery": 50.8,
        "realRange": 310.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1816/Jeep-Avenger-Electric"
    },
    {
        "model": "Zeekr 001 Performance AWD",
        "year": "Sep 2023",
        "usableBattery": 94.0,
        "realRange": 500.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1934/Zeekr-001-Performance-AWD"
    },
    {
        "model": "Mercedes-Benz EQS 450+",
        "year": "Jun 2023",
        "usableBattery": 108.4,
        "realRange": 635.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/2008/Mercedes-Benz-EQS-450plus"
    },
    {
        "model": "Volkswagen ID. Buzz GTX",
        "year": "Aug 2024",
        "usableBattery": 79.0,
        "realRange": 335.0,
        "consumptionAverage": 236.0,
        "evDatabaseUrl": "https://ev-database.org/car/2156/Volkswagen-ID-Buzz-GTX"
    },
    {
        "model": "Citroen e-C4",
        "year": "Nov 2021",
        "usableBattery": 46.3,
        "realRange": 290.0,
        "consumptionAverage": 160.0,
        "evDatabaseUrl": "https://ev-database.org/car/1587/Citroen-e-C4"
    },
    {
        "model": "Zeekr 001 Long Range RWD",
        "year": "Sep 2023",
        "usableBattery": 94.0,
        "realRange": 525.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/1933/Zeekr-001-Long-Range-RWD"
    },
    {
        "model": "Fisker Ocean Sport",
        "year": "Mar 2023",
        "usableBattery": 71.0,
        "realRange": 360.0,
        "consumptionAverage": 197.0,
        "evDatabaseUrl": "https://ev-database.org/car/1709/Fisker-Ocean-Sport"
    },
    {
        "model": "Volkswagen ID.7 Pro S",
        "year": "May 2024",
        "usableBattery": 86.0,
        "realRange": 520.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/1840/Volkswagen-ID7-Pro-S"
    },
    {
        "model": "Mercedes-Benz EQE 300",
        "year": "Jun 2023",
        "usableBattery": 89.0,
        "realRange": 525.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1897/Mercedes-Benz-EQE-300"
    },
    {
        "model": "Mercedes-Benz EQA 250",
        "year": "Oct 2023",
        "usableBattery": 66.5,
        "realRange": 405.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1984/Mercedes-Benz-EQA-250"
    },
    {
        "model": "Volvo EX30 Twin Motor Performance",
        "year": "Jun 2023",
        "usableBattery": 64.0,
        "realRange": 360.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1911/Volvo-EX30-Twin-Motor-Performance"
    },
    {
        "model": "Polestar 2 Long Range Single Motor",
        "year": "Jan 2023",
        "usableBattery": 79.0,
        "realRange": 470.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1818/Polestar-2-Long-Range-Single-Motor"
    },
    {
        "model": "Hyundai IONIQ 5 Long Range AWD",
        "year": "Apr 2022",
        "usableBattery": 74.0,
        "realRange": 385.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/1663/Hyundai-IONIQ-5-Long-Range-AWD"
    },
    {
        "model": "Peugeot e-5008 98 kWh Long Range",
        "year": "Sep 2024",
        "usableBattery": 98.0,
        "realRange": 490.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/2151/Peugeot-e-5008-98-kWh-Long-Range"
    },
    {
        "model": "Volkswagen ID.7 Tourer GTX",
        "year": "Aug 2024",
        "usableBattery": 86.0,
        "realRange": 480.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/2158/Volkswagen-ID7-Tourer-GTX"
    },
    {
        "model": "Kia EV6 Long Range AWD",
        "year": "Oct 2021",
        "usableBattery": 74.0,
        "realRange": 400.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1482/Kia-EV6-Long-Range-AWD"
    },
    {
        "model": "NIO ET7 75 kWh",
        "year": "Oct 2022",
        "usableBattery": 70.5,
        "realRange": 400.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1751/NIO-ET7-75-kWh"
    },
    {
        "model": "MG MG4 Electric 77 kWh",
        "year": "Aug 2023",
        "usableBattery": 74.4,
        "realRange": 425.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1973/MG-MG4-Electric-77-kWh"
    },
    {
        "model": "Smart #1 Pro+",
        "year": "Mar 2023",
        "usableBattery": 62.0,
        "realRange": 335.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1667/Smart-1-Proplus"
    },
    {
        "model": "Hyundai IONIQ 5 Standard Range 2WD",
        "year": "Jul 2021",
        "usableBattery": 54.0,
        "realRange": 295.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/1476/Hyundai-IONIQ-5-Standard-Range-2WD"
    },
    {
        "model": "Fisker Ocean Ultra",
        "year": "Mar 2023",
        "usableBattery": 106.5,
        "realRange": 535.0,
        "consumptionAverage": 199.0,
        "evDatabaseUrl": "https://ev-database.org/car/1710/Fisker-Ocean-Ultra"
    },
    {
        "model": "Ford Mustang Mach-E ER RWD",
        "year": "Oct 2023",
        "usableBattery": 91.0,
        "realRange": 480.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/2035/Ford-Mustang-Mach-E-ER-RWD"
    },
    {
        "model": "Ford Explorer Extended Range RWD",
        "year": "Mar 2024",
        "usableBattery": 77.0,
        "realRange": 430.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/2168/Ford-Explorer-Extended-Range-RWD"
    },
    {
        "model": "Lotus Eletre",
        "year": "Mar 2023",
        "usableBattery": 109.0,
        "realRange": 495.0,
        "consumptionAverage": 220.0,
        "evDatabaseUrl": "https://ev-database.org/car/1767/Lotus-Eletre"
    },
    {
        "model": "Smart #1 Brabus",
        "year": "Mar 2023",
        "usableBattery": 62.0,
        "realRange": 325.0,
        "consumptionAverage": 191.0,
        "evDatabaseUrl": "https://ev-database.org/car/1748/Smart-1-Brabus"
    },
    {
        "model": "Kia EV9 99.8 kWh AWD GT-Line",
        "year": "Jun 2023",
        "usableBattery": 96.0,
        "realRange": 425.0,
        "consumptionAverage": 226.0,
        "evDatabaseUrl": "https://ev-database.org/car/1993/Kia-EV9-998-kWh-AWD-GT-Line"
    },
    {
        "model": "Opel Mokka-e 50 kWh",
        "year": "Nov 2021",
        "usableBattery": 46.3,
        "realRange": 260.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1586/Opel-Mokka-e-50-kWh"
    },
    {
        "model": "Maxus MIFA 9",
        "year": "Feb 2023",
        "usableBattery": 84.0,
        "realRange": 365.0,
        "consumptionAverage": 230.0,
        "evDatabaseUrl": "https://ev-database.org/car/1837/Maxus-MIFA-9"
    },
    {
        "model": "Hyundai IONIQ 6 Standard Range 2WD",
        "year": "Jan 2023",
        "usableBattery": 54.0,
        "realRange": 365.0,
        "consumptionAverage": 148.0,
        "evDatabaseUrl": "https://ev-database.org/car/1717/Hyundai-IONIQ-6-Standard-Range-2WD"
    },
    {
        "model": "Volkswagen ID. Buzz LWB GTX",
        "year": "Aug 2024",
        "usableBattery": 86.0,
        "realRange": 355.0,
        "consumptionAverage": 242.0,
        "evDatabaseUrl": "https://ev-database.org/car/2157/Volkswagen-ID-Buzz-LWB-GTX-"
    },
    {
        "model": "BMW iX2 xDrive30",
        "year": "Oct 2023",
        "usableBattery": 64.7,
        "realRange": 380.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/2040/BMW-iX2-xDrive30"
    },
    {
        "model": "MG MG5 Electric Long Range",
        "year": "Mar 2022",
        "usableBattery": 57.4,
        "realRange": 335.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1474/MG-MG5-Electric-Long-Range"
    },
    {
        "model": "Mazda MX-30",
        "year": "May 2022",
        "usableBattery": 30.0,
        "realRange": 170.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1680/Mazda-MX-30"
    },
    {
        "model": "Lexus RZ 450e",
        "year": "Feb 2023",
        "usableBattery": 64.0,
        "realRange": 320.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1677/Lexus-RZ-450e"
    },
    {
        "model": "Volkswagen ID.7 Tourer Pro",
        "year": "Mar 2024",
        "usableBattery": 77.0,
        "realRange": 460.0,
        "consumptionAverage": 167.0,
        "evDatabaseUrl": "https://ev-database.org/car/2118/Volkswagen-ID7-Tourer-Pro"
    },
    {
        "model": "Zeekr X Privilege AWD",
        "year": "Oct 2023",
        "usableBattery": 64.0,
        "realRange": 345.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/1937/Zeekr-X-Privilege-AWD"
    },
    {
        "model": "BYD SEAL U 87 kWh Design",
        "year": "May 2024",
        "usableBattery": 87.0,
        "realRange": 405.0,
        "consumptionAverage": 215.0,
        "evDatabaseUrl": "https://ev-database.org/car/2067/BYD-SEAL-U-87-kWh-Design"
    },
    {
        "model": "Skoda Enyaq Coupe 85",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 480.0,
        "consumptionAverage": 160.0,
        "evDatabaseUrl": "https://ev-database.org/car/2024/Skoda-Enyaq-Coupe-85"
    },
    {
        "model": "Tesla Model X Dual Motor",
        "year": "Jan 2023",
        "usableBattery": 95.0,
        "realRange": 475.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1407/Tesla-Model-X-Dual-Motor"
    },
    {
        "model": "Subaru Solterra AWD",
        "year": "Jun 2022",
        "usableBattery": 64.0,
        "realRange": 320.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1567/Subaru-Solterra-AWD"
    },
    {
        "model": "BYD DOLPHIN 44.9 kWh Active",
        "year": "Jul 2023",
        "usableBattery": 44.9,
        "realRange": 255.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1917/BYD-DOLPHIN-449-kWh-Active"
    },
    {
        "model": "Ford Explorer Extended Range AWD",
        "year": "Mar 2024",
        "usableBattery": 79.0,
        "realRange": 430.0,
        "consumptionAverage": 184.0,
        "evDatabaseUrl": "https://ev-database.org/car/2169/Ford-Explorer-Extended-Range-AWD"
    },
    {
        "model": "Lancia Ypsilon",
        "year": "Jun 2024",
        "usableBattery": 48.1,
        "realRange": 305.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/2117/Lancia-Ypsilon"
    },
    {
        "model": "Renault Twingo Electric",
        "year": "Nov 2020",
        "usableBattery": 21.3,
        "realRange": 135.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1270/Renault-Twingo-Electric"
    },
    {
        "model": "MG MG4 Electric XPOWER",
        "year": "Aug 2023",
        "usableBattery": 61.7,
        "realRange": 320.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1944/MG-MG4-Electric-XPOWER"
    },
    {
        "model": "NIO ET5 100 kWh",
        "year": "Dec 2022",
        "usableBattery": 90.0,
        "realRange": 500.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1787/NIO-ET5-100-kWh"
    },
    {
        "model": "Dacia Spring Electric 45",
        "year": "May 2024",
        "usableBattery": 25.0,
        "realRange": 165.0,
        "consumptionAverage": 152.0,
        "evDatabaseUrl": "https://ev-database.org/car/2126/Dacia-Spring-Electric-45"
    },
    {
        "model": "Mercedes-Benz EQE 350+",
        "year": "Jun 2023",
        "usableBattery": 90.6,
        "realRange": 530.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/2006/Mercedes-Benz-EQE-350plus"
    },
    {
        "model": "BMW i5 M60 xDrive Sedan",
        "year": "May 2023",
        "usableBattery": 81.2,
        "realRange": 420.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1907/BMW-i5-M60-xDrive-Sedan"
    },
    {
        "model": "Kia EV9 99.8 kWh RWD",
        "year": "Jun 2023",
        "usableBattery": 96.0,
        "realRange": 450.0,
        "consumptionAverage": 213.0,
        "evDatabaseUrl": "https://ev-database.org/car/1834/Kia-EV9-998-kWh-RWD"
    },
    {
        "model": "Polestar 4 Long Range Dual Motor",
        "year": "Jan 2024",
        "usableBattery": 94.0,
        "realRange": 465.0,
        "consumptionAverage": 202.0,
        "evDatabaseUrl": "https://ev-database.org/car/1842/Polestar-4-Long-Range-Dual-Motor"
    },
    {
        "model": "Polestar 2 Long Range Dual Motor",
        "year": "Jan 2023",
        "usableBattery": 79.0,
        "realRange": 450.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1819/Polestar-2-Long-Range-Dual-Motor"
    },
    {
        "model": "Volkswagen ID.7 Tourer Pro S",
        "year": "Aug 2024",
        "usableBattery": 86.0,
        "realRange": 505.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/2119/Volkswagen-ID7-Tourer-Pro-S"
    },
    {
        "model": "Polestar 4 Long Range Single Motor",
        "year": "Jan 2024",
        "usableBattery": 94.0,
        "realRange": 495.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1841/Polestar-4-Long-Range-Single-Motor"
    },
    {
        "model": "Toyota bZ4X AWD",
        "year": "Jun 2022",
        "usableBattery": 64.0,
        "realRange": 315.0,
        "consumptionAverage": 203.0,
        "evDatabaseUrl": "https://ev-database.org/car/1565/Toyota-bZ4X-AWD"
    },
    {
        "model": "Volvo EX40 Single Motor ER",
        "year": "Feb 2024",
        "usableBattery": 79.0,
        "realRange": 400.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/2121/Volvo-EX40-Single-Motor-ER"
    },
    {
        "model": "Audi SQ6 e-tron",
        "year": "Apr 2024",
        "usableBattery": 94.9,
        "realRange": 445.0,
        "consumptionAverage": 213.0,
        "evDatabaseUrl": "https://ev-database.org/car/2147/Audi-SQ6-e-tron"
    },
    {
        "model": "Fiat 600e",
        "year": "Jul 2023",
        "usableBattery": 50.8,
        "realRange": 305.0,
        "consumptionAverage": 167.0,
        "evDatabaseUrl": "https://ev-database.org/car/1945/Fiat-600e"
    },
    {
        "model": "Polestar 2 Standard Range Single Motor",
        "year": "Jan 2023",
        "usableBattery": 67.0,
        "realRange": 405.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/1817/Polestar-2-Standard-Range-Single-Motor"
    },
    {
        "model": "Smart #3 Brabus",
        "year": "Jan 2024",
        "usableBattery": 62.0,
        "realRange": 330.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/2000/Smart-3-Brabus"
    },
    {
        "model": "Audi Q8 e-tron Sportback 55 quattro",
        "year": "Dec 2022",
        "usableBattery": 106.0,
        "realRange": 525.0,
        "consumptionAverage": 202.0,
        "evDatabaseUrl": "https://ev-database.org/car/1772/Audi-Q8-e-tron-Sportback-55-quattro"
    },
    {
        "model": "Skoda Enyaq 60",
        "year": "Sep 2023",
        "usableBattery": 58.0,
        "realRange": 335.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/2019/Skoda-Enyaq-60"
    },
    {
        "model": "Porsche Taycan Plus",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 560.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/2099/Porsche-Taycan-Plus"
    },
    {
        "model": "Mini Cooper SE",
        "year": "Nov 2023",
        "usableBattery": 49.0,
        "realRange": 310.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1998/Mini-Cooper-SE"
    },
    {
        "model": "Hyundai Kona Electric 48 kWh",
        "year": "Jul 2023",
        "usableBattery": 48.4,
        "realRange": 295.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1829/Hyundai-Kona-Electric-48-kWh"
    },
    {
        "model": "BMW iX2 eDrive20",
        "year": "Jan 2024",
        "usableBattery": 64.7,
        "realRange": 395.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/2097/BMW-iX2-eDrive20"
    },
    {
        "model": "Ford Mustang Mach-E ER AWD",
        "year": "Oct 2023",
        "usableBattery": 91.0,
        "realRange": 445.0,
        "consumptionAverage": 204.0,
        "evDatabaseUrl": "https://ev-database.org/car/2037/Ford-Mustang-Mach-E-ER-AWD"
    },
    {
        "model": "Peugeot e-308",
        "year": "Apr 2023",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1744/Peugeot-e-308"
    },
    {
        "model": "Peugeot e-5008 73 kWh",
        "year": "Sep 2024",
        "usableBattery": 73.0,
        "realRange": 370.0,
        "consumptionAverage": 197.0,
        "evDatabaseUrl": "https://ev-database.org/car/2149/Peugeot-e-5008-73-kWh"
    },
    {
        "model": "Nissan Leaf e+",
        "year": "Mar 2022",
        "usableBattery": 59.0,
        "realRange": 340.0,
        "consumptionAverage": 174.0,
        "evDatabaseUrl": "https://ev-database.org/car/1657/Nissan-Leaf-eplus"
    },
    {
        "model": "Volkswagen ID.5 Pro",
        "year": "Oct 2023",
        "usableBattery": 77.0,
        "realRange": 455.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/2031/Volkswagen-ID5-Pro"
    },
    {
        "model": "Renault 5 E-Tech 40kWh 95hp",
        "year": "Dec 2025",
        "usableBattery": 40.0,
        "realRange": 260.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/2133/Renault-5-E-Tech-40kWh-95hp"
    },
    {
        "model": "Renault Zoe ZE50 R135",
        "year": "Nov 2019",
        "usableBattery": 52.0,
        "realRange": 310.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1205/Renault-Zoe-ZE50-R135"
    },
    {
        "model": "Volkswagen ID.3 Pro S - 4 Seats",
        "year": "Mar 2023",
        "usableBattery": 77.0,
        "realRange": 455.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1832/Volkswagen-ID3-Pro-S---4-Seats"
    },
    {
        "model": "MG ZS EV Standard Range",
        "year": "Nov 2021",
        "usableBattery": 49.0,
        "realRange": 265.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1540/MG-ZS-EV-Standard-Range"
    },
    {
        "model": "Volkswagen ID.3 GTX",
        "year": "Aug 2024",
        "usableBattery": 79.0,
        "realRange": 460.0,
        "consumptionAverage": 172.0,
        "evDatabaseUrl": "https://ev-database.org/car/2152/Volkswagen-ID3-GTX"
    },
    {
        "model": "BMW i5 eDrive40 Touring",
        "year": "Feb 2024",
        "usableBattery": 81.2,
        "realRange": 455.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/2114/BMW-i5-eDrive40-Touring"
    },
    {
        "model": "Tesla Model X Plaid",
        "year": "Nov 2022",
        "usableBattery": 95.0,
        "realRange": 455.0,
        "consumptionAverage": 209.0,
        "evDatabaseUrl": "https://ev-database.org/car/1408/Tesla-Model-X-Plaid"
    },
    {
        "model": "Porsche Macan Turbo Electric",
        "year": "Jan 2024",
        "usableBattery": 95.0,
        "realRange": 480.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/2085/Porsche-Macan-Turbo-Electric"
    },
    {
        "model": "Mercedes-Benz EQB 350 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 66.5,
        "realRange": 345.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1990/Mercedes-Benz-EQB-350-4MATIC"
    },
    {
        "model": "Citroen e-C4 X",
        "year": "Nov 2022",
        "usableBattery": 46.3,
        "realRange": 285.0,
        "consumptionAverage": 162.0,
        "evDatabaseUrl": "https://ev-database.org/car/1706/Citroen-e-C4-X"
    },
    {
        "model": "Volvo EX40 Single Motor",
        "year": "Feb 2024",
        "usableBattery": 67.0,
        "realRange": 345.0,
        "consumptionAverage": 194.0,
        "evDatabaseUrl": "https://ev-database.org/car/2120/Volvo-EX40-Single-Motor"
    },
    {
        "model": "Peugeot e-208 51 kWh",
        "year": "Aug 2023",
        "usableBattery": 48.1,
        "realRange": 310.0,
        "consumptionAverage": 155.0,
        "evDatabaseUrl": "https://ev-database.org/car/1949/Peugeot-e-208-51-kWh"
    },
    {
        "model": "Mercedes-Benz EQS 580 4MATIC",
        "year": "Jun 2023",
        "usableBattery": 108.4,
        "realRange": 590.0,
        "consumptionAverage": 184.0,
        "evDatabaseUrl": "https://ev-database.org/car/2011/Mercedes-Benz-EQS-580-4MATIC"
    },
    {
        "model": "Lotus Eletre R",
        "year": "Mar 2023",
        "usableBattery": 109.0,
        "realRange": 455.0,
        "consumptionAverage": 240.0,
        "evDatabaseUrl": "https://ev-database.org/car/1768/Lotus-Eletre-R"
    },
    {
        "model": "CUPRA Born VZ",
        "year": "Jul 2024",
        "usableBattery": 79.0,
        "realRange": 460.0,
        "consumptionAverage": 172.0,
        "evDatabaseUrl": "https://ev-database.org/car/2128/CUPRA-Born-VZ"
    },
    {
        "model": "Porsche Taycan Turbo GT",
        "year": "Mar 2024",
        "usableBattery": 97.0,
        "realRange": 475.0,
        "consumptionAverage": 204.0,
        "evDatabaseUrl": "https://ev-database.org/car/2144/Porsche-Taycan-Turbo-GT"
    },
    {
        "model": "Peugeot e-2008 54 kWh",
        "year": "Jul 2023",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1947/Peugeot-e-2008-54-kWh"
    },
    {
        "model": "XPENG P7 Wing Edition",
        "year": "Feb 2023",
        "usableBattery": 82.7,
        "realRange": 465.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1823/XPENG-P7-Wing-Edition"
    },
    {
        "model": "Volkswagen ID.4 Pure",
        "year": "Oct 2023",
        "usableBattery": 52.0,
        "realRange": 285.0,
        "consumptionAverage": 182.0,
        "evDatabaseUrl": "https://ev-database.org/car/2027/Volkswagen-ID4-Pure"
    },
    {
        "model": "BMW iX M60",
        "year": "Apr 2022",
        "usableBattery": 105.2,
        "realRange": 485.0,
        "consumptionAverage": 217.0,
        "evDatabaseUrl": "https://ev-database.org/car/1590/BMW-iX-M60"
    },
    {
        "model": "Jaguar I-Pace EV400",
        "year": "Jan 2023",
        "usableBattery": 84.7,
        "realRange": 380.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/1812/Jaguar-I-Pace-EV400"
    },
    {
        "model": "Dacia Spring Electric 65 Extreme",
        "year": "Jan 2023",
        "usableBattery": 25.0,
        "realRange": 160.0,
        "consumptionAverage": 156.0,
        "evDatabaseUrl": "https://ev-database.org/car/1813/Dacia-Spring-Electric-65-Extreme"
    },
    {
        "model": "CUPRA Tavascan VZ",
        "year": "Apr 2024",
        "usableBattery": 77.0,
        "realRange": 430.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/1972/CUPRA-Tavascan-VZ"
    },
    {
        "model": "Kia EV6 Standard Range 2WD",
        "year": "Oct 2021",
        "usableBattery": 54.0,
        "realRange": 305.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/1480/Kia-EV6-Standard-Range-2WD"
    },
    {
        "model": "Audi Q8 e-tron 50 quattro",
        "year": "Dec 2022",
        "usableBattery": 89.0,
        "realRange": 425.0,
        "consumptionAverage": 209.0,
        "evDatabaseUrl": "https://ev-database.org/car/1769/Audi-Q8-e-tron-50-quattro"
    },
    {
        "model": "VinFast VF 9 Extended Range",
        "year": "May 2024",
        "usableBattery": 123.0,
        "realRange": 520.0,
        "consumptionAverage": 237.0,
        "evDatabaseUrl": "https://ev-database.org/car/1811/VinFast-VF-9-Extended-Range"
    },
    {
        "model": "Peugeot e-208 50 kWh",
        "year": "Aug 2023",
        "usableBattery": 46.3,
        "realRange": 290.0,
        "consumptionAverage": 160.0,
        "evDatabaseUrl": "https://ev-database.org/car/1948/Peugeot-e-208-50-kWh"
    },
    {
        "model": "Renault Scenic E-Tech EV60 170hp",
        "year": "Dec 2023",
        "usableBattery": 60.0,
        "realRange": 340.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/2068/Renault-Scenic-E-Tech-EV60-170hp"
    },
    {
        "model": "Volkswagen ID.3 GTX Performance",
        "year": "Aug 2024",
        "usableBattery": 79.0,
        "realRange": 460.0,
        "consumptionAverage": 172.0,
        "evDatabaseUrl": "https://ev-database.org/car/2153/Volkswagen-ID3-GTX-Performance"
    },
    {
        "model": "Lucid Air Touring",
        "year": "May 2023",
        "usableBattery": 92.0,
        "realRange": 580.0,
        "consumptionAverage": 159.0,
        "evDatabaseUrl": "https://ev-database.org/car/1317/Lucid-Air-Touring"
    },
    {
        "model": "Porsche Taycan",
        "year": "Feb 2024",
        "usableBattery": 82.3,
        "realRange": 485.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/2098/Porsche-Taycan"
    },
    {
        "model": "XPENG G9 RWD Long Range",
        "year": "Feb 2023",
        "usableBattery": 93.1,
        "realRange": 480.0,
        "consumptionAverage": 194.0,
        "evDatabaseUrl": "https://ev-database.org/car/1825/XPENG-G9-RWD-Long-Range"
    },
    {
        "model": "Opel Corsa Electric 50 kWh",
        "year": "Jul 2023",
        "usableBattery": 46.3,
        "realRange": 295.0,
        "consumptionAverage": 157.0,
        "evDatabaseUrl": "https://ev-database.org/car/1941/Opel-Corsa-Electric-50-kWh"
    },
    {
        "model": "Audi Q4 e-tron 45 quattro",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 395.0,
        "consumptionAverage": 195.0,
        "evDatabaseUrl": "https://ev-database.org/car/2014/Audi-Q4-e-tron-45-quattro"
    },
    {
        "model": "Volkswagen ID.4 GTX",
        "year": "Oct 2023",
        "usableBattery": 77.0,
        "realRange": 420.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/2030/Volkswagen-ID4-GTX"
    },
    {
        "model": "MG Marvel R",
        "year": "Oct 2021",
        "usableBattery": 70.0,
        "realRange": 365.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/1524/MG-Marvel-R"
    },
    {
        "model": "Opel Corsa Electric 51 kWh",
        "year": "Jul 2023",
        "usableBattery": 48.1,
        "realRange": 315.0,
        "consumptionAverage": 153.0,
        "evDatabaseUrl": "https://ev-database.org/car/1942/Opel-Corsa-Electric-51-kWh"
    },
    {
        "model": "Skoda Enyaq Coupe RS",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 455.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/2026/Skoda-Enyaq-Coupe-RS"
    },
    {
        "model": "GWM ORA 3 48 kWh",
        "year": "Jan 2024",
        "usableBattery": 45.4,
        "realRange": 260.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/2091/GWM-ORA-3-48-kWh"
    },
    {
        "model": "Nissan Ariya 63kWh",
        "year": "Jul 2022",
        "usableBattery": 63.0,
        "realRange": 335.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1301/Nissan-Ariya-63kWh"
    },
    {
        "model": "SsangYong Korando e-Motion",
        "year": "Feb 2022",
        "usableBattery": 56.0,
        "realRange": 290.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1589/SsangYong-Korando-e-Motion"
    },
    {
        "model": "BMW i7 eDrive50",
        "year": "May 2023",
        "usableBattery": 101.7,
        "realRange": 520.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/1905/BMW-i7-eDrive50"
    },
    {
        "model": "Audi Q4 Sportback e-tron 45",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 435.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/2016/Audi-Q4-Sportback-e-tron-45"
    },
    {
        "model": "Renault Megane E-Tech EV40 130hp",
        "year": "Apr 2022",
        "usableBattery": 40.0,
        "realRange": 260.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/1536/Renault-Megane-E-Tech-EV40-130hp"
    },
    {
        "model": "Volvo EX90 Twin Motor",
        "year": "Dec 2022",
        "usableBattery": 107.0,
        "realRange": 465.0,
        "consumptionAverage": 230.0,
        "evDatabaseUrl": "https://ev-database.org/car/1775/Volvo-EX90-Twin-Motor"
    },
    {
        "model": "Volkswagen ID. Buzz LWB Pro S",
        "year": "May 2024",
        "usableBattery": 86.0,
        "realRange": 370.0,
        "consumptionAverage": 232.0,
        "evDatabaseUrl": "https://ev-database.org/car/2155/Volkswagen-ID-Buzz-LWB-Pro-S"
    },
    {
        "model": "Polestar 3 Long Range Dual motor",
        "year": "Nov 2022",
        "usableBattery": 107.0,
        "realRange": 490.0,
        "consumptionAverage": 218.0,
        "evDatabaseUrl": "https://ev-database.org/car/1758/Polestar-3-Long-Range-Dual-motor"
    },
    {
        "model": "Opel Astra Sports Tourer Electric",
        "year": "Oct 2023",
        "usableBattery": 50.8,
        "realRange": 310.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1793/Opel-Astra-Sports-Tourer-Electric"
    },
    {
        "model": "Volvo EX40 Twin Motor",
        "year": "Feb 2024",
        "usableBattery": 79.0,
        "realRange": 385.0,
        "consumptionAverage": 205.0,
        "evDatabaseUrl": "https://ev-database.org/car/2136/Volvo-EX40-Twin-Motor"
    },
    {
        "model": "XPENG G9 RWD Standard Range",
        "year": "Feb 2023",
        "usableBattery": 75.8,
        "realRange": 390.0,
        "consumptionAverage": 194.0,
        "evDatabaseUrl": "https://ev-database.org/car/1824/XPENG-G9-RWD-Standard-Range"
    },
    {
        "model": "Volvo EC40 Single Motor ER",
        "year": "Feb 2024",
        "usableBattery": 79.0,
        "realRange": 420.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/2124/Volvo-EC40-Single-Motor-ER"
    },
    {
        "model": "NIO ET7 100 kWh",
        "year": "Oct 2022",
        "usableBattery": 90.0,
        "realRange": 505.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1752/NIO-ET7-100-kWh"
    },
    {
        "model": "Mini Cooper E",
        "year": "Dec 2023",
        "usableBattery": 37.0,
        "realRange": 235.0,
        "consumptionAverage": 157.0,
        "evDatabaseUrl": "https://ev-database.org/car/1997/Mini-Cooper-E"
    },
    {
        "model": "BMW i7 M70 xDrive",
        "year": "May 2023",
        "usableBattery": 101.7,
        "realRange": 490.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/1838/BMW-i7-M70-xDrive"
    },
    {
        "model": "Maserati Grecale Folgore",
        "year": "Jan 2024",
        "usableBattery": 95.0,
        "realRange": 405.0,
        "consumptionAverage": 235.0,
        "evDatabaseUrl": "https://ev-database.org/car/1843/Maserati-Grecale-Folgore"
    },
    {
        "model": "Renault Megane E-Tech EV60 130hp",
        "year": "Apr 2022",
        "usableBattery": 60.0,
        "realRange": 380.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1588/Renault-Megane-E-Tech-EV60-130hp"
    },
    {
        "model": "Mercedes-Benz EQS 450 4MATIC",
        "year": "Jun 2023",
        "usableBattery": 108.4,
        "realRange": 610.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/2009/Mercedes-Benz-EQS-450-4MATIC"
    },
    {
        "model": "Voyah Free 106 kWh",
        "year": "Dec 2023",
        "usableBattery": 100.0,
        "realRange": 480.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/2049/Voyah-Free-106-kWh"
    },
    {
        "model": "Lotus Emeya",
        "year": "Mar 2024",
        "usableBattery": 100.0,
        "realRange": 530.0,
        "consumptionAverage": 189.0,
        "evDatabaseUrl": "https://ev-database.org/car/2141/Lotus-Emeya"
    },
    {
        "model": "Peugeot e-308 SW",
        "year": "Aug 2023",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1745/Peugeot-e-308-SW"
    },
    {
        "model": "Ford Mustang Mach-E SR RWD",
        "year": "Oct 2023",
        "usableBattery": 72.6,
        "realRange": 380.0,
        "consumptionAverage": 191.0,
        "evDatabaseUrl": "https://ev-database.org/car/2034/Ford-Mustang-Mach-E-SR-RWD"
    },
    {
        "model": "Citroen e-C4 X 54 kWh",
        "year": "Jun 2023",
        "usableBattery": 50.8,
        "realRange": 330.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/1939/Citroen-e-C4-X-54-kWh"
    },
    {
        "model": "Mercedes-Benz EQB 300 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 66.5,
        "realRange": 345.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1989/Mercedes-Benz-EQB-300-4MATIC"
    },
    {
        "model": "Maserati GranTurismo Folgore",
        "year": "Jan 2024",
        "usableBattery": 83.0,
        "realRange": 420.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/1803/Maserati-GranTurismo-Folgore"
    },
    {
        "model": "MG Marvel R Performance",
        "year": "Oct 2021",
        "usableBattery": 70.0,
        "realRange": 350.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1475/MG-Marvel-R-Performance"
    },
    {
        "model": "Volkswagen ID.4 Pro 4MOTION",
        "year": "Oct 2023",
        "usableBattery": 77.0,
        "realRange": 425.0,
        "consumptionAverage": 181.0,
        "evDatabaseUrl": "https://ev-database.org/car/2029/Volkswagen-ID4-Pro-4MOTION"
    },
    {
        "model": "Skoda Enyaq 85x",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 440.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/2021/Skoda-Enyaq-85x"
    },
    {
        "model": "Porsche Taycan 4S Plus",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 550.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/2101/Porsche-Taycan-4S-Plus"
    },
    {
        "model": "Mini Countryman SE ALL4",
        "year": "Feb 2024",
        "usableBattery": 64.7,
        "realRange": 370.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1995/Mini-Countryman-SE-ALL4"
    },
    {
        "model": "NIO EL7 100 kWh",
        "year": "Dec 2022",
        "usableBattery": 90.0,
        "realRange": 430.0,
        "consumptionAverage": 209.0,
        "evDatabaseUrl": "https://ev-database.org/car/1789/NIO-EL7-100-kWh"
    },
    {
        "model": "Audi Q4 e-tron 55 quattro",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 395.0,
        "consumptionAverage": 195.0,
        "evDatabaseUrl": "https://ev-database.org/car/2015/Audi-Q4-e-tron-55-quattro"
    },
    {
        "model": "XPENG P7 RWD Long Range",
        "year": "Feb 2023",
        "usableBattery": 82.7,
        "realRange": 495.0,
        "consumptionAverage": 167.0,
        "evDatabaseUrl": "https://ev-database.org/car/1821/XPENG-P7-RWD-Long-Range"
    },
    {
        "model": "Renault Kangoo E-Tech Electric",
        "year": "Dec 2022",
        "usableBattery": 45.0,
        "realRange": 220.0,
        "consumptionAverage": 205.0,
        "evDatabaseUrl": "https://ev-database.org/car/1802/Renault-Kangoo-E-Tech-Electric"
    },
    {
        "model": "CUPRA Tavascan Endurance",
        "year": "Apr 2024",
        "usableBattery": 77.0,
        "realRange": 450.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1971/CUPRA-Tavascan-Endurance"
    },
    {
        "model": "Porsche Taycan Turbo GT Weissach",
        "year": "Mar 2024",
        "usableBattery": 97.0,
        "realRange": 475.0,
        "consumptionAverage": 204.0,
        "evDatabaseUrl": "https://ev-database.org/car/2145/Porsche-Taycan-Turbo-GT-Weissach"
    },
    {
        "model": "Ford Mustang Mach-E GT",
        "year": "Oct 2023",
        "usableBattery": 91.0,
        "realRange": 425.0,
        "consumptionAverage": 214.0,
        "evDatabaseUrl": "https://ev-database.org/car/2038/Ford-Mustang-Mach-E-GT"
    },
    {
        "model": "Renault 5 E-Tech 40kWh 120hp",
        "year": "Jun 2025",
        "usableBattery": 40.0,
        "realRange": 260.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/2134/Renault-5-E-Tech-40kWh-120hp"
    },
    {
        "model": "Genesis GV60 Premium",
        "year": "Jun 2022",
        "usableBattery": 74.0,
        "realRange": 390.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1647/Genesis-GV60-Premium"
    },
    {
        "model": "Fiat 500e Hatchback 24 kWh",
        "year": "Nov 2020",
        "usableBattery": 21.3,
        "realRange": 135.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1327/Fiat-500e-Hatchback-24-kWh"
    },
    {
        "model": "BMW i5 xDrive40 Sedan",
        "year": "Feb 2024",
        "usableBattery": 81.2,
        "realRange": 455.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/2096/BMW-i5-xDrive40-Sedan"
    },
    {
        "model": "Smart #3 Premium",
        "year": "Jan 2024",
        "usableBattery": 62.0,
        "realRange": 355.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/2054/Smart-3-Premium"
    },
    {
        "model": "Seres 3",
        "year": "Oct 2021",
        "usableBattery": 51.0,
        "realRange": 260.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/1804/Seres-3"
    },
    {
        "model": "Audi SQ8 e-tron",
        "year": "May 2023",
        "usableBattery": 106.0,
        "realRange": 455.0,
        "consumptionAverage": 233.0,
        "evDatabaseUrl": "https://ev-database.org/car/1773/Audi-SQ8-e-tron"
    },
    {
        "model": "NIO EL6 100 kWh",
        "year": "Jul 2023",
        "usableBattery": 90.0,
        "realRange": 435.0,
        "consumptionAverage": 207.0,
        "evDatabaseUrl": "https://ev-database.org/car/1922/NIO-EL6-100-kWh"
    },
    {
        "model": "Lotus Eletre S",
        "year": "Mar 2023",
        "usableBattery": 109.0,
        "realRange": 480.0,
        "consumptionAverage": 227.0,
        "evDatabaseUrl": "https://ev-database.org/car/2066/Lotus-Eletre-S"
    },
    {
        "model": "Citroen e-Berlingo XL 50 kWh",
        "year": "Mar 2024",
        "usableBattery": 50.0,
        "realRange": 230.0,
        "consumptionAverage": 217.0,
        "evDatabaseUrl": "https://ev-database.org/car/2160/Citroen-e-Berlingo-XL-50-kWh"
    },
    {
        "model": "Opel Mokka-e 54 kWh",
        "year": "Oct 2023",
        "usableBattery": 50.8,
        "realRange": 290.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/2051/Opel-Mokka-e-54-kWh"
    },
    {
        "model": "Volvo EX90 Twin Motor Performance",
        "year": "Dec 2022",
        "usableBattery": 107.0,
        "realRange": 450.0,
        "consumptionAverage": 238.0,
        "evDatabaseUrl": "https://ev-database.org/car/1776/Volvo-EX90-Twin-Motor-Performance"
    },
    {
        "model": "Peugeot e-2008 50 kWh",
        "year": "Aug 2023",
        "usableBattery": 46.3,
        "realRange": 270.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1946/Peugeot-e-2008-50-kWh"
    },
    {
        "model": "Mercedes-Benz EQS SUV 450+",
        "year": "Oct 2023",
        "usableBattery": 118.0,
        "realRange": 540.0,
        "consumptionAverage": 219.0,
        "evDatabaseUrl": "https://ev-database.org/car/2087/Mercedes-Benz-EQS-SUV-450plus"
    },
    {
        "model": "Volvo EC40 Twin Motor",
        "year": "Feb 2024",
        "usableBattery": 79.0,
        "realRange": 400.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/2137/Volvo-EC40-Twin-Motor"
    },
    {
        "model": "Citroen e-C4 54 kWh",
        "year": "Jun 2023",
        "usableBattery": 50.8,
        "realRange": 330.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/1938/Citroen-e-C4-54-kWh"
    },
    {
        "model": "Hongqi E-HS9 84 kWh",
        "year": "Dec 2022",
        "usableBattery": 76.5,
        "realRange": 320.0,
        "consumptionAverage": 239.0,
        "evDatabaseUrl": "https://ev-database.org/car/1746/Hongqi-E-HS9-84-kWh"
    },
    {
        "model": "Mercedes-Benz EQS SUV Maybach 680",
        "year": "Jan 2024",
        "usableBattery": 118.0,
        "realRange": 490.0,
        "consumptionAverage": 241.0,
        "evDatabaseUrl": "https://ev-database.org/car/2086/Mercedes-Benz-EQS-SUV-Maybach-680"
    },
    {
        "model": "Dacia Spring Electric 65",
        "year": "May 2024",
        "usableBattery": 25.0,
        "realRange": 160.0,
        "consumptionAverage": 156.0,
        "evDatabaseUrl": "https://ev-database.org/car/2127/Dacia-Spring-Electric-65"
    },
    {
        "model": "XPENG G9 AWD Performance",
        "year": "Feb 2023",
        "usableBattery": 93.1,
        "realRange": 465.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1826/XPENG-G9-AWD-Performance"
    },
    {
        "model": "Lucid Air Pure RWD",
        "year": "Feb 2024",
        "usableBattery": 92.0,
        "realRange": 565.0,
        "consumptionAverage": 163.0,
        "evDatabaseUrl": "https://ev-database.org/car/2116/Lucid-Air-Pure-RWD"
    },
    {
        "model": "Peugeot e-5008 73 kWh Dual Motor",
        "year": "Sep 2024",
        "usableBattery": 73.0,
        "realRange": 365.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/2150/Peugeot-e-5008-73-kWh-Dual-Motor"
    },
    {
        "model": "Mercedes-Benz EQE SUV 350 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 90.6,
        "realRange": 435.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/2047/Mercedes-Benz-EQE-SUV-350-4MATIC"
    },
    {
        "model": "Kia e-Soul 64 kWh",
        "year": "Sep 2022",
        "usableBattery": 64.0,
        "realRange": 370.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/1749/Kia-e-Soul-64-kWh"
    },
    {
        "model": "Skoda Enyaq Coupe 85x",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 470.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/2025/Skoda-Enyaq-Coupe-85x"
    },
    {
        "model": "Nissan Ariya e-4ORCE 87kWh - 225 kW",
        "year": "Jul 2022",
        "usableBattery": 87.0,
        "realRange": 405.0,
        "consumptionAverage": 215.0,
        "evDatabaseUrl": "https://ev-database.org/car/1304/Nissan-Ariya-e-4ORCE-87kWh---225-kW"
    },
    {
        "model": "MG MG5 Electric Standard Range",
        "year": "Jun 2022",
        "usableBattery": 46.0,
        "realRange": 265.0,
        "consumptionAverage": 174.0,
        "evDatabaseUrl": "https://ev-database.org/car/1646/MG-MG5-Electric-Standard-Range"
    },
    {
        "model": "Mercedes-Benz EQS SUV 580 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 118.0,
        "realRange": 530.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/2090/Mercedes-Benz-EQS-SUV-580-4MATIC"
    },
    {
        "model": "Nissan Townstar EV Passenger",
        "year": "Oct 2023",
        "usableBattery": 45.0,
        "realRange": 225.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/2042/Nissan-Townstar-EV-Passenger"
    },
    {
        "model": "Lotus Emeya S",
        "year": "Mar 2024",
        "usableBattery": 100.0,
        "realRange": 530.0,
        "consumptionAverage": 189.0,
        "evDatabaseUrl": "https://ev-database.org/car/2142/Lotus-Emeya-S"
    },
    {
        "model": "NIO ET5 Touring 100 kWh",
        "year": "Jul 2023",
        "usableBattery": 90.0,
        "realRange": 485.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/1916/NIO-ET5-Touring-100-kWh"
    },
    {
        "model": "DS 3 E-Tense",
        "year": "Nov 2022",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1791/DS-3-E-Tense"
    },
    {
        "model": "Ford Explorer Standard Range RWD",
        "year": "Nov 2024",
        "usableBattery": 52.0,
        "realRange": 280.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/2167/Ford-Explorer-Standard-Range-RWD"
    },
    {
        "model": "Mercedes-Benz EQS AMG 53 4MATIC+",
        "year": "Jun 2023",
        "usableBattery": 108.4,
        "realRange": 535.0,
        "consumptionAverage": 203.0,
        "evDatabaseUrl": "https://ev-database.org/car/2012/Mercedes-Benz-EQS-AMG-53-4MATICplus"
    },
    {
        "model": "Zeekr X Long Range RWD",
        "year": "Oct 2023",
        "usableBattery": 64.0,
        "realRange": 355.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1936/Zeekr-X-Long-Range-RWD"
    },
    {
        "model": "Citroen e-Berlingo M 50 kWh",
        "year": "Mar 2024",
        "usableBattery": 50.0,
        "realRange": 235.0,
        "consumptionAverage": 213.0,
        "evDatabaseUrl": "https://ev-database.org/car/2159/Citroen-e-Berlingo-M-50-kWh"
    },
    {
        "model": "Polestar 2 Long Range Performance",
        "year": "Jan 2023",
        "usableBattery": 79.0,
        "realRange": 450.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1820/Polestar-2-Long-Range-Performance"
    },
    {
        "model": "Smart #3 Pro",
        "year": "Jan 2024",
        "usableBattery": 47.0,
        "realRange": 265.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/2052/Smart-3-Pro"
    },
    {
        "model": "Ford Mustang Mach-E SR AWD",
        "year": "Oct 2023",
        "usableBattery": 72.6,
        "realRange": 350.0,
        "consumptionAverage": 207.0,
        "evDatabaseUrl": "https://ev-database.org/car/2036/Ford-Mustang-Mach-E-SR-AWD"
    },
    {
        "model": "Volkswagen ID.5 GTX",
        "year": "Oct 2023",
        "usableBattery": 77.0,
        "realRange": 430.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/2033/Volkswagen-ID5-GTX"
    },
    {
        "model": "Volvo EC40 Single Motor",
        "year": "Feb 2024",
        "usableBattery": 67.0,
        "realRange": 360.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/2123/Volvo-EC40-Single-Motor"
    },
    {
        "model": "Mercedes-Benz EQE SUV 300",
        "year": "Oct 2023",
        "usableBattery": 90.6,
        "realRange": 450.0,
        "consumptionAverage": 201.0,
        "evDatabaseUrl": "https://ev-database.org/car/2045/Mercedes-Benz-EQE-SUV-300"
    },
    {
        "model": "Porsche Taycan Turbo S",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 500.0,
        "consumptionAverage": 194.0,
        "evDatabaseUrl": "https://ev-database.org/car/2103/Porsche-Taycan-Turbo-S"
    },
    {
        "model": "Hongqi E-HS9 120 kWh",
        "year": "Sep 2023",
        "usableBattery": 112.0,
        "realRange": 460.0,
        "consumptionAverage": 243.0,
        "evDatabaseUrl": "https://ev-database.org/car/2050/Hongqi-E-HS9-120-kWh"
    },
    {
        "model": "Lotus Emeya R",
        "year": "Mar 2024",
        "usableBattery": 100.0,
        "realRange": 470.0,
        "consumptionAverage": 213.0,
        "evDatabaseUrl": "https://ev-database.org/car/2143/Lotus-Emeya-R"
    },
    {
        "model": "Polestar 3 Long Range Performance",
        "year": "Nov 2022",
        "usableBattery": 107.0,
        "realRange": 470.0,
        "consumptionAverage": 228.0,
        "evDatabaseUrl": "https://ev-database.org/car/1759/Polestar-3-Long-Range-Performance"
    },
    {
        "model": "Lexus UX 300e",
        "year": "Apr 2023",
        "usableBattery": 64.0,
        "realRange": 340.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1943/Lexus-UX-300e"
    },
    {
        "model": "XPENG P7 AWD Performance",
        "year": "Feb 2023",
        "usableBattery": 82.7,
        "realRange": 460.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1822/XPENG-P7-AWD-Performance"
    },
    {
        "model": "Genesis G80 Electrified Luxury",
        "year": "Jun 2022",
        "usableBattery": 82.5,
        "realRange": 440.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1703/Genesis-G80-Electrified-Luxury"
    },
    {
        "model": "Mercedes-Benz EQE 350",
        "year": "Jun 2023",
        "usableBattery": 89.0,
        "realRange": 515.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/1898/Mercedes-Benz-EQE-350"
    },
    {
        "model": "NIO ET5 75 kWh",
        "year": "Dec 2022",
        "usableBattery": 70.5,
        "realRange": 395.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1786/NIO-ET5-75-kWh"
    },
    {
        "model": "Smart #1 Premium",
        "year": "Jun 2023",
        "usableBattery": 62.0,
        "realRange": 335.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/2053/Smart-1-Premium"
    },
    {
        "model": "Aiways U5",
        "year": "Apr 2022",
        "usableBattery": 60.0,
        "realRange": 315.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1678/Aiways-U5"
    },
    {
        "model": "GWM ORA 3 63 kWh",
        "year": "Jan 2024",
        "usableBattery": 59.3,
        "realRange": 340.0,
        "consumptionAverage": 174.0,
        "evDatabaseUrl": "https://ev-database.org/car/2092/GWM-ORA-3-63-kWh"
    },
    {
        "model": "Peugeot e-3008 73 kWh Dual Motor",
        "year": "Jun 2024",
        "usableBattery": 73.0,
        "realRange": 380.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/2004/Peugeot-e-3008-73-kWh-Dual-Motor"
    },
    {
        "model": "Mercedes-Benz EQS SUV 450 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 118.0,
        "realRange": 530.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/2088/Mercedes-Benz-EQS-SUV-450-4MATIC"
    },
    {
        "model": "Mercedes-Benz EQE SUV 350+",
        "year": "Oct 2023",
        "usableBattery": 96.0,
        "realRange": 475.0,
        "consumptionAverage": 202.0,
        "evDatabaseUrl": "https://ev-database.org/car/2046/Mercedes-Benz-EQE-SUV-350plus"
    },
    {
        "model": "BMW i5 M60 xDrive Touring",
        "year": "Feb 2024",
        "usableBattery": 81.2,
        "realRange": 415.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/2115/BMW-i5-M60-xDrive-Touring"
    },
    {
        "model": "Abarth 500e Hatchback",
        "year": "May 2023",
        "usableBattery": 37.8,
        "realRange": 225.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1903/Abarth-500e-Hatchback"
    },
    {
        "model": "Volvo EX90 Single Motor",
        "year": "Jul 2023",
        "usableBattery": 101.0,
        "realRange": 460.0,
        "consumptionAverage": 220.0,
        "evDatabaseUrl": "https://ev-database.org/car/1950/Volvo-EX90-Single-Motor"
    },
    {
        "model": "Audi Q4 Sportback e-tron 45 quattro",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 415.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/2017/Audi-Q4-Sportback-e-tron-45-quattro"
    },
    {
        "model": "Volvo EX40 Twin Motor Performance",
        "year": "Feb 2024",
        "usableBattery": 79.0,
        "realRange": 380.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/2122/Volvo-EX40-Twin-Motor-Performance"
    },
    {
        "model": "BYD DOLPHIN 44.9 kWh Boost",
        "year": "Jul 2023",
        "usableBattery": 44.9,
        "realRange": 255.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1918/BYD-DOLPHIN-449-kWh-Boost"
    },
    {
        "model": "Mercedes-Benz EQE 350 4MATIC",
        "year": "Jun 2023",
        "usableBattery": 89.0,
        "realRange": 510.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1899/Mercedes-Benz-EQE-350-4MATIC"
    },
    {
        "model": "Smart #3 Pro+",
        "year": "Jan 2024",
        "usableBattery": 62.0,
        "realRange": 355.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1999/Smart-3-Proplus"
    },
    {
        "model": "Audi Q4 Sportback e-tron 55 quattro",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 415.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/2018/Audi-Q4-Sportback-e-tron-55-quattro"
    },
    {
        "model": "Mercedes-Benz EQE SUV AMG 53 4MATIC+",
        "year": "May 2023",
        "usableBattery": 90.6,
        "realRange": 410.0,
        "consumptionAverage": 221.0,
        "evDatabaseUrl": "https://ev-database.org/car/1764/Mercedes-Benz-EQE-SUV-AMG-53-4MATICplus"
    },
    {
        "model": "Volvo EC40 Twin Motor Performance",
        "year": "Feb 2024",
        "usableBattery": 79.0,
        "realRange": 400.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/2125/Volvo-EC40-Twin-Motor-Performance"
    },
    {
        "model": "Mercedes-Benz EQA 300 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 66.5,
        "realRange": 355.0,
        "consumptionAverage": 187.0,
        "evDatabaseUrl": "https://ev-database.org/car/1986/Mercedes-Benz-EQA-300-4MATIC"
    },
    {
        "model": "Fiat 500e 3+1 42 kWh",
        "year": "Nov 2020",
        "usableBattery": 37.3,
        "realRange": 235.0,
        "consumptionAverage": 159.0,
        "evDatabaseUrl": "https://ev-database.org/car/1328/Fiat-500e-3plus1-42-kWh"
    },
    {
        "model": "Mercedes-Benz EQE 500 4MATIC",
        "year": "Jun 2023",
        "usableBattery": 90.6,
        "realRange": 505.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/1900/Mercedes-Benz-EQE-500-4MATIC"
    },
    {
        "model": "Audi Q8 e-tron Sportback 50 quattro",
        "year": "Dec 2022",
        "usableBattery": 89.0,
        "realRange": 445.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1771/Audi-Q8-e-tron-Sportback-50-quattro"
    },
    {
        "model": "Mercedes-Benz EQV 300 Long",
        "year": "Feb 2024",
        "usableBattery": 90.0,
        "realRange": 315.0,
        "consumptionAverage": 286.0,
        "evDatabaseUrl": "https://ev-database.org/car/2131/Mercedes-Benz-EQV-300-Long"
    },
    {
        "model": "Genesis GV70 Electrified Sport",
        "year": "Oct 2022",
        "usableBattery": 74.0,
        "realRange": 350.0,
        "consumptionAverage": 211.0,
        "evDatabaseUrl": "https://ev-database.org/car/1725/Genesis-GV70-Electrified-Sport"
    },
    {
        "model": "CUPRA Born 170 kW - 58 kWh",
        "year": "Mar 2022",
        "usableBattery": 58.0,
        "realRange": 345.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1517/CUPRA-Born-170-kW---58-kWh"
    },
    {
        "model": "Mercedes-Benz EQE AMG 43 4MATIC",
        "year": "Jun 2023",
        "usableBattery": 90.6,
        "realRange": 450.0,
        "consumptionAverage": 201.0,
        "evDatabaseUrl": "https://ev-database.org/car/1901/Mercedes-Benz-EQE-AMG-43-4MATIC"
    },
    {
        "model": "Mercedes-Benz EQE SUV 500 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 96.0,
        "realRange": 455.0,
        "consumptionAverage": 211.0,
        "evDatabaseUrl": "https://ev-database.org/car/2048/Mercedes-Benz-EQE-SUV-500-4MATIC"
    },
    {
        "model": "Skoda Enyaq RS",
        "year": "Sep 2023",
        "usableBattery": 77.0,
        "realRange": 435.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/2022/Skoda-Enyaq-RS"
    },
    {
        "model": "Zeekr 001 Privilege AWD",
        "year": "Sep 2023",
        "usableBattery": 94.0,
        "realRange": 495.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1935/Zeekr-001-Privilege-AWD"
    },
    {
        "model": "Volkswagen ID. Buzz LWB Pro",
        "year": "May 2024",
        "usableBattery": 77.0,
        "realRange": 335.0,
        "consumptionAverage": 230.0,
        "evDatabaseUrl": "https://ev-database.org/car/2154/Volkswagen-ID-Buzz-LWB-Pro"
    },
    {
        "model": "e.Go e.wave X",
        "year": "Dec 2022",
        "usableBattery": 27.0,
        "realRange": 150.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1896/eGo-ewave-X"
    },
    {
        "model": "Kia e-Soul 39.2 kWh",
        "year": "Sep 2022",
        "usableBattery": 39.2,
        "realRange": 230.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1750/Kia-e-Soul-392-kWh"
    },
    {
        "model": "Mercedes-Benz EQS 500 4MATIC",
        "year": "Jun 2023",
        "usableBattery": 108.4,
        "realRange": 590.0,
        "consumptionAverage": 184.0,
        "evDatabaseUrl": "https://ev-database.org/car/2010/Mercedes-Benz-EQS-500-4MATIC"
    },
    {
        "model": "Porsche Taycan Turbo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 520.0,
        "consumptionAverage": 187.0,
        "evDatabaseUrl": "https://ev-database.org/car/2102/Porsche-Taycan-Turbo"
    },
    {
        "model": "Smart #1 Pro",
        "year": "Nov 2023",
        "usableBattery": 47.0,
        "realRange": 250.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/2041/Smart-1-Pro"
    },
    {
        "model": "Mercedes-Benz EQA 350 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 66.5,
        "realRange": 355.0,
        "consumptionAverage": 187.0,
        "evDatabaseUrl": "https://ev-database.org/car/1987/Mercedes-Benz-EQA-350-4MATIC"
    },
    {
        "model": "Skoda Enyaq Coupe 60",
        "year": "Oct 2023",
        "usableBattery": 58.0,
        "realRange": 355.0,
        "consumptionAverage": 163.0,
        "evDatabaseUrl": "https://ev-database.org/car/2023/Skoda-Enyaq-Coupe-60"
    },
    {
        "model": "VinFast VF 8 Eco Extended Range",
        "year": "Nov 2023",
        "usableBattery": 87.7,
        "realRange": 425.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/1807/VinFast-VF-8-Eco-Extended-Range"
    },
    {
        "model": "Mercedes-Benz EQT 200 Standard",
        "year": "Jun 2023",
        "usableBattery": 45.0,
        "realRange": 225.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1908/Mercedes-Benz-EQT-200-Standard"
    },
    {
        "model": "Mercedes-Benz EQE AMG 53 4MATIC+",
        "year": "Jun 2023",
        "usableBattery": 90.6,
        "realRange": 450.0,
        "consumptionAverage": 201.0,
        "evDatabaseUrl": "https://ev-database.org/car/1902/Mercedes-Benz-EQE-AMG-53-4MATICplus"
    },
    {
        "model": "Porsche Taycan 4S",
        "year": "Feb 2024",
        "usableBattery": 82.3,
        "realRange": 475.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/2100/Porsche-Taycan-4S"
    },
    {
        "model": "Fiat 500e Cabrio 42 kWh",
        "year": "Nov 2020",
        "usableBattery": 37.3,
        "realRange": 230.0,
        "consumptionAverage": 162.0,
        "evDatabaseUrl": "https://ev-database.org/car/1275/Fiat-500e-Cabrio-42-kWh"
    },
    {
        "model": "Porsche Taycan Plus Sport Turismo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 515.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/2105/Porsche-Taycan-Plus-Sport-Turismo"
    },
    {
        "model": "Porsche Taycan 4S Cross Turismo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 505.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/2111/Porsche-Taycan-4S-Cross-Turismo"
    },
    {
        "model": "Mercedes-Benz eVito Tourer Long 90 kWh",
        "year": "Feb 2024",
        "usableBattery": 90.0,
        "realRange": 320.0,
        "consumptionAverage": 281.0,
        "evDatabaseUrl": "https://ev-database.org/car/2140/Mercedes-Benz-eVito-Tourer-Long-90-kWh"
    },
    {
        "model": "Nissan Ariya e-4ORCE 87kWh - 290 kW",
        "year": "Apr 2023",
        "usableBattery": 87.0,
        "realRange": 405.0,
        "consumptionAverage": 215.0,
        "evDatabaseUrl": "https://ev-database.org/car/1305/Nissan-Ariya-e-4ORCE-87kWh---290-kW"
    },
    {
        "model": "Audi SQ8 e-tron Sportback",
        "year": "May 2023",
        "usableBattery": 106.0,
        "realRange": 480.0,
        "consumptionAverage": 221.0,
        "evDatabaseUrl": "https://ev-database.org/car/1774/Audi-SQ8-e-tron-Sportback"
    },
    {
        "model": "Smart #1 Pulse",
        "year": "Jun 2023",
        "usableBattery": 62.0,
        "realRange": 325.0,
        "consumptionAverage": 191.0,
        "evDatabaseUrl": "https://ev-database.org/car/1920/Smart-1-Pulse"
    },
    {
        "model": "Porsche Taycan 4 Cross Turismo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 505.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/2110/Porsche-Taycan-4-Cross-Turismo"
    },
    {
        "model": "Aiways U6",
        "year": "Dec 2022",
        "usableBattery": 60.0,
        "realRange": 350.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1766/Aiways-U6"
    },
    {
        "model": "Mercedes-Benz EQS SUV 500 4MATIC",
        "year": "Oct 2023",
        "usableBattery": 118.0,
        "realRange": 530.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/2089/Mercedes-Benz-EQS-SUV-500-4MATIC"
    },
    {
        "model": "NIO ET5 Touring 75 kWh",
        "year": "Jul 2023",
        "usableBattery": 70.5,
        "realRange": 385.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/1915/NIO-ET5-Touring-75-kWh"
    },
    {
        "model": "Fiat 500e 3+1 24 kWh",
        "year": "Jul 2022",
        "usableBattery": 21.3,
        "realRange": 135.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1726/Fiat-500e-3plus1-24-kWh"
    },
    {
        "model": "Genesis GV60 Sport",
        "year": "Jun 2022",
        "usableBattery": 74.0,
        "realRange": 380.0,
        "consumptionAverage": 195.0,
        "evDatabaseUrl": "https://ev-database.org/car/1648/Genesis-GV60-Sport"
    },
    {
        "model": "Mercedes-Benz EQE SUV AMG 43 4MATIC",
        "year": "Dec 2022",
        "usableBattery": 90.6,
        "realRange": 415.0,
        "consumptionAverage": 218.0,
        "evDatabaseUrl": "https://ev-database.org/car/1763/Mercedes-Benz-EQE-SUV-AMG-43-4MATIC"
    },
    {
        "model": "Genesis GV60 Sport Plus",
        "year": "Jun 2022",
        "usableBattery": 74.0,
        "realRange": 365.0,
        "consumptionAverage": 203.0,
        "evDatabaseUrl": "https://ev-database.org/car/1649/Genesis-GV60-Sport-Plus"
    },
    {
        "model": "GWM ORA 3 GT",
        "year": "Jan 2024",
        "usableBattery": 59.3,
        "realRange": 325.0,
        "consumptionAverage": 182.0,
        "evDatabaseUrl": "https://ev-database.org/car/2093/GWM-ORA-3-GT"
    },
    {
        "model": "NIO EL6 75 kWh",
        "year": "Jul 2023",
        "usableBattery": 70.5,
        "realRange": 350.0,
        "consumptionAverage": 201.0,
        "evDatabaseUrl": "https://ev-database.org/car/1921/NIO-EL6-75-kWh"
    },
    {
        "model": "Porsche Taycan Turbo S Cross Turismo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 475.0,
        "consumptionAverage": 204.0,
        "evDatabaseUrl": "https://ev-database.org/car/2113/Porsche-Taycan-Turbo-S-Cross-Turismo"
    },
    {
        "model": "VinFast VF 8 Plus Extended Range",
        "year": "Nov 2023",
        "usableBattery": 87.7,
        "realRange": 425.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/1809/VinFast-VF-8-Plus-Extended-Range"
    },
    {
        "model": "Mercedes-Benz eVito Tourer Long 60 kWh",
        "year": "Feb 2024",
        "usableBattery": 60.0,
        "realRange": 220.0,
        "consumptionAverage": 273.0,
        "evDatabaseUrl": "https://ev-database.org/car/2138/Mercedes-Benz-eVito-Tourer-Long-60-kWh"
    },
    {
        "model": "Fiat 500e Cabrio 24 kWh",
        "year": "Jul 2022",
        "usableBattery": 21.3,
        "realRange": 135.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1727/Fiat-500e-Cabrio-24-kWh"
    },
    {
        "model": "NIO EL7 75 kWh",
        "year": "Dec 2022",
        "usableBattery": 70.5,
        "realRange": 340.0,
        "consumptionAverage": 207.0,
        "evDatabaseUrl": "https://ev-database.org/car/1788/NIO-EL7-75-kWh"
    },
    {
        "model": "Elaris BEO 86 kWh",
        "year": "Feb 2023",
        "usableBattery": 81.0,
        "realRange": 390.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/1975/Elaris-BEO-86-kWh"
    },
    {
        "model": "Mercedes-Benz EQV 250 Extra-Long",
        "year": "Feb 2024",
        "usableBattery": 60.0,
        "realRange": 210.0,
        "consumptionAverage": 286.0,
        "evDatabaseUrl": "https://ev-database.org/car/2130/Mercedes-Benz-EQV-250-Extra-Long"
    },
    {
        "model": "Mercedes-Benz eVito Tourer Extra-Long 60 kWh",
        "year": "Feb 2024",
        "usableBattery": 60.0,
        "realRange": 215.0,
        "consumptionAverage": 279.0,
        "evDatabaseUrl": "https://ev-database.org/car/2139/Mercedes-Benz-eVito-Tourer-Extra-Long-60-kWh"
    },
    {
        "model": "Abarth 500e Convertible",
        "year": "May 2023",
        "usableBattery": 37.8,
        "realRange": 225.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1904/Abarth-500e-Convertible"
    },
    {
        "model": "Porsche Taycan 4S Plus Sport Turismo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 495.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/2107/Porsche-Taycan-4S-Plus-Sport-Turismo"
    },
    {
        "model": "Mercedes-Benz EQV 250 Long",
        "year": "Feb 2024",
        "usableBattery": 60.0,
        "realRange": 215.0,
        "consumptionAverage": 279.0,
        "evDatabaseUrl": "https://ev-database.org/car/2129/Mercedes-Benz-EQV-250-Long"
    },
    {
        "model": "Porsche Taycan 4S Sport Turismo",
        "year": "Feb 2024",
        "usableBattery": 82.3,
        "realRange": 430.0,
        "consumptionAverage": 191.0,
        "evDatabaseUrl": "https://ev-database.org/car/2106/Porsche-Taycan-4S-Sport-Turismo"
    },
    {
        "model": "Porsche Taycan Turbo Sport Turismo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 470.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/2108/Porsche-Taycan-Turbo-Sport-Turismo"
    },
    {
        "model": "Porsche Taycan Sport Turismo",
        "year": "Feb 2024",
        "usableBattery": 82.3,
        "realRange": 445.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/2104/Porsche-Taycan-Sport-Turismo"
    },
    {
        "model": "Porsche Taycan Turbo Cross Turismo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 495.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/2112/Porsche-Taycan-Turbo-Cross-Turismo"
    },
    {
        "model": "Porsche Taycan Turbo S Sport Turismo",
        "year": "Feb 2024",
        "usableBattery": 97.0,
        "realRange": 460.0,
        "consumptionAverage": 211.0,
        "evDatabaseUrl": "https://ev-database.org/car/2109/Porsche-Taycan-Turbo-S-Sport-Turismo"
    }
];