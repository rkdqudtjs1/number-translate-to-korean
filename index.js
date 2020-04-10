const koreanNumbers = value => {
  const resultValue = []
  const unit1 = ['', '만', '억', '조']
  const unit2 = ['', '십', '백', '천', '만']
  const numData = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구']

  const valueStr = value + ""
  const unit1Size = Math.ceil(valueStr.length / 4)

  const splitReverse = valueStr.split('').reverse()

  for (let i = 0; i < unit1Size; i++) {
    const number = splitReverse.splice(0, 4)
    let result = number.map((num, idx) => num != 0 ? numData[num] + unit2[idx] : '').reverse().join('')
    if (result) result += unit1[i]
    resultValue.unshift(result)
  }
  return resultValue.join('')
}

module.exports = koreanNumbers
