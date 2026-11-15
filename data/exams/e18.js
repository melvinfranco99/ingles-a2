EXAM({
r1:[
{t:'<b>NATIONAL PARK</b><br>Stay on the paths. Do not pick the flowers.',o:['Visitors must not take any flowers.','Visitors can pick flowers on the paths.','The paths are closed.']},
{t:'Kate – the cinema tickets are on the kitchen table. The film starts at 7.30. Don\'t be late! Mum',q:'What is Mum telling Kate?',o:['where to find something','what film to see','to buy tickets']},
{t:'<b>HOTEL RECEPTION</b><br>Check-out time is 11 a.m. Late check-out available for £20.',o:['You can stay in your room longer if you pay.','You must leave the hotel before 11 a.m. every day.','Check-out costs £20.']},
{t:'<b>SUMMER CAMP</b><br>Places still available for 10–12 year olds.',o:['Some children can still join the camp.','The camp is full.','The camp is only for 10-year-olds.']},
{t:'Hi Fred, my laptop is broken. Can I borrow yours for my project tonight? I\'ll bring it back tomorrow. Ali',q:'What does Ali want?',o:['to use Fred\'s laptop','to buy a new laptop','to help Fred with his project']},
{t:'<b>WARNING</b><br>Floor wet. Please walk carefully.',o:['You could fall over here.','Do not walk on the floor.','The floor is being cleaned now.']}],
r2:{title:'Weather',intro:'Three people talk about the weather where they live.',sections:[
{h:'Erik',t:'I live in the north of Norway. In winter, the sun doesn\'t rise for about two months, so it\'s dark all day. It\'s very cold, but we can see the northern lights, which are amazing. In summer, it\'s the opposite – the sun doesn\'t set, and it\'s light all night!'},
{h:'Priya',t:'I live in Mumbai, in India. From June to September, it\'s the rainy season, and it rains almost every day. Sometimes the streets are full of water and the trains stop. The rest of the year is hot and sunny. I love the rain because everything becomes green again.'},
{h:'Carlos',t:'I live in the Atacama Desert in Chile. It\'s one of the driest places on Earth – in some parts it hasn\'t rained for hundreds of years! The days are hot, but the nights are very cold. The sky is so clear that scientists come here to look at the stars.'}],
q:['Who lives somewhere that is often dark?','Who mentions problems with transport?','Who lives where there is almost no rain?','Who can see special lights in the sky?','Who likes the wettest time of year?','Who says the temperature changes a lot in one day?','Who lives where it\'s light at night in summer?'],
ans:[0,1,2,0,1,2,0]},
r3:{title:'Climbing a mountain',text:`Last year, eighteen-year-old Tom Fischer and his father climbed Mount Kilimanjaro in Tanzania, the highest mountain in Africa.

"It was my dad's dream," says Tom. "He always wanted to climb it, but he never had time. When he turned fifty, he said, 'If I don't do it now, I never will.' He asked me to go with him."

They trained for six months before the trip. "We walked in the hills every weekend with heavy backpacks," Tom says. "I also went running three times a week."

The climb took six days. "The first days were fine – it was warm and the views were beautiful. But near the top, it was very cold and there wasn't much oxygen. I had a terrible headache and felt sick."

On the last day, they started walking at midnight to reach the top at sunrise. "I wanted to give up," Tom admits. "But Dad kept saying, 'One more step.' When we got to the top and saw the sun come up, we both cried."

"It brought us closer," Tom says. "Now we're planning our next adventure."`,
q:[{q:'Whose idea was it to climb the mountain?',o:['Tom\'s father\'s','Tom\'s','a friend\'s']},
{q:'How did they prepare for the climb?',o:['They went walking regularly.','They climbed other mountains.','They went to a gym.']},
{q:'What was difficult near the top?',o:['Tom felt ill.','The path was dangerous.','There was too much snow.']},
{q:'Why did they start walking at midnight on the last day?',o:['to see the sun rise from the top','because it was too hot in the day','to avoid other climbers']},
{q:'What does Tom say about the trip now?',o:['It improved his relationship with his father.','He doesn\'t want to do it again.','It was too difficult.']}]},
r4:{title:'Snow',text:`Snow is made of tiny pieces of ice called snowflakes. Every snowflake has six sides, but scientists say that no two snowflakes are [19] the same.

Snow [20] when the air is very cold, below zero degrees. In some places, like the Arctic, there is snow on the ground all year.

Many people love snow. Children enjoy building snowmen and having snowball fights, and adults go skiing in the mountains. But snow can also [21] problems. Roads become dangerous, trains and planes are [22], and schools sometimes close.

In some countries, it hardly ever snows. In the south of Spain, for example, many children have never [23] snow. When it does snow there, people are very [24], and it is often on the news!`,
opts:[['exactly','really','totally'],['falls','drops','comes down to'],['cause','make up','do'],['delayed','late','slow'],['seen','looked','watched'],['excited','exciting','excite']]},
r5:{title:'Thank you',text:`Hi Grandad,

Thank you [25] the money you sent me for my birthday. I'm going to save it and buy [26] new bike in the summer. My old one is too small for me now.

I had a great birthday. I went to the cinema with four friends, and then we had burgers. My mum made me a chocolate cake [27] sixteen candles on it!

How are you? Mum says your leg [28] better now. I hope you can come and visit us soon. We [29] go for a walk in the park with the dog. He misses you!

See you soon,
Lots of love,
Jake

P.S. I passed [30] my exams! Mum says you'll be proud.`,
ans:[['for'],['a'],['with'],['is'],['can','could'],['all']]},
w6:{ctx:'You want to go to the mountains with your English friend, Sam, next weekend. Write an email to Sam. In your email:',notes:['suggest what to do there','say how you will get there','tell Sam what to bring']},
w7:['A family is at the beach. The sun is shining and the children are swimming.','Big dark clouds come and it starts to rain heavily.','The family is in a café, drinking hot chocolate and looking out of the window.'],
l1:[
{q:'What is the boy\'s favourite sport?',o:['basketball','football','swimming'],script:[['W','You play football, don\'t you?'],['M','Yes, and I swim too. But basketball is my favourite. I play every day.']]},
{q:'What does the woman need to buy?',o:['shampoo','toothpaste','soap'],script:[['M','I\'m going to the chemist\'s. Do you need toothpaste?'],['W','No, I bought some yesterday. And there\'s plenty of soap. But we\'ve run out of shampoo.']]},
{q:'Where will the man put the box?',o:['in the garage','in the attic','under the stairs'],script:[['W','Can you put this box in the attic?'],['M','The attic\'s full. What about under the stairs?'],['W','No space there either. Put it in the garage.']]},
{q:'What time will the plane land?',o:['4.15','3.45','4.45'],script:[['M','When does your plane land? Quarter to four?'],['W','It was going to, but it\'s half an hour late. So quarter past four.']]},
{q:'How much did the girl spend?',o:['£25','£30','£50'],script:[['M','How much did you spend at the shops?'],['W','I had fifty pounds and I\'ve got twenty-five left. So twenty-five. Not bad!']]}],
l2:{intro:'You will hear a man talking about a nature walk.',g:'M',head:'Nature Walk',script:`Good morning, everyone, and welcome to our nature walk through Green Valley. The walk is about eight kilometres long and will take us around four hours. We'll stop for lunch by the waterfall. Today we hope to see lots of birds, and if we're lucky, some deer. Please don't leave any rubbish on the path. If you need help, my name is Mr Woods – that's W-O-O-D-S. We'll be back here at the car park at three o'clock.`,
sents:['Length: ___ km','Lunch by the: ___','Animals we hope to see: birds and ___','Guide\'s name: Mr ___','Return time: ___ o\'clock'],
ans:[['8','eight'],['waterfall'],['deer'],['woods'],['3','three']]},
l3:{intro:'You will hear Chloe talking to her friend Adam about her weekend.',names:{W:'Chloe',M:'Adam'},script:[
['M','Chloe, what did you do at the weekend?'],['W','I went to my cousin\'s wedding in the countryside.'],
['M','Was it nice?'],['W','Lovely! It was outside in a big garden. But in the afternoon it started raining, so everyone ran into a big tent.'],
['M','What did you wear?'],['W','A blue dress. My mum bought it for me.'],
['M','Was there dancing?'],['W','Yes, until one in the morning! My feet hurt the next day.'],
['M','How did you get home?'],['W','We stayed in a hotel near the wedding and drove home on Sunday.']],
q:[{q:'Where was the wedding?',o:['in the countryside','in a church in town','at a hotel']},
{q:'What happened in the afternoon?',o:['It rained.','The tent fell down.','The music stopped.']},
{q:'Who bought Chloe\'s dress?',o:['her mother','Chloe','her cousin']},
{q:'How did Chloe feel the next day?',o:['Her feet were sore.','She was very hungry.','She had a headache.']},
{q:'Where did Chloe sleep on Saturday night?',o:['in a hotel','at home','at her cousin\'s']}]},
l4:[
{ctx:'You hear a woman talking about her holiday.',q:'What was the problem?',o:['The hotel was too far from the beach.','The weather was bad.','The food was expensive.'],script:[['W','The weather was perfect and the food was cheap. But our hotel was forty minutes from the beach. We spent hours on buses.']]},
{ctx:'You hear a man talking to a friend.',q:'What is he doing?',o:['asking for advice','giving an invitation','making an apology'],script:[['M','My daughter wants a dog for her birthday. You have dogs. What kind is best for a small flat?']]},
{ctx:'You hear a girl talking about her new school.',q:'What does she like best?',o:['the sports facilities','her teachers','the food'],script:[['W','The teachers are OK and the food is terrible. But there\'s a huge pool and a climbing wall. I love it!']]},
{ctx:'You hear two people talking about a car.',q:'Why doesn\'t the man buy it?',o:['It\'s too old.','It\'s too expensive.','It\'s the wrong colour.'],script:[['W','It\'s a good price.'],['M','Yes, but it\'s twenty years old. It will break down all the time.']]},
{ctx:'You hear a boy talking about a museum.',q:'How did he feel?',o:['interested','bored','tired'],script:[['M','I thought it would be boring, but it was amazing. I learnt so much about dinosaurs. I want to go again!']]}],
l5:{intro:'You will hear Becky talking to her dad about her friends\' holiday plans. What is each person going to do?',names:{W:'Becky',M:'Dad'},script:[
['M','Becky, what are your friends doing in the holidays?'],
['W','Well, Zoe is going skiing in France with her family.'],
['M','Lucky Zoe. And Max?'],['W','Max is going to visit his grandparents in Ireland.'],
['M','What about Lucy?'],['W','She\'s going to learn to surf in Portugal.'],
['M','And Dan?'],['W','Dan\'s staying at home. He\'s going to paint his bedroom.'],
['M','And Nina?'],['W','Nina\'s going camping by a lake.']],
items:['Zoe','Max','Lucy','Dan','Nina'],opts:['skiing','visiting grandparents','surfing','painting','camping','sailing','swimming','sightseeing']},
s:{p1:['What\'s the weather like in your country?','What do you do when it\'s very hot?','Do you like snow?','What was the weather like yesterday?','Please tell me something about your favourite season.'],
p2:{topic:'outdoor activities',ideas:['camping','climbing','cycling','having a picnic','fishing'],q:['Do you think fishing is boring?','Which of these activities do you like best?','Do you prefer being outside or inside?','What outdoor activities can you do near your home?']}}
});
