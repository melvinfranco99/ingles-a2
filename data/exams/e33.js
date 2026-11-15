EXAM({
r1:[
{t:'<b>DOCTOR\'S SURGERY</b><br>Please switch off your mobile phone in the waiting room.',o:['Phones should not be used while you wait.','You can make calls in the waiting room.','The doctor will phone you.']},
{t:'Hi Fran, I\'ve got a bad cold, so I won\'t come to the gym tonight. Maybe next week? Ella',q:'Why can\'t Ella go to the gym?',o:['She isn\'t well.','She is too busy.','The gym is closed.']},
{t:'<b>CHEMIST</b><br>Open late every night until 10 p.m.',o:['You can buy medicine in the evening.','The chemist opens at 10 p.m.','The chemist is closed at night.']},
{t:'<b>SWIMMING POOL</b><br>Please shower before entering the pool.',o:['You must wash before you swim.','There are no showers here.','Showers are after swimming only.']},
{t:'Leo – your dentist appointment has changed to Friday at 4. I\'ll pick you up from school. Dad',q:'Dad is telling Leo',o:['about a new time for an appointment.','to go to the dentist alone.','he can\'t pick him up.']},
{t:'<b>HOSPITAL</b><br>Visiting hours: 2–4 p.m. and 6–8 p.m.',o:['You can only visit patients at certain times.','The hospital closes at 8 p.m.','Visitors can come at any time.']}],
r2:{title:'Healthy habits',intro:'Three people talk about something they do to stay healthy.',sections:[
{h:'Nadia',t:'I drink two litres of water every day. I used to drink lots of fizzy drinks, but I had problems with my teeth. Now I carry a bottle everywhere. I feel much better, and my skin looks better too. I still have a fizzy drink at parties, though!'},
{h:'Owen',t:'I go to bed at ten o\'clock every night, even at weekends. My friends think I\'m boring, but I need eight hours of sleep. When I sleep well, I can concentrate at work and I don\'t feel stressed. I don\'t look at my phone in bed.'},
{h:'Rita',t:'I eat five pieces of fruit and vegetables every day. My grandmother lived to a hundred, and she always said that was her secret. I grow tomatoes and lettuce on my balcony. It\'s cheaper than buying them, and they taste better.'}],
q:['Who changed a habit because of a health problem?','Who follows advice from a family member?','Who keeps the same routine every day of the week?','Who produces some of their own food?','Who sometimes breaks their own rule?','Who avoids using technology at a certain time?','Who saves money with their habit?'],
ans:[0,2,1,2,0,1,2]},
r3:{title:'The school without homework',text:`Two years ago, Greenfield Secondary School decided to stop giving students homework. The head teacher, Mr Ahmed, says it was the best decision he has ever made.

"Our students were tired and stressed," he explains. "Many of them had three hours of homework every night. They didn't have time for sport, hobbies or their families."

Now, students do all their work at school. The school day is thirty minutes longer, and there is a special study hour in the afternoon when teachers are there to help.

Not everyone was happy at first. "Some parents were worried that their children wouldn't learn enough," says Mr Ahmed. "But our exam results are actually better now."

Students love the new system. "I have time to play football and see my friends," says fourteen-year-old Sara. "And if I don't understand something, I can ask a teacher immediately. At home, there was nobody to help me."

Students are still encouraged to read at home, though. "Reading is different," says Mr Ahmed. "It's not work – it's a pleasure."`,
q:[{q:'Why did the school stop giving homework?',o:['Students had too much stress.','Teachers didn\'t have time to mark it.','Parents asked them to.']},
{q:'What has changed about the school day?',o:['It is longer.','It starts later.','It has fewer lessons.']},
{q:'What were some parents worried about?',o:['their children\'s learning','the longer day','the cost']},
{q:'What does Sara like about the new system?',o:['She can get help quickly.','She has fewer lessons.','She doesn\'t have to read.']},
{q:'What does Mr Ahmed say about reading?',o:['Students should still do it at home.','It is a kind of homework.','It isn\'t important.']}]},
r4:{title:'Sleep',text:`Everyone needs sleep, but how much? Most adults need between seven and nine hours a night. Teenagers need even more – about nine hours. But many teenagers don't get [19] sleep.

When we sleep, our body repairs itself and our brain [20] what we have learnt during the day. That's why it's important to sleep well before an exam.

If we don't get enough sleep, we can feel tired, angry and [21] to concentrate. Over a long time, it can also make us ill.

So how can you sleep better? Doctors say you should go to bed at the same time every night. Don't drink coffee in the evening, and [22] off your phone at least an hour before bed. The light from screens makes it [23] to fall asleep. A dark, quiet and cool bedroom also [24].`,
opts:[['enough','plenty','many'],['remembers','reminds','memories'],['unable','impossible','difficult'],['turn','put','make'],['harder','heavier','stronger'],['helps','aids up','supports for']]},
r5:{title:'Feeling better',text:`Hi Grandma,

Thank you for the lovely card. I'm feeling much better now. I was in bed [25] three days with a high temperature, but the doctor said it was just flu.

Mum looked [26] me really well. She made me chicken soup every day, just like you used to make [27] her when she was a child!

I'm going back to school on Monday. I've missed a lot of lessons, [28] my friend Ben has brought me all the homework. I've got so much [29] do!

When are you coming to visit? I'd love to see you. Maybe we can go to the park together when the weather gets better.

Lots of love,
Jamie

P.S. Mum says [30] you!`,
ans:[['for'],['after'],['for'],['but','and','so'],['to'],['hi','hello']]},
w6:{ctx:'You were ill and missed school yesterday. Write an email to your English classmate, Sam. In your email:',notes:['say why you weren\'t at school','ask what you missed','ask Sam to help you']},
w7:['A boy is eating lots of sweets and cake at a party.','At night, he has a stomach ache in bed.','The next day, the boy is eating an apple. His mother is smiling.'],
l1:[
{q:'What\'s wrong with the woman?',o:['She has a headache.','She has a sore throat.','She has a cold.'],script:[['M','You don\'t look well. Have you got a cold?'],['W','No, my throat\'s fine too. It\'s my head. I\'ve had a terrible headache all day.']]},
{q:'When is the boy\'s appointment?',o:['Wednesday','Monday','Tuesday'],script:[['W','Is your appointment on Monday?'],['M','It was, but they changed it. It\'s on Wednesday now. Not Tuesday – I have football then.']]},
{q:'What does the doctor tell the man to do?',o:['rest','take exercise','eat more'],script:[['W','You need to stay at home and rest for a few days. No sport and no work until Friday.']]},
{q:'How many times a day must the girl take the medicine?',o:['three','two','four'],script:[['M','Take this twice a day?'],['W','No, three times. Morning, afternoon and evening, with food.']]},
{q:'Where did the man hurt himself?',o:['his foot','his hand','his knee'],script:[['W','Did you hurt your knee playing football?'],['M','No, I dropped a heavy box on my foot at work.']]}],
l2:{intro:'You will hear a woman talking about a new sports centre.',g:'W',head:'Lakeside Sports Centre',script:`The new Lakeside Sports Centre is now open. We have a twenty-five metre swimming pool, a gym and four tennis courts. There are also classes in yoga, dance and boxing. Adult membership costs thirty pounds a month, and it's half price for students. The centre is open from six in the morning until ten at night. There's a café on the first floor that sells healthy snacks. For your first visit, bring a photo so we can make your membership card.`,
sents:['Length of pool: ___ metres','Number of tennis courts: ___','Adult membership: £___ a month','Café is on the ___ floor','Bring a ___ for your card'],
ans:[['25','twenty-five'],['4','four'],['30','thirty'],['first','1st'],['photo','photograph']]},
l3:{intro:'You will hear Mike talking to his friend Sue about breaking his leg.',names:{M:'Mike',W:'Sue'},script:[
['W','Mike! What happened to your leg?'],['M','I broke it skiing in France. On the last day!'],
['W','Oh no. Did it hurt?'],['M','Terribly. A helicopter took me to the hospital.'],
['W','Wow! How long do you have to wear that?'],['M','Six weeks. It\'s really hard to get around.'],
['W','What about work?'],['M','I can work from home on my computer, so that\'s OK.'],
['W','What do you miss most?'],['M','Playing football with my friends on Sunday. But I can watch!']],
q:[{q:'Where did Mike break his leg?',o:['in France','in Switzerland','at home']},
{q:'How did Mike get to hospital?',o:['by helicopter','by car','by ambulance']},
{q:'How long will Mike wear the plaster?',o:['six weeks','six days','two months']},
{q:'What will Mike do about work?',o:['work at home','stop working','go to the office']},
{q:'What does Mike miss most?',o:['playing football','skiing','going to work']}]},
l4:[
{ctx:'You hear a woman talking about her new diet.',q:'What has she stopped eating?',o:['sugar','meat','bread'],script:[['W','I still eat meat and bread, but no more sugar. No cakes, no chocolate, nothing sweet. It\'s hard!']]},
{ctx:'You hear a man talking at a gym.',q:'Who is he?',o:['a trainer','a customer','a doctor'],script:[['M','OK, today we\'ll start with ten minutes on the bike. Then I\'ll show you how to use the weights safely.']]},
{ctx:'You hear two friends talking.',q:'How does the girl feel?',o:['tired','ill','bored'],script:[['M','Are you OK? You look ill.'],['W','I\'m fine, I just didn\'t sleep much. I was studying until two.']]},
{ctx:'You hear a boy talking about a sports day.',q:'What did he win?',o:['a running race','a swimming race','a football match'],script:[['M','I didn\'t swim and our football team lost. But I came first in the hundred metres!']]},
{ctx:'You hear a woman calling a doctor\'s surgery.',q:'Why is she calling?',o:['to make an appointment for her son','to cancel an appointment','to ask about medicine'],script:[['W','Hello, my son has a very high temperature. Can the doctor see him this morning?']]}],
l5:{intro:'You will hear Jenny talking to her friend about what her family members do to stay healthy. What does each person do?',names:{W:'Jenny',M:'Friend'},script:[
['M','What does your family do to stay healthy, Jenny?'],
['W','My mum goes swimming before work.'],
['M','And your dad?'],['W','Dad walks to work. It takes him forty minutes.'],
['M','What about your brother?'],['W','Sam plays basketball. He\'s really tall.'],
['M','And your grandpa?'],['W','He used to run, but now he does yoga.'],
['M','And you?'],['W','I eat lots of fruit and I ride my bike.']],
items:['Mum','Dad','Sam','Grandpa','Jenny'],opts:['swimming','walking','basketball','yoga','cycling','running','tennis','dancing']},
s:{p1:['Do you think you have a healthy life?','What healthy food do you like?','How many hours do you sleep?','What did you eat yesterday?','Please tell me something about how you stay healthy.'],
p2:{topic:'healthy habits',ideas:['eating fruit','drinking water','sleeping well','doing sport','walking to school'],q:['Do you think sleeping well is important?','Which of these healthy habits do you have?','Is it easy to eat healthy food?','What unhealthy things do young people do?']}}
});
