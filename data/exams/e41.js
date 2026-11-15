EXAM({
r1:[
{t:'<b>GARDEN CENTRE</b><br>All plants 20% off this weekend.',o:['Plants are cheaper for two days.','The garden centre is closed this weekend.','You get 20 free plants.']},
{t:'Hi Lou, can you water my plants while I\'m away next week? The key is under the big pot. Thanks! Kath',q:'What does Kath want Lou to do?',o:['look after her plants','buy a new pot','lend her a key']},
{t:'<b>COMMUNITY GARDEN</b><br>Volunteers needed on Saturdays. No experience necessary.',o:['Anyone can help in the garden.','Only gardeners can volunteer.','The garden is closed on Saturdays.']},
{t:'<b>PARK</b><br>Dogs must be kept on a lead near the flower beds.',o:['Dogs can\'t run free in some areas.','Dogs are not allowed in the park.','The flowers are for sale.']},
{t:'Will – the tomatoes in the garden are ready. Pick some for the salad tonight. Mum',q:'Mum wants Will to',o:['get some vegetables from the garden.','buy tomatoes.','make dinner.']},
{t:'<b>FARM</b><br>Pick your own strawberries. Pay by the kilo.',o:['You can collect fruit yourself and pay for what you take.','Strawberries are free.','You can only buy one kilo.']}],
r2:{title:'My garden',intro:'Three people talk about their gardens.',sections:[
{h:'Arthur',t:'My garden is small, but I grow lots of vegetables – potatoes, carrots, beans and onions. I spend about two hours there every day since I stopped working. My wife says I love the garden more than her! We hardly ever buy vegetables from the shop.'},
{h:'Nina',t:'I live in a flat, so I don\'t have a real garden. But I have a balcony full of flowers and herbs. I use the herbs in my cooking. In summer, birds and butterflies visit. It\'s my favourite place to sit and drink coffee in the morning.'},
{h:'Leo',t:'Our garden is mostly grass, because my children love playing football there. There\'s also a big tree with a swing. I\'m not very good at gardening – everything I plant dies! My neighbour has a beautiful garden, and she often gives me advice.'}],
q:['Who is retired?','Who grows plants to cook with?','Who gets help from someone who lives nearby?','Who rarely needs to buy certain food?','Who has a garden that is mainly for the family to play in?','Who sees wildlife in their garden?','Who isn\'t a good gardener?'],
ans:[0,1,2,0,2,1,2]},
r3:{title:'The rooftop farm',text:`On the roof of a tall building in the centre of New York, there is a farm. It grows vegetables, fruit and herbs, and even has bees.

The farm was started six years ago by two friends, Ana Lopez and Sam Kim. "We wanted to show that you can grow food in the city," says Ana. "Most food in New York travels hundreds of kilometres before people eat it. Our food travels just a few metres!"

The farm sells its vegetables to restaurants nearby. "The chefs love it," says Sam. "They can come up and choose their vegetables in the morning and cook them the same day."

The farm also has classes for school children. "Many city children have never seen a carrot growing," Ana explains. "They're always surprised that it grows under the ground!"

Growing food on a roof is not easy. "In winter, it's too cold to grow much," says Sam. "And in summer, the strong wind can damage the plants." But they are very happy with their success. Now there are more than twenty rooftop farms in the city.`,
q:[{q:'Why did Ana and Sam start the farm?',o:['to show food can be grown in cities','to make a lot of money','to open a restaurant']},
{q:'What is good about the farm\'s food?',o:['It doesn\'t travel far.','It is cheap.','It is organic.']},
{q:'What do chefs like?',o:['choosing fresh vegetables themselves','the low prices','the bees']},
{q:'What surprises many children?',o:['how carrots grow','the bees','the height of the building']},
{q:'What problem does Sam mention?',o:['the weather','the cost','the noise']}]},
r4:{title:'Sunflowers',text:`Sunflowers are tall plants with big yellow flowers. They can [19] up to three metres tall, and some have grown even taller than a house!

Sunflowers first came from North America. Native Americans grew them for food more than four thousand years [20]. Later, Spanish explorers took them to Europe.

Young sunflowers turn their heads to [21] the sun. In the morning, they face east, and in the evening, they face west. When they get older, they stop moving and always face east.

The seeds of sunflowers are very [22]. People eat them as a snack, and birds love them too. Sunflower oil is made from the seeds and is used [23] cooking. Today, Ukraine and Russia produce most of the world's sunflowers. Sunflowers are also [24] in many famous paintings.`,
opts:[['grow','rise','build'],['ago','before','since'],['follow','go after','chase up'],['useful','used','useless'],['for','to','by'],['shown','seen','looked']]},
r5:{title:'Garden party',text:`Dear neighbours,

We are having a garden party [25] Saturday 21st June from 3 p.m. to 7 p.m., and we'd love you to come!

There will be food and drinks for everyone, and music [26] a local band. Children are very welcome. We will have games for them in the garden.

If you would [27] to bring something, a cake or a salad would be lovely. [28] it rains, we will move the party into the house, so don't worry about the weather!

Please let us know if you [29] come by Wednesday, so we know how much food to buy. You can knock on our door or leave a note in our letterbox.

We hope to see you all there!

Best wishes,
Jane and Mike (number 14)

P.S. Please don't park [30] front of our garage.`,
ans:[['on'],['from','by'],['like'],['if'],['can','will'],['in']]},
w6:{ctx:'Your family is having a garden party. Write an email to your English friend, Ash. In your email:',notes:['invite Ash to the party','say when it is','say what you will do there']},
w7:['A girl is planting a seed in a pot. Her grandfather is helping her.','She waters the plant every day.','The plant is now a big sunflower, taller than the girl.'],
l1:[
{q:'What is the man going to plant?',o:['potatoes','tomatoes','carrots'],script:[['W','Are you going to plant tomatoes this year?'],['M','No, they didn\'t grow well last year. And the rabbits eat my carrots. So potatoes this time.']]},
{q:'What colour flowers does the woman want?',o:['white','red','yellow'],script:[['M','How about these red flowers?'],['W','I\'ve got lots of red and yellow ones. I\'d like some white ones for the front garden.']]},
{q:'Where is the girl\'s cat?',o:['in the tree','on the roof','under the car'],script:[['M','Have you found your cat? Is she under the car?'],['W','No. Look, she\'s up in the tree. She can\'t get down!']]},
{q:'What day does the gardener come?',o:['Friday','Tuesday','Thursday'],script:[['W','Does the gardener come on Tuesdays?'],['M','He used to, but now he comes on Fridays.']]},
{q:'How much did the plant cost?',o:['£8','£18','£80'],script:[['M','That\'s a nice plant. Was it expensive? Eighteen pounds?'],['W','No, only eight. It was in the sale.']]}],
l2:{intro:'You will hear a woman talking about a flower show.',g:'W',head:'Flower Show',script:`The Riverdale Flower Show is on the twenty-third and twenty-fourth of August. There will be thousands of flowers from gardens all over the region. There's a competition for the biggest vegetable – last year the winning pumpkin weighed ninety kilos! Children can make a garden in a box. Tickets are seven pounds for adults, and children under twelve go free. The show is in the field behind the church. Please don't drive – there's very little parking. Take the free bus from the station.`,
sents:['Dates: 23rd and ___ August','Last year\'s winning vegetable weighed: ___ kg','Children can make a garden in a ___','Adult ticket: £___','Free bus from the ___'],
ans:[['24th','24','twenty-fourth'],['90','ninety'],['box'],['7','seven'],['station']]},
l3:{intro:'You will hear Jake talking to his friend Kate about his grandmother\'s garden.',names:{M:'Jake',W:'Kate'},script:[
['W','Jake, what did you do at the weekend?'],['M','I helped my grandmother in her garden. She\'s eighty-five!'],
['W','What did you do?'],['M','I cut the grass and picked apples from her trees. We got three big bags.'],
['W','What will she do with them?'],['M','She\'s going to make apple pies and give some to the neighbours.'],
['W','Did she pay you?'],['M','No, but she gave me a delicious lunch. And she\'s teaching me to grow vegetables.'],
['W','Will you go again?'],['M','Yes, every Saturday. I really enjoy it.']],
q:[{q:'How old is Jake\'s grandmother?',o:['85','75','95']},
{q:'What did Jake do in the garden?',o:['picked fruit','planted trees','cut flowers']},
{q:'What will his grandmother do with the apples?',o:['cook with them','sell them','keep them']},
{q:'What did Jake get for helping?',o:['a meal','some money','some apples']},
{q:'How often will Jake help?',o:['every week','every day','once a month']}]},
l4:[
{ctx:'You hear a man talking about his garden.',q:'What is his problem?',o:['There is too much rain.','There is not enough sun.','Animals eat his plants.'],script:[['M','My garden gets lots of sun, and no animals come in. But it\'s been raining for weeks. Everything is under water!']]},
{ctx:'You hear a woman talking to a gardener.',q:'What does she want him to do?',o:['cut down a tree','plant some flowers','cut the grass'],script:[['W','That old tree is too close to the house. Could you cut it down for me?']]},
{ctx:'You hear two friends talking.',q:'What will they do?',o:['go to the park','go to the cinema','stay at home'],script:[['M','It\'s such a lovely day. Shall we go to the park?'],['W','Great idea. Let\'s take a picnic.']]},
{ctx:'You hear a girl talking about her balcony.',q:'What does she grow?',o:['herbs','vegetables','fruit'],script:[['W','My balcony is too small for vegetables or fruit trees. But I grow mint and basil for cooking.']]},
{ctx:'You hear a man calling a garden centre.',q:'Why is he calling?',o:['to ask about delivery','to complain about a plant','to ask the opening times'],script:[['M','Hello, I want to buy a big tree. Can you bring it to my house? I don\'t have a big car.']]}],
l5:{intro:'You will hear Amy talking to her friend about what her family grows in the garden. What does each person grow?',names:{W:'Amy',M:'Friend'},script:[
['M','What does your family grow in the garden, Amy?'],
['W','Well, my mum grows roses.'],
['M','And your dad?'],['W','Dad grows tomatoes.'],
['M','What about your brother?'],['W','Sam wanted to grow pumpkins, but they didn\'t grow. So now he grows strawberries.'],
['M','And your grandpa?'],['W','He grows potatoes.'],
['M','And you?'],['W','I grow sunflowers.']],
items:['Mum','Dad','Sam','Grandpa','Amy'],opts:['roses','tomatoes','strawberries','potatoes','sunflowers','pumpkins','carrots','apples']},
s:{p1:['Do you have a garden?','Do you like plants and flowers?','Have you ever grown anything?','What did you do outside last weekend?','Please tell me something about a park you like.'],
p2:{topic:'outdoor places',ideas:['a garden','a park','a forest','a farm','a beach'],q:['Do you think gardening is interesting?','Which of these places do you like best?','Do you spend enough time outside?','Are there good parks in your town?']}}
});
