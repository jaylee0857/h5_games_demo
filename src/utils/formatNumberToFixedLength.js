export const formatNumberToFixedLength = (number) => {
  const targetLength = 11; // 數字長度
  const maxNumber = "99999999999"; // 最大數字

  // 數字轉字串
  const numStr = number.toString();

  // 檢查長度
  if (numStr.length > targetLength) {
    return maxNumber;
  }

  // 長度不足補 0
  return numStr.padStart(targetLength, "0");
};

export default formatNumberToFixedLength;
