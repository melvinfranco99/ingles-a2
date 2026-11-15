EXAM({
r1:[
{t:'<b>MUSEUM</b><br>Please do not touch the paintings.',o:['Visitors must keep their hands off the art.','You can take photos of the paintings.','The paintings are for sale.']},
{t:'Hi Alice, I\'ve booked the museum tour for Saturday at 11. It\'s £8 each. Can you pay me back later? Sue',q:'What does Sue want Alice to do?',o:['give her some money','book the tour','meet her at 8']},
{t:'<b>CASTLE</b><br>The tower is closed in bad weather.',o:['You may not be able to go up the tower on some days.','The castle is closed in winter.','The tower is always open.']},
{t:'<b>GIFT SHOP</b><br>You don\'t need a museum ticket to visit the shop.',o:['Anyone can go into the shop.','The shop sells museum tickets.','You must buy a ticket to shop.']},
{t:'Mark – the history homework is on page 45, not 54. Sorry! See you tomorrow. Mr Clay',q:'Mr Clay is',o:['correcting some information.','giving extra homework.','cancelling the lesson.']},
{t:'<b>AUDIO GUIDE</b><br>Available in 10 languages. £3.',o:['You can pay to listen to information in your language.','The audio guide is free.','The guide is only in English.']}],
r2:{title:'History lovers',intro:'Three people talk about their interest in history.',sections:[
{h:'Dora',t:'I\'m interested in my family\'s history. I\'ve spent three years finding out about my grandparents and their parents. I found out that my great-grandfather was a sailor who travelled all over the world. I\'ve found old letters and photos that nobody had seen for a hundred years.'},
{h:'Liam',t:'I love the Romans. I\'ve visited Roman places in Italy, France and Britain. My favourite is a Roman bath in England, where you can still see the hot water. I\'ve also read about fifty books about them. One day I\'d like to write my own.'},
{h:'Yuki',t:'I work as a guide in an old castle. I wear clothes from the fifteenth century and tell visitors stories about the people who lived there. Children love the stories about ghosts! I studied history at university, and this is my dream job.'}],
q:['Who has discovered things about their relatives?','Who has travelled to several countries for their hobby?','Whose job is connected to history?','Who wears special clothes?','Who hopes to become a writer?','Who has found old documents?','Who talks about a particular kind of building?'],
ans:[0,1,2,2,1,0,1]},
r3:{title:'The treasure in the field',text:`Last spring, a farmer called Peter Wilson was working in his field in the east of England when his machine hit something hard. "I thought it was a stone," he says. "But when I looked, I saw something shining."

It was a gold coin. Peter called the local museum, and experts came to look. Over the next two weeks, they found more than three hundred coins, all about a thousand years old.

"Nobody knows exactly who buried them," says Dr Sarah Hope from the museum. "Perhaps someone hid them during a war and never came back."

The coins are worth about half a million pounds. In Britain, treasure belongs to the state, but the museum must pay the person who found it and the owner of the land. Because Peter is both, he will get all the money.

"I'm going to buy a new tractor," Peter laughs. "And I'll take my wife on holiday – we haven't had one for twenty years!" The coins will go on show at the museum next year. "I'll be the first visitor," says Peter.`,
q:[{q:'What did Peter think he had hit at first?',o:['a stone','a coin','a machine']},
{q:'Who helped find the other coins?',o:['people from a museum','Peter\'s family','the police']},
{q:'What does Dr Hope say about the coins?',o:['It isn\'t clear who put them there.','They were made in a war.','They belonged to a farmer.']},
{q:'Why will Peter get all the money?',o:['He found the coins and owns the land.','He sold the coins.','The museum gave him a prize.']},
{q:'What will Peter do with some money?',o:['go on holiday','buy a new house','give it to the museum']}]},
r4:{title:'The pyramids',text:`The pyramids of Egypt are some of the most famous buildings in the world. The biggest, the Great Pyramid, was built about four and a half thousand years [19].

The pyramids were tombs for the kings of Egypt, called pharaohs. Egyptians believed that the pharaohs would [20] a new life after they died, so they put food, gold and other things in the tombs.

Nobody knows exactly how the pyramids were built. Each stone [21] more than two tonnes, and there are more than two million stones in the Great Pyramid! Thousands of workers probably [22] for twenty years to build it.

For almost four thousand years, the Great Pyramid was the tallest building in the world. Today, millions of tourists [23] it every year. It is the only one of the Seven Wonders of the Ancient World that you can still [24].`,
opts:[['ago','before','past'],['begin','open','make up'],['weighs','heavies','carries'],['worked','made','did'],['visit','go','travel'],['see','look','watch']]},
r5:{title:'Castle trip',text:`Hi Molly,

Yesterday our class went [25] a trip to Warwick Castle. It's more than a thousand years old! We went by coach and it took [26] hour and a half.

First, we walked around the walls. You can see [27] far from the top! Then we watched a show with knights fighting on horses. It was really exciting.

After lunch, we went [28] the dungeon, where they used to keep prisoners. It was dark and scary, and an actor dressed as a ghost jumped out [29] us. Everyone screamed!

You should go with your family. I think you'd love it. I bought you a small present [30] the gift shop.

Love,
Hannah`,
ans:[['on'],['an'],['very','so'],['into','to'],['at'],['from','in','at']]},
w6:{ctx:'You visited a museum last weekend. Write an email to your English friend, Toni. In your email:',notes:['say which museum you visited','say what you saw there','say if you would go again']},
w7:['A boy is digging in his garden.','He finds an old box under the ground.','He opens the box with his family. There are old coins and photos inside.'],
l1:[
{q:'Which museum will they visit?',o:['the science museum','the art museum','the history museum'],script:[['M','Shall we go to the art museum?'],['W','We went last month. And the history museum is closed. Let\'s try the science museum.']]},
{q:'How old is the castle?',o:['800 years old','600 years old','1,000 years old'],script:[['W','Is the castle a thousand years old?'],['M','No, it\'s eight hundred years old. The church next to it is six hundred.']]},
{q:'What did the girl buy at the gift shop?',o:['a postcard','a pen','a book'],script:[['M','Did you buy a book at the gift shop?'],['W','They were too expensive. I wanted a pen, but I got a postcard for my grandma.']]},
{q:'When is the museum closed?',o:['on Mondays','on Sundays','on Saturdays'],script:[['W','Is the museum open every day?'],['M','Every day except Monday. On Saturdays and Sundays it\'s very busy.']]},
{q:'Where is the café?',o:['on the ground floor','on the first floor','on the top floor'],script:[['M','Excuse me, is the café on the top floor?'],['W','No, that\'s the exhibition. The café is on the ground floor, next to the entrance.']]}],
l2:{intro:'You will hear a woman talking about a castle tour.',g:'W',head:'Castle Tour',script:`Welcome to Kingsford Castle. Our tour today takes about ninety minutes. We'll start in the great hall, where the king had his parties. Then we'll climb the north tower – there are two hundred steps, so take your time. From the top, you can see the sea on a clear day. After that, we'll visit the kitchen, which still has its old oven. Please don't take photos inside the bedrooms. The tour finishes in the garden, where you can see the castle's famous roses.`,
sents:['Tour length: ___ minutes','First room: the great ___','Number of steps in the tower: ___','No photos in the ___','Famous flowers in the garden: ___'],
ans:[['90','ninety'],['hall'],['200','two hundred'],['bedrooms'],['roses']]},
l3:{intro:'You will hear Henry talking to his friend Zara about a school history project.',names:{M:'Henry',W:'Zara'},script:[
['W','Henry, what\'s your history project about?'],['M','My town in the 1950s. I interviewed my grandad.'],
['W','What did he tell you?'],['M','Lots! He said there were no supermarkets. People bought food in small shops every day.'],
['W','What did children do for fun?'],['M','They played in the street. There weren\'t many cars, so it was safe.'],
['W','Did they have TV?'],['M','My grandad\'s family got their first TV when he was ten. All the neighbours came to watch!'],
['W','When do you have to finish it?'],['M','Next Friday. I still have to find some old photos.']],
q:[{q:'Who did Henry interview?',o:['his grandfather','his teacher','his neighbour']},
{q:'Where did people buy food?',o:['in small shops','in supermarkets','at markets']},
{q:'Why could children play in the street?',o:['There was little traffic.','There were no parks.','Their parents told them to.']},
{q:'What happened when the family got a TV?',o:['Neighbours came to see it.','Henry\'s grandad broke it.','They watched it every day.']},
{q:'What does Henry still need?',o:['old photos','an interview','a title']}]},
l4:[
{ctx:'You hear a man talking about a museum.',q:'What did he like most?',o:['the dinosaur bones','the paintings','the café'],script:[['M','The café was expensive and the paintings were OK. But those dinosaur bones were incredible!']]},
{ctx:'You hear a woman talking to a guide.',q:'What does she want to know?',o:['where the toilets are','when the tour starts','how much it costs'],script:[['W','Excuse me, before the tour starts, could you tell me where the toilets are?']]},
{ctx:'You hear two friends talking about a history lesson.',q:'How does the boy feel about history?',o:['He finds it interesting.','He finds it boring.','He finds it difficult.'],script:[['W','History is so boring.'],['M','Not for me! I love learning how people lived in the past.']]},
{ctx:'You hear a girl talking about a school trip.',q:'Where did they go?',o:['to a castle','to a museum','to a farm'],script:[['W','We walked on the walls and saw where the soldiers slept. Then we watched a knights\' show.']]},
{ctx:'You hear a man calling a museum.',q:'Why is he calling?',o:['to book a group visit','to buy a ticket online','to complain'],script:[['M','Hello, I\'m a teacher. I\'d like to bring thirty students next Thursday. Do I need to book?']]}],
l5:{intro:'You will hear Ella talking to her dad about what her classmates are doing for their history project. What is each person\'s project about?',names:{W:'Ella',M:'Dad'},script:[
['M','What are your classmates doing for their history projects, Ella?'],
['W','Well, Josh is doing the Romans.'],
['M','And Amy?'],['W','Amy is doing the Egyptians and the pyramids.'],
['M','What about Kim?'],['W','Kim wanted to do the Vikings, but someone else chose them. So she\'s doing castles.'],
['M','And Dan?'],['W','Dan is doing the first trains.'],
['M','And you?'],['W','I\'m doing the Titanic.']],
items:['Josh','Amy','Kim','Dan','Ella'],opts:['the Romans','the Egyptians','castles','trains','the Titanic','the Vikings','the Greeks','the first cars']},
s:{p1:['Do you like history?','Have you been to a museum recently?','What famous old buildings are there in your country?','What did you learn at school yesterday?','Please tell me something about an old building you like.'],
p2:{topic:'places to visit',ideas:['a castle','a museum','an old church','a zoo','an art gallery'],q:['Do you think castles are interesting?','Which of these places would you like to visit?','Are museums boring for young people?','What places do tourists visit in your town?']}}
});
