EXAM({
r1:[
{t:'<b>STADIUM</b><br>Tickets for Saturday\'s match on sale from Monday.',o:['You can buy tickets from the start of the week.','The match is on Monday.','Tickets are sold out.']},
{t:'Hi Ollie, our team won 3–1! I scored the second goal. Wish you were there! Tom',q:'Tom is',o:['telling Ollie some good news.','inviting Ollie to a match.','asking Ollie about the score.']},
{t:'<b>RUNNING TRACK</b><br>Open to the public on Sundays only.',o:['Anyone can use the track one day a week.','The track is closed on Sundays.','Only club members can use it.']},
{t:'<b>TENNIS COURTS</b><br>Book online. Maximum 1 hour per booking.',o:['You can only play for an hour each time.','You can play all day.','You must book at the courts.']},
{t:'Emma – your swimming competition starts at 10, but you need to be there at 9.15 to warm up. Coach',q:'The coach is telling Emma',o:['to arrive early.','the competition is at 9.15.','to stop swimming.']},
{t:'<b>SPORTS CENTRE</b><br>Lost property: ask at reception.',o:['If you lose something, go to the front desk.','You can buy sports clothes here.','The reception is closed.']}],
r2:{title:'Sports heroes',intro:'Three young people talk about their sport.',sections:[
{h:'Lena',t:'I\'m fifteen and I play tennis. I train for three hours every day before and after school. Last year I won the national under-sixteen championship. My dream is to play at Wimbledon. My parents drive me to competitions all over the country every weekend.'},
{h:'Jamal',t:'I play wheelchair basketball. I lost the use of my legs in a car accident when I was eight. I was very sad for a long time, but basketball changed my life. Next year I hope to play for my country at the Paralympic Games.'},
{h:'Mei',t:'I\'m a gymnast. I started when I was four because I was always climbing on the furniture at home! It\'s a hard sport – I\'ve broken my arm twice. But I love the feeling when I do a perfect routine. I also help coach the young children at my club.'}],
q:['Who has won a big competition?','Who started their sport because of their behaviour as a child?','Who wants to represent their country?','Whose family travels a lot for their sport?','Who has been injured doing their sport?','Who teaches younger people?','Whose life was changed by a sport after something bad happened?'],
ans:[0,2,1,0,2,2,1]},
r3:{title:'The oldest marathon runner',text:`Fauja Singh started running marathons at the age of eighty-nine. When he was a hundred years old, he became the oldest person to finish a marathon.

Fauja was born in India in 1911. As a child, he couldn't walk until he was five, because his legs were very weak. "Other children laughed at me," he said. "Nobody thought I would ever be a runner."

He moved to London in the 1990s to live with his son. After his wife and son died, he was very sad and lonely. "I needed something to do," he said. So he started running.

Fauja trained every day, running about fifteen kilometres. He ran his first marathon in London in 2000. "It was very hard, but I finished," he said. "After that, I wanted to run more."

He ran nine marathons in total. His secret? "I eat simple food, I drink a lot of tea, and I'm always happy," he said. "Running made me feel young again." Fauja became a hero for many people around the world, showing that you are never too old to start something new.`,
q:[{q:'What was Fauja\'s problem as a child?',o:['He couldn\'t walk.','He was always ill.','He didn\'t like sport.']},
{q:'Why did Fauja start running?',o:['He was unhappy and needed an activity.','His doctor told him to.','His son was a runner.']},
{q:'How far did Fauja run every day?',o:['about 15 km','a marathon','about 5 km']},
{q:'How many marathons did Fauja run?',o:['nine','one','a hundred']},
{q:'What does the article say about Fauja?',o:['He inspired many people.','He won many races.','He was a professional runner.']}]},
r4:{title:'The Olympic Games',text:`The Olympic Games started in ancient Greece almost three thousand years ago. They were held every four years in a place [19] Olympia. Only men could take part, and the winners got a crown of leaves.

The modern Olympic Games [20] in 1896 in Athens. There were only two hundred and fifty athletes from fourteen countries. Today, more than ten thousand athletes from over two hundred countries [21] part.

There are Summer and Winter Olympics. The Summer Games include sports [22] swimming, running and football. The Winter Games have skiing, skating and other sports on snow and ice.

The Olympic symbol is five coloured rings. They [23] the five continents of the world. Winners get gold medals, second place gets silver, and third place gets bronze. Many athletes [24] all their lives for a chance to win an Olympic medal.`,
opts:[['called','named as','said'],['began','opened up','founded'],['take','make','do'],['like','as','such'],['represent','show up','mean of'],['train','practise at','study']]},
r5:{title:'Match report',text:`Hi Grandad,

Our school football team played in the final [25] Saturday! It was against our biggest rivals, Hill School.

At half-time, we were losing 1–0. Our coach told us not [26] give up. In the second half, I passed the ball to Jake and he scored. Then, in the last minute, I scored a goal myself! We won 2–1.

Everyone was so happy. The whole team jumped [27] me. My mum was screaming so loudly that everyone [28] hear her!

We got a big trophy, and it's now in the school hall. The headteacher said we were the best team the school has [29] had.

I wish you could have been there. Next season, you must come and watch [30] play!

Love,
Ryan`,
ans:[['on','last'],['to'],['on'],['could'],['ever'],['me','us']]},
w6:{ctx:'Your team won an important match yesterday. Write an email to your English friend, Max. In your email:',notes:['say what sport you play','say what happened in the match','say how you celebrated']},
w7:['A girl is running in a race at school. She is last.','Her shoe comes off, but she keeps running.','She finishes the race. Everyone is clapping for her.'],
l1:[
{q:'Which sport does the boy play now?',o:['basketball','tennis','football'],script:[['W','Do you still play football?'],['M','No, I stopped. I tried tennis for a while, but now I play basketball.']]},
{q:'What was the score?',o:['3–2','2–3','3–1'],script:[['M','Did we win?'],['W','Yes, three–two. They scored first, but we scored three!']]},
{q:'Where will they watch the match?',o:['at a friend\'s house','at the stadium','at home'],script:[['W','Shall we go to the stadium?'],['M','Tickets are too expensive. And my TV is broken. Let\'s watch it at Pete\'s house.']]},
{q:'What time does the race start?',o:['11.00','10.00','11.30'],script:[['M','Does the race start at ten?'],['W','No, at eleven. But get there by ten thirty.']]},
{q:'What did the girl win?',o:['a cup','a medal','some money'],script:[['M','Did you get a medal?'],['W','No, the winners got a cup! Look how big it is!']]}],
l2:{intro:'You will hear a man talking about a sports day.',g:'M',head:'Sports Day',script:`Our school sports day will be on Friday the sixth of June on the school field. It starts at half past nine and finishes at three. Events include running, jumping and a fun race for parents. Each student must take part in at least two events. Please wear your house colour – there are four houses: red, blue, green and yellow. Bring a hat, sun cream and plenty of water. If it rains, sports day will move to the following Monday.`,
sents:['Date: Friday ___ June','Starts at: ___','Each student: at least ___ events','Bring: a hat, sun cream and ___','If it rains, moves to: ___'],
ans:[['6th','6','sixth'],['9.30','half past nine','9:30'],['2','two'],['water'],['monday']]},
l3:{intro:'You will hear Grace talking to her friend Paul about a tennis tournament.',names:{W:'Grace',M:'Paul'},script:[
['M','Grace, how was the tennis tournament?'],['W','I got to the final! But I lost.'],
['M','Oh, bad luck! Who did you play?'],['W','A girl from Manchester. She was really good. She\'s practised for ten years.'],
['M','How many matches did you play?'],['W','Four. The semi-final was the hardest – it lasted three hours!'],
['M','Did you get a prize?'],['W','Yes, a silver medal and some new tennis balls.'],
['M','What\'s next?'],['W','A bigger tournament in London in August.']],
q:[{q:'What happened in the final?',o:['Grace lost.','Grace won.','The final was cancelled.']},
{q:'Where was Grace\'s opponent from?',o:['Manchester','London','Liverpool']},
{q:'Which match was the most difficult?',o:['the semi-final','the final','the first match']},
{q:'What did Grace get?',o:['a medal and some balls','a cup','some money']},
{q:'When is the next tournament?',o:['in August','next week','in September']}]},
l4:[
{ctx:'You hear a man talking about a football match.',q:'How does he feel?',o:['disappointed','excited','angry'],script:[['M','We played so well, but we lost in the last minute. I really thought we were going to win.']]},
{ctx:'You hear a woman talking to her son.',q:'What does she want him to do?',o:['wash his sports clothes','go to training','buy new trainers'],script:[['W','Your football clothes are so dirty! Put them in the washing machine now, please.']]},
{ctx:'You hear two friends talking.',q:'What sport are they going to do?',o:['swimming','cycling','running'],script:[['M','Shall we go cycling?'],['W','It\'s too hot. Let\'s go to the pool instead.'],['M','Good idea.']]},
{ctx:'You hear a girl talking about her coach.',q:'What does she say about him?',o:['He is very strict.','He is very funny.','He is very young.'],script:[['W','He makes us run ten laps if we\'re one minute late. And he never smiles!']]},
{ctx:'You hear a man on the radio.',q:'What is he talking about?',o:['a new sports centre','a football match','a marathon'],script:[['M','The new sports centre opens tomorrow. It has two pools, a gym and an ice rink.']]}],
l5:{intro:'You will hear Ben talking to his dad about which sports his friends do. What sport does each person do?',names:{M:'Ben',W:'Dad'},script:[
['W','Ben, what sports do your friends do?'],
['M','Well, Harry does judo.'],
['W','And Kate?'],['M','Kate does athletics. She\'s really fast.'],
['W','What about Will?'],['M','Will used to play rugby, but now he plays hockey.'],
['W','And Amy?'],['M','Amy does horse riding.'],
['W','And Jack?'],['M','Jack plays golf with his grandfather.']],
items:['Harry','Kate','Will','Amy','Jack'],opts:['judo','athletics','hockey','horse riding','golf','rugby','tennis','swimming']},
s:{p1:['What sports do you like?','Do you play in a team?','Do you watch sport on TV?','What sport did you do last week?','Please tell me something about a famous sportsperson you like.'],
p2:{topic:'sports',ideas:['football','tennis','swimming','basketball','skiing'],q:['Do you think tennis is exciting to watch?','Which of these sports do you like best?','Is it better to play a team sport or an individual sport?','What sports are popular in your country?']}}
});
