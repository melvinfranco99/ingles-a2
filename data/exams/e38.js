EXAM({
r1:[
{t:'<b>COOKING CLASS</b><br>Learn to make pasta! Saturday 10 a.m. All ingredients included.',o:['You don\'t need to bring food to the class.','You must bring your own pasta.','The class is every day.']},
{t:'Hi Raj, I\'m making dinner tonight. Do you eat fish? If not, I\'ll make chicken. Ben',q:'What does Ben want to know?',o:['what Raj can eat','what time dinner is','if Raj can cook']},
{t:'<b>RESTAURANT</b><br>Kitchen closes at 10 p.m. Last orders 9.45 p.m.',o:['You can\'t order food after 9.45 p.m.','The restaurant opens at 10 p.m.','The kitchen is open all night.']},
{t:'<b>BAKERY</b><br>Fresh bread from 7 a.m. Sorry, we often sell out by 11!',o:['It\'s best to come early.','The bakery closes at 11.','The bread is not fresh.']},
{t:'Mia – please take the chicken out of the freezer when you get home. Dad',q:'Dad wants Mia to',o:['get some food ready.','buy chicken.','cook dinner.']},
{t:'<b>CAFÉ</b><br>Bring your own cup and get 20p off your coffee.',o:['Coffee is cheaper if you have your own cup.','The café doesn\'t have cups.','Coffee costs 20p.']}],
r2:{title:'Cooking at home',intro:'Three people talk about cooking.',sections:[
{h:'Clara',t:'I never cooked until I went to university. In the first month, I ate pizza every night! Then my flatmate taught me to make simple meals like pasta and soup. Now I cook for my friends every Friday. My speciality is a vegetable curry.'},
{h:'Matteo',t:'I\'m a chef in an Italian restaurant, so I cook all day at work. At home, I\'m too tired to cook, so my wife does it. She\'s a great cook – but don\'t tell my boss her pasta is better than mine!'},
{h:'Joan',t:'I\'m seventy and I\'ve been cooking for sixty years. My mother taught me. Every Sunday, my whole family comes for lunch – about fifteen people! I make roast beef and an apple pie. I\'ve written all my recipes in a book for my grandchildren.'}],
q:['Who learnt to cook from a friend?','Who cooks as a job?','Who has written down recipes for their family?','Who used to eat the same thing every day?','Who doesn\'t cook at home?','Who cooks for a big group every week?','Who thinks someone else cooks better than them?'],
ans:[0,1,2,0,1,2,1]},
r3:{title:'The pizza delivery girl',text:`Seventeen-year-old Emma Fox works for a pizza restaurant in her town. Every Friday and Saturday evening, she delivers pizzas on her bike.

"I started because I wanted to save money for a car," she explains. "I didn't think it would be so much fun. I love cycling, and I meet lots of interesting people."

Emma delivers about thirty pizzas every night. "The busiest time is between seven and nine," she says. "And when there's a big football match on TV, everyone orders pizza!"

Not everything is easy. "When it rains, I get completely wet," she says. "And once, a dog chased me down the street. I was so scared I nearly dropped the pizza!"

Last month, Emma delivered a pizza to an old man who lived alone. "He looked sad, so I talked to him for a few minutes. Now he orders a pizza every Saturday, and he always asks for me." Emma laughs. "I think he's more interested in talking than eating!"

Emma has saved over a thousand pounds. "Maybe I'll keep the bike," she says, "and spend the money on a holiday instead."`,
q:[{q:'Why did Emma start the job?',o:['to save for something','because she loves pizza','to get fit']},
{q:'When do most people order pizza?',o:['during big sports events','at lunchtime','after nine o\'clock']},
{q:'What happened once?',o:['An animal ran after her.','She dropped a pizza.','She fell off her bike.']},
{q:'Why does the old man order every week?',o:['He likes talking to Emma.','He can\'t cook.','The pizza is cheap.']},
{q:'What might Emma do with her money?',o:['go on holiday','buy a car','buy a new bike']}]},
r4:{title:'Potatoes',text:`Potatoes are one of the most important foods in the world. They first [19] in South America, in the mountains of Peru, about seven thousand years ago.

In the sixteenth century, Spanish explorers [20] potatoes to Europe. At first, many Europeans didn't want to eat them. Some people thought they were dangerous, [21] they were in the same plant family as some poisonous plants.

But potatoes are easy to grow and full of energy, so they slowly became popular. Today, China [22] more potatoes than any other country.

You can cook potatoes in many different ways. You can boil them, bake them, [23] them into chips or make them into soup. In Britain, people eat more than a hundred kilos of potatoes per person every year. Crisps, of course, are also [24] from potatoes!`,
opts:[['grew','raised','planted up'],['brought','carried on','took up'],['because','so','although'],['produces','makes up','does'],['turn','change','become'],['made','done','built']]},
r5:{title:'A recipe',text:`Hi Lara,

You asked me for the recipe [25] my chocolate biscuits. Here it is! It's really easy.

First, mix 100 grams of butter and 100 grams of sugar together. Then add one egg and 150 grams of flour. Finally, add some chocolate. You can use [26] chocolate you like – I use dark chocolate.

Make small balls with the mixture and put them [27] a tray. Cook them in the oven for about twelve minutes. Be careful not to cook them [28] long, or they'll be hard!

Leave them to cool before you eat [29]. That's the most difficult part – they smell so good!

Let me know [30] they turn out.

Love,
Kate`,
ans:[['for'],['any','whatever','the'],['on'],['too'],['them'],['how']]},
w6:{ctx:'You are going to cook a meal for your family. Write a note to your English friend, Jamie, who is staying with you. In your note:',notes:['say what you are going to cook','ask Jamie to buy something','say what time dinner will be']},
w7:['A boy is making a cake in the kitchen. He is reading a recipe.','He puts the cake in the oven and goes to play a computer game.','Smoke is coming out of the oven. His mother is very surprised.'],
l1:[
{q:'What will they have for dessert?',o:['ice cream','fruit','cake'],script:[['M','Shall we have cake for dessert?'],['W','We had cake yesterday. And there\'s no fruit left. Let\'s have ice cream.']]},
{q:'What does the man need to buy?',o:['eggs','milk','butter'],script:[['W','Do we need milk?'],['M','No, there\'s plenty of milk and butter. But I need eggs for the cake.']]},
{q:'Where are they going to eat tonight?',o:['at a Chinese restaurant','at home','at an Indian restaurant'],script:[['W','Shall we eat at home?'],['M','I don\'t want to cook. The Indian restaurant is closed on Mondays, so let\'s go to the Chinese one.']]},
{q:'How long should the pasta cook?',o:['10 minutes','12 minutes','20 minutes'],script:[['M','How long does the pasta need?'],['W','It says twelve minutes on the packet, but I always cook it for ten.']]},
{q:'What does the girl want to drink?',o:['apple juice','lemonade','milk'],script:[['M','Would you like lemonade?'],['W','No thanks, it\'s too sweet. Have you got apple juice?'],['M','Yes, here you are.']]}],
l2:{intro:'You will hear a man talking about a cooking competition.',g:'M',head:'Young Chef Competition',script:`Are you a good cook? Then enter our Young Chef Competition! It's open to anyone aged between eleven and sixteen. You need to make a main course and a dessert in ninety minutes. The final will be at the Town Hall on the twelfth of May. The winner gets a cooking day with a famous chef and two hundred pounds. To enter, send us your best recipe by the end of March. Our judge this year is the chef Lucy Hart – H-A-R-T.`,
sents:['Age: from 11 to ___','Time to cook: ___ minutes','Final at the Town ___','Prize money: £___','Judge: Lucy ___'],
ans:[['16','sixteen'],['90','ninety'],['hall'],['200','two hundred'],['hart']]},
l3:{intro:'You will hear Lily talking to her friend Adam about a cooking class.',names:{W:'Lily',M:'Adam'},script:[
['M','Lily, how was your cooking class?'],['W','Great! We learnt to make Thai food.'],
['M','What did you make?'],['W','A green curry and some spring rolls. The curry was really spicy!'],
['M','Who was the teacher?'],['W','A woman from Bangkok. She has her own restaurant here.'],
['M','Did you eat everything?'],['W','No, there was too much. I took some home for my parents.'],
['M','Will you go again?'],['W','Yes, next month we\'re making Japanese food. I can\'t wait!']],
q:[{q:'What kind of food did they make?',o:['Thai','Chinese','Japanese']},
{q:'What does Lily say about the curry?',o:['It was very hot.','It was sweet.','It was too salty.']},
{q:'Who is the teacher?',o:['a restaurant owner','a TV chef','a school teacher']},
{q:'What did Lily do with the extra food?',o:['took it home','gave it to Adam','left it at the class']},
{q:'What will they cook next month?',o:['Japanese food','Thai food','Indian food']}]},
l4:[
{ctx:'You hear a woman talking about a restaurant.',q:'What was the problem?',o:['The service was slow.','The food was cold.','It was expensive.'],script:[['W','The food was hot and delicious, and it wasn\'t expensive. But we waited an hour for our main course!']]},
{ctx:'You hear a man talking to his son.',q:'What does he want?',o:['help with washing up','help with cooking','help with shopping'],script:[['M','Thanks for cooking dinner. Now can you help me wash all these plates?']]},
{ctx:'You hear two friends talking about food.',q:'What does the girl not eat?',o:['meat','fish','vegetables'],script:[['M','Do you want a burger?'],['W','I don\'t eat meat. But I love fish. Is there any fish?']]},
{ctx:'You hear a boy talking about his favourite food.',q:'What is it?',o:['his grandma\'s soup','pizza','chocolate cake'],script:[['M','I like pizza and cake, but nothing is better than my grandma\'s vegetable soup.']]},
{ctx:'You hear a woman calling a restaurant.',q:'Why is she calling?',o:['to book a table','to order food','to complain'],script:[['W','Hello, I\'d like a table for six on Saturday evening at eight, please.']]}],
l5:{intro:'You will hear Oliver talking to his mum about what his friends are bringing to a picnic. What is each person bringing?',names:{M:'Oliver',W:'Mum'},script:[
['W','Oliver, what\'s everyone bringing to the picnic?'],
['M','Well, Ella is bringing sandwiches.'],
['W','And Josh?'],['M','Josh is bringing crisps.'],
['W','What about Amy?'],['M','Amy\'s bringing a cake she made.'],
['W','And Sam?'],['M','He was going to bring fruit, but now he\'s bringing drinks.'],
['W','And you?'],['M','I\'m bringing some biscuits.']],
items:['Ella','Josh','Amy','Sam','Oliver'],opts:['sandwiches','crisps','a cake','drinks','biscuits','fruit','pizza','chocolate']},
s:{p1:['Can you cook?','What is your favourite food?','Who cooks in your family?','What did you have for dinner last night?','Please tell me something about a meal you can make.'],
p2:{topic:'food',ideas:['pizza','salad','soup','burgers','fruit'],q:['Do you think salad is a good lunch?','Which of these foods do you like best?','Is it important to eat healthy food?','What food is popular in your country?']}}
});
