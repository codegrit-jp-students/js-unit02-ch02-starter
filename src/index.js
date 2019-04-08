import _ from 'lodash';

const propertyData = {
  id: 1,
  propertyName: '1BR Japanese-style Private Room near Kyoto Station',
  propertyType: 'private',
  cancelPolicy: 'strict',
  roomNum: 1,
  bathroomNum: 1,
  priceInDollars: 50,
  host: {
    id: 1,
    firstName: 'Tom'
  }
}

function handleClick(e) {
  e.preventDefault();
  const mainEl = document.getElementById('main');
  /* 
    getDataを呼び出して、mainEl.innerHTMLを利用して、結果を出力します。
  */
}

function getData() {
  /* 
    fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。
  */
}

function fetchData() {
  /*
  function random() {
    let randomNum = _.random(1, 10);
  }

  return new Promise(
    function(resolve, reject) { // Yui: resolve と rejectは onFulfilled と onRejected と同じ？
     resolve(paramsOnFulfilled); {
      success: true, propertyData: propertyData
     }
     reject(paramsOnRejected); {
      success: false, message: 'データの取得に失敗しました。'
     }
     setTimeout(getData() { // Yui: ここのfunctionを何を使えばいいかわからない。
     }, 1000);
    }
  );
  */
  /* 
    lodashのrandom()を使って、80%の確率で正しいデータを返し、20%の確率でエラーを返すようにしましょう。
    またsetTimeoutを利用して、1秒待ってから結果を得るようにします。
  */
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", handleClick);
}