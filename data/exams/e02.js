EXAM({
r1:[
{t:'<b>RESTAURANT</b><br>Tables available for lunch without booking. Booking necessary for dinner.',o:['You need to book if you want to eat in the evening.','You cannot have lunch without a booking.','The restaurant is only open for dinner.']},
{t:'Dad – I\'m at Lucy\'s. Her mum will drive me home after dinner, so don\'t pick me up. Ella',q:'What does Ella want her dad to know?',o:['She doesn\'t need him to collect her.','She will have dinner at home.','She wants him to drive Lucy home.']},
{t:'<b>PHONE SHOP</b><br>Bring your old phone and get 20% off a new one.',o:['You will pay less for a new phone if you give the shop your old one.','The shop repairs old phones for a small price.','New phones are 20% cheaper every day.']},
{t:'<b>Message from Carla:</b> Yoga is in Room 2 today, not Room 5. They\'re painting Room 5.',o:['The class is in a different place today.','The yoga class has been cancelled.','Room 2 is being painted.']},
{t:'<b>TRAIN STATION</b><br>Platform 3 closed. Trains to London leave from Platform 4.',o:['Passengers for London should go to Platform 4.','There are no trains to London today.','Platform 4 is closed.']},
{t:'Max, can you take the dog for a walk when you get home? I won\'t be back until seven. Thanks! Mum',q:'Mum is asking Max to',o:['do something for her.','come home at seven.','buy something for the dog.']}],
r2:{title:'My favourite teacher',intro:'Three people talk about a teacher they remember.',sections:[
{h:'Daniel',t:'Mr Hughes taught me history when I was fifteen. Before him, I thought history was boring, but he told stories that made the past come alive. He sometimes dressed up as famous people from the past! Because of him, I studied history at university, and now I work in a museum.'},
{h:'Rosa',t:'My favourite teacher was Miss Clark, my primary school teacher. I was very shy and didn\'t speak much in class. She gave me small jobs, like giving out books, so I started to feel more confident. I\'m still in touch with her – we send each other cards every Christmas.'},
{h:'Sam',t:'Mrs Patel was my maths teacher. Maths was always difficult for me, and I failed lots of tests. She stayed after school twice a week to help me for free. In the end I passed my final exam with a good mark. I never forgot her kindness, and now I\'m a maths teacher too!'}],
q:['Who chose a job connected to the subject their teacher taught?','Who says the teacher helped them to feel less shy?','Who found a subject difficult?','Whose teacher wore special clothes in class?','Who still has contact with the teacher?','Whose teacher gave them extra lessons?','Who changed their opinion about a subject?'],
ans:[0,1,2,0,1,2,0]},
r3:{title:'The girl who cleans beaches',text:`Every Saturday morning, eleven-year-old Mia Thompson goes to the beach near her home in Cornwall. But she doesn't go to swim or play. She goes to pick up rubbish.

It all started two years ago, when Mia found a bird with plastic around its neck. "It was really sad," she says. "I helped it, but I knew there were many more animals in danger." The next weekend, she went back to the beach with a bag and collected rubbish for an hour.

At first, it was only Mia and her dad. Then Mia made a video about the problem and put it online. "I didn't expect many people to see it," she says. "But thousands watched it, and lots of people from my town wanted to help."

Now about forty people join her every week. They have collected more than two tonnes of rubbish. Mia's school has also stopped using plastic bottles, and students now bring their own water bottles.

Mia says the work isn't always fun. "In winter it's cold and windy, and sometimes I'd prefer to stay in bed!" But she has no plans to stop. "The beach is so much cleaner now. That makes me really happy."`,
q:[{q:'Why did Mia start cleaning the beach?',o:['She saw an animal in trouble.','Her school asked her to.','Her dad wanted her to.']},
{q:'How did Mia feel about her video?',o:['surprised that so many people watched it','worried about putting it online','disappointed with the result']},
{q:'How many people help Mia now?',o:['about forty','only her dad','thousands']},
{q:'What has changed at Mia\'s school?',o:['Students don\'t use plastic bottles there.','Students clean the beach with Mia.','Students make videos about the environment.']},
{q:'What does Mia say about the work?',o:['It is sometimes hard but she will continue.','She only does it in summer.','She wants to stop soon.']}]},
r4:{title:'Penguins',text:`Penguins are birds, but they cannot fly. [19], they are excellent swimmers. They use their wings to move through the water very quickly.

Most penguins live in the south of the world, in places like Antarctica, where it is extremely cold. Their thick feathers and a layer of fat [20] them warm.

Penguins live in large groups called colonies. Some colonies have [21] than a million birds! Penguins eat fish and other sea animals, and they can [22] under water for up to twenty minutes.

Some types of penguin are now in [23] because the sea is getting warmer and there are fewer fish. Scientists are working hard to [24] them.`,
opts:[['However','Because','Although'],['keep','make','hold'],['more','most','much'],['stay','wait','last'],['danger','risk','trouble'],['protect','defend','guard']]},
r5:{title:'Thank you',text:`Dear Aunt Jane,

Thank you so much [25] the lovely present. I really love the bag – it's my favourite colour! I took it [26] school today and all my friends liked it.

My birthday party was great. I invited ten friends and we went bowling. After [27], we had pizza at my house. My dad made a chocolate cake, [28] it was a bit burnt! Everyone ate it anyway.

When are you coming to visit us? Mum says you might come in the summer. I hope so, because I haven't seen you [29] a long time. We could go to the beach together.

Lots of love,
Hannah

P.S. Did you get the photos I sent you? I'll send [30] more next week.`,
ans:[['for'],['to'],['that'],['but'],['for'],['some']]},
w6:{ctx:'Your English friend, Charlie, is coming to your house for dinner on Friday. Write an email to Charlie. In your email:',notes:['tell Charlie what time to come','say what you are going to cook','tell Charlie how to get to your house']},
w7:['A family is putting a tent up near a lake. The sun is shining.','In the night, there is a big storm. The tent is flying away.','The family is sleeping in their car. They look tired but are laughing.'],
l1:[
{q:'What will the boy do on Saturday?',o:['go to a football match','go shopping','visit his grandparents'],script:[['W','Are you going to your grandparents\' on Saturday?'],['M','No, we went last weekend. I wanted to go shopping for new trainers, but my uncle got me a ticket for the football, so I\'m going to that.']]},
{q:'How much is a ticket for the museum?',o:['£4','£12','£8'],script:[['M','How much is it to get in?'],['W','Adults are twelve pounds, and children under sixteen are half price.'],['M','I\'m fifteen.'],['W','Then it\'s eight pounds… oh no, sorry, half price is six. Wait, children\'s tickets are four pounds today because it\'s a school holiday.'],['M','Great, one please.']]},
{q:'Where is the woman\'s phone?',o:['in the car','in the kitchen','in her bag'],script:[['W','I can\'t find my phone anywhere. It\'s not in my bag.'],['M','Did you leave it in the kitchen?'],['W','No, I looked there… Oh, I know! I was using it for the map. It\'s in the car.']]},
{q:'Which sport does the girl do now?',o:['swimming','tennis','basketball'],script:[['M','Do you still play tennis?'],['W','No, I stopped last year. I tried basketball, but I didn\'t like it. Now I go swimming three times a week.']]},
{q:'What time will the film start?',o:['8.30','8.00','9.00'],script:[['M','The film starts at eight, right?'],['W','It usually does, but tonight there\'s a short talk by the director first, so the film starts thirty minutes later.']]}],
l2:{intro:'You will hear a woman talking about a school trip.',g:'W',head:'School trip',script:`Hello everyone. I want to give you some information about next week's school trip. We're going to visit Brockwell Castle. That's B-R-O-C-K-W-E-L-L. The trip is on Thursday the fifteenth of May. The coach will leave from the school car park at eight o'clock in the morning. We will have lunch in the castle gardens, so please bring a packed lunch. The castle has lots of steps, so wear comfortable shoes. The trip costs twelve pounds, and please give the money to your class teacher by Monday.`,
sents:['Place: ___ Castle','Date: Thursday ___ May','Coach leaves from: the school ___','Wear comfortable: ___','Cost: £___'],
ans:[['brockwell'],['15th','15','fifteenth'],['car park'],['shoes'],['12','twelve']]},
l3:{intro:'You will hear Jack talking to his friend Kate about a new café.',names:{M:'Jack',W:'Kate'},script:[
['W','Hi Jack. Have you been to the new café in Market Street?'],['M','Yes, I went on Sunday with my sister. It\'s really nice.'],
['W','What did you have?'],['M','I wanted a hot chocolate, but they didn\'t have any, so I had a strawberry milkshake. It was delicious.'],
['W','Is it expensive?'],['M','Not really. It\'s cheaper than the café near the station. And students get ten per cent off.'],
['W','What\'s it like inside?'],['M','It\'s small, but there are lots of plants and old books you can read. It\'s very relaxing. The only problem is the music – it\'s a bit too loud.'],
['W','Shall we go there after school tomorrow?'],['M','I\'ve got football practice tomorrow. How about Friday?'],['W','Friday\'s fine.']],
q:[{q:'Who did Jack go to the café with?',o:['his sister','his mother','his friend Kate']},
{q:'What did Jack drink?',o:['a milkshake','a hot chocolate','a coffee']},
{q:'What does Jack say about the prices?',o:['They are lower than at another café.','They are too high for students.','They are the same as other cafés.']},
{q:'What doesn\'t Jack like about the café?',o:['the music','the size','the plants']},
{q:'When will Jack and Kate go to the café?',o:['on Friday','tomorrow','on Sunday']}]},
l4:[
{ctx:'You hear a woman talking about her weekend.',q:'What did she do on Saturday?',o:['She went for a walk.','She stayed at home.','She went to a party.'],script:[['W','I was going to go to Mark\'s party on Saturday, but I was too tired. In the end I went for a long walk in the hills. It was lovely.']]},
{ctx:'You hear a man talking to a receptionist.',q:'What does the man want?',o:['to change his room','to book a table','to check out early'],script:[['M','Excuse me, my room is right next to the lift and it\'s very noisy. Is there another room I could move to, please? Something quieter?']]},
{ctx:'You hear two friends talking about a party.',q:'What is the problem?',o:['They don\'t know the address.','They are late.','They forgot the present.'],script:[['W','Have you got the present?'],['M','Yes, it\'s here. But where exactly is the party? I didn\'t write down the address.'],['W','Neither did I! Let\'s call Sarah.']]},
{ctx:'You hear a girl talking about learning the piano.',q:'Why did she start?',o:['Her friend played.','Her parents wanted her to.','She heard a concert.'],script:[['W','My parents never made me do music. But my best friend Amy played the piano, and I loved listening to her. So I asked for lessons too.']]},
{ctx:'You hear a man talking about his new flat.',q:'What does he like most?',o:['the view','the kitchen','the location'],script:[['M','It\'s a bit far from the centre and the kitchen is tiny. But from the living room you can see the whole city and the mountains. It\'s beautiful.']]}],
l5:{intro:'You will hear Ben talking to his mum about his friends\' holidays. Where is each person going on holiday?',names:{M:'Ben',W:'Mum'},script:[
['W','So, Ben, where are your friends going this summer?'],
['M','Well, Oliver is going to France. He\'s staying with his cousins in Paris.'],
['W','Lovely. What about Sara?'],['M','Sara wanted to go to Italy, but it was too expensive. So she\'s going to Scotland with her parents. They\'re going walking.'],
['W','And Harry?'],['M','Harry\'s going to Spain. His family have a small house by the sea.'],
['W','What about Lucy?'],['M','Lucy\'s going to Greece. She goes every year.'],
['W','And Josh?'],['M','He isn\'t going anywhere this year. His dad\'s working, so he\'s staying here. But he might go to Ireland in October.']],
items:['Oliver','Sara','Harry','Lucy','Josh'],opts:['France','Scotland','Spain','Greece','nowhere','Italy','Ireland','Portugal']},
s:{p1:['What\'s your name?','How old are you?','What do you usually have for breakfast?','How often do you see your friends?','Please tell me something about your favourite teacher.'],
p2:{topic:'ways of travelling',ideas:['by plane','by bike','by train','by car','on foot'],q:['Do you think travelling by plane is fun?','Which of these ways of travelling do you like best?','How do you usually get to school or work?','Do you like long journeys? Why or why not?']}}
});
