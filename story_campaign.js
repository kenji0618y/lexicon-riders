(function () {
  const D = window.STORY_DATA;
  const N = { kael: 'Kael', emma: 'Emma', ryan: 'Ryan', chloe: 'Chloe', specto: 'Mira (voice)', boss: 'Babel Behemoth', chrono: 'Cronos Wyvern' };
  const L = (arr) => arr.map((a) => ({ who: a[0], name: N[a[0]], en: a[1], jp: a[2] }));
  D.unlock = { race: 2, hunt: 3 };
  const C = (act, title, jp, goal, goalEn, req, intro, outro) => ({ act, title, jp, goal, goalEn, req, intro: L(intro || []), outro: L(outro || []) });
  const A1 = 'Act1 港町ポート・リンガ', A2 = 'Act2 こだまの峡谷', A3 = 'Act3 語根の鍛冶場', A4 = 'Act4 大書庫アーカイブ', A5 = 'Act5 天空都市エリュシオン';
  D.chapters = [
    C(A1, 'Words Are Keys', '第1章 言葉は鍵', 'Dojoで単語を学び、6語をマスター(⭐)しよう', 'Master 6 words at the Word Dojo.', { words: 6 }, [], [
      ['emma', 'Six words mastered already? You learn fast, Kael.', 'もう6語もマスターしたの？ケイル、覚えが早いわね。'],
      ['emma', 'Now try real conversation. Ryan and Chloe are waiting in the guild. Talk to them and answer in English.', '次は本物の会話よ。ギルドでライアンとクロエが待っている。話しかけて、英語で答えてみて。']]),
    C(A1, 'Bonds of the Guild', '第2章 ギルドの絆', 'ギルドでRyan・Chloeに話しかけ(Aボタン)、英語の質問に2回正解しよう', 'Answer 2 Bond Talk questions correctly.', { bond: 2 }, [
      ['ryan', 'So you are the new Rider. I am Ryan. Talk to me or to Chloe, and answer in English. Trust grows with every good reply.', 'お前が新人ライダーか。俺はライアン。俺かクロエに話しかけて、英語で答えろ。いい返事のたびに信頼が深まる。']], [
      ['chloe', 'Nice answers! A message must reach the Canyon Station before sunset. Will you ride with me?', 'いい答えね！日没までにキャニオン駅へ伝言を届けなきゃ。一緒に走ってくれる？'],
      ['chloe', 'Go through the North Gate. Listen to the radio, and steer into the correct gate. A right answer gives a turbo boost!', '北のゲートから出発よ。無線をよく聞いて正しいゲートへ。正解ならターボがかかる！']]),
    C(A1, 'The Canyon Run', '第3章 峡谷の疾走', '北ゲートからKartへ。無線の英語を聞いて正しいゲートを選び、ゴールまで走ろう', 'Finish the Canyon Race once.', { races: 1 }, [], [
      ['chloe', 'You made it! The message was delivered. But a monster has been scaring travelers on that road.', 'やったわ！伝言は届いた。でもあの街道では魔物が旅人をおびえさせているの。'],
      ['ryan', 'It is called Gorgon-Delay. It feeds on postponed plans. We hunt it together. Break its horn, wing, and tail!', '名はゴルゴン・ディレイ。先延ばしにされた約束を食らう魔物だ。一緒に狩るぞ。角・翼・尻尾を壊せ！']]),
    C(A1, 'Gorgon-Delay', '第4章 ゴルゴン・ディレイ', 'Bossタブでゴルゴン・ディレイの角・翼・尻尾をすべて壊そう(接近してAで文法問題)', 'Defeat Gorgon-Delay.', { boss: { 0: 1 } }, [], [
      ['ryan', 'Well done. Its scales will make a fine blade for you.', 'よくやった。その鱗はいい剣になる。'],
      ['specto', '...Kael...? Can you hear me? ...Find... the Seventh Voice...', '……ケイル……？聞こえる？……第七の声を……探して……'],
      ['kael', 'That voice... Mira? Specto, was that my sister?', 'この声…ミラ？スペクト、今のは姉さんなのか？']]),
    C(A1, 'The Letter in the Ruins', '第5章 遺跡の手紙', '文法を5問正解し、Resonance 580に到達しよう', 'Grammar 5 correct and Resonance 580.', { grammar: 5, score: 580 }, [
      ['emma', 'Specto was a gift from your sister. It carries a part of her voice. To understand it, you must grow stronger.', 'スペクトはお姉さんからの贈り物。彼女の声の一部が宿っているの。理解するには、あなたがもっと強くならなきゃ。']], [
      ['emma', 'Good. I found this letter in the old ruins. It is written by Mira.', 'いいわ。古い遺跡でこの手紙を見つけたの。ミラが書いたものよ。'],
      ['specto', '"Dear Kael. The curse did not come by accident. Someone broke our language on purpose. Follow the echoes of the canyon."', '「ケイルへ。呪いは偶然ではなかった。誰かが故意に言葉を壊したの。峡谷のこだまをたどって。」'],
      ['kael', 'On purpose... then someone can undo it. Let us go to the Canyon of Echoes!', '故意に…なら誰かが元に戻せる。こだまの峡谷へ行こう！']]),

    C(A2, 'Echo Station', '第6章 こだま駅', '単語を14語マスターし、レースを2回完走しよう', 'Words 14 and 2 race finishes.', { words: 14, races: 2 }, [
      ['chloe', 'Welcome to Echo Station. Here, every announcement is in English. If you miss one word, you may take the wrong road.', 'こだま駅へようこそ。ここの案内は全部英語。聞き逃すと間違った道に進むわよ。']], [
      ['chloe', 'Your listening is improving. Listen for numbers, places, and times first. They hide the answer.', 'リスニングが上達したわね。まず数字・場所・時間を聞き取って。そこに答えが隠れてるの。']]),
    C(A2, "Chloe's Silence", '第7章 クロエの沈黙', 'Bond Talkを合計4回正解しよう', 'Bond Talk 4 correct in total.', { bond: 4 }, [
      ['chloe', 'I used to race with my brother. One day the curse hit, and I could not understand his last words.', '昔は兄と走っていたの。ある日呪いが降りかかって、兄の最後の言葉が分からなかった。']], [
      ['chloe', 'That is why I train so hard in English. Never give up on understanding someone, Kael.', 'だから私は必死に英語を学ぶの。誰かを理解することを諦めないで、ケイル。'],
      ['kael', 'I promise. I will not give up on Mira either.', '約束する。僕もミラを諦めない。']]),
    C(A2, 'Storm Pass', '第8章 嵐の峠', 'レース合計3回完走、文法を合計10問正解しよう', 'Races 3 and Grammar 10.', { races: 3, grammar: 10 }, [
      ['ryan', 'A storm is closing the pass. Messages will be delayed unless someone rides through it.', '嵐が峠をふさいでいる。誰かが走り抜けなければ連絡が遅れる。']], [
      ['ryan', 'You rode through the storm. Good. I will admit it, Kael, you are no longer a rookie.', '嵐を走り抜けたな。いいぞ。認めよう、ケイル、もう新人じゃない。']]),
    C(A2, 'Gorgon Returns', '第9章 ゴルゴンの再来', 'ゴルゴン・ディレイをもう1回倒し(合計2回)、Resonance 600に到達しよう', 'Defeat Gorgon again and reach Resonance 600.', { boss: { 0: 2 }, score: 600 }, [
      ['emma', 'Gorgon-Delay has returned, stronger than before. It feeds on every plan we postpone.', 'ゴルゴン・ディレイが前より強くなって戻ってきたわ。私たちが先延ばしにした計画を食べているの。']], [
      ['ryan', 'It dropped a strange stone. Look, there is a word carved into it: "Root".', '妙な石を落としたな。見ろ、「Root（語根）」と刻まれている。']]),
    C(A2, 'Cronos Wyvern', '第10章 クロノス・ワイバーン', 'Bossタブでクロノス・ワイバーンを倒し、Resonance 620に到達しよう', 'Defeat Cronos Wyvern and reach 620.', { boss: { 1: 1 }, score: 620 }, [
      ['chrono', 'You are late. Everyone who arrives late belongs to me!', '遅いぞ。遅れてきた者はみな我のもの！']], [
      ['chloe', 'The Wyvern is down! The road to the Forge of Roots is open.', 'ワイバーンを倒したわ！語根の鍛冶場への道が開いた。'],
      ['emma', 'The forge master knows how words are built. Go and learn from him.', '鍛冶場の親方は言葉の成り立ちを知っているわ。教わってきなさい。']]),

    C(A3, 'The Forge of Roots', '第11章 語根の鍛冶場', '単語を合計24語マスターし、Bond Talkを合計5回正解しよう', 'Words 24 and Bond 5.', { words: 24, bond: 5 }, [
      ['ryan', 'In this forge, words are made like swords. A root is the steel. A prefix and a suffix are the shape.', 'この鍛冶場では言葉も剣のように作る。語根は鋼、接頭辞と接尾辞は形だ。']], [
      ['ryan', 'See? "Port" means carry. Then export, import, and transport all make sense.', '見ろ、「port」は運ぶという意味。だから export, import, transport の意味が分かる。']]),
    C(A3, 'The Broken Blade', '第12章 折れた刀身', '文法を合計18問正解しよう', 'Grammar 18 in total.', { grammar: 18 }, [
      ['ryan', 'My old sword broke in the last hunt. A broken sentence is like a broken blade. Fix the grammar to fix the blade.', '俺の剣は前の狩りで折れた。壊れた文は折れた刀身と同じだ。文法を直せば刀も直る。']], [
      ['ryan', 'It works. The blade is whole again. Thank you, Kael.', '直ったぞ。刀身が元通りだ。ありがとう、ケイル。']]),
    C(A3, 'Root and Branch', '第13章 根と枝', '単語を合計32語マスターし、レースを合計4回完走しよう', 'Words 32 and Races 4.', { words: 32, races: 4 }, [
      ['emma', 'One root grows many branches. Learn one word, and you gain its whole family.', 'ひとつの語根からたくさんの枝が伸びる。1語覚えれば、その家族ごと手に入るのよ。']], [
      ['emma', 'You see it now. Vocabulary is not a list. It is a tree.', 'もう分かったわね。語彙はリストじゃない。木なのよ。']]),
    C(A3, "The Wyvern's Rematch", '第14章 ワイバーン再戦', 'クロノス・ワイバーンを合計2回倒し、Resonance 650に到達しよう', 'Cronos twice and Resonance 650.', { boss: { 1: 2 }, score: 650 }, [
      ['chrono', 'Time is a blade, and it cuts those who waste it.', '時間は刃。無駄にした者を切り裂く。']], [
      ['kael', 'Time is not our enemy. Wasted time is. I will study every day!', '時間は敵じゃない。無駄にした時間が敵なんだ。僕は毎日勉強する！']]),
    C(A3, "Ryan's Trial", '第15章 ライアンの試練', 'Bond Talkを合計7回正解し、ゴルゴン・ディレイを合計3回倒そう', 'Bond 7 and Gorgon 3.', { bond: 7, boss: { 0: 3 } }, [
      ['ryan', 'One last test. Fight beside me, and speak clearly. A knight must be heard in battle.', '最後の試験だ。俺の隣で戦い、はっきり話せ。騎士は戦場でも言葉が届かねばならない。']], [
      ['ryan', 'You pass. From today, I follow you. Not as a master, but as a friend.', '合格だ。今日から俺はお前についていく。師匠としてではなく、友として。']]),

    C(A4, 'Gates of the Archive', '第16章 大書庫の門', '単語を合計42語マスターし、文法を合計25問正解しよう', 'Words 42 and Grammar 25.', { words: 42, grammar: 25 }, [
      ['emma', 'This is the Great Archive. Every notice, email, and contract from the old world is stored here.', 'ここが大書庫。旧世界のあらゆるお知らせ・メール・契約書が保管されているの。']], [
      ['emma', 'Reading fast is a skill. Find the key words first, and the rest becomes easy.', '速く読むのも技術よ。まずキーワードを見つければ、あとは簡単になる。']]),
    C(A4, "Emma's Secret", '第17章 エマの秘密', 'Bond Talkを合計9回正解しよう', 'Bond Talk 9 in total.', { bond: 9 }, [
      ['emma', 'Kael, I must tell you something. I was Mira\'s partner. I was there the day the curse began.', 'ケイル、話さなきゃいけないことがあるの。私はミラの相棒だった。呪いが始まったあの日、そこにいたの。']], [
      ['emma', 'I could not save her. So I became the guild receptionist and waited for someone brave enough to try.', '私は彼女を救えなかった。だからギルドの受付になって、挑む勇気のある誰かを待っていたの。'],
      ['kael', 'Thank you, Emma. We will do it together.', 'ありがとう、エマ。一緒にやり遂げよう。']]),
    C(A4, 'The Seventh Voice', '第18章 第七の声', 'レースを合計6回完走し、Resonance 690に到達しよう', 'Races 6 and Resonance 690.', { races: 6, score: 690 }, [
      ['specto', 'Kael... the Seventh Voice is the one that listens. The curse cannot break a person who truly listens.', 'ケイル…第七の声とは「聞く声」。本当に聞こうとする人を、呪いは壊せない。']], [
      ['kael', 'Listening... That is why Mira trained me in English. She knew.', '聞くこと…だから姉さんは僕に英語を教えたんだ。分かっていたんだ。']]),
    C(A4, 'The Fallen Scholar', '第19章 堕ちた学者', 'クロノス・ワイバーンを合計3回倒し、文法を合計32問正解しよう', 'Cronos 3 and Grammar 32.', { boss: { 1: 3 }, grammar: 32 }, [
      ['chrono', 'I was once a scholar of this Archive. The curse twisted me. Please... end it.', '私はかつてこの書庫の学者だった。呪いが私をねじ曲げた。頼む…終わらせてくれ。']], [
      ['chrono', 'Thank you. Now I can rest. Beware the Behemoth. It speaks in your sister\'s voice.', 'ありがとう。やっと休める。ベヒーモスに気をつけろ。あれは君の姉の声で話す。']]),
    C(A4, 'Eve of Elysion', '第20章 エリュシオン前夜', '単語を合計60語マスターし、Resonance 720に到達しよう', 'Words 60 and Resonance 720.', { words: 60, score: 720 }, [
      ['ryan', 'Tomorrow we climb to Elysion. Tonight, review everything you learned.', '明日はエリュシオンへ登る。今夜は学んだことをすべて復習しろ。']], [
      ['chloe', 'Look at the stars, Kael. We have come so far.', '星を見て、ケイル。私たち、ずいぶん遠くまで来たわね。'],
      ['kael', 'Tomorrow, I bring my sister home.', '明日、姉さんを連れて帰る。']]),

    C(A5, 'The Ascent', '第21章 天空への登攀', 'レースを合計8回完走し、Bond Talkを合計11回正解しよう', 'Races 8 and Bond 11.', { races: 8, bond: 11 }, [
      ['chloe', 'The road to Elysion is a race in the clouds. Hold on tight!', 'エリュシオンへの道は雲の上のレースよ。しっかりつかまって！']], [
      ['emma', 'We have arrived. The gate is just ahead.', '到着したわ。門はすぐそこ。']]),
    C(A5, "Mira's Echo", '第22章 ミラのこだま', '文法を合計40問正解し、Resonance 735に到達しよう', 'Grammar 40 and Resonance 735.', { grammar: 40, score: 735 }, [
      ['specto', 'Kael, the Behemoth holds my voice. To free me, you must understand every word it says.', 'ケイル、ベヒーモスが私の声を閉じ込めている。助けるには、あれの言葉をすべて理解して。']], [
      ['kael', 'I am ready. Resonance 750 is within reach.', '準備はできた。Resonance 750はもう手の届くところだ。']]),
    C(A5, 'Babel Behemoth', '終章 バベル・ベヒーモス', 'Resonance 750に到達し、バベル・ベヒーモスを倒そう', 'Reach 750 and defeat Babel Behemoth.', { boss: { 2: 1 }, score: 750 }, [
      ['boss', 'Do you understand me, little Rider? Every word is a gate. Only the one who listens may pass.', '私の言葉が分かるか、小さなライダーよ。すべての言葉は門。聞く者だけが通れる。']], [])
  ];
  D.ending = L([
    ['boss', 'You understand every word I say. At last, the curse is broken.', '私の言葉がすべて分かるのだな。ついに呪いは解けた。'],
    ['specto', 'Kael... you listened to me all the way here. Thank you.', 'ケイル…ここまでずっと私の声を聞いてくれたのね。ありがとう。'],
    ['kael', 'Mira! You are safe! I understood every word.', '姉さん！無事だったんだね！全部の言葉が分かったよ。'],
    ['emma', 'Welcome back, Mira. I kept our seat in the guild.', 'おかえり、ミラ。ギルドの席はちゃんと残してあるわ。'],
    ['ryan', 'The curse is gone. Now we can talk to anyone in the world.', '呪いは消えた。これで世界中の誰とでも話せる。'],
    ['chloe', 'And I will race with every country! Ha ha!', 'そして私は世界中の国と走るわ！あはは！'],
    ['kael', 'THE END. Thank you for playing! Keep studying every day, and your real TOEIC score will rise too.', 'THE END。遊んでくれてありがとう！毎日勉強を続ければ、本物のTOEICのスコアも上がるよ。']
  ]);
})();
