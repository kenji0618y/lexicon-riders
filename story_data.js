// Story script, vocabulary and grammar bank for LEXICON RIDERS (TOEIC 750 target)
window.STORY_DATA = {
  // portrait keys: kael emma ryan chloe boss chrono behemoth specto
  prologue: [
    { who: 'kael', name: 'Kael', en: 'Long ago, one language joined every land. Then the Babel Curse broke it into a thousand pieces.', jp: '昔、ひとつの言葉がすべての土地をつないでいた。そこへバベルの呪いがかかり、言葉は千のかけらに砕けた。' },
    { who: 'kael', name: 'Kael', en: 'My sister Mira went to Sky City Elysion to translate for the Crystal. Since the curse, no one has heard from her.', jp: '姉のミラは、水晶の通訳をするため天空都市エリュシオンへ向かった。呪いのあと、誰も姉の知らせを聞いていない。' },
    { who: 'kael', name: 'Kael', en: 'I will find her. I will become a Rider.', jp: '僕が姉さんを見つける。ライダーになるんだ。' },
    { who: 'emma', name: 'Emma (Guild Receptionist)', en: 'Welcome to the Riders Guild, Kael. The gate of Elysion opens only for a Rider whose Resonance reaches 750.', jp: 'ようこそライダーズギルドへ、ケイル。エリュシオンの門は、共鳴値（Resonance）が750に届いたライダーにしか開かないの。' },
    { who: 'emma', name: 'Emma', en: 'Resonance is your power to understand English. The more words you master, the stronger it grows. Watch the gauge at the top of your screen.', jp: '共鳴値とは英語を理解する力のこと。単語を覚えるほど強くなるわ。画面の上のゲージを見ていてね。' },
    { who: 'emma', name: 'Emma', q: { q: 'Quick check, Kael. What does the gate need in order to open?', opts: ['A Resonance score of 750.', 'A letter from the guild.', 'Three monster eggs.'], a: 0, exp: '門を開く条件は「Resonance 750」。' }, en: '', jp: '' },
    { who: 'emma', name: 'Emma', en: 'Exactly! Your goal is simple: reach 750. Your first mission is to train at the Word Dojo. Tap the "Dojo" tab at the top.', jp: 'その通り！目標はシンプル、750に届くこと。最初の任務は単語道場での特訓よ。上の「Dojo」タブを押してね。' }
  ],
  chapters: [
    {
      title: 'Chapter 1: Words Are Keys', jp: '第1章 言葉は鍵',
      goal: 'Dojoで単語を学び、6語をマスター(⭐)しよう', goalEn: 'Master 6 words at the Word Dojo.',
      intro: [],
      outro: [
        { who: 'emma', name: 'Emma', en: 'Six words mastered already? You learn fast, Kael.', jp: 'もう6語もマスターしたの？ケイル、覚えが早いわね。' },
        { who: 'emma', name: 'Emma', en: 'But words alone are not enough. Ryan and Chloe are waiting in the guild. Talk to them and answer their questions in English.', jp: 'でも単語だけでは足りないわ。ギルドでライアンとクロエが待っている。話しかけて、英語で答えてみて。' }
      ]
    },
    {
      title: 'Chapter 2: Bonds of the Guild', jp: '第2章 ギルドの絆',
      goal: 'ギルドでRyan・Chloeに話しかけ（Aボタン）、英語の質問に2回正解しよう', goalEn: 'Answer 2 Bond Talk questions correctly.',
      intro: [
        { who: 'ryan', name: 'Ryan (Vanguard)', en: 'So you are the new Rider. I am Ryan. Talk to me or to Chloe, and answer in English. Trust grows with every good reply.', jp: 'お前が新人ライダーか。俺はライアン。俺かクロエに話しかけて、英語で答えてみろ。いい返事のたびに信頼が深まる。' }
      ],
      outro: [
        { who: 'chloe', name: 'Chloe (Kart Ace)', en: 'Nice answers! A message must reach the Canyon Station before sunset. Will you ride with me?', jp: 'いい答えね！日没までにキャニオン駅へ伝言を届けなきゃいけないの。一緒に走ってくれる？' },
        { who: 'chloe', name: 'Chloe', en: 'Run through the North Gate. Listen to the radio, and steer into the correct gate. A right answer gives you a turbo boost!', jp: '北のゲートから出発よ。無線をよく聞いて、正しいゲートに飛び込んで。正解ならターボがかかるわ！' }
      ]
    },
    {
      title: 'Chapter 3: The Canyon Run', jp: '第3章 峡谷の疾走',
      goal: '北ゲートからKartへ。無線の英語を聞いて正しいゲートを選び、ゴールまで走ろう', goalEn: 'Finish the Canyon Race.',
      intro: [],
      outro: [
        { who: 'chloe', name: 'Chloe', en: 'You made it! The message was delivered. But listen, a monster has been scaring the travelers on that road.', jp: 'やったわ！伝言は届いた。でも聞いて、あの街道では魔物が旅人をおびえさせているの。' },
        { who: 'ryan', name: 'Ryan', en: 'It is called Gorgon-Delay. It feeds on postponed plans. We will hunt it together. Break its horn, wing, and tail!', jp: '名前はゴルゴン・ディレイ。先延ばしにされた約束を食らう魔物だ。一緒に狩るぞ。角・翼・尻尾を壊せ！' }
      ]
    },
    {
      title: 'Chapter 4: Gorgon-Delay', jp: '第4章 ゴルゴン・ディレイ',
      goal: 'Bossタブでゴルゴン・ディレイの角・翼・尻尾をすべて壊そう（接近してAで文法問題）', goalEn: 'Break all 3 parts of Gorgon-Delay.', boss: 0,
      intro: [],
      outro: [
        { who: 'ryan', name: 'Ryan', en: 'Well done. Its scales will make a fine blade for you.', jp: 'よくやった。その鱗はいい剣になる。' },
        { who: 'emma', name: 'Emma', en: 'Your Resonance is rising, but the next monster is far stronger. Train in the Dojo, and try the Grammar Trial too.', jp: '共鳴値は上がってきたわ。でも次の魔物はずっと強い。道場で特訓して、文法トライアルにも挑戦して。' }
      ]
    },
    {
      title: 'Chapter 5: Cronos Wyvern', jp: '第5章 クロノス・ワイバーン',
      goal: 'Dojoの「文法トライアル」で10問正解し、Resonance 650に到達してから、Bossタブでクロノス・ワイバーンを倒そう', goalEn: 'Grammar Trial: 10 correct, Resonance 650, then defeat Cronos Wyvern.', boss: 1, needScore: 650, needGrammar: 10,
      intro: [
        { who: 'emma', name: 'Emma', en: 'Cronos Wyvern attacks anyone who arrives late. You must be prepared before you face it.', jp: 'クロノス・ワイバーンは遅れてきた者を襲う魔物よ。立ち向かう前にしっかり準備しなさい。' }
      ],
      outro: [
        { who: 'chloe', name: 'Chloe', en: 'The Wyvern is down! The way to Babel Tower is open.', jp: 'ワイバーンを倒したわ！バベルの塔への道が開いた。' },
        { who: 'kael', name: 'Kael', en: 'Mira... I am getting closer.', jp: '姉さん…僕は近づいている。' }
      ]
    },
    {
      title: 'Final Chapter: The Babel Behemoth', jp: '終章 バベル・ベヒーモス',
      goal: 'Resonance 750に到達し、Bossタブでバベル・ベヒーモスを倒そう', goalEn: 'Reach Resonance 750 and defeat Babel Behemoth.', boss: 2, needScore: 750,
      intro: [
        { who: 'ryan', name: 'Ryan', en: 'This is the guardian of the Elysion gate. It will only fall to a Rider with a true Resonance of 750.', jp: 'これがエリュシオンの門の番人だ。真の共鳴値750を持つライダーにしか倒せない。' }
      ],
      outro: []
    }
  ],
  ending: [
    { who: 'boss', name: 'Babel Behemoth', en: 'You understand every word I say. At last, the curse is broken.', jp: '私の言葉がすべて分かるのだな。ついに、呪いは解けた。' },
    { who: 'kael', name: 'Kael', en: 'The gate is opening! Mira, I am coming!', jp: '門が開く！姉さん、今行くよ！' },
    { who: 'emma', name: 'Emma', en: 'You did it, Kael. You reached 750 with your own effort. Now the whole world will hear you.', jp: 'やったわね、ケイル。自分の努力で750に届いた。これで世界中があなたの言葉を聞くわ。' },
    { who: 'kael', name: 'Kael', en: 'THE END. Thank you for playing! Keep studying every day, and your real TOEIC score will rise too.', jp: 'THE END。遊んでくれてありがとう！毎日勉強を続ければ、本物のTOEICのスコアも上がるよ。' }
  ],
  // word, pos, jp, example (contains the exact word), jp example
  vocab: [
    ['postpone', 'verb', '〜を延期する', 'The meeting was postponed until next Monday.', '会議は来週月曜まで延期された。'],
    ['approve', 'verb', '〜を承認する', 'The manager approved the new budget.', '部長は新しい予算を承認した。'],
    ['require', 'verb', '〜を必要とする', 'This job requires two years of experience.', 'この仕事は2年の経験が必要だ。'],
    ['provide', 'verb', '〜を提供する', 'The hotel provides free breakfast.', 'そのホテルは無料の朝食を提供する。'],
    ['submit', 'verb', '〜を提出する', 'Please submit your report by Friday.', '金曜日までに報告書を提出してください。'],
    ['attend', 'verb', '〜に出席する', 'More than fifty people attended the seminar.', '50人以上がセミナーに出席した。'],
    ['purchase', 'verb', '〜を購入する', 'We purchased new computers for the office.', '私たちは事務所用に新しいパソコンを購入した。'],
    ['confirm', 'verb', '〜を確認する', 'Please confirm your reservation by email.', 'メールで予約を確認してください。'],
    ['reduce', 'verb', '〜を減らす', 'The company plans to reduce its costs.', '会社は費用を減らす計画だ。'],
    ['increase', 'verb', '増加する、〜を増やす', 'Sales increased by ten percent last year.', '昨年、売上は10パーセント増加した。'],
    ['arrange', 'verb', '〜を手配する、整える', 'She arranged a meeting with the client.', '彼女は顧客との会議を手配した。'],
    ['replace', 'verb', '〜を取り替える', 'We need to replace the old printer.', '古いプリンターを取り替える必要がある。'],
    ['inform', 'verb', '〜に知らせる', 'Please inform us of any changes.', '変更があればお知らせください。'],
    ['complete', 'verb', '〜を完成させる', 'He completed the project ahead of schedule.', '彼はプロジェクトを予定より早く完成させた。'],
    ['encourage', 'verb', '〜を奨励する、励ます', 'The manager encouraged staff to share ideas.', '部長は社員に意見を出すよう奨励した。'],
    ['recommend', 'verb', '〜を勧める', 'I recommend the chicken curry.', 'チキンカレーをお勧めします。'],
    ['reserve', 'verb', '〜を予約する', 'I would like to reserve a table for four.', '4名分のテーブルを予約したいのですが。'],
    ['deliver', 'verb', '〜を配達する', 'The package will be delivered tomorrow.', '荷物は明日配達される。'],
    ['assist', 'verb', '〜を手伝う', 'Our staff will assist you with the forms.', '当社スタッフが書類の記入をお手伝いします。'],
    ['improve', 'verb', '〜を改善する', 'We are working to improve customer service.', '私たちは顧客サービスの改善に取り組んでいる。'],
    ['available', 'adjective', '利用できる、手が空いている', 'Is Mr. Lee available for a call this afternoon?', 'リーさんは午後、電話に出られますか。'],
    ['responsible', 'adjective', '責任がある', 'She is responsible for the sales team.', '彼女は営業チームの責任者だ。'],
    ['mandatory', 'adjective', '義務的な', 'Attendance at the training is mandatory.', '研修への出席は義務です。'],
    ['eligible', 'adjective', '資格がある', 'Full-time staff are eligible for the bonus.', '正社員はボーナスを受け取る資格がある。'],
    ['temporary', 'adjective', '一時的な', 'We are using a temporary office during the repairs.', '修理の間、私たちは仮の事務所を使っている。'],
    ['previous', 'adjective', '以前の、前の', 'Please refer to the previous page.', '前のページを参照してください。'],
    ['current', 'adjective', '現在の', 'What is your current address?', '現在のご住所はどちらですか。'],
    ['additional', 'adjective', '追加の', 'Additional charges may apply.', '追加料金がかかる場合があります。'],
    ['considerable', 'adjective', 'かなりの', 'The project required a considerable amount of time.', 'そのプロジェクトにはかなりの時間が必要だった。'],
    ['significant', 'adjective', '重要な、著しい', 'There was a significant increase in demand.', '需要が著しく増えた。'],
    ['invoice', 'noun', '請求書', 'The invoice must be paid within thirty days.', '請求書は30日以内に支払う必要がある。'],
    ['deadline', 'noun', '締め切り', 'We must meet the deadline for the proposal.', '私たちは提案書の締め切りを守らなければならない。'],
    ['schedule', 'noun', '予定、日程', 'The flight schedule has changed.', '飛行機の日程が変更になった。'],
    ['agenda', 'noun', '議題、予定表', 'Please review the agenda before the meeting.', '会議の前に議題に目を通してください。'],
    ['receipt', 'noun', '領収書', 'Keep your receipt for a refund.', '返金には領収書を保管してください。'],
    ['refund', 'noun', '払い戻し', 'Customers can request a full refund within a week.', 'お客様は1週間以内なら全額払い戻しを請求できる。'],
    ['warranty', 'noun', '保証', 'The laptop comes with a two-year warranty.', 'そのノートパソコンには2年の保証が付いている。'],
    ['candidate', 'noun', '候補者', 'The candidate has ten years of experience.', 'その候補者には10年の経験がある。'],
    ['colleague', 'noun', '同僚', 'I will ask my colleague to help you.', '同僚に手伝ってもらうよう頼みます。'],
    ['supervisor', 'noun', '上司、監督者', 'Please speak to your supervisor first.', 'まず上司にご相談ください。'],
    ['client', 'noun', '顧客', 'The client asked for a detailed estimate.', '顧客は詳しい見積もりを求めた。'],
    ['estimate', 'noun', '見積もり', 'Could you send me an estimate by Tuesday?', '火曜日までに見積もりを送っていただけますか。'],
    ['inventory', 'noun', '在庫', 'We check the inventory every week.', '私たちは毎週在庫を確認している。'],
    ['venue', 'noun', '会場', 'The venue can hold two hundred guests.', 'その会場は200人のお客様を収容できる。'],
    ['facility', 'noun', '施設', 'The new facility opens next month.', '新しい施設は来月オープンする。'],
    ['permission', 'noun', '許可', 'You need permission to enter this area.', 'このエリアに入るには許可が必要です。'],
    ['promotion', 'noun', '昇進、販売促進', 'She received a promotion last spring.', '彼女は昨年の春に昇進した。'],
    ['expense', 'noun', '費用、経費', 'Travel expenses will be reimbursed.', '出張費は払い戻される。'],
    ['qualification', 'noun', '資格、適性', 'Her qualifications match the job description.', '彼女の資格は求人内容に合っている。'],
    ['feedback', 'noun', '意見、感想', 'We value your feedback.', 'お客様のご意見を大切にしています。'],
    ['regarding', 'preposition', '〜に関して', 'I am writing regarding your recent order.', '先日のご注文に関してご連絡します。'],
    ['despite', 'preposition', '〜にもかかわらず', 'Despite the rain, the event was a success.', '雨にもかかわらず、イベントは成功した。'],
    ['prior to', 'preposition', '〜より前に', 'Please arrive prior to the opening time.', '開店時間より前にお越しください。'],
    ['in accordance with', 'phrase', '〜に従って', 'Work must be done in accordance with the rules.', '作業は規則に従って行わなければならない。'],
    ['due to', 'preposition', '〜のために（原因）', 'The flight was canceled due to bad weather.', '悪天候のため、フライトは欠航になった。'],
    ['as soon as possible', 'phrase', 'できるだけ早く', 'Please reply as soon as possible.', 'できるだけ早くご返信ください。'],
    ['in charge of', 'phrase', '〜を担当して', 'Ms. Tanaka is in charge of the new project.', '田中さんが新しいプロジェクトを担当している。'],
    ['get in touch', 'phrase', '連絡を取る', 'Please get in touch with the sales office.', '営業所に連絡を取ってください。'],
    ['fill out', 'phrase', '〜に記入する', 'Please fill out this form.', 'この用紙に記入してください。'],
    ['put off', 'phrase', '〜を延期する', 'We had to put off the launch.', '私たちは発売を延期せざるを得なかった。'],
    ['run out of', 'phrase', '〜を使い果たす', 'We ran out of paper this morning.', '今朝、紙を使い果たした。'],
    ['promptly', 'adverb', '速やかに', 'Please reply promptly to the survey.', 'アンケートには速やかにご返答ください。'],
    ['currently', 'adverb', '現在', 'The store is currently closed.', 'その店は現在閉まっている。'],
    ['approximately', 'adverb', 'およそ', 'The trip takes approximately two hours.', '旅行はおよそ2時間かかる。'],
    ['frequently', 'adverb', 'しばしば', 'He frequently travels abroad on business.', '彼はしばしば出張で海外へ行く。']
  ],
  // TOEIC Part 5 style. a = index of correct option
  grammar: [
    { q: 'The manager asked all employees ___ the safety guide.', o: ['read', 'to read', 'reading', 'reads'], a: 1, exp: 'ask + 人 + to 不定詞。「〜するように頼む」。' },
    { q: 'Ms. Kim is ___ for training new staff.', o: ['responsible', 'responsibly', 'responsibility', 'respond'], a: 0, exp: 'be動詞の後は形容詞。responsible for 〜「〜に責任がある」。' },
    { q: 'The report must be submitted ___ Friday.', o: ['by', 'at', 'in', 'on top'], a: 0, exp: '期限を表す前置詞は by「〜までに」。' },
    { q: 'We will announce the winner ___ the event ends.', o: ['during', 'as soon as', 'because of', 'despite'], a: 1, exp: '後ろに「主語＋動詞」があるので接続詞 as soon as「〜するとすぐに」。' },
    { q: 'The new software is ___ easier to use than the old one.', o: ['much', 'very', 'most', 'many'], a: 0, exp: '比較級を強めるのは much。very は比較級に使えない。' },
    { q: 'Please ___ your seat belt during the flight.', o: ['fastening', 'fasten', 'fastened', 'to fasten'], a: 1, exp: 'Please の後は動詞の原形（命令文）。' },
    { q: 'Our sales have ___ increased this year.', o: ['steady', 'steadily', 'steadiness', 'steadied'], a: 1, exp: '動詞 increased を修飾するのは副詞 steadily。' },
    { q: 'The store will be closed ___ renovation next week.', o: ['because', 'due to', 'although', 'so that'], a: 1, exp: '後ろが名詞（renovation）なので前置詞 due to「〜のために」。' },
    { q: 'If you ___ any questions, please contact us.', o: ['have', 'will have', 'having', 'had had'], a: 0, exp: '条件を表す if 節は現在形。未来でも will は使わない。' },
    { q: 'All the ___ of the contract were explained to the client.', o: ['terms', 'terming', 'termed', 'termly'], a: 0, exp: '「the ＋ 名詞 of」の形。terms「条件」が正解。' },
    { q: 'The CEO, ___ is visiting from Osaka, will give a speech.', o: ['who', 'which', 'whose', 'whom'], a: 0, exp: '人を指し、主語になる関係代名詞は who。' },
    { q: 'Mr. Park has worked here ___ 2015.', o: ['for', 'since', 'during', 'from'], a: 1, exp: '現在完了と一緒に「〜以来」は since（起点の年が続く）。' },
    { q: 'The meeting was ___ because of the storm.', o: ['postpone', 'postponed', 'postponing', 'postpones'], a: 1, exp: '「be動詞＋過去分詞」の受け身。「延期された」。' },
    { q: 'Both the manager ___ the assistant attended the seminar.', o: ['or', 'and', 'nor', 'but'], a: 1, exp: 'Both A and B の形。' },
    { q: 'The product is ___ in three different colors.', o: ['available', 'availability', 'avail', 'availably'], a: 0, exp: 'be動詞の後は形容詞。available in 〜「〜で手に入る」。' },
    { q: 'She was promoted ___ her excellent performance.', o: ['because of', 'because', 'in spite', 'whereas'], a: 0, exp: '後ろが名詞句なので because of。because は節が必要。' },
    { q: 'The team leader will ___ the new schedule tomorrow.', o: ['distribution', 'distribute', 'distributing', 'distributed'], a: 1, exp: 'will の後ろは動詞の原形。' },
    { q: '___ the heavy traffic, we arrived on time.', o: ['Although', 'Despite', 'Because', 'However'], a: 1, exp: '後ろが名詞（the heavy traffic）。Despite「〜にもかかわらず」。' },
    { q: 'The printer is ___ order, so please use the one downstairs.', o: ['out of', 'off of', 'away from', 'without'], a: 0, exp: 'out of order「故障中」の決まり表現。' },
    { q: 'Employees must wear ID badges at ___ times.', o: ['all', 'every', 'each', 'some'], a: 0, exp: 'at all times「常に」の決まり表現。' }
  ]
};
