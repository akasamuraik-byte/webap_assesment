'use strict';
const userNameInput = document.getElementById('user-name');
const assesmentButton = document.getElementById('assesment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assesmentButton.addEventListener(
  'click',
  () =>{
    const userName = userNameInput.value;
    if(userName.length === 0){  //入力が空だったら、
      return; //関数の処理を終了する。
    }

    //診断結果表示エリアの作成
    resultDivision.innerText = '';
    const header = document.createElement('h3');//h3タグの作成
    header.innerText = '診断結果'
    resultDivision.appendChild(header);//divタグの子要素として追加


    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);

     //X投稿ボタンの作成
    tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue =
      'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('あなたのいいところ') + 
      '&ref_src=twsrc%5Etfw'+
      '&text=' + encodeURIComponent(result);

    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class','twitter-hashtag-button')
    anchor.setAttribute('data-text',result)
    anchor.innerText = 'Tweet #あなたのいいところ';

    tweetDivision.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src','https://platform.twitter.com/widgets.js');
    tweetDivision.appendChild(script);
  }
);

userNameInput.addEventListener(
  'keydown',
  (event) =>{
    if(event.code === 'Enter'){
      assesmentButton.dispatchEvent(new Event('click'));
    }
  }
)

const answers = [
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
'###userName###のいいところは行動力です。###userName###の素早い動き出しが、停滞していた物事を動かします。',
'###userName###のいいところはユーモアです。###userName###の機転の利いた言葉に、多くの人が笑顔になります。',
'###userName###のいいところは誠実さです。###userName###のまっすぐな姿勢が、周囲に大きな安心感を与えています。',
'###userName###のいいところは適応力です。どんな環境でも自分らしくいられる###userName###を、皆が頼もしく思っています。',
'###userName###のいいところは聞き上手なところです。###userName###に話を聞いてもらえるだけで、心が軽くなる人が大勢います。',
'###userName###のいいところは忍耐強さです。困難な状況でも諦めない###userName###の姿が、仲間の励みになります。',
'###userName###のいいところは謙虚さです。常に学ぶ姿勢を忘れない###userName###を、多くの人が尊敬しています。',
'###userName###のいいところは独創性です。###userName###の自由な発想は、いつも周囲に新しい風を吹き込みます。',
'###userName###のいいところは包容力です。ミスを優しく受け止める###userName###の心の広さに、救われている人がいます。',
'###userName###のいいところは探究心です。一つのことを突き詰める###userName###の情熱が、素晴らしい結果を生み出します。',
'###userName###のいいところは冷静さです。動揺しそうな場面でも落ち着いている###userName###は、チームの守り神です。',
'###userName###のいいところは笑顔です。###userName###の明るい笑顔が、その場の雰囲気をパッと明るくしてくれます。',
]

/**
 * *名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  //全文字のコード番号を取得して足し合わせる
  let sumOfCharCode =0;  //文字コードの合計を取っておく変数
  for(let i =0;i<userName.length;i++){ //文字数回ループ
    sumOfCharCode += userName.charCodeAt(i); //合計を計算
  }
  //合計値を配列の要素数で余りを取ることで、配列の要素数の数値に収めること
  const index = sumOfCharCode % answers.length;
  let result = answers[index];  //配列から答えを取得

  result = result.replaceAll('###userName###', userName); //ユーザーの名前
  return result;//診断結果を返す
}

console.log(assessment('太郎'));

//テストを行う関数
function test(){
  console.log('診断結果の文章のテスト');

  //太郎
  console.log('太郎');
    console.assert(
      assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
      '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );

  //次郎
  console.log('次郎');
  console.assert(
    assessment('次郎') ===
      '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //花子
  console.log('花子');
  console.assert(
    assessment('花子') ===
      '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  
  console.log('診断結果の文章のテスト終了');

    console.log('同じ名前なら、同じ結果を出力することのテスト');

  console.log('太郎');
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  );

  console.log('次郎');
  console.assert(
    assessment('次郎') === assessment('次郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  );

  console.log('花子');
  console.assert(
    assessment('花子') === assessment('花子'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  );

  console.log('同じ名前なら、同じ結果を出力することのテスト終了');
}

test();