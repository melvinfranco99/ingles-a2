EXAM({
r1:[
{t:'<b>BUS STATION</b><br>Buses to the airport leave every 20 minutes from Stop C.',o:['There are three airport buses an hour.','The airport bus leaves once an hour.','Stop C is at the airport.']},
{t:'Hi Lisa, the weather looks terrible for Saturday. Shall we go to the museum instead of the beach? Kerry',q:'Kerry wants to',o:['change their plans.','go to the beach early.','stay at home.']},
{t:'<b>CYCLE PATH</b><br>No cars or motorbikes.',o:['Only bikes can use this path.','Bikes are not allowed here.','Motorbikes can park here.']},
{t:'<b>HAIRDRESSER</b><br>No appointment needed on weekday mornings.',o:['You can just walk in on some mornings.','The hairdresser is closed in the mornings.','You must always book.']},
{t:'Jo – the heating isn\'t working. I\'ve called someone to fix it. Wear a jumper! Dad',q:'Dad is telling Jo',o:['the house will be cold for a while.','to fix the heating.','to buy a new jumper.']},
{t:'<b>TRAIN</b><br>Quiet coach. Please do not use phones.',o:['Passengers here should not make calls.','Phones are sold on this train.','This coach is for families.']}],
r2:{title:'Getting to school',intro:'Three students talk about how they get to school.',sections:[
{h:'Ben',t:'I live on a small island, so I go to school by boat every morning. The journey takes twenty-five minutes. When the sea is rough, the boat doesn\'t go and I have a day at home! I usually do my homework on the boat on the way back.'},
{h:'Clara',t:'I walk to school with my two best friends. It takes about fifteen minutes. We meet at the corner of my street at eight o\'clock. In winter it\'s still dark, so we wear bright jackets. It\'s the best part of the day because we can chat.'},
{h:'Yusuf',t:'My school is thirty kilometres from my village, so I take the school bus. I have to get up at six. The bus is often late, and sometimes it breaks down. But I always sit next to my cousin, and we play games on the journey.'}],
q:['Who sometimes can\'t get to school because of the weather?','Who has the longest distance to travel?','Who uses the journey to study?','Who wears special clothes for safety?','Who travels with a family member?','Who has the shortest journey?','Whose transport sometimes stops working?'],
ans:[0,2,0,1,2,1,2]},
r3:{title:'The street piano',text:`Last summer, a music teacher called Grace Lee put an old piano in the main square of her town. She painted it in bright colours and wrote "Play me!" on the side.

"I had this old piano in my garage," Grace explains. "Nobody played it. I thought, why not let everyone use it?"

At first, people walked past it. "They were shy," says Grace. "Then one day a little boy sat down and played a simple song. People stopped to listen and clapped. After that, everyone wanted to play."

Now the piano is played all day. Students practise on their way home from school, old people play songs from their youth, and tourists sit down to play too. One businessman plays every morning before work. "It helps me relax," he says.

There have been some problems. When it rains, the piano has to be covered, and once someone spilt coffee on the keys. But the town council liked the idea so much that they bought two more pianos for other parts of the town. "Music brings people together," Grace says. "That's what I wanted."`,
q:[{q:'Where did the piano come from?',o:['It belonged to Grace.','The council bought it.','It was from a school.']},
{q:'What did people do at first?',o:['They didn\'t play it.','They clapped.','They painted it.']},
{q:'Why does the businessman play the piano?',o:['to feel calm','to practise for a concert','to make money']},
{q:'What problem does the article mention?',o:['Something was dropped on it.','People played too loudly.','It was stolen.']},
{q:'What did the council do?',o:['They put more pianos in the town.','They moved the piano.','They gave Grace a prize.']}]},
r4:{title:'Penguins',text:`Penguins are birds, but they can't fly. Instead, they are excellent swimmers. They use their wings [19] swim under the water, and some can swim at thirty kilometres an hour.

Most penguins live in the south of the world. Some live in Antarctica, where it is extremely cold. They have thick feathers and a [20] of fat to keep them warm. In very cold weather, they stand close together in large groups.

Penguins eat fish and other sea animals. They can [21] under the water for up to twenty minutes when they are looking for food.

Emperor penguins are the biggest penguins. The males [22] after the eggs. They hold the egg on their feet for two months and don't eat anything during this time! Sadly, some types of penguin are now [23] danger because the sea is getting warmer and there are [24] fish.`,
opts:[['to','for','so'],['layer','floor','cover up'],['stay','keep up','last'],['look','care','take'],['in','at','on'],['fewer','less of','smaller']]},
r5:{title:'Lost bag',text:`Dear Sir or Madam,

I travelled on the 9.15 train [25] Bristol to London yesterday, and I think I left my bag on the train. It's a small brown bag [26] my name on it.

Inside there is a blue notebook, some keys and a pair [27] glasses. There isn't any money in it, but the notebook is very important to me [28] it has all my university notes.

I was sitting in coach D, near the door. Has anybody found it? If so, could you please let me know [29] I can collect it?

You can call me on 07700 900123 or reply [30] this email.

Thank you,
Emma Collins`,
ans:[['from'],['with'],['of'],['because','as'],['where','how','when'],['to']]},
w6:{ctx:'You have lost your jacket at school. Write a note to your English teacher, Mr Jones. In your note:',notes:['say what your jacket looks like','say where you think you lost it','ask him to help you']},
w7:['A family is waiting at a bus stop. It is raining.','The bus drives past and splashes them with water.','The family is at home, wet, drinking hot chocolate and laughing.'],
l1:[
{q:'How will the woman go to the airport?',o:['by train','by taxi','by bus'],script:[['M','Are you getting a taxi to the airport?'],['W','It\'s too expensive. The bus takes two hours, so I\'ll get the train. It\'s only forty minutes.']]},
{q:'What is the boy\'s favourite subject?',o:['history','science','art'],script:[['W','You like science, don\'t you?'],['M','It\'s OK. And art is fun. But history is my favourite. I love learning about the past.']]},
{q:'Where is the man\'s car?',o:['in the car park','outside the house','at the station'],script:[['W','Did you leave your car at the station?'],['M','No, I drove to the shopping centre. It\'s in the car park.']]},
{q:'What does the girl want to buy?',o:['a hat','a scarf','gloves'],script:[['M','Do you need gloves for the trip?'],['W','I\'ve got gloves and a scarf. But my ears get cold, so I need a hat.']]},
{q:'When is the man\'s birthday?',o:['25th May','5th May','25th March'],script:[['W','Is your birthday in March?'],['M','No, May. The twenty-fifth.']]}],
l2:{intro:'You will hear a woman talking about a bike hire scheme.',g:'W',head:'City Bikes',script:`Welcome to City Bikes, the easy way to get around town. There are bike stations at over sixty places in the city. To hire a bike, you need to download our app. The first thirty minutes are free. After that, it costs one pound for every half hour. You can leave the bike at any station. Children must be at least fourteen to hire a bike. Please always wear a helmet. If you have a problem, call our help line, which is open twenty-four hours a day.`,
sents:['Number of bike stations: over ___','To hire a bike, download the ___','Free time: the first ___ minutes','Minimum age: ___','Always wear a ___'],
ans:[['60','sixty'],['app'],['30','thirty'],['14','fourteen'],['helmet']]},
l3:{intro:'You will hear Sophie talking to her friend Jake about moving to a new city.',names:{W:'Sophie',M:'Jake'},script:[
['M','Sophie, I heard you\'re moving!'],['W','Yes, to Manchester. My mum has a new job there.'],
['M','When are you going?'],['W','At the end of July, so I can start my new school in September.'],
['M','How do you feel?'],['W','A bit sad. I\'ll miss my friends. But I\'m excited too. Manchester is a big city.'],
['M','Have you seen your new house?'],['W','Only in photos. It has a big garden, so we can finally get a dog!'],
['M','Will you come back to visit?'],['W','Of course! My grandparents still live here.']],
q:[{q:'Why is Sophie moving?',o:['because of her mother\'s job','because of her school','because she wants a bigger house']},
{q:'When is Sophie moving?',o:['in July','in September','in June']},
{q:'How does Sophie feel?',o:['sad and excited','only happy','angry']},
{q:'What will the family get?',o:['a dog','a garden','a car']},
{q:'Why will Sophie come back?',o:['to see her grandparents','to see her school','to see her dog']}]},
l4:[
{ctx:'You hear a man talking about his journey.',q:'Why was he late?',o:['There was an accident on the road.','His car broke down.','He got lost.'],script:[['M','Sorry I\'m late. The car was fine and I knew the way, but there was an accident on the motorway. We didn\'t move for an hour.']]},
{ctx:'You hear a woman talking to a shop assistant.',q:'What does she want to do?',o:['return something','buy something','find the toilets'],script:[['W','I bought these shoes yesterday but they\'re too small. Can I have my money back, please?']]},
{ctx:'You hear two friends talking about a film.',q:'What did the boy think of it?',o:['It was scary.','It was boring.','It was funny.'],script:[['W','Did you like the film?'],['M','I couldn\'t sleep afterwards! I kept thinking about that monster.']]},
{ctx:'You hear a girl talking about her weekend job.',q:'Where does she work?',o:['in a shop','in a restaurant','in a cinema'],script:[['W','I work at the clothes shop in the town centre on Saturdays. I help customers find the right size.']]},
{ctx:'You hear a man calling a friend.',q:'What does he want to do?',o:['borrow a tent','go camping','buy a tent'],script:[['M','Hi Pete, we\'re going camping next weekend, but our tent is broken. Could we use yours?']]}],
l5:{intro:'You will hear Jack talking to his mum about how his friends get to school. How does each person travel?',names:{M:'Jack',W:'Mum'},script:[
['W','Jack, how do your friends get to school?'],
['M','Well, Sam comes by bike. He lives quite near.'],
['W','And Ella?'],['M','Ella\'s dad drives her in his car.'],
['W','What about Noah?'],['M','Noah used to walk, but now he gets the bus.'],
['W','And Ruby?'],['M','Ruby comes by train from the next town.'],
['W','And Max?'],['M','Max walks. He lives next to the school!']],
items:['Sam','Ella','Noah','Ruby','Max'],opts:['by bike','by car','by bus','by train','on foot','by boat','by taxi','by motorbike']},
s:{p1:['How do you get to school or work?','How long does your journey take?','Do you like travelling by bus?','How did you travel last weekend?','Please tell me something about transport in your town.'],
p2:{topic:'ways of travelling',ideas:['by plane','by train','by car','by bike','on foot'],q:['Do you think travelling by train is fun?','Which of these ways of travelling do you like best?','Is it better to travel by bike or by car in a city?','How do you like to travel on holiday?']}}
});
