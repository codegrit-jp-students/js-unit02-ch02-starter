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

  return getData().then((outputData) => {
    mainEl.innerHTML = `
    <p>タイトル：${outputData.propertyName}</p>
    <p>タイプ：${outputData.propertyType}</p>
    <p>キャンセルポリシー：${outputData.cancelPolicy}</p>
    <p>部屋数：${outputData.roomNum}</p>
    <p>バスルームの数：${outputData.bathroomNum}</p>
    <p>料金：${outputData.priceInDollars}</p>
    <p>ホスト：${outputData.host.firstName}</p>
    `;
  })
  .catch((err) => {
    mainEl.innerHTML = `<p>${err.message}</p>`;
  }); 
}
  /* 
    getDataを呼び出して、mainEl.innerHTMLを利用して、結果を出力します。
    getDataを呼び出す。
    物件データが戻ったらそのデータを表示する。
    エラーがあれば、エラーメッセージを表示する。
  */

function getData() {
  return fetchData().then((res) => {
    if (res.success) {
      return Promise.resolve(res.propertyData);
    } else {
      return Promise.reject(res.message);
    }
  })
}
  /* 
    fetchDataを呼び出して、戻ってきたデータのsuccessの値を元に
    成功なら、Promise.resolveで物件データを返す。
    失敗なら、Promise.rejectでエラーメッセージを返す。
  */

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const percentage = _.random(1, 5);
      if (percentage <= 4) {
        resolve({
          success: true,
          propertyData: propertyData
        });
      } else {
        reject({
          success: false,
          message: 'データの取得に失敗しました。' 
        });
      }
    }, 1000);
  });
}
  /* 
    fetchDataはPromiseオブジェクトを返す。
    setTimeoutを利用して、1秒間待ってから結果を返す。
    lodashのrandom()を使って、80%の確率で正しいデータを返し、20%の確率でエラーが発生する。
    成功の場合、{ success: true, propertyData: propertyData }が返る。
    エラーの場合、{ success: false, message: 'データの取得に失敗しました。' }が返る。
  */

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", handleClick);
}

