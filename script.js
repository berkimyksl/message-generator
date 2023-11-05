const generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

const wisdomArr = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

let wisdom = [];

for (let prop in wisdomArr) {
    let optionIdx = generateRandomNumber(wisdomArr[prop].length);

    switch(prop) {
        case 'signInfo':
          wisdom.push(`Your sign right now is a "${wisdomArr[prop][optionIdx]}".`)
          break
        case 'fortuneOutput':
          wisdom.push(`You are having: "${wisdomArr[prop][optionIdx]}".`)
          break
        case 'advice':
          wisdom.push(`You should: "${wisdomArr[prop][optionIdx]}".`)
          break
        default:
          wisdom.push('There is not enough info.')
      }
}

function formatWisdom(wisdom1) {
    const formatted = wisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(wisdom);