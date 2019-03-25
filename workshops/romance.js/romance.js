let text = `
Thank you, Iowa.

You know, they said -- they said -- they said this day would never come.

They said our sights were set too high.

They said this country was too divided, too disillusioned to ever come together around a common purpose.

But on this January night, at this defining moment in history, you have done what the cynics said we couldn't do.

You have done what the state of New Hampshire can do in five days.

You have done what America can do in this new year, 2008.

In lines that stretched around schools and churches, in small towns and in big cities, you came together as Democrats, Republicans, and independents, to stand up and say that we are one nation. We are one people. And our time for change has come.

You said the time has come to move beyond the bitterness and pettiness and anger that's consumed Washington; to end the political strategy that's been all about division, and instead make it about addition; to build a coalition for change that stretches through red states and blue states; because that's how we'll win in November, and that's how we'll finally meet the challenges that we face as a nation.

We are choosing hope over fear. We're choosing unity over division, and sending a powerful message that change is coming to America.

You said the time has come to tell the lobbyists who think their money and their influence speak louder than our voices that they don't own this government -- we do. And we are here to take it back.

The time has come for a President who will be honest about the choices and the challenges we face, who will listen to you and learn from you, even when we disagree, who won't just tell you what you want to hear, but what you need to know.

And in New Hampshire, if you give me the same chance that Iowa did tonight, I will be that President for America.

I'll be a President who finally makes health care affordable and available to every single American, the same way I expanded health care in Illinois, by -- by bringing Democrats and Republicans together to get the job done.

I'll be a President who ends the tax breaks for companies that ship our jobs overseas and put a middle-class tax cut into the pockets of working Americans who deserve it.

I'll be a President who harnesses the ingenuity of farmers and scientists and entrepreneurs to free this nation from the tyranny of oil once and for all.

And I'll be a President who ends this war in Iraq and finally brings our troops home, who restores our moral standing, who understands that 9/11 is not a way to scare up votes but a challenge that should unite America and the world against the common threats of the 21st century -- common threats of terrorism and nuclear weapons, climate change and poverty, genocide and disease.

Tonight, we are one step closer to that vision of America because of what you did here in Iowa. And so I'd especially like to thank the organizers and the precinct captains, the volunteers and the staff who made this all possible.

And while I'm at it on thank you's, I think it makes sense for me to thank the love of my life, the rock of the Obama family, the closer on the campaign trail: Give it up for Michelle Obama.

I know you didn't do this for me. You did this -- You did this because you believed so deeply in the most American of ideas -- that in the face of impossible odds, people who love this country can change it.

I know this. I know this because while I may be standing here tonight, I'll never forget that my journey began on the streets of Chicago doing what so many of you have done for this campaign and all the campaigns here in Iowa: organizing and working and fighting to make people's lives just a little bit better.

I know how hard it is. It comes with little sleep, little pay, and a lot of sacrifice. There are days of disappointment. But sometimes, just sometimes, there are nights like this: a night -- a night that, years from now, when we've made the changes we believe in, when more families can afford to see a doctor, when our children -- when Malia and Sasha and your children inherit a planet that's a little cleaner and safer, when the world sees America differently, and America sees itself as a nation less divided and more united, you'll be able to look back with pride and say that this was the moment when it all began.

This was the moment when the improbable beat what Washington always said was inevitable.

This was the moment when we tore down barriers that have divided us for too long; when we rallied people of all parties and ages to a common cause; when we finally gave Americans who had never participated in politics a reason to stand up and to do so.

This was the moment when we finally beat back the poli[tics] of fear and doubt and cynicism, the politics where we tear each other down instead of lifting this country up. This was the moment.

Years from now, you'll look back and you'll say that this was the moment, this was the place where America remembered what it means to hope. For many months, we've been teased, even derided for talking about hope. But we always knew that hope is not blind optimism. It's not ignoring the enormity of the tasks ahead or the roadblocks that stand in our path.

It's not sitting on the sidelines or shirking from a fight. Hope is that thing inside us that insists, despite all the evidence to the contrary, that something better awaits us if we have the courage to reach for it and to work for it and to fight for it.

Hope is what I saw in the eyes of the young woman in Cedar Rapids who works the night shift after a full day of college and still can't afford health care for a sister who's ill -- a young woman who still believes that this country will give her the chance to live out her dreams.

Hope is what I heard in the voice of the New Hampshire woman who told me that she hasn't been able to breathe since her nephew left for Iraq -- who still goes to bed each night praying for his safe return.

Hope is what led a band of colonists to rise up against an empire, what led the greatest of generations to free a continent and heal a nation, what led young women and young men to sit at lunch counters and brave fire hoses and march through Selma and Montgomery for freedom's cause.

Hope -- Hope is what led me here today. With a father from Kenya, a mother from Kansas, and a story that could only happen in the United States of America.

Hope is the bedrock of this nation -- the belief that our destiny will not be written for us, but by us, by all those men and women who are not content to settle for the world as it is, who have the courage to remake the world as it should be.

That is what we started here in Iowa and that is the message we can now carry to New Hampshire and beyond; the same message we had when we were up and when we were down; the one that can save this country, brick by brick, block by block, calloused hand by calloused hand; that together, ordinary people can do extraordinary things.

Because we are not a collection of red states and blue states. We are the United States of America. And in this moment, in this election, we are ready to believe again.

Thank you, Iowa.

`

let cleanedText = [];

const parseText = (source) => {
  let onlyChars = source.replace(/[^\w\s]/gi, '');
  text = onlyChars.split(/\s/);
  text.forEach(function (word) {
    if (word !== '' && word !== undefined) {
      cleanedText.push(word.toLowerCase());
    }
  })
}

const markov = {};

const wordPairs = (arr) => {
  arr.forEach(function (word) {
    markov[word] = [];
  })

  arr.forEach(function (word, index) {
    markov[word].push(arr[index + 1]);
  })
}

const writeLine = (markovChain, wordCount) => {
  let markovKeys = Object.keys(markovChain);
  let randomNum = Math.floor(Math.random() * (markovKeys.length));
  let startWord = markovKeys[randomNum];
  let currentWord = startWord;
  let line = '';

  for (let i = 0; i < wordCount; i++) {
    let nextWordIndex = randomWord(markov[startWord]);
    currentWord = markovChain[currentWord][nextWordIndex];
    if (!markovChain[currentWord]) {
      currentWord = markovKeys[randomNum];
    }
    line += `${currentWord} `;
  }
  console.log(line);
}

const randomWord = (arr) => {
  return Math.floor(Math.random() * (arr.length));
}

parseText(text);
wordPairs(cleanedText);

const writePoem = (lines, dictionary) => {
  let wordCount = Math.floor(Math.random() * (8 - 3) + 3);
  for (let i = 0; i < lines; i++) {
    writeLine(dictionary, wordCount);
    wordCount = Math.floor(Math.random() * (8 - 3) + 3);
  }
}

writePoem(3, markov);