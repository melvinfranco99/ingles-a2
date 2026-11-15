EXAM({
r1:[
{t:'<b>NEW STUDENTS</b><br>Please go to the school office on your first morning.',o:['New students should visit the office when they arrive.','The office is closed in the morning.','Only new teachers go to the office.']},
{t:'Hi Abby, welcome to the class! Sit with me at lunch tomorrow and I\'ll introduce you to everyone. Holly',q:'Holly wants to',o:['help Abby meet people.','have lunch alone.','change classes.']},
{t:'<b>SCHOOL CANTEEN</b><br>Hot meals 12–1.30. Sandwiches all day.',o:['You can get a sandwich at any time.','The canteen only serves hot meals.','The canteen closes at 12.']},
{t:'<b>LOCKERS</b><br>Students must bring their own lock.',o:['The school doesn\'t give you a lock.','There are no lockers.','You can buy lockers here.']},
{t:'Sam – I\'ve signed you up for the football team. Training is on Wednesday after school. Coach Davies',q:'Coach Davies is telling Sam',o:['he is now in the team.','he must buy football boots.','training is cancelled.']},
{t:'<b>SCHOOL BUS</b><br>Leaves at 3.45 sharp. It will not wait.',o:['Students must be on time for the bus.','The bus is often late.','The bus waits for everyone.']}],
r2:{title:'My new school',intro:'Three students talk about starting at a new school.',sections:[
{h:'Grace',t:'My family moved from London to a small village, so I changed schools. My old school had two thousand students, and this one has only two hundred! At first I missed my friends, but now I know everyone\'s name. The teachers know me well too.'},
{h:'Omar',t:'I came from Syria two years ago and didn\'t speak any English. The first months were very hard. A boy called Jake helped me every day – he showed me around and taught me words. Now he\'s my best friend, and I\'m one of the best students in my class.'},
{h:'Lily',t:'I started secondary school in September. Everything is bigger, and we have a different teacher for every subject. I got lost on my first day and arrived late to maths! The worst thing is all the homework, but I\'ve joined the drama club, and that\'s great fun.'}],
q:['Who goes to a much smaller school now?','Who had to learn a new language?','Who was late for a lesson?','Who found a close friend at school?','Who has joined an after-school activity?','Who has a lot of work to do at home?','Who says the teachers know them well?'],
ans:[0,1,2,1,2,2,0]},
r3:{title:'The first day',text:`Every year in September, thousands of children in Britain start secondary school. For many, it is a big change.

Twelve-year-old Daniel Shaw remembers his first day last year. "I was so nervous I couldn't eat my breakfast," he says. "My new school was huge, and I didn't know anyone because all my friends went to a different school."

At his old primary school, Daniel had one teacher for every subject. "Now I have twelve different teachers," he says. "At first I couldn't remember their names!"

The school helped new students by giving each one an older "buddy". Daniel's buddy was Amira, who was fifteen. "She showed me where everything was and told me which teachers were strict," he laughs. "She was really kind."

After a few weeks, Daniel started to feel happier. He joined the chess club and the swimming team and made lots of new friends. "Now I love it," he says. "This year I'm going to be a buddy for a new student. I want to help them like Amira helped me."`,
q:[{q:'Why was Daniel nervous?',o:['He didn\'t know anyone at the new school.','He didn\'t like his teachers.','He was late.']},
{q:'What was difficult at first?',o:['remembering the teachers\' names','finding the school','doing the homework']},
{q:'What did Amira do?',o:['She helped Daniel find his way.','She taught Daniel chess.','She was Daniel\'s teacher.']},
{q:'How did Daniel make friends?',o:['by joining clubs','through Amira','in his maths class']},
{q:'What will Daniel do this year?',o:['help a younger student','join a new club','change school']}]},
r4:{title:'School around the world',text:`School is very different in different countries. In Finland, children don't [19] school until they are seven, but Finnish students are some of the best in the world.

In Japan, students clean their classrooms every day. There are no cleaners, so students [20] turns to sweep the floors and clean the windows.

In some parts of Australia, children live very far from the nearest school. They [21] lessons on the internet with a teacher who might be hundreds of kilometres away.

In France, many schools have a long lunch break of up to two hours. Students [22] a three-course meal in the school canteen.

In Germany, the school day usually [23] at lunchtime, and students go home to eat. But they often have a lot of homework [24] the afternoon.`,
opts:[['start','begin at','open'],['take','make','do'],['have','make','get on'],['eat','drink','cook'],['finishes','closes up','completes'],['in','at','on']]},
r5:{title:'New school',text:`Hi Ben,

I've just finished my first week [25] my new school. It's very different from our old school!

The school is really big – there are about a thousand students. On the first day, I got lost three times. But the other students are friendly and helped me find [26] classrooms.

My favourite subject is science. We have a great teacher, and we do experiments every week. I'm not [27] keen on French, though. The teacher speaks only French in the lessons, and I don't understand much!

I've joined the basketball team. We train [28] Tuesday and Thursday after school.

How [29] you? Do you miss me? Write back and tell me [30] the news!

Your friend,
Josh`,
ans:[['at'],['my','the'],['very','so'],['on','every'],['are'],['all']]},
w6:{ctx:'You have just started at a new school. Write an email to your English friend, Jamie. In your email:',notes:['describe your new school','say what you think of your classmates','say what your favourite subject is']},
w7:['A boy is standing alone in a school playground. He looks sad.','A girl comes and talks to him.','The boy is playing football with a group of children. He is smiling.'],
l1:[
{q:'Which subject does the girl like best?',o:['art','music','maths'],script:[['M','Do you still like maths best?'],['W','Not this year. Music is OK, but art is my favourite now.']]},
{q:'Where is the new student from?',o:['Poland','Portugal','Brazil'],script:[['W','Is the new student from Portugal?'],['M','No, Poland. The girl last year was from Brazil.']]},
{q:'What time does school start?',o:['8.45','8.15','9.00'],script:[['M','Does school start at nine?'],['W','No, quarter to nine. But you should arrive at eight thirty.']]},
{q:'What does the boy need to buy?',o:['a calculator','a bag','a pencil case'],script:[['W','Have you got everything for school?'],['M','I\'ve got a new bag and a pencil case. I just need a calculator.']]},
{q:'What is the name of the new teacher?',o:['Mrs Hill','Mrs Bell','Mrs Hall'],script:[['M','Is the new teacher Mrs Hall?'],['W','No, Mrs Hill. H-I-L-L.']]}],
l2:{intro:'You will hear a woman talking to new students at a school.',g:'W',head:'Welcome to Park School',script:`Good morning, and welcome to Park School. Lessons start at eight fifty every morning, and the school day finishes at three thirty. Lunch is in the canteen from twelve fifteen. Please wear your uniform every day – it's a blue jumper with the school badge. On Fridays, you can wear your own clothes if you pay one pound for charity. If you have any problems, talk to your form tutor or come to the school office, which is next to the main hall.`,
sents:['Lessons start at: ___','School day finishes at: ___','Colour of jumper: ___','Own clothes on: ___','School office is next to the main ___'],
ans:[['8.50','eight fifty','8:50'],['3.30','three thirty','3:30'],['blue'],['friday','fridays'],['hall']]},
l3:{intro:'You will hear Kate talking to her friend David about her first week at university.',names:{W:'Kate',M:'David'},script:[
['M','Kate, how was your first week at university?'],['W','Busy! I didn\'t sleep much.'],
['M','Why not?'],['W','There were parties every night. And my room is next to the kitchen, so it\'s noisy.'],
['M','What are your classes like?'],['W','Interesting, but very big. There are three hundred students in my history class!'],
['M','Have you made friends?'],['W','Yes, a girl from Scotland. We\'re in the same building.'],
['M','Do you cook for yourself?'],['W','Yes, but mostly pasta! I need to learn to cook.']],
q:[{q:'Why didn\'t Kate sleep much?',o:['because of noise and parties','because she was studying','because she was homesick']},
{q:'What does Kate say about her classes?',o:['There are lots of students.','They are boring.','They are difficult.']},
{q:'Where is Kate\'s new friend from?',o:['Scotland','Wales','Ireland']},
{q:'Where does her friend live?',o:['in the same building','next to the kitchen','in town']},
{q:'What does Kate need to do?',o:['learn to cook','find a new room','make more friends']}]},
l4:[
{ctx:'You hear a boy talking about his new school.',q:'What does he not like?',o:['the uniform','the teachers','the food'],script:[['M','The teachers are nice and the food is good. But I hate wearing a tie every day!']]},
{ctx:'You hear a teacher talking to a class.',q:'What is she doing?',o:['introducing a new student','giving homework','explaining a test'],script:[['W','Everyone, this is Mateo. He\'s from Argentina and he\'ll be in our class from today. Please make him feel welcome.']]},
{ctx:'You hear two friends talking about a test.',q:'What happened?',o:['The girl did well.','The girl failed.','The test was cancelled.'],script:[['M','How was the science test?'],['W','I got ninety percent! I was so happy.']]},
{ctx:'You hear a girl talking about school clubs.',q:'Which club has she joined?',o:['the photography club','the drama club','the chess club'],script:[['W','I wanted to join the drama club, but it was full. And chess is boring. So I joined the photography club.']]},
{ctx:'You hear a mother calling a school.',q:'Why is she calling?',o:['Her son is ill.','Her son is late.','She wants to see a teacher.'],script:[['W','Hello, my son Tom won\'t be at school today. He has a temperature.']]}],
l5:{intro:'You will hear Joe talking to his mum about the clubs his friends have joined at school. Which club has each person joined?',names:{M:'Joe',W:'Mum'},script:[
['W','Joe, which clubs have your friends joined?'],
['M','Well, Ella has joined the drama club.'],
['W','And Max?'],['M','Max has joined the chess club.'],
['W','What about Sara?'],['M','Sara wanted to join the art club, but now she\'s in the science club.'],
['W','And Leo?'],['M','Leo has joined the music club.'],
['W','And you?'],['M','I\'ve joined the football club, of course!']],
items:['Ella','Max','Sara','Leo','Joe'],opts:['drama','chess','science','music','football','art','cooking','photography']},
s:{p1:['What school do you go to?','What is your favourite subject?','Do you have a lot of homework?','What did you do at school yesterday?','Please tell me something about your best friend at school.'],
p2:{topic:'school subjects',ideas:['maths','history','English','sport','music'],q:['Do you think history is interesting?','Which of these subjects do you like best?','Which subject is the most useful?','What subject would you like to study at school?']}}
});
