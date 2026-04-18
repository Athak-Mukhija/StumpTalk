const questions = [
  // --- T20 WORLD CUP 2026 (LATEST) ---
  {
    question: "Who won the ICC Men's T20 World Cup 2026?",
    options: ["India", "New Zealand", "Sri Lanka", "Australia"],
    answer: "India"
  },
  {
    question: "Who was the runner-up in the 2026 T20 World Cup?",
    options: ["Pakistan", "New Zealand", "England", "South Africa"],
    answer: "New Zealand"
  },
  {
    question: "Which two countries co-hosted the 2026 T20 World Cup?",
    options: ["USA & West Indies", "India & Sri Lanka", "Australia & New Zealand", "England & Wales"],
    answer: "India & Sri Lanka"
  },
  {
    question: "Where was the final of the 2026 T20 World Cup held?",
    options: ["Eden Gardens", "Narendra Modi Stadium", "R. Premadasa Stadium", "Wankhede Stadium"],
    answer: "Narendra Modi Stadium"
  },
  {
    question: "How many teams participated in the 2026 T20 World Cup?",
    options: ["16", "18", "20", "24"],
    answer: "20"
  },

  // --- RECENT ICC EVENTS (2024-2025) ---
  {
    question: "Who won the 2024 ICC Men's T20 World Cup in Barbados?",
    options: ["South Africa", "India", "Australia", "West Indies"],
    answer: "India"
  },
  {
    question: "Who was the Player of the Tournament in the 2024 T20 World Cup?",
    options: ["Jasprit Bumrah", "Virat Kohli", "Travis Head", "Quinton de Kock"],
    answer: "Jasprit Bumrah"
  },
  {
    question: "Which team won the 2025 ICC Champions Trophy?",
    options: ["Pakistan", "India", "Australia", "South Africa"],
    answer: "Pakistan"
  },
  {
    question: "Who won the 2023-2025 ICC World Test Championship (WTC)?",
    options: ["India", "Australia", "South Africa", "England"],
    answer: "Australia"
  },

  // --- IPL & DOMESTIC (LATEST) ---
  {
    question: "Which team won the IPL 2025 title?",
    options: ["KKR", "SRH", "CSK", "RCB"],
    answer: "KKR"
  },
  {
    question: "Who holds the record for the highest team total in IPL history (287 runs)?",
    options: ["RCB", "SRH", "KKR", "LSG"],
    answer: "SRH"
  },
  {
    question: "Which player won the Orange Cap in IPL 2024?",
    options: ["Virat Kohli", "Travis Head", "Ruturaj Gaikwad", "Abhishek Sharma"],
    answer: "Virat Kohli"
  },
  {
    question: "Which bowler won the Purple Cap in IPL 2024?",
    options: ["Harshal Patel", "Jasprit Bumrah", "Varun Chakaravarthy", "Yuzvendra Chahal"],
    answer: "Harshal Patel"
  },
  {
    question: "Which city is the home ground for the IPL team 'Gujarat Titans'?",
    options: ["Rajkot", "Ahmedabad", "Surat", "Vadodara"],
    answer: "Ahmedabad"
  },

  // --- BATTING RECORDS ---
  {
    question: "Who has the most runs in International Cricket?",
    options: ["Ricky Ponting", "Sachin Tendulkar", "Kumar Sangakkara", "Virat Kohli"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who scored the first double century in Men's ODI cricket?",
    options: ["Chris Gayle", "Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who has the highest individual score in Test cricket (400*)?",
    options: ["Matthew Hayden", "Brian Lara", "Don Bradman", "Virender Sehwag"],
    answer: "Brian Lara"
  },
  {
    question: "Who is the fastest to 50 ODI centuries?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Rohit Sharma"],
    answer: "Virat Kohli"
  },
  {
    question: "Which batsman is nicknamed 'The Don'?",
    options: ["Don Bradman", "Viv Richards", "Don Silas", "Gary Sobers"],
    answer: "Don Bradman"
  },
  {
    question: "Who hit the first ever century in T20 Internationals?",
    options: ["Brendon McCullum", "Chris Gayle", "Suresh Raina", "Mahela Jayawardene"],
    answer: "Chris Gayle"
  },
  {
    question: "Who has scored the most double centuries in Test cricket?",
    options: ["Don Bradman", "Kumar Sangakkara", "Virat Kohli", "Wally Hammond"],
    answer: "Don Bradman"
  },
  {
    question: "Who was the first player to hit 6 sixes in an over in an ODI?",
    options: ["Yuvraj Singh", "Herschelle Gibbs", "Kieron Pollard", "Jaskaran Malhotra"],
    answer: "Herschelle Gibbs"
  },
  {
    question: "Highest individual score in ODI cricket?",
    options: ["264", "273", "237", "210"],
    answer: "264"
  },
  {
    question: "Who scored 264 in an ODI against Sri Lanka?",
    options: ["Virat Kohli", "Rohit Sharma", "Ishan Kishan", "Shubman Gill"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who is known as 'The Wall' of Indian cricket?",
    options: ["VVS Laxman", "Rahul Dravid", "Cheteshwar Pujara", "Sunil Gavaskar"],
    answer: "Rahul Dravid"
  },
  {
    question: "Which player has the highest batting average in Tests (99.94)?",
    options: ["Steve Smith", "Kane Williamson", "Don Bradman", "Joe Root"],
    answer: "Don Bradman"
  },
  {
    question: "Who scored the fastest century in Test history (54 balls)?",
    options: ["Adam Gilchrist", "Brendon McCullum", "Viv Richards", "Misbah-ul-Haq"],
    answer: "Brendon McCullum"
  },
  {
    question: "Who is the 'Universe Boss'?",
    options: ["Chris Gayle", "Andre Russell", "Jos Buttler", "Sunil Narine"],
    answer: "Chris Gayle"
  },
  {
    question: "Most runs in a single World Cup (2023 edition)?",
    options: ["Virat Kohli", "Rohit Sharma", "Quinton de Kock", "Rachin Ravindra"],
    answer: "Virat Kohli"
  },
  {
    question: "Who was the first Indian to score a Test triple century?",
    options: ["Sachin Tendulkar", "Virender Sehwag", "Karun Nair", "Sunil Gavaskar"],
    answer: "Virender Sehwag"
  },

  // --- BOWLING RECORDS ---
  {
    question: "Most wickets in Test cricket?",
    options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who has the most wickets in ODI history?",
    options: ["Wasim Akram", "Muttiah Muralitharan", "Glenn McGrath", "Lasith Malinga"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who was the first bowler to take 500 Test wickets?",
    options: ["Shane Warne", "Courtney Walsh", "Glenn McGrath", "Muralitharan"],
    answer: "Courtney Walsh"
  },
  {
    question: "Which bowler is known as the 'Rawalpindi Express'?",
    options: ["Waqar Younis", "Shoaib Akhtar", "Brett Lee", "Mitchell Johnson"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Who has the best bowling figures in a Test match (10/74)?",
    options: ["Anil Kumble", "Jim Laker", "Ajaz Patel", "All of these"],
    answer: "All of these"
  },
  {
    question: "Who is the first Indian to take a hat-trick in ODIs?",
    options: ["Chetan Sharma", "Kapil Dev", "Kuldeep Yadav", "Mohammed Shami"],
    answer: "Chetan Sharma"
  },
  {
    question: "Most wickets in a single IPL season (32 wickets)?",
    options: ["Dwayne Bravo", "Harshal Patel", "Kagiso Rabada", "Lasith Malinga"],
    answer: "Harshal Patel"
  },
  {
    question: "Which bowler has taken the most hat-tricks in ODIs?",
    options: ["Wasim Akram", "Lasith Malinga", "Brett Lee", "Chaminda Vaas"],
    answer: "Lasith Malinga"
  },
  {
    question: "Who is the highest wicket-taker for India in Tests?",
    options: ["Kapil Dev", "Anil Kumble", "R Ashwin", "Harbhajan Singh"],
    answer: "Anil Kumble"
  },
  {
    question: "Who bowled the fastest delivery ever recorded (161.3 kph)?",
    options: ["Brett Lee", "Shaun Tait", "Shoaib Akhtar", "Jeff Thomson"],
    answer: "Shoaib Akhtar"
  },

  // --- WORLD CUP HISTORY ---
  {
    question: "Who won the first ever Cricket World Cup in 1975?",
    options: ["Australia", "West Indies", "England", "India"],
    answer: "West Indies"
  },
  {
    question: "In which year did India win its first World Cup?",
    options: ["1983", "2011", "2007", "1975"],
    answer: "1983"
  },
  {
    question: "Who was the captain of India's 2011 World Cup winning team?",
    options: ["MS Dhoni", "Virat Kohli", "Sourav Ganguly", "Kapil Dev"],
    answer: "MS Dhoni"
  },
  {
    question: "Which team has won the most ODI World Cups?",
    options: ["India", "West Indies", "Australia", "Pakistan"],
    answer: "Australia"
  },
  {
    question: "Who won the first ever T20 World Cup in 2007?",
    options: ["Pakistan", "India", "Australia", "South Africa"],
    answer: "India"
  },
  {
    question: "Which country hosted the 2011 Cricket World Cup final?",
    options: ["Sri Lanka", "Bangladesh", "India", "Pakistan"],
    answer: "India"
  },
  {
    question: "Who was the Man of the Match in the 1983 World Cup Final?",
    options: ["Kapil Dev", "Mohinder Amarnath", "Sunil Gavaskar", "Viv Richards"],
    answer: "Mohinder Amarnath"
  },
  {
    question: "Which player has played the most World Cup matches?",
    options: ["Sachin Tendulkar", "Ricky Ponting", "Glenn McGrath", "Mahela Jayawardene"],
    answer: "Ricky Ponting"
  },
  {
    question: "Who won the 1992 Cricket World Cup?",
    options: ["England", "New Zealand", "Pakistan", "South Africa"],
    answer: "Pakistan"
  },
  {
    question: "In which year did the World Cup change from 60 overs to 50 overs?",
    options: ["1979", "1983", "1987", "1992"],
    answer: "1987"
  },

  // --- GENERAL KNOWLEDGE & TERMS ---
  {
    question: "What is the length of a cricket pitch?",
    options: ["20 yards", "22 yards", "24 yards", "26 yards"],
    answer: "22 yards"
  },
  {
    question: "Which stadium is known as the 'Lords of the East'?",
    options: ["Eden Gardens", "Melbourne Cricket Ground", "The Oval", "Wankhede"],
    answer: "Eden Gardens"
  },
  {
    question: "What does LBW stand for?",
    options: ["Leg Before Wicket", "Leg Beyond Wicket", "Low Ball Wicket", "Long Ball Wide"],
    answer: "Leg Before Wicket"
  },
  {
    question: "A 'Chinaman' bowler is a?",
    options: ["Right-arm off spinner", "Left-arm wrist spinner", "Right-arm leg spinner", "Left-arm finger spinner"],
    answer: "Left-arm wrist spinner"
  },
  {
    question: "How many ways can a batsman be out in cricket?",
    options: ["5", "8", "10", "12"],
    answer: "10"
  },
  {
    question: "What is the nickname of the South African team?",
    options: ["Kiwis", "Proteas", "Lions", "Tigers"],
    answer: "Proteas"
  },
  {
    question: "What is the nickname of the New Zealand team?",
    options: ["All Blacks", "Black Caps", "Kiwis", "The Blues"],
    answer: "Black Caps"
  },
  {
    question: "Which trophy is played between Australia and England?",
    options: ["Border-Gavaskar", "The Ashes", "Wisden Trophy", "Freedom Trophy"],
    answer: "The Ashes"
  },
  {
    question: "Where is the headquarters of the ICC located?",
    options: ["London", "Dubai", "Melbourne", "Mumbai"],
    answer: "Dubai"
  },
  {
    question: "What is a 'Duck' in cricket?",
    options: ["1 run", "Score of 0", "A wide ball", "A fielding error"],
    answer: "Score of 0"
  },

  // --- CAPTAINCY & LEADERSHIP ---
  {
    question: "Who is the current captain of the Indian ODI team?",
    options: ["Virat Kohli", "Hardik Pandya", "Rohit Sharma", "KL Rahul"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who was the first captain of the Indian Test team?",
    options: ["Lala Amarnath", "CK Nayudu", "Vijay Hazare", "Pataudi"],
    answer: "CK Nayudu"
  },
  {
    question: "Who has captained the most international matches?",
    options: ["Ricky Ponting", "MS Dhoni", "Stephen Fleming", "Graeme Smith"],
    answer: "MS Dhoni"
  },
  {
    question: "Who is the only captain to win 3 different ICC trophies?",
    options: ["Ricky Ponting", "MS Dhoni", "Clive Lloyd", "Imran Khan"],
    answer: "MS Dhoni"
  },
  {
    question: "Who was Australia's captain during their 2023 World Cup win?",
    options: ["Steve Smith", "Pat Cummins", "Mitchell Marsh", "David Warner"],
    answer: "Pat Cummins"
  },

  // --- IPL TEAMS & OWNERS ---
  {
    question: "Which Bollywood actor owns Kolkata Knight Riders?",
    options: ["Salman Khan", "Shah Rukh Khan", "Akshay Kumar", "Aamir Khan"],
    answer: "Shah Rukh Khan"
  },
  {
    question: "Who is the owner of Mumbai Indians?",
    options: ["Mukesh Ambani", "Gautam Adani", "Ratan Tata", "Sajjan Jindal"],
    answer: "Mukesh Ambani"
  },
  {
    question: "Which team has won the most IPL titles (as of 2024)?",
    options: ["MI", "CSK", "KKR", "Both MI & CSK"],
    answer: "Both MI & CSK"
  },
  {
    question: "Who was the captain of Gujarat Titans in 2024?",
    options: ["Hardik Pandya", "Shubman Gill", "Rashid Khan", "Kane Williamson"],
    answer: "Shubman Gill"
  },
  {
    question: "Which team replaced Delhi Daredevils?",
    options: ["Delhi Capitals", "Delhi United", "Delhi Tigers", "Delhi Warriors"],
    answer: "Delhi Capitals"
  },

  // --- MILESTONES & FIRSTS ---
  {
    question: "Who was the first batsman to score 10,000 runs in Tests?",
    options: ["Sunil Gavaskar", "Allan Border", "Sachin Tendulkar", "Brian Lara"],
    answer: "Sunil Gavaskar"
  },
  {
    question: "Which country played the first ever Test match?",
    options: ["India vs England", "England vs Australia", "West Indies vs England", "Australia vs South Africa"],
    answer: "England vs Australia"
  },
  {
    question: "In which year was the first IPL held?",
    options: ["2007", "2008", "2009", "2010"],
    answer: "2008"
  },
  {
    question: "Who was the first person to take 800 wickets in Tests?",
    options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "First cricketer to be awarded the Bharat Ratna?",
    options: ["Kapil Dev", "Sachin Tendulkar", "Sunil Gavaskar", "MS Dhoni"],
    answer: "Sachin Tendulkar"
  },

  // --- WOMEN'S CRICKET ---
  {
    question: "Who won the first ever Women's Premier League (WPL) in 2023?",
    options: ["Delhi Capitals", "Mumbai Indians", "RCB", "UP Warriorz"],
    answer: "Mumbai Indians"
  },
  {
    question: "Who won the WPL 2024?",
    options: ["Mumbai Indians", "Delhi Capitals", "RCB", "Gujarat Giants"],
    answer: "RCB"
  },
  {
    question: "Who is the leading run-scorer in Women's ODIs?",
    options: ["Mithali Raj", "Charlotte Edwards", "Suzie Bates", "Smriti Mandhana"],
    answer: "Mithali Raj"
  },
  {
    question: "Which team won the 2024 Women's T20 World Cup?",
    options: ["Australia", "India", "New Zealand", "South Africa"],
    answer: "New Zealand"
  },
  {
    question: "Who is known as the 'Jhulan Express'?",
    options: ["Jhulan Goswami", "Harmanpreet Kaur", "Smriti Mandhana", "Deepti Sharma"],
    answer: "Jhulan Goswami"
  },

  // --- RECENT FORMATS & RULES ---
  {
    question: "What is the 'Impact Player' rule associated with?",
    options: ["Test Cricket", "IPL", "ODI World Cup", "The Hundred"],
    answer: "IPL"
  },
  {
    question: "How many balls are bowled in one over of 'The Hundred'?",
    options: ["6", "10", "5", "8"],
    answer: "5"
  },
  {
    question: "Which technology is used to detect edges in cricket?",
    options: ["Hawk-Eye", "Snickometer", "Hot Spot", "Both Snickometer & Hot Spot"],
    answer: "Both Snickometer & Hot Spot"
  },
  {
    question: "What is the maximum number of reviews allowed per innings in T20Is?",
    options: ["1", "2", "3", "None"],
    answer: "2"
  },
  {
    question: "Which ball is used in Test cricket in India?",
    options: ["Kookaburra", "Dukes", "SG", "Spartan"],
    answer: "SG"
  },

  // --- LEGENDARY VENUES ---
  {
    question: "Where is the MCG located?",
    options: ["Sydney", "Melbourne", "Perth", "Brisbane"],
    answer: "Melbourne"
  },
  {
    question: "Which stadium is known as the 'Home of Cricket'?",
    options: ["Lords", "The Oval", "Old Trafford", "Trent Bridge"],
    answer: "Lords"
  },
  {
    question: "Where is the Kensington Oval located?",
    options: ["Jamaica", "Barbados", "Trinidad", "Guyana"],
    answer: "Barbados"
  },
  {
    question: "Which ground has the highest altitude in India?",
    options: ["Dharamsala", "Chail", "Leh", "Srinagar"],
    answer: "Chail"
  },
  {
    question: "Which city is the Eden Park stadium in?",
    options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    answer: "Auckland"
  },

  // --- CONTINUED 101-200 (MIXED CATEGORIES) ---
  {
    question: "Who is the fastest to 10,000 ODI runs?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Sourav Ganguly", "Ricky Ponting"],
    answer: "Virat Kohli"
  },
  {
    question: "Which bowler is nicknamed 'Pigeon'?",
    options: ["Glenn McGrath", "Shane Warne", "Brett Lee", "Jason Gillespie"],
    answer: "Glenn McGrath"
  },
  {
    question: "Who hit the longest six in cricket history?",
    options: ["Shahid Afridi", "Albert Trott", "Brett Lee", "Yuvraj Singh"],
    answer: "Shahid Afridi"
  },
  {
    question: "Which country is nicknamed 'The Lions'?",
    options: ["Sri Lanka", "England", "South Africa", "Kenya"],
    answer: "Sri Lanka"
  },
  {
    question: "Most centuries in a single World Cup?",
    options: ["Rohit Sharma", "Kumar Sangakkara", "Quinton de Kock", "Virat Kohli"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who was the first player to be timed out in International cricket?",
    options: ["Angelo Mathews", "Shakib Al Hasan", "Steve Smith", "Mushfiqur Rahim"],
    answer: "Angelo Mathews"
  },
  {
    question: "Which cricketer is nicknamed 'The Little Master' (original)?",
    options: ["Sachin Tendulkar", "Sunil Gavaskar", "Hanif Mohammad", "Both Sunil & Hanif"],
    answer: "Both Sunil & Hanif"
  },
  {
    question: "Who won the 2021 T20 World Cup?",
    options: ["Australia", "New Zealand", "India", "Pakistan"],
    answer: "Australia"
  },
  {
    question: "Which player has the most sixes in IPL history?",
    options: ["Rohit Sharma", "Chris Gayle", "AB de Villiers", "MS Dhoni"],
    answer: "Chris Gayle"
  },
  {
    question: "Which team is nicknamed 'The Tigers'?",
    options: ["Bangladesh", "Sri Lanka", "India", "Pakistan"],
    answer: "Bangladesh"
  },
  {
    question: "Who was the first Indian to take a hat-trick in T20Is?",
    options: ["Deepak Chahar", "Yuzvendra Chahal", "Jasprit Bumrah", "Bhuvneshwar Kumar"],
    answer: "Deepak Chahar"
  },
  {
    question: "Which country has won the Champions Trophy twice?",
    options: ["India", "Australia", "Pakistan", "Both India & Australia"],
    answer: "Both India & Australia"
  },
  {
    question: "What is the name of the mascot for the 2023 World Cup?",
    options: ["Blaze and Tonk", "Stumpy", "Googly", "Cricko"],
    answer: "Blaze and Tonk"
  },
  {
    question: "Who is the 'Hitman' of Indian cricket?",
    options: ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Shikhar Dhawan"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who holds the record for fastest ODI fifty (16 balls)?",
    options: ["AB de Villiers", "Sanath Jayasuriya", "Shahid Afridi", "Liam Livingstone"],
    answer: "AB de Villiers"
  },
  {
    question: "Which player has played the most Test matches?",
    options: ["James Anderson", "Sachin Tendulkar", "Steve Waugh", "Ricky Ponting"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who was the first bowler to take a hat-trick in the IPL?",
    options: ["Laxmipathy Balaji", "Amit Mishra", "Yuvraj Singh", "Makhaya Ntini"],
    answer: "Laxmipathy Balaji"
  },
  {
    question: "Which team has the highest run chase in ODI history (438)?",
    options: ["Australia", "South Africa", "England", "India"],
    answer: "South Africa"
  },
  {
    question: "Who is the only player to score 3 double centuries in ODIs?",
    options: ["Chris Gayle", "Rohit Sharma", "Martin Guptill", "Virender Sehwag"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who is the highest run-scorer for South Africa in Tests?",
    options: ["Hashim Amla", "Jacques Kallis", "Graeme Smith", "AB de Villiers"],
    answer: "Jacques Kallis"
  },
  {
    question: "Which country is nicknamed 'The Chevrons'?",
    options: ["Zimbabwe", "Namibia", "Ireland", "Scotland"],
    answer: "Zimbabwe"
  },
  {
    question: "What is a 'Diamond Duck'?",
    options: ["Out on first ball", "Out without facing a ball", "Out on a wide", "Out in a super over"],
    answer: "Out without facing a ball"
  },
  {
    question: "Who is the youngest player to score a century in International cricket?",
    options: ["Sachin Tendulkar", "Shahid Afridi", "Mithali Raj", "Usman Ghani"],
    answer: "Shahid Afridi"
  },
  {
    question: "Which cricketer was nicknamed 'White Lightning'?",
    options: ["Allan Donald", "Brett Lee", "Dale Steyn", "Shaun Pollock"],
    answer: "Allan Donald"
  },
  {
    question: "Who is the first player to reach 100 centuries?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "None"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which stadium has the largest seating capacity in the world?",
    options: ["MCG", "Narendra Modi Stadium", "Eden Gardens", "Optus Stadium"],
    answer: "Narendra Modi Stadium"
  },
  {
    question: "Who was the Player of the Match in the 2011 World Cup Final?",
    options: ["Gautam Gambhir", "MS Dhoni", "Yuvraj Singh", "Sachin Tendulkar"],
    answer: "MS Dhoni"
  },
  {
    question: "How many times has India won the T20 World Cup (until 2026)?",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    question: "Who is known as 'Captain Cool'?",
    options: ["Kane Williamson", "MS Dhoni", "Eoin Morgan", "Graeme Smith"],
    answer: "MS Dhoni"
  },
  {
    question: "Which country hosted the 2022 T20 World Cup?",
    options: ["UAE", "Australia", "India", "England"],
    answer: "Australia"
  },
  {
    question: "Who won the 2023 ODI World Cup?",
    options: ["India", "Australia", "South Africa", "New Zealand"],
    answer: "Australia"
  },
  {
    question: "What is the maximum number of overs a bowler can bowl in T20?",
    options: ["2", "4", "5", "10"],
    answer: "4"
  },
  {
    question: "Who was the first Indian to score a century in T20I?",
    options: ["Suresh Raina", "Virat Kohli", "Rohit Sharma", "KL Rahul"],
    answer: "Suresh Raina"
  },
  {
    question: "Who is the 'Sultan of Multan'?",
    options: ["Wasim Akram", "Virender Sehwag", "Inzamam-ul-Haq", "Shoaib Akhtar"],
    answer: "Virender Sehwag"
  },
  {
    question: "Which team is called 'The Baggy Greens'?",
    options: ["England", "Australia", "South Africa", "Ireland"],
    answer: "Australia"
  },
  {
    question: "Who has the most stumpings in International cricket?",
    options: ["Kumar Sangakkara", "MS Dhoni", "Adam Gilchrist", "Mark Boucher"],
    answer: "MS Dhoni"
  },
  {
    question: "Who is the first batsman to hit 6 sixes in a T20I over?",
    options: ["Yuvraj Singh", "Kieron Pollard", "Dipendra Singh Airee", "Chris Gayle"],
    answer: "Yuvraj Singh"
  },
  {
    question: "What is a 'Googly'?",
    options: ["Off-spinner's leg break", "Leg-spinner's off break", "A fast bouncer", "A slow yorker"],
    answer: "Leg-spinner's off break"
  },
  {
    question: "Which country won the 2017 Champions Trophy?",
    options: ["India", "Pakistan", "England", "Australia"],
    answer: "Pakistan"
  },
  {
    question: "Who was the first Indian woman to score a double century in Tests?",
    options: ["Mithali Raj", "Smriti Mandhana", "Harmanpreet Kaur", "Shafali Verma"],
    answer: "Mithali Raj"
  },
  {
    question: "Which format of cricket uses a pink ball?",
    options: ["ODI", "T20", "Day/Night Test", "T10"],
    answer: "Day/Night Test"
  },
  {
    question: "Who was the first player to reach 400 wickets in ODIs?",
    options: ["Wasim Akram", "Waqar Younis", "Muralitharan", "Chaminda Vaas"],
    answer: "Wasim Akram"
  },
  {
    question: "Who won the 1996 Cricket World Cup?",
    options: ["Australia", "Sri Lanka", "India", "West Indies"],
    answer: "Sri Lanka"
  },
  {
    question: "Which bowler has the most wickets in a single World Cup (27)?",
    options: ["Glenn McGrath", "Mitchell Starc", "Mohammed Shami", "Muralitharan"],
    answer: "Mitchell Starc"
  },
  {
    question: "Who is the highest wicket-taker for Australia in Tests?",
    options: ["Glenn McGrath", "Shane Warne", "Nathan Lyon", "Dennis Lillee"],
    answer: "Shane Warne"
  },
  {
    question: "What is the color of the ball used in ODI cricket?",
    options: ["Red", "White", "Pink", "Yellow"],
    answer: "White"
  },
  {
    question: "Who was the man of the series in the 2011 World Cup?",
    options: ["Sachin Tendulkar", "Yuvraj Singh", "TM Dilshan", "MS Dhoni"],
    answer: "Yuvraj Singh"
  },
  {
    question: "In which city is the M. Chinnaswamy Stadium located?",
    options: ["Chennai", "Bengaluru", "Mumbai", "Hyderabad"],
    answer: "Bengaluru"
  },
  {
    question: "Who is the 'King' of cricket?",
    options: ["Virat Kohli", "Joe Root", "Steve Smith", "Kane Williamson"],
    answer: "Virat Kohli"
  },
  {
    question: "Who scored the first ever century in the IPL?",
    options: ["Virat Kohli", "Brendon McCullum", "Chris Gayle", "Manish Pandey"],
    answer: "Brendon McCullum"
  },
  {
    question: "Which Indian player scored the first IPL century for India?",
    options: ["Manish Pandey", "Suresh Raina", "Sachin Tendulkar", "Rohit Sharma"],
    answer: "Manish Pandey"
  },
  {
    question: "Who is the leading wicket-taker in T20I history?",
    options: ["Rashid Khan", "Tim Southee", "Shakib Al Hasan", "Wanindu Hasaranga"],
    answer: "Tim Southee"
  },
  {
    question: "Which team has won the Asia Cup the most times?",
    options: ["India", "Sri Lanka", "Pakistan", "Bangladesh"],
    answer: "India"
  },
  {
    question: "Who is the fastest to 100 Test wickets?",
    options: ["George Lohmann", "R Ashwin", "Yasir Shah", "Abbas"],
    answer: "George Lohmann"
  },
  {
    question: "Who was the captain of Pakistan in the 1992 World Cup?",
    options: ["Javed Miandad", "Imran Khan", "Wasim Akram", "Waqar Younis"],
    answer: "Imran Khan"
  },
  {
    question: "Who is the only batsman to score two triple centuries for India?",
    options: ["Virender Sehwag", "Karun Nair", "VVS Laxman", "Sachin Tendulkar"],
    answer: "Virender Sehwag"
  },
  {
    question: "Which ground is known as 'The Gabba'?",
    options: ["Sydney", "Adelaide", "Brisbane", "Perth"],
    answer: "Brisbane"
  },
  {
    question: "Which player has hit the most sixes in a single ODI innings (17)?",
    options: ["Chris Gayle", "Eoin Morgan", "Rohit Sharma", "AB de Villiers"],
    answer: "Eoin Morgan"
  },
  {
    question: "What is the nickname of the Afghan national team?",
    options: ["The Tigers", "The Blue Tigers", "The Falcons", "The Warriors"],
    answer: "The Blue Tigers"
  },
  {
    question: "Which country hosted the first ever T20 World Cup?",
    options: ["South Africa", "England", "Australia", "India"],
    answer: "South Africa"
  },
  {
    question: "Who is the first batsman to reach 10,000 runs in T20s?",
    options: ["Chris Gayle", "Virat Kohli", "Kieron Pollard", "Shoaib Malik"],
    answer: "Chris Gayle"
  },
  {
    question: "Who is the fastest bowler to reach 50 wickets in T20Is?",
    options: ["Rashid Khan", "Dhruvkumar Patel", "Ajantha Mendis", "Mark Watt"],
    answer: "Dhruvkumar Patel"
  },
  {
    question: "Which umpire is famous for the 'slow finger of death'?",
    options: ["Billy Bowden", "Steve Bucknor", "Aleem Dar", "Nitin Menon"],
    answer: "Steve Bucknor"
  },
  {
    question: "What is the height of a cricket stump?",
    options: ["24 inches", "28 inches", "30 inches", "32 inches"],
    answer: "28 inches"
  },
  {
    question: "Who is the first Indian to win the ICC Cricketer of the Year?",
    options: ["Sachin Tendulkar", "Rahul Dravid", "MS Dhoni", "Virat Kohli"],
    answer: "Rahul Dravid"
  },
  {
    question: "Who won the 1987 Cricket World Cup?",
    options: ["Australia", "England", "India", "Pakistan"],
    answer: "Australia"
  },
  {
    question: "Who has the most catches in Test history as a fielder?",
    options: ["Rahul Dravid", "Mahela Jayawardene", "Jacques Kallis", "Ricky Ponting"],
    answer: "Rahul Dravid"
  },
  {
    question: "In which year did the Under-19 World Cup start?",
    options: ["1983", "1988", "1992", "1998"],
    answer: "1988"
  },
  {
    question: "Which player has won the most 'Player of the Match' awards in ODIs?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Sanath Jayasuriya", "Ricky Ponting"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who is the first bowler to take 4 wickets in 4 balls in T20Is?",
    options: ["Lasith Malinga", "Rashid Khan", "Curtis Campher", "Jason Holder"],
    answer: "Rashid Khan"
  },
  {
    question: "What is the official name of the 'Ashes' trophy?",
    options: ["The Urn", "The Cup", "The Shield", "The Vase"],
    answer: "The Urn"
  },
  {
    question: "Who was the first batsman to score a double century in Tests for India?",
    options: ["Polly Umrigar", "Sunil Gavaskar", "Dilip Sardesai", "Vinoo Mankad"],
    answer: "Polly Umrigar"
  },
  {
    question: "Which team is called 'The Blues' in Australian domestic cricket?",
    options: ["NSW", "Victoria", "Queensland", "Western Australia"],
    answer: "NSW"
  },
  {
    question: "Which player has scored the most runs in a single IPL match (175*)?",
    options: ["Chris Gayle", "Brendon McCullum", "AB de Villiers", "KL Rahul"],
    answer: "Chris Gayle"
  },
  {
    question: "Who is the fastest to 2000 ODI runs?",
    options: ["Hashim Amla", "Shubman Gill", "Babar Azam", "Kevin Pietersen"],
    answer: "Hashim Amla"
  },
  {
    question: "Who was the captain of the 1975 West Indies team?",
    options: ["Clive Lloyd", "Viv Richards", "Garfield Sobers", "Rohan Kanhai"],
    answer: "Clive Lloyd"
  },
  {
    question: "Which ground hosted the first ever Day/Night Test match?",
    options: ["Adelaide Oval", "WACA", "MCG", "Eden Gardens"],
    answer: "Adelaide Oval"
  },
  {
    question: "Who has the most wickets in World Cup history?",
    options: ["Muralitharan", "Glenn McGrath", "Wasim Akram", "Lasith Malinga"],
    answer: "Glenn McGrath"
  },
  {
    question: "Who is the first Indian to take a hat-trick in the T20 World Cup?",
    options: ["Harbhajan Singh", "Mohammed Shami", "Ravichandran Ashwin", "None"],
    answer: "None"
  },
  {
    question: "Who won the first ever Women's World Cup in 1973?",
    options: ["Australia", "England", "New Zealand", "India"],
    answer: "England"
  },
  {
    question: "Who is the only player to have scored a century in both a 60-over and 50-over World Cup final?",
    options: ["Viv Richards", "Clive Lloyd", "Ricky Ponting", "None"],
    answer: "None"
  },
  {
    question: "Which country is nicknamed 'The Black Caps'?",
    options: ["New Zealand", "England", "South Africa", "West Indies"],
    answer: "New Zealand"
  },
  {
    question: "Who is the highest run-scorer in the history of the T20 World Cup?",
    options: ["Virat Kohli", "Chris Gayle", "Mahela Jayawardene", "Rohit Sharma"],
    answer: "Virat Kohli"
  },
  {
    question: "Who hit 6 sixes in an over in an ODI against USA in 2024?",
    options: ["Kieron Pollard", "Jaskaran Malhotra", "Nicholas Pooran", "None"],
    answer: "None"
  },
  {
    question: "Which player is known as 'Big Show'?",
    options: ["Glenn Maxwell", "David Warner", "Marcus Stoinis", "Chris Lynn"],
    answer: "Glenn Maxwell"
  },
  {
    question: "Who is the youngest captain to win the IPL?",
    options: ["Hardik Pandya", "Shreyas Iyer", "Rohit Sharma", "MS Dhoni"],
    answer: "Rohit Sharma"
  },
  {
    question: "In which country was the 2003 World Cup held?",
    options: ["South Africa", "England", "Australia", "India"],
    answer: "South Africa"
  },
  {
    question: "Who is the first wicket-keeper to score a triple century in Tests?",
    options: ["Adam Gilchrist", "Kumar Sangakkara", "MS Dhoni", "Brendon McCullum"],
    answer: "Kumar Sangakkara"
  },
  {
    question: "Which bowler has taken the most wickets in T20Is for India?",
    options: ["Yuzvendra Chahal", "Bhuvneshwar Kumar", "Jasprit Bumrah", "Arshdeep Singh"],
    answer: "Yuzvendra Chahal"
  },
  {
    question: "Who is the only player to score 4 consecutive centuries in a World Cup?",
    options: ["Sachin Tendulkar", "Kumar Sangakkara", "Rohit Sharma", "Quinton de Kock"],
    answer: "Kumar Sangakkara"
  },
  {
    question: "Which team won the 1999 World Cup?",
    options: ["Pakistan", "Australia", "South Africa", "India"],
    answer: "Australia"
  },
  {
    question: "Who was the first Indian to score a double century in Tests?",
    options: ["Polly Umrigar", "Sunil Gavaskar", "Vinoo Mankad", "Dilip Sardesai"],
    answer: "Polly Umrigar"
  },
  {
    question: "Who has the most ducks in International cricket?",
    options: ["Muralitharan", "Courtney Walsh", "Sanath Jayasuriya", "James Anderson"],
    answer: "Muralitharan"
  },
  {
    question: "Which country has won the T20 World Cup twice as hosts?",
    options: ["India", "West Indies", "None", "England"],
    answer: "None"
  },
  {
    question: "Who was the first player to be given out by a TV umpire?",
    options: ["Sachin Tendulkar", "Brian Lara", "Rahul Dravid", "Sanath Jayasuriya"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which bowler has the most five-wicket hauls in Tests?",
    options: ["Shane Warne", "Muralitharan", "Anil Kumble", "R Ashwin"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who is the fastest to 5000 ODI runs?",
    options: ["Babar Azam", "Hashim Amla", "Virat Kohli", "Viv Richards"],
    answer: "Babar Azam"
  },
  {
    question: "Which city is the Eden Gardens stadium in?",
    options: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "Who is the leading run-scorer in IPL history?",
    options: ["Shikhar Dhawan", "Virat Kohli", "David Warner", "Rohit Sharma"],
    answer: "Virat Kohli"
  },
  {
    question: "Which team won the 2009 T20 World Cup?",
    options: ["India", "Pakistan", "England", "Sri Lanka"],
    answer: "Pakistan"
  },
  {
    question: "Who is the fastest to 100 wickets in ODIs?",
    options: ["Rashid Khan", "Sandeep Lamichhane", "Mitchell Starc", "Shaheen Afridi"],
    answer: "Sandeep Lamichhane"
  },
  {
    question: "Who was the first Indian to score a century in ODI?",
    options: ["Sunil Gavaskar", "Kapil Dev", "Amarnath", "Sachin Tendulkar"],
    answer: "Kapil Dev"
  },
  {
    question: "Which player is called 'The Finisher'?",
    options: ["MS Dhoni", "AB de Villiers", "Michael Bevan", "All of these"],
    answer: "All of these"
  },
  {
    question: "Who won the 2012 T20 World Cup?",
    options: ["West Indies", "Sri Lanka", "India", "Australia"],
    answer: "West Indies"
  },
  {
    question: "Which bowler is known as the 'Burewala Express'?",
    options: ["Waqar Younis", "Wasim Akram", "Shoaib Akhtar", "Imran Khan"],
    answer: "Waqar Younis"
  },
  {
    question: "Who hit 6 sixes in an over in a domestic match first?",
    options: ["Gary Sobers", "Ravi Shastri", "Herschelle Gibbs", "Yuvraj Singh"],
    answer: "Gary Sobers"
  },
  {
    question: "Who is the 'Boom Boom' of cricket?",
    options: ["Shahid Afridi", "Jasprit Bumrah", "Jos Buttler", "Andre Russell"],
    answer: "Shahid Afridi"
  },
  {
    question: "Which year did England win the World Cup for the first time?",
    options: ["2011", "2015", "2019", "2023"],
    answer: "2019"
  },
  {
    question: "Who is the highest run-scorer for England in Tests?",
    options: ["Alastair Cook", "Joe Root", "Kevin Pietersen", "Graham Gooch"],
    answer: "Alastair Cook"
  },
  {
    question: "Which IPL team has the slogan 'Play Bold'?",
    options: ["CSK", "RCB", "MI", "KKR"],
    answer: "RCB"
  },
  {
    question: "Who is the current head coach of the Indian Men's Team?",
    options: ["Rahul Dravid", "Gautam Gambhir", "VVS Laxman", "Ravi Shastri"],
    answer: "Gautam Gambhir"
  },
  {
    question: "Who was the first player to hit a century in T20I as captain?",
    options: ["Chris Gayle", "Tilakaratne Dilshan", "Suresh Raina", "Faf du Plessis"],
    answer: "Suresh Raina"
  },
  {
    question: "Who is the 'Chinaman' bowler from India?",
    options: ["Kuldeep Yadav", "Yuzvendra Chahal", "R Ashwin", "Axar Patel"],
    answer: "Kuldeep Yadav"
  },
  {
    question: "Which team won the 2014 T20 World Cup?",
    options: ["India", "Sri Lanka", "Pakistan", "West Indies"],
    answer: "Sri Lanka"
  },
  {
    question: "Who won the ICC Under-19 World Cup 2024?",
    options: ["India", "Australia", "Pakistan", "England"],
    answer: "Australia"
  },
  {
    question: "What is the maximum number of fielders allowed outside the circle in the first 10 overs of an ODI?",
    options: ["2", "3", "4", "5"],
    answer: "2"
  },
  {
    question: "Who is the fastest to 700 Test wickets?",
    options: ["Shane Warne", "Muralitharan", "James Anderson", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who won the 2024 Asia Cup?",
    options: ["India", "Pakistan", "Sri Lanka", "Bangladesh"],
    answer: "India"
  },
  {
    question: "Who was the first Indian to take a hat-trick in the IPL?",
    options: ["Laxmipathy Balaji", "Amit Mishra", "Yuvraj Singh", "Rohit Sharma"],
    answer: "Laxmipathy Balaji"
  },
  {
    question: "Who scored the first double century in T20 cricket?",
    options: ["Chris Gayle", "Subhashis Das", "None", "Rahatullah"],
    answer: "None"
  },
  {
    question: "Which team is called 'The Proteas'?",
    options: ["South Africa", "Zimbabwe", "Namibia", "Netherlands"],
    answer: "South Africa"
  },
  {
    question: "Who hit the winning runs for India in the 2011 World Cup Final?",
    options: ["MS Dhoni", "Yuvraj Singh", "Gautam Gambhir", "Virat Kohli"],
    answer: "MS Dhoni"
  },
  {
    question: "Who was the first captain to win 100 IPL matches?",
    options: ["MS Dhoni", "Rohit Sharma", "Gautam Gambhir", "Virat Kohli"],
    answer: "MS Dhoni"
  },
  {
    question: "Which cricketer is nicknamed 'Punter'?",
    options: ["Ricky Ponting", "Steve Smith", "Shane Warne", "Adam Gilchrist"],
    answer: "Ricky Ponting"
  },
  {
    question: "Which bowler is known as 'The Steyn Gun'?",
    options: ["Dale Steyn", "Morne Morkel", "Kagiso Rabada", "Anrich Nortje"],
    answer: "Dale Steyn"
  },
  {
    question: "Which country has won the T20 World Cup the most times (until 2026)?",
    options: ["West Indies", "England", "India", "All of these"],
    answer: "India"
  },
  {
    question: "Which ground is the 'Bullring' of cricket?",
    options: ["Wanderers", "MCG", "Lords", "Eden Gardens"],
    answer: "Wanderers"
  },
  {
    question: "Who was the first batsman to score a triple century in Tests for Australia?",
    options: ["Don Bradman", "Matthew Hayden", "Mark Taylor", "Bob Cowper"],
    answer: "Bob Cowper"
  },
  {
    question: "Which player has the most centuries in ODI World Cups?",
    options: ["Sachin Tendulkar", "Rohit Sharma", "Virat Kohli", "Ricky Ponting"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who is the 'Master Blaster'?",
    options: ["Sachin Tendulkar", "Viv Richards", "Both", "Sanath Jayasuriya"],
    answer: "Both"
  },
  {
    question: "Which team won the 2010 T20 World Cup?",
    options: ["England", "Australia", "West Indies", "India"],
    answer: "England"
  },
  {
    question: "Who was the first player to be knighted for services to cricket?",
    options: ["Sir Don Bradman", "Sir Jack Hobbs", "Sir Francis Drake", "Sir Richard Hadlee"],
    answer: "Sir Don Bradman"
  },
  {
    question: "Who has the most wickets in IPL history?",
    options: ["Yuzvendra Chahal", "Dwayne Bravo", "Piyush Chawla", "Amit Mishra"],
    answer: "Yuzvendra Chahal"
  },
  {
    question: "Which team is nicknamed 'The Kiwis'?",
    options: ["New Zealand", "South Africa", "England", "West Indies"],
    answer: "New Zealand"
  },
  {
    question: "Who was the first bowler to take 400 wickets in Tests?",
    options: ["Richard Hadlee", "Kapil Dev", "Courtney Walsh", "Muralitharan"],
    answer: "Richard Hadlee"
  },
  {
    question: "Who is the fastest to 25,000 international runs?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Kumar Sangakkara"],
    answer: "Virat Kohli"
  },
  {
    question: "Which team won the 2016 T20 World Cup?",
    options: ["India", "England", "West Indies", "Australia"],
    answer: "West Indies"
  },
  {
    question: "Who hit 4 sixes in the last over of 2016 T20 WC Final?",
    options: ["Carlos Brathwaite", "Chris Gayle", "Marlon Samuels", "Andre Russell"],
    answer: "Carlos Brathwaite"
  },
  {
    question: "Who was the bowler hit for 4 sixes in 2016 T20 WC Final?",
    options: ["Ben Stokes", "Chris Jordan", "David Willey", "Liam Plunkett"],
    answer: "Ben Stokes"
  },
  {
    question: "Which team won the 1979 World Cup?",
    options: ["West Indies", "England", "Australia", "India"],
    answer: "West Indies"
  },
  {
    question: "Who is the highest run-scorer in Women's T20Is?",
    options: ["Suzie Bates", "Meg Lanning", "Mithali Raj", "Harmanpreet Kaur"],
    answer: "Suzie Bates"
  },
  {
    question: "Which year did India win its first Champions Trophy (shared)?",
    options: ["2000", "2002", "2013", "2017"],
    answer: "2002"
  },
  {
    question: "Who was the first Indian to score a century in Tests?",
    options: ["Lala Amarnath", "CK Nayudu", "Vijay Hazare", "Pankaj Roy"],
    answer: "Lala Amarnath"
  },
  {
    question: "Who is the current head of the BCCI?",
    options: ["Roger Binny", "Jay Shah", "Sourav Ganguly", "Anurag Thakur"],
    answer: "Roger Binny"
  },
  {
    question: "Which country is nicknamed 'The Windies'?",
    options: ["West Indies", "Zimbabwe", "Netherlands", "Ireland"],
    answer: "West Indies"
  },
  {
    question: "What is the diameter of a cricket ball?",
    options: ["2.8 inches", "3.2 inches", "2.1 inches", "None"],
    answer: "None"
  },
  {
    question: "Who was the first player to hit 50 sixes in a single IPL season?",
    options: ["Chris Gayle", "Andre Russell", "Jos Buttler", "Abhishek Sharma"],
    answer: "Chris Gayle"
  },
  {
    question: "Which team won the 2004 Champions Trophy?",
    options: ["West Indies", "England", "Australia", "India"],
    answer: "West Indies"
  },
  {
    question: "Who is the fastest to 50 Test centuries?",
    options: ["Don Bradman", "Sachin Tendulkar", "None", "Ricky Ponting"],
    answer: "None"
  },
  {
    question: "Who won the 2022 Asia Cup?",
    options: ["Sri Lanka", "Pakistan", "India", "Afghanistan"],
    answer: "Sri Lanka"
  },
  {
    question: "Who is the first cricketer to play 200 Test matches?",
    options: ["Sachin Tendulkar", "James Anderson", "Ricky Ponting", "Steve Waugh"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country hosted the 1996 World Cup?",
    options: ["India, Pakistan & Sri Lanka", "India & Pakistan", "England", "Australia"],
    answer: "India, Pakistan & Sri Lanka"
  },
  {
    question: "Who is the youngest player to score a Test century?",
    options: ["Mohammad Ashraful", "Sachin Tendulkar", "Mushtaq Mohammad", "Hamilton Masakadza"],
    answer: "Mohammad Ashraful"
  },
  {
    question: "Which player has the most runs in a single Test innings (400*)?",
    options: ["Brian Lara", "Matthew Hayden", "Mahela Jayawardene", "Don Bradman"],
    answer: "Brian Lara"
  },
  {
    question: "Who is the 'Turbanator'?",
    options: ["Harbhajan Singh", "Monty Panesar", "Navjot Sidhu", "Bishan Singh Bedi"],
    answer: "Harbhajan Singh"
  },
  {
    question: "Who is the first bowler to take 500 ODI wickets?",
    options: ["Wasim Akram", "Muralitharan", "Waqar Younis", "Glenn McGrath"],
    answer: "Wasim Akram"
  },
  {
    question: "Which year did Pakistan win the T20 World Cup?",
    options: ["2007", "2009", "2010", "2012"],
    answer: "2009"
  },
  {
    question: "Who is the current captain of the South African Test team?",
    options: ["Temba Bavuma", "Aiden Markram", "Dean Elgar", "Tony de Zorzi"],
    answer: "Temba Bavuma"
  },
  {
    question: "Who was the first Indian to take 10 wickets in a Test innings?",
    options: ["Anil Kumble", "Harbhajan Singh", "Kapil Dev", "R Ashwin"],
    answer: "Anil Kumble"
  },
  {
    question: "Which team won the 2006 Champions Trophy?",
    options: ["Australia", "West Indies", "South Africa", "India"],
    answer: "Australia"
  },
  {
    question: "Who is the highest run-scorer in the history of the Asia Cup (ODI)?",
    options: ["Sanath Jayasuriya", "Kumar Sangakkara", "Sachin Tendulkar", "Rohit Sharma"],
    answer: "Sanath Jayasuriya"
  },
  {
    question: "Who is the fastest to 400 Test wickets?",
    options: ["Muralitharan", "R Ashwin", "Richard Hadlee", "Dale Steyn"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Which team is called 'The Green Shirts'?",
    options: ["Pakistan", "South Africa", "Ireland", "Bangladesh"],
    answer: "Pakistan"
  },
  {
    question: "Who was the player of the tournament in the 2023 ODI World Cup?",
    options: ["Virat Kohli", "Mohammed Shami", "Travis Head", "Glenn Maxwell"],
    answer: "Virat Kohli"
  },
  {
    question: "Who won the 1983 World Cup Final at Lords?",
    options: ["India", "West Indies", "England", "Australia"],
    answer: "India"
  },
  {
    question: "Who is the leading wicket-taker in World Test Championship history?",
    options: ["Nathan Lyon", "Pat Cummins", "R Ashwin", "Stuart Broad"],
    answer: "Nathan Lyon"
  },
  {
    question: "Who is the 'Prince of Trinidad'?",
    options: ["Brian Lara", "Chris Gayle", "Viv Richards", "Kieron Pollard"],
    answer: "Brian Lara"
  },
  {
    question: "Which country has played the most World Cup finals?",
    options: ["Australia", "India", "England", "West Indies"],
    answer: "Australia"
  },
  {
    question: "Who is the current captain of Australia?",
    options: ["Pat Cummins", "Steve Smith", "Mitchell Marsh", "David Warner"],
    answer: "Pat Cummins"
  },
  {
    question: "Who is the first Indian to score a century in all three formats?",
    options: ["Suresh Raina", "Rohit Sharma", "Virat Kohli", "KL Rahul"],
    answer: "Suresh Raina"
  },
  {
    question: "Who was the man of the match in the 2024 T20 World Cup Final?",
    options: ["Virat Kohli", "Hardik Pandya", "Jasprit Bumrah", "Arshdeep Singh"],
    answer: "Virat Kohli"
  },
  {
    question: "Who won the 2002 ICC Champions Trophy?",
    options: ["India & Sri Lanka", "Australia", "West Indies", "South Africa"],
    answer: "India & Sri Lanka"
  },
  {
    question: "Who is the fastest to 300 Test wickets?",
    options: ["R Ashwin", "Muralitharan", "Dennis Lillee", "Shane Warne"],
    answer: "R Ashwin"
  },
  {
    question: "Which team won the first ever Under-19 World Cup?",
    options: ["Australia", "India", "Pakistan", "England"],
    answer: "Australia"
  },
  {
    question: "Who was the first player to hit 200 sixes in ODIs?",
    options: ["Shahid Afridi", "Sanath Jayasuriya", "Chris Gayle", "Rohit Sharma"],
    answer: "Shahid Afridi"
  },
  {
    question: "Who was the captain of the 1996 Sri Lankan winning team?",
    options: ["Arjuna Ranatunga", "Aravinda de Silva", "Sanath Jayasuriya", "Mahela Jayawardene"],
    answer: "Arjuna Ranatunga"
  },
  {
    question: "Who is the first batsman to score a double century in a World Cup?",
    options: ["Chris Gayle", "Martin Guptill", "Glenn Maxwell", "None"],
    answer: "Chris Gayle"
  },
  {
    question: "Who is the highest wicket-taker in the Champions Trophy?",
    options: ["Kyle Mills", "Lasith Malinga", "Brett Lee", "Glenn McGrath"],
    answer: "Kyle Mills"
  },
  {
    question: "Who hit 6 sixes in an over in a T20I in 2024?",
    options: ["Dipendra Singh Airee", "Nicholas Pooran", "Marcus Stoinis", "None"],
    answer: "Dipendra Singh Airee"
  },
  {
    question: "Which ground is the 'Wankhede' located in?",
    options: ["Kolkata", "Mumbai", "Chennai", "Delhi"],
    answer: "Mumbai"
  },
  {
    question: "Who won the 2024 IPL final?",
    options: ["KKR", "SRH", "RR", "RCB"],
    answer: "KKR"
  },
  {
    question: "Who was the player of the tournament in 2026 T20 WC?",
    options: ["Jasprit Bumrah", "Hardik Pandya", "Rachin Ravindra", "Suryakumar Yadav"],
    answer: "Hardik Pandya"
  }
];

export default questions;