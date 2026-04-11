const questions = [
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Sachin Tendulkar", "Ricky Ponting", "Brian Lara", "Don Bradman"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ever Cricket World Cup in 1975?",
    options: ["Australia", "West Indies", "England", "India"],
    answer: "West Indies"
  },
  {
    question: "What is the maximum number of overs a bowler can bowl in an ODI?",
    options: ["8", "12", "10", "15"],
    answer: "10"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket history?",
    options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who was the captain of India during the 1983 World Cup win?",
    options: ["Sunil Gavaskar", "Kapil Dev", "Ravi Shastri", "Dilip Vengsarkar"],
    answer: "Kapil Dev"
  },
  {
    question: "Which stadium is known as the 'Home of Cricket'?",
    options: ["Eden Gardens", "Melbourne Cricket Ground", "Lords", "The Oval"],
    answer: "Lords"
  },
  {
    question: "Who hit six sixes in an over during the 2007 T20 World Cup?",
    options: ["Chris Gayle", "Yuvraj Singh", "Herschelle Gibbs", "Kieron Pollard"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Which player has the highest individual score in Test cricket (400*)?",
    options: ["Matthew Hayden", "Brian Lara", "Virender Sehwag", "Chris Gayle"],
    answer: "Brian Lara"
  },
  {
    question: "What is the nickname of the Australian national cricket team?",
    options: ["The Proteas", "The Kiwis", "The Baggy Greens", "The Lions"],
    answer: "The Baggy Greens"
  },
  {
    question: "Who won the first ever IPL season in 2008?",
    options: ["CSK", "Rajasthan Royals", "Deccan Chargers", "Mumbai Indians"],
    answer: "Rajasthan Royals"
  },
  {
    question: "What does 'LBW' stand for?",
    options: ["Leg Before Wicket", "Long Ball Wide", "Low Ball Weight", "Leg Beyond Wicket"],
    answer: "Leg Before Wicket"
  },
  {
    question: "Which cricketer is nicknamed 'Mr. 360'?",
    options: ["Glenn Maxwell", "AB de Villiers", "Jos Buttler", "Suryakumar Yadav"],
    answer: "AB de Villiers"
  },
  {
    question: "How many balls are there in a standard 'over'?",
    options: ["4", "8", "6", "5"],
    answer: "6"
  },
  {
    question: "Which city is the Narendra Modi Stadium located in?",
    options: ["Mumbai", "Ahmedabad", "Delhi", "Kolkata"],
    answer: "Ahmedabad"
  },
  {
    question: "Who was the first batsman to score a double century in ODIs?",
    options: ["Rohit Sharma", "Sachin Tendulkar", "Chris Gayle", "Virender Sehwag"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "The 'Ashes' is a Test series played between which two nations?",
    options: ["India & Pakistan", "Australia & England", "South Africa & Australia", "England & West Indies"],
    answer: "Australia & England"
  },
  {
    question: "Which umpire is famous for his 'Bent Finger' signal?",
    options: ["Steve Bucknor", "Billy Bowden", "Simon Taufel", "Dickie Bird"],
    answer: "Billy Bowden"
  },
  {
    question: "Who is the fastest bowler to ever be recorded in cricket history?",
    options: ["Brett Lee", "Shoaib Akhtar", "Shaun Tait", "Mitchell Johnson"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Which ground is the largest cricket stadium in the world?",
    options: ["MCG", "Narendra Modi Stadium", "Optus Stadium", "Perth Stadium"],
    answer: "Narendra Modi Stadium"
  },
  {
    question: "Who has scored the most runs in a single IPL season?",
    options: ["David Warner", "Virat Kohli", "Jos Buttler", "Shubman Gill"],
    answer: "Virat Kohli"
  },
  {
    question: "Which country is known as the 'Proteas'?",
    options: ["New Zealand", "South Africa", "Sri Lanka", "Zimbabwe"],
    answer: "South Africa"
  },
  {
    question: "Who was the first player to be given out by a Third Umpire?",
    options: ["Sachin Tendulkar", "Jack Hobbs", "Viv Richards", "Rahul Dravid"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which team is nicknamed the 'Black Caps'?",
    options: ["England", "New Zealand", "West Indies", "South Africa"],
    answer: "New Zealand"
  },
  {
    question: "What is the distance between the two sets of wickets?",
    options: ["20 yards", "24 yards", "22 yards", "25 yards"],
    answer: "22 yards"
  },
  {
    question: "Who is known as the 'Rawalpindi Express'?",
    options: ["Waqar Younis", "Shoaib Akhtar", "Wasim Akram", "Imran Khan"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Which player has the most centuries in International cricket?",
    options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Kumar Sangakkara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "How many players are on the field for the fielding side?",
    options: ["10", "12", "11", "9"],
    answer: "11"
  },
  {
    question: "Who is the only captain to win all three ICC trophies (T20, ODI, CT)?",
    options: ["Ricky Ponting", "MS Dhoni", "Graeme Smith", "Kane Williamson"],
    answer: "MS Dhoni"
  },
  {
    question: "What is the color of the ball used in Day/Night Test matches?",
    options: ["Red", "White", "Pink", "Orange"],
    answer: "Pink"
  },
  {
    question: "Which bowler has the best bowling figures in an ODI (8/19)?",
    options: ["Chaminda Vaas", "Rashid Khan", "Glenn McGrath", "Shahid Afridi"],
    answer: "Chaminda Vaas"
  },
  {
    question: "Who won the 2019 ICC Cricket World Cup?",
    options: ["New Zealand", "India", "England", "Australia"],
    answer: "England"
  },
  {
    question: "Which Indian player is known as 'The Wall'?",
    options: ["VVS Laxman", "Rahul Dravid", "Cheteshwar Pujara", "Ajinkya Rahane"],
    answer: "Rahul Dravid"
  },
  {
    question: "Who is the leading run-scorer in T20 International history?",
    options: ["Rohit Sharma", "Virat Kohli", "Babar Azam", "Martin Guptill"],
    answer: "Virat Kohli"
  },
  {
    question: "Which country hosted the first ever T20 World Cup in 2007?",
    options: ["England", "Australia", "South Africa", "India"],
    answer: "South Africa"
  },
  {
    question: "Who has hit the most sixes in International cricket?",
    options: ["Chris Gayle", "Rohit Sharma", "Shahid Afridi", "Brendon McCullum"],
    answer: "Rohit Sharma"
  },
  {
    question: "What is a score of zero runs called in cricket?",
    options: ["Empty", "Duck", "Nil", "Blank"],
    answer: "Duck"
  },
  {
    question: "Which IPL team has the 'Whistle Podu' anthem?",
    options: ["RCB", "CSK", "MI", "SRH"],
    answer: "CSK"
  },
  {
    question: "Who is the highest wicket-taker in IPL history?",
    options: ["Lasith Malinga", "Yuzvendra Chahal", "Dwayne Bravo", "Amit Mishra"],
    answer: "Yuzvendra Chahal"
  },
  {
    question: "Which player has the most double centuries in Test cricket?",
    options: ["Don Bradman", "Kumar Sangakkara", "Brian Lara", "Virat Kohli"],
    answer: "Don Bradman"
  },
  {
    question: "Which country did cricket originate in?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "England"
  },
  {
    question: "Who was the first Indian to take a hat-trick in Test cricket?",
    options: ["Harbhajan Singh", "Irfan Pathan", "Jasprit Bumrah", "Kapil Dev"],
    answer: "Harbhajan Singh"
  },
  {
    question: "Which bat manufacturer is famously associated with Sachin Tendulkar?",
    options: ["Kookaburra", "SS", "MRF", "Spartan"],
    answer: "MRF"
  },
  {
    question: "In which year did India win their second ODI World Cup?",
    options: ["2007", "2011", "2015", "1983"],
    answer: "2011"
  },
  {
    question: "Who is the only player to score two triple centuries in Tests for India?",
    options: ["Sachin Tendulkar", "Virender Sehwag", "Virat Kohli", "Sunil Gavaskar"],
    answer: "Virender Sehwag"
  },
  {
    question: "Which team is called the 'Men in Blue'?",
    options: ["Sri Lanka", "England", "India", "Afghanistan"],
    answer: "India"
  },
  {
    question: "Who is the youngest player to debut in International cricket?",
    options: ["Sachin Tendulkar", "Hasan Raza", "Rashid Khan", "Mushtaq Mohammad"],
    answer: "Hasan Raza"
  },
  {
    question: "What is the term for 3 wickets taken on 3 consecutive balls?",
    options: ["Triple", "Hat-trick", "Trifecta", "Clean Sweep"],
    answer: "Hat-trick"
  },
  {
    question: "Which cricketer has the highest batting average in Test history (99.94)?",
    options: ["Steve Smith", "Don Bradman", "Kane Williamson", "Herbert Sutcliffe"],
    answer: "Don Bradman"
  },
  {
    question: "Who is the current captain of the Indian Test team?",
    options: ["Virat Kohli", "Rohit Sharma", "Hardik Pandya", "KL Rahul"],
    answer: "Rohit Sharma"
  },
  {
    question: "How many minutes of 'Tea' break are usually in a Test match?",
    options: ["15", "30", "20", "40"],
    answer: "20"
  }
];

export default questions;