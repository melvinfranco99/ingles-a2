EXAM({
r1:[
{t:'<b>GYM</b><br>Please bring a towel. Towels not provided.',o:['The gym does not give you a towel.','You can buy towels at the gym.','Towels are free at the gym.']},
{t:'Hi Pete, I\'m running late. The meeting starts at 10 – could you tell everyone I\'ll be there at 10.15? Thanks, Chris',q:'Chris wants Pete to',o:['give a message to some people.','start the meeting at 10.15.','go to the meeting for him.']},
{t:'<b>POST OFFICE</b><br>Parcels collected from your home – book online.',o:['Someone can come to your house to get your parcel.','You can only send parcels online.','You must bring parcels to the post office.']},
{t:'<b>DOG SHOW</b><br>Saturday 10–4. Entry £3. Dogs must be on a lead.',o:['Dogs at the show must be held by their owners.','Dogs are not allowed at the show.','Only people with dogs can come to the show.']},
{t:'Hi Sam, don\'t forget your swimming things tomorrow. We\'re going to the pool after school. See you! Amy',q:'Amy is',o:['reminding Sam about something.','inviting Sam to her house.','asking Sam to teach her to swim.']},
{t:'<b>TOURIST INFORMATION</b><br>Free maps of the town available here.',o:['You can get a town map without paying.','You can buy maps here.','There are no maps of the town.']}],
r2:{title:'A special meal',intro:'Three people describe a special meal they remember.',sections:[
{h:'Tom',t:'The best meal I ever had was on a beach in Thailand. A man was cooking fish on a small fire, and we sat on the sand to eat it. It was very simple but delicious. We watched the sun go down while we ate. It only cost two pounds!'},
{h:'Rachel',t:'For my twenty-first birthday, my parents took me to a very expensive restaurant in Paris. There were eight courses, and each plate looked like a piece of art. Some of the food was strange – I didn\'t know what I was eating! But it was an amazing experience.'},
{h:'Ahmed',t:'My favourite meal is the one my grandmother cooks every year for our family celebration. She spends two days preparing it. There are about thirty people, and we all eat together at one long table. The food is wonderful, but the best thing is being with my family.'}],
q:['Who ate a meal that was very cheap?','Who didn\'t recognise some of the food?','Who ate with a lot of people?','Who ate outdoors?','Whose meal took a long time to make?','Who ate the meal on a birthday?','Who enjoyed the company more than the food?'],
ans:[0,1,2,0,2,1,2]},
r3:{title:'The night the lights went out',text:`Last winter, a big storm hit the small town of Ashford. For three days, the whole town had no electricity.

"At first, it was exciting," says fourteen-year-old Jack Peters. "School was closed, and we lit candles in the house. It felt like an adventure."

But the adventure soon became difficult. "It was so cold," Jack remembers. "We wore our coats inside, and we all slept in the living room by the fire. My little sister cried because she couldn't watch TV."

Without electricity, Jack's family couldn't cook. "Our neighbours, the Johnsons, have an old gas cooker, so they invited us and three other families for dinner every night. We didn't know them well before, but now we're good friends."

Jack also discovered something new. "There was no internet, so I started reading my dad's old books. I read three in three days! Before the storm, I never read anything."

When the lights came back on, everyone cheered. "But I think we all learnt something," Jack says. "We don't need our phones all the time. We need each other."`,
q:[{q:'How did Jack feel at the start of the power cut?',o:['excited','frightened','bored']},
{q:'Where did Jack\'s family sleep?',o:['in the living room','at the neighbours\' house','in their bedrooms']},
{q:'Why did the family eat at the Johnsons\' house?',o:['The Johnsons could still cook.','The Johnsons had electricity.','Jack\'s mother was ill.']},
{q:'What new thing did Jack do?',o:['He read books.','He learnt to cook.','He played board games.']},
{q:'What does Jack say he learnt?',o:['People are more important than technology.','Storms are exciting.','It is good to have a gas cooker.']}]},
r4:{title:'Penguins at the zoo',text:`London Zoo has a beach where visitors can watch penguins. The penguins have a large pool, and visitors can [19] them swimming under the water through big windows.

Every day at half past two, the keepers [20] the penguins with fish. This is a very popular time, so it's a good idea to arrive early to get a good [21].

The keepers know every penguin by name. They can [22] them by the coloured bands on their wings. They also give a short talk about penguins and answer questions.

Penguins are very social birds and don't like being alone. They [23] their whole lives in large groups. Some penguins stay with the same partner [24] many years.`,
opts:[['watch','look','notice to'],['feed','give','eat'],['place','room','site'],['recognise','know about','remember to'],['spend','pass by','use'],['for','since','during']]},
r5:{title:'School newspaper',text:`Dear students,

We are starting a new school newspaper, and we need your help! [25] you like writing, taking photos or drawing? If so, come and join us.

The newspaper will have news about the school, sports results, interviews [26] teachers and lots more. We want everyone to read it, so we need ideas from students of all ages.

We meet every Tuesday at lunchtime in Room 15. You don't need [27] experience – just bring your ideas! If you can't come to the meetings, you can send your articles by email.

The first newspaper will come [28] next month. We're very excited about it!

If you [29] any questions, please speak to Mr Harris or send us a message. We hope to see [30] of you there!

The newspaper team`,
ans:[['do'],['with'],['any'],['out'],['have'],['lots','some','many','all']]},
w6:{ctx:'You are going to a music festival next weekend. Write an email to your English friend, Sasha. In your email:',notes:['say who you are going with','say which bands you want to see','invite Sasha to come']},
w7:['A woman is reading a book on a park bench. A dog is sitting next to her.','The dog takes her bag and runs away.','A young man is giving the bag back to the woman. The dog is with him.'],
l1:[
{q:'What did the girl lose?',o:['her scarf','her gloves','her hat'],script:[['M','Have you got everything?'],['W','I\'ve got my hat and gloves. But where\'s my scarf? I had it on the bus!']]},
{q:'Which room is the meeting in?',o:['Room 14','Room 40','Room 4'],script:[['W','Is the meeting in Room 4?'],['M','No, that\'s too small. It\'s in Room 14, on the first floor.'],['W','Not 40?'],['M','No, fourteen.']]},
{q:'What will the man do this evening?',o:['go to the gym','watch TV','visit a friend'],script:[['W','Do you want to come round and watch a film tonight?'],['M','I\'d love to, but I promised to go to the gym with Tim. Maybe tomorrow?']]},
{q:'What is the woman going to cook?',o:['soup','curry','pasta'],script:[['M','What\'s for dinner? Pasta again?'],['W','No, I fancy something hot and spicy. I\'ll make a curry.'],['M','Great, not soup!']]},
{q:'What time does the museum open on Sundays?',o:['11.00','10.00','9.00'],script:[['W','Is the museum open at nine?'],['M','On weekdays it opens at ten, but on Sundays it\'s an hour later.']]}],
l2:{intro:'You will hear a man talking about a guitar course.',g:'M',head:'Guitar Course',script:`Hello. I'm Dave, and I teach guitar at the Riverside Music School. The beginners' course is ten weeks long and starts on Tuesday the second of October. Classes are from seven to eight in the evening. There are only six students in each class, so you get lots of help. If you don't have a guitar, you can rent one from the school for five pounds a week. At the end of the course, students play in a small concert for their families. The course costs one hundred and twenty pounds.`,
sents:['Length of course: ___ weeks','Starts: Tuesday ___ October','Students in each class: ___','Rent a guitar: £___ a week','At the end: a ___'],
ans:[['10','ten'],['2nd','2','second'],['6','six'],['5','five'],['concert']]},
l3:{intro:'You will hear Amy talking to her friend Ben about a trip to London.',names:{W:'Amy',M:'Ben'},script:[
['M','Amy, how was London?'],['W','Great! We went to see a musical for my mum\'s birthday.'],
['M','Which one?'],['W','The Lion King. The costumes were amazing.'],
['M','Did you stay the night?'],['W','Yes, at a hotel near the river. We went on a boat trip the next morning.'],
['M','Did you go shopping?'],['W','A little. I bought a book about London, but the shops were too crowded.'],
['M','How did you get there?'],['W','By train. It was quick, only two hours. But it was very full on the way back. We had to stand!']],
q:[{q:'Why did Amy go to London?',o:['for a birthday','for a school trip','to go shopping']},
{q:'What did Amy like about the musical?',o:['the costumes','the music','the actors']},
{q:'What did they do on the second morning?',o:['They went on a boat.','They went shopping.','They visited a museum.']},
{q:'What did Amy buy?',o:['a book','some clothes','a present for her mum']},
{q:'What was the problem on the train home?',o:['There were no seats.','It was late.','It was cancelled.']}]},
l4:[
{ctx:'You hear a woman talking about a hotel.',q:'Why did she choose it?',o:['It was near the beach.','It was cheap.','It had a pool.'],script:[['W','It wasn\'t cheap and there was no pool. But you could walk out of the door straight onto the sand. That\'s why we booked it.']]},
{ctx:'You hear a boy talking to his teacher.',q:'What does he want?',o:['more time for his homework','help with a question','to change classes'],script:[['M','Miss, I was ill on Monday and Tuesday. Could I give you my essay next week instead of Friday?']]},
{ctx:'You hear two friends talking about a film.',q:'What does the man think of it?',o:['It was frightening.','It was funny.','It was sad.'],script:[['W','Did you like the film?'],['M','I couldn\'t watch half of it! I had my hands over my eyes. I won\'t sleep tonight.']]},
{ctx:'You hear a woman calling a garage.',q:'What is wrong with her car?',o:['It won\'t start.','It has a flat tyre.','The lights don\'t work.'],script:[['W','Hello, my car is outside my house and it just won\'t start. The lights come on, but the engine does nothing.']]},
{ctx:'You hear a man talking about learning to swim.',q:'How does he feel now?',o:['confident','afraid','tired'],script:[['M','I was really scared of the water as a child. But after ten lessons I can swim fifty metres. I feel great in the water now.']]}],
l5:{intro:'You will hear Sara talking to her dad about where her friends are going after school. Where is each person going?',names:{W:'Sara',M:'Dad'},script:[
['M','Sara, where are your friends going after school today?'],
['W','Well, Anna is going to the dentist. She has a toothache.'],
['M','Poor Anna. And Jake?'],['W','Jake\'s going to football training at the park.'],
['M','What about Mia?'],['W','Mia\'s going to the library to work on her project.'],
['M','And Liam?'],['W','He usually goes swimming, but today he\'s going to his grandmother\'s house.'],
['M','And Kate?'],['W','Kate\'s going shopping in town with her mum.']],
items:['Anna','Jake','Mia','Liam','Kate'],opts:['dentist','park','library','grandmother\'s house','town centre','swimming pool','cinema','hospital']},
s:{p1:['What is your favourite meal of the day?','Who does the cooking in your house?','Do you like trying new food?','What did you eat at your last celebration?','Please tell me something about your favourite restaurant.'],
p2:{topic:'places to eat',ideas:['a fast-food restaurant','a picnic in the park','an expensive restaurant','a café','eating at home'],q:['Do you think picnics are fun?','Which of these places do you like best?','How often do you eat in restaurants?','What food do you cook at home?']}}
});
