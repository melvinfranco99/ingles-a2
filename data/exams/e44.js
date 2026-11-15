EXAM({
r1:[
{t:'<b>MOUNTAIN PATH</b><br>Dangerous in winter. Please use the lower path.',o:['Walkers should choose another way in winter.','The path is closed all year.','The lower path is dangerous.']},
{t:'Hi Sara, we\'ve reached the top of the mountain! The view is amazing. We\'ll be back at the hotel by 6. Tom',q:'Tom is telling Sara',o:['when they will return.','they are lost.','the hotel is closed.']},
{t:'<b>CLIMBING WALL</b><br>Children under 14 must have an adult with them.',o:['Young climbers need someone older with them.','Children can\'t climb here.','Adults can\'t climb here.']},
{t:'<b>SKI HIRE</b><br>Skis, boots and helmets. Daily or weekly prices.',o:['You can rent equipment for different lengths of time.','You must buy skis here.','Helmets are free.']},
{t:'Jake – don\'t forget your walking boots for the trip tomorrow. Meet at school at 7.30. Mr Bell',q:'Mr Bell is reminding Jake',o:['to bring something.','to buy boots.','that the trip is cancelled.']},
{t:'<b>CABLE CAR</b><br>Not running today because of strong winds.',o:['The weather has stopped the cable car.','The cable car is running late.','The cable car is broken.']}],
r2:{title:'Mountain lovers',intro:'Three people talk about mountains.',sections:[
{h:'Ben',t:'I\'m a mountain guide in the Alps. I take groups of tourists to the top of high mountains. Safety is the most important thing. If the weather is bad, we don\'t go, even if people are disappointed. I\'ve climbed Mont Blanc more than a hundred times.'},
{h:'Sofia',t:'I go skiing every winter with my family. We always go to the same small village in Austria. My children learnt to ski there when they were three. Now they are faster than me! In the evenings, we eat cheese fondue in our favourite restaurant.'},
{h:'Chen',t:'Last year, I climbed Mount Kilimanjaro in Tanzania for charity. It took six days. The hardest part was the last night, when we walked for eight hours in the dark. I felt sick because of the height, but I made it to the top and raised five thousand pounds.'}],
q:['Who has climbed the same mountain many times?','Who goes back to the same place every year?','Who climbed to help other people?','Who sometimes has to cancel plans?','Who felt ill during their climb?','Whose children are now better than them?','Who walked through the night?'],
ans:[0,1,2,0,2,1,2]},
r3:{title:'The dog that saved a climber',text:`Last winter, climber James Reed was walking alone in the mountains of Scotland when he fell and broke his leg. "I couldn't move, and there was no phone signal," he says. "It was getting dark and very cold. I was really frightened."

James had his dog, Bonnie, with him. "I didn't know what to do, so I tied a red scarf around her neck and told her to go home," he says. "I didn't really think it would work."

Bonnie ran for two hours down the mountain to a farmhouse. The farmer, Mrs McKay, saw the dog with the scarf and knew something was wrong. "Bonnie kept barking and running towards the mountain," she says. "So I called the mountain rescue team."

The rescue team followed Bonnie up the mountain and found James at midnight. "When I saw their lights, I cried," says James. "Bonnie ran to me and licked my face."

James spent two weeks in hospital. Bonnie received a medal for bravery. "She's a hero," says James. "I'll never go climbing alone again – but I'll always take Bonnie with me!"`,
q:[{q:'Why couldn\'t James call for help?',o:['His phone didn\'t work there.','He lost his phone.','He forgot his phone.']},
{q:'What did James do?',o:['He sent his dog for help.','He walked down the mountain.','He shouted for help.']},
{q:'How did Mrs McKay know there was a problem?',o:['because of the dog\'s behaviour','because James called her','because she saw James fall']},
{q:'When was James found?',o:['in the middle of the night','in the afternoon','the next morning']},
{q:'What will James do in the future?',o:['climb with other people','stop climbing','climb only in summer']}]},
r4:{title:'Mount Everest',text:`Mount Everest is the highest mountain in the world. It is 8,849 metres high and is on the [19] between Nepal and China.

The first people to reach the top were Edmund Hillary from New Zealand and Tenzing Norgay from Nepal, in 1953. Since then, more than six thousand people have [20] it.

Climbing Everest is very dangerous. At the top, there is very little oxygen, so most climbers [21] bottles of oxygen with them. It is also extremely cold, and strong winds can [22] climbers off the mountain.

Today, Everest has a big problem with rubbish. Climbers leave tents, bottles and other things on the mountain. Every year, teams [23] up tonnes of rubbish. Climbers must now pay a lot of money to climb, and they have to [24] their rubbish back down with them.`,
opts:[['border','line','edge'],['climbed','gone','arrived'],['carry','wear on','hold up'],['blow','push up','throw on'],['clean','wash','make'],['bring','take on','come']]},
r5:{title:'Ski trip',text:`Hi Ana,

I'm writing to you from the mountains! We arrived [25] the ski resort yesterday. The snow is perfect and the sun is shining.

This morning I had my first ski lesson. I fell [26] about twenty times, but by the end I could go down a small hill without falling. My instructor is very patient!

Our hotel is lovely. There's a swimming pool, and from my bedroom window I can see the mountains. In the evening, we sit [27] the fire and drink hot chocolate.

Tomorrow we're going to [28] the cable car to the top of the mountain. I'm a bit scared, but my dad says it's very safe.

I'll send you some photos. I wish you [29] here!

See you [30] I get back,
Lily`,
ans:[['at','in'],['over','down'],['by','near','around'],['take'],['were'],['when']]},
w6:{ctx:'You are on a skiing holiday. Write an email to your English friend, Charlie. In your email:',notes:['say where you are','say what you have done','say what you will do tomorrow']},
w7:['A family is walking up a mountain. It is sunny.','Suddenly, it gets very foggy and they can\'t see the path.','A man with a dog shows them the way down. They are happy.'],
l1:[
{q:'How will they get to the top of the mountain?',o:['by cable car','on foot','by train'],script:[['M','Shall we walk to the top?'],['W','It takes five hours! There\'s no train. Let\'s take the cable car.']]},
{q:'What does the boy need for the trip?',o:['a raincoat','walking boots','a hat'],script:[['W','Have you got your boots and your hat?'],['M','Yes. But I can\'t find my raincoat, and it might rain.']]},
{q:'How high is the mountain?',o:['1,500 metres','1,050 metres','5,000 metres'],script:[['M','How high is it? Five thousand metres?'],['W','No! It\'s only one thousand five hundred metres.']]},
{q:'What did the woman do on holiday?',o:['went skiing','went climbing','went walking'],script:[['M','Did you go walking in the mountains?'],['W','No, it was winter. There was lots of snow, so we went skiing every day.']]},
{q:'When will they leave?',o:['at 6.30','at 6.00','at 7.30'],script:[['W','What time are we leaving? Seven thirty?'],['M','No, earlier. Half past six. We need to start before it gets hot.']]}],
l2:{intro:'You will hear a man talking about a walking holiday.',g:'M',head:'Walking Holiday',script:`Join us for a walking holiday in the Lake District. The holiday lasts seven days, and we walk about fifteen kilometres every day. You'll stay in a small hotel in the village of Grasmere. All meals are included, and we'll give you a packed lunch to take on your walks. You need to bring good walking boots and a waterproof jacket. The price is six hundred and fifty pounds per person. Our next holiday starts on the second of May.`,
sents:['Length of holiday: ___ days','Distance each day: about ___ km','Hotel is in the village of ___','Bring good boots and a waterproof ___','Next holiday starts: ___ May'],
ans:[['7','seven'],['15','fifteen'],['grasmere'],['jacket'],['2nd','2','second']]},
l3:{intro:'You will hear Rachel talking to her friend Simon about a school trip to the mountains.',names:{W:'Rachel',M:'Simon'},script:[
['M','Rachel, how was the school trip?'],['W','Great! We stayed in a big wooden house in the mountains for four days.'],
['M','What did you do?'],['W','We went climbing and canoeing. I liked climbing best.'],
['M','Were you scared?'],['W','A bit at the start. But the instructor was really good, and I got to the top!'],
['M','What was the food like?'],['W','Not great. We had pasta every night!'],
['M','Would you go again?'],['W','Yes, but I\'d take some snacks next time.']],
q:[{q:'How long was the trip?',o:['four days','one week','two days']},
{q:'What activity did Rachel like most?',o:['climbing','canoeing','walking']},
{q:'How did Rachel feel at the start of climbing?',o:['a little nervous','very excited','bored']},
{q:'What does Rachel say about the food?',o:['It was always the same.','It was delicious.','There wasn\'t enough.']},
{q:'What will Rachel do next time?',o:['bring her own food','stay longer','try canoeing']}]},
l4:[
{ctx:'You hear a man talking about a walk.',q:'What went wrong?',o:['They got lost.','It rained.','Someone was hurt.'],script:[['M','The weather was perfect and nobody was hurt. But we took the wrong path and walked for three hours in the wrong direction!']]},
{ctx:'You hear a woman talking to a ski instructor.',q:'What does she want?',o:['a private lesson','a group lesson','to hire skis'],script:[['W','I\'d like a lesson on my own, please. I\'m too nervous to learn in a group.']]},
{ctx:'You hear two friends talking.',q:'What does the boy suggest?',o:['starting early','taking a taxi','going another day'],script:[['W','It\'s going to be really hot tomorrow.'],['M','Let\'s start the walk at six, before it gets too hot.']]},
{ctx:'You hear a girl talking about climbing.',q:'How does she feel about it?',o:['She loves it.','She is scared of it.','She finds it boring.'],script:[['W','I go climbing three times a week. It\'s the best feeling in the world when you reach the top.']]},
{ctx:'You hear a man on the radio.',q:'What is he talking about?',o:['the weather in the mountains','a new ski resort','a climbing competition'],script:[['M','Heavy snow is expected in the mountains tonight. Don\'t go walking tomorrow. It will be very dangerous.']]}],
l5:{intro:'You will hear Sam talking to his mum about what his friends did on the school trip. What did each person do?',names:{M:'Sam',W:'Mum'},script:[
['W','Sam, what did your friends do on the trip?'],
['M','Well, Kate went climbing.'],
['W','And Joe?'],['M','Joe went canoeing on the lake.'],
['W','What about Lily?'],['M','Lily went horse riding.'],
['W','And Tom?'],['M','Tom wanted to go climbing, but he hurt his hand. So he went fishing.'],
['W','And you?'],['M','I went mountain biking.']],
items:['Kate','Joe','Lily','Tom','Sam'],opts:['climbing','canoeing','horse riding','fishing','mountain biking','swimming','walking','skiing']},
s:{p1:['Are there mountains in your country?','Do you like walking?','Have you ever been skiing?','Where did you go last weekend?','Please tell me something about a place in nature you like.'],
p2:{topic:'outdoor activities',ideas:['climbing','skiing','walking','camping','mountain biking'],q:['Do you think climbing is dangerous?','Which of these activities would you like to try?','Do you prefer holidays in the mountains or at the beach?','What outdoor activities do you do?']}}
});
