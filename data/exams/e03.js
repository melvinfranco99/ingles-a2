EXAM({
r1:[
{t:'<b>SUPERMARKET</b><br>Bags are not free. Please bring your own or buy one at the till.',o:['You will have to pay if you need a bag.','The supermarket does not sell bags.','You can only use the shop\'s bags.']},
{t:'Hi Tom, I can\'t come to the gym tonight – I\'ve hurt my foot. Can we go next week instead? Ali',q:'What is Ali doing?',o:['changing a plan','inviting Tom to the gym','asking Tom for help with his foot']},
{t:'<b>HOTEL GUESTS</b><br>Breakfast is served in the garden when the weather is good.',o:['You may be able to eat outside in the morning.','Breakfast is only for guests in the garden rooms.','There is no breakfast when it rains.']},
{t:'<b>Lost:</b> small black cat with white feet. Answers to the name "Socks". Please call 07700 900123.',o:['Someone is looking for their pet.','Someone has found a cat.','Someone wants to sell some socks.']},
{t:'<b>BUS 24</b><br>This bus will not stop at the hospital until the end of June.',o:['For a short time, the bus won\'t go to the hospital.','The bus to the hospital is changing its number.','The bus will only go to the hospital in June.']},
{t:'Grandma – thanks for the birthday money! I\'m going to put it towards a new guitar. See you on Sunday. Love, Ben',q:'Ben is writing to',o:['thank his grandmother for a present.','ask his grandmother for money.','tell his grandmother he bought a guitar.']}],
r2:{title:'Unusual collections',intro:'Three people talk about the things they collect.',sections:[
{h:'Lucas',t:'I collect old cameras. I bought my first one at a market when I was twelve, and now I\'ve got over sixty. Some of them still work, so I take photos with them. My favourite is a camera from 1950 that my grandfather gave me. My cameras take up a whole room in my house!'},
{h:'Nina',t:'I collect postcards from all over the world. I don\'t buy them – people send them to me. I joined a website where you send a card to a stranger and somebody else sends one back. I\'ve got cards from eighty countries. I love reading what people write about their lives.'},
{h:'Omar',t:'I collect football shirts. It\'s an expensive hobby, so I only buy one or two a year. I keep them in boxes so they stay clean. My best one was worn by a famous player, and it\'s worth a lot of money now. I\'d never sell it, though.'}],
q:['Who got their first item from a family member?','Who doesn\'t pay for the things they collect?','Who says their hobby costs a lot?','Who uses the things they collect?','Who has an item that has become valuable?','Who enjoys learning about other people?','Who needs a lot of space for their collection?'],
ans:[0,1,2,0,2,1,0]},
r3:{title:'The teenage baker',text:`When Lily Evans was fifteen, she started baking cakes in her parents' kitchen. Now, at nineteen, she has her own small bakery in the centre of York.

"I always loved cooking," Lily says. "But I wasn't very good at school. My teachers said I was lazy. I wasn't lazy – I just wasn't interested in the subjects."

Lily started by making birthday cakes for friends and neighbours. Soon, people she didn't know were asking for cakes too. "My mum got tired of the mess in the kitchen," she laughs. "She told me I needed a proper place to work."

With help from her parents and money she had saved, Lily opened her bakery last year. It wasn't easy. "In the first month I worked fourteen hours a day, and I made lots of mistakes. Once I forgot to put sugar in a wedding cake!"

Now the bakery is doing well, and Lily has two people working for her. She still gets up at five every morning to bake. "I'm always tired," she says, "but I love what I do. My advice is: if you have a dream, don't wait. Start now."`,
q:[{q:'What does Lily say about school?',o:['She didn\'t enjoy what she studied.','Her teachers were very helpful.','She worked very hard there.']},
{q:'Who were Lily\'s first customers?',o:['people she knew','her teachers','shops in York']},
{q:'Why did Lily\'s mum want her to find a new place to bake?',o:['Lily made the kitchen untidy.','The kitchen was too small.','Lily was baking too late at night.']},
{q:'What happened in the bakery\'s first month?',o:['Lily worked very long days.','Lily employed two people.','Lily won a prize for a wedding cake.']},
{q:'What advice does Lily give?',o:['Begin doing what you want immediately.','Save money before you start.','Ask your family for help.']}]},
r4:{title:'The bicycle',text:`The first bicycles appeared in Germany about two hundred years ago. They had no pedals, so people had to push them along with their feet. They were also very heavy and [19] to ride.

Later, bicycles with pedals were [20]. One popular type had a very big front wheel and a tiny back wheel. It was fast, but riders often [21] off and hurt themselves.

Around 1885, the "safety bicycle" appeared. It had two wheels of the same [22], like modern bikes. Soon, millions of people were cycling to work and [23] their free time on bikes.

Today, cycling is more popular than ever. It is cheap, healthy and good for the environment, and many cities have special lanes [24] cyclists.`,
opts:[['difficult','hard-working','heavy'],['invented','discovered','found'],['fell','dropped','went'],['size','height','number'],['spending','passing','using'],['for','to','by']]},
r5:{title:'New house',text:`Hi Max,

Guess what? We moved house last weekend! The new house is much bigger [25] our old flat. I've got my own bedroom now, so I don't have to share [26] my little brother any more.

There's a big garden too, and my dad wants to grow vegetables. The only problem is that it's far from my school. I have to get up [27] six o'clock to catch the bus!

[28] you like to come and stay one weekend? My mum says it's fine. We could play football in the garden and go to the cinema in town. There's a great one near [29] station.

Write back soon and tell me [30] you can come.

Ryan`,
ans:[['than'],['with'],['at'],['would'],['the'],['if','when','whether']]},
w6:{ctx:'Your English friend, Robin, wants to start a new hobby. Write an email to Robin. In your email:',notes:['suggest a hobby for Robin','say why it is a good hobby','tell Robin what he needs to buy']},
w7:['A boy is reading a map in a forest. He looks lost.','It is getting dark. The boy sees a light in a small house.','A woman opens the door and gives the boy a hot drink. He is happy.'],
l1:[
{q:'How will the woman get to work today?',o:['by bike','by bus','by car'],script:[['M','Are you taking the car today?'],['W','No, my husband needs it. And the buses are on strike, so I\'ll have to cycle. At least it isn\'t raining!']]},
{q:'What did the boy forget to bring?',o:['his towel','his swimming shorts','his goggles'],script:[['W','Have you got everything for swimming? Shorts? Goggles?'],['M','Yes, both in my bag. Oh no – I left my towel on the bed!']]},
{q:'Which day is the party?',o:['Friday','Thursday','Saturday'],script:[['M','Is Kate\'s party on Saturday?'],['W','It was going to be, but her parents are away that weekend. So she\'s having it on Friday instead – the day after tomorrow.'],['M','Oh, so not Thursday then. OK.']]},
{q:'What does the man want to buy?',o:['a lamp','a chair','a mirror'],script:[['W','Can I help you?'],['M','Yes, I\'m looking for something for my desk. The light in my room is terrible, so I can\'t read at night.'],['W','Our lamps are over here.']]},
{q:'How much will the girl pay?',o:['£15','£30','£20'],script:[['W','How much is this skirt?'],['M','It was thirty pounds, but everything is half price today.'],['W','Great!']]}],
l2:{intro:'You will hear a man talking about a summer sports camp.',g:'M',head:'Summer Sports Camp',script:`Hi, I'm Steve, and I'm the manager of Greenfield Summer Sports Camp. The camp is for children from eight to fourteen. This year it starts on the third of August, and it lasts for five days. Every day starts at nine o'clock and finishes at four. Children can try lots of sports, but this year the new sport is climbing – we've built a great climbing wall. Children should bring a bottle of water and a sun hat. The price is eighty pounds for the week. To book a place, visit our website, which is greenfieldcamp dot com – that's G-R-E-E-N-F-I-E-L-D camp dot com.`,
sents:['Starts on: ___ August','Finishes each day at: ___ o\'clock','New sport this year: ___','Bring: water and a sun ___','Website: www.___camp.com'],
ans:[['3rd','3','third'],['4','four'],['climbing'],['hat'],['greenfield']]},
l3:{intro:'You will hear Paula talking to her friend Mark about losing her phone.',names:{W:'Paula',M:'Mark'},script:[
['M','Hi Paula. I sent you a message yesterday, but you didn\'t answer.'],['W','Sorry, Mark. I lost my phone on Saturday.'],
['M','Oh no! Where?'],['W','I thought I left it at the cinema, so I went back and asked, but it wasn\'t there. Then a man called my home number. He found it on the bus!'],
['M','That\'s lucky. Did you get it back?'],['W','Yes, I met him at the bus station on Sunday morning. He was really nice.'],
['M','Did you give him anything?'],['W','I wanted to give him some money, but he said no. So I bought him a coffee.'],
['M','Is the phone OK?'],['W','The screen has a small crack, but it works fine. I\'m going to buy a new case for it today so it doesn\'t happen again.']],
q:[{q:'Where did Paula lose her phone?',o:['on a bus','at the cinema','at the bus station']},
{q:'How did Paula find out where her phone was?',o:['A man called her.','She went back to the cinema.','Mark told her.']},
{q:'When did Paula get her phone back?',o:['on Sunday','on Saturday','yesterday evening']},
{q:'What did Paula give the man?',o:['a drink','some money','a present']},
{q:'What is Paula going to buy?',o:['something to protect her phone','a new phone','a new screen']}]},
l4:[
{ctx:'You hear a girl talking to her friend.',q:'What does she want her friend to do?',o:['lend her a book','help her with homework','go to the library with her'],script:[['W','I have to read "The Secret Garden" for school, but the library hasn\'t got it. You\'ve got a copy, haven\'t you? Could I borrow it for a week?']]},
{ctx:'You hear a man talking about a holiday.',q:'What was the problem?',o:['the weather','the hotel','the flight'],script:[['M','The hotel was lovely and the flight was on time. But it rained every single day, so we couldn\'t go to the beach once.']]},
{ctx:'You hear a woman talking about her new neighbours.',q:'What does she say about them?',o:['They are helpful.','They are noisy.','They are unfriendly.'],script:[['W','They\'ve only been here a week, but they\'ve already helped me carry my shopping and they fixed my garden gate. I\'m really lucky.']]},
{ctx:'You hear a boy talking about a concert.',q:'How did he feel?',o:['disappointed','excited','frightened'],script:[['M','I was so looking forward to it, but the band only played for forty minutes and the sound was terrible. What a waste of money.']]},
{ctx:'You hear two friends talking.',q:'What are they going to do this evening?',o:['watch a film at home','go to a restaurant','go to a football match'],script:[['M','Shall we go out for dinner tonight?'],['W','I\'m too tired. Why don\'t we stay in and watch a film?'],['M','OK, and we can order a pizza.']]}],
l5:{intro:'You will hear Laura talking to her friend about her week. What is Laura doing on each day?',names:{W:'Laura',M:'Friend'},script:[
['M','Are you free this week, Laura? Let\'s meet.'],
['W','I\'m really busy! On Monday I\'ve got a dentist appointment after school.'],
['M','And Tuesday?'],['W','On Tuesday I usually have guitar lessons, but my teacher is ill, so I\'m going to the library to study instead.'],
['M','What about Wednesday?'],['W','Wednesday I\'m helping my mum clean the house. We\'re having visitors at the weekend.'],
['M','Thursday?'],['W','I\'m playing tennis with my cousin.'],
['M','And Friday?'],['W','Friday\'s my best friend\'s birthday, so we\'re going to the cinema.'],['M','So no free days for me then!']],
items:['Monday','Tuesday','Wednesday','Thursday','Friday'],opts:['go to the dentist','study at the library','clean the house','play tennis','go to the cinema','have a guitar lesson','visit a cousin','go swimming']},
s:{p1:['Where are you from?','Who do you live with?','What sports do you like?','What time do you usually get up?','Please tell me something about your bedroom.'],
p2:{topic:'hobbies',ideas:['painting','playing the guitar','collecting things','gardening','taking photos'],q:['Do you think gardening is boring?','Which of these hobbies do you like best?','What hobbies do your friends have?','Do you have more free time at the weekend or during the week?']}}
});
