const randomInteger = (min: number, max: number): number => {
  const rand = Math.ceil(min - 0.5 + Math.random() * (max - min + 1))
  return rand
}

export default randomInteger
