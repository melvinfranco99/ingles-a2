EXAM({
r1:[
{t:'<b>RECYCLING</b><br>Glass bottles only. No plastic.',o:['This bin is for one kind of material.','You can put any rubbish here.','Plastic bottles go here.']},
{t:'Hi Dev, it\'s snowing a lot here! School is closed tomorrow. Do you want to build a snowman? Ian',q:'Ian is',o:['inviting Dev to play.','telling Dev to stay at home.','asking Dev about school.']},
{t:'<b>WEATHER WARNING</b><br>Strong winds tonight. Do not park under trees.',o:['Trees could fall and damage cars.','You can\'t drive tonight.','The car park is closed.']},
{t:'<b>BEACH</b><br>Swimming is dangerous when the red flag is flying.',o:['Don\'t go in the sea if you see a red flag.','The red flag shows the best place to swim.','Swimming is never allowed here.']},
{t:'Pat – it\'s going to rain later, so take your umbrella. And don\'t forget your lunch! Mum',q:'Mum is reminding Pat',o:['to take two things.','to buy an umbrella.','to come home for lunch.']},
{t:'<b>PARK</b><br>Please take your rubbish home.',o:['Visitors shouldn\'t leave rubbish in the park.','There are lots of bins in the park.','The park is closed.']}],
r2:{title:'Weather and me',intro:'Three people talk about the weather where they live.',sections:[
{h:'Lars',t:'I live in the north of Norway. In winter, the sun doesn\'t come up for about two months, so it\'s dark all day. It\'s very cold too – sometimes minus twenty-five! But we can see the northern lights, which are beautiful. In summer, the sun never goes down.'},
{h:'Amara',t:'In my part of Kenya, it\'s warm all year. We have two rainy seasons, when it rains heavily almost every afternoon. Farmers need the rain for their crops. The rest of the year is dry and sunny. I\'ve never seen snow, but I\'d love to.'},
{h:'Hugh',t:'I live in Scotland, where the weather changes all the time. It can be sunny in the morning, rainy at lunchtime and windy in the afternoon. People always talk about the weather here! I always carry a raincoat, even in summer.'}],
q:['Who has never experienced a certain kind of weather?','Who says the weather is very changeable?','Who lives somewhere with very long days in summer?','Who mentions how the weather helps people work?','Who prepares for rain every day?','Who lives in the coldest place?','Who says the weather is a popular topic of conversation?'],
ans:[1,2,0,1,2,0,2]},
r3:{title:'The plastic-free family',text:`Last year, the Green family from Bristol decided to stop buying plastic for a whole year. "We watched a programme about plastic in the sea," says Mrs Green. "We saw a turtle with a plastic bag in its mouth. The children were really upset."

At first, it was very difficult. "Almost everything in the supermarket is wrapped in plastic," says Mr Green. "So we started going to the market, where you can buy fruit and vegetables loose. We take our own bags."

The family also makes some things at home. "We make our own bread now, and our own toothpaste," says twelve-year-old Lily. "The toothpaste tastes a bit strange, but it works!"

The hardest thing was crisps. "I love crisps," says ten-year-old Ben. "But they all come in plastic bags. I really missed them!"

After a year, the family's rubbish bin was almost empty. "We used to fill it every week," says Mrs Green. "Now we only fill it once a month." Although the challenge has finished, the family say they will continue. "Well, mostly," laughs Ben. "I'm going to have some crisps on my birthday!"`,
q:[{q:'Why did the family start the challenge?',o:['They saw something sad on TV.','Their school asked them to.','They wanted to save money.']},
{q:'Why did the family start shopping at the market?',o:['There is less plastic there.','It is cheaper.','It is nearer.']},
{q:'What does Lily say about the toothpaste?',o:['It has an unusual taste.','It doesn\'t work.','It is delicious.']},
{q:'What did Ben find difficult?',o:['not eating a favourite snack','making bread','going to the market']},
{q:'What will the family do now?',o:['continue most of the time','stop the challenge','start another challenge']}]},
r4:{title:'Rainbows',text:`A rainbow is an arc of colours in the sky. You can [19] see one when the sun is shining and it is raining at the same time.

Rainbows happen when sunlight passes through drops of rain. The light [20] into seven colours: red, orange, yellow, green, blue, indigo and violet. Red is always at the top and violet at the [21].

To see a rainbow, the sun must be behind you. That's why rainbows often [22] in the early morning or late afternoon, when the sun is low in the sky.

Sometimes you can see two rainbows together. In the second rainbow, the colours are in the opposite order. There are many old stories [23] rainbows. In Ireland, people say there is a pot of gold at the end of a rainbow – but nobody has ever [24] it!`,
opts:[['usually','always','ever'],['splits','cuts','breaks off'],['bottom','end','floor'],['appear','arrive','come out of'],['about','of','over'],['found','looked','seen for']]},
r5:{title:'Snow day',text:`Hi Grandad,

We had so much snow yesterday! When I woke [25], everything was white. School was closed, so I spent the whole day outside [26] my friends.

First, we built a huge snowman in the garden. We used carrots for his nose and stones [27] his eyes. Then we went to the hill in the park with our sledges. It was so fast!

In the afternoon, we had a snowball fight. I threw a snowball at my brother, but it hit Mum [28] mistake! She wasn't very happy.

I was very cold and wet when I got home, [29] Mum made hot chocolate for everyone. It was the best day [30]!

Love,
Ruby`,
ans:[['up'],['with'],['for'],['by'],['so','but','and'],['ever']]},
w6:{ctx:'It snowed a lot in your town yesterday. Write an email to your English friend, Kim. In your email:',notes:['say what the weather was like','say what you did','say how you felt']},
w7:['A family is having a picnic in a field. The sun is shining.','Suddenly, it starts to rain heavily.','The family is eating the picnic in their car.'],
l1:[
{q:'What will the weather be like tomorrow?',o:['windy','rainy','sunny'],script:[['M','Will it rain again tomorrow?'],['W','No, it\'ll be dry, but not sunny. The radio says it\'ll be very windy.']]},
{q:'What did the boy put in the recycling bin?',o:['newspapers','bottles','cans'],script:[['W','Did you put the bottles in the recycling?'],['M','Dad already did the bottles and cans. I took out the old newspapers.']]},
{q:'Where is the woman going for her holiday?',o:['the mountains','the beach','the lake'],script:[['M','Are you going to the beach again?'],['W','It\'s too hot in August. We\'re going to the mountains this year. It\'s cooler.']]},
{q:'What does the girl need?',o:['sun cream','a hat','sunglasses'],script:[['M','Have you got your hat and sunglasses?'],['W','Yes, but I forgot my sun cream. Can I borrow yours?']]},
{q:'What was the temperature yesterday?',o:['18°','8°','28°'],script:[['W','Was it twenty-eight degrees yesterday?'],['M','No, not that hot! It was eighteen. Today it\'s much colder – only eight.']]}],
l2:{intro:'You will hear a woman talking about a beach clean-up.',g:'W',head:'Beach Clean-up',script:`Hello everyone, and thank you for coming to our beach clean-up. Today we'll be cleaning Sandy Bay, from the café to the rocks. We'll start at ten o'clock and finish at one. Please wear strong shoes and gloves – we have gloves if you don't have any. We'll give you a big bag for plastic and another for glass. Please don't touch anything sharp. Call one of our team in the yellow jackets. After the clean-up, there's free pizza for everyone at the café!`,
sents:['Beach: ___ Bay','Finish time: ___ o\'clock','Wear strong shoes and ___','Team members wear ___ jackets','Free food: ___'],
ans:[['sandy'],['1','one'],['gloves'],['yellow'],['pizza']]},
l3:{intro:'You will hear Leah talking to her friend Sam about a storm.',names:{W:'Leah',M:'Sam'},script:[
['M','Leah, did you hear the storm last night?'],['W','Hear it? It woke me up at three o\'clock!'],
['M','Was there any damage at your house?'],['W','Yes, a big tree fell in our garden. It just missed the house!'],
['M','Oh no! Was anyone hurt?'],['W','No, but the tree broke our fence. Our dog ran away.'],
['M','Did you find him?'],['W','Yes, this morning. He was at our neighbour\'s house, eating their cat\'s food!'],
['M','What will you do about the tree?'],['W','My uncle is coming to cut it up on Saturday.']],
q:[{q:'What time did Leah wake up?',o:['3 a.m.','2 a.m.','4 a.m.']},
{q:'What happened in the garden?',o:['A tree came down.','The house was damaged.','The car was hit.']},
{q:'What did the dog do?',o:['He escaped.','He hid under the bed.','He hurt his leg.']},
{q:'Where did they find the dog?',o:['at the neighbour\'s','in the park','in the garden']},
{q:'Who will deal with the tree?',o:['Leah\'s uncle','Leah\'s dad','the neighbour']}]},
l4:[
{ctx:'You hear a man talking about his holiday.',q:'What was the weather like?',o:['very hot','rainy','cold'],script:[['M','It was forty degrees every day. We couldn\'t go out in the afternoon. We just stayed by the pool.']]},
{ctx:'You hear a woman talking to her son.',q:'What does she want him to do?',o:['put on a coat','turn off the heating','close the door'],script:[['W','It\'s freezing outside. You can\'t go out in a T-shirt. Put your coat on!']]},
{ctx:'You hear two friends talking about a plan.',q:'What do they decide to do?',o:['go to the museum','go to the park','stay at home'],script:[['W','It\'s raining. We can\'t go to the park.'],['M','Let\'s go to the museum. It\'s inside, and it\'s free.'],['W','Good idea.']]},
{ctx:'You hear a boy talking about a school project.',q:'What is the project about?',o:['recycling','the weather','animals'],script:[['M','We\'re finding out how much plastic and paper our school throws away, and how we could reuse it.']]},
{ctx:'You hear a weather forecast.',q:'When will it be sunny?',o:['on Sunday','on Saturday','on Friday'],script:[['W','Friday and Saturday will be wet and cloudy. But on Sunday the sun will come out at last.']]}],
l5:{intro:'You will hear Tom talking to his mum about what his friends do to help the environment. What does each person do?',names:{M:'Tom',W:'Mum'},script:[
['W','Tom, what do your friends do to help the environment?'],
['M','Well, Alice cycles everywhere.'],
['W','And Will?'],['M','Will recycles everything. He has five different bins at home!'],
['M','Mia doesn\'t eat meat any more.'],['W','What about Ryan?'],['M','Ryan used to have long showers, but now he takes short ones.'],
['W','And Grace?'],['M','Grace buys second-hand clothes.']],
items:['Alice','Will','Mia','Ryan','Grace'],opts:['cycling','recycling','not eating meat','short showers','second-hand clothes','planting trees','picking up rubbish','using less paper']},
s:{p1:['What\'s the weather like in your country?','What\'s your favourite kind of weather?','What do you do on rainy days?','What was the weather like yesterday?','Please tell me something about your favourite season.'],
p2:{topic:'helping the environment',ideas:['recycling','cycling','planting trees','using less water','buying less plastic'],q:['Do you think recycling is important?','Which of these things do you do?','What can schools do to help the environment?','Is it easy to use less plastic?']}}
});
