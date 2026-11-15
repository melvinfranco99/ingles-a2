EXAM({
r1:[
{t:'<b>ICE RINK</b><br>Skates can be hired at the desk. Gloves must be worn.',o:['You don\'t need to bring your own skates.','You can buy gloves at the desk.','Skating is only for people with their own skates.']},
{t:'Hi Laura, I\'m going to be 20 minutes late for our lesson. Start without me. Sorry! Mr Price',q:'Mr Price wants Laura to',o:['begin the lesson alone.','cancel the lesson.','wait 20 minutes before calling him.']},
{t:'<b>BAKERY</b><br>Fresh bread from 7 a.m. Cakes made to order – please give 2 days\' notice.',o:['You need to order a cake in advance.','The bakery only sells cakes.','Bread is sold until 7 a.m.']},
{t:'<b>SCHOOL TRIP</b><br>Please bring a packed lunch. Drinks will be provided.',o:['Students will be given something to drink.','Students should buy lunch on the trip.','Students don\'t need to bring anything.']},
{t:'Maya – I\'ve borrowed your black jacket for the interview. Hope that\'s OK! I\'ll wash it before I give it back. Kim',q:'Kim has written to',o:['say she has taken something.','ask if she can borrow a jacket.','tell Maya about a job.']},
{t:'<b>SPORTS SHOP</b><br>Running shoes: buy one pair, get socks free.',o:['You will get something extra if you buy running shoes.','Socks are half price.','The shop only sells running shoes.']}],
r2:{title:'My favourite place',intro:'Three people describe their favourite place.',sections:[
{h:'Kira',t:'My favourite place is a small beach near my grandparents\' village in Greece. There are no hotels, so it\'s very quiet. I\'ve been there every summer since I was a baby. I spend hours swimming and reading under the trees. The water is so clear you can see the bottom.'},
{h:'Mateo',t:'I love the top of the hill behind my town. It takes forty minutes to walk up, and from there you can see the whole town and the sea. I go there when I need to think. In autumn, I take my camera because the colours of the trees are amazing.'},
{h:'Fiona',t:'My favourite place is an old café in Edinburgh. It\'s full of books and old furniture, and they make the best hot chocolate in the city. I go there every Saturday with my best friend. We sit by the window and watch people walking past in the rain.'}],
q:['Who has been visiting their place since they were very young?','Who goes to their place to be alone with their thoughts?','Who visits their place with someone else?','Who has to walk to get to their place?','Who mentions a drink they like?','Who takes photos at their place?','Whose place has no tourist accommodation?'],
ans:[0,1,2,1,2,1,0]},
r3:{title:'The girl who saved a village',text:`When she was twelve, Aisha Bello from Nigeria noticed a big problem in her village: there was no clean water. "Every morning, my sisters and I walked two hours to get water from the river," she says. "It was dirty, and many children got ill."

Aisha decided to do something. She wrote a letter to a water charity, explaining the problem. "I didn't expect an answer," she says. "But three months later, they wrote back and said they wanted to help."

The charity sent engineers to build a well in the centre of the village. Aisha helped them by translating for the villagers. "I learnt a lot from them," she says. "They showed me how the pump worked and how to repair it."

Now the whole village has clean water, and fewer children are ill. The girls have more time to go to school because they don't have to walk to the river. "That's the best thing," says Aisha. "Education changes everything."

Aisha is now eighteen and studying engineering at university. "I want to build wells in other villages," she says. "There's still a lot of work to do."`,
q:[{q:'What was the problem in Aisha\'s village?',o:['The water made people sick.','There was no school.','The river was too far for the engineers.']},
{q:'How did Aisha feel when she sent her letter?',o:['She thought nobody would reply.','She was sure the charity would help.','She was angry with the charity.']},
{q:'How did Aisha help the engineers?',o:['She helped them to communicate.','She dug the well.','She paid for the pump.']},
{q:'What does Aisha think is the most important change?',o:['Girls can go to school more.','Fewer children are ill.','The village is cleaner.']},
{q:'What is Aisha doing now?',o:['studying','working for the charity','teaching in her village']}]},
r4:{title:'Rainbows',text:`A rainbow is a beautiful [19] of colours in the sky. You can see one when the sun shines through drops of rain.

Rainbows always [20] in the opposite part of the sky from the sun. So, if the sun is behind you and it is raining in front of you, you might see one.

A rainbow has seven colours: red, orange, yellow, green, blue, indigo and violet. Some people [21] the order of the colours with a special sentence.

Sometimes you can see two rainbows at the same time. The second one is not as bright, and its colours are in the [22] order.

In many countries there are old stories [23] rainbows. In Ireland, people say there is a pot of gold at the end of every rainbow. But nobody has ever [24] it!`,
opts:[['circle','round','ring road'],['appear','arrive','come out of'],['remember','remind','repeat'],['opposite','other side','back'],['about','of','for'],['found','looked','got']]},
r5:{title:'Holiday plans',text:`Hi Jack,

[25] are you going on holiday this summer? We're going to Scotland for two weeks. We're going to stay [26] a small cottage near a lake. My dad wants to go fishing every day, but I want to climb mountains!

Ollie

Hi Ollie,

Scotland sounds great! We're not going anywhere this year [27] my mum has a new job and she can't take any holidays. But I don't mind. I'm going to a football camp [28] two weeks in July.

Have [29] fun in Scotland! Don't forget to take a raincoat – it rains a lot there. And send me some photos of the mountains. I've never [30] there.

Jack`,
ans:[['where'],['in','at'],['because'],['for'],['lots','a','great'],['been']]},
w6:{ctx:'Your English friend, Lee, is going to visit your town. Write an email to Lee. In your email:',notes:['say what the weather is like at the moment','suggest a place to visit','say what clothes Lee should bring']},
w7:['A family is driving in a car to the beach. They are singing.','The car stops. There is smoke coming from the engine.','The family is having a picnic next to the car on the side of the road.'],
l1:[
{q:'What does the man order?',o:['a cheese sandwich','a chicken sandwich','a salad'],script:[['W','What would you like?'],['M','A chicken sandwich, please.'],['W','Sorry, there\'s no chicken left. We\'ve got cheese or a salad.'],['M','Cheese, then.']]},
{q:'Where is the boy\'s school bag?',o:['under the bed','in the car','behind the door'],script:[['W','Have you got your school bag? The bus is coming!'],['M','I can\'t find it. It\'s not behind the door.'],['W','Did you leave it in the car?'],['M','No… oh, here it is, under my bed.']]},
{q:'What is the woman\'s job?',o:['a hairdresser','a photographer','a dentist'],script:[['M','Are you still working as a photographer?'],['W','No, I gave that up. I cut people\'s hair now. I\'ve got my own salon.']]},
{q:'How many days is the girl going to be away?',o:['five','three','seven'],script:[['M','How long is your school trip? A week?'],['W','No, we leave on Monday and come back on Friday. So, five days.']]},
{q:'What will the weather be like this afternoon?',o:['stormy','sunny','foggy'],script:[['M','It\'s sunny now, but the forecast says there will be thunder and lightning this afternoon. So don\'t go to the beach.']]}],
l2:{intro:'You will hear a man talking about a photography competition.',g:'M',head:'Photography Competition',script:`This year's photography competition is open to everyone under eighteen. The theme is "My street". We want to see photos of the place where you live. You can send up to three photos. The closing date is the fourteenth of October. The judge this year is a famous photographer called Ellen Rhodes – that's R-H-O-D-E-S. The winner will get a new camera, and all the best photos will go in an exhibition at the town library. Please send your photos to photos@townnews.com.`,
sents:['Theme: My ___','Number of photos: up to ___','Closing date: ___ October','Judge: Ellen ___','Prize: a new ___'],
ans:[['street'],['3','three'],['14th','14','fourteenth'],['rhodes'],['camera']]},
l3:{intro:'You will hear Sophie talking to her friend David about a school concert.',names:{W:'Sophie',M:'David'},script:[
['M','Sophie, are you playing in the school concert?'],['W','Yes, I\'m playing the flute. I\'m really nervous.'],
['M','When is it?'],['W','Next Thursday, at seven in the evening. It\'s in the school hall.'],
['M','Can anyone come?'],['W','Yes. Tickets are three pounds. The money is for new instruments.'],
['M','Who else is playing?'],['W','The school orchestra, and some students are singing. My brother is playing the piano.'],
['M','I\'ll come and watch. Is your mum coming?'],['W','She can\'t, she\'s working. But my grandparents are coming.']],
q:[{q:'What instrument does Sophie play?',o:['the flute','the piano','the violin']},
{q:'When is the concert?',o:['on Thursday evening','on Thursday afternoon','next weekend']},
{q:'What will the ticket money pay for?',o:['instruments','a school trip','the hall']},
{q:'Who is Sophie\'s brother?',o:['a piano player','a singer','a member of the orchestra']},
{q:'Who will come to watch Sophie?',o:['her grandparents','her mum','her brother']}]},
l4:[
{ctx:'You hear a girl talking about her new bike.',q:'What does she say about it?',o:['It is fast.','It is heavy.','It is uncomfortable.'],script:[['W','It\'s really light and comfortable, but the best thing is the speed. I get to school in ten minutes now!']]},
{ctx:'You hear a man calling a hotel.',q:'Why is he calling?',o:['to ask about parking','to book a room','to complain about a room'],script:[['M','Hello, I\'ve got a booking for tomorrow night. I\'m coming by car. Is there anywhere I can leave it at the hotel?']]},
{ctx:'You hear two friends talking about a party.',q:'Why didn\'t the boy go?',o:['He had to work.','He was ill.','He wasn\'t invited.'],script:[['W','Why weren\'t you at Jane\'s party?'],['M','I wanted to go, but my boss asked me to work late. I didn\'t finish until eleven.']]},
{ctx:'You hear a woman talking about a museum.',q:'What did she enjoy most?',o:['the old clothes','the paintings','the café'],script:[['W','The paintings were nice and the café was good, but my favourite room had clothes from the 1800s. They were beautiful.']]},
{ctx:'You hear a boy talking to his mother.',q:'What does he want?',o:['permission to go out','some money','help with homework'],script:[['M','Mum, my homework is finished. Can I go to Josh\'s house for an hour? I\'ll be back for dinner.']]}],
l5:{intro:'You will hear Alice talking to her friend about her classmates\' weekend jobs. Where does each person work?',names:{W:'Alice',M:'Friend'},script:[
['M','Do your classmates have weekend jobs, Alice?'],
['W','Some of them. Emma works in a hairdresser\'s. She washes people\'s hair.'],
['M','And Leo?'],['W','Leo works in a supermarket. He puts things on the shelves.'],
['M','What about Rosa?'],['W','Rosa works at a riding school. She looks after the horses.'],
['M','And Finn?'],['W','He used to work in a café, but now he works at the cinema.'],
['M','And Grace?'],['W','Grace teaches swimming to children at the sports centre.']],
items:['Emma','Leo','Rosa','Finn','Grace'],opts:['hairdresser\'s','supermarket','riding school','cinema','sports centre','café','bookshop','hotel']},
s:{p1:['What is the weather like today?','What is your favourite season?','What do you like doing when it rains?','Where did you go on your last holiday?','Please tell me something about your favourite place.'],
p2:{topic:'things to do on a rainy day',ideas:['watching films','playing board games','baking a cake','reading','going to a museum'],q:['Do you think board games are fun?','Which of these things do you like doing best?','What did you do the last time it rained?','Do you prefer sunny or rainy weather?']}}
});
