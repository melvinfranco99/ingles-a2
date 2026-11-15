EXAM({
r1:[
{t:'<b>STATION CAFÉ</b><br>Open 6 a.m. – 11 p.m. Hot food until 9 p.m.',o:['You can\'t get a hot meal late in the evening.','The café is closed at 9 p.m.','You can only get hot food in the morning.']},
{t:'Hi Kate, can you take my place at the meeting tomorrow? I have to go to the doctor. Thanks! Jill',q:'Jill is asking Kate to',o:['go to the meeting instead of her.','go to the doctor with her.','change the time of the meeting.']},
{t:'<b>KEEP OFF THE GRASS</b>',o:['Don\'t walk on this area.','You can sit on the grass.','The grass is being cut.']},
{t:'<b>CHESS CLUB</b><br>All levels welcome. Mondays 4–6 p.m. in the library.',o:['You don\'t need to be good at chess to join.','The club is only for good players.','You must bring your own chess set.']},
{t:'Paul – I\'ve fed the cat but she still seems hungry. Can you give her a bit more at 6? Thanks, Sue',q:'What does Sue want Paul to do?',o:['feed the cat again later','buy cat food','take the cat to the vet']},
{t:'<b>NOTICE</b><br>The swimming pool will be closed all next week for repairs.',o:['People can\'t swim here for several days.','The pool is closed today only.','The pool needs new swimmers.']}],
r2:{title:'Homes around the world',intro:'Three people describe their homes.',sections:[
{h:'Gabriel',t:'I live in a flat on the twenty-fifth floor of a tall building in São Paulo. The view is amazing, especially at night. But when the lift breaks, it\'s a nightmare – I have to walk up all those stairs! There\'s a swimming pool on the roof for everyone who lives here.'},
{h:'Ingrid',t:'My family lives in a wooden house in the forest in Finland. The nearest neighbour is two kilometres away. We have a sauna in the garden, and in winter we go from the hot sauna straight into the snow! It\'s very quiet here, which I love.'},
{h:'Kofi',t:'I live with my parents, my grandparents and my two sisters in a big house in Ghana. There\'s always someone to talk to, but it\'s never quiet! My grandmother grows vegetables in the garden, and we eat them every day.'}],
q:['Who lives far from other people?','Who lives with several generations of their family?','Who sometimes has to climb a lot of stairs?','Who eats food from the garden?','Where can people swim at the top of the building?','Who enjoys the silence?','Who lives in a noisy house?'],
ans:[1,2,0,2,0,1,2]},
r3:{title:'My first concert',text:`Fourteen-year-old Zoe Clark played the violin in front of a thousand people last month. It was her first concert with the city's youth orchestra.

"I started playing when I was six," Zoe says. "My grandmother played the violin, and I loved listening to her. When she died, she left me her violin. I still play it today."

Zoe practises for an hour every day after school. "Sometimes I don't want to," she admits. "When my friends are going out, I have to stay at home and practise. But I know it's important."

Before the concert, Zoe was very nervous. "My hands were shaking and I thought I'd forget everything. But when the music started, I forgot about the audience. I just played."

After the concert, people came to congratulate her. "My mum was crying," she laughs. "And my music teacher said it was my best performance ever."

Zoe wants to study music at a special school in London. "It's very difficult to get a place," she says. "But I'm going to try. My grandmother would be proud."`,
q:[{q:'Why did Zoe start playing the violin?',o:['She liked hearing her grandmother play.','Her school offered lessons.','Her mother wanted her to.']},
{q:'What does Zoe say about practising?',o:['She doesn\'t always enjoy it.','She practises at school.','She practises for two hours a day.']},
{q:'How did Zoe feel when the music started?',o:['She stopped worrying.','She was more nervous.','She forgot the music.']},
{q:'Who said it was Zoe\'s best performance?',o:['her teacher','her mother','her grandmother']},
{q:'What does Zoe want to do next?',o:['study music','join a bigger orchestra','teach the violin']}]},
r4:{title:'Tea',text:`Tea is the second most popular drink in the world after water. It [19] from China, where people have been drinking it for about five thousand years.

According to an old story, a Chinese emperor was [20] some water when some leaves fell into his cup. He tried it and liked the taste – and that was the first cup of tea!

Tea arrived in Britain in the seventeenth century. At first it was very expensive, but later it became the national [21]. Today, British people drink about one hundred million cups of tea every day.

There are many different types of tea. Green tea is popular in Japan and China, while in India people often [22] tea with milk and spices. Some people [23] tea is good for your health. It is certainly a good way to relax and [24] a break.`,
opts:[['comes','goes','takes'],['boiling','cooking','burning'],['drink','food','meal'],['make','do','have up'],['believe','think of','know about'],['take','make up','do']]},
r5:{title:'Camping trip',text:`Hi Sam,

I'm going camping [25] my cousins next weekend. We're going to a campsite in the mountains. Would you like to come? There's space [26] our tent.

We'll go by train on Friday after school and come back on Sunday evening. During the day we're going to walk and swim in the lake. At night we'll cook [27] a fire.

You'll need a sleeping bag and warm clothes, because it gets cold at night. [28] you got a sleeping bag? If not, you can borrow my brother's.

Hi Tom,

That sounds amazing! I've never been camping [29]. I'll ask my parents tonight and tell you tomorrow. I haven't got a sleeping bag, so thanks [30] the offer!

Sam`,
ans:[['with'],['in','for'],['on','over'],['have'],['before'],['for']]},
w6:{ctx:'You are going camping next weekend. Write an email to your English friend, Alex. In your email:',notes:['say where you are going','say who you are going with','say what you will do there']},
w7:['A boy is walking home from school. He finds a wallet on the ground.','He takes the wallet to the police station.','The owner of the wallet comes to the boy\'s house to give him a present.'],
l1:[
{q:'What will the girl take to the party?',o:['a cake','some drinks','some music'],script:[['M','Are you taking drinks to the party?'],['W','Lots of people are taking drinks. Tom\'s bringing music. So I\'ll make a cake.']]},
{q:'Where does the man\'s brother live now?',o:['in Spain','in France','in Germany'],script:[['W','Does your brother still live in France?'],['M','No, he moved to Germany for a job, but he didn\'t like it. Now he\'s in Spain.']]},
{q:'What time does the woman start work?',o:['8.30','9.00','8.00'],script:[['M','Do you start work at nine?'],['W','I used to. Now I start half an hour earlier, but I finish earlier too.']]},
{q:'What is the boy\'s pet?',o:['a rabbit','a dog','a cat'],script:[['W','Have you got a dog?'],['M','I wanted one, but my flat is too small. And my mum doesn\'t like cats. So I\'ve got a rabbit.']]},
{q:'How many people are coming to the meeting?',o:['twelve','ten','twenty'],script:[['M','How many chairs do we need? Ten?'],['W','Twelve. Ten from our office and two visitors.']]}],
l2:{intro:'You will hear a man talking about a chess competition.',g:'M',head:'Chess Competition',script:`Our school chess competition will take place on Friday the eighteenth of November. It's open to all students in years seven to eleven. Games will be in the main hall, starting at two o'clock. Each game lasts thirty minutes. The winner will get a trophy and a book about chess. If you want to play, write your name on the list outside Room 12 before Wednesday. The competition is organised by Mr Grant – G-R-A-N-T.`,
sents:['Date: Friday ___ November','Place: the main ___','Each game lasts: ___ minutes','Prize: a trophy and a ___','Organiser: Mr ___'],
ans:[['18th','18','eighteenth'],['hall'],['30','thirty'],['book'],['grant']]},
l3:{intro:'You will hear Jenny talking to her friend Ben about volunteering.',names:{W:'Jenny',M:'Ben'},script:[
['M','Jenny, what do you do on Saturdays?'],['W','I volunteer at an animal centre. I\'ve been doing it for six months.'],
['M','What do you do there?'],['W','I clean the cages and take the dogs for walks. Sometimes I help the vet.'],
['M','Do you get paid?'],['W','No, but I love it. And it will help me get into university. I want to study to be a vet.'],
['M','Is it hard work?'],['W','Yes, especially in winter. It\'s cold and dirty. But the animals are so happy to see me.'],
['M','Can I come with you?'],['W','Sure! They always need more volunteers. You have to be fifteen. How old are you?'],['M','Sixteen.'],['W','Perfect!']],
q:[{q:'How long has Jenny volunteered at the centre?',o:['six months','one year','a few weeks']},
{q:'What does Jenny do there?',o:['walks dogs','feeds cats','answers the phone']},
{q:'Why will volunteering help Jenny?',o:['for her university application','because she gets paid','because she needs a job']},
{q:'What does Jenny say about winter?',o:['It is more difficult.','There are more animals.','She doesn\'t go in winter.']},
{q:'Can Ben volunteer?',o:['Yes, he is old enough.','No, he is too young.','Only in the summer.']}]},
l4:[
{ctx:'You hear a woman talking about a TV programme.',q:'What does she think of it?',o:['It is very funny.','It is very sad.','It is very long.'],script:[['W','I laughed so much last night. The actors are brilliant. It\'s the funniest programme on TV.']]},
{ctx:'You hear a man talking to his son.',q:'What does he want his son to do?',o:['help in the kitchen','clean his room','do his homework'],script:[['M','Can you come and help me? I need someone to cut the vegetables while I cook the meat.']]},
{ctx:'You hear two friends talking.',q:'Why can\'t the girl go out?',o:['She has to babysit.','She is ill.','She has no money.'],script:[['M','Coming to the cinema?'],['W','I can\'t. My parents are going out, so I\'m looking after my little brother.']]},
{ctx:'You hear a boy talking about his new school.',q:'What does he like most?',o:['the teachers','the building','the sports'],script:[['M','The building is old and we don\'t do much sport. But the teachers are amazing. They really help you.']]},
{ctx:'You hear a woman calling a hotel.',q:'Why is she calling?',o:['to ask if pets are allowed','to book a room','to complain'],script:[['W','Hi, I\'ve booked a room for next weekend. Can I bring my dog? He\'s very small and quiet.']]}],
l5:{intro:'You will hear Grace talking to her friend about her family\'s favourite sports. What sport does each person like?',names:{W:'Grace',M:'Friend'},script:[
['M','What sports does your family like, Grace?'],
['W','Well, my dad loves golf. He plays every Sunday.'],
['M','And your mum?'],['W','Mum plays tennis with her friends.'],
['M','What about your brother?'],['W','Tom used to play football, but now he does karate.'],
['M','And your sister?'],['W','Lucy loves swimming.'],
['M','And you?'],['W','I do gymnastics three times a week.']],
items:['Dad','Mum','Tom','Lucy','Grace'],opts:['golf','tennis','karate','swimming','gymnastics','football','skiing','running']},
s:{p1:['Where do you live?','Do you live in a house or a flat?','What is your favourite room?','Have you ever moved house?','Please tell me something about your bedroom.'],
p2:{topic:'types of homes',ideas:['a flat in a tall building','a house in a village','a wooden house in a forest','a house by the sea','a big house with a garden'],q:['Do you think living in a tall building is fun?','Which of these homes would you like to live in?','What is important in a home?','Would you like to live alone or with friends?']}}
});
