const LOCAL_QUOTES = {
  love: [
    { text: "Love recognizes no barriers.", author: "Maya Angelou" },
    { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
    { text: "If I know what love is, it is because of you.", author: "Hermann Hesse" },
    { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
    { text: "At the touch of love everyone becomes a poet.", author: "Plato" },
    { text: "A life lived in love will never be dull.", author: "Leo Buscaglia" },
    { text: "I have decided to stick with love. Hate is too great a burden to bear.", author: "Martin Luther King Jr." },
    { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë" },
    { text: "You are my sun, my moon, and all my stars.", author: "E. E. Cummings" },
    { text: "Love is not what you say. Love is what you do.", author: "Unknown" },
    { text: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
    { text: "I would rather spend one lifetime with you than face all the ages of this world alone.", author: "J.R.R. Tolkien" },
    { text: "The giving of love is an education in itself.", author: "Eleanor Roosevelt" },
    { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { text: "Love is a friendship set to music.", author: "Joseph Campbell" },
    { text: "There is only one happiness in this life, to love and be loved.", author: "George Sand" },
    { text: "The heart has its reasons which reason knows nothing of.", author: "Blaise Pascal" },
    { text: "Love is the bridge between you and everything.", author: "Rumi" },
    { text: "The measure of love is to love without measure.", author: "Saint Augustine" },
    { text: "If I had a flower for every time I thought of you, I could walk in my garden forever.", author: "Alfred Tennyson" },
    { text: "I am my beloved’s and my beloved is mine.", author: "Song of Solomon" },
    { text: "Love does not dominate; it cultivates.", author: "Johann Wolfgang von Goethe" },
    { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
    { text: "Love is when the other person’s happiness is more important than your own.", author: "H. Jackson Brown Jr." },
    { text: "We are most alive when we’re in love.", author: "John Updike" },
    { text: "True love stories never have endings.", author: "Richard Bach" },
    { text: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { text: "Love is an endless act of forgiveness.", author: "Beyoncé" },
    { text: "Love is not only something you feel, it is something you do.", author: "David Wilkerson" },
    { text: "A loving heart is the truest wisdom.", author: "Charles Dickens" },
    { text: "The art of love is largely the art of persistence.", author: "Albert Ellis" },
    { text: "Age does not protect you from love. But love, to some extent, protects you from age.", author: "Jeanne Moreau" },
    { text: "The more one judges, the less one loves.", author: "Honoré de Balzac" },
    { text: "Love is the whole thing. We are only pieces.", author: "Rumi" },
    { text: "Love and compassion are necessities, not luxuries. Without them humanity cannot survive.", author: "Dalai Lama" },
    { text: "To love someone is to see a miracle invisible to others.", author: "François Mauriac" },
    { text: "Love is the poetry of the senses.", author: "Honoré de Balzac" },
    { text: "One word frees us of all the weight and pain of life: that word is love.", author: "Sophocles" },
    { text: "Love is the beauty of the soul.", author: "Saint Augustine" },
    { text: "Love is like the wind, you can’t see it but you can feel it.", author: "Nicholas Sparks" },
    { text: "There is no remedy for love but to love more.", author: "Henry David Thoreau" },
    { text: "Where there is love, there is no darkness.", author: "Burundian Proverb" },
    { text: "Love seeks one thing only: the good of the one loved.", author: "Thomas Merton" },
    { text: "Love is a canvas furnished by nature and embroidered by imagination.", author: "Voltaire" },
    { text: "Who, being loved, is poor?", author: "Oscar Wilde" },
    { text: "Love cures people—both the ones who give it and the ones who receive it.", author: "Karl Menninger" },
    { text: "There is always some madness in love. But there is also always some reason in madness.", author: "Friedrich Nietzsche" },
    { text: "Love is the only force capable of transforming an enemy into a friend.", author: "Martin Luther King Jr." },
    { text: "The greatest thing you’ll ever learn is just to love and be loved in return.", author: "Eden Ahbez" },
    { text: "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.", author: "Sam Keen" },
    { text: "Love is the magician that pulls man out of his own hat.", author: "Ben Hecht" },
    { text: "At the touch of love, everyone becomes a poet.", author: "Plato" },
    { text: "The giving of love is an education in itself.", author: "Eleanor Roosevelt" },
    { text: "When we are in love we seem to ourselves quite different from what we were before.", author: "Blaise Pascal" },
    { text: "Love is the greatest refreshment in life.", author: "Pablo Picasso" },
    { text: "Love brings to life whatever is dead around us.", author: "Franz Rosenzweig" },
    { text: "Love is not about how much you say ‘I love you’, but how much you prove that it’s true.", author: "Unknown" },
    { text: "Love is a great master. It teaches us to be what we never were.", author: "Molière" },
    { text: "To love is nothing. To be loved is something. But to love and be loved, that’s everything.", author: "T. Tolis" },
    { text: "Love makes your soul crawl out from its hiding place.", author: "Zora Neale Hurston" },
    { text: "The greatest happiness of life is the conviction that we are loved.", author: "Victor Hugo" },
    { text: "I would rather share one lifetime with you than face all the ages of this world alone.", author: "J.R.R. Tolkien" },
    { text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" },
    { text: "The water shines only by the sun. And it is you who are my sun.", author: "Charles de Leusse" },
    { text: "I have found the one whom my soul loves.", author: "Song of Solomon" },
    { text: "Love planted a rose, and the world turned sweet.", author: "Katharine Lee Bates" },
    { text: "Love is space and time measured by the heart.", author: "Marcel Proust" },
    { text: "Love is a better teacher than duty.", author: "Albert Einstein" },
    { text: "Love is the expansion of two natures in such fashion that each includes the other, each is enriched by the other.", author: "Felix Adler" },
    { text: "Love is all we have, the only way that each can help the other.", author: "Euripides" },
    { text: "Love is the flower you’ve got to let grow.", author: "John Lennon" },
    { text: "The only thing we never get enough of is love; and the only thing we never give enough of is love.", author: "Henry Miller" },
    { text: "Love is the act of endless forgiveness, a tender look which becomes a habit.", author: "Peter Ustinov" },
    { text: "To love is to burn, to be on fire.", author: "Jane Austen" },
    { text: "Love is an irresistible desire to be irresistibly desired.", author: "Robert Frost" },
    { text: "The richest love is that which submits to the arbitration of time.", author: "Lawrence Durrell" },
    { text: "Love is a great beautifier.", author: "Louisa May Alcott" },
    { text: "Love is a game that two can play and both can win.", author: "Eva Gabor" },
    { text: "Love comforteth like sunshine after rain.", author: "William Shakespeare" },
    { text: "There can be no deep disappointment where there is not deep love.", author: "Martin Luther King Jr." },
    { text: "To love another person is to see the face of God.", author: "Victor Hugo" },
    { text: "Love takes off masks that we fear we cannot live without and know we cannot live within.", author: "James Baldwin" },
    { text: "Love is the triumph of imagination over intelligence.", author: "H. L. Mencken" },
    { text: "I look at you and see the rest of my life in front of my eyes.", author: "Unknown" },
    { text: "The way to love anything is to realize that it may be lost.", author: "G. K. Chesterton" },
    { text: "We’re all a little weird and life’s a little weird, and when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutual weirdness and call it love.", author: "Dr. Seuss" },
    { text: "The greatest act of love is to give someone your time.", author: "Unknown" },
    { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { text: "Love is friendship that has caught fire.", author: "Ann Landers" },
    { text: "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.", author: "Rabindranath Tagore" },
    { text: "Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same.", author: "Helen Keller" },
    { text: "The more you are motivated by love, the more fearless and free your action will be.", author: "Dalai Lama" },
    { text: "Love is the strongest force the world possesses, and yet it is the humblest imaginable.", author: "Mahatma Gandhi" },
    { text: "Love is a promise; love is a souvenir, once given never forgotten, never let it disappear.", author: "John Lennon" },
    { text: "Love is not only something you feel, it is something you do.", author: "David Wilkerson" },
    { text: "To love for the sake of being loved is human; but to love for the sake of loving is angelic.", author: "Alphonse de Lamartine" },
    { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
    { text: "Love is the answer, and you know that for sure; love is a flower, you’ve got to let it grow.", author: "John Lennon" },
    { text: "In a world where you can be anything, be kind.", author: "Baron" }
  ],

    motivation: [
    { text: "Your limitation—it’s only your imagination.", author: "Tony Pio" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "Dream it. Wish it. Do it.", author: "Unknown" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Dream bigger. Do bigger.", author: "Unknown" },
    { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
    { text: "Little things make big days.", author: "Unknown" },
    { text: "It’s going to be hard, but hard does not mean impossible.", author: "Tony Pio" },
    { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
    { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
    { text: "Dream it. Believe it. Build it.", author: "Unknown" },
    { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { text: "Your passion is waiting for your courage to catch up.", author: "Isabelle Lafleche" },
    { text: "Magic is believing in yourself. If you can make that happen, you can make anything happen.", author: "Johann Wolfgang von Goethe" },
    { text: "If something is important enough, even if the odds are against you, you should still do it.", author: "Elon Musk" },
    { text: "Hold the vision, trust the process.", author: "Unknown" },
    { text: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "A champion is defined not by their wins but by how they can recover when they fall.", author: "Serena Williams" },
    { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
    { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Go the extra mile. It’s never crowded there.", author: "Wayne Dyer" },
    { text: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
    { text: "Success is not for the lazy.", author: "Unknown" },
    { text: "Believe in yourself and you will be unstoppable.", author: "Unknown" },
    { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
    { text: "Don’t wait for inspiration. Be the inspiration.", author: "Unknown" },
    { text: "If you get tired, learn to rest, not quit.", author: "Banksy" },
    { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { text: "Hustle in silence and let your success be the noise.", author: "Unknown" },
    { text: "Small progress is still progress.", author: "Unknown" },
    { text: "Be stronger than your excuses.", author: "Unknown" },
    { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I never dreamed about success, I worked for it.", author: "Estee Lauder" },
    { text: "You can either experience the pain of discipline or the pain of regret. The choice is yours.", author: "Unknown" },
    { text: "Don’t wish it were easier. Wish you were better.", author: "Jim Rohn" },
    { text: "Do what you feel in your heart to be right – for you’ll be criticized anyway.", author: "Eleanor Roosevelt" },
    { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { text: "Your only limit is your mind.", author: "Unknown" },
    { text: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
    { text: "Never give up. Great things take time.", author: "Unknown" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "If you want to achieve greatness stop asking for permission.", author: "Unknown" },
    { text: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
    { text: "Pain is temporary. Quitting lasts forever.", author: "Lance Armstrong" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "Sometimes later becomes never. Do it now.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Stay focused and never give up.", author: "Unknown" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "When you feel like quitting, think about why you started.", author: "Unknown" },
    { text: "Aim for the moon. If you miss, you may hit a star.", author: "W. Clement Stone" },
    { text: "Do it with passion or not at all.", author: "Unknown" },
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { text: "Opportunities are usually disguised as hard work, so most people don’t recognize them.", author: "Ann Landers" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Act as if it were impossible to fail.", author: "Dorothea Brande" },
    { text: "Hard days are the best because that’s when champions are made.", author: "Gabby Douglas" },
    { text: "Work like someone is working 24 hours a day to take it away from you.", author: "Mark Cuban" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
    { text: "Believe you deserve it and the universe will serve it.", author: "Unknown" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" }
  ],

    success: [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { text: "Some people dream of success while others wake up and work.", author: "Unknown" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Don’t be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "I never dreamed about success. I worked for it.", author: "Estee Lauder" },
    { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    { text: "The secret to success is to know something nobody else knows.", author: "Aristotle Onassis" },
    { text: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    { text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { text: "Don’t be content with average. Bring your best to the moment.", author: "Unknown" },
    { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
    { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { text: "Success is getting what you want, happiness is wanting what you get.", author: "W. P. Kinsella" },
    { text: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson" },
    { text: "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.", author: "Unknown" },
    { text: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
    { text: "If you want to achieve greatness stop asking for permission.", author: "Unknown" },
    { text: "Success means doing the best we can with what we have.", author: "Zig Ziglar" },
    { text: "The difference between successful people and very successful people is that very successful people say no to almost everything.", author: "Warren Buffett" },
    { text: "You know you are on the road to success if you would do your job, and not be paid for it.", author: "Oprah Winfrey" },
    { text: "Before anything else, preparation is the key to success.", author: "Alexander Graham Bell" },
    { text: "I never lose. I either win or learn.", author: "Nelson Mandela" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "Winners are not afraid of losing. But losers are.", author: "Robert Kiyosaki" },
    { text: "Success isn’t always about greatness. It’s about consistency.", author: "Dwayne Johnson" },
    { text: "All progress takes place outside the comfort zone.", author: "Michael John Bobak" },
    { text: "If you are willing to work hard, you can achieve almost anything.", author: "Unknown" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "The difference between try and triumph is just a little umph!", author: "Marvin Phillips" },
    { text: "Big jobs usually go to the men who prove their ability to outgrow small ones.", author: "Ralph Waldo Emerson" },
    { text: "Don’t be afraid to give up the good to go for the great.", author: "Kenny Rogers" },
    { text: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    { text: "Success is simply a matter of luck. Ask any failure.", author: "Earl Wilson" },
    { text: "If you want to be successful, you must respect one rule: Never lie to yourself.", author: "Paulo Coelho" },
    { text: "Judge your success by what you had to give up in order to get it.", author: "Dalai Lama" },
    { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { text: "Stop chasing the money and start chasing the passion.", author: "Tony Hsieh" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Every accomplishment starts with the decision to try.", author: "John F. Kennedy" },
    { text: "Your success and happiness lie in you.", author: "Helen Keller" },
    { text: "It’s not just about being better. It’s about being different.", author: "Unknown" },
    { text: "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.", author: "David Frost" },
    { text: "A quitter never wins and a winner never quits.", author: "Napoleon Hill" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "Winners are willing to go longer, work harder, and give more than anyone else.", author: "Vince Lombardi" },
    { text: "Do not be afraid to fail, be afraid not to try.", author: "Unknown" },
    { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
    { text: "The more you sweat in practice, the less you bleed in battle.", author: "Unknown" },
    { text: "Chase the vision, not the money; the money will end up following you.", author: "Tony Hsieh" },
    { text: "Don’t let small minds convince you that your dreams are too big.", author: "Unknown" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Never stop learning because life never stops teaching.", author: "Unknown" },
    { text: "The difference between winning and losing is most often not quitting.", author: "Walt Disney" },
    { text: "Courage is resistance to fear, mastery of fear—not absence of fear.", author: "Mark Twain" },
    { text: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.", author: "Jim Rohn" },
    { text: "Be not afraid of growing slowly; be afraid only of standing still.", author: "Chinese Proverb" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Don’t tell people your plans. Show them your results.", author: "Unknown" },
    { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
    { text: "Do the hard jobs first. The easy jobs will take care of themselves.", author: "Dale Carnegie" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "Your time is now. Start where you stand.", author: "Unknown" },
    { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
    { text: "Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.", author: "Unknown" },
    { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
    { text: "Every day is a new opportunity to change your life.", author: "Unknown" },
    { text: "Success is a mindset. If you want to be successful, start thinking of yourself as a success.", author: "Joyce Brothers" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
    { text: "Your big opportunity may be right where you are now.", author: "Napoleon Hill" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Don’t give up. Don’t lose hope. Don’t sell out.", author: "Christopher Reeve" },
    { text: "There is no substitute for hard work.", author: "Thomas Edison" },
    { text: "Success is nothing more than a few simple disciplines, practiced every day.", author: "Jim Rohn" },
    { text: "Your success is your responsibility.", author: "Unknown" }
  ],

     life: [
    { text: "We only live once, but if we live well, once is enough.", author: "Mae West" },
    { text: "In the end, it's not the years in your life that count, it's the life in your years.", author: "Abraham Lincoln" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
    { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
    { text: "You only pass through this life once, you don’t come back for an encore.", author: "Elvis Presley" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { text: "Difficulties in life are intended to make us better, not bitter.", author: "Dan Reeves" },
    { text: "Enjoy the little things in life, for one day you may look back and realize they were the big things.", author: "Robert Breault" },
    { text: "Keep smiling, because life is a beautiful thing and there’s so much to smile about.", author: "Marilyn Monroe" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Live each day as if your life had just begun.", author: "Johann Wolfgang von Goethe" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "Life is about making an impact, not making an income.", author: "Kevin Kruse" },
    { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    { text: "An unexamined life is not worth living.", author: "Socrates" },
    { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
    { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
    { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Life is too important to be taken seriously.", author: "Oscar Wilde" },
    { text: "You get in life what you have the courage to ask for.", author: "Oprah Winfrey" },
    { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Live life to the fullest, and focus on the positive.", author: "Matt Cameron" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "Life is too short to waste your time on people who don’t respect, appreciate, and value you.", author: "Roy T. Bennett" },
    { text: "The best time for new beginnings is now.", author: "Unknown" },
    { text: "Sometimes the smallest step in the right direction ends up being the biggest step of your life.", author: "Naeem Callaway" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Live your life and forget your age.", author: "Norman Vincent Peale" },
    { text: "Life is not about waiting for the storm to pass, but about learning to dance in the rain.", author: "Vivian Greene" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Each person must live their life as a model for others.", author: "Rosa Parks" },
    { text: "Life has no limitations, except the ones you make.", author: "Les Brown" },
    { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { text: "Live in such a way that you would not be ashamed to sell your parrot to the town gossip.", author: "Will Rogers" },
    { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
    { text: "Life isn’t about finding yourself. It’s about creating yourself.", author: "George Bernard Shaw" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "It’s not what we have in life, but who we have in our life that matters.", author: "J.M. Laurence" },
    { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
    { text: "At the end of the day, let there be no excuses, no explanations, no regrets.", author: "Steve Maraboli" },
    { text: "Live with no excuses and travel with no regrets.", author: "Oscar Wilde" },
    { text: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn" },
    { text: "Enjoy life. There’s plenty of time to be dead.", author: "Hans Christian Andersen" },
    { text: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
    { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
    { text: "Life’s too mysterious to take too serious.", author: "Mary Engelbreit" },
    { text: "Sometimes you will never know the value of a moment until it becomes a memory.", author: "Dr. Seuss" },
    { text: "Life is too short for long-term grudges.", author: "Elon Musk" },
    { text: "Make each day your masterpiece.", author: "John Wooden" },
    { text: "You are the artist of your own life. Don’t hand the paintbrush to anyone else.", author: "Unknown" },
    { text: "Don’t cry because it’s over, smile because it happened.", author: "Dr. Seuss" },
    { text: "Life shrinks or expands in proportion to one’s courage.", author: "Anaïs Nin" },
    { text: "Life is too important to be taken seriously.", author: "Oscar Wilde" },
    { text: "Life is a long lesson in humility.", author: "James M. Barrie" },
    { text: "A happy life is one spent in learning, earning, and yearning.", author: "Lillian Gish" },
    { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
    { text: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell" },
    { text: "Don’t limit your challenges. Challenge your limits.", author: "Jerry Dunn" },
    { text: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam" },
    { text: "Life is the art of drawing without an eraser.", author: "John W. Gardner" },
    { text: "Live each day as though your life depends on it, because it does.", author: "Unknown" },
    { text: "Happiness is the highest form of health.", author: "Dalai Lama" },
    { text: "Live life with no excuses, travel with no regret.", author: "Oscar Wilde" },
    { text: "Life always offers you a second chance. It’s called tomorrow.", author: "Dylan Thomas" },
    { text: "A well-spent day brings happy sleep.", author: "Leonardo da Vinci" },
    { text: "Life is too short to be living someone else’s dream.", author: "Hugh Hefner" },
    { text: "Every day may not be good, but there’s something good in every day.", author: "Alice Morse Earle" },
    { text: "Life is the flower for which love is the honey.", author: "Victor Hugo" },
    { text: "Your life is your message to the world. Make sure it’s inspiring.", author: "Unknown" },
    { text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon" }
  ],


    friendship: [
    { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { text: "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.’", author: "C.S. Lewis" },
    { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
    { text: "True friends are never apart, maybe in distance but never in heart.", author: "Helen Keller" },
    { text: "Friendship is the only cement that will ever hold the world together.", author: "Woodrow Wilson" },
    { text: "There is nothing on this earth more to be prized than true friendship.", author: "Thomas Aquinas" },
    { text: "Good friends are like stars. You don’t always see them, but you know they’re always there.", author: "Unknown" },
    { text: "Friendship improves happiness and abates misery, by the doubling of our joy and the dividing of our grief.", author: "Marcus Tullius Cicero" },
    { text: "A single rose can be my garden… a single friend, my world.", author: "Leo Buscaglia" },
    { text: "Friendship is always a sweet responsibility, never an opportunity.", author: "Khalil Gibran" },
    { text: "In the cookie of life, friends are the chocolate chips.", author: "Unknown" },
    { text: "A friend is one of the nicest things you can have, and one of the best things you can be.", author: "Douglas Pagels" },
    { text: "Friendship is the golden thread that ties the heart of all the world.", author: "John Evelyn" },
    { text: "True friendship comes when the silence between two people is comfortable.", author: "David Tyson" },
    { text: "A loyal friend laughs at your jokes when they’re not so good, and sympathizes with your problems when they’re not so bad.", author: "Arnold H. Glasgow" },
    { text: "Friends are the family you choose.", author: "Jess C. Scott" },
    { text: "A true friend is someone who thinks that you are a good egg even though he knows that you are slightly cracked.", author: "Bernard Meltzer" },
    { text: "A friend to all is a friend to none.", author: "Aristotle" },
    { text: "Friendship is like a glass ornament, once it is broken it can rarely be put back together exactly the same way.", author: "Charles Kingsley" },
    { text: "It’s not what we have in life, but who we have in our life that matters.", author: "Unknown" },
    { text: "One loyal friend is worth ten thousand relatives.", author: "Euripides" },
    { text: "A friend is what the heart needs all the time.", author: "Henry Van Dyke" },
    { text: "Many people will walk in and out of your life, but only true friends will leave footprints in your heart.", author: "Eleanor Roosevelt" },
    { text: "The only way to have a friend is to be one.", author: "Ralph Waldo Emerson" },
    { text: "Friends are those rare people who ask how we are and then wait to hear the answer.", author: "Ed Cunningham" },
    { text: "A friend may be waiting behind a stranger’s face.", author: "Maya Angelou" },
    { text: "Friendship is the wine of life.", author: "Edward Young" },
    { text: "Life is partly what we make it, and partly what it is made by the friends we choose.", author: "Tennessee Williams" },
    { text: "Friends show their love in times of trouble, not in happiness.", author: "Euripides" },
    { text: "A friend is someone who gives you total freedom to be yourself.", author: "Jim Morrison" },
    { text: "True friends are like diamonds — bright, beautiful, valuable, and always in style.", author: "Nicole Richie" },
    { text: "Friends are the siblings God never gave us.", author: "Mencius" },
    { text: "The greatest gift of life is friendship, and I have received it.", author: "Hubert H. Humphrey" },
    { text: "Friendship is unnecessary, like philosophy, like art… It has no survival value; rather it is one of those things which give value to survival.", author: "C.S. Lewis" },
    { text: "Friendship multiplies the good of life and divides the evil.", author: "Baltasar Gracian" },
    { text: "A friend is one who overlooks your broken fence and admires the flowers in your garden.", author: "Unknown" },
    { text: "Friendship is the purest love.", author: "Osho" },
    { text: "A friend is the one who comes in when the whole world has gone out.", author: "Grace Pulpit" },
    { text: "There are friends, there is family, and then there are friends that become family.", author: "Unknown" },
    { text: "Friendship is a sheltering tree.", author: "Samuel Taylor Coleridge" },
    { text: "Friendship is the comfort of knowing that even when you feel alone, you aren’t.", author: "Unknown" },
    { text: "A friend knows the song in my heart and sings it to me when my memory fails.", author: "Donna Roberts" },
    { text: "Some people go to priests; others to poetry; I to my friends.", author: "Virginia Woolf" },
    { text: "One friend in a storm is worth more than a thousand friends in sunshine.", author: "Matshona Dhliwayo" },
    { text: "A best friend is someone who makes you laugh even when you think you’ll never smile again.", author: "Unknown" },
    { text: "Friendship is the shadow of the evening, which strengthens with the setting sun of life.", author: "Jean de La Fontaine" },
    { text: "A friend is someone who makes it easy to believe in yourself.", author: "Heidi Wills" },
    { text: "Friendship is the source of the greatest pleasures, and without friends even the most agreeable pursuits become tedious.", author: "Thomas Aquinas" },
    { text: "Friendship is like money, easier made than kept.", author: "Samuel Butler" },
    { text: "Friends make the good times better and the hard times easier.", author: "Unknown" },
    { text: "A friend is someone who can see the truth and pain in you even when you are fooling everyone else.", author: "Unknown" },
    { text: "Friends are the bacon bits in the salad bowl of life.", author: "Unknown" },
    { text: "A true friend is forever a friend.", author: "George MacDonald" },
    { text: "A sweet friendship refreshes the soul.", author: "Proverbs 27:9" },
    { text: "Friendship is one mind in two bodies.", author: "Mencius" },
    { text: "Friends are angels who lift us to our feet when our wings have trouble remembering how to fly.", author: "Unknown" },
    { text: "A faithful friend is the medicine of life.", author: "Ecclesiasticus 6:16" },
    { text: "Friendship is not about who you have known the longest, it’s about who came and never left your side.", author: "Unknown" },
    { text: "A friend is a gift you give yourself.", author: "Robert Louis Stevenson" },
    { text: "A friend to all is a friend to none.", author: "Aristotle" },
    { text: "Friendship is the inexpressible comfort of feeling safe with a person, having neither to weigh thoughts nor measure words.", author: "George Eliot" },
    { text: "The most beautiful discovery true friends make is that they can grow separately without growing apart.", author: "Elisabeth Foley" },
    { text: "A good friend knows all your best stories, a best friend has lived them with you.", author: "Unknown" },
    { text: "Friends are the people who make you smile brighter, laugh louder, and live better.", author: "Unknown" },
    { text: "Friendship consists in forgetting what one gives and remembering what one receives.", author: "Alexandre Dumas" },
    { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
    { text: "A friend is someone who reaches for your hand but touches your heart.", author: "Unknown" },
    { text: "Friendship is the hardest thing in the world to explain. It’s not something you learn in school.", author: "Muhammad Ali" },
    { text: "The language of friendship is not words but meanings.", author: "Henry David Thoreau" },
    { text: "Friendship is the golden thread that ties the heart of all the world.", author: "John Evelyn" },
    { text: "Friends are like walls. Sometimes you lean on them, and sometimes it’s good just knowing they’re there.", author: "Unknown" },
    { text: "Friendship is a strong and habitual inclination in two persons to promote the good and happiness of one another.", author: "Eustace Budgell" },
    { text: "Friendship is not about whom you have known the longest. It is about who came and never left your side.", author: "Unknown" },
    { text: "Friendship is a sheltering tree.", author: "Samuel Taylor Coleridge" },
    { text: "A friend is someone who helps you up when you’re down, and if they can’t, they lay down beside you and listen.", author: "Unknown" },
    { text: "Friendship is the sweetest form of love.", author: "Jeremy Taylor" }
  ],

  
    wisdom: [
    { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "In seeking wisdom, you find yourself.", author: "Tony Pio" },
    { text: "Wise men speak because they have something to say; fools because they have to say something.", author: "Plato" },
    { text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", author: "Aristotle" },
    { text: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare" },
    { text: "A wise man will make more opportunities than he finds.", author: "Francis Bacon" },
    { text: "He who opens a school door, closes a prison.", author: "Victor Hugo" },
    { text: "Common sense is not so common.", author: "Voltaire" },
    { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix" },
    { text: "Patience is the companion of wisdom.", author: "Saint Augustine" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "The wise adapt themselves to circumstances, as water molds itself to the pitcher.", author: "Chinese Proverb" },
    { text: "A loving heart is the truest wisdom.", author: "Charles Dickens" },
    { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein" },
    { text: "Silence is the sleep that nourishes wisdom.", author: "Francis Bacon" },
    { text: "To acquire knowledge, one must study; but to acquire wisdom, one must observe.", author: "Marilyn vos Savant" },
    { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { text: "It is not what we profess but what we practice that gives us integrity.", author: "Francis Bacon" },
    { text: "Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.", author: "Chinese Proverb" },
    { text: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl" },
    { text: "Cleverness is not wisdom.", author: "Euripides" },
    { text: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson" },
    { text: "Wisdom begins in wonder.", author: "Socrates" },
    { text: "A man is but the product of his thoughts. What he thinks, he becomes.", author: "Mahatma Gandhi" },
    { text: "Never mistake knowledge for wisdom. One helps you make a living; the other helps you make a life.", author: "Sandra Carey" },
    { text: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.", author: "Bruce Lee" },
    { text: "We don’t receive wisdom; we must discover it for ourselves after a journey that no one can take for us.", author: "Marcel Proust" },
    { text: "Educating the mind without educating the heart is no education at all.", author: "Aristotle" },
    { text: "Do not confuse motion and progress. A rocking horse keeps moving but does not make any progress.", author: "Alfred A. Montapert" },
    { text: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.", author: "Maurice Switzer" },
    { text: "A wise person should have money in their head, but not in their heart.", author: "Jonathan Swift" },
    { text: "The invariable mark of wisdom is to see the miraculous in the common.", author: "Ralph Waldo Emerson" },
    { text: "Don’t gain the world and lose your soul; wisdom is better than silver or gold.", author: "Bob Marley" },
    { text: "Experience is not what happens to you; it is what you do with what happens to you.", author: "Aldous Huxley" },
    { text: "Even a fish wouldn’t get into trouble if it kept its mouth shut.", author: "Proverb" },
    { text: "He that respects himself is safe from others.", author: "Henry Wadsworth Longfellow" },
    { text: "To know when to be generous and when to be firm—that is wisdom.", author: "Elbert Hubbard" },
    { text: "Don’t waste your time with explanations: people only hear what they want to hear.", author: "Paulo Coelho" },
    { text: "An intelligent person aims at wisdom, but a fool starts off in many directions.", author: "Unknown" },
    { text: "Wise men make more opportunities than they find.", author: "Francis Bacon" },
    { text: "The simple things are also the most extraordinary things, and only the wise can see them.", author: "Paulo Coelho" },
    { text: "Prevention is better than cure.", author: "Desiderius Erasmus" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "It is amazing how complete is the delusion that beauty is goodness.", author: "Leo Tolstoy" },
    { text: "Wise men talk because they have something to say; fools, because they have to say something.", author: "Plato" },
    { text: "Sometimes it’s better to be a fool for a moment than to remain one for life.", author: "Unknown" },
    { text: "It is not length of life, but depth of life.", author: "Ralph Waldo Emerson" },
    { text: "All human wisdom is summed up in two words; wait and hope.", author: "Alexandre Dumas" },
    { text: "Wisdom is the daughter of experience.", author: "Leonardo da Vinci" },
    { text: "Self-knowledge is the first step to maturity.", author: "Jane Austen" },
    { text: "Beware of false knowledge; it is more dangerous than ignorance.", author: "George Bernard Shaw" },
    { text: "The more you know, the more you realize you don’t know.", author: "Aristotle" },
    { text: "Learning without thought is labor lost; thought without learning is perilous.", author: "Confucius" },
    { text: "A little knowledge that acts is worth infinitely more than much knowledge that is idle.", author: "Kahlil Gibran" },
    { text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin" },
    { text: "The wise man does at once what the fool does finally.", author: "Baltasar Gracián" },
    { text: "A wise man never knows all, only fools know everything.", author: "African Proverb" },
    { text: "Think before you speak. Read before you think.", author: "Fran Lebowitz" },
    { text: "Mistakes are the usual bridge between inexperience and wisdom.", author: "Phyllis Theroux" },
    { text: "The greatest wisdom is seeing through appearances.", author: "Atisa" },
    { text: "The true sign of intelligence is not knowledge but imagination.", author: "Albert Einstein" },
    { text: "If you realize that all things change, there is nothing you will try to hold on to.", author: "Lao Tzu" },
    { text: "When anger enters the mind, wisdom departs.", author: "Thomas A Kempis" },
    { text: "You can never plan the future by the past.", author: "Edmund Burke" },
    { text: "Knowledge is learning something every day. Wisdom is letting go of something every day.", author: "Zen Proverb" },
    { text: "It is unwise to be too sure of one’s own wisdom.", author: "Mahatma Gandhi" },
    { text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", author: "Albert Einstein" },
    { text: "A wise man thinks all that he says, a fool says all that he thinks.", author: "Proverb" },
    { text: "Wisdom is the reward you get for a lifetime of listening when you’d have preferred to talk.", author: "Doug Larson" },
    { text: "A fool sees himself as wise, but a wise man knows he is a fool.", author: "William Shakespeare" },
    { text: "Wisdom without humility would be like a ship without a rudder.", author: "Unknown" },
    { text: "Do not be wise in words, be wise in deeds.", author: "Jewish Proverb" },
    { text: "The truest wisdom is a resolute determination.", author: "Napoleon Bonaparte" },
    { text: "Sometimes one pays most for the things one gets for nothing.", author: "Albert Einstein" },
    { text: "Don’t let your learning lead to knowledge. Let your learning lead to action.", author: "Jim Rohn" },
    { text: "Wisdom is knowing the right path to take. Integrity is taking it.", author: "M.H. McKee" }
  ]

};

const ALL_QUOTES = Object.values(LOCAL_QUOTES).flat();

/* ------------------------ Elements ------------------------ */
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const themeSwitch = document.getElementById("themeSwitch");
const quoteOfDayEl = document.getElementById("quoteOfDay");
const resultsGrid = document.getElementById("resultsGrid");
const categoryNav = document.getElementById("categoryNav");
const searchBox = document.getElementById("searchBox");
const clearSearchBtn = document.getElementById("clearSearch");

const saveBtn = document.getElementById("saveQuoteBtn");
const newBtn = document.getElementById("newQuoteBtn");

const savedModal = document.getElementById("savedModal");
const savedList = document.getElementById("savedQuotesList");
const viewSavedBtn = document.getElementById("viewSavedBtn");
const exportSavedBtn = document.getElementById("exportSavedBtn");
const closeModalBtn = document.getElementById("closeModal");

const copyQuoteBtn = document.getElementById("copyQuote");
const shareWhatsApp = document.getElementById("shareWhatsApp");
const shareTwitter = document.getElementById("shareTwitter");
const shareFacebook = document.getElementById("shareFacebook");
const shareTelegram = document.getElementById("shareTelegram");

/* ------------------------ State ------------------------ */
let currentCategory = new URLSearchParams(location.search).get("cat") || "all";
let currentQuote = { text: "", author: "" };
let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes") || "[]");

/* ------------------------ Utilities ------------------------ */
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function fadeInQuote(text, author) {
  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;
  setTimeout(() => {
    quoteEl.textContent = text;
    authorEl.textContent = author ? `— ${author}` : "";
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 180);
}

function showToast(msg) {
  const t = document.createElement("div");
  t.textContent = msg;
  Object.assign(t.style, {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0,0,0,.85)",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: "10px",
    zIndex: 1000,
    fontSize: "0.9rem"
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1400);
}

/* ------------------------ Theme ------------------------ */
const setTheme = (mode) => {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(mode);
  themeSwitch.checked = mode === "dark";
  localStorage.setItem("theme", mode);
};
const getTheme = () => localStorage.getItem("theme") || "light";

/* ------------------------ URL Category ------------------------ */
const updateURLCategory = (cat) => {
  const url = new URL(window.location);
  if (cat && cat !== "all") url.searchParams.set("cat", cat);
  else url.searchParams.delete("cat");
  window.history.replaceState({}, "", url);
};

/* ------------------------ Results Grid (Search/Category) ------------------------ */
function renderGrid(quotes) {
  resultsGrid.innerHTML = "";
  if (!quotes || quotes.length === 0) {
    resultsGrid.innerHTML = "<p>No quotes found.</p>";
    return;
  }
  quotes.slice(0, 120).forEach((q) => {
    const card = document.createElement("div");
    card.className = "card";
    const t = document.createElement("p");
    t.className = "t";
    t.textContent = q.text;
    const a = document.createElement("p");
    a.className = "a";
    a.textContent = q.author ? `— ${q.author}` : "";
    const save = document.createElement("button");
    save.className = "save-mini";
    save.textContent = "❤️ Save";
    save.addEventListener("click", () => {
      savedQuotes.push({ text: q.text, author: q.author || "" });
      persistSaved();
      showToast("Saved!");
    });
    card.appendChild(t);
    card.appendChild(a);
    card.appendChild(save);
    resultsGrid.appendChild(card);
  });
}

/* ------------------------ Saved Quotes ------------------------ */
function persistSaved() {
  localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
}
function renderSaved() {
  savedList.innerHTML = "";
  if (savedQuotes.length === 0) {
    savedList.innerHTML = "<li>No saved quotes yet.</li>";
    return;
  }
  savedQuotes.forEach((q, i) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "txt";
    span.textContent = `${q.text} — ${q.author || "Unknown"}`;
    const rm = document.createElement("button");
    rm.className = "rm";
    rm.textContent = "Remove";
    rm.addEventListener("click", () => {
      savedQuotes.splice(i, 1);
      persistSaved();
      renderSaved();
    });
    li.appendChild(span);
    li.appendChild(rm);
    savedList.appendChild(li);
  });
}

/* ------------------------ Share ------------------------ */
function currentQuoteText() {
  return `${currentQuote.text} — ${currentQuote.author || "Unknown"}`;
}
function shareTo(platform) {
  const text = currentQuoteText();
  let url = "";
  if (platform === "copy") {
    navigator.clipboard.writeText(text).then(() => showToast("Copied!"));
    return;
  }
  switch (platform) {
    case "wa":
      url = `https://wa.me/?text=${encodeURIComponent(text)}`;
      break;
    case "tw":
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      break;
    case "fb":
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        location.href
      )}&quote=${encodeURIComponent(text)}`;
      break;
    case "tg":
      url = `https://t.me/share/url?url=${encodeURIComponent(
        location.href
      )}&text=${encodeURIComponent(text)}`;
      break;
  }
  if (url) window.open(url, "_blank", "noopener");
}

/* ------------------------ Quote of the Day ------------------------ */
function setQuoteOfDay() {
  const seed = new Date().toISOString().slice(0, 10);
  const all = Object.values(LOCAL_QUOTES).flat();
  const idx = Math.abs([...seed].reduce((a, c) => a + c.charCodeAt(0), 0)) % all.length;
  const q = all[idx];
  quoteOfDayEl.textContent = `${q.text} — ${q.author}`;
}

/* ------------------------ Generate Quote (Local only) ------------------------ */
async function generateQuote() {
  const pool = currentCategory === "all"
    ? Object.values(LOCAL_QUOTES).flat()
    : (LOCAL_QUOTES[currentCategory] || []);
  const next = pool.length ? pickRandom(pool) : { text: "Stay inspired.", author: "QuoteSpark" };
  currentQuote = next;
  fadeInQuote(next.text, next.author);
}

/* ------------------------ Init ------------------------ */
window.addEventListener("DOMContentLoaded", () => {
  // Theme
  setTheme(getTheme());
  themeSwitch.addEventListener("change", () =>
    setTheme(themeSwitch.checked ? "dark" : "light")
  );

  // Category from URL + bind buttons
  [...categoryNav.querySelectorAll(".cat")].forEach((btn) => {
    if (btn.dataset.cat === currentCategory) btn.classList.add("active");
    btn.addEventListener("click", () => {
      [...categoryNav.querySelectorAll(".cat")].forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      updateURLCategory(currentCategory);
      generateQuote();
      const pool = currentCategory === "all" ? Object.values(LOCAL_QUOTES).flat() : (LOCAL_QUOTES[currentCategory] || []);
      renderGrid(pool);
      searchBox.value = "";
    });
  });

  // Initial grid + QOTD + First Quote
  const initialPool = currentCategory === "all" ? Object.values(LOCAL_QUOTES).flat() : (LOCAL_QUOTES[currentCategory] || []);
  renderGrid(initialPool);
  setQuoteOfDay();
  generateQuote();

  // Buttons: New & Save
  newBtn.addEventListener("click", () => generateQuote());
  saveBtn.addEventListener("click", () => {
    if (!currentQuote.text) return;
    savedQuotes.push({ text: currentQuote.text, author: currentQuote.author || "" });
    persistSaved();
    showToast("Saved!");
  });

  // Share
  copyQuoteBtn.addEventListener("click", () => shareTo("copy"));
  shareWhatsApp.addEventListener("click", () => shareTo("wa"));
  shareTwitter.addEventListener("click", () => shareTo("tw"));
  shareFacebook.addEventListener("click", () => shareTo("fb"));
  shareTelegram.addEventListener("click", () => shareTo("tg"));

  // Saved modal
  viewSavedBtn.addEventListener("click", () => { renderSaved(); savedModal.style.display = "block"; });
  closeModalBtn.addEventListener("click", () => (savedModal.style.display = "none"));
  savedModal.addEventListener("click", (e) => { if (e.target === savedModal) savedModal.style.display = "none"; });

  // Export saved
  exportSavedBtn.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(savedQuotes, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "quotespark-saved.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  // Search within current category
  const doSearch = () => {
    const q = searchBox.value.trim().toLowerCase();
    const pool = currentCategory === "all" ? Object.values(LOCAL_QUOTES).flat() : (LOCAL_QUOTES[currentCategory] || []);
    if (!q) { renderGrid(pool); return; }
    const filtered = pool.filter(
      (item) => item.text.toLowerCase().includes(q) || (item.author || "").toLowerCase().includes(q)
    );
    renderGrid(filtered);
  };
  searchBox.addEventListener("input", doSearch);
  clearSearchBtn.addEventListener("click", () => { searchBox.value = ""; doSearch(); });
});

