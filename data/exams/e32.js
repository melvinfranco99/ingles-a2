EXAM({
r1:[
{t:'<b>MARKET</b><br>Every Saturday 8 a.m. – 2 p.m. Local fruit, vegetables and cheese.',o:['The market is only open in the morning and early afternoon.','The market is open every day.','The market sells food from other countries.']},
{t:'Hi Sam, I\'m at the shop. They haven\'t got any brown bread. Is white OK? Mum',q:'Why has Mum sent this message?',o:['to ask Sam a question','to tell Sam to buy bread','to say she is coming home']},
{t:'<b>SALE</b><br>All shoes half price this week only.',o:['Shoes are cheaper for a short time.','The shop only sells shoes.','Shoes are on sale every week.']},
{t:'<b>CASH ONLY</b><br>Sorry, we don\'t take cards.',o:['You need to pay with money, not a card.','You can only pay by card.','Cards are sold here.']},
{t:'Ruth – I\'ve ordered your birthday present online. It should arrive on Thursday. Can you be home to sign for it? Aunt May',q:'Aunt May wants Ruth to',o:['be at home when the present comes.','order a present.','go to the post office.']},
{t:'<b>PLEASE TAKE A NUMBER</b><br>and wait to be called.',o:['Customers are served in order.','You should call this number.','You must wait outside.']}],
r2:{title:'Shopping habits',intro:'Three people talk about how they like to shop.',sections:[
{h:'Diana',t:'I buy almost everything online, from clothes to food. I work long hours and I hate crowds. The only problem is sending things back when they don\'t fit. I order a lot of clothes in two sizes and return the one I don\'t want.'},
{h:'Tom',t:'I prefer small shops in my neighbourhood. I know the people who work there, and they know what I like. It\'s a bit more expensive than the supermarket, but I want to support local businesses. I go to the baker\'s every morning.'},
{h:'Priya',t:'I love second-hand shops and markets. You can find unusual clothes that nobody else has, and it\'s much cheaper. It\'s also better for the environment. Last week I found a beautiful old coat for only eight pounds!'}],
q:['Who doesn\'t like busy places?','Who is happy to pay a little more?','Who recently found a bargain?','Who often sends things back?','Who shops every day?','Who mentions protecting the planet?','Who has a friendly relationship with shop staff?'],
ans:[0,1,2,0,1,2,1]},
r3:{title:'A shop with no money',text:`In the town of Hilltown, there is a shop where you can't pay with money. It's called the Swap Shop, and it was opened last year by a retired teacher, Margaret Hill.

"People throw away so many things that are still good," Margaret says. "I thought, why not let people swap them?"

It works like this: you bring something you don't need – a book, a toy, some clothes – and you get points. Then you can use your points to take something else from the shop. "Children love it," says Margaret. "They bring toys they don't play with any more and choose new ones."

The shop is run by volunteers. Most of them are retired, but some students help at the weekends. "It's a great place to meet people," says student volunteer Leo, seventeen. "And I've found some brilliant books."

Margaret only has one rule: everything must be clean and work properly. "We're not a rubbish bin!" she laughs.

The shop has been so successful that two other towns are now planning to open their own Swap Shops.`,
q:[{q:'Why did Margaret open the shop?',o:['People were throwing away useful things.','She needed a job.','She wanted to sell her books.']},
{q:'How do you get things from the shop?',o:['by bringing other things','by paying a small amount','by working there']},
{q:'Who works in the shop?',o:['people who don\'t get paid','only students','Margaret\'s family']},
{q:'What does Leo like about the shop?',o:['meeting people','the toys','the money']},
{q:'What is Margaret\'s rule?',o:['Things must be in good condition.','Only children can swap toys.','Everything must be new.']}]},
r4:{title:'Chocolate',text:`Chocolate is made from the beans of the cacao tree, which grows in hot countries. The first people to [19] chocolate were in Central America, more than three thousand years ago. They made a bitter drink from the beans and sometimes [20] chilli to it.

When the Spanish arrived in America in the sixteenth century, they took cacao beans back to Europe. They added sugar to make the drink sweeter, and it soon became very [21] with rich people.

The first chocolate bar was made in England in 1847. Since then, chocolate has become one of the world's favourite [22]. Today, most cacao is grown in West Africa.

Dark chocolate has less sugar than milk chocolate, and some scientists say it can be good for your heart – if you don't eat too [23]! Chocolate is very dangerous for dogs, though, so never [24] it to your pet.`,
opts:[['enjoy','like to','love up'],['added','put','mixed up'],['popular','famous','known'],['treats','meals','foods of'],['much','many','lot'],['give','offer up','share']]},
r5:{title:'Online order',text:`Hello,

Last week I ordered a blue jumper [25] your website, order number 45982. It arrived yesterday, but it's the wrong colour. I ordered blue, [26] you sent me a green one.

Also, it's much too big. I ordered a small, but this one is a large. I'd like to send it back and get the right one. [27] I have to pay for sending it back?

The jumper was a birthday present [28] my sister. Her birthday is next Saturday, so I need it quickly. Could you send the new one as soon [29] possible?

Thank you for your help. I look forward to hearing [30] you.

Megan Lewis`,
ans:[['from','on'],['but'],['do'],['for'],['as'],['from']]},
w6:{ctx:'You bought something online but there is a problem with it. Write an email to your English friend, Chris. In your email:',notes:['say what you bought','explain the problem','say what you are going to do']},
w7:['A woman is at a market. She is buying lots of fruit.','Her bag breaks and the fruit falls on the ground.','A shop assistant gives her a new bag. The woman smiles.'],
l1:[
{q:'What did the man buy at the market?',o:['strawberries','apples','bananas'],script:[['W','Did you get apples at the market?'],['M','They didn\'t have any good ones. Or bananas. But the strawberries looked lovely, so I got those.']]},
{q:'How much does the woman pay?',o:['£16','£60','£6'],script:[['M','That\'s sixty pounds, please. Oh wait, sorry, there\'s a discount. Sixteen pounds.'],['W','Great!']]},
{q:'Which floor sells children\'s clothes?',o:['the third floor','the first floor','the ground floor'],script:[['W','Excuse me, where are the children\'s clothes? The first floor?'],['M','No, that\'s women\'s clothes. Children\'s clothes are on the third floor.']]},
{q:'What does the boy want to buy for his mother?',o:['some flowers','a book','a scarf'],script:[['W','What are you getting your mum? A book?'],['M','She\'s got hundreds of books. And she doesn\'t wear scarves. I\'ll get her some flowers.']]},
{q:'What time does the shop close today?',o:['5.30','6.30','8.00'],script:[['M','Are you open until eight?'],['W','Only on Thursdays. Today we close at five thirty. On Saturdays it\'s six thirty.']]}],
l2:{intro:'You will hear a man talking about a new shopping centre.',g:'M',head:'Parkway Shopping Centre',script:`The new Parkway Shopping Centre opens on the first of October. There are over a hundred shops, including the biggest bookshop in the city. On the top floor there's a cinema with eight screens and lots of restaurants. The centre is open from nine in the morning to nine at night from Monday to Saturday, and from ten to five on Sundays. Parking is free for the first three hours. On the opening day, the first five hundred customers will get a free bag.`,
sents:['Opening date: 1st ___','The biggest ___ in the city','On the top floor: a ___','Free parking for: ___ hours','Free gift: a ___'],
ans:[['october'],['bookshop'],['cinema'],['3','three'],['bag']]},
l3:{intro:'You will hear Olivia talking to her friend Ryan about shopping for a party dress.',names:{W:'Olivia',M:'Ryan'},script:[
['M','Olivia, did you find a dress for the party?'],['W','Yes, finally! I went to five shops.'],
['M','Where did you find it?'],['W','In a small shop near the station. I\'d never been there before.'],
['M','What colour is it?'],['W','Dark green. I wanted red, but the green one looked better on me.'],
['M','Was it expensive?'],['W','Not really. It was in the sale – only thirty pounds.'],
['M','Do you need shoes too?'],['W','No, I\'m going to borrow my sister\'s black shoes.']],
q:[{q:'How many shops did Olivia visit?',o:['five','two','three']},
{q:'Where did she find the dress?',o:['near the station','in the shopping centre','online']},
{q:'Why did she choose the green dress?',o:['It looked nicer on her.','It was cheaper.','There were no red ones.']},
{q:'How much did the dress cost?',o:['£30','£13','£50']},
{q:'What will Olivia do about shoes?',o:['use her sister\'s','buy new ones','wear her old ones']}]},
l4:[
{ctx:'You hear a woman talking about a shop.',q:'Why does she like it?',o:['The staff are helpful.','It is cheap.','It is big.'],script:[['W','It\'s small and not cheap. But the people who work there always help you find exactly what you need.']]},
{ctx:'You hear a man talking to a shop assistant.',q:'What is the problem?',o:['The trousers are too long.','The trousers are too small.','The trousers are the wrong colour.'],script:[['M','The colour is perfect and they fit round the middle, but look – they\'re ten centimetres too long.']]},
{ctx:'You hear two friends talking.',q:'What are they going to buy?',o:['a present for a friend','food for a picnic','clothes for a holiday'],script:[['W','It\'s Sarah\'s birthday on Friday. What shall we get her?'],['M','Let\'s go to the shops after school and look.']]},
{ctx:'You hear a girl talking about online shopping.',q:'What does she think?',o:['It\'s easy but she misses the shops.','It\'s too difficult.','It\'s more expensive.'],script:[['W','It\'s really easy and quick. But I miss going round the shops with my friends. That was fun.']]},
{ctx:'You hear a man in a supermarket.',q:'What is he looking for?',o:['milk','bread','eggs'],script:[['M','Excuse me, I found the bread and the eggs, but where\'s the milk?']]}],
l5:{intro:'You will hear Laura talking to her brother about the things their family bought at the market. What did each person buy?',names:{W:'Laura',M:'Brother'},script:[
['M','What did everyone buy at the market, Laura?'],
['W','Well, Mum bought some cheese.'],
['M','And Dad?'],['W','Dad bought a plant for the garden.'],
['M','What about Grandma?'],['W','She wanted some fish, but it was all sold. So she bought a cake.'],
['M','And Tom?'],['W','Tom bought an old comic.'],
['M','And you?'],['W','I bought some earrings.']],
items:['Mum','Dad','Grandma','Tom','Laura'],opts:['cheese','a plant','a cake','a comic','earrings','fish','a T-shirt','honey']},
s:{p1:['Do you like shopping?','Where do you usually go shopping?','Do you buy things online?','What did you buy last week?','Please tell me something about your favourite shop.'],
p2:{topic:'places to shop',ideas:['a market','a big shopping centre','a small local shop','an online shop','a second-hand shop'],q:['Do you think markets are interesting?','Which of these places do you like shopping in?','Do you prefer shopping alone or with friends?','Is shopping online better than going to shops?']}}
});
