EXAM({
r1:[
{t:'<b>CITY TOURIST OFFICE</b><br>Free maps and information. Open daily 9–5.',o:['You can get a map without paying.','Maps cost money.','The office is closed at weekends.']},
{t:'Hi Ana, I\'m in the city centre. Let\'s meet at the big clock in the main square at 2. Mia',q:'Mia is telling Ana',o:['where and when to meet.','to buy a clock.','she can\'t come.']},
{t:'<b>UNDERGROUND</b><br>Stand on the right. Walk on the left.',o:['There are different sides for standing and walking.','You can\'t walk here.','You must walk quickly.']},
{t:'<b>SHOPPING STREET</b><br>No cars between 10 a.m. and 6 p.m.',o:['Cars can\'t drive here during the day.','You can\'t walk here.','Cars can park here all day.']},
{t:'Kim – I\'m running late. The traffic is terrible. Order your food and I\'ll be there in 20 minutes. Tara',q:'Tara wants Kim to',o:['start eating without her.','wait for her outside.','go home.']},
{t:'<b>CITY BIKES</b><br>First 30 minutes free with a city card.',o:['City card holders can ride for a short time without paying.','Bikes are always free.','You can\'t use a bike without a card.']}],
r2:{title:'City or countryside?',intro:'Three people talk about where they live.',sections:[
{h:'Tom',t:'I live in the centre of London. There\'s always something to do – theatres, concerts, restaurants. I don\'t need a car because the public transport is excellent. The only problems are the noise and the high prices. My flat is tiny, but I love living here.'},
{h:'Alice',t:'I moved from the city to a small village two years ago. I wanted a quieter life for my children. Now we have a big garden and the children can play outside safely. I miss the shops and the cinema, but I don\'t miss the traffic at all.'},
{h:'Pedro',t:'I live in a small town by the sea. It\'s not a big city, but it\'s not the countryside either. In summer, it\'s full of tourists, and in winter it\'s very quiet. I work in a hotel, so summer is my busiest time. I go surfing every morning before work.'}],
q:['Who moved to a quieter place?','Whose town changes with the seasons?','Who doesn\'t need a car?','Who complains about the cost of living?','Who misses some city entertainment?','Who does a sport before work?','Who made a change for their children?'],
ans:[1,2,0,0,1,2,1]},
r3:{title:'The car-free city',text:`In the centre of the Spanish city of Pontevedra, there are almost no cars. Twenty-five years ago, the city decided to close the centre to traffic. Today, it is one of the most pleasant places to live in Europe.

"Before, the streets were full of cars and pollution," says the mayor. "Children couldn't play outside, and old people were afraid to cross the road. We wanted to give the city back to the people."

Now, people walk or cycle everywhere. Cars can only enter the centre to deliver things or to take people to their homes, and they can't go faster than thirty kilometres an hour.

At first, many shop owners were worried. "We thought we would lose customers," says Rosa, who has a clothes shop. "But now more people walk past my shop than before, and business is better."

The air is cleaner, the streets are quieter, and there have been no deaths from traffic accidents for many years. The number of people living in the centre has grown by twelve thousand. "Other cities come here to learn from us," the mayor says proudly.`,
q:[{q:'Why did the city close the centre to cars?',o:['to make life better for people','to save money','to attract tourists']},
{q:'When can cars enter the centre?',o:['to deliver things','at night','at weekends']},
{q:'How did shop owners feel at first?',o:['worried','happy','angry']},
{q:'What happened to Rosa\'s shop?',o:['It does more business now.','It closed.','It moved.']},
{q:'What has happened to the number of people living in the centre?',o:['It has increased.','It has decreased.','It is the same.']}]},
r4:{title:'London',text:`London is the capital of the United Kingdom and one of the biggest cities in Europe. About nine million people [19] there. It was started by the Romans almost two thousand years ago.

London is famous for its old buildings, [20] the Tower of London, which is nearly a thousand years old, and Buckingham Palace, where the King lives. The city is also famous for its red buses and black taxis.

The River Thames goes through the [21] of the city. There are more than thirty bridges across it. The most famous is Tower Bridge, which opens to let big ships [22] through.

London has the oldest underground train system in the world. It opened in 1863. Today, about five million journeys are [23] on it every day. Many museums in London are free, so it is a great city to [24] even if you don't have much money.`,
opts:[['live','stay at','house'],['like','as','such'],['middle','half','inside'],['go','come out','arrive'],['made','done','had'],['visit','travel','go to']]},
r5:{title:'City break',text:`Hi Sophie,

I'm in Paris with my parents! We arrived [25] Thursday and we're staying until Monday.

Yesterday we went up the Eiffel Tower. It was very windy at the top, but the view was amazing. You can see [26] whole city! Then we had lunch in a little café. I ate a croissant [27] big as my hand.

Today we visited the Louvre Museum and saw the Mona Lisa. It's much smaller [28] I expected! There were so many people that I could hardly see it.

Tomorrow we're going on a boat trip on the river. I'm really looking forward [29] it.

I've bought you a small present. I'll give it to you [30] I see you next week.

Love,
Emma`,
ans:[['on'],['the'],['as'],['than'],['to'],['when']]},
w6:{ctx:'You are visiting a big city. Write a postcard to your English friend, Leo. In your postcard:',notes:['say which city you are in','say what you have seen','say what you will do tomorrow']},
w7:['A tourist is looking at a map in a big city. He looks confused.','A girl stops and shows him the way.','The tourist is at the museum. He is waving to the girl.'],
l1:[
{q:'How will they travel around the city?',o:['by underground','by bus','by taxi'],script:[['W','Shall we take a taxi?'],['M','Too expensive. The buses are slow because of the traffic. Let\'s use the underground.']]},
{q:'Where is the museum?',o:['next to the park','opposite the station','behind the church'],script:[['M','Excuse me, is the museum opposite the station?'],['W','No, that\'s the library. The museum is next to the park.']]},
{q:'What will they visit first?',o:['the castle','the market','the cathedral'],script:[['M','Shall we go to the market first?'],['W','It doesn\'t open until eleven. And the cathedral\'s closed this morning. Let\'s start with the castle.']]},
{q:'How much is the bus tour?',o:['£18','£8','£80'],script:[['W','How much is the bus tour?'],['M','Eighteen pounds for adults. Children are eight.']]},
{q:'Where are they staying?',o:['in a flat','in a hotel','with friends'],script:[['M','Are you staying in a hotel?'],['W','No, and not with friends. We rented a flat in the city centre.']]}],
l2:{intro:'You will hear a woman giving information on a city bus tour.',g:'W',head:'City Bus Tour',script:`Good morning, everyone, and welcome to our city bus tour. The tour lasts two hours and stops at twelve famous places. You can get off at any stop and get on the next bus – they come every fifteen minutes. Your ticket is valid for twenty-four hours. Headphones are under your seat, and you can listen to information in eight languages. Our first stop is the cathedral. Please don't stand up while the bus is moving. Enjoy the tour!`,
sents:['Tour length: ___ hours','Number of stops: ___','Buses come every ___ minutes','Headphones are under your ___','First stop: the ___'],
ans:[['2','two'],['12','twelve'],['15','fifteen'],['seat'],['cathedral']]},
l3:{intro:'You will hear Dan talking to his friend Lucy about moving to the city.',names:{M:'Dan',W:'Lucy'},script:[
['W','Dan, how do you like living in the city?'],['M','I love it! There\'s so much to do.'],
['W','What do you like best?'],['M','The music. There are concerts every night. Last week I saw three bands!'],
['W','Is there anything you don\'t like?'],['M','It\'s very expensive. My rent is twice what I paid before.'],
['W','Do you have a car?'],['M','No, I sold it. I cycle everywhere now.'],
['W','Do you miss the village?'],['M','Sometimes. I miss the quiet. But I visit my parents every month.']],
q:[{q:'How does Dan feel about the city?',o:['He loves it.','He hates it.','He is bored.']},
{q:'What does Dan like most?',o:['the concerts','the restaurants','the parks']},
{q:'What is the problem with the city?',o:['It costs a lot.','It\'s dangerous.','It\'s dirty.']},
{q:'How does Dan travel?',o:['by bike','by car','by bus']},
{q:'What does Dan miss about the village?',o:['the silence','his friends','his car']}]},
l4:[
{ctx:'You hear a woman talking about a city.',q:'What did she like most?',o:['the food','the buildings','the people'],script:[['W','The buildings were beautiful and the people were friendly. But the food! I\'ve never eaten so well in my life.']]},
{ctx:'You hear a man asking for directions.',q:'Where does he want to go?',o:['the train station','the bus station','the airport'],script:[['M','Excuse me, how do I get to the train station? I have a train in twenty minutes.']]},
{ctx:'You hear two friends talking.',q:'What do they decide to do?',o:['go on a boat trip','go shopping','visit a museum'],script:[['W','We\'ve seen the museums. Shall we go shopping?'],['M','I\'m tired of shops. Let\'s take a boat on the river.'],['W','OK!']]},
{ctx:'You hear a boy talking about his town.',q:'What does he want?',o:['a cinema','a swimming pool','a park'],script:[['M','We have a pool and a big park. But there\'s no cinema. We have to go to the next town to see a film.']]},
{ctx:'You hear a woman on the radio.',q:'What is she talking about?',o:['traffic problems','the weather','a new shop'],script:[['W','There\'s heavy traffic in the city centre this morning because of an accident on Bridge Street. Use the underground if you can.']]}],
l5:{intro:'You will hear Kate talking to her friend about which cities her family members have visited. Which city did each person visit?',names:{W:'Kate',M:'Friend'},script:[
['M','Which cities has your family visited, Kate?'],
['W','Well, my mum went to New York last year.'],
['M','And your dad?'],['W','Dad went to Tokyo for work.'],
['M','What about your sister?'],['W','She wanted to go to Paris, but she went to Barcelona.'],
['M','And your grandparents?'],['W','They went to Venice.'],
['M','And you?'],['W','I went to Amsterdam with my school.']],
items:['Mum','Dad','Sister','Grandparents','Kate'],opts:['New York','Tokyo','Barcelona','Venice','Amsterdam','Paris','Berlin','Sydney']},
s:{p1:['Do you live in a city or a village?','What do you like about your town?','Which cities have you visited?','What did you do in town last weekend?','Please tell me something about a city you would like to visit.'],
p2:{topic:'places to live',ideas:['a big city','a small village','a town by the sea','a farm','a mountain village'],q:['Do you think big cities are exciting?','Which of these places would you like to live in?','What are the problems of living in a city?','Where would you like to live in the future?']}}
});
