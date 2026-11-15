EXAM({
r1:[
{t:'<b>PHOTOCOPIER</b><br>Out of paper. More paper in the cupboard below.',o:['You can find paper under the machine.','The photocopier is broken.','You must buy paper.']},
{t:'Hi Ana, we\'ve missed the bus! We\'ll be 30 minutes late for the film. Buy the popcorn and wait for us. Bea',q:'What does Bea want Ana to do?',o:['wait and buy some food','go into the film without them','take the bus']},
{t:'<b>ZOO</b><br>Elephant house closed today. Sorry!',o:['Visitors can\'t see one kind of animal today.','The zoo is closed today.','The elephants have left the zoo.']},
{t:'<b>FLAT FOR RENT</b><br>2 bedrooms. Near station. Available from 1st June. No pets.',o:['You can\'t live here with a dog.','The flat is next to the station.','You can move in now.']},
{t:'Matt – Practice is cancelled tonight because the coach is ill. Same time on Friday. Lewis',q:'Lewis is telling Matt',o:['there is no practice today.','practice is at a new time.','the coach wants to see him.']},
{t:'<b>PLEASE TAKE ONE</b><br>Free guide to the town\'s history.',o:['You don\'t have to pay for this guide.','There is only one guide.','The town tour is free.']}],
r2:{title:'Weekend breakfasts',intro:'Three people describe their weekend breakfast.',sections:[
{h:'Paul',t:'On Sundays I make a big English breakfast for the whole family: eggs, bacon, sausages, beans and toast. It takes about an hour, and the kitchen is always a mess afterwards. During the week, I just have a coffee because I don\'t have time.'},
{h:'Lin',t:'At the weekend I always have breakfast in a café with my best friend. We\'ve done it every Saturday for five years. I usually have pancakes with fruit. We talk for hours – sometimes we\'re still there at lunchtime!'},
{h:'Rosa',t:'I try to eat healthily, so I have yogurt with fruit and nuts. On Saturdays, I go to the market early to buy fresh fruit. I don\'t eat meat. My children prefer chocolate cereal, but they only get it at weekends.'}],
q:['Who has breakfast away from home?','Who doesn\'t eat breakfast on weekdays?','Who buys food early on Saturday mornings?','Whose children have a special treat at weekends?','Who cooks for several people?','Who has had the same routine for years?','Who says they have to clean up after breakfast?'],
ans:[1,0,2,2,0,1,0]},
r3:{title:'A house made of bottles',text:`In a small village in Argentina, there is a very unusual house. It is made of more than six thousand plastic bottles.

The house belongs to Alfredo Santa Cruz, a retired builder. "I saw so many bottles in the rubbish and on the beach," he says. "I thought, why not use them to build something?"

Alfredo filled the bottles with sand, which makes them very strong. Then he put them together with cement, like bricks. "It took me two years," he explains. "My neighbours brought me their bottles. Some of them thought I was crazy!"

The house has two bedrooms, a kitchen and a bathroom. The bottles keep the house warm in winter and cool in summer. "It's more comfortable than my old house," Alfredo says.

Now, people come from all over the country to see the house. Alfredo gives them free tours and explains how they can build with bottles too. "If everyone used their rubbish like this, the world would be much cleaner," he says. Several schools have already asked him to help them build classrooms with bottles.`,
q:[{q:'Why did Alfredo decide to use bottles?',o:['He saw a lot of them thrown away.','They were cheaper than bricks.','His neighbours asked him to.']},
{q:'What did Alfredo put inside the bottles?',o:['sand','cement','water']},
{q:'What did some neighbours think?',o:['that Alfredo\'s idea was strange','that the house would be beautiful','that the bottles were dangerous']},
{q:'What does Alfredo say about his house?',o:['It is comfortable.','It is too small.','It is cold in winter.']},
{q:'What do schools want Alfredo to do?',o:['help them build','give talks','give them bottles']}]},
r4:{title:'Marathons',text:`A marathon is a running race of 42.195 kilometres. The race is [19] after a Greek story. A soldier ran from the town of Marathon to Athens to tell people that the Greeks had won a battle. When he arrived, he [20] down dead.

The first modern marathon was at the Olympic Games in 1896. Today, there are marathons in [21] every big city. The biggest, in New York, has more than fifty thousand runners!

Running a marathon is very hard. Most people [22] for several months before the race. The fastest runners finish in just over two hours, but most people [23] four or five hours.

Many people run marathons to [24] money for charity. Some even run in funny costumes!`,
opts:[['named','called up','said'],['fell','dropped off','went'],['almost','nearly all','most'],['train','practise at','study'],['take','spend on','last'],['raise','rise','grow']]},
r5:{title:'Help with homework',text:`Hi Leo,

Can you help me with the maths homework? I don't understand question 5 [25] all. I've tried it three times and I always get a different answer!

I know you're very good [26] maths. Could you come to my house after school tomorrow? My mum says you can stay [27] dinner. She's making lasagne!

Hi Max,

Of course I can help you. Question 5 is really difficult – it took me ages [28]. I'll come to your house at about four.

I love lasagne, so tell your mum thank [29]! I'll ask my mum, but I'm sure it's fine. Do you want me to bring [30] of my notes from the lesson?

Leo`,
ans:[['at'],['at'],['for'],['too','also'],['you'],['some','any']]},
w6:{ctx:'You want to make breakfast for your family on Sunday. Write a note to your English friend, Max, who is staying with you. In your note:',notes:['ask Max to help you','say what you are going to cook','say what time to get up']},
w7:['An old man is walking in the park. He drops his hat.','The wind blows the hat into a lake. A dog jumps in.','The dog brings the hat back. The old man laughs.'],
l1:[
{q:'What is the woman\'s favourite season?',o:['autumn','summer','spring'],script:[['M','You love summer, don\'t you?'],['W','It\'s too hot for me. And spring makes me sneeze. I love autumn, with all the colours.']]},
{q:'Where will they have the party?',o:['in the garden','at a restaurant','in the living room'],script:[['M','Shall we have the party at a restaurant?'],['W','Too expensive. The living room is too small. If the weather\'s nice, let\'s have it in the garden.']]},
{q:'How much is the train ticket?',o:['£24','£42','£12'],script:[['W','How much is a ticket to London?'],['M','Forty-two pounds for a return, or twenty-four for a single.'],['W','Just a single, please.']]},
{q:'What did the boy get for his birthday?',o:['a watch','a bike','a guitar'],script:[['W','Did you get a guitar for your birthday?'],['M','No, my parents said it was too expensive. And I\'ve already got a bike. I got a watch. Look!']]},
{q:'What does the man do?',o:['He is a farmer.','He is a vet.','He is a gardener.'],script:[['W','Do you work with animals?'],['M','Yes, I have cows and sheep, and I grow vegetables too. I\'ve had my farm for twenty years.']]}],
l2:{intro:'You will hear a woman talking about a boat trip.',g:'W',head:'Boat Trip',script:`Good morning and welcome aboard. Our boat trip today will take us along the coast to Seal Island. The journey takes about forty minutes each way. On the island, you'll have one hour to walk around and see the seals. Please don't get too close to them. There is a small café on the island that sells drinks and snacks. The boat will leave the island at twelve thirty exactly, so please don't be late. If you feel sick, please sit at the back of the boat.`,
sents:['Island name: ___ Island','Journey time each way: ___ minutes','Time on the island: one ___','Boat leaves island at: ___','If you feel sick, sit at the ___'],
ans:[['seal'],['40','forty'],['hour'],['12.30','twelve thirty','12:30'],['back']]},
l3:{intro:'You will hear Rachel talking to her friend Jack about her new hobby, painting.',names:{W:'Rachel',M:'Jack'},script:[
['M','Rachel, I hear you\'ve started painting.'],['W','Yes! I go to a class every Wednesday evening at the community centre.'],
['M','What do you paint?'],['W','Mostly flowers and trees. Next month we\'re going to paint people. I\'m a bit nervous about that.'],
['M','Are you good?'],['W','Not really! But my teacher says I\'m getting better. She\'s really kind.'],
['M','Is it expensive?'],['W','The class is cheap, but the paints cost a lot. My aunt gave me some for my birthday.'],
['M','Can I see your paintings?'],['W','Maybe one day. When I\'m better!']],
q:[{q:'Where is Rachel\'s painting class?',o:['at the community centre','at school','at her aunt\'s house']},
{q:'What does Rachel usually paint?',o:['plants','people','buildings']},
{q:'How does Rachel feel about painting people?',o:['nervous','excited','bored']},
{q:'What is expensive?',o:['the paints','the class','the teacher']},
{q:'Why won\'t Rachel show Jack her paintings now?',o:['She doesn\'t think they are good enough.','They are at the class.','Her aunt has them.']}]},
l4:[
{ctx:'You hear a man talking about his weekend.',q:'What did he do on Sunday?',o:['He visited his parents.','He played tennis.','He went to the cinema.'],script:[['M','On Saturday I played tennis and went to the cinema. On Sunday I drove to see my mum and dad. We had a lovely lunch.']]},
{ctx:'You hear a woman talking on the phone.',q:'Why is she calling?',o:['to make an appointment','to cancel an appointment','to ask for directions'],script:[['W','Hello, I\'d like to see the doctor, please. Is there anything free on Thursday morning?']]},
{ctx:'You hear two friends talking about a jacket.',q:'What does the man think of it?',o:['It\'s too expensive.','It\'s the wrong size.','It\'s ugly.'],script:[['W','What do you think of this jacket?'],['M','It looks great on you, but two hundred pounds? That\'s far too much!']]},
{ctx:'You hear a boy talking about his holiday.',q:'What was the best thing?',o:['the activities','the weather','the food'],script:[['M','The weather was bad and the food was OK, but we went canoeing, climbing and horse riding. It was brilliant!']]},
{ctx:'You hear a teacher talking to a class.',q:'What is she talking about?',o:['a change to the timetable','an exam','a new student'],script:[['W','From next week, science will be on Monday afternoons, not Friday mornings. And PE moves to Friday.']]}],
l5:{intro:'You will hear Dan talking to his mum about where his friends are going for their holidays. Where is each person going?',names:{M:'Dan',W:'Mum'},script:[
['W','Dan, where are your friends going on holiday?'],
['M','Well, Ali is going to Egypt to see the pyramids.'],
['W','Wow. And Jess?'],['M','Jess is going to Canada. Her aunt lives there.'],
['W','What about Ryan?'],['M','Ryan\'s going to Japan with his dad.'],
['W','And Emma?'],['M','Emma wanted to go to Greece, but she\'s going to Ireland.'],
['W','And Chris?'],['M','Chris is going to Mexico.']],
items:['Ali','Jess','Ryan','Emma','Chris'],opts:['Egypt','Canada','Japan','Ireland','Mexico','Greece','Brazil','Italy']},
s:{p1:['What do you usually have for breakfast?','What time do you have dinner?','Can you cook?','What did you eat last weekend?','Please tell me something about your favourite meal.'],
p2:{topic:'breakfast',ideas:['cereal','eggs','fruit','toast','pancakes'],q:['Do you think breakfast is the most important meal?','Which of these breakfasts do you like best?','Do you eat breakfast at home or on the way?','What do people eat for breakfast in your country?']}}
});
