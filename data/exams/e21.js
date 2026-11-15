EXAM({
r1:[
{t:'<b>FARM SHOP</b><br>Fresh eggs daily. Please leave money in the box.',o:['There is nobody to pay, so you pay yourself.','Eggs are free here.','The shop only sells eggs on some days.']},
{t:'Hi Anna, I\'ve left my history book at your house. Can you bring it to school tomorrow? Thanks! Rosa',q:'What does Rosa want?',o:['her book back','to borrow Anna\'s book','to visit Anna']},
{t:'<b>TOILETS</b><br>Closed for cleaning. Please use the toilets on the second floor.',o:['There are other toilets you can use.','The second floor is closed.','The toilets will open on the second day.']},
{t:'<b>TENNIS CLUB</b><br>New members welcome. First month half price.',o:['It is cheaper to join for the first month.','You can only play for one month.','The club is full.']},
{t:'Hi Josh, Mr Brown is ill so there\'s no maths lesson today. We have a free period instead! Ellie',q:'Ellie is telling Josh',o:['a lesson will not happen.','Mr Brown has a new class.','the maths test is today.']},
{t:'<b>RESTAURANT</b><br>Please wait here to be seated.',o:['Someone will show you to a table.','You can sit anywhere you like.','The restaurant is full.']}],
r2:{title:'Festivals',intro:'Three people describe a festival in their country.',sections:[
{h:'Carmen',t:'In my town in Spain, we have a tomato festival every August. Thousands of people throw tomatoes at each other in the streets for one hour! Everyone gets completely red. Afterwards, the streets are washed with water. It\'s messy, but it\'s great fun.'},
{h:'Raj',t:'Diwali is the festival of lights in India. It usually happens in October or November. We put candles and lamps everywhere in our homes and the streets look beautiful at night. We wear new clothes, give each other sweets and watch fireworks. It\'s my favourite time of year.'},
{h:'Mei',t:'In China, the biggest festival is the Spring Festival, also called Chinese New Year. Families travel long distances to be together. We clean the house to get rid of bad luck and decorate it with red paper. Children get money in red envelopes. We eat dumplings at midnight.'}],
q:['Which festival only lasts a short time?','Where do people give presents of money?','Which festival happens in summer?','Where do people make their houses clean?','Which festival includes fireworks?','Where do people buy new clothes?','Where do many people travel to see family?'],
ans:[0,2,0,2,1,1,2]},
r3:{title:'A new life in the country',text:`Two years ago, the Bennett family moved from a flat in the centre of London to an old farmhouse in Wales. "It was the biggest decision of our lives," says Mrs Bennett.

"In London, we were always busy and stressed," she explains. "My husband spent three hours a day travelling to work. We never had time together as a family."

Now Mr Bennett works from home, and Mrs Bennett has opened a small café in the village. Their two children, Ruby and Max, go to the village school, which has only forty students.

"At first I hated it," admits Ruby, who is twelve. "I missed my friends and there was nothing to do. There isn't even a cinema!" But now she loves it. "I've got a horse, and I go riding every day. I'd never go back to London."

Max, nine, likes the freedom. "In London, I couldn't go out alone. Here, I can ride my bike to my friend's house."

The family say life isn't perfect. "The winters are long and wet, and the nearest supermarket is half an hour away," says Mrs Bennett. "But we're much happier."`,
q:[{q:'Why did the family leave London?',o:['Their life there was too busy.','They lost their jobs.','Their flat was too small.']},
{q:'What does Mrs Bennett do now?',o:['She runs a café.','She works from home.','She is a teacher.']},
{q:'How did Ruby feel when she first moved?',o:['unhappy','excited','nervous']},
{q:'What does Max like about the country?',o:['He can go out on his own.','He has a horse.','The school is small.']},
{q:'What problem does Mrs Bennett mention?',o:['Shops are far away.','There is no school.','The people are unfriendly.']}]},
r4:{title:'Kites',text:`People have been flying kites for more than two thousand years. The first kites were probably [19] in China, using silk and bamboo.

In the past, kites were not just toys. The army used them to send messages, and scientists used them to learn about the weather. In 1752, Benjamin Franklin flew a kite in a storm to [20] that lightning was electricity. That was very dangerous!

Today, kite flying is a popular [21] all over the world. In some countries, there are big kite festivals, where people fly kites of [22] shapes and sizes. Some kites are as big as a house!

To fly a kite, you need a windy day and a big open space, like a beach or a field. Never fly a kite [23] electric lines. And be careful – if the wind is very strong, it can [24] the kite out of your hands!`,
opts:[['made','done','built up'],['show','tell','say'],['hobby','sport club','game set'],['all','every','each'],['near','next','close'],['pull','push','carry on']]},
r5:{title:'Sorry',text:`Hi Ben,

I'm really sorry I didn't come to your party on Saturday. I wanted to come, [25] my grandmother was ill and we had to visit her in hospital. She's much better now, thank goodness.

Did you have a good time? What presents did you get? I've got a present [26] you too. It's a book about football – I know you love it. I'll give it to you [27] school on Monday.

Would you like to come to the cinema [28] me next weekend to make up for it? There's a new action film that looks really good. I'll [29] for the tickets!

Write back and [30] me know.

Your friend,
Tom`,
ans:[['but'],['for'],['at'],['with'],['pay'],['let']]},
w6:{ctx:'There is a festival in your town next week. Write an email to your English friend, Max. In your email:',notes:['say what the festival is','say what people do at the festival','invite Max to come with you']},
w7:['Two friends are flying a kite on a hill. It is very windy.','The kite gets stuck in a tall tree.','A man with a ladder helps them to get the kite down.'],
l1:[
{q:'What is the man going to do on Saturday?',o:['paint the kitchen','play golf','go to a wedding'],script:[['W','Are you playing golf on Saturday?'],['M','No, I\'ve got to paint the kitchen. The wedding is on Sunday, so I can\'t do it then.']]},
{q:'Which is the girl\'s brother?',o:['the boy with glasses','the tall boy with long hair','the boy with a hat'],script:[['M','Is your brother the tall boy with long hair?'],['W','No, that\'s his friend. My brother is the one wearing glasses, next to the boy with the hat.']]},
{q:'How did the woman get to work today?',o:['She walked.','She took a taxi.','She drove.'],script:[['M','Did you drive to work?'],['W','My car is at the garage. I was going to get a taxi, but it was such a nice morning, so I walked.']]},
{q:'What does the boy want for his birthday?',o:['a camera','a phone','a bike'],script:[['W','Do you want a new bike for your birthday?'],['M','No, my bike\'s fine. And I got a phone at Christmas. I really want a camera for taking photos of animals.']]},
{q:'What time does the class end?',o:['8.30','8.00','9.00'],script:[['M','What time does your yoga class finish?'],['W','It starts at seven and lasts an hour and a half.'],['M','So half past eight.']]}],
l2:{intro:'You will hear a woman talking about a winter fair.',g:'W',head:'Winter Fair',script:`Welcome to our town's winter fair! The fair is in the main square and opens every day from the first of December until Christmas Eve. There are more than fifty stalls selling presents, decorations and hot food. Children can visit Father Christmas in his house next to the church. There's also an ice rink – skates can be hired for four pounds. The fair is open from eleven in the morning until ten at night. Don't miss the light show every evening at seven!`,
sents:['Place: the main ___','Number of stalls: more than ___','Father Christmas is next to the ___','Hiring skates costs: £___','Light show starts at: ___ p.m.'],
ans:[['square'],['50','fifty'],['church'],['4','four'],['7','seven']]},
l3:{intro:'You will hear Lucy talking to her friend Max about a school trip to a farm.',names:{W:'Lucy',M:'Max'},script:[
['M','Lucy, how was the school trip to the farm?'],['W','It was great! We left school at eight and got there at ten.'],
['M','What did you do?'],['W','First, we helped feed the sheep. Then we learnt how to milk a cow. It was harder than I thought!'],
['M','Did you see any baby animals?'],['W','Yes, some baby pigs. They were only two days old.'],
['M','What did you have for lunch?'],['W','The farmer\'s wife made us soup with vegetables from the farm. It was delicious.'],
['M','Did anything go wrong?'],['W','Yes! Tom fell in the mud. He had to go home in the farmer\'s clothes!']],
q:[{q:'How long was the journey to the farm?',o:['two hours','one hour','three hours']},
{q:'What did Lucy find difficult?',o:['milking a cow','feeding the sheep','walking in the mud']},
{q:'What baby animals did they see?',o:['pigs','sheep','cows']},
{q:'What did they have for lunch?',o:['soup','sandwiches','pizza']},
{q:'What happened to Tom?',o:['He got very dirty.','He lost his bag.','He was ill.']}]},
l4:[
{ctx:'You hear a woman talking to a friend.',q:'Why is she happy?',o:['She has a new job.','She has a new house.','She passed an exam.'],script:[['W','Guess what? I start at the hospital on Monday! I\'m going to be a nurse in the children\'s department.']]},
{ctx:'You hear a man talking about a hotel.',q:'What did he like about it?',o:['the friendly staff','the big rooms','the cheap prices'],script:[['M','The rooms were tiny and it was expensive. But everyone who worked there was so kind and helpful.']]},
{ctx:'You hear two friends talking.',q:'What does the boy want to do?',o:['go home','have something to eat','go to the cinema'],script:[['W','Shall we go to the cinema?'],['M','I\'m really tired. I just want to go home and sleep.']]},
{ctx:'You hear a girl talking about a book.',q:'Who gave her the book?',o:['her teacher','her mother','her friend'],script:[['W','My mum said it was too difficult for me, but my English teacher gave it to me and said I would love it. She was right!']]},
{ctx:'You hear a man calling a shop.',q:'Why is he calling?',o:['to find out if something is available','to complain about a product','to change an order'],script:[['M','Hi, do you have the new Smartwatch 5 in black? I want to come and buy one this afternoon.']]}],
l5:{intro:'You will hear Emily talking to her friend about her family\'s favourite holiday activities. What does each person like doing on holiday?',names:{W:'Emily',M:'Friend'},script:[
['M','What does your family like doing on holiday, Emily?'],
['W','Well, my dad loves walking. He\'d walk all day if he could!'],
['M','And your mum?'],['W','Mum likes visiting museums. She loves history.'],
['M','What about your brother?'],['W','Jack spends all his time in the swimming pool.'],
['M','And your sister?'],['W','Amy loves shopping, especially at markets.'],
['M','And you?'],['W','I like taking photos. I bring my camera everywhere.']],
items:['Dad','Mum','Jack','Amy','Emily'],opts:['walking','visiting museums','swimming','shopping','taking photos','reading','sleeping','cycling']},
s:{p1:['What festivals do you have in your country?','What do you do on your birthday?','Do you like parties?','What did you do last New Year\'s Eve?','Please tell me something about your favourite festival.'],
p2:{topic:'celebrations',ideas:['a birthday party','a wedding','a music festival','a family dinner','fireworks'],q:['Do you think weddings are fun?','Which of these celebrations do you like best?','How do you celebrate your birthday?','What special days are important in your family?']}}
});
