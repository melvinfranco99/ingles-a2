EXAM({
r1:[
{t:'<b>PHARMACY</b><br>Open 24 hours. Ring the bell after 10 p.m.',o:['You can get medicine at night.','The pharmacy closes at 10 p.m.','You must ring the bell before you come in.']},
{t:'Fran – we\'re out of coffee. Could you get some on your way home? I\'ll pay you back. Jo',q:'What does Jo want?',o:['for Fran to buy something','to borrow some money','to make Fran a coffee']},
{t:'<b>NO PARKING</b><br>Emergency vehicles only.',o:['Only ambulances and fire engines can stop here.','You can park here in an emergency.','This car park is for staff only.']},
{t:'<b>ENGLISH CLASS</b><br>Next week\'s test has moved from Monday to Wednesday.',o:['Students have two more days to study.','There will be two tests next week.','The class will be on Wednesday instead of Monday.']},
{t:'Hi Pat, I\'m at the station but there\'s no taxi. Can you come and get me? I\'ve got two heavy suitcases. Lou',q:'Lou is asking Pat to',o:['collect her.','call a taxi.','carry her suitcases.']},
{t:'<b>RESTAURANT</b><br>Children\'s menu available until 7 p.m.',o:['There are special meals for children early in the evening.','Children cannot eat here after 7 p.m.','The restaurant closes at 7 p.m.']}],
r2:{title:'Unusual houses',intro:'Three people talk about where they live.',sections:[
{h:'Megan',t:'I live on a boat on the river in London. It\'s small, so I can\'t have many things, but I love waking up to the sound of water. In winter it can be very cold, and I have to get water from a tap on the river bank. My friends think it\'s very romantic!'},
{h:'Josh',t:'My family lives in an old lighthouse by the sea. My parents bought it ten years ago and changed it into a home. There are ninety-two steps to the top, where my bedroom is! The views are incredible, but carrying the shopping up is very tiring.'},
{h:'Leila',t:'I live in a house made almost completely of glass in the middle of a forest. My husband is an architect and he designed it. In summer it gets very hot, so we have to keep the curtains closed. But at night we can lie in bed and look at the stars.'}],
q:['Who lives in a home that a family member designed?','Who has to climb a lot of stairs?','Who doesn\'t have a lot of space?','Who has problems in hot weather?','Who has to go outside to get water?','Whose family made an old building into a home?','Who can see the night sky from bed?'],
ans:[2,1,0,2,0,1,2]},
r3:{title:'My year in Japan',text:`When Daniel Moore finished school at eighteen, he didn't go straight to university. Instead, he spent a year teaching English in a small town in Japan.

"I didn't speak any Japanese when I arrived," he says. "I couldn't read the signs at the station or order food in restaurants. The first few weeks were really difficult. I felt very lonely."

Things changed when Daniel joined a local football team. "The other players didn't speak much English, but football is the same everywhere! They invited me to their homes and helped me learn Japanese. After three months I could have simple conversations."

Teaching was also a challenge. "My students were only six or seven years old. They had so much energy! I had to make my lessons fun with games and songs, or they stopped listening."

Daniel is now studying Japanese at university in London. "That year changed my life," he says. "I learnt to be patient and to try new things. I'm going back to Japan next summer to visit my football friends."`,
q:[{q:'What did Daniel do after school?',o:['He worked abroad.','He went to university.','He played football professionally.']},
{q:'How did Daniel feel at first in Japan?',o:['lonely','excited','angry']},
{q:'How did the football team help Daniel?',o:['They helped him with the language.','They taught him to play football.','They found him a job.']},
{q:'What does Daniel say about his students?',o:['They were very lively.','They spoke good English.','They didn\'t like games.']},
{q:'What is Daniel going to do next summer?',o:['visit people in Japan','teach English again','finish university']}]},
r4:{title:'Elephants',text:`Elephants are the largest land animals in the world. An adult African elephant can [19] up to six thousand kilograms.

Elephants live in family groups. The leader of the group is usually the oldest female, and she [20] the others where to find food and water. Elephants have very good memories. They can [21] places they visited many years before.

An elephant's trunk is very useful. Elephants use it to pick things up, to drink and even to say hello [22] other elephants.

Sadly, elephants are in danger. People kill them for their tusks, and they are [23] their homes as cities and farms grow. Many organisations are working to [24] elephants for the future.`,
opts:[['weigh','measure','grow'],['shows','says','points'],['remember','remind','know'],['to','at','for'],['losing','missing','dropping'],['save','rescue from','keep up']]},
r5:{title:'A new friend',text:`Hi Lisa,

How are you? I'm writing to tell you about my new friend, Maria. She's from Brazil and she joined our class two weeks [25]. She doesn't speak much English yet, so I'm helping her.

Maria is really funny. She's teaching me some Portuguese words, and I'm teaching her English ones. Yesterday we went to the park [26] school and played tennis. She's much better [27] tennis than me!

Next Saturday, Maria's family is having a barbecue and they've invited me. [28] you like to come too? Maria says it's fine. I think you'll like her. [29] mum makes amazing food, apparently.

Let me know soon. The barbecue starts at one o'clock and finishes [30] about six.

Ella`,
ans:[['ago'],['after'],['at'],['would'],['her'],['at']]},
w6:{ctx:'You have just started a new English course. Write an email to your English friend, Jamie. In your email:',notes:['say when your classes are','describe your teacher','say what you like about the course']},
w7:['A boy is fishing by a river. He looks bored.','Suddenly, something very big pulls his fishing line.','The boy is holding an old boot. He is laughing.'],
l1:[
{q:'What will the girl wear to the party?',o:['a dress','jeans','a skirt'],script:[['W2','Are you wearing jeans to the party?'],['W','No, it\'s quite formal. I\'m going to wear my blue dress. My skirt is too short.']]},
{q:'Where is the man going to wait?',o:['in the café','at the bus stop','in the car'],script:[['W','I\'ll be ten minutes. Will you wait in the car?'],['M','It\'s too hot in the car. And the bus stop has no seats. I\'ll wait in the café.']]},
{q:'How does the woman go to work?',o:['by train','by car','by bike'],script:[['M','Do you still cycle to work?'],['W','Not since I moved house. It\'s too far now. I don\'t drive, so I take the train.']]},
{q:'What is the boy\'s favourite subject?',o:['science','history','art'],script:[['W','Do you still love history?'],['M','It\'s OK. And I like art. But science is the best. We do experiments every week.']]},
{q:'What time will they meet?',o:['7.00','6.30','7.30'],script:[['M','Shall we meet at half past six?'],['W','I finish work at half past six. Let\'s say seven.'],['M','OK. Not half past seven? The film starts at eight.'],['W','No, seven is fine.']]}],
l2:{intro:'You will hear a man giving information about a walking tour of a city.',g:'M',head:'Old Town Walking Tour',script:`Good morning! Welcome to the Old Town Walking Tour. My name is Henry, and I'll be your guide today. The tour takes about ninety minutes. First, we'll visit the cathedral, which is over eight hundred years old. After that, we'll walk along Queen Street – that's where the oldest shops are. We'll finish at the castle at about twelve o'clock. Please stay together, because the streets are very busy. If you get lost, my phone number is on your ticket. Oh, and the tour costs eleven pounds for adults and six for children.`,
sents:['Length of tour: ___ minutes','First place to visit: the ___','Street with old shops: ___ Street','Tour ends at: the ___','Price for children: £___'],
ans:[['90','ninety'],['cathedral'],['queen'],['castle'],['6','six']]},
l3:{intro:'You will hear Holly talking to her friend Sam about learning to cook.',names:{W:'Holly',M:'Sam'},script:[
['M','Holly, I hear you\'re doing a cooking course.'],['W','Yes, I started last month. I couldn\'t cook anything before, not even an egg!'],
['M','Why did you start?'],['W','I\'m going to university in September, and I\'ll have to cook for myself. My mum said I\'d live on pizza!'],
['M','Where is the course?'],['W','At the college near the station. It\'s every Tuesday evening.'],
['M','What have you learnt to make?'],['W','Soups, pasta, some fish dishes. Last week we made bread, which was difficult.'],
['M','What\'s your favourite?'],['W','I love making curry. I made one for my family on Sunday and everyone loved it.'],
['M','Will you cook for me sometime?'],['W','Of course!']],
q:[{q:'What could Holly cook before the course?',o:['nothing','eggs','pizza']},
{q:'Why did Holly start the course?',o:['She is going to live away from home.','Her mother wanted her to.','She wants to be a chef.']},
{q:'When is the course?',o:['on Tuesday evenings','on Sunday mornings','every day in September']},
{q:'What did Holly find difficult to make?',o:['bread','soup','fish']},
{q:'What did Holly cook for her family?',o:['a curry','a pasta dish','a fish dish']}]},
l4:[
{ctx:'You hear a man talking about his weekend.',q:'Why didn\'t he go to the beach?',o:['He was ill.','The weather was bad.','His car broke down.'],script:[['M','The weather was perfect on Saturday and the car was fine. But I woke up with a terrible cold and stayed in bed all day.']]},
{ctx:'You hear a woman talking to a friend.',q:'What is she doing?',o:['giving advice','making a complaint','asking for directions'],script:[['W','If you want to sleep better, don\'t drink coffee after lunch, and turn your phone off an hour before bed. It really helps.']]},
{ctx:'You hear a girl talking about a film.',q:'How did the film make her feel?',o:['sad','frightened','excited'],script:[['W','I cried at the end when the dog died. My friends laughed at me, but it was so sad.']]},
{ctx:'You hear a boy talking about his summer job.',q:'What does he do?',o:['He works in a shop.','He works in a hotel.','He works on a farm.'],script:[['M','I help customers find things, put things on the shelves and sometimes work at the till. It\'s a big clothes store in the centre.']]},
{ctx:'You hear two friends talking about a new café.',q:'What does the man like about it?',o:['the cakes','the coffee','the music'],script:[['W','The coffee there is terrible.'],['M','I know, and the music is too loud. But the cakes are delicious. That\'s why I go.']]}],
l5:{intro:'You will hear Paul talking to his mum about his friends\' new pets. Which pet has each person got?',names:{M:'Paul',W:'Mum'},script:[
['W','Paul, you said lots of your friends have new pets.'],
['M','Yes! Alice has got a little black kitten. She calls it Shadow.'],
['W','Sweet. And Ryan?'],['M','Ryan wanted a dog, but his flat is too small. So he got a fish. A big orange one.'],
['W','What about Mia?'],['M','Mia has got a rabbit. It lives in her garden.'],
['W','And Ben?'],['M','Ben\'s got a snake! His mum hates it.'],
['W','And George?'],['M','George has got a parrot. It talks all the time!'],['W','No new pets for us, Paul.']],
items:['Alice','Ryan','Mia','Ben','George'],opts:['kitten','fish','rabbit','snake','parrot','dog','horse','mouse']},
s:{p1:['What\'s your favourite subject?','Who is your favourite teacher?','What do you do after school or work?','What did you do on your last birthday?','Please tell me something about a friend.'],
p2:{topic:'places to live',ideas:['a big house','a small flat','a house in the countryside','a flat in the city centre','a boat'],q:['Do you think living on a boat is fun?','Which of these places would you like to live in?','Do you prefer the city or the countryside?','What is your home like?']}}
});
