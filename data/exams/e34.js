EXAM({
r1:[
{t:'<b>CINEMA</b><br>Tuesday tickets: £5 for all films.',o:['Films are cheaper on one day of the week.','The cinema is only open on Tuesdays.','There are five films on Tuesday.']},
{t:'Hi Kim, the concert has sold out! But my cousin has a spare ticket. Do you still want to come? Lou',q:'What is Lou offering Kim?',o:['a ticket','a lift to the concert','a CD']},
{t:'<b>THEATRE</b><br>Latecomers will not be allowed in until the interval.',o:['If you are late, you must wait for the break.','The show starts late.','There is no interval.']},
{t:'<b>CONCERT HALL</b><br>No photos or videos during the performance.',o:['You can\'t use a camera while the music is playing.','You can buy photos here.','Videos are shown before the concert.']},
{t:'Max – the film starts at 7.30, not 7. Meet me outside the cinema at 7.15. Ollie',q:'Ollie is telling Max',o:['the correct time.','the film has been cancelled.','to buy the tickets.']},
{t:'<b>MUSIC FESTIVAL</b><br>Children under 5 free. Families welcome.',o:['Very young children don\'t need to pay.','Only families can go.','The festival is for children.']}],
r2:{title:'Favourite films',intro:'Three people talk about their favourite film.',sections:[
{h:'Greg',t:'My favourite film is a cartoon about a family of monsters. I first saw it with my daughter when she was four, and we\'ve watched it about fifty times since. I know all the words! It\'s funny for children, but there are lots of jokes for adults too.'},
{h:'Fatima',t:'I love an old black-and-white film from the 1950s. It\'s a love story set in Rome. My mother showed it to me when I was a teenager. I loved it so much that I went to Rome on holiday to see all the places in the film.'},
{h:'Ivan',t:'My favourite is a science fiction film about astronauts. I saw it at the cinema in 3D, and it was amazing. It made me want to study science. Now I\'m at university studying physics. The music in the film is beautiful too.'}],
q:['Who visited a place because of the film?','Who has seen the film many times?','Whose film influenced their education?','Who watches the film with a child?','Who saw the film for the first time with a parent?','Who mentions the music?','Who likes a film that is good for all ages?'],
ans:[1,0,2,0,1,2,0]},
r3:{title:'The young drummer',text:`Twelve-year-old Kai Brown has been playing the drums since he was three. Last month, a video of him playing in his garage was watched by more than two million people online.

"My dad is a drummer in a band," Kai explains. "When I was little, I used to hit pots and pans with spoons. So for my third birthday, my parents bought me a small drum kit."

Kai practises every day for two hours. "My neighbours aren't always happy," he laughs. "So my dad put special walls in the garage to keep the noise inside."

After the video became popular, a famous rock band invited Kai to play with them at a concert in London. "I was so nervous before I went on stage. There were twenty thousand people! But when I started playing, I loved it."

Kai's mother says he is still a normal boy. "He has to do his homework before he can practise. School is important." Kai agrees. "I want to be a musician, but I also want to go to university and study music properly."`,
q:[{q:'Why did Kai\'s parents give him a drum kit?',o:['He was always making noise with kitchen things.','His father wanted him to join a band.','He asked for it.']},
{q:'What did Kai\'s father do for the neighbours?',o:['made the garage quieter','moved the drums','stopped Kai playing']},
{q:'How did Kai feel when he started playing in London?',o:['He enjoyed it.','He was very nervous.','He wanted to stop.']},
{q:'What does Kai\'s mother say?',o:['Kai must finish his schoolwork first.','Kai shouldn\'t play in a band.','Kai practises too much.']},
{q:'What does Kai want to do in the future?',o:['study music','leave school','join his father\'s band']}]},
r4:{title:'The guitar',text:`The guitar is one of the most popular musical instruments in the world. Instruments [19] the guitar have existed for about four thousand years.

The modern guitar comes from Spain, where it [20] popular in the sixteenth century. Spanish guitars have six strings and are made of wood.

In the 1930s, the electric guitar was invented. It needed electricity to make a loud sound, so it could be [21] in big concert halls. Electric guitars became very important in rock music.

Learning the guitar is not easy at first. Your fingers can [22] when you press the strings. But many people [23] themselves by watching videos online. After a few months of practice, you can play [24] songs.`,
opts:[['like','as','same'],['became','got up','turned'],['heard','listened','sounded'],['hurt','pain','ache up'],['teach','learn','study'],['simple','easy to','light']]},
r5:{title:'Concert',text:`Hi Ana,

Guess what? I've got two tickets [25] the Blue Stars concert next month! My dad won them in a competition on the radio. Would you like to come [26] me?

The concert is on Saturday 15th at the City Arena. It starts at eight, [27] we need to be there by seven because there will be lots of people.

My mum can drive us there and pick us [28] after the concert. You can sleep at my house that night if you want.

Do you know [29] of their songs? I've been listening to them all week. My favourite is "Summer Nights".

Let me know as [30] as you can!

Love,
Jess`,
ans:[['for','to'],['with'],['but'],['up'],['any','some','all'],['soon']]},
w6:{ctx:'You went to a concert last weekend. Write an email to your English friend, Robin. In your email:',notes:['say who you saw','say who you went with','say what you liked about it']},
w7:['A girl is playing the guitar in her bedroom. Her family looks unhappy because of the noise.','Months later, she is playing on a stage at school.','Her family is clapping in the audience.'],
l1:[
{q:'What film are they going to see?',o:['a comedy','a horror film','an action film'],script:[['M','Shall we see the new horror film?'],['W','I hate horror films. And I\'ve seen the action film. Let\'s see the comedy – I need a laugh.']]},
{q:'What instrument does the boy play?',o:['the piano','the violin','the drums'],script:[['W','Do you still play the drums?'],['M','No, the neighbours complained. I tried the violin, but it was too hard. Now I play the piano.']]},
{q:'Where are they going to sit?',o:['near the back','at the front','in the middle'],script:[['W','Shall we sit at the front?'],['M','It\'s too loud there. The middle is full. Let\'s sit near the back.']]},
{q:'How much is a ticket for the show?',o:['£22','£12','£20'],script:[['M','How much are tickets?'],['W','Twenty pounds for adults and twelve for children. Oh, there\'s a two-pound booking fee too, so twenty-two for you.']]},
{q:'What time does the concert start?',o:['8.15','7.45','8.45'],script:[['W','The doors open at seven forty-five.'],['M','And the music?'],['W','Half an hour later.']]}],
l2:{intro:'You will hear a man talking about a film festival.',g:'M',head:'Film Festival',script:`The Westbridge Film Festival takes place from the third to the ninth of June. This year, we're showing forty films from twenty different countries. Most films will be shown at the Odeon cinema, but on Friday evening there's an outdoor film in Victoria Park. Bring a blanket! Tickets for each film cost six pounds fifty, or you can buy a festival pass for thirty-five pounds. There's also a competition for young film-makers under eighteen. Send us a film of no more than five minutes.`,
sents:['Festival starts: ___ June','Films from: ___ countries','Outdoor film in Victoria ___','Festival pass: £___','Competition films: no more than ___ minutes'],
ans:[['3rd','3','third'],['20','twenty'],['park'],['35','thirty-five'],['5','five']]},
l3:{intro:'You will hear Nick talking to his friend Amy about joining a choir.',names:{M:'Nick',W:'Amy'},script:[
['W','Nick, I heard you\'ve joined a choir!'],['M','Yes, the town choir. We practise on Thursday evenings in the church.'],
['W','Why did you join?'],['M','My doctor said singing is good for stress. And I\'ve always loved singing in the shower!'],
['W','How many people are in it?'],['M','About forty. Most of them are older than me, but they\'re really friendly.'],
['W','Do you have to read music?'],['M','No, the teacher plays the songs and we learn them by listening.'],
['W','Are you doing a concert?'],['M','Yes, at Christmas. You should come!']],
q:[{q:'Where does the choir practise?',o:['in a church','in a school','in a hall']},
{q:'Why did Nick join the choir?',o:['to feel less stressed','to meet new people','to become a singer']},
{q:'What does Nick say about the other singers?',o:['They are kind.','They are young.','They are very good.']},
{q:'How do they learn the songs?',o:['by listening','by reading music','by watching videos']},
{q:'When is the concert?',o:['at Christmas','next Thursday','in the summer']}]},
l4:[
{ctx:'You hear a woman talking about a film.',q:'What didn\'t she like?',o:['the ending','the actors','the music'],script:[['W','The acting was brilliant and the music was great. But the end was really disappointing. Nothing happened!']]},
{ctx:'You hear a man talking to his daughter.',q:'What does he want her to do?',o:['practise the piano','turn the music down','go to bed'],script:[['M','You have a piano exam on Saturday. Please do at least half an hour of practice before dinner.']]},
{ctx:'You hear two friends talking about a band.',q:'What do they both think?',o:['The band\'s new songs are worse.','The band is very good live.','The singer is great.'],script:[['M','Have you heard the new album?'],['W','Yes, it\'s not as good as their old songs.'],['M','I agree. I was disappointed.']]},
{ctx:'You hear a girl talking about a theatre trip.',q:'How did she feel?',o:['excited','bored','tired'],script:[['W','It was my first time at a real theatre. The costumes and the lights were amazing. I want to go again tomorrow!']]},
{ctx:'You hear a man calling a theatre.',q:'Why is he calling?',o:['to book tickets','to change tickets','to ask about parking'],script:[['M','Hello, I\'d like four tickets for Saturday evening\'s show, please. In the middle, if possible.']]}],
l5:{intro:'You will hear Rosie talking to her dad about the instruments her friends play. What instrument does each person play?',names:{W:'Rosie',M:'Dad'},script:[
['M','What instruments do your friends play, Rosie?'],
['W','Well, Ella plays the guitar.'],
['M','And Harry?'],['W','Harry plays the trumpet. It\'s very loud!'],
['M','What about Zoe?'],['W','Zoe wanted to play the drums, but now she plays the flute.'],
['M','And Jack?'],['W','Jack plays the violin in the school orchestra.'],
['M','And Mia?'],['W','Mia plays the piano.']],
items:['Ella','Harry','Zoe','Jack','Mia'],opts:['guitar','trumpet','flute','violin','piano','drums','saxophone','cello']},
s:{p1:['What kind of music do you like?','Do you play a musical instrument?','How often do you go to the cinema?','What film did you see last?','Please tell me something about your favourite singer or band.'],
p2:{topic:'entertainment',ideas:['going to the cinema','going to a concert','watching TV','going to the theatre','playing video games'],q:['Do you think going to the theatre is interesting?','Which of these do you like doing best?','Do you prefer watching films at home or at the cinema?','What do young people in your country do for fun?']}}
});
