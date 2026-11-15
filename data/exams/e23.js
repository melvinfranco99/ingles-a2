EXAM({
r1:[
{t:'<b>DENTIST</b><br>If you cannot come to your appointment, please phone at least 24 hours before.',o:['Tell the dentist a day before if you can\'t come.','Appointments last 24 hours.','You must phone to make an appointment.']},
{t:'Hi Sara, I\'m sorry but I can\'t lend you my bike on Saturday. My brother needs it. Maybe Sunday? Leah',q:'Why has Leah written this message?',o:['to say no to Sara\'s request','to ask Sara to lend her a bike','to invite Sara for a bike ride']},
{t:'<b>FIRE DOOR</b><br>Keep closed. Do not block.',o:['Nothing should be put in front of this door.','This door is always locked.','Only firefighters can use this door.']},
{t:'<b>COLLEGE</b><br>Evening classes start next week. Places still available in French and Italian.',o:['You can still join some language classes.','French and Italian classes are full.','Classes are only in the morning.']},
{t:'Dear Jake, thanks for the lovely flowers. They really made me feel better. See you at school soon! Mrs Hall',q:'Mrs Hall is',o:['thanking Jake for a present.','asking Jake to buy flowers.','telling Jake she is coming back tomorrow.']},
{t:'<b>SUPERMARKET</b><br>This checkout: 10 items or less.',o:['You can only use this checkout with a few items.','You can buy only 10 things in this shop.','This checkout is closed.']}],
r2:{title:'Moving abroad for work',intro:'Three people talk about working in another country.',sections:[
{h:'Lena',t:'I\'m a nurse from Germany, and I\'ve been working in a hospital in Sweden for two years. I had to learn Swedish before I started, which took a year. The hospital paid for my lessons. The winters are very dark, but people are friendly and I love my job.'},
{h:'Marco',t:'I work in a hotel in Dubai. I came from Brazil three years ago. It\'s extremely hot in summer – over forty-five degrees! I work long hours, but I can save a lot of money because I don\'t pay much tax. I send money home to my family every month.'},
{h:'Sophie',t:'I teach French in a school in Japan. I\'ve been here for six months. I don\'t speak much Japanese yet, so ordering food is an adventure! My students are very polite and hard-working. I miss French bread, but Japanese food is delicious.'}],
q:['Who had to study a language before starting work?','Who sends money to their family?','Who hasn\'t learnt the local language well yet?','Who has the longest experience in their new country?','Who mentions very high temperatures?','Who describes the people they teach?','Whose employer helped them prepare?'],
ans:[0,1,2,1,1,2,0]},
r3:{title:'Saving a forest',text:`When Lucas Silva was ten, he walked into the forest near his home in Brazil and saw that many trees had been cut down. "I was so sad," he says. "That forest was where I played with my friends. I wanted to do something."

Lucas started by planting one tree in his garden. Then he asked his classmates to plant trees too. "At first only five friends helped me. But we made a video about it, and soon hundreds of children wanted to join."

Now, five years later, Lucas's group has planted more than twenty thousand trees. They meet every Sunday and plant trees in areas where the forest has disappeared. Local farmers give them land, and a company gives them young trees for free.

"Planting is hard work," Lucas admits. "It's hot, and you get very dirty. But when I see the young trees growing, I feel great."

Lucas has won several prizes for his work. Last year he spoke at a big environmental meeting. "I was very nervous," he says. "But I wanted adults to know that young people care about the planet."`,
q:[{q:'Why was Lucas sad?',o:['Trees in his favourite place had gone.','His friends moved away.','He couldn\'t play in the forest.']},
{q:'How did more children hear about Lucas\'s idea?',o:['through a video','through his school','through the newspaper']},
{q:'Where do the young trees come from?',o:['a business','farmers','Lucas\'s garden']},
{q:'What does Lucas say about planting?',o:['It is difficult but rewarding.','It is easy and fun.','It is boring.']},
{q:'What did Lucas want to show adults at the meeting?',o:['that young people care about nature','that planting trees is easy','that he wasn\'t nervous']}]},
r4:{title:'Ice cream',text:`Ice cream is one of the world's favourite desserts. People have been eating cold, sweet food for thousands of years. In ancient China, people [19] snow with fruit and honey.

Ice cream as we know it today became popular in Europe in the seventeenth century. But it was very [20] to make, because people needed ice from mountains or lakes. Only rich people could eat it.

Everything changed when the fridge was [21]. Ice cream became cheap, and people could [22] it at home.

Today, there are hundreds of [23] of ice cream, from chocolate and vanilla to strange ones like cheese or even fish! The most popular is still vanilla. Americans eat more ice cream than people in any other country – about twenty litres per person [24] year.`,
opts:[['mixed','added','joined up'],['difficult','hard-working','heavy'],['invented','discovered','found out'],['keep','hold','stay'],['flavours','tastes of','kinds to'],['every','a','per each']]},
r5:{title:'Meeting up',text:`Hi Kate,

I'm coming to London next month for a job interview. Would you like to meet up? I'll arrive [25] Tuesday the 14th in the afternoon and I'll stay until Thursday.

My interview is on Wednesday morning, so I'm free on Tuesday evening and Wednesday afternoon. [26] would be best for you?

Hi Rachel,

How exciting! Good luck [27] your interview! I'd love to see you. I work until six on Tuesday, but I'm free after [28]. We could have dinner at a lovely Italian restaurant near my flat. [29] you like Italian food?

Let me know where you're staying and I'll tell you [30] to get to the restaurant.

Kate`,
ans:[['on'],['which','what','when'],['with','in'],['that'],['do'],['how']]},
w6:{ctx:'Your English friend, Pat, is going to stay with you next week. Write an email to Pat. In your email:',notes:['say where Pat will sleep','suggest something to do together','say what the weather will be like']},
w7:['A woman is in a park. She sits on a bench and puts her phone next to her.','She walks away and forgets her phone on the bench.','A boy runs after her with the phone. She thanks him.'],
l1:[
{q:'What does the woman want to drink?',o:['water','coffee','orange juice'],script:[['M','Coffee?'],['W','No thanks, it\'s too late for coffee. And I don\'t want anything sweet. Just some water, please.']]},
{q:'Where did the boy go yesterday?',o:['to the dentist','to the doctor','to the hospital'],script:[['W','Were you at the doctor\'s yesterday?'],['M','No, I had a toothache, so I went to the dentist. It\'s better now.']]},
{q:'What is the man looking for?',o:['his glasses','his keys','his wallet'],script:[['W','What are you looking for?'],['M','I can\'t read this letter. Where did I put my glasses?'],['W','They\'re on your head!']]},
{q:'Which day is the girl\'s swimming lesson?',o:['Thursday','Tuesday','Saturday'],script:[['M','Is your swimming lesson on Tuesday?'],['W','It used to be on Tuesday, but now it\'s on Thursday. On Saturdays I play tennis.']]},
{q:'How long is the film?',o:['two hours','an hour and a half','three hours'],script:[['W','How long is the film? Three hours?'],['M','No, it\'s not that long. Two hours exactly.']]}],
l2:{intro:'You will hear a woman talking about a language school.',g:'W',head:'Bright Language School',script:`Welcome to Bright Language School. We teach English, French, Spanish and German. Classes have a maximum of eight students. Our evening courses start on the tenth of January and last twelve weeks. Classes are on Mondays and Wednesdays from six thirty to eight. Before you start, you need to do a short test so we can find the right level for you. The course costs two hundred and forty pounds, and that includes the books. Our school is in Bridge Street, opposite the post office.`,
sents:['Maximum students in a class: ___','Courses start: ___ January','Length of course: ___ weeks','Before starting, do a ___','School is opposite the: ___ office'],
ans:[['8','eight'],['10th','10','tenth'],['12','twelve'],['test'],['post']]},
l3:{intro:'You will hear Dan talking to his friend Eva about learning to drive.',names:{M:'Dan',W:'Eva'},script:[
['W','Dan, are you learning to drive?'],['M','Yes, I started two months ago. I have a lesson every Saturday.'],
['W','Who teaches you?'],['M','A teacher from a driving school. My dad tried to teach me, but he got too nervous!'],
['W','What\'s the hardest thing?'],['M','Parking. I\'m terrible at it. Driving on the motorway is easier.'],
['W','When is your test?'],['M','In March. I\'m a bit worried.'],
['W','What will you do when you pass?'],['M','My grandmother says I can have her old car. She doesn\'t drive any more.']],
q:[{q:'When does Dan have driving lessons?',o:['on Saturdays','every day','on Sundays']},
{q:'Why doesn\'t Dan\'s dad teach him?',o:['He gets too nervous.','He hasn\'t got time.','He can\'t drive.']},
{q:'What does Dan find most difficult?',o:['parking','motorways','driving at night']},
{q:'How does Dan feel about his test?',o:['worried','confident','excited']},
{q:'Where will Dan get a car?',o:['from his grandmother','from his dad','from a shop']}]},
l4:[
{ctx:'You hear a woman talking about a café.',q:'Why does she go there?',o:['It has good cakes.','It is near her office.','It is cheap.'],script:[['W','It\'s not cheap and it\'s quite far from my office. But the cakes are the best in town. I go every Friday.']]},
{ctx:'You hear a man talking to his daughter.',q:'What is he doing?',o:['giving her permission','saying no to her','asking her for help'],script:[['M','Yes, you can go to the concert with your friends. But call me when it finishes and I\'ll pick you up.']]},
{ctx:'You hear two friends talking about a match.',q:'How does the boy feel?',o:['disappointed','excited','surprised'],script:[['W','Bad luck about the match.'],['M','I know. We trained so hard. And we lost five–nil. I really thought we could win.']]},
{ctx:'You hear a girl talking about a holiday.',q:'Where did she stay?',o:['on a farm','in a hotel','in a tent'],script:[['W','We stayed on a farm in Wales. Every morning we helped feed the chickens. Much better than a hotel!']]},
{ctx:'You hear a man calling a friend.',q:'Why is he calling?',o:['to change their plans','to cancel their plans','to invite his friend'],script:[['M','Hi Tom, about tonight. Can we meet at eight instead of seven? I have to finish some work first.']]}],
l5:{intro:'You will hear Amy talking to her mum about what her friends do on Saturday mornings. What does each person do?',names:{W:'Amy',M:'Mum'},script:[
['M','Amy, what do your friends do on Saturday mornings?'],
['W','Well, Jess has ballet lessons. She\'s really good.'],
['M','And Toby?'],['W','Toby plays rugby for a club.'],
['M','What about Clara?'],['W','Clara works at her parents\' bakery.'],
['M','And Will?'],['W','Will usually sleeps until twelve! But now he goes to a drama class.'],
['M','And Lucy?'],['W','Lucy goes horse riding with her sister.']],
items:['Jess','Toby','Clara','Will','Lucy'],opts:['ballet','rugby','working in a bakery','drama','horse riding','sleeping','swimming','music lessons']},
s:{p1:['Would you like to live in another country?','Which countries have you visited?','What languages would you like to learn?','Where did you go on your last trip?','Please tell me something about a country you would like to visit.'],
p2:{topic:'countries to visit',ideas:['Japan','Australia','the USA','Egypt','Iceland'],q:['Do you think Iceland is an interesting country to visit?','Which of these countries would you like to visit?','What do tourists like doing in your country?','Do you prefer travelling in your own country or abroad?']}}
});
