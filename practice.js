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
    console.log(`현재 과제 총 시간 : ${currentSumM + parseInt(playtime)}`);
    console.log(`다음 과제 시간 : ${nextSumM}`);
    const studyTime = nextSumM - currentSumM;
    if (currentSumM + parseInt(playtime) > nextSumM) {
      // console.log(name, start, playtime)
      // 끝내지 못한 과제의 이름과 시작 시간, 남은 과제 시간을 저장.
      console.log(
        `끝내지 못한 과제: ${name}, ${studyTime}, ${parseInt(nextPlaytime)}`
      );
      stopTasks.push([name, start, parseInt(playtime) - studyTime]);
    } else {
      console.log(`끝내지 못한 과제 목록 ${stopTasks}`);
      if (stopTasks.length) {
        console.log(`if (stopTasks.length): ${name}`);
        const [stopName, stopStart, remainingTime] =
          stopTasks[stopTasks.length - 1];
        const currentTime = currentSumM + parseInt(playtime);

        // 남은 시간 - 다음 시간과 현재 시간의 간격이 0 이상이면
        // 여유 시간에 남은 과제를 완료하지 못한 경우 남은 과제 시간 업데이트.
        if (remainingTime - (nextSumM - currentTime) > 0) {
          stopTasks[stopTasks.length - 1][2] =
            remainingTime - (nextSumM - currentTime);
          console.log(name, stopTasks[stopTasks.length - 1]);
        } else {
          console.log(`finish: ${name}`);
          result.push(name);

          stopTasks.reverse().forEach((task) => {
            result.push(task[0]);
          });
        }
      }
    }
  }

  return result;
}

function solution(plans) {
  const queue = plans
    .map((plan) => {
      const [name, time, spend] = plan;
      const [hour, minute] = time.split(":");
      const convertedTime = Number(hour) * 60 + Number(minute);

      return [name, convertedTime, Number(spend)];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  // 첫 번째 과제
  const first = queue.shift();

  // 현재 시간
  let curTime = first[1];

  // 최근 과제, 첫 번째 과제가 기본 값.
  const stack = [first];

  console.log("queue", queue);
  console.log("first", first);
  console.log("curTime", curTime);
  console.log("stack", stack);

  while (queue.length) {
    const target = queue.shift();
    const [_name, time, _spend] = target;

    console.log("time", time);
    console.log("curTime", curTime);

    // 다음 과제와 이전 과제 시간의 차이
    let timeDiff = time - curTime;

    // 시간 업데이트
    curTime = time;

    console.log("timeDiff", timeDiff);
    console.log("curTime", curTime);

    while (stack.length && timeDiff > 0) {
      const latestPlan = stack.pop();
      const [lName, _lTime, lSpend] = latestPlan;

      // console.log("lSpend <= timeDiff", lSpend, timeDiff);

      // 이전 과제의 소요 시간이 다음 과제 사이 동안 끝난다면 result.push,
      if (lSpend <= timeDiff) {
        result.push(lName);
        timeDiff -= lSpend;
      } else {
        latestPlan[2] = lSpend - timeDiff;
        timeDiff = 0;
        stack.push(latestPlan);
      }
    }

    stack.push(target);
  }

  while (stack.length) {
    result.push(stack.pop()[0]);
  }

  return result;
}
