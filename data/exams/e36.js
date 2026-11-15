EXAM({
r1:[
{t:'<b>COMPUTER ROOM</b><br>No food or drink near the computers.',o:['You can\'t eat in this room.','You can buy food here.','The computers are broken.']},
{t:'Hi Mum, my phone battery is nearly dead. If you can\'t call me, I\'m at Jo\'s house. Back by 9. Kate',q:'Why has Kate sent this message?',o:['to say where she is','to ask for a new phone','to ask Mum to call Jo']},
{t:'<b>FREE WI-FI</b><br>Ask staff for the password.',o:['You need to get the password from someone who works here.','The Wi-Fi costs money.','There is no Wi-Fi.']},
{t:'<b>PHONE REPAIRS</b><br>Most repairs done in one day.',o:['You can usually get your phone back quickly.','Repairs take a week.','The shop only sells new phones.']},
{t:'Jack – I\'ve changed the Wi-Fi password. It\'s on the fridge. Don\'t tell your friends! Dad',q:'Dad is telling Jack',o:['where to find some information.','the Wi-Fi isn\'t working.','to buy a new fridge.']},
{t:'<b>LIBRARY COMPUTERS</b><br>Maximum use: 1 hour per person per day.',o:['Each person can only use a computer for a limited time.','The computers are open for one hour a day.','You need to pay to use the computers.']}],
r2:{title:'Technology in my life',intro:'Three people talk about how they use technology.',sections:[
{h:'Edward',t:'I\'m seventy-five, and I got my first smartphone last year. My granddaughter taught me how to use it. Now I send her messages and photos every day. I also use it to find bus times. I still prefer reading paper newspapers, though.'},
{h:'Bella',t:'I\'m a student, and I use my laptop for everything – studying, watching films and talking to friends. Last month I decided to have one day a week without screens. On Sundays I go walking or read books. It\'s difficult, but I feel calmer.'},
{h:'Kwame',t:'I work as a computer programmer, so I\'m on a computer all day. I make apps for hospitals. When I get home, I play video games to relax. My wife says I spend too much time on screens, and she\'s probably right!'}],
q:['Who learnt from a younger family member?','Who has decided to use technology less?','Who uses technology for their job?','Who still likes an old-fashioned way of doing something?','Whose partner has a complaint?','Who uses their device to plan journeys?','Who feels more relaxed after a change?'],
ans:[0,1,2,0,2,0,1]},
r3:{title:'The robot teacher',text:`At a primary school in Japan, there is an unusual new teacher. It's a robot called Miko, and it helps children learn English.

Miko is about a metre tall, with big eyes and a friendly smile. It can talk, sing songs and play games with the children. "The children love it," says their teacher, Mrs Tanaka. "Some children are shy and don't like speaking English in front of their classmates. But they're happy to talk to Miko."

Miko can understand simple questions and answer them. It also remembers each child's name and the mistakes they make. "It helps them practise the words they find difficult," explains Mrs Tanaka.

But Miko isn't perfect. Sometimes it doesn't understand what the children say, and once it fell over during a dance! "The children thought that was very funny," says Mrs Tanaka.

Mrs Tanaka doesn't think robots will replace teachers. "Miko is a great helper, but children need real people too," she says. "A robot can't give you a hug when you're sad."`,
q:[{q:'What does Miko help children with?',o:['learning a language','learning maths','learning to dance']},
{q:'Why do shy children like Miko?',o:['They feel comfortable speaking to it.','It speaks Japanese.','It doesn\'t ask questions.']},
{q:'What can Miko do?',o:['remember children\'s mistakes','answer difficult questions','mark homework']},
{q:'What happened once?',o:['Miko fell down.','Miko stopped working.','Miko said something funny.']},
{q:'What does Mrs Tanaka think?',o:['Robots can\'t do everything a teacher does.','Robots will replace teachers.','Miko should leave the school.']}]},
r4:{title:'The first computers',text:`The first computers were enormous. In the 1940s, one computer could [19] a whole room and weigh thirty tonnes! They were very expensive, and only governments and big universities had them.

Over the years, computers became smaller, cheaper and much more [20]. In the 1980s, the first personal computers arrived. For the first time, people could [21] a computer at home.

Today, the phone in your pocket is millions of times more powerful than those first computers. We use them to [22] messages, take photos, watch films and find our way.

Some people worry that we [23] too much time on our devices. Experts say children should have time away from screens [24] day to play outside and talk to their families.`,
opts:[['fill','full','complete'],['powerful','strong','heavy'],['have','own up','keep on'],['send','post up','give'],['spend','pass','use up'],['every','all','each of']]},
r5:{title:'New laptop',text:`Hi Uncle Joe,

Thank you so much [25] the money you sent for my birthday. I've used it to buy a new laptop. My old one was very slow, and it [26] five minutes to switch on!

The new one is really fast. I use it for my homework, and I've also started learning [27] to make videos. I've made a short film about our cat. I'll send it [28] you if you like.

Mum says I can only use the laptop for two hours a day, [29] I'm not allowed to take it to my bedroom at night. I think that's a bit unfair, but OK!

[30] are you? Are you still enjoying your new job?

Love,
Daniel`,
ans:[['for'],['took'],['how'],['to'],['and'],['how']]},
w6:{ctx:'You have just bought a new phone. Write an email to your English friend, Charlie. In your email:',notes:['say what your phone is like','say what you use it for','say how much it cost']},
w7:['A boy is walking in the street and looking at his phone.','He walks into a lamp post.','The boy is sitting on a bench with ice on his head. He puts his phone in his bag.'],
l1:[
{q:'What does the man use his computer for most?',o:['work','games','emails'],script:[['W','Do you play games on your computer?'],['M','Sometimes, and I check my emails. But mostly I use it for work.']]},
{q:'What is wrong with the girl\'s phone?',o:['The screen is broken.','The battery is dead.','It\'s wet.'],script:[['M','Did your phone fall in the water again?'],['W','No, I dropped it on the floor. The screen\'s broken.']]},
{q:'What will the boy get for his birthday?',o:['headphones','a phone','a tablet'],script:[['W','Are you getting a tablet for your birthday?'],['M','No, my parents say I already have a phone. But I\'m getting new headphones.']]},
{q:'When did the woman buy her laptop?',o:['last month','last year','last week'],script:[['M','Is that laptop new? Did you buy it last week?'],['W','No, I\'ve had it for a month now.']]},
{q:'How much is the phone case?',o:['£15','£50','£5'],script:[['W','How much is this phone case? Five pounds?'],['M','Fifteen. The five-pound ones are over there.']]}],
l2:{intro:'You will hear a man talking about a computer course.',g:'M',head:'Computer Course',script:`Our computer course for beginners is perfect if you've never used a computer before. The course is every Thursday morning for six weeks, starting on the fourth of March. Classes are from ten until twelve in the library. You'll learn how to send emails, use the internet safely and make video calls to your family. You don't need your own computer – we have twelve laptops you can use. The course is free for people over sixty. For everyone else, it costs twenty pounds.`,
sents:['Day: ___','Number of weeks: ___','Place: the ___','Number of laptops: ___','Price for under 60s: £___'],
ans:[['thursday'],['6','six'],['library'],['12','twelve'],['20','twenty']]},
l3:{intro:'You will hear Rob talking to his friend Lucy about a video he made.',names:{M:'Rob',W:'Lucy'},script:[
['W','Rob, I saw your video online! It\'s so funny.'],['M','Thanks! I didn\'t think so many people would watch it.'],
['W','How many people have seen it?'],['M','About ten thousand. Yesterday it was only two hundred!'],
['W','How did you make it?'],['M','With my phone. My sister helped me – she held the camera.'],
['W','How long did it take?'],['M','Filming took an hour, but editing took the whole weekend.'],
['W','Are you going to make more?'],['M','Yes, next time I want to make one with my dog.']],
q:[{q:'What does Lucy think of the video?',o:['It\'s funny.','It\'s boring.','It\'s too long.']},
{q:'How many people have watched it?',o:['about 10,000','about 200','about 2,000']},
{q:'Who helped Rob?',o:['his sister','Lucy','his dad']},
{q:'What took the most time?',o:['editing','filming','writing the story']},
{q:'What will be in the next video?',o:['Rob\'s dog','Rob\'s sister','Lucy']}]},
l4:[
{ctx:'You hear a woman talking about social media.',q:'Why did she stop using it?',o:['It wasted her time.','She lost her phone.','Her friends stopped.'],script:[['W','I was looking at it for three hours a day! I wasn\'t doing anything useful, so I deleted all the apps.']]},
{ctx:'You hear a man in a phone shop.',q:'What does he want?',o:['a phone with a good camera','a cheap phone','a big phone'],script:[['M','I don\'t mind the price or the size. I just want really good photos of my children.']]},
{ctx:'You hear two friends talking about a computer game.',q:'What does the girl think?',o:['It\'s too difficult.','It\'s too easy.','It\'s boring.'],script:[['M','Have you finished the game yet?'],['W','No! I\'ve been on level two for a week. It\'s impossible!']]},
{ctx:'You hear a boy talking to his teacher.',q:'What\'s the problem?',o:['His computer isn\'t working.','He forgot his homework.','He can\'t find his book.'],script:[['M','Sorry, I can\'t print my homework. My computer won\'t switch on. Can I email it to you tonight?']]},
{ctx:'You hear a woman talking about her grandmother.',q:'What can her grandmother do now?',o:['make video calls','send emails','play games'],script:[['W','My grandma learnt to use the tablet. Now she calls us every Sunday and we can see each other!']]}],
l5:{intro:'You will hear Sara talking to her friend about the apps her family uses most. What does each person use their phone for?',names:{W:'Sara',M:'Friend'},script:[
['M','What does your family use their phones for, Sara?'],
['W','My mum uses hers for cooking. She finds recipes.'],
['M','And your dad?'],['W','Dad watches football on his.'],
['M','What about your brother?'],['W','Leo plays games all the time.'],
['M','And your grandma?'],['W','She used to just make calls, but now she takes photos of her garden.'],
['M','And you?'],['W','I listen to music.']],
items:['Mum','Dad','Leo','Grandma','Sara'],opts:['recipes','football','games','photos','music','maps','shopping','reading the news']},
s:{p1:['How often do you use your phone?','What apps do you use?','Do you play computer games?','What did you do on the internet yesterday?','Please tell me something about how you use technology.'],
p2:{topic:'technology',ideas:['a smartphone','a laptop','a games console','a smartwatch','a tablet'],q:['Do you think smartwatches are useful?','Which of these things do you use most?','Do young people spend too much time on screens?','Could you live a week without your phone?']}}
});
