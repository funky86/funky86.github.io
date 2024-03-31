const carsData = [
    {
        "label": "Tesla Model 3 (Sep 2023)",
        "usableBattery": 57.5,
        "realRange": 415.0,
        "consumptionAverage": 139.0,
        "evDatabaseUrl": "https://ev-database.org/car/1991/Tesla-Model-3",
        "consumptionColdWeatherCity": 149,
        "consumptionColdWeatherHighway": 192,
        "consumptionColdWeatherCombined": 167,
        "consumptionMildWeatherCity": 94,
        "consumptionMildWeatherHighway": 144,
        "consumptionMildWeatherCombined": 117
    },
    {
        "label": "Tesla Model 3 Long Range Dual Motor (Sep 2023)",
        "usableBattery": 75.0,
        "realRange": 500.0,
        "consumptionAverage": 150.0,
        "evDatabaseUrl": "https://ev-database.org/car/1992/Tesla-Model-3-Long-Range-Dual-Motor"
    },
    {
        "label": "BYD ATTO 3 (Aug 2022)",
        "usableBattery": 60.5,
        "realRange": 330.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/1782/BYD-ATTO-3"
    },
    {
        "label": "Tesla Model Y Long Range Dual Motor (Feb 2022)",
        "usableBattery": 75.0,
        "realRange": 435.0,
        "consumptionAverage": 172.0,
        "evDatabaseUrl": "https://ev-database.org/car/1619/Tesla-Model-Y-Long-Range-Dual-Motor"
    },
    {
        "label": "MG MG4 Electric 64 kWh (Oct 2022)",
        "usableBattery": 61.7,
        "realRange": 360.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1708/MG-MG4-Electric-64-kWh"
    },
    {
        "label": "Tesla Model Y (Nov 2022)",
        "usableBattery": 57.5,
        "realRange": 350.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1743/Tesla-Model-Y"
    },
    {
        "label": "BYD SEAL 82.5 kWh AWD Excellence (Sep 2023)",
        "usableBattery": 82.5,
        "realRange": 490.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/2002/BYD-SEAL-825-kWh-AWD-Excellence"
    },
    {
        "label": "BMW iX xDrive40 (Oct 2021)",
        "usableBattery": 71.0,
        "realRange": 360.0,
        "consumptionAverage": 197.0,
        "evDatabaseUrl": "https://ev-database.org/car/1472/BMW-iX-xDrive40"
    },
    {
        "label": "BMW i4 eDrive40 (Nov 2021)",
        "usableBattery": 80.7,
        "realRange": 515.0,
        "consumptionAverage": 157.0,
        "evDatabaseUrl": "https://ev-database.org/car/1252/BMW-i4-eDrive40"
    },
    {
        "label": "BYD DOLPHIN 60.4 kWh (Jul 2023)",
        "usableBattery": 60.5,
        "realRange": 340.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1919/BYD-DOLPHIN-604-kWh"
    },
    {
        "label": "Volkswagen ID.4 Pro (Oct 2023)",
        "usableBattery": 77.0,
        "realRange": 435.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/2028/Volkswagen-ID4-Pro"
    },
    {
        "label": "Volvo EX30 Single Motor ER (Jun 2023)",
        "usableBattery": 64.0,
        "realRange": 365.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1910/Volvo-EX30-Single-Motor-ER"
    },
    {
        "label": "BYD SEAL 82.5 kWh RWD Design (Sep 2023)",
        "usableBattery": 82.5,
        "realRange": 500.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/2001/BYD-SEAL-825-kWh-RWD-Design"
    },
    {
        "label": "BMW iX3 (Sep 2021)",
        "usableBattery": 74.0,
        "realRange": 385.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/1535/BMW-iX3"
    },
    {
        "label": "Audi Q6 e-tron quattro (Apr 2024)",
        "usableBattery": 94.9,
        "realRange": 460.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/2146/Audi-Q6-e-tron-quattro"
    },
    {
        "label": "Citroen e-C3 (Feb 2024)",
        "usableBattery": 44.0,
        "realRange": 265.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/2039/Citroen-e-C3"
    },
    {
        "label": "Tesla Model Y Performance (Mar 2022)",
        "usableBattery": 75.0,
        "realRange": 415.0,
        "consumptionAverage": 181.0,
        "evDatabaseUrl": "https://ev-database.org/car/1183/Tesla-Model-Y-Performance"
    },
    {
        "label": "Kia Niro EV (Jun 2022)",
        "usableBattery": 64.8,
        "realRange": 385.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1666/Kia-Niro-EV"
    },
    {
        "label": "Hyundai Kona Electric 65 kWh (Jul 2023)",
        "usableBattery": 65.4,
        "realRange": 390.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1830/Hyundai-Kona-Electric-65-kWh"
    },
    {
        "label": "BMW i4 eDrive35 (Nov 2022)",
        "usableBattery": 67.0,
        "realRange": 430.0,
        "consumptionAverage": 156.0,
        "evDatabaseUrl": "https://ev-database.org/car/1785/BMW-i4-eDrive35"
    },
    {
        "label": "BYD HAN (Mar 2023)",
        "usableBattery": 85.4,
        "realRange": 475.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1784/BYD-HAN"
    },
    {
        "label": "Renault Scenic E-Tech EV87 220hp (Dec 2023)",
        "usableBattery": 87.0,
        "realRange": 490.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/2069/Renault-Scenic-E-Tech-EV87-220hp"
    },
    {
        "label": "Mercedes-Benz EQB 250+ (Oct 2023)",
        "usableBattery": 70.5,
        "realRange": 415.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1988/Mercedes-Benz-EQB-250plus"
    },
    {
        "label": "BYD TANG (Aug 2022)",
        "usableBattery": 86.4,
        "realRange": 355.0,
        "consumptionAverage": 243.0,
        "evDatabaseUrl": "https://ev-database.org/car/1783/BYD-TANG"
    },
    {
        "label": "Dacia Spring Electric 45 (Jul 2022)",
        "usableBattery": 25.0,
        "realRange": 165.0,
        "consumptionAverage": 152.0,
        "evDatabaseUrl": "https://ev-database.org/car/1705/Dacia-Spring-Electric-45"
    },
    {
        "label": "BMW iX1 eDrive20 (Sep 2023)",
        "usableBattery": 64.7,
        "realRange": 390.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1996/BMW-iX1-eDrive20"
    },
    {
        "label": "Rolls-Royce Spectre (Oct 2023)",
        "usableBattery": 102.0,
        "realRange": 465.0,
        "consumptionAverage": 219.0,
        "evDatabaseUrl": "https://ev-database.org/car/1765/Rolls-Royce-Spectre"
    },
    {
        "label": "Fiat 500e Hatchback 42 kWh (Nov 2020)",
        "usableBattery": 37.3,
        "realRange": 235.0,
        "consumptionAverage": 159.0,
        "evDatabaseUrl": "https://ev-database.org/car/1285/Fiat-500e-Hatchback-42-kWh"
    },
    {
        "label": "Renault Megane E-Tech EV60 220hp (Apr 2022)",
        "usableBattery": 60.0,
        "realRange": 380.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1521/Renault-Megane-E-Tech-EV60-220hp"
    },
    {
        "label": "Tesla Model S Dual Motor (Jan 2023)",
        "usableBattery": 95.0,
        "realRange": 575.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/1404/Tesla-Model-S-Dual-Motor"
    },
    {
        "label": "Tesla Model S Plaid (Nov 2022)",
        "usableBattery": 95.0,
        "realRange": 560.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1405/Tesla-Model-S-Plaid"
    },
    {
        "label": "BMW iX1 xDrive30 (Nov 2022)",
        "usableBattery": 64.7,
        "realRange": 380.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1701/BMW-iX1-xDrive30"
    },
    {
        "label": "Kia EV6 Long Range 2WD (Oct 2021)",
        "usableBattery": 74.0,
        "realRange": 410.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1481/Kia-EV6-Long-Range-2WD"
    },
    {
        "label": "Hongqi E-HS9 99 kWh (Dec 2022)",
        "usableBattery": 90.0,
        "realRange": 370.0,
        "consumptionAverage": 243.0,
        "evDatabaseUrl": "https://ev-database.org/car/1747/Hongqi-E-HS9-99-kWh"
    },
    {
        "label": "CUPRA Born 150 kW - 58 kWh (Oct 2021)",
        "usableBattery": 58.0,
        "realRange": 350.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1516/CUPRA-Born-150-kW---58-kWh"
    },
    {
        "label": "Honda e:Ny1 (Jun 2023)",
        "usableBattery": 61.9,
        "realRange": 335.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1940/Honda-eNy1"
    },
    {
        "label": "MG ZS EV Long Range (Nov 2021)",
        "usableBattery": 68.3,
        "realRange": 370.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1541/MG-ZS-EV-Long-Range"
    },
    {
        "label": "Skoda Enyaq 85 (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 450.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/2020/Skoda-Enyaq-85"
    },
    {
        "label": "Toyota bZ4X FWD (Jun 2022)",
        "usableBattery": 64.0,
        "realRange": 340.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1564/Toyota-bZ4X-FWD"
    },
    {
        "label": "CUPRA Born 170 kW - 77 kWh (Mar 2022)",
        "usableBattery": 77.0,
        "realRange": 450.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1518/CUPRA-Born-170-kW---77-kWh"
    },
    {
        "label": "Volkswagen ID.7 Pro (Aug 2023)",
        "usableBattery": 77.0,
        "realRange": 475.0,
        "consumptionAverage": 162.0,
        "evDatabaseUrl": "https://ev-database.org/car/1839/Volkswagen-ID7-Pro"
    },
    {
        "label": "MG MG4 Electric 51 kWh (Oct 2022)",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1707/MG-MG4-Electric-51-kWh"
    },
    {
        "label": "Porsche Macan 4 Electric (Jan 2024)",
        "usableBattery": 95.0,
        "realRange": 485.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/2084/Porsche-Macan-4-Electric"
    },
    {
        "label": "BMW iX xDrive50 (Nov 2021)",
        "usableBattery": 105.2,
        "realRange": 505.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/1473/BMW-iX-xDrive50"
    },
    {
        "label": "BYD SEAL U 71.8 kWh Comfort (May 2024)",
        "usableBattery": 71.8,
        "realRange": 340.0,
        "consumptionAverage": 211.0,
        "evDatabaseUrl": "https://ev-database.org/car/2094/BYD-SEAL-U-718-kWh-Comfort"
    },
    {
        "label": "Volkswagen ID. Buzz Pro (Sep 2022)",
        "usableBattery": 77.0,
        "realRange": 345.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/1651/Volkswagen-ID-Buzz-Pro"
    },
    {
        "label": "BMW i7 xDrive60 (Nov 2022)",
        "usableBattery": 101.7,
        "realRange": 510.0,
        "consumptionAverage": 199.0,
        "evDatabaseUrl": "https://ev-database.org/car/1676/BMW-i7-xDrive60"
    },
    {
        "label": "BMW i5 eDrive40 Sedan (May 2023)",
        "usableBattery": 81.2,
        "realRange": 470.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/1906/BMW-i5-eDrive40-Sedan"
    },
    {
        "label": "Renault 5 E-Tech 52kWh 150hp (Sep 2024)",
        "usableBattery": 52.0,
        "realRange": 330.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/2135/Renault-5-E-Tech-52kWh-150hp"
    },
    {
        "label": "Hyundai IONIQ 5 Long Range 2WD (Apr 2022)",
        "usableBattery": 74.0,
        "realRange": 390.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1662/Hyundai-IONIQ-5-Long-Range-2WD"
    },
    {
        "label": "Tesla Model Y (May 2023)",
        "usableBattery": 57.5,
        "realRange": 350.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1974/Tesla-Model-Y"
    },
    {
        "label": "Kia EV9 99.8 kWh AWD (Sep 2023)",
        "usableBattery": 96.0,
        "realRange": 435.0,
        "consumptionAverage": 221.0,
        "evDatabaseUrl": "https://ev-database.org/car/1835/Kia-EV9-998-kWh-AWD"
    },
    {
        "label": "Nissan Leaf (Mar 2022)",
        "usableBattery": 39.0,
        "realRange": 235.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1656/Nissan-Leaf"
    },
    {
        "label": "Hyundai IONIQ 6 Long Range 2WD (Dec 2022)",
        "usableBattery": 74.0,
        "realRange": 495.0,
        "consumptionAverage": 149.0,
        "evDatabaseUrl": "https://ev-database.org/car/1718/Hyundai-IONIQ-6-Long-Range-2WD"
    },
    {
        "label": "BMW i4 M50 (Nov 2021)",
        "usableBattery": 80.7,
        "realRange": 450.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/1519/BMW-i4-M50"
    },
    {
        "label": "Lucid Air Grand Touring (Feb 2023)",
        "usableBattery": 112.0,
        "realRange": 665.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1316/Lucid-Air-Grand-Touring"
    },
    {
        "label": "Volkswagen ID.3 Pro (Mar 2023)",
        "usableBattery": 58.0,
        "realRange": 350.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1831/Volkswagen-ID3-Pro"
    },
    {
        "label": "Renault Zoe ZE50 R110 (Nov 2019)",
        "usableBattery": 52.0,
        "realRange": 315.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/1164/Renault-Zoe-ZE50-R110"
    },
    {
        "label": "Hyundai IONIQ 6 Long Range AWD (Nov 2022)",
        "usableBattery": 74.0,
        "realRange": 440.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1719/Hyundai-IONIQ-6-Long-Range-AWD"
    },
    {
        "label": "Mercedes-Benz EQA 250+ (Oct 2023)",
        "usableBattery": 70.5,
        "realRange": 425.0,
        "consumptionAverage": 166.0,
        "evDatabaseUrl": "https://ev-database.org/car/1985/Mercedes-Benz-EQA-250plus"
    },
    {
        "label": "Opel Astra Electric (Jun 2023)",
        "usableBattery": 50.8,
        "realRange": 320.0,
        "consumptionAverage": 159.0,
        "evDatabaseUrl": "https://ev-database.org/car/1792/Opel-Astra-Electric"
    },
    {
        "label": "Volvo EX30 Single Motor (Jun 2023)",
        "usableBattery": 49.0,
        "realRange": 280.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1909/Volvo-EX30-Single-Motor"
    },
    {
        "label": "Audi Q8 e-tron 55 quattro (Dec 2022)",
        "usableBattery": 106.0,
        "realRange": 505.0,
        "consumptionAverage": 210.0,
        "evDatabaseUrl": "https://ev-database.org/car/1770/Audi-Q8-e-tron-55-quattro"
    },
    {
        "label": "Peugeot e-3008 73 kWh (Nov 2023)",
        "usableBattery": 73.0,
        "realRange": 385.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/2003/Peugeot-e-3008-73-kWh"
    },
    {
        "label": "Kia EV6 GT (Apr 2022)",
        "usableBattery": 74.0,
        "realRange": 360.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/1471/Kia-EV6-GT"
    },
    {
        "label": "Hyundai IONIQ 5 N (Nov 2023)",
        "usableBattery": 80.0,
        "realRange": 385.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/2044/Hyundai-IONIQ-5-N"
    },
    {
        "label": "Mini Countryman E (Feb 2024)",
        "usableBattery": 64.7,
        "realRange": 380.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1994/Mini-Countryman-E"
    },
    {
        "label": "Peugeot e-3008 98 kWh Long Range (Jun 2024)",
        "usableBattery": 98.0,
        "realRange": 510.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/2005/Peugeot-e-3008-98-kWh-Long-Range"
    },
    {
        "label": "Nissan Ariya 87kWh (Jul 2022)",
        "usableBattery": 87.0,
        "realRange": 450.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1302/Nissan-Ariya-87kWh"
    },
    {
        "label": "Audi Q4 e-tron 45 (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 420.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/2013/Audi-Q4-e-tron-45"
    },
    {
        "label": "Fisker Ocean Extreme (Mar 2023)",
        "usableBattery": 106.5,
        "realRange": 520.0,
        "consumptionAverage": 205.0,
        "evDatabaseUrl": "https://ev-database.org/car/1711/Fisker-Ocean-Extreme"
    },
    {
        "label": "Jeep Avenger Electric (Jan 2023)",
        "usableBattery": 50.8,
        "realRange": 310.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1816/Jeep-Avenger-Electric"
    },
    {
        "label": "Zeekr 001 Performance AWD (Sep 2023)",
        "usableBattery": 94.0,
        "realRange": 500.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1934/Zeekr-001-Performance-AWD"
    },
    {
        "label": "Mercedes-Benz EQS 450+ (Jun 2023)",
        "usableBattery": 108.4,
        "realRange": 635.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/2008/Mercedes-Benz-EQS-450plus"
    },
    {
        "label": "Volkswagen ID. Buzz GTX (Aug 2024)",
        "usableBattery": 79.0,
        "realRange": 335.0,
        "consumptionAverage": 236.0,
        "evDatabaseUrl": "https://ev-database.org/car/2156/Volkswagen-ID-Buzz-GTX"
    },
    {
        "label": "Citroen e-C4 (Nov 2021)",
        "usableBattery": 46.3,
        "realRange": 290.0,
        "consumptionAverage": 160.0,
        "evDatabaseUrl": "https://ev-database.org/car/1587/Citroen-e-C4"
    },
    {
        "label": "Zeekr 001 Long Range RWD (Sep 2023)",
        "usableBattery": 94.0,
        "realRange": 525.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/1933/Zeekr-001-Long-Range-RWD"
    },
    {
        "label": "Fisker Ocean Sport (Mar 2023)",
        "usableBattery": 71.0,
        "realRange": 360.0,
        "consumptionAverage": 197.0,
        "evDatabaseUrl": "https://ev-database.org/car/1709/Fisker-Ocean-Sport"
    },
    {
        "label": "Volkswagen ID.7 Pro S (May 2024)",
        "usableBattery": 86.0,
        "realRange": 520.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/1840/Volkswagen-ID7-Pro-S"
    },
    {
        "label": "Mercedes-Benz EQE 300 (Jun 2023)",
        "usableBattery": 89.0,
        "realRange": 525.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1897/Mercedes-Benz-EQE-300"
    },
    {
        "label": "Mercedes-Benz EQA 250 (Oct 2023)",
        "usableBattery": 66.5,
        "realRange": 405.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1984/Mercedes-Benz-EQA-250"
    },
    {
        "label": "Volvo EX30 Twin Motor Performance (Jun 2023)",
        "usableBattery": 64.0,
        "realRange": 360.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1911/Volvo-EX30-Twin-Motor-Performance"
    },
    {
        "label": "Polestar 2 Long Range Single Motor (Jan 2023)",
        "usableBattery": 79.0,
        "realRange": 470.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1818/Polestar-2-Long-Range-Single-Motor"
    },
    {
        "label": "Hyundai IONIQ 5 Long Range AWD (Apr 2022)",
        "usableBattery": 74.0,
        "realRange": 385.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/1663/Hyundai-IONIQ-5-Long-Range-AWD"
    },
    {
        "label": "Peugeot e-5008 98 kWh Long Range (Sep 2024)",
        "usableBattery": 98.0,
        "realRange": 490.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/2151/Peugeot-e-5008-98-kWh-Long-Range"
    },
    {
        "label": "Volkswagen ID.7 Tourer GTX (Aug 2024)",
        "usableBattery": 86.0,
        "realRange": 480.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/2158/Volkswagen-ID7-Tourer-GTX"
    },
    {
        "label": "Kia EV6 Long Range AWD (Oct 2021)",
        "usableBattery": 74.0,
        "realRange": 400.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1482/Kia-EV6-Long-Range-AWD"
    },
    {
        "label": "NIO ET7 75 kWh (Oct 2022)",
        "usableBattery": 70.5,
        "realRange": 400.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1751/NIO-ET7-75-kWh"
    },
    {
        "label": "MG MG4 Electric 77 kWh (Aug 2023)",
        "usableBattery": 74.4,
        "realRange": 425.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1973/MG-MG4-Electric-77-kWh"
    },
    {
        "label": "Smart #1 Pro+ (Mar 2023)",
        "usableBattery": 62.0,
        "realRange": 335.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1667/Smart-1-Proplus"
    },
    {
        "label": "Hyundai IONIQ 5 Standard Range 2WD (Jul 2021)",
        "usableBattery": 54.0,
        "realRange": 295.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/1476/Hyundai-IONIQ-5-Standard-Range-2WD"
    },
    {
        "label": "Fisker Ocean Ultra (Mar 2023)",
        "usableBattery": 106.5,
        "realRange": 535.0,
        "consumptionAverage": 199.0,
        "evDatabaseUrl": "https://ev-database.org/car/1710/Fisker-Ocean-Ultra"
    },
    {
        "label": "Ford Mustang Mach-E ER RWD (Oct 2023)",
        "usableBattery": 91.0,
        "realRange": 480.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/2035/Ford-Mustang-Mach-E-ER-RWD"
    },
    {
        "label": "Ford Explorer Extended Range RWD (Mar 2024)",
        "usableBattery": 77.0,
        "realRange": 430.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/2168/Ford-Explorer-Extended-Range-RWD"
    },
    {
        "label": "Lotus Eletre (Mar 2023)",
        "usableBattery": 109.0,
        "realRange": 495.0,
        "consumptionAverage": 220.0,
        "evDatabaseUrl": "https://ev-database.org/car/1767/Lotus-Eletre"
    },
    {
        "label": "Smart #1 Brabus (Mar 2023)",
        "usableBattery": 62.0,
        "realRange": 325.0,
        "consumptionAverage": 191.0,
        "evDatabaseUrl": "https://ev-database.org/car/1748/Smart-1-Brabus"
    },
    {
        "label": "Kia EV9 99.8 kWh AWD GT-Line (Jun 2023)",
        "usableBattery": 96.0,
        "realRange": 425.0,
        "consumptionAverage": 226.0,
        "evDatabaseUrl": "https://ev-database.org/car/1993/Kia-EV9-998-kWh-AWD-GT-Line"
    },
    {
        "label": "Opel Mokka-e 50 kWh (Nov 2021)",
        "usableBattery": 46.3,
        "realRange": 260.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1586/Opel-Mokka-e-50-kWh"
    },
    {
        "label": "Maxus MIFA 9 (Feb 2023)",
        "usableBattery": 84.0,
        "realRange": 365.0,
        "consumptionAverage": 230.0,
        "evDatabaseUrl": "https://ev-database.org/car/1837/Maxus-MIFA-9"
    },
    {
        "label": "Hyundai IONIQ 6 Standard Range 2WD (Jan 2023)",
        "usableBattery": 54.0,
        "realRange": 365.0,
        "consumptionAverage": 148.0,
        "evDatabaseUrl": "https://ev-database.org/car/1717/Hyundai-IONIQ-6-Standard-Range-2WD"
    },
    {
        "label": "Volkswagen ID. Buzz LWB GTX (Aug 2024)",
        "usableBattery": 86.0,
        "realRange": 355.0,
        "consumptionAverage": 242.0,
        "evDatabaseUrl": "https://ev-database.org/car/2157/Volkswagen-ID-Buzz-LWB-GTX-"
    },
    {
        "label": "BMW iX2 xDrive30 (Oct 2023)",
        "usableBattery": 64.7,
        "realRange": 380.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/2040/BMW-iX2-xDrive30"
    },
    {
        "label": "MG MG5 Electric Long Range (Mar 2022)",
        "usableBattery": 57.4,
        "realRange": 335.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1474/MG-MG5-Electric-Long-Range"
    },
    {
        "label": "Mazda MX-30 (May 2022)",
        "usableBattery": 30.0,
        "realRange": 170.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1680/Mazda-MX-30"
    },
    {
        "label": "Lexus RZ 450e (Feb 2023)",
        "usableBattery": 64.0,
        "realRange": 320.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1677/Lexus-RZ-450e"
    },
    {
        "label": "Volkswagen ID.7 Tourer Pro (Mar 2024)",
        "usableBattery": 77.0,
        "realRange": 460.0,
        "consumptionAverage": 167.0,
        "evDatabaseUrl": "https://ev-database.org/car/2118/Volkswagen-ID7-Tourer-Pro"
    },
    {
        "label": "Zeekr X Privilege AWD (Oct 2023)",
        "usableBattery": 64.0,
        "realRange": 345.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/1937/Zeekr-X-Privilege-AWD"
    },
    {
        "label": "BYD SEAL U 87 kWh Design (May 2024)",
        "usableBattery": 87.0,
        "realRange": 405.0,
        "consumptionAverage": 215.0,
        "evDatabaseUrl": "https://ev-database.org/car/2067/BYD-SEAL-U-87-kWh-Design"
    },
    {
        "label": "Skoda Enyaq Coupe 85 (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 480.0,
        "consumptionAverage": 160.0,
        "evDatabaseUrl": "https://ev-database.org/car/2024/Skoda-Enyaq-Coupe-85"
    },
    {
        "label": "Tesla Model X Dual Motor (Jan 2023)",
        "usableBattery": 95.0,
        "realRange": 475.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1407/Tesla-Model-X-Dual-Motor"
    },
    {
        "label": "Subaru Solterra AWD (Jun 2022)",
        "usableBattery": 64.0,
        "realRange": 320.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1567/Subaru-Solterra-AWD"
    },
    {
        "label": "BYD DOLPHIN 44.9 kWh Active (Jul 2023)",
        "usableBattery": 44.9,
        "realRange": 255.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1917/BYD-DOLPHIN-449-kWh-Active"
    },
    {
        "label": "Ford Explorer Extended Range AWD (Mar 2024)",
        "usableBattery": 79.0,
        "realRange": 430.0,
        "consumptionAverage": 184.0,
        "evDatabaseUrl": "https://ev-database.org/car/2169/Ford-Explorer-Extended-Range-AWD"
    },
    {
        "label": "Lancia Ypsilon (Jun 2024)",
        "usableBattery": 48.1,
        "realRange": 305.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/2117/Lancia-Ypsilon"
    },
    {
        "label": "Renault Twingo Electric (Nov 2020)",
        "usableBattery": 21.3,
        "realRange": 135.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1270/Renault-Twingo-Electric"
    },
    {
        "label": "MG MG4 Electric XPOWER (Aug 2023)",
        "usableBattery": 61.7,
        "realRange": 320.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1944/MG-MG4-Electric-XPOWER"
    },
    {
        "label": "NIO ET5 100 kWh (Dec 2022)",
        "usableBattery": 90.0,
        "realRange": 500.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1787/NIO-ET5-100-kWh"
    },
    {
        "label": "Dacia Spring Electric 45 (May 2024)",
        "usableBattery": 25.0,
        "realRange": 165.0,
        "consumptionAverage": 152.0,
        "evDatabaseUrl": "https://ev-database.org/car/2126/Dacia-Spring-Electric-45"
    },
    {
        "label": "Mercedes-Benz EQE 350+ (Jun 2023)",
        "usableBattery": 90.6,
        "realRange": 530.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/2006/Mercedes-Benz-EQE-350plus"
    },
    {
        "label": "BMW i5 M60 xDrive Sedan (May 2023)",
        "usableBattery": 81.2,
        "realRange": 420.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1907/BMW-i5-M60-xDrive-Sedan"
    },
    {
        "label": "Kia EV9 99.8 kWh RWD (Jun 2023)",
        "usableBattery": 96.0,
        "realRange": 450.0,
        "consumptionAverage": 213.0,
        "evDatabaseUrl": "https://ev-database.org/car/1834/Kia-EV9-998-kWh-RWD"
    },
    {
        "label": "Polestar 4 Long Range Dual Motor (Jan 2024)",
        "usableBattery": 94.0,
        "realRange": 465.0,
        "consumptionAverage": 202.0,
        "evDatabaseUrl": "https://ev-database.org/car/1842/Polestar-4-Long-Range-Dual-Motor"
    },
    {
        "label": "Polestar 2 Long Range Dual Motor (Jan 2023)",
        "usableBattery": 79.0,
        "realRange": 450.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1819/Polestar-2-Long-Range-Dual-Motor"
    },
    {
        "label": "Volkswagen ID.7 Tourer Pro S (Aug 2024)",
        "usableBattery": 86.0,
        "realRange": 505.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/2119/Volkswagen-ID7-Tourer-Pro-S"
    },
    {
        "label": "Polestar 4 Long Range Single Motor (Jan 2024)",
        "usableBattery": 94.0,
        "realRange": 495.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1841/Polestar-4-Long-Range-Single-Motor"
    },
    {
        "label": "Toyota bZ4X AWD (Jun 2022)",
        "usableBattery": 64.0,
        "realRange": 315.0,
        "consumptionAverage": 203.0,
        "evDatabaseUrl": "https://ev-database.org/car/1565/Toyota-bZ4X-AWD"
    },
    {
        "label": "Volvo EX40 Single Motor ER (Feb 2024)",
        "usableBattery": 79.0,
        "realRange": 400.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/2121/Volvo-EX40-Single-Motor-ER"
    },
    {
        "label": "Audi SQ6 e-tron (Apr 2024)",
        "usableBattery": 94.9,
        "realRange": 445.0,
        "consumptionAverage": 213.0,
        "evDatabaseUrl": "https://ev-database.org/car/2147/Audi-SQ6-e-tron"
    },
    {
        "label": "Fiat 600e (Jul 2023)",
        "usableBattery": 50.8,
        "realRange": 305.0,
        "consumptionAverage": 167.0,
        "evDatabaseUrl": "https://ev-database.org/car/1945/Fiat-600e"
    },
    {
        "label": "Polestar 2 Standard Range Single Motor (Jan 2023)",
        "usableBattery": 67.0,
        "realRange": 405.0,
        "consumptionAverage": 165.0,
        "evDatabaseUrl": "https://ev-database.org/car/1817/Polestar-2-Standard-Range-Single-Motor"
    },
    {
        "label": "Smart #3 Brabus (Jan 2024)",
        "usableBattery": 62.0,
        "realRange": 330.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/2000/Smart-3-Brabus"
    },
    {
        "label": "Audi Q8 e-tron Sportback 55 quattro (Dec 2022)",
        "usableBattery": 106.0,
        "realRange": 525.0,
        "consumptionAverage": 202.0,
        "evDatabaseUrl": "https://ev-database.org/car/1772/Audi-Q8-e-tron-Sportback-55-quattro"
    },
    {
        "label": "Skoda Enyaq 60 (Sep 2023)",
        "usableBattery": 58.0,
        "realRange": 335.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/2019/Skoda-Enyaq-60"
    },
    {
        "label": "Porsche Taycan Plus (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 560.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/2099/Porsche-Taycan-Plus"
    },
    {
        "label": "Mini Cooper SE (Nov 2023)",
        "usableBattery": 49.0,
        "realRange": 310.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1998/Mini-Cooper-SE"
    },
    {
        "label": "Hyundai Kona Electric 48 kWh (Jul 2023)",
        "usableBattery": 48.4,
        "realRange": 295.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1829/Hyundai-Kona-Electric-48-kWh"
    },
    {
        "label": "BMW iX2 eDrive20 (Jan 2024)",
        "usableBattery": 64.7,
        "realRange": 395.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/2097/BMW-iX2-eDrive20"
    },
    {
        "label": "Ford Mustang Mach-E ER AWD (Oct 2023)",
        "usableBattery": 91.0,
        "realRange": 445.0,
        "consumptionAverage": 204.0,
        "evDatabaseUrl": "https://ev-database.org/car/2037/Ford-Mustang-Mach-E-ER-AWD"
    },
    {
        "label": "Peugeot e-308 (Apr 2023)",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1744/Peugeot-e-308"
    },
    {
        "label": "Peugeot e-5008 73 kWh (Sep 2024)",
        "usableBattery": 73.0,
        "realRange": 370.0,
        "consumptionAverage": 197.0,
        "evDatabaseUrl": "https://ev-database.org/car/2149/Peugeot-e-5008-73-kWh"
    },
    {
        "label": "Nissan Leaf e+ (Mar 2022)",
        "usableBattery": 59.0,
        "realRange": 340.0,
        "consumptionAverage": 174.0,
        "evDatabaseUrl": "https://ev-database.org/car/1657/Nissan-Leaf-eplus"
    },
    {
        "label": "Volkswagen ID.5 Pro (Oct 2023)",
        "usableBattery": 77.0,
        "realRange": 455.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/2031/Volkswagen-ID5-Pro"
    },
    {
        "label": "Renault 5 E-Tech 40kWh 95hp (Dec 2025)",
        "usableBattery": 40.0,
        "realRange": 260.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/2133/Renault-5-E-Tech-40kWh-95hp"
    },
    {
        "label": "Renault Zoe ZE50 R135 (Nov 2019)",
        "usableBattery": 52.0,
        "realRange": 310.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1205/Renault-Zoe-ZE50-R135"
    },
    {
        "label": "Volkswagen ID.3 Pro S - 4 Seats (Mar 2023)",
        "usableBattery": 77.0,
        "realRange": 455.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1832/Volkswagen-ID3-Pro-S---4-Seats"
    },
    {
        "label": "MG ZS EV Standard Range (Nov 2021)",
        "usableBattery": 49.0,
        "realRange": 265.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/1540/MG-ZS-EV-Standard-Range"
    },
    {
        "label": "Volkswagen ID.3 GTX (Aug 2024)",
        "usableBattery": 79.0,
        "realRange": 460.0,
        "consumptionAverage": 172.0,
        "evDatabaseUrl": "https://ev-database.org/car/2152/Volkswagen-ID3-GTX"
    },
    {
        "label": "BMW i5 eDrive40 Touring (Feb 2024)",
        "usableBattery": 81.2,
        "realRange": 455.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/2114/BMW-i5-eDrive40-Touring"
    },
    {
        "label": "Tesla Model X Plaid (Nov 2022)",
        "usableBattery": 95.0,
        "realRange": 455.0,
        "consumptionAverage": 209.0,
        "evDatabaseUrl": "https://ev-database.org/car/1408/Tesla-Model-X-Plaid"
    },
    {
        "label": "Porsche Macan Turbo Electric (Jan 2024)",
        "usableBattery": 95.0,
        "realRange": 480.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/2085/Porsche-Macan-Turbo-Electric"
    },
    {
        "label": "Mercedes-Benz EQB 350 4MATIC (Oct 2023)",
        "usableBattery": 66.5,
        "realRange": 345.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1990/Mercedes-Benz-EQB-350-4MATIC"
    },
    {
        "label": "Citroen e-C4 X (Nov 2022)",
        "usableBattery": 46.3,
        "realRange": 285.0,
        "consumptionAverage": 162.0,
        "evDatabaseUrl": "https://ev-database.org/car/1706/Citroen-e-C4-X"
    },
    {
        "label": "Volvo EX40 Single Motor (Feb 2024)",
        "usableBattery": 67.0,
        "realRange": 345.0,
        "consumptionAverage": 194.0,
        "evDatabaseUrl": "https://ev-database.org/car/2120/Volvo-EX40-Single-Motor"
    },
    {
        "label": "Peugeot e-208 51 kWh (Aug 2023)",
        "usableBattery": 48.1,
        "realRange": 310.0,
        "consumptionAverage": 155.0,
        "evDatabaseUrl": "https://ev-database.org/car/1949/Peugeot-e-208-51-kWh"
    },
    {
        "label": "Mercedes-Benz EQS 580 4MATIC (Jun 2023)",
        "usableBattery": 108.4,
        "realRange": 590.0,
        "consumptionAverage": 184.0,
        "evDatabaseUrl": "https://ev-database.org/car/2011/Mercedes-Benz-EQS-580-4MATIC"
    },
    {
        "label": "Lotus Eletre R (Mar 2023)",
        "usableBattery": 109.0,
        "realRange": 455.0,
        "consumptionAverage": 240.0,
        "evDatabaseUrl": "https://ev-database.org/car/1768/Lotus-Eletre-R"
    },
    {
        "label": "CUPRA Born VZ (Jul 2024)",
        "usableBattery": 79.0,
        "realRange": 460.0,
        "consumptionAverage": 172.0,
        "evDatabaseUrl": "https://ev-database.org/car/2128/CUPRA-Born-VZ"
    },
    {
        "label": "Porsche Taycan Turbo GT (Mar 2024)",
        "usableBattery": 97.0,
        "realRange": 475.0,
        "consumptionAverage": 204.0,
        "evDatabaseUrl": "https://ev-database.org/car/2144/Porsche-Taycan-Turbo-GT"
    },
    {
        "label": "Peugeot e-2008 54 kWh (Jul 2023)",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1947/Peugeot-e-2008-54-kWh"
    },
    {
        "label": "XPENG P7 Wing Edition (Feb 2023)",
        "usableBattery": 82.7,
        "realRange": 465.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1823/XPENG-P7-Wing-Edition"
    },
    {
        "label": "Volkswagen ID.4 Pure (Oct 2023)",
        "usableBattery": 52.0,
        "realRange": 285.0,
        "consumptionAverage": 182.0,
        "evDatabaseUrl": "https://ev-database.org/car/2027/Volkswagen-ID4-Pure"
    },
    {
        "label": "BMW iX M60 (Apr 2022)",
        "usableBattery": 105.2,
        "realRange": 485.0,
        "consumptionAverage": 217.0,
        "evDatabaseUrl": "https://ev-database.org/car/1590/BMW-iX-M60"
    },
    {
        "label": "Jaguar I-Pace EV400 (Jan 2023)",
        "usableBattery": 84.7,
        "realRange": 380.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/1812/Jaguar-I-Pace-EV400"
    },
    {
        "label": "Dacia Spring Electric 65 Extreme (Jan 2023)",
        "usableBattery": 25.0,
        "realRange": 160.0,
        "consumptionAverage": 156.0,
        "evDatabaseUrl": "https://ev-database.org/car/1813/Dacia-Spring-Electric-65-Extreme"
    },
    {
        "label": "CUPRA Tavascan VZ (Apr 2024)",
        "usableBattery": 77.0,
        "realRange": 430.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/1972/CUPRA-Tavascan-VZ"
    },
    {
        "label": "Kia EV6 Standard Range 2WD (Oct 2021)",
        "usableBattery": 54.0,
        "realRange": 305.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/1480/Kia-EV6-Standard-Range-2WD"
    },
    {
        "label": "Audi Q8 e-tron 50 quattro (Dec 2022)",
        "usableBattery": 89.0,
        "realRange": 425.0,
        "consumptionAverage": 209.0,
        "evDatabaseUrl": "https://ev-database.org/car/1769/Audi-Q8-e-tron-50-quattro"
    },
    {
        "label": "VinFast VF 9 Extended Range (May 2024)",
        "usableBattery": 123.0,
        "realRange": 520.0,
        "consumptionAverage": 237.0,
        "evDatabaseUrl": "https://ev-database.org/car/1811/VinFast-VF-9-Extended-Range"
    },
    {
        "label": "Peugeot e-208 50 kWh (Aug 2023)",
        "usableBattery": 46.3,
        "realRange": 290.0,
        "consumptionAverage": 160.0,
        "evDatabaseUrl": "https://ev-database.org/car/1948/Peugeot-e-208-50-kWh"
    },
    {
        "label": "Renault Scenic E-Tech EV60 170hp (Dec 2023)",
        "usableBattery": 60.0,
        "realRange": 340.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/2068/Renault-Scenic-E-Tech-EV60-170hp"
    },
    {
        "label": "Volkswagen ID.3 GTX Performance (Aug 2024)",
        "usableBattery": 79.0,
        "realRange": 460.0,
        "consumptionAverage": 172.0,
        "evDatabaseUrl": "https://ev-database.org/car/2153/Volkswagen-ID3-GTX-Performance"
    },
    {
        "label": "Lucid Air Touring (May 2023)",
        "usableBattery": 92.0,
        "realRange": 580.0,
        "consumptionAverage": 159.0,
        "evDatabaseUrl": "https://ev-database.org/car/1317/Lucid-Air-Touring"
    },
    {
        "label": "Porsche Taycan (Feb 2024)",
        "usableBattery": 82.3,
        "realRange": 485.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/2098/Porsche-Taycan"
    },
    {
        "label": "XPENG G9 RWD Long Range (Feb 2023)",
        "usableBattery": 93.1,
        "realRange": 480.0,
        "consumptionAverage": 194.0,
        "evDatabaseUrl": "https://ev-database.org/car/1825/XPENG-G9-RWD-Long-Range"
    },
    {
        "label": "Opel Corsa Electric 50 kWh (Jul 2023)",
        "usableBattery": 46.3,
        "realRange": 295.0,
        "consumptionAverage": 157.0,
        "evDatabaseUrl": "https://ev-database.org/car/1941/Opel-Corsa-Electric-50-kWh"
    },
    {
        "label": "Audi Q4 e-tron 45 quattro (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 395.0,
        "consumptionAverage": 195.0,
        "evDatabaseUrl": "https://ev-database.org/car/2014/Audi-Q4-e-tron-45-quattro"
    },
    {
        "label": "Volkswagen ID.4 GTX (Oct 2023)",
        "usableBattery": 77.0,
        "realRange": 420.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/2030/Volkswagen-ID4-GTX"
    },
    {
        "label": "MG Marvel R (Oct 2021)",
        "usableBattery": 70.0,
        "realRange": 365.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/1524/MG-Marvel-R"
    },
    {
        "label": "Opel Corsa Electric 51 kWh (Jul 2023)",
        "usableBattery": 48.1,
        "realRange": 315.0,
        "consumptionAverage": 153.0,
        "evDatabaseUrl": "https://ev-database.org/car/1942/Opel-Corsa-Electric-51-kWh"
    },
    {
        "label": "Skoda Enyaq Coupe RS (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 455.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/2026/Skoda-Enyaq-Coupe-RS"
    },
    {
        "label": "GWM ORA 3 48 kWh (Jan 2024)",
        "usableBattery": 45.4,
        "realRange": 260.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/2091/GWM-ORA-3-48-kWh"
    },
    {
        "label": "Nissan Ariya 63kWh (Jul 2022)",
        "usableBattery": 63.0,
        "realRange": 335.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1301/Nissan-Ariya-63kWh"
    },
    {
        "label": "SsangYong Korando e-Motion (Feb 2022)",
        "usableBattery": 56.0,
        "realRange": 290.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1589/SsangYong-Korando-e-Motion"
    },
    {
        "label": "BMW i7 eDrive50 (May 2023)",
        "usableBattery": 101.7,
        "realRange": 520.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/1905/BMW-i7-eDrive50"
    },
    {
        "label": "Audi Q4 Sportback e-tron 45 (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 435.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/2016/Audi-Q4-Sportback-e-tron-45"
    },
    {
        "label": "Renault Megane E-Tech EV40 130hp (Apr 2022)",
        "usableBattery": 40.0,
        "realRange": 260.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/1536/Renault-Megane-E-Tech-EV40-130hp"
    },
    {
        "label": "Volvo EX90 Twin Motor (Dec 2022)",
        "usableBattery": 107.0,
        "realRange": 465.0,
        "consumptionAverage": 230.0,
        "evDatabaseUrl": "https://ev-database.org/car/1775/Volvo-EX90-Twin-Motor"
    },
    {
        "label": "Volkswagen ID. Buzz LWB Pro S (May 2024)",
        "usableBattery": 86.0,
        "realRange": 370.0,
        "consumptionAverage": 232.0,
        "evDatabaseUrl": "https://ev-database.org/car/2155/Volkswagen-ID-Buzz-LWB-Pro-S"
    },
    {
        "label": "Polestar 3 Long Range Dual motor (Nov 2022)",
        "usableBattery": 107.0,
        "realRange": 490.0,
        "consumptionAverage": 218.0,
        "evDatabaseUrl": "https://ev-database.org/car/1758/Polestar-3-Long-Range-Dual-motor"
    },
    {
        "label": "Opel Astra Sports Tourer Electric (Oct 2023)",
        "usableBattery": 50.8,
        "realRange": 310.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/1793/Opel-Astra-Sports-Tourer-Electric"
    },
    {
        "label": "Volvo EX40 Twin Motor (Feb 2024)",
        "usableBattery": 79.0,
        "realRange": 385.0,
        "consumptionAverage": 205.0,
        "evDatabaseUrl": "https://ev-database.org/car/2136/Volvo-EX40-Twin-Motor"
    },
    {
        "label": "XPENG G9 RWD Standard Range (Feb 2023)",
        "usableBattery": 75.8,
        "realRange": 390.0,
        "consumptionAverage": 194.0,
        "evDatabaseUrl": "https://ev-database.org/car/1824/XPENG-G9-RWD-Standard-Range"
    },
    {
        "label": "Volvo EC40 Single Motor ER (Feb 2024)",
        "usableBattery": 79.0,
        "realRange": 420.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/2124/Volvo-EC40-Single-Motor-ER"
    },
    {
        "label": "NIO ET7 100 kWh (Oct 2022)",
        "usableBattery": 90.0,
        "realRange": 505.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1752/NIO-ET7-100-kWh"
    },
    {
        "label": "Mini Cooper E (Dec 2023)",
        "usableBattery": 37.0,
        "realRange": 235.0,
        "consumptionAverage": 157.0,
        "evDatabaseUrl": "https://ev-database.org/car/1997/Mini-Cooper-E"
    },
    {
        "label": "BMW i7 M70 xDrive (May 2023)",
        "usableBattery": 101.7,
        "realRange": 490.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/1838/BMW-i7-M70-xDrive"
    },
    {
        "label": "Maserati Grecale Folgore (Jan 2024)",
        "usableBattery": 95.0,
        "realRange": 405.0,
        "consumptionAverage": 235.0,
        "evDatabaseUrl": "https://ev-database.org/car/1843/Maserati-Grecale-Folgore"
    },
    {
        "label": "Renault Megane E-Tech EV60 130hp (Apr 2022)",
        "usableBattery": 60.0,
        "realRange": 380.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1588/Renault-Megane-E-Tech-EV60-130hp"
    },
    {
        "label": "Mercedes-Benz EQS 450 4MATIC (Jun 2023)",
        "usableBattery": 108.4,
        "realRange": 610.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/2009/Mercedes-Benz-EQS-450-4MATIC"
    },
    {
        "label": "Voyah Free 106 kWh (Dec 2023)",
        "usableBattery": 100.0,
        "realRange": 480.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/2049/Voyah-Free-106-kWh"
    },
    {
        "label": "Lotus Emeya (Mar 2024)",
        "usableBattery": 100.0,
        "realRange": 530.0,
        "consumptionAverage": 189.0,
        "evDatabaseUrl": "https://ev-database.org/car/2141/Lotus-Emeya"
    },
    {
        "label": "Peugeot e-308 SW (Aug 2023)",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1745/Peugeot-e-308-SW"
    },
    {
        "label": "Ford Mustang Mach-E SR RWD (Oct 2023)",
        "usableBattery": 72.6,
        "realRange": 380.0,
        "consumptionAverage": 191.0,
        "evDatabaseUrl": "https://ev-database.org/car/2034/Ford-Mustang-Mach-E-SR-RWD"
    },
    {
        "label": "Citroen e-C4 X 54 kWh (Jun 2023)",
        "usableBattery": 50.8,
        "realRange": 330.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/1939/Citroen-e-C4-X-54-kWh"
    },
    {
        "label": "Mercedes-Benz EQB 300 4MATIC (Oct 2023)",
        "usableBattery": 66.5,
        "realRange": 345.0,
        "consumptionAverage": 193.0,
        "evDatabaseUrl": "https://ev-database.org/car/1989/Mercedes-Benz-EQB-300-4MATIC"
    },
    {
        "label": "Maserati GranTurismo Folgore (Jan 2024)",
        "usableBattery": 83.0,
        "realRange": 420.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/1803/Maserati-GranTurismo-Folgore"
    },
    {
        "label": "MG Marvel R Performance (Oct 2021)",
        "usableBattery": 70.0,
        "realRange": 350.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1475/MG-Marvel-R-Performance"
    },
    {
        "label": "Volkswagen ID.4 Pro 4MOTION (Oct 2023)",
        "usableBattery": 77.0,
        "realRange": 425.0,
        "consumptionAverage": 181.0,
        "evDatabaseUrl": "https://ev-database.org/car/2029/Volkswagen-ID4-Pro-4MOTION"
    },
    {
        "label": "Skoda Enyaq 85x (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 440.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/2021/Skoda-Enyaq-85x"
    },
    {
        "label": "Porsche Taycan 4S Plus (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 550.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/2101/Porsche-Taycan-4S-Plus"
    },
    {
        "label": "Mini Countryman SE ALL4 (Feb 2024)",
        "usableBattery": 64.7,
        "realRange": 370.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1995/Mini-Countryman-SE-ALL4"
    },
    {
        "label": "NIO EL7 100 kWh (Dec 2022)",
        "usableBattery": 90.0,
        "realRange": 430.0,
        "consumptionAverage": 209.0,
        "evDatabaseUrl": "https://ev-database.org/car/1789/NIO-EL7-100-kWh"
    },
    {
        "label": "Audi Q4 e-tron 55 quattro (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 395.0,
        "consumptionAverage": 195.0,
        "evDatabaseUrl": "https://ev-database.org/car/2015/Audi-Q4-e-tron-55-quattro"
    },
    {
        "label": "XPENG P7 RWD Long Range (Feb 2023)",
        "usableBattery": 82.7,
        "realRange": 495.0,
        "consumptionAverage": 167.0,
        "evDatabaseUrl": "https://ev-database.org/car/1821/XPENG-P7-RWD-Long-Range"
    },
    {
        "label": "Renault Kangoo E-Tech Electric (Dec 2022)",
        "usableBattery": 45.0,
        "realRange": 220.0,
        "consumptionAverage": 205.0,
        "evDatabaseUrl": "https://ev-database.org/car/1802/Renault-Kangoo-E-Tech-Electric"
    },
    {
        "label": "CUPRA Tavascan Endurance (Apr 2024)",
        "usableBattery": 77.0,
        "realRange": 450.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1971/CUPRA-Tavascan-Endurance"
    },
    {
        "label": "Porsche Taycan Turbo GT Weissach (Mar 2024)",
        "usableBattery": 97.0,
        "realRange": 475.0,
        "consumptionAverage": 204.0,
        "evDatabaseUrl": "https://ev-database.org/car/2145/Porsche-Taycan-Turbo-GT-Weissach"
    },
    {
        "label": "Ford Mustang Mach-E GT (Oct 2023)",
        "usableBattery": 91.0,
        "realRange": 425.0,
        "consumptionAverage": 214.0,
        "evDatabaseUrl": "https://ev-database.org/car/2038/Ford-Mustang-Mach-E-GT"
    },
    {
        "label": "Renault 5 E-Tech 40kWh 120hp (Jun 2025)",
        "usableBattery": 40.0,
        "realRange": 260.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/2134/Renault-5-E-Tech-40kWh-120hp"
    },
    {
        "label": "Genesis GV60 Premium (Jun 2022)",
        "usableBattery": 74.0,
        "realRange": 390.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1647/Genesis-GV60-Premium"
    },
    {
        "label": "Fiat 500e Hatchback 24 kWh (Nov 2020)",
        "usableBattery": 21.3,
        "realRange": 135.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1327/Fiat-500e-Hatchback-24-kWh"
    },
    {
        "label": "BMW i5 xDrive40 Sedan (Feb 2024)",
        "usableBattery": 81.2,
        "realRange": 455.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/2096/BMW-i5-xDrive40-Sedan"
    },
    {
        "label": "Smart #3 Premium (Jan 2024)",
        "usableBattery": 62.0,
        "realRange": 355.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/2054/Smart-3-Premium"
    },
    {
        "label": "Seres 3 (Oct 2021)",
        "usableBattery": 51.0,
        "realRange": 260.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/1804/Seres-3"
    },
    {
        "label": "Audi SQ8 e-tron (May 2023)",
        "usableBattery": 106.0,
        "realRange": 455.0,
        "consumptionAverage": 233.0,
        "evDatabaseUrl": "https://ev-database.org/car/1773/Audi-SQ8-e-tron"
    },
    {
        "label": "NIO EL6 100 kWh (Jul 2023)",
        "usableBattery": 90.0,
        "realRange": 435.0,
        "consumptionAverage": 207.0,
        "evDatabaseUrl": "https://ev-database.org/car/1922/NIO-EL6-100-kWh"
    },
    {
        "label": "Lotus Eletre S (Mar 2023)",
        "usableBattery": 109.0,
        "realRange": 480.0,
        "consumptionAverage": 227.0,
        "evDatabaseUrl": "https://ev-database.org/car/2066/Lotus-Eletre-S"
    },
    {
        "label": "Citroen e-Berlingo XL 50 kWh (Mar 2024)",
        "usableBattery": 50.0,
        "realRange": 230.0,
        "consumptionAverage": 217.0,
        "evDatabaseUrl": "https://ev-database.org/car/2160/Citroen-e-Berlingo-XL-50-kWh"
    },
    {
        "label": "Opel Mokka-e 54 kWh (Oct 2023)",
        "usableBattery": 50.8,
        "realRange": 290.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/2051/Opel-Mokka-e-54-kWh"
    },
    {
        "label": "Volvo EX90 Twin Motor Performance (Dec 2022)",
        "usableBattery": 107.0,
        "realRange": 450.0,
        "consumptionAverage": 238.0,
        "evDatabaseUrl": "https://ev-database.org/car/1776/Volvo-EX90-Twin-Motor-Performance"
    },
    {
        "label": "Peugeot e-2008 50 kWh (Aug 2023)",
        "usableBattery": 46.3,
        "realRange": 270.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1946/Peugeot-e-2008-50-kWh"
    },
    {
        "label": "Mercedes-Benz EQS SUV 450+ (Oct 2023)",
        "usableBattery": 118.0,
        "realRange": 540.0,
        "consumptionAverage": 219.0,
        "evDatabaseUrl": "https://ev-database.org/car/2087/Mercedes-Benz-EQS-SUV-450plus"
    },
    {
        "label": "Volvo EC40 Twin Motor (Feb 2024)",
        "usableBattery": 79.0,
        "realRange": 400.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/2137/Volvo-EC40-Twin-Motor"
    },
    {
        "label": "Citroen e-C4 54 kWh (Jun 2023)",
        "usableBattery": 50.8,
        "realRange": 330.0,
        "consumptionAverage": 154.0,
        "evDatabaseUrl": "https://ev-database.org/car/1938/Citroen-e-C4-54-kWh"
    },
    {
        "label": "Hongqi E-HS9 84 kWh (Dec 2022)",
        "usableBattery": 76.5,
        "realRange": 320.0,
        "consumptionAverage": 239.0,
        "evDatabaseUrl": "https://ev-database.org/car/1746/Hongqi-E-HS9-84-kWh"
    },
    {
        "label": "Mercedes-Benz EQS SUV Maybach 680 (Jan 2024)",
        "usableBattery": 118.0,
        "realRange": 490.0,
        "consumptionAverage": 241.0,
        "evDatabaseUrl": "https://ev-database.org/car/2086/Mercedes-Benz-EQS-SUV-Maybach-680"
    },
    {
        "label": "Dacia Spring Electric 65 (May 2024)",
        "usableBattery": 25.0,
        "realRange": 160.0,
        "consumptionAverage": 156.0,
        "evDatabaseUrl": "https://ev-database.org/car/2127/Dacia-Spring-Electric-65"
    },
    {
        "label": "XPENG G9 AWD Performance (Feb 2023)",
        "usableBattery": 93.1,
        "realRange": 465.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1826/XPENG-G9-AWD-Performance"
    },
    {
        "label": "Lucid Air Pure RWD (Feb 2024)",
        "usableBattery": 92.0,
        "realRange": 565.0,
        "consumptionAverage": 163.0,
        "evDatabaseUrl": "https://ev-database.org/car/2116/Lucid-Air-Pure-RWD"
    },
    {
        "label": "Peugeot e-5008 73 kWh Dual Motor (Sep 2024)",
        "usableBattery": 73.0,
        "realRange": 365.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/2150/Peugeot-e-5008-73-kWh-Dual-Motor"
    },
    {
        "label": "Mercedes-Benz EQE SUV 350 4MATIC (Oct 2023)",
        "usableBattery": 90.6,
        "realRange": 435.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/2047/Mercedes-Benz-EQE-SUV-350-4MATIC"
    },
    {
        "label": "Kia e-Soul 64 kWh (Sep 2022)",
        "usableBattery": 64.0,
        "realRange": 370.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/1749/Kia-e-Soul-64-kWh"
    },
    {
        "label": "Skoda Enyaq Coupe 85x (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 470.0,
        "consumptionAverage": 164.0,
        "evDatabaseUrl": "https://ev-database.org/car/2025/Skoda-Enyaq-Coupe-85x"
    },
    {
        "label": "Nissan Ariya e-4ORCE 87kWh - 225 kW (Jul 2022)",
        "usableBattery": 87.0,
        "realRange": 405.0,
        "consumptionAverage": 215.0,
        "evDatabaseUrl": "https://ev-database.org/car/1304/Nissan-Ariya-e-4ORCE-87kWh---225-kW"
    },
    {
        "label": "MG MG5 Electric Standard Range (Jun 2022)",
        "usableBattery": 46.0,
        "realRange": 265.0,
        "consumptionAverage": 174.0,
        "evDatabaseUrl": "https://ev-database.org/car/1646/MG-MG5-Electric-Standard-Range"
    },
    {
        "label": "Mercedes-Benz EQS SUV 580 4MATIC (Oct 2023)",
        "usableBattery": 118.0,
        "realRange": 530.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/2090/Mercedes-Benz-EQS-SUV-580-4MATIC"
    },
    {
        "label": "Nissan Townstar EV Passenger (Oct 2023)",
        "usableBattery": 45.0,
        "realRange": 225.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/2042/Nissan-Townstar-EV-Passenger"
    },
    {
        "label": "Lotus Emeya S (Mar 2024)",
        "usableBattery": 100.0,
        "realRange": 530.0,
        "consumptionAverage": 189.0,
        "evDatabaseUrl": "https://ev-database.org/car/2142/Lotus-Emeya-S"
    },
    {
        "label": "NIO ET5 Touring 100 kWh (Jul 2023)",
        "usableBattery": 90.0,
        "realRange": 485.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/1916/NIO-ET5-Touring-100-kWh"
    },
    {
        "label": "DS 3 E-Tense (Nov 2022)",
        "usableBattery": 50.8,
        "realRange": 300.0,
        "consumptionAverage": 169.0,
        "evDatabaseUrl": "https://ev-database.org/car/1791/DS-3-E-Tense"
    },
    {
        "label": "Ford Explorer Standard Range RWD (Nov 2024)",
        "usableBattery": 52.0,
        "realRange": 280.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/2167/Ford-Explorer-Standard-Range-RWD"
    },
    {
        "label": "Mercedes-Benz EQS AMG 53 4MATIC+ (Jun 2023)",
        "usableBattery": 108.4,
        "realRange": 535.0,
        "consumptionAverage": 203.0,
        "evDatabaseUrl": "https://ev-database.org/car/2012/Mercedes-Benz-EQS-AMG-53-4MATICplus"
    },
    {
        "label": "Zeekr X Long Range RWD (Oct 2023)",
        "usableBattery": 64.0,
        "realRange": 355.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1936/Zeekr-X-Long-Range-RWD"
    },
    {
        "label": "Citroen e-Berlingo M 50 kWh (Mar 2024)",
        "usableBattery": 50.0,
        "realRange": 235.0,
        "consumptionAverage": 213.0,
        "evDatabaseUrl": "https://ev-database.org/car/2159/Citroen-e-Berlingo-M-50-kWh"
    },
    {
        "label": "Polestar 2 Long Range Performance (Jan 2023)",
        "usableBattery": 79.0,
        "realRange": 450.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1820/Polestar-2-Long-Range-Performance"
    },
    {
        "label": "Smart #3 Pro (Jan 2024)",
        "usableBattery": 47.0,
        "realRange": 265.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/2052/Smart-3-Pro"
    },
    {
        "label": "Ford Mustang Mach-E SR AWD (Oct 2023)",
        "usableBattery": 72.6,
        "realRange": 350.0,
        "consumptionAverage": 207.0,
        "evDatabaseUrl": "https://ev-database.org/car/2036/Ford-Mustang-Mach-E-SR-AWD"
    },
    {
        "label": "Volkswagen ID.5 GTX (Oct 2023)",
        "usableBattery": 77.0,
        "realRange": 430.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/2033/Volkswagen-ID5-GTX"
    },
    {
        "label": "Volvo EC40 Single Motor (Feb 2024)",
        "usableBattery": 67.0,
        "realRange": 360.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/2123/Volvo-EC40-Single-Motor"
    },
    {
        "label": "Mercedes-Benz EQE SUV 300 (Oct 2023)",
        "usableBattery": 90.6,
        "realRange": 450.0,
        "consumptionAverage": 201.0,
        "evDatabaseUrl": "https://ev-database.org/car/2045/Mercedes-Benz-EQE-SUV-300"
    },
    {
        "label": "Porsche Taycan Turbo S (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 500.0,
        "consumptionAverage": 194.0,
        "evDatabaseUrl": "https://ev-database.org/car/2103/Porsche-Taycan-Turbo-S"
    },
    {
        "label": "Hongqi E-HS9 120 kWh (Sep 2023)",
        "usableBattery": 112.0,
        "realRange": 460.0,
        "consumptionAverage": 243.0,
        "evDatabaseUrl": "https://ev-database.org/car/2050/Hongqi-E-HS9-120-kWh"
    },
    {
        "label": "Lotus Emeya R (Mar 2024)",
        "usableBattery": 100.0,
        "realRange": 470.0,
        "consumptionAverage": 213.0,
        "evDatabaseUrl": "https://ev-database.org/car/2143/Lotus-Emeya-R"
    },
    {
        "label": "Polestar 3 Long Range Performance (Nov 2022)",
        "usableBattery": 107.0,
        "realRange": 470.0,
        "consumptionAverage": 228.0,
        "evDatabaseUrl": "https://ev-database.org/car/1759/Polestar-3-Long-Range-Performance"
    },
    {
        "label": "Lexus UX 300e (Apr 2023)",
        "usableBattery": 64.0,
        "realRange": 340.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1943/Lexus-UX-300e"
    },
    {
        "label": "XPENG P7 AWD Performance (Feb 2023)",
        "usableBattery": 82.7,
        "realRange": 460.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1822/XPENG-P7-AWD-Performance"
    },
    {
        "label": "Genesis G80 Electrified Luxury (Jun 2022)",
        "usableBattery": 82.5,
        "realRange": 440.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/1703/Genesis-G80-Electrified-Luxury"
    },
    {
        "label": "Mercedes-Benz EQE 350 (Jun 2023)",
        "usableBattery": 89.0,
        "realRange": 515.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/1898/Mercedes-Benz-EQE-350"
    },
    {
        "label": "NIO ET5 75 kWh (Dec 2022)",
        "usableBattery": 70.5,
        "realRange": 395.0,
        "consumptionAverage": 178.0,
        "evDatabaseUrl": "https://ev-database.org/car/1786/NIO-ET5-75-kWh"
    },
    {
        "label": "Smart #1 Premium (Jun 2023)",
        "usableBattery": 62.0,
        "realRange": 335.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/2053/Smart-1-Premium"
    },
    {
        "label": "Aiways U5 (Apr 2022)",
        "usableBattery": 60.0,
        "realRange": 315.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1678/Aiways-U5"
    },
    {
        "label": "GWM ORA 3 63 kWh (Jan 2024)",
        "usableBattery": 59.3,
        "realRange": 340.0,
        "consumptionAverage": 174.0,
        "evDatabaseUrl": "https://ev-database.org/car/2092/GWM-ORA-3-63-kWh"
    },
    {
        "label": "Peugeot e-3008 73 kWh Dual Motor (Jun 2024)",
        "usableBattery": 73.0,
        "realRange": 380.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/2004/Peugeot-e-3008-73-kWh-Dual-Motor"
    },
    {
        "label": "Mercedes-Benz EQS SUV 450 4MATIC (Oct 2023)",
        "usableBattery": 118.0,
        "realRange": 530.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/2088/Mercedes-Benz-EQS-SUV-450-4MATIC"
    },
    {
        "label": "Mercedes-Benz EQE SUV 350+ (Oct 2023)",
        "usableBattery": 96.0,
        "realRange": 475.0,
        "consumptionAverage": 202.0,
        "evDatabaseUrl": "https://ev-database.org/car/2046/Mercedes-Benz-EQE-SUV-350plus"
    },
    {
        "label": "BMW i5 M60 xDrive Touring (Feb 2024)",
        "usableBattery": 81.2,
        "realRange": 415.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/2115/BMW-i5-M60-xDrive-Touring"
    },
    {
        "label": "Abarth 500e Hatchback (May 2023)",
        "usableBattery": 37.8,
        "realRange": 225.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1903/Abarth-500e-Hatchback"
    },
    {
        "label": "Volvo EX90 Single Motor (Jul 2023)",
        "usableBattery": 101.0,
        "realRange": 460.0,
        "consumptionAverage": 220.0,
        "evDatabaseUrl": "https://ev-database.org/car/1950/Volvo-EX90-Single-Motor"
    },
    {
        "label": "Audi Q4 Sportback e-tron 45 quattro (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 415.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/2017/Audi-Q4-Sportback-e-tron-45-quattro"
    },
    {
        "label": "Volvo EX40 Twin Motor Performance (Feb 2024)",
        "usableBattery": 79.0,
        "realRange": 380.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/2122/Volvo-EX40-Twin-Motor-Performance"
    },
    {
        "label": "BYD DOLPHIN 44.9 kWh Boost (Jul 2023)",
        "usableBattery": 44.9,
        "realRange": 255.0,
        "consumptionAverage": 176.0,
        "evDatabaseUrl": "https://ev-database.org/car/1918/BYD-DOLPHIN-449-kWh-Boost"
    },
    {
        "label": "Mercedes-Benz EQE 350 4MATIC (Jun 2023)",
        "usableBattery": 89.0,
        "realRange": 510.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1899/Mercedes-Benz-EQE-350-4MATIC"
    },
    {
        "label": "Smart #3 Pro+ (Jan 2024)",
        "usableBattery": 62.0,
        "realRange": 355.0,
        "consumptionAverage": 175.0,
        "evDatabaseUrl": "https://ev-database.org/car/1999/Smart-3-Proplus"
    },
    {
        "label": "Audi Q4 Sportback e-tron 55 quattro (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 415.0,
        "consumptionAverage": 186.0,
        "evDatabaseUrl": "https://ev-database.org/car/2018/Audi-Q4-Sportback-e-tron-55-quattro"
    },
    {
        "label": "Mercedes-Benz EQE SUV AMG 53 4MATIC+ (May 2023)",
        "usableBattery": 90.6,
        "realRange": 410.0,
        "consumptionAverage": 221.0,
        "evDatabaseUrl": "https://ev-database.org/car/1764/Mercedes-Benz-EQE-SUV-AMG-53-4MATICplus"
    },
    {
        "label": "Volvo EC40 Twin Motor Performance (Feb 2024)",
        "usableBattery": 79.0,
        "realRange": 400.0,
        "consumptionAverage": 198.0,
        "evDatabaseUrl": "https://ev-database.org/car/2125/Volvo-EC40-Twin-Motor-Performance"
    },
    {
        "label": "Mercedes-Benz EQA 300 4MATIC (Oct 2023)",
        "usableBattery": 66.5,
        "realRange": 355.0,
        "consumptionAverage": 187.0,
        "evDatabaseUrl": "https://ev-database.org/car/1986/Mercedes-Benz-EQA-300-4MATIC"
    },
    {
        "label": "Fiat 500e 3+1 42 kWh (Nov 2020)",
        "usableBattery": 37.3,
        "realRange": 235.0,
        "consumptionAverage": 159.0,
        "evDatabaseUrl": "https://ev-database.org/car/1328/Fiat-500e-3plus1-42-kWh"
    },
    {
        "label": "Mercedes-Benz EQE 500 4MATIC (Jun 2023)",
        "usableBattery": 90.6,
        "realRange": 505.0,
        "consumptionAverage": 179.0,
        "evDatabaseUrl": "https://ev-database.org/car/1900/Mercedes-Benz-EQE-500-4MATIC"
    },
    {
        "label": "Audi Q8 e-tron Sportback 50 quattro (Dec 2022)",
        "usableBattery": 89.0,
        "realRange": 445.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1771/Audi-Q8-e-tron-Sportback-50-quattro"
    },
    {
        "label": "Mercedes-Benz EQV 300 Long (Feb 2024)",
        "usableBattery": 90.0,
        "realRange": 315.0,
        "consumptionAverage": 286.0,
        "evDatabaseUrl": "https://ev-database.org/car/2131/Mercedes-Benz-EQV-300-Long"
    },
    {
        "label": "Genesis GV70 Electrified Sport (Oct 2022)",
        "usableBattery": 74.0,
        "realRange": 350.0,
        "consumptionAverage": 211.0,
        "evDatabaseUrl": "https://ev-database.org/car/1725/Genesis-GV70-Electrified-Sport"
    },
    {
        "label": "CUPRA Born 170 kW - 58 kWh (Mar 2022)",
        "usableBattery": 58.0,
        "realRange": 345.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1517/CUPRA-Born-170-kW---58-kWh"
    },
    {
        "label": "Mercedes-Benz EQE AMG 43 4MATIC (Jun 2023)",
        "usableBattery": 90.6,
        "realRange": 450.0,
        "consumptionAverage": 201.0,
        "evDatabaseUrl": "https://ev-database.org/car/1901/Mercedes-Benz-EQE-AMG-43-4MATIC"
    },
    {
        "label": "Mercedes-Benz EQE SUV 500 4MATIC (Oct 2023)",
        "usableBattery": 96.0,
        "realRange": 455.0,
        "consumptionAverage": 211.0,
        "evDatabaseUrl": "https://ev-database.org/car/2048/Mercedes-Benz-EQE-SUV-500-4MATIC"
    },
    {
        "label": "Skoda Enyaq RS (Sep 2023)",
        "usableBattery": 77.0,
        "realRange": 435.0,
        "consumptionAverage": 177.0,
        "evDatabaseUrl": "https://ev-database.org/car/2022/Skoda-Enyaq-RS"
    },
    {
        "label": "Zeekr 001 Privilege AWD (Sep 2023)",
        "usableBattery": 94.0,
        "realRange": 495.0,
        "consumptionAverage": 190.0,
        "evDatabaseUrl": "https://ev-database.org/car/1935/Zeekr-001-Privilege-AWD"
    },
    {
        "label": "Volkswagen ID. Buzz LWB Pro (May 2024)",
        "usableBattery": 77.0,
        "realRange": 335.0,
        "consumptionAverage": 230.0,
        "evDatabaseUrl": "https://ev-database.org/car/2154/Volkswagen-ID-Buzz-LWB-Pro"
    },
    {
        "label": "e.Go e.wave X (Dec 2022)",
        "usableBattery": 27.0,
        "realRange": 150.0,
        "consumptionAverage": 180.0,
        "evDatabaseUrl": "https://ev-database.org/car/1896/eGo-ewave-X"
    },
    {
        "label": "Kia e-Soul 39.2 kWh (Sep 2022)",
        "usableBattery": 39.2,
        "realRange": 230.0,
        "consumptionAverage": 170.0,
        "evDatabaseUrl": "https://ev-database.org/car/1750/Kia-e-Soul-392-kWh"
    },
    {
        "label": "Mercedes-Benz EQS 500 4MATIC (Jun 2023)",
        "usableBattery": 108.4,
        "realRange": 590.0,
        "consumptionAverage": 184.0,
        "evDatabaseUrl": "https://ev-database.org/car/2010/Mercedes-Benz-EQS-500-4MATIC"
    },
    {
        "label": "Porsche Taycan Turbo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 520.0,
        "consumptionAverage": 187.0,
        "evDatabaseUrl": "https://ev-database.org/car/2102/Porsche-Taycan-Turbo"
    },
    {
        "label": "Smart #1 Pro (Nov 2023)",
        "usableBattery": 47.0,
        "realRange": 250.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/2041/Smart-1-Pro"
    },
    {
        "label": "Mercedes-Benz EQA 350 4MATIC (Oct 2023)",
        "usableBattery": 66.5,
        "realRange": 355.0,
        "consumptionAverage": 187.0,
        "evDatabaseUrl": "https://ev-database.org/car/1987/Mercedes-Benz-EQA-350-4MATIC"
    },
    {
        "label": "Skoda Enyaq Coupe 60 (Oct 2023)",
        "usableBattery": 58.0,
        "realRange": 355.0,
        "consumptionAverage": 163.0,
        "evDatabaseUrl": "https://ev-database.org/car/2023/Skoda-Enyaq-Coupe-60"
    },
    {
        "label": "VinFast VF 8 Eco Extended Range (Nov 2023)",
        "usableBattery": 87.7,
        "realRange": 425.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/1807/VinFast-VF-8-Eco-Extended-Range"
    },
    {
        "label": "Mercedes-Benz EQT 200 Standard (Jun 2023)",
        "usableBattery": 45.0,
        "realRange": 225.0,
        "consumptionAverage": 200.0,
        "evDatabaseUrl": "https://ev-database.org/car/1908/Mercedes-Benz-EQT-200-Standard"
    },
    {
        "label": "Mercedes-Benz EQE AMG 53 4MATIC+ (Jun 2023)",
        "usableBattery": 90.6,
        "realRange": 450.0,
        "consumptionAverage": 201.0,
        "evDatabaseUrl": "https://ev-database.org/car/1902/Mercedes-Benz-EQE-AMG-53-4MATICplus"
    },
    {
        "label": "Porsche Taycan 4S (Feb 2024)",
        "usableBattery": 82.3,
        "realRange": 475.0,
        "consumptionAverage": 173.0,
        "evDatabaseUrl": "https://ev-database.org/car/2100/Porsche-Taycan-4S"
    },
    {
        "label": "Fiat 500e Cabrio 42 kWh (Nov 2020)",
        "usableBattery": 37.3,
        "realRange": 230.0,
        "consumptionAverage": 162.0,
        "evDatabaseUrl": "https://ev-database.org/car/1275/Fiat-500e-Cabrio-42-kWh"
    },
    {
        "label": "Porsche Taycan Plus Sport Turismo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 515.0,
        "consumptionAverage": 188.0,
        "evDatabaseUrl": "https://ev-database.org/car/2105/Porsche-Taycan-Plus-Sport-Turismo"
    },
    {
        "label": "Porsche Taycan 4S Cross Turismo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 505.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/2111/Porsche-Taycan-4S-Cross-Turismo"
    },
    {
        "label": "Mercedes-Benz eVito Tourer Long 90 kWh (Feb 2024)",
        "usableBattery": 90.0,
        "realRange": 320.0,
        "consumptionAverage": 281.0,
        "evDatabaseUrl": "https://ev-database.org/car/2140/Mercedes-Benz-eVito-Tourer-Long-90-kWh"
    },
    {
        "label": "Nissan Ariya e-4ORCE 87kWh - 290 kW (Apr 2023)",
        "usableBattery": 87.0,
        "realRange": 405.0,
        "consumptionAverage": 215.0,
        "evDatabaseUrl": "https://ev-database.org/car/1305/Nissan-Ariya-e-4ORCE-87kWh---290-kW"
    },
    {
        "label": "Audi SQ8 e-tron Sportback (May 2023)",
        "usableBattery": 106.0,
        "realRange": 480.0,
        "consumptionAverage": 221.0,
        "evDatabaseUrl": "https://ev-database.org/car/1774/Audi-SQ8-e-tron-Sportback"
    },
    {
        "label": "Smart #1 Pulse (Jun 2023)",
        "usableBattery": 62.0,
        "realRange": 325.0,
        "consumptionAverage": 191.0,
        "evDatabaseUrl": "https://ev-database.org/car/1920/Smart-1-Pulse"
    },
    {
        "label": "Porsche Taycan 4 Cross Turismo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 505.0,
        "consumptionAverage": 192.0,
        "evDatabaseUrl": "https://ev-database.org/car/2110/Porsche-Taycan-4-Cross-Turismo"
    },
    {
        "label": "Aiways U6 (Dec 2022)",
        "usableBattery": 60.0,
        "realRange": 350.0,
        "consumptionAverage": 171.0,
        "evDatabaseUrl": "https://ev-database.org/car/1766/Aiways-U6"
    },
    {
        "label": "Mercedes-Benz EQS SUV 500 4MATIC (Oct 2023)",
        "usableBattery": 118.0,
        "realRange": 530.0,
        "consumptionAverage": 223.0,
        "evDatabaseUrl": "https://ev-database.org/car/2089/Mercedes-Benz-EQS-SUV-500-4MATIC"
    },
    {
        "label": "NIO ET5 Touring 75 kWh (Jul 2023)",
        "usableBattery": 70.5,
        "realRange": 385.0,
        "consumptionAverage": 183.0,
        "evDatabaseUrl": "https://ev-database.org/car/1915/NIO-ET5-Touring-75-kWh"
    },
    {
        "label": "Fiat 500e 3+1 24 kWh (Jul 2022)",
        "usableBattery": 21.3,
        "realRange": 135.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1726/Fiat-500e-3plus1-24-kWh"
    },
    {
        "label": "Genesis GV60 Sport (Jun 2022)",
        "usableBattery": 74.0,
        "realRange": 380.0,
        "consumptionAverage": 195.0,
        "evDatabaseUrl": "https://ev-database.org/car/1648/Genesis-GV60-Sport"
    },
    {
        "label": "Mercedes-Benz EQE SUV AMG 43 4MATIC (Dec 2022)",
        "usableBattery": 90.6,
        "realRange": 415.0,
        "consumptionAverage": 218.0,
        "evDatabaseUrl": "https://ev-database.org/car/1763/Mercedes-Benz-EQE-SUV-AMG-43-4MATIC"
    },
    {
        "label": "Genesis GV60 Sport Plus (Jun 2022)",
        "usableBattery": 74.0,
        "realRange": 365.0,
        "consumptionAverage": 203.0,
        "evDatabaseUrl": "https://ev-database.org/car/1649/Genesis-GV60-Sport-Plus"
    },
    {
        "label": "GWM ORA 3 GT (Jan 2024)",
        "usableBattery": 59.3,
        "realRange": 325.0,
        "consumptionAverage": 182.0,
        "evDatabaseUrl": "https://ev-database.org/car/2093/GWM-ORA-3-GT"
    },
    {
        "label": "NIO EL6 75 kWh (Jul 2023)",
        "usableBattery": 70.5,
        "realRange": 350.0,
        "consumptionAverage": 201.0,
        "evDatabaseUrl": "https://ev-database.org/car/1921/NIO-EL6-75-kWh"
    },
    {
        "label": "Porsche Taycan Turbo S Cross Turismo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 475.0,
        "consumptionAverage": 204.0,
        "evDatabaseUrl": "https://ev-database.org/car/2113/Porsche-Taycan-Turbo-S-Cross-Turismo"
    },
    {
        "label": "VinFast VF 8 Plus Extended Range (Nov 2023)",
        "usableBattery": 87.7,
        "realRange": 425.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/1809/VinFast-VF-8-Plus-Extended-Range"
    },
    {
        "label": "Mercedes-Benz eVito Tourer Long 60 kWh (Feb 2024)",
        "usableBattery": 60.0,
        "realRange": 220.0,
        "consumptionAverage": 273.0,
        "evDatabaseUrl": "https://ev-database.org/car/2138/Mercedes-Benz-eVito-Tourer-Long-60-kWh"
    },
    {
        "label": "Fiat 500e Cabrio 24 kWh (Jul 2022)",
        "usableBattery": 21.3,
        "realRange": 135.0,
        "consumptionAverage": 158.0,
        "evDatabaseUrl": "https://ev-database.org/car/1727/Fiat-500e-Cabrio-24-kWh"
    },
    {
        "label": "NIO EL7 75 kWh (Dec 2022)",
        "usableBattery": 70.5,
        "realRange": 340.0,
        "consumptionAverage": 207.0,
        "evDatabaseUrl": "https://ev-database.org/car/1788/NIO-EL7-75-kWh"
    },
    {
        "label": "Elaris BEO 86 kWh (Feb 2023)",
        "usableBattery": 81.0,
        "realRange": 390.0,
        "consumptionAverage": 208.0,
        "evDatabaseUrl": "https://ev-database.org/car/1975/Elaris-BEO-86-kWh"
    },
    {
        "label": "Mercedes-Benz EQV 250 Extra-Long (Feb 2024)",
        "usableBattery": 60.0,
        "realRange": 210.0,
        "consumptionAverage": 286.0,
        "evDatabaseUrl": "https://ev-database.org/car/2130/Mercedes-Benz-EQV-250-Extra-Long"
    },
    {
        "label": "Mercedes-Benz eVito Tourer Extra-Long 60 kWh (Feb 2024)",
        "usableBattery": 60.0,
        "realRange": 215.0,
        "consumptionAverage": 279.0,
        "evDatabaseUrl": "https://ev-database.org/car/2139/Mercedes-Benz-eVito-Tourer-Extra-Long-60-kWh"
    },
    {
        "label": "Abarth 500e Convertible (May 2023)",
        "usableBattery": 37.8,
        "realRange": 225.0,
        "consumptionAverage": 168.0,
        "evDatabaseUrl": "https://ev-database.org/car/1904/Abarth-500e-Convertible"
    },
    {
        "label": "Porsche Taycan 4S Plus Sport Turismo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 495.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/2107/Porsche-Taycan-4S-Plus-Sport-Turismo"
    },
    {
        "label": "Mercedes-Benz EQV 250 Long (Feb 2024)",
        "usableBattery": 60.0,
        "realRange": 215.0,
        "consumptionAverage": 279.0,
        "evDatabaseUrl": "https://ev-database.org/car/2129/Mercedes-Benz-EQV-250-Long"
    },
    {
        "label": "Porsche Taycan 4S Sport Turismo (Feb 2024)",
        "usableBattery": 82.3,
        "realRange": 430.0,
        "consumptionAverage": 191.0,
        "evDatabaseUrl": "https://ev-database.org/car/2106/Porsche-Taycan-4S-Sport-Turismo"
    },
    {
        "label": "Porsche Taycan Turbo Sport Turismo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 470.0,
        "consumptionAverage": 206.0,
        "evDatabaseUrl": "https://ev-database.org/car/2108/Porsche-Taycan-Turbo-Sport-Turismo"
    },
    {
        "label": "Porsche Taycan Sport Turismo (Feb 2024)",
        "usableBattery": 82.3,
        "realRange": 445.0,
        "consumptionAverage": 185.0,
        "evDatabaseUrl": "https://ev-database.org/car/2104/Porsche-Taycan-Sport-Turismo"
    },
    {
        "label": "Porsche Taycan Turbo Cross Turismo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 495.0,
        "consumptionAverage": 196.0,
        "evDatabaseUrl": "https://ev-database.org/car/2112/Porsche-Taycan-Turbo-Cross-Turismo"
    },
    {
        "label": "Porsche Taycan Turbo S Sport Turismo (Feb 2024)",
        "usableBattery": 97.0,
        "realRange": 460.0,
        "consumptionAverage": 211.0,
        "evDatabaseUrl": "https://ev-database.org/car/2109/Porsche-Taycan-Turbo-S-Sport-Turismo"
    }
];