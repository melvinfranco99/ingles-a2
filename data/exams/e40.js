EXAM({
r1:[
{t:'<b>AQUARIUM</b><br>Feeding the sharks: daily at 3 p.m.',o:['You can watch the sharks eat every afternoon.','You can feed the sharks yourself.','The sharks are only there at 3 p.m.']},
{t:'Hi Tom, I\'ve got an extra ticket for the aquarium tomorrow because my sister is ill. Interested? Fred',q:'Why has Fred written to Tom?',o:['to invite him somewhere','to say his sister is better','to buy a ticket']},
{t:'<b>SEA LIFE CENTRE</b><br>Please don\'t knock on the glass. It frightens the fish.',o:['Visitors shouldn\'t hit the glass.','The glass is broken.','You can touch the fish.']},
{t:'<b>BOAT TRIPS</b><br>See dolphins! Trips every hour from 10 a.m. No trips in bad weather.',o:['Boats may not go out if the weather is bad.','You can always see dolphins.','There is only one trip a day.']},
{t:'Nina – I\'ve put your swimming things in your bag. Don\'t forget it! Mum',q:'Mum is reminding Nina',o:['to take her bag.','to go swimming.','to buy swimming things.']},
{t:'<b>ROCK POOLS</b><br>Look, but please put all animals back where you found them.',o:['You can look at the animals but not take them.','Don\'t look at the animals.','You can take the animals home.']}],
r2:{title:'Working with sea animals',intro:'Three people talk about jobs with sea animals.',sections:[
{h:'Lucy',t:'I\'m a diver at an aquarium. I clean the big tank three times a week and feed the fish. The sharks don\'t frighten me – they\'re used to me. The hardest part is the cold water. Visitors love watching me through the glass. Children often wave at me!'},
{h:'Diego',t:'I work on a boat that takes tourists to see whales. We go out twice a day in summer. I explain to the tourists about the whales and how they live. The best day was when a mother whale and her baby swam right next to our boat.'},
{h:'Hana',t:'I\'m a scientist, and I study turtles on a beach in Malaysia. At night, I count the turtles that come to lay their eggs. I also protect the eggs from people and other animals. When the baby turtles go into the sea, it\'s very emotional.'}],
q:['Who works at night?','Who teaches people while they work?','Who works where visitors can see them?','Who has a job that depends on the season?','Who complains about the temperature?','Who protects young animals?','Who remembers one special experience?'],
ans:[2,1,0,1,0,2,1]},
r3:{title:'The boy who saved a dolphin',text:`Last August, ten-year-old Max Turner was playing on a beach in Cornwall with his family when he saw something big in the shallow water. "At first I thought it was a rock," he says. "Then it moved. It was a dolphin!"

The young dolphin was stuck on the sand and couldn't swim back to the sea. Max ran to get his dad, who called a group that helps sea animals. "They told us to keep the dolphin wet and to stay calm," says Mr Turner.

For two hours, Max and his family poured sea water over the dolphin with buckets. "I talked to it the whole time," Max says. "I told it everything would be OK."

When the rescue team arrived, they put the dolphin on a special bed and carried it into deeper water. "It swam away really fast," says Max. "Everyone on the beach clapped."

The rescue team gave Max a certificate for his help. "Without Max, the dolphin probably wouldn't have survived," said one of them. Max now wants to become a marine biologist. "I want to help sea animals all my life," he says.`,
q:[{q:'What did Max think the dolphin was at first?',o:['a rock','a fish','a boat']},
{q:'What did the family have to do?',o:['keep the dolphin wet','push the dolphin into the sea','give the dolphin food']},
{q:'What did Max do while they waited?',o:['He spoke to the dolphin.','He went to get help.','He swam in the sea.']},
{q:'What happened when the dolphin went back into the sea?',o:['People were pleased.','It came back.','It was very slow.']},
{q:'What did Max get?',o:['a certificate','a medal','some money']}]},
r4:{title:'Sharks',text:`Many people are afraid of sharks because of films. But sharks [19] attack people. Every year, only about five people in the world are killed by sharks. You are more [20] to be hit by lightning!

There are more than five hundred types of shark. The biggest is the whale shark, which can be twelve metres long. It only eats very small sea animals, so it isn't [21] to humans.

Sharks have lived in the oceans for about four hundred million years – even [22] than dinosaurs! They can smell blood from far away, and some sharks can swim at fifty kilometres an hour.

Today, many sharks are in danger. People [23] about a hundred million sharks every year, often just for their fins. Scientists say we must [24] sharks because they are very important for the oceans.`,
opts:[['rarely','often','never'],['likely','possible','probably'],['dangerous','frightening','afraid'],['longer','bigger','faster'],['kill','die','dead'],['protect','keep up','hold']]},
r5:{title:'Aquarium visit',text:`Hi Joe,

Yesterday I went to the new aquarium [25] my grandparents. It was brilliant! There's a big glass tunnel, and you can walk under the water. Sharks and huge fish swim [26] your head!

My favourite part was the penguins. There were about twenty of [27], and we watched them having their lunch. They were so funny!

We also saw a show about sea turtles. The woman told us that plastic in the sea is very dangerous [28] turtles. They think plastic bags are jellyfish and eat [29].

You should go. It's open every day, and it's not [30] expensive. I'll come with you if you want!

See you soon,
Harry`,
ans:[['with'],['over','above'],['them'],['for'],['them'],['very','too','that']]},
w6:{ctx:'You visited an aquarium yesterday. Write an email to your English friend, Ali. In your email:',notes:['say who you went with','say what animals you saw','say what you liked best']},
w7:['A girl is on a boat with her family. She is looking at the sea.','She sees dolphins jumping next to the boat.','The girl is showing her photos of the dolphins to her friends at school.'],
l1:[
{q:'What animal did the boy see?',o:['a seal','a dolphin','a whale'],script:[['W','Did you see a whale on the boat trip?'],['M','No, and there weren\'t any dolphins. But I saw a seal on the rocks!']]},
{q:'How much is a ticket for the aquarium?',o:['£13','£30','£3'],script:[['M','How much is it for one adult?'],['W','Thirteen pounds. Children are three pounds.']]},
{q:'What time is the penguin show?',o:['2.15','12.15','2.50'],script:[['W','When is the penguin show? Twelve fifteen?'],['M','No, that\'s the shark feeding. The penguins are at quarter past two.']]},
{q:'What did the girl find on the beach?',o:['a shell','a crab','a starfish'],script:[['M','Did you find a crab?'],['W','I looked for crabs and starfish, but I only found this beautiful shell.']]},
{q:'Where will they meet?',o:['at the café','at the entrance','at the gift shop'],script:[['W','Shall we meet at the entrance?'],['M','It\'s too busy there. Let\'s meet at the café. Not the gift shop – that\'s busy too.']]}],
l2:{intro:'You will hear a man talking about a whale-watching trip.',g:'M',head:'Whale Watching',script:`Good morning, and welcome to Ocean Tours. Today's whale-watching trip will last about three hours. We'll travel twenty kilometres out to sea, where whales often come to eat. Please wear warm clothes – it can be cold on the water, even in summer. You'll find life jackets under your seats. If we don't see any whales today, you can come on another trip for free. Hot drinks are available at the bar at the back of the boat. And don't forget your camera!`,
sents:['Trip length: about ___ hours','Distance out to sea: ___ km','Life jackets are under your ___','If you see no whales: next trip is ___','Hot drinks at the ___'],
ans:[['3','three'],['20','twenty'],['seats','seat'],['free'],['bar']]},
l3:{intro:'You will hear Chloe talking to her friend Ian about learning to surf.',names:{W:'Chloe',M:'Ian'},script:[
['M','Chloe, I hear you\'re learning to surf!'],['W','Yes! I\'m having lessons at a surf school in Cornwall.'],
['M','Is it difficult?'],['W','Very! On the first day, I fell in the water about fifty times.'],
['M','Can you stand on the board now?'],['W','Yes, since my third lesson. It\'s the best feeling!'],
['M','Isn\'t the water cold?'],['W','Freezing! But we wear wetsuits, so it\'s OK.'],
['M','When\'s your next lesson?'],['W','On Saturday. Come and watch – or try it!']],
q:[{q:'Where is Chloe learning to surf?',o:['in Cornwall','in Wales','in Scotland']},
{q:'What happened on the first day?',o:['She fell a lot.','She stood up easily.','She lost her board.']},
{q:'When did Chloe first stand on the board?',o:['in the third lesson','in the first lesson','in the fifth lesson']},
{q:'What helps with the cold water?',o:['special clothes','hot drinks','short lessons']},
{q:'What does Chloe suggest?',o:['Ian should come on Saturday.','Ian should buy a board.','Ian should go to Cornwall alone.']}]},
l4:[
{ctx:'You hear a woman talking about a beach.',q:'Why does she like it?',o:['It is quiet.','It has good cafés.','It is easy to get to.'],script:[['W','There are no cafés and it\'s a long walk to get there. But there\'s nobody else there. Just me and the sea.']]},
{ctx:'You hear a man talking to his children.',q:'What does he tell them?',o:['to stay close to the beach','to come out of the water','to put on sun cream'],script:[['M','You can swim, but don\'t go far. Stay near the beach where I can see you.']]},
{ctx:'You hear two friends talking about an aquarium.',q:'What did the girl think of it?',o:['It was too crowded.','It was too expensive.','It was too small.'],script:[['M','Did you like the aquarium?'],['W','I couldn\'t see anything. There were so many people!']]},
{ctx:'You hear a boy talking about fishing.',q:'How does he feel?',o:['disappointed','happy','bored'],script:[['M','I sat by the river for six hours and didn\'t catch a single fish. Dad caught three!']]},
{ctx:'You hear a woman on the radio.',q:'What is she talking about?',o:['the danger of plastic in the sea','a new beach','a swimming competition'],script:[['W','Every year, eight million tonnes of plastic go into our oceans. It kills fish, birds and turtles.']]}],
l5:{intro:'You will hear Ben talking to his mum about which sea animals his friends like best. What animal does each person like?',names:{M:'Ben',W:'Mum'},script:[
['W','Ben, which sea animals do your friends like?'],
['M','Well, Ruby loves dolphins.'],
['W','And Leo?'],['M','Leo likes sharks. He says they\'re cool.'],
['W','What about Isla?'],['M','Isla likes turtles.'],
['W','And Theo?'],['M','He used to like whales, but now he likes octopuses.'],
['W','And Freya?'],['M','Freya likes penguins.']],
items:['Ruby','Leo','Isla','Theo','Freya'],opts:['dolphins','sharks','turtles','octopuses','penguins','whales','seals','crabs']},
s:{p1:['Do you live near the sea?','Do you like swimming?','Have you ever been on a boat?','When did you last go to the beach?','Please tell me something about your favourite beach.'],
p2:{topic:'activities at the sea',ideas:['swimming','surfing','fishing','sailing','building sandcastles'],q:['Do you think surfing is difficult?','Which of these activities would you like to do?','Do you prefer the beach or the mountains?','What do people do at the beach in your country?']}}
});
