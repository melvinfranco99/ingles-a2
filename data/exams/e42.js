EXAM({
r1:[
{t:'<b>PLANETARIUM</b><br>Shows every hour. Children under 4 not allowed.',o:['Very young children can\'t see the shows.','There is one show a day.','The planetarium is only for children.']},
{t:'Hi Dan, there\'s a meteor shower tonight! Want to watch it from the hill at 11? Bring a blanket. Ray',q:'What does Ray suggest?',o:['watching something in the sky together','going to bed early','buying a blanket']},
{t:'<b>SCIENCE MUSEUM</b><br>Try our space station! Ages 8 and over.',o:['Children must be at least eight to try it.','Only adults can visit.','The space station is for young children.']},
{t:'<b>OBSERVATORY</b><br>Open on clear nights only. Check our website.',o:['It may be closed if there are clouds.','It is open every night.','It is only open during the day.']},
{t:'Sam – your telescope arrived today. It\'s in the hall. Don\'t open it until Dad gets home! Mum',q:'Mum is telling Sam',o:['to wait for his dad.','to buy a telescope.','to go to the hall.']},
{t:'<b>SCHOOL SCIENCE CLUB</b><br>This week: making rockets! Bring an empty plastic bottle.',o:['Students need to bring something to the club.','The club is cancelled this week.','The club sells bottles.']}],
r2:{title:'Looking at the stars',intro:'Three people talk about their interest in space.',sections:[
{h:'Clara',t:'I\'ve loved the stars since my dad showed me the moon through a telescope when I was five. Now I have my own telescope, and I go out on clear nights to look at planets. I\'ve seen the rings of Saturn! I live in the countryside, so the sky is very dark.'},
{h:'Raj',t:'I work at a space centre. I help to design satellites that go around the Earth. It\'s exciting when one of our satellites goes into space. I watched the last launch on a big screen with my whole team. Everyone cheered!'},
{h:'Gemma',t:'I\'m not a scientist, but I love reading science fiction books about space. My favourite stories are about people living on Mars. I don\'t think I\'d like to go to space myself, though – I get sick on boats, so I\'d probably get sick in a rocket!'}],
q:['Whose interest started with a parent?','Who wouldn\'t want to travel to space?','Who has a job connected to space?','Who has seen part of a planet?','Who enjoys stories about life on another planet?','Who celebrated with their colleagues?','Who says where they live helps their hobby?'],
ans:[0,2,1,0,2,1,0]},
r3:{title:'A day in space',text:`What is it like to live on the International Space Station? Astronaut Tim Peake spent six months there, and he says it was the experience of his life.

"The first thing you notice is that everything floats," Tim says. "You can't just put something down – it flies away! Everything has to be tied down or stuck with tape."

Astronauts work about ten hours a day, doing science experiments. They also have to exercise for two hours every day. "Without gravity, your muscles and bones get weak," Tim explains. "So we run on a special machine with straps to hold us down."

Eating is also different. Most food comes in packets, and astronauts add water to it. "The food was OK," says Tim. "But I really missed fresh bread and a cup of tea."

Sleeping is strange too. Astronauts sleep in sleeping bags tied to the wall. "It's actually very comfortable," Tim says.

The best part? "Looking out of the window at the Earth," says Tim. "We went round the Earth sixteen times a day, so we saw sixteen sunrises every day. It was beautiful."`,
q:[{q:'What does Tim say about objects on the station?',o:['They must be fixed in place.','They are very heavy.','They often break.']},
{q:'Why do astronauts exercise?',o:['to keep their bodies strong','to have fun','to prepare for going home']},
{q:'What did Tim miss?',o:['some kinds of food and drink','his bed','his friends']},
{q:'How does Tim describe sleeping?',o:['comfortable','difficult','noisy']},
{q:'What did Tim like most?',o:['the view of the Earth','the experiments','the food']}]},
r4:{title:'Mars',text:`Mars is the fourth planet from the Sun. It is often [19] the Red Planet because of its red colour. The red comes from iron in the rocks, which is the same as rust.

Mars is much smaller than the Earth, and it is also much colder. The average temperature is about minus sixty degrees. There is very [20] air, and people can't breathe it.

Mars has the biggest volcano in the solar system. It is called Olympus Mons, and it is about three times [21] than Mount Everest.

Scientists have [22] many robots to Mars to study it. They have found that there was water on Mars a long time ago. This means that there [23] have been life there. Some companies are planning to send people to Mars in the future. The journey would [24] about seven months!`,
opts:[['called','named as','said'],['little','few','small'],['higher','longer','more'],['sent','put','given'],['might','should','must'],['take','spend','pass']]},
r5:{title:'Science fair',text:`Hi Ellie,

Our school science fair was yesterday, and my project won [25] prize! I made a model of the solar system with all the planets going around the sun. It took me three weeks to make.

The judges asked me lots of questions [26] the planets. I was a bit nervous, but I knew all the answers! My prize is a visit to the space centre next month.

[27] did your project go? You were making a robot, weren't you? Did it work?

I'm going to bring my model to your house [28] the weekend so you can see it. It's quite big, so my dad will have to help me carry [29].

Let me know [30] you're free on Saturday or Sunday.

Love,
Josh`,
ans:[['first','a','the'],['about'],['how'],['at','on','this','over'],['it'],['if','when','whether']]},
w6:{ctx:'You visited a science museum with your class. Write an email to your English friend, Nicky. In your email:',notes:['say when you went','say what you saw','say what you learnt']},
w7:['A boy is looking at the stars through a telescope in his garden.','He sees a strange light moving in the sky.','The next morning, he reads in the newspaper that it was a satellite.'],
l1:[
{q:'What will the boy\'s project be about?',o:['the moon','Mars','the sun'],script:[['W','Is your project about Mars?'],['M','Someone else chose Mars. I wanted the sun, but it\'s too difficult. So I\'m doing the moon.']]},
{q:'When is the best time to see the stars?',o:['after midnight','at 10 p.m.','at sunset'],script:[['M','Can we see the stars at ten?'],['W','It\'s still too light then. After midnight is best.']]},
{q:'How much is the planetarium for students?',o:['£6','£9','£16'],script:[['W','How much is it for students?'],['M','Adults are nine pounds, but students are six.']]},
{q:'What does the girl want to be?',o:['an astronaut','a scientist','a pilot'],script:[['M','Do you want to be a scientist like your mum?'],['W','No. And not a pilot either. I want to go to space!']]},
{q:'What did the man buy?',o:['a telescope','a book about space','a map of the stars'],script:[['W','Did you buy a book about space?'],['M','I\'ve got lots of books. I bought a telescope!']]}],
l2:{intro:'You will hear a man talking about a space exhibition.',g:'M',head:'Space Exhibition',script:`Welcome to our new space exhibition. Here you can see a real rocket engine, and a piece of rock from the moon which is four billion years old. In the next room, you can try on an astronaut's suit – it weighs fifty kilos! There's also a cinema where you can watch a film about the first moon landing in 1969. The exhibition will be here until the end of September. Tickets are twelve pounds for adults and eight pounds for children.`,
sents:['You can see a rock from the ___','Weight of astronaut suit: ___ kg','First moon landing: ___','Exhibition ends: end of ___','Child ticket: £___'],
ans:[['moon'],['50','fifty'],['1969'],['september'],['8','eight']]},
l3:{intro:'You will hear Anna talking to her friend Ben about a trip to a planetarium.',names:{W:'Anna',M:'Ben'},script:[
['M','Anna, how was the planetarium?'],['W','Fantastic! I went with my little brother for his birthday.'],
['M','What did you see?'],['W','A show about the planets. You lie back and the stars are all over the ceiling.'],
['M','Did your brother like it?'],['W','He loved it, but he fell asleep in the middle! It was very dark and warm.'],
['M','Did you learn anything?'],['W','Yes! A day on Venus is longer than a year on Venus!'],
['M','Wow. Would you go again?'],['W','Yes, there\'s a new show about black holes next month.']],
q:[{q:'Why did Anna go to the planetarium?',o:['for her brother\'s birthday','for a school project','for her own birthday']},
{q:'Where were the stars?',o:['on the ceiling','on a screen','outside']},
{q:'What happened to Anna\'s brother?',o:['He fell asleep.','He was frightened.','He got lost.']},
{q:'What did Anna learn about?',o:['Venus','Mars','black holes']},
{q:'What will the next show be about?',o:['black holes','the moon','the sun']}]},
l4:[
{ctx:'You hear a teacher talking to students.',q:'What should students do?',o:['watch the sky tonight','read a chapter','write a report'],script:[['W','Tonight there\'s a full moon. If it\'s not cloudy, go outside at nine and look at it. We\'ll talk about it tomorrow.']]},
{ctx:'You hear a man talking about a TV programme.',q:'What did he think of it?',o:['It was interesting.','It was too long.','It was boring.'],script:[['M','I didn\'t know anything about space before, but I learnt so much. I couldn\'t stop watching!']]},
{ctx:'You hear two friends talking.',q:'What do they decide to do?',o:['go to the science museum','go to the cinema','go to the park'],script:[['W','Shall we see the new space film?'],['M','I\'ve seen it. What about the science museum? There\'s a new space exhibition.'],['W','OK!']]},
{ctx:'You hear a girl talking about a competition.',q:'What did she win?',o:['a trip to a space centre','a telescope','a book'],script:[['W','I came first in the science competition! The prize is a day at the space centre in Florida!']]},
{ctx:'You hear a boy talking about his bedroom.',q:'What is on his ceiling?',o:['stars that shine in the dark','a map of the world','a poster of a rocket'],script:[['M','My dad put lots of little stars on my ceiling. When I turn off the light, they shine!']]}],
l5:{intro:'You will hear Leo talking to his teacher about which planets his classmates chose for a project. Which planet did each person choose?',names:{M:'Leo',W:'Teacher'},script:[
['W','Leo, which planets did everyone choose?'],
['M','Well, Ella chose Mars.'],
['W','And Josh?'],['M','Josh chose Jupiter, because it\'s the biggest.'],
['W','What about Sophie?'],['M','Sophie wanted Mercury, but she\'s doing Saturn now.'],
['W','And Max?'],['M','Max chose Venus.'],
['W','And you, Leo?'],['M','I chose Neptune.']],
items:['Ella','Josh','Sophie','Max','Leo'],opts:['Mars','Jupiter','Saturn','Venus','Neptune','Mercury','Uranus','Earth']},
s:{p1:['Do you like science?','Have you ever looked at the stars?','Would you like to go to space?','What did you learn in science last week?','Please tell me something about a science lesson you enjoyed.'],
p2:{topic:'science and space',ideas:['visiting a planetarium','looking through a telescope','watching a space film','going to a science museum','reading about planets'],q:['Do you think space is interesting?','Which of these things would you like to do?','Would you like to live on another planet?','Is science an important subject at school?']}}
});
