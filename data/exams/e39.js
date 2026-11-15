EXAM({
r1:[
{t:'<b>AIRPORT</b><br>Check-in closes 45 minutes before your flight.',o:['You must arrive in time to check in.','Flights leave every 45 minutes.','Check-in opens 45 minutes before the flight.']},
{t:'Hi Grandma, our plane is two hours late. We\'ll arrive at 9, not 7. Don\'t wait at the airport – we\'ll get a taxi. Love, Amy',q:'What does Amy tell her grandmother?',o:['not to come and meet them','to wait for two hours','to book a taxi']},
{t:'<b>HOTEL</b><br>Breakfast served 7–10 a.m. in the garden restaurant.',o:['You can have breakfast outside in the morning.','Breakfast is served in your room.','The restaurant opens at 10 a.m.']},
{t:'<b>PASSPORT CONTROL</b><br>Please have your passport ready.',o:['Take your passport out before you get here.','You can buy a passport here.','You don\'t need a passport.']},
{t:'Room 12 – your taxi to the station will be here at 8.15. Reception',q:'Reception is telling the guest',o:['when the taxi will arrive.','to call a taxi.','the station is closed.']},
{t:'<b>HOTEL POOL</b><br>For hotel guests only. Towels at reception.',o:['Only people staying here can swim.','Anyone can use the pool.','There are no towels.']}],
r2:{title:'Unusual hotels',intro:'Three people describe an unusual hotel they stayed in.',sections:[
{h:'Erik',t:'I stayed in an ice hotel in Sweden. Everything was made of ice – the walls, the beds, even the glasses! It was minus five degrees inside. We slept in special warm sleeping bags. It was an amazing experience, but one night was enough!'},
{h:'Paula',t:'I stayed in a tree house hotel in Costa Rica. My room was fifteen metres above the ground, in the middle of the rainforest. In the morning, monkeys came to my window. The only problem was that the toilet was at the bottom of the tree!'},
{h:'Sam',t:'I stayed in an underwater hotel in the Maldives. The bedroom was under the sea, and through the glass walls I could see fish and even a shark. It was very expensive – it was a present from my parents for my wedding.'}],
q:['Who only stayed one night?','Who saw animals from their room?','Who didn\'t pay for their stay?','Who had to go outside to use the bathroom?','Who stayed somewhere very cold?','Who stayed somewhere high up?','Who stayed in a hotel for a special occasion?'],
ans:[0,1,2,1,0,1,2]},
r3:{title:'Around the world by bike',text:`In 2022, Jenny Clark left her job in an office in London and started cycling around the world. Three years later, she has cycled forty thousand kilometres through thirty-five countries.

"I was bored with my life," Jenny explains. "Every day was the same. I wanted an adventure."

Jenny carries everything she needs on her bike: a tent, a small cooker, clothes and a laptop. "I usually camp," she says, "but sometimes local people invite me to stay in their homes. That's the best part of the journey – people are so kind."

There have been difficult moments. In Mongolia, Jenny got very ill and had to stay in hospital for a week. In Australia, it was so hot that she could only cycle early in the morning.

Jenny writes a blog about her journey, and it has over a hundred thousand readers. Some companies pay her to write about their products, which helps her pay for the trip.

Jenny will finish her journey in London next spring. "I'm excited to see my family," she says. "But I'm not sure I can go back to an office!"`,
q:[{q:'Why did Jenny start her journey?',o:['She wanted something exciting.','She lost her job.','She wanted to write a book.']},
{q:'What does Jenny enjoy most?',o:['the kindness of people','camping','cycling fast']},
{q:'What happened in Mongolia?',o:['She was ill.','She lost her bike.','It was too hot.']},
{q:'How does Jenny get money?',o:['by writing about products','from her family','by working in hotels']},
{q:'How does Jenny feel about the future?',o:['She doesn\'t want to work in an office again.','She wants to start another trip.','She wants to go back to her old job.']}]},
r4:{title:'Flying',text:`Every day, more than a hundred thousand planes [19] off from airports around the world. But flying is quite new. The first plane flight was in 1903 in the USA. Two brothers, Orville and Wilbur Wright, [20] a plane that flew for just twelve seconds.

In the following years, planes got much bigger and faster. In the 1950s, it became possible for ordinary people to [21] to other countries by plane.

Today, the biggest passenger planes can carry more than eight hundred people. The longest flight in the world, from Singapore to New York, [22] about nineteen hours!

Flying is very safe – much safer than travelling by car. But planes produce a lot of pollution. Some people now [23] to travel by train when they can. Scientists are also [24] on electric planes for the future.`,
opts:[['take','go','get'],['built','did','created up'],['travel','go on','visit'],['lasts','spends','passes'],['choose','decide on','pick up'],['working','doing','making']]},
r5:{title:'Hotel booking',text:`Dear Sir or Madam,

I would like to book a room at your hotel [25] three nights, from 14th to 17th July. There will be two adults and one child, [26] is eight years old.

Do you have a family room with a view of the sea? We would also like breakfast. Could you tell me how [27] this will cost?

We are arriving [28] car. Is there a car park at the hotel? Also, is the hotel near the beach? My son loves swimming, [29] we want to go to the beach every day.

I look forward to hearing from you.

Yours faithfully,
Karen Bell

P.S. Is it possible to arrive early? Our ferry arrives [30] 9 a.m.`,
ans:[['for'],['who'],['much'],['by'],['so'],['at']]},
w6:{ctx:'You are on holiday in a hotel. Write an email to your English friend, Billie. In your email:',notes:['say where the hotel is','describe your room','say what you do every day']},
w7:['A family arrives at a hotel with lots of bags.','The receptionist says there is no room for them.','The family is sleeping in a tent in the hotel garden. They are laughing.'],
l1:[
{q:'Which gate does the woman need?',o:['Gate 18','Gate 8','Gate 80'],script:[['M','Your flight leaves from gate eight.'],['W','Gate eight?'],['M','Sorry, eighteen. One-eight.']]},
{q:'What did the man forget to pack?',o:['his toothbrush','his passport','his phone charger'],script:[['W','Have you got your passport?'],['M','Yes, and my charger. Oh no! I forgot my toothbrush.']]},
{q:'Which room is the girl in?',o:['305','503','350'],script:[['M','What\'s your room number? Five oh three?'],['W','No, three oh five. On the third floor.']]},
{q:'How will they get to the hotel?',o:['by bus','by taxi','by train'],script:[['M','Shall we get a taxi to the hotel?'],['W','It\'s too expensive. There\'s no train, but the bus stops right outside.']]},
{q:'What is the weather like at their holiday place?',o:['warm and cloudy','hot and sunny','cold and rainy'],script:[['W','Is it hot and sunny there?'],['M','It\'s warm, but there\'s no sun today. Lots of clouds. At least it isn\'t raining.']]}],
l2:{intro:'You will hear a woman giving information at a hotel.',g:'W',head:'Seaview Hotel',script:`Welcome to the Seaview Hotel. Your room is on the fourth floor, and the lift is on your left. Breakfast is served from seven thirty until ten in the main restaurant. The swimming pool is open until nine in the evening. If you want to use the gym, you'll need to show your room key. Wi-Fi is free – the password is SUNSHINE. Checkout time is eleven o'clock on the day you leave. If you need anything, just call reception by pressing zero.`,
sents:['Room on the ___ floor','Breakfast until: ___ a.m.','Pool closes at: ___ p.m.','Wi-Fi password: ___','Checkout time: ___ o\'clock'],
ans:[['fourth','4th','4'],['10','ten'],['9','nine'],['sunshine'],['11','eleven']]},
l3:{intro:'You will hear Kevin talking to his friend Megan about a holiday in New York.',names:{M:'Kevin',W:'Megan'},script:[
['W','Kevin, how was New York?'],['M','Amazing! We were there for a week.'],
['W','Where did you stay?'],['M','In a hotel near Central Park. Our room was on the thirtieth floor!'],
['W','What did you see?'],['M','Everything! The Statue of Liberty, Times Square… But my favourite was the view from the Empire State Building.'],
['W','What was the food like?'],['M','Great, but very expensive. We ate a lot of pizza!'],
['W','Would you go back?'],['M','Definitely. Next time I want to see a basketball game.']],
q:[{q:'How long was Kevin in New York?',o:['one week','two weeks','five days']},
{q:'Where was the hotel?',o:['near a park','near the airport','in Times Square']},
{q:'What did Kevin like most?',o:['a view from a building','the Statue of Liberty','Times Square']},
{q:'What does Kevin say about the food?',o:['It cost a lot.','It wasn\'t good.','It was cheap.']},
{q:'What does Kevin want to do next time?',o:['watch a basketball game','visit a museum','go shopping']}]},
l4:[
{ctx:'You hear a man at an airport.',q:'Why is he worried?',o:['His bag is missing.','His flight is delayed.','He lost his ticket.'],script:[['M','Everyone else has got their bags, but mine hasn\'t come. All my clothes are in it!']]},
{ctx:'You hear a woman talking about a holiday.',q:'What didn\'t she like?',o:['the hotel','the beach','the food'],script:[['W','The beach was beautiful and the food was delicious. But our room was dirty and very noisy.']]},
{ctx:'You hear two friends planning a trip.',q:'How will they travel?',o:['by train','by plane','by car'],script:[['M','Shall we fly to Paris?'],['W','The train is better for the environment, and it goes to the centre.'],['M','OK, the train then.']]},
{ctx:'You hear a boy talking about his holiday.',q:'Where did he stay?',o:['with his aunt','in a hotel','in a tent'],script:[['M','We didn\'t stay in a hotel this year. My aunt lives near the beach, so we stayed with her.']]},
{ctx:'You hear a woman calling a hotel.',q:'What does she want to change?',o:['the date of her stay','the type of room','the number of people'],script:[['W','Hi, I\'ve booked a double room for the fifth of June. Could I change it to the twelfth?']]}],
l5:{intro:'You will hear Laura talking to her friend about where her family members went on holiday last year. Where did each person go?',names:{W:'Laura',M:'Friend'},script:[
['M','Where did your family go on holiday last year, Laura?'],
['W','Well, my parents went to Portugal.'],
['M','And your brother?'],['W','Jack went to Thailand with his friends.'],
['M','What about your sister?'],['W','Kate wanted to go to Paris, but she went to Rome.'],
['M','And your grandparents?'],['W','They went on a boat trip in Norway.'],
['M','And you?'],['W','I went to a summer camp in Scotland.']],
items:['Parents','Jack','Kate','Grandparents','Laura'],opts:['Portugal','Thailand','Rome','Norway','Scotland','Paris','Spain','Greece']},
s:{p1:['Do you like travelling?','Have you ever been on a plane?','Where did you go on your last holiday?','Do you prefer hotels or camping?','Please tell me something about a place you would like to visit.'],
p2:{topic:'places to stay on holiday',ideas:['a hotel','a tent','a friend\'s house','a boat','a tree house'],q:['Do you think camping is fun?','Which of these places would you like to stay in?','What is important in a hotel?','Do you like staying with family on holiday?']}}
});
