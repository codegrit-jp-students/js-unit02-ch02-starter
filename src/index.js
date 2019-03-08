import _ from 'lodash';
import { random } from 'node-forge';
import { resolve } from 'path';

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
  return getData()
  .then((data) => {
    mainEl.innerHTML = `
      <div>id: ${data.id}</div>
      <div>propertyName: ${data.propertyName}</div>
      <div>propertyType: ${data.propertyType}</div>
      <div>cancelPolicy: ${data.cancelPolicy}</div>
      <div>roomNum: ${data.roomNum}</div>
      <div>bathroomNum: ${data.bathroomNum}</div>
      <div>priceInDollars: ${data.priceInDollars}</div>
      <div>host.id: ${data.host.id}</div>
      <div>host.firstName: ${data.host.firstName}</div>
    `
  })
  .catch((data) => {
    mainEl.innerHTML = `
      <div>message: ${data.message}</div>
    `
  });
}

function getData() {
  /* 
    fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。
  */
  return fetchData().then((data) => {
    if (data.success) {
      return Promise.resolve(data.propertyData);
    } else {
      return Promise.reject(data.message);
    }
  });
}

function fetchData() {
  /* 
    lodashのrandom()を使って、80%の確率で正しいデータを返し、20%の確率でエラーを返すようにしましょう。
    またsetTimeoutを利用して、1秒待ってから結果を得るようにします。
  */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = _.random(9);
      if (randomNum <= 7) {
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

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", handleClick);
}