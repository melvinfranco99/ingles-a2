EXAM({
r1:[
{t:'<b>SWIMMING POOL</b><br>Pool closed for cleaning 12.00–13.00 every day.',o:['You can\'t swim at lunchtime.','The pool is only open for one hour.','You must clean up after you swim.']},
{t:'Hi Rob – I found your wallet in my car. I\'ll bring it to work tomorrow. Jenny',q:'Jenny is telling Rob',o:['when she will return something.','where he can buy a new wallet.','that she lost her wallet.']},
{t:'<b>MOUNTAIN PATH</b><br>Dangerous in bad weather. Do not use after heavy rain.',o:['The path is not safe when it has been raining a lot.','The path is closed all winter.','You should only walk here in the rain.']},
{t:'<b>CLOTHES SHOP</b><br>You may return items within 28 days. Please keep your receipt.',o:['You need a receipt if you want to bring something back.','You can only buy 28 items.','Receipts are not given in this shop.']},
{t:'Mum – Kevin invited me to stay at his house tonight. Is that OK? I\'ll be back before lunch tomorrow. Luke',q:'Luke is',o:['asking for permission.','inviting Kevin to stay.','saying he will be late for lunch.']},
{t:'<b>CONCERT</b><br>Doors open 7 p.m. Band on stage 8 p.m. No entry after 9 p.m.',o:['You can\'t go in if you arrive very late.','The concert finishes at 9 p.m.','The band arrives at 7 p.m.']}],
r2:{title:'Weekend markets',intro:'Read about three markets in the same town.',sections:[
{h:'The Farmers\' Market',t:'Every Saturday morning, local farmers sell fresh fruit, vegetables, meat and cheese in the town square. Everything is grown or made within fifty kilometres of the town. Prices are a little higher than in supermarkets, but the quality is excellent. Arrive early – the best things sell quickly!'},
{h:'The Antique Market',t:'On the first Sunday of every month, the old train station is full of furniture, jewellery and other old things. Some items are very expensive, but you can also find cheap books and records. Don\'t be afraid to ask for a lower price – sellers expect it!'},
{h:'The Night Market',t:'In summer, the river path is full of food stalls every Friday evening from six until midnight. You can try food from all over the world, from Thai noodles to Mexican tacos. There is live music, and it\'s a great place to meet friends. It gets very busy after nine.'}],
q:['Which market only happens once a month?','Which market is open late?','Where can you buy food from nearby?','Where should you try to pay less than the price?','Which market is not open all year?','Where can you listen to music?','Which market is in the morning?'],
ans:[1,2,0,1,2,2,0]},
r3:{title:'Living without a phone',text:`Last year, sixteen-year-old Ruby Shaw decided to live without her smartphone for a whole month. It was part of a school project, but it changed her life.

"At first it was awful," she says. "I kept putting my hand in my pocket to check messages that weren't there. I felt like I was missing everything my friends were doing."

The biggest problem was organising things. "Without a phone, I had to call my friends from the house phone, which felt really strange. And I couldn't use maps, so I got lost twice!"

But after a week, things started to get better. Ruby started reading again – she finished six books that month. She also slept better. "I used to look at my phone in bed until really late. Without it, I went to sleep much earlier and I wasn't tired at school."

When the month finished, Ruby got her phone back, but she uses it very differently now. "I turn it off at nine every evening, and I never take it to the dinner table. My parents are very happy about that!"`,
q:[{q:'Why did Ruby stop using her phone?',o:['for a school project','because it broke','because her parents told her to']},
{q:'How did Ruby feel at the beginning?',o:['worried she wasn\'t part of things','happy and relaxed','bored at home']},
{q:'What problem did Ruby have?',o:['She couldn\'t find her way.','She couldn\'t do her homework.','She lost her friends.']},
{q:'What was better without the phone?',o:['her sleep','her marks','her music']},
{q:'How does Ruby use her phone now?',o:['She uses it less.','She uses it in the same way as before.','She doesn\'t use it at all.']}]},
r4:{title:'The Olympic Games',text:`The first Olympic Games [19] place in Greece almost three thousand years ago. Only men could take part, and the competitions included running, jumping and fighting.

The modern Olympic Games started in Athens in 1896. Athletes from fourteen countries [20] part. Today, more than two hundred countries send athletes to the Games, which are [21] every four years.

There are also Winter Olympics, with sports like skiing and ice skating. The first Winter Games were in France in 1924.

Winning an Olympic medal is the greatest [22] of many athletes' lives. Some train for more than ten years to [23] their dream. For the cities that [24] the Games, they are a chance to show themselves to the world.`,
opts:[['took','made','had'],['took','gave','did'],['held','kept','made'],['moment','time','minute'],['achieve','arrive','finish'],['host','hold on','receive']]},
r5:{title:'Lost dog',text:`Hi Sophie,

I hope you're well. I've got a big problem. Our dog, Bruno, ran away yesterday afternoon. We looked [25] him everywhere but we couldn't find him. My little sister cried all night.

Have you seen him near your house? He's brown and white, and he's wearing a red collar. He's very friendly, [26] he might be frightened now.

Hi Mia,

Oh no! I'm so sorry. I haven't seen him, but I'll look when I take my dog [27] a walk later. I'll also ask my neighbours. Why don't you put some posters up in the park? Lots of people walk [28] dogs there. I can help you make them if you want. [29] you got a good photo of him? Don't worry, I'm sure he'll come home soon. Dogs often find their way back.

Sophie

P.S. Call me as soon as you find him. I want to know [30] he's OK!`,
ans:[['for'],['but'],['for'],['their'],['have'],['that','if']]},
w6:{ctx:'Your English friend, Sam, has invited you to go to the beach on Saturday, but you can\'t go. Write an email to Sam. In your email:',notes:['say thank you','explain why you can\'t go','suggest another day']},
w7:['A girl is buying a cake in a shop for her mother\'s birthday.','On the way home, she drops the cake on the street.','She is making a new cake with her father in the kitchen.'],
l1:[
{q:'What is the weather like now?',o:['It\'s raining.','It\'s sunny.','It\'s snowing.'],script:[['M','Is it still snowing outside?'],['W','No, the snow stopped an hour ago. But now it\'s raining, so all the snow is turning to water.']]},
{q:'Where are they going to have lunch?',o:['in the garden','in the kitchen','at a restaurant'],script:[['W','Shall we go to a restaurant for lunch?'],['M','It\'s such a nice day. Let\'s eat outside in the garden.'],['W','Good idea. I\'ll bring everything out from the kitchen.']]},
{q:'What did the boy lose?',o:['his keys','his phone','his wallet'],script:[['W','You look worried. What\'s wrong?'],['M','I can\'t find my keys. I\'ve got my phone and my wallet, but my keys aren\'t in my bag.']]},
{q:'How old is the girl\'s brother?',o:['fourteen','twelve','sixteen'],script:[['M','Is your brother older than you?'],['W','No, he\'s two years younger. I\'m sixteen and he\'s fourteen. My sister\'s twelve.']]},
{q:'What will the woman buy?',o:['a lamp','a picture','a clock'],script:[['M','What are you buying for your new flat?'],['W','I wanted a clock for the kitchen, and a picture for the wall. But I haven\'t got much money, so just a lamp for the living room for now.']]}],
l2:{intro:'You will hear a woman talking about a theatre club for teenagers.',g:'W',head:'Teenage Theatre Club',script:`Hello, I'm Diana, and I run the Teenage Theatre Club. We meet every Thursday after school, in the hall at Park Street Community Centre. Our sessions start at half past four and last for two hours. This term we're preparing a play called "The Lost Island", and we'll perform it in December. You don't need any experience, but you must be between thirteen and seventeen. It costs four pounds per session. Please wear clothes that are easy to move in – no jeans, please! To join, send an email to theatre@parkstreet.org.`,
sents:['Day: ___','Place: ___ Street Community Centre','Sessions start at: ___ p.m.','Name of play: The Lost ___','Month of show: ___'],
ans:[['thursday'],['park'],['4.30','half past four','4:30'],['island'],['december']]},
l3:{intro:'You will hear Leo talking to his friend Anna about his new flat.',names:{M:'Leo',W:'Anna'},script:[
['W','Leo, how\'s the new flat?'],['M','I love it! It\'s much bigger than my old one. It\'s got two bedrooms.'],
['W','Do you live alone?'],['M','No, my friend Martin lives with me. We share everything.'],
['W','Where is it?'],['M','It\'s near the river, about ten minutes from the town centre. It\'s quiet, which is great.'],
['W','Is it expensive?'],['M','Not really. It\'s the same price as my old flat, but I pay half because Martin pays the other half.'],
['W','What\'s the best thing about it?'],['M','The balcony. I have breakfast there every morning and look at the river.'],
['W','Can I come and see it?'],['M','Of course! Come on Sunday. I\'ll cook lunch.']],
q:[{q:'What does Leo say about his new flat?',o:['It is larger than his old flat.','It is smaller than his old flat.','It has one bedroom.']},
{q:'Who does Leo live with?',o:['a friend','his brother','nobody']},
{q:'Where is the flat?',o:['near the river','in the town centre','next to a park']},
{q:'Why does Leo pay less now?',o:['He shares the cost.','The flat is cheaper.','He has a new job.']},
{q:'What does Leo like most about the flat?',o:['the balcony','the kitchen','the quiet street']}]},
l4:[
{ctx:'You hear a woman talking about her holiday.',q:'Where did she stay?',o:['in a tent','in a hotel','with friends'],script:[['W','Hotels there are so expensive, and my friends were away. So we took our tent and stayed at a campsite by the lake. It was lovely.']]},
{ctx:'You hear a man talking to his son.',q:'What does he want his son to do?',o:['turn the music down','go to bed','help him in the garden'],script:[['M','Charlie, it\'s ten o\'clock and the neighbours are trying to sleep. Can you make that music quieter, please?']]},
{ctx:'You hear a girl talking about a football match.',q:'What happened?',o:['Her team lost.','Her team won.','The match was cancelled.'],script:[['W','We played really well and we scored two goals. But they scored three, so we lost again. We need to train more.']]},
{ctx:'You hear two people talking in a shop.',q:'What is the problem?',o:['The shop doesn\'t take cards.','The item is too expensive.','The shop is closing.'],script:[['M','That\'s twelve pounds, please.'],['W','Can I pay by card?'],['M','Sorry, our machine isn\'t working today. Only cash.'],['W','Oh no, I haven\'t got any cash.']]},
{ctx:'You hear a boy talking about his new teacher.',q:'What does he think of her?',o:['She explains things well.','She is very strict.','She gives too much homework.'],script:[['M','She gives us quite a lot of homework, but when she explains things, I understand them immediately. Maths is easier now.']]}],
l5:{intro:'You will hear Kate talking to her dad about what her friends are doing in the summer holidays. What is each person doing?',names:{W:'Kate',M:'Dad'},script:[
['M','What are your friends doing this summer, Kate?'],
['W','Well, Lucy is getting a job in a café. She wants to save money for a car.'],
['M','And Jamie?'],['W','He\'s doing a painting course. He wants to study art at university.'],
['M','What about Hannah?'],['W','Hannah\'s going to France to learn French. She\'s staying with a family there.'],
['M','And Tom?'],['W','He wanted to go camping, but his parents said no. So he\'s helping on his uncle\'s farm.'],
['M','And Ella?'],['W','Ella\'s going to a sports camp. She loves swimming and running.']],
items:['Lucy','Jamie','Hannah','Tom','Ella'],opts:['working in a café','doing an art course','learning a language','working on a farm','going to a sports camp','going camping','learning to drive','visiting grandparents']},
s:{p1:['What do you usually do in the summer?','Do you like hot weather?','What time do you go to bed?','What did you do last Saturday?','Please tell me something about your town.'],
p2:{topic:'weekend activities',ideas:['going to a market','visiting a museum','having a picnic','going to a concert','staying at home'],q:['Do you think museums are interesting?','Which of these activities do you like best?','What do you usually do at the weekend?','Do you prefer spending the weekend with family or friends?']}}
});
