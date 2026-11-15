EXAM({
r1:[
{t:'<b>SWIMMING LESSONS</b><br>Book now for September. Only five places left.',o:['You should book soon if you want a place.','The lessons start next week.','There are only five lessons.']},
{t:'Hi Max, I\'ll be at the café at 3 but I\'ll have my little brother with me. Is that OK? Greg',q:'What does Greg want to know?',o:['if Max minds about his brother coming','where the café is','what time to meet']},
{t:'<b>BICYCLE PARKING</b><br>Bikes left here for more than 7 days will be removed.',o:['You can\'t leave your bike here for a long time.','You must remove your bike every day.','You can only park here for 7 hours.']},
{t:'<b>COOKING CLASS</b><br>Today\'s class is cancelled. Your money will be returned.',o:['People will get their money back.','The class will be tomorrow.','You must pay again.']},
{t:'Dear neighbours, we\'re having a party on Saturday night. Sorry about the noise! Please come if you want. Flat 3',q:'The people in Flat 3 are',o:['apologising and inviting their neighbours.','complaining about the noise.','asking their neighbours to be quiet.']},
{t:'<b>MUSEUM</b><br>Audio guides available in 10 languages.',o:['Visitors can listen to information in different languages.','The museum has 10 rooms.','Guides speak 10 languages.']}],
r2:{title:'My grandparents',intro:'Three people talk about their grandparents.',sections:[
{h:'Laura',t:'My grandmother is ninety-two and she still lives on her own. She goes for a walk every morning and does the crossword in the newspaper. She was a nurse during the war, and she has amazing stories. I visit her every Sunday, and she always makes me pancakes.'},
{h:'Ivan',t:'My grandfather taught me to play chess when I was five, and we still play every week. He usually wins! He was a teacher of maths for forty years. Now he\'s learning to use the internet, and he sends me funny messages with lots of mistakes.'},
{h:'Nadia',t:'My grandparents live in Morocco, so I only see them once a year in the summer. They have a big house with a garden full of orange trees. My grandmother taught me to cook traditional dishes. We talk on video calls every week, but it\'s not the same.'}],
q:['Whose grandparent lives alone?','Who plays a game with their grandparent?','Who lives far from their grandparents?','Whose grandparent is learning something new?','Who learnt to cook from a grandparent?','Who sees their grandparent every week?','Whose grandparent had an important job in difficult times?'],
ans:[0,1,2,1,2,0,0]},
r3:{title:'The football girl',text:`When Sara Lopez was eight, she was the only girl in her school's football team. "Some of the boys laughed at me," she remembers. "But when I scored goals, they stopped laughing!"

Now Sara is seventeen and plays for a professional women's team in Madrid. Last month, she played for Spain's under-nineteen team for the first time.

Sara trains every day after school. "It's hard," she admits. "I don't have much free time, and I often do my homework late at night. But my teachers are very helpful. They give me extra time when I have a match."

Her biggest supporter is her grandmother. "She comes to every match, even when it's raining. She shouts so loudly that the other players know her!" says Sara.

Sara's dream is to play in the World Cup. "Women's football is growing fast," she says. "When I was little, there were no women players on TV. Now girls can see that football is for everyone." But she also wants to finish her studies. "Football careers are short. I want to study physiotherapy too."`,
q:[{q:'How did some boys react when Sara joined the team?',o:['They laughed at her.','They helped her.','They didn\'t talk to her.']},
{q:'What does Sara say about her teachers?',o:['They understand her situation.','They give her too much homework.','They don\'t like football.']},
{q:'What do we learn about Sara\'s grandmother?',o:['She is very noisy at matches.','She played football too.','She doesn\'t like the rain.']},
{q:'What has changed in women\'s football?',o:['It is more popular now.','It is more expensive.','It is only for older women.']},
{q:'Why does Sara want to study?',o:['She knows she can\'t play football for ever.','Her parents want her to.','She doesn\'t like football any more.']}]},
r4:{title:'Dogs',text:`Dogs have lived with people for thousands of years. Scientists think that the first dogs came from wolves that [19] close to human camps looking for food.

There are now more than three hundred different types of dog. Some are tiny and can [20] in a handbag, while others are as big as a small horse.

Dogs are very clever animals. They can understand about two hundred and fifty words and [21] different human feelings. Some dogs have important jobs. They [22] blind people, find people under snow and help the police.

If you want a dog, remember that it [23] a lot of time and care. Dogs need to go for walks every day, and they don't like being alone for a long time. But many owners say their dog is their best [24].`,
opts:[['came','arrived','went up'],['fit','enter','sit'],['understand','notice to','learn'],['guide','lead to','drive'],['needs','wants to','must'],['friend','partner','mate of']]},
r5:{title:'Photo competition',text:`Hi Nina,

Have you heard [25] the photo competition at school? The topic is "Nature", and the winner gets a new camera! I'm going to enter. Do you want [26] enter too?

I'm thinking of taking photos of the birds in the park. There are lots of them early in the morning. Would you like to come with me on Saturday? We could go at seven o'clock, [27] it's too early for you!

Hi Ellie,

Seven o'clock? That's very early! But OK, I'll come. I'd like to take photos of flowers, [28] I think birds are more interesting. [29] is the closing date for the competition? I hope we have enough time.

See you [30] Saturday!

Nina`,
ans:[['about','of'],['to'],['unless','if'],['but'],['when','what'],['on']]},
w6:{ctx:'You lost something at school yesterday. Write a note to your English teacher, Mrs Smith. In your note:',notes:['say what you lost','say where you think you lost it','describe it']},
w7:['A man is cooking dinner. He is listening to music and dancing.','He forgets the food. There is smoke in the kitchen.','The man and his family are eating sandwiches. Everyone is laughing.'],
l1:[
{q:'Where is the boy going to meet his friends?',o:['at the sports centre','in the park','at the shopping centre'],script:[['W','Are you meeting your friends in the park?'],['M','We were going to, but it\'s raining. We\'re meeting at the sports centre to play badminton instead.']]},
{q:'What does the woman do in the evening?',o:['She goes to the gym.','She watches TV.','She reads.'],script:[['M','What do you do in the evenings? Watch TV?'],['W','Not much. I used to read a lot, but now I go to the gym. It helps me relax.']]},
{q:'What did the man forget?',o:['his passport','his ticket','his phone'],script:[['W','Have you got everything? Ticket? Phone?'],['M','Yes, both here. Oh no! My passport! It\'s still in the drawer at home.']]},
{q:'What time is the football match?',o:['2.30','3.00','2.00'],script:[['M','Is the match at three?'],['W','It usually is, but this week it\'s half an hour earlier because of the TV.'],['M','So half past two.']]},
{q:'How does the girl feel?',o:['nervous','excited','sad'],script:[['M','Are you excited about your piano exam?'],['W','Not really. My hands are shaking. What if I forget everything?']]}],
l2:{intro:'You will hear a man talking about a bike race.',g:'M',head:'Charity Bike Race',script:`This year's charity bike race is on Sunday the sixth of September. The race is thirty kilometres long, and it starts and finishes in Castle Square. There's also a shorter race of ten kilometres for children under fourteen. Riders must wear a helmet, and all bikes will be checked before the race. It costs fifteen pounds to enter. All the money goes to the local animal hospital. There will be a barbecue in the square after the race. To enter, visit the town hall.`,
sents:['Date: Sunday ___ September','Long race: ___ km','Starts in: ___ Square','Riders must wear: a ___','Money goes to: the animal ___'],
ans:[['6th','6','sixth'],['30','thirty'],['castle'],['helmet'],['hospital']]},
l3:{intro:'You will hear Kim talking to her friend Paul about a new restaurant.',names:{W:'Kim',M:'Paul'},script:[
['M','Kim, have you tried the new Japanese restaurant?'],['W','Yes, I went on Friday with my parents for my dad\'s birthday.'],
['M','What did you eat?'],['W','I had sushi. It was my first time! Dad had noodles.'],
['M','Did you like the sushi?'],['W','At first I wasn\'t sure, but it was delicious. I want to go again.'],
['M','Is it expensive?'],['W','A bit. But on Mondays there\'s a special price for students.'],
['M','What\'s it like inside?'],['W','Very modern. You sit on the floor at low tables! It was a bit uncomfortable.'],
['M','Shall we go next Monday?'],['W','OK!']],
q:[{q:'Why did Kim go to the restaurant?',o:['to celebrate a birthday','to meet friends','to try a new job']},
{q:'What did Kim eat?',o:['sushi','noodles','soup']},
{q:'When is it cheaper for students?',o:['on Mondays','on Fridays','at weekends']},
{q:'What was uncomfortable?',o:['sitting on the floor','the chairs','the hot food']},
{q:'When will Kim and Paul go?',o:['next Monday','on Friday','tonight']}]},
l4:[
{ctx:'You hear a woman talking about a TV programme.',q:'What does she say about it?',o:['It is educational.','It is funny.','It is boring.'],script:[['W','It\'s not funny and it\'s not exciting, but I learn something new in every programme. Last week it was about the history of chocolate.']]},
{ctx:'You hear a man talking to a ticket seller.',q:'What is the problem?',o:['The train is full.','The train is late.','The ticket is too expensive.'],script:[['M','One ticket for the 8.30 to Leeds, please.'],['W','Sorry, there are no seats left on that one. The next train is at nine.']]},
{ctx:'You hear two friends talking about a holiday.',q:'Where are they going?',o:['to the mountains','to the beach','to a big city'],script:[['W','I\'d love a beach holiday.'],['M','We did that last year. Let\'s go walking in the mountains. Fresh air!'],['W','OK, why not?']]},
{ctx:'You hear a girl talking about her bedroom.',q:'What does she want to change?',o:['the colour of the walls','her bed','her desk'],script:[['W','My bed and desk are fine, but the walls are bright pink. I chose it when I was six! Now I want white.']]},
{ctx:'You hear a teacher talking to a class.',q:'Why is she happy?',o:['The class did well in a test.','The class won a prize.','The class finished early.'],script:[['W','I\'ve marked your tests and everyone passed. Most of you got over eighty per cent! I\'m very proud of you.']]}],
l5:{intro:'You will hear Jane talking to her friend about her classmates\' favourite places in town. What is each person\'s favourite place?',names:{W:'Jane',M:'Friend'},script:[
['M','What are your classmates\' favourite places in town, Jane?'],
['W','Well, Ollie loves the skate park. He goes every day.'],
['M','And Grace?'],['W','Grace\'s favourite place is the library. She reads all the time.'],
['M','What about Liam?'],['W','Liam loves the swimming pool. He\'s in the swimming team.'],
['M','And Hannah?'],['W','Hannah likes the café near the river. She goes there with her mum.'],
['M','And Noah?'],['W','Noah\'s favourite place is the cinema. He sees every new film.']],
items:['Ollie','Grace','Liam','Hannah','Noah'],opts:['skate park','library','swimming pool','café','cinema','museum','sports centre','shopping centre']},
s:{p1:['Do you see your grandparents often?','What do you like doing with older people in your family?','Who is the oldest person in your family?','What did you do with your family last weekend?','Please tell me something about your grandparents.'],
p2:{topic:'things to do with grandparents',ideas:['cooking together','playing cards','going for a walk','looking at old photos','gardening'],q:['Do you think looking at old photos is interesting?','Which of these things would you like to do?','What can young people learn from older people?','How often do you visit your relatives?']}}
});
