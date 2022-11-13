const MissionUtils = require('@woowacourse/mission-utils');
const {CONSOLELINE, RESULTLINE} = require('./Constants');

function printResult(winArr, yieldpercent){
  const getResultLine = ['FIFTH', 'FOURTH', 'THIRD', 'SECOND', 'FIRST'];
  MissionUtils.Console.print(CONSOLELINE.ANSWER_STATIST);
  getResultLine.forEach((rank, idx) => {
    MissionUtils.Console.print(RESULTLINE[rank](winArr[4-idx]));
  })
  MissionUtils.Console.print(RESULTLINE.TOTAL_PER(yieldpercent));
  MissionUtils.Console.close();
}

function printAutoLottos(baselotto){
  const printBaselotto = baselotto.join(', ');
  MissionUtils.Console.print(`[${printBaselotto}]`);
}

module.exports = {printResult, printAutoLottos};