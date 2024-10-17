// 나머지가 1이 되는 수 찾기

// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를
//  return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// n	result
// 10	3
// 12	11

// 입출력 예 #1

// 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
// 입출력 예 #2

// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

// O(n)
function solution(n) {
  var answer = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }

  return answer;
}

function getSortedPlans(plans) {
  plans.sort((a, b) => {
    const timeA = new Date(`1970-01-01T${a[1]}:00`);
    const timeB = new Date(`1970-01-01T${b[1]}:00`);

    return timeA - timeB;
  });

  return plans;
}

function getSortedPlans(plans) {
  plans.sort((a, b) => {
    const timeA = new Date(`1970-01-01T${a[1]}:00`);
    const timeB = new Date(`1970-01-01T${b[1]}:00`);

    return timeA - timeB;
  });

  return plans;
}

function solution(plans) {
  const result = [];
  const stopTasks = [];
  const sortedPlans = getSortedPlans(plans);

  for (let i = 0; i < sortedPlans.length; i++) {
    const [name, start, playtime] = sortedPlans[i];
    const [nextName, nextStart, nextPlaytime] = sortedPlans[i + 1] ?? [
      "",
      "",
      "",
    ];
    const [currentH, currentM] = start.split(":");
    const currentSumM = parseInt(currentH) * 60 + parseInt(currentM);

    // 처음 시작 시 이전 값 없는 것 예외 처리
    const [nextH, nextM] = nextStart.split(":");
    const nextSumM = parseInt(nextH) * 60 + parseInt(nextM);

    // 현재 과제 시간에서 이전 과제 시간을 뺐을 때 이전 과제 소요시간보다 적을 경
    // 과제를 끝내지 못한 케이스로 이전 과제의 이름을 저장.
    const studyTime = nextSumM - currentSumM;
    console.log(currentSumM, nextSumM, nextPlaytime, studyTime);
    if (studyTime < parseInt(nextPlaytime)) {
      // console.log(name, start, playtime)
      // 끝내지 못한 과제의 이름과 시작 시간, 남은 과제 시간을 저장.
      stopTasks.push([name, start, playtime - studyTime]);
    }
    //      else if (i > 0) {
    //          // console.log(sortedPlans[i], i)
    //          // if (!sortedPlans[i + 1]) return
    //          // const [nextName, nextStart, nextPlaytime] = sortedPlans[i + 1] ?? ['', '', '']
    //          // const [nextH, nextM] = nextStart.split(':')
    //          // const nextSumM = (parseInt(nextH) * 60) + parseInt(nextM)
    //          const lastStopTask = stopTasks[stopTasks.length - 1]

    //          const spareTime = currentSumM - nextSumM
    //          if(stopTasks.length) {
    //              if(spareTime > lastStopTask[2]){
    //                  // stopTasks.pop()
    //              } else {
    //                  // console.log(lastStopTask, spareTime, lastStopTask[2], nextH, nextM)
    //                  stopTasks[stopTasks.length - 1][2] = Math.abs(spareTime - lastStopTask[2])
    //              }
    //          }
    //      }
  }

  return stopTasks;
}
