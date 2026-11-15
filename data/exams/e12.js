EXAM({
r1:[
{t:'<b>HAIRDRESSER</b><br>No appointment needed on weekday mornings.',o:['You can just walk in on some days.','The shop is closed on weekday mornings.','You must always book before you come.']},
{t:'Anna – Can you feed my cat while I\'m away? The key is under the plant pot by the door. Back on Sunday! Jill',q:'Why has Jill written this note?',o:['to ask Anna for help','to tell Anna where she is going','to invite Anna to her house']},
{t:'<b>MUSEUM SHOP</b><br>Members get 10% off all purchases.',o:['Some people pay less in the shop.','Everything in the shop is 10% cheaper.','Only members can use the shop.']},
{t:'<b>SPEED LIMIT 20</b><br>School next 500 metres.',o:['Drivers must go slowly near the school.','The school is 20 metres away.','Cars cannot drive near the school.']},
{t:'Hi Ben, the match is cancelled because the pitch is too wet. We\'ll play next Saturday instead. Coach',q:'What is the coach telling Ben?',o:['The game will be on a different day.','The match will be at a different pitch.','Ben should bring a coat.']},
{t:'<b>ROOM TO RENT</b><br>Quiet student wanted. Near university. Bills included.',o:['The rent pays for electricity and water too.','The room is in the university.','The owner is a student.']}],
r2:{title:'Getting to school',intro:'Three students talk about how they get to school.',sections:[
{h:'Lucy',t:'I live on a small island, so I go to school by boat every morning. The trip takes twenty minutes. When the sea is rough, the boat doesn\'t go, and we have to stay at home. I love it when that happens! I often see dolphins on the way.'},
{h:'Sam',t:'I cycle to school with my two best friends. It takes about fifteen minutes. My parents bought me a good helmet and lights for the dark winter mornings. Cycling wakes me up, so I feel ready to learn when I get to school. When it snows, my dad drives me.'},
{h:'Priya',t:'I take two buses to get to school, and the journey takes an hour. It\'s very long, but I use the time to read or finish my homework. Sometimes the buses are late, and then I get into trouble with my teacher, even though it isn\'t my fault.'}],
q:['Who sometimes misses school because of the weather?','Who gets a lift from a parent sometimes?','Who studies on the way to school?','Who travels with friends?','Who sees animals on the journey?','Who has the longest journey?','Who is sometimes late for school?'],
ans:[0,1,2,1,0,2,2]},
r3:{title:'Running a café at fifteen',text:`Every Sunday, fifteen-year-old Owen Hughes runs a café in his village hall. He bakes the cakes, makes the coffee and serves the customers – with a little help from his friends.

"It started as a school project," Owen explains. "We had to start a small business. Most people sold things online, but I wanted to do something that brought people together."

The village didn't have a café, and many older people lived alone. "My grandmother told me she sometimes didn't speak to anyone for days," Owen says. "That made me sad. I wanted to give people a place to meet."

The first Sunday, only six people came. "I was disappointed, but my grandmother said, 'Give it time.' She was right. Now we have about fifty customers every week."

Owen doesn't keep the money. He gives it to a charity for older people. "I don't need it," he says. "I just enjoy seeing people chat and laugh."

His teacher, Mrs Lewis, is very proud. "Owen got the top mark for his project," she says. "But he's done much more than a project. He's changed the village."`,
q:[{q:'Why did Owen start the café?',o:['It was part of his schoolwork.','His parents asked him to.','He needed money.']},
{q:'What worried Owen about older people in the village?',o:['They were lonely.','They were ill.','They had no money.']},
{q:'How did Owen feel after the first Sunday?',o:['disappointed','happy','tired']},
{q:'What happens to the money from the café?',o:['It helps other people.','Owen saves it.','It pays for the village hall.']},
{q:'What does Mrs Lewis say about Owen?',o:['His café has made a big difference.','He should have sold things online.','He needs to work harder at school.']}]},
r4:{title:'The Internet',text:`The internet has changed the way we live, work and [19] in touch with each other. But it is not as old as many people think.

The first network of computers was [20] in the USA in 1969. At first, only scientists and the army used it. The World Wide Web, which most of us use today, was invented by a British scientist called Tim Berners-Lee in 1989.

In the 1990s, more and more people started to [21] the internet at home. Today, more than five billion people use it.

The internet has many [22]. We can find information quickly, shop from home and talk to friends all over the world. But it also has [23]. Some people spend too much time online, and not all the information we find is [24].`,
opts:[['keep','stay','hold'],['set up','put up','got up'],['use','spend','work'],['advantages','goods','helps'],['problems','troubles','mistakes'],['true','real','right on']]},
r5:{title:'Moving to a new school',text:`Hi Chloe,

How are you? I started at my new school last week. I was very nervous on the first day [25] I didn't know anybody. But everyone was really friendly.

The school is much bigger [26] my old one. There are about a thousand students! The building is very modern, and there's a swimming pool. I've already joined the swimming team.

My favourite teacher is Mr Clark. He teaches geography and he tells us funny stories about [27] travels. He's been to more than fifty countries!

I've made a new friend called Zoe. She sits next [28] me in maths. She lives in my street, so we walk home together.

[29] about you? How is everyone at my old school? I miss you all. Write soon and tell me all the news!

Love,
Emma

P.S. [30] you like to come and visit me one weekend?`,
ans:[['because'],['than'],['his'],['to'],['what','how'],['would']]},
w6:{ctx:'You have just come back from a school trip. Write an email to your English friend, Max. In your email:',notes:['say where you went','say what you did there','say what you liked best']},
w7:['A girl is walking to school. She sees a small bird on the ground.','She takes the bird to her school. Her teacher looks at it.','The girl and her class watch the bird fly away from the window.'],
l1:[
{q:'What is the girl\'s new hobby?',o:['photography','painting','dancing'],script:[['M','Are you still doing dance classes?'],['W','No, I stopped. I tried painting, but I wasn\'t very good. Now I take photos. I got a camera for my birthday.']]},
{q:'Where are the man\'s parents now?',o:['in Italy','in Spain','at home'],script:[['W','Are your parents back from Spain?'],['M','They came back last week, but they\'ve already gone away again. They\'re in Italy now, visiting friends.']]},
{q:'How much is the concert ticket?',o:['£18','£20','£15'],script:[['W','How much are the tickets?'],['M','Twenty pounds, but students pay fifteen.'],['W','I\'m not a student any more.'],['M','Then it\'s twenty. Oh, wait – it\'s Tuesday. Everyone gets two pounds off today. So eighteen.']]},
{q:'What does the woman want to buy?',o:['a chair','a desk','a bed'],script:[['M','Can I help you?'],['W','Yes, I\'ve got a new desk for my study, but I need something comfortable to sit on.'],['M','Chairs are over here.']]},
{q:'How will the boy get to the airport?',o:['by taxi','by train','by car'],script:[['W','Shall I drive you to the airport?'],['M','Thanks, but you\'re working. The train doesn\'t go there, so I\'ve booked a taxi.']]}],
l2:{intro:'You will hear a man talking about a new sports centre.',g:'M',head:'Hillside Sports Centre',script:`Hello and welcome to the new Hillside Sports Centre. We opened last week, and we're very proud of our facilities. We have a fifty-metre swimming pool, a gym and four tennis courts. We're open every day from six in the morning until ten at night. Membership costs thirty pounds a month for adults and half that for children. On Wednesdays, there's a special swimming class for babies. If you want to join, you need to bring a photo for your membership card. Our café on the first floor serves healthy snacks and drinks.`,
sents:['Number of tennis courts: ___','Closes at: ___ p.m.','Monthly price for adults: £___','Swimming class for babies: on ___','To join, bring a ___'],
ans:[['4','four'],['10','ten'],['30','thirty'],['wednesday','wednesdays'],['photo','photograph']]},
l3:{intro:'You will hear Megan talking to her friend Chris about a camping trip.',names:{W:'Megan',M:'Chris'},script:[
['M','Megan, how was the camping trip?'],['W','Well… it was an adventure! We went to a campsite near the beach.'],
['M','Who did you go with?'],['W','My two cousins and my aunt.'],
['M','What happened?'],['W','On the first night there was a terrible storm and our tent fell down! We had to sleep in the car.'],
['M','Oh no! Did you go home?'],['W','No. The next day was sunny, so we put the tent up again. We stayed four nights in the end.'],
['M','What was the best thing?'],['W','We cooked our food on a fire every evening. It was so good. And we saw lots of stars.'],
['M','Would you go camping again?'],['W','Yes, but next time I\'ll take a better tent!']],
q:[{q:'Where was the campsite?',o:['near the beach','in the mountains','by a lake']},
{q:'Who did Megan go camping with?',o:['her aunt and cousins','her parents','her friends']},
{q:'Where did Megan sleep on the first night?',o:['in a car','in a tent','in a hotel']},
{q:'How long did Megan stay?',o:['four nights','one night','two nights']},
{q:'What did Megan enjoy most?',o:['cooking outside','swimming in the sea','the storm']}]},
l4:[
{ctx:'You hear a woman talking about her new car.',q:'Why did she buy it?',o:['It uses less petrol.','It is bigger.','It was cheap.'],script:[['W','It\'s the same size as my old one and it wasn\'t cheap. But it uses half the petrol, so I\'ll save money in the end.']]},
{ctx:'You hear a man talking to a waiter.',q:'What is the problem?',o:['His food is wrong.','His food is cold.','He is waiting too long.'],script:[['M','Excuse me, I ordered the chicken, but this is fish. Could you change it, please?']]},
{ctx:'You hear a girl talking about her weekend.',q:'Who did she spend it with?',o:['her grandparents','her friends','her brother'],script:[['W','My friends all went to the beach, but I stayed at my grandparents\' house. My grandad taught me to play cards. It was fun.']]},
{ctx:'You hear two friends talking.',q:'What does the man want to do?',o:['learn a language','change his job','move house'],script:[['W','Are you still thinking about a new job?'],['M','No, I\'m happy at work. But I really want to learn Japanese. I\'m going to Tokyo next year.']]},
{ctx:'You hear a boy talking about a book.',q:'What does he say about it?',o:['It was difficult to read.','It was too short.','It was funny.'],script:[['M','The story was good, but there were so many long words. I needed a dictionary for every page!']]}],
l5:{intro:'You will hear Harry talking to his mum about his friends\' birthday presents. What did each person get?',names:{M:'Harry',W:'Mum'},script:[
['W','Harry, what did your friends get for their birthdays this year?'],
['M','Well, Max got a skateboard. He goes to the skate park every day now.'],
['W','And Olivia?'],['M','Olivia wanted a phone, but her parents said no. She got a watch instead.'],
['W','What about Sam?'],['M','Sam got some headphones. Really expensive ones!'],
['W','And Lily?'],['M','Lily got a guitar. She\'s having lessons.'],
['W','And Jack?'],['M','Jack got a football shirt. His favourite team.']],
items:['Max','Olivia','Sam','Lily','Jack'],opts:['skateboard','watch','headphones','guitar','football shirt','phone','bike','book']},
s:{p1:['How do you get to school or work?','How long does it take?','Do you like travelling by bus?','How did you travel on your last holiday?','Please tell me something about your journey to school or work.'],
p2:{topic:'jobs',ideas:['a doctor','a teacher','a chef','a pilot','a farmer'],q:['Do you think a farmer has an interesting job?','Which of these jobs would you like to do?','What job do you want to do in the future?','What jobs do people in your family do?']}}
});
