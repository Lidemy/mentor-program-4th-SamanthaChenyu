``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35]);
```

## 執行流程
1. 執行function isValid，帶入參數陣列[3, 5, 8, 13, 22, 35]
2. 執行第 2 行，設定變數 i 是 0，檢查 i 是否 < 陣列[3, 5, 8, 13, 22, 35]的長度 = 6，是，繼續執行，開始進入第一圈迴圈
3. 執行第 5 行，設定變數 i 是 2，檢查 i 是否 < 陣列[3, 5, 8, 13, 22, 35]的長度 = 6，是，繼續執行，開始進入第二圈迴圈
4. 執行第 3 行，判斷參數陣列[3, 5, 8, 13, 22, 35]每個值是否小於等於 0，否
5. 執行第 6 行，帶入參數 i = 2，參數陣列[3, 5, 8, 13, 22, 35]第二個值為 8 ，判斷 8 不等於 5 + 3 回傳 'invalid'，否
6. 執行第 6 行，帶入參數 i = 3，參數陣列[3, 5, 8, 13, 22, 35]第三個值為 13 ，判斷 13 不等於 8 + 5 回傳 'invalid'，否
7. 執行第 6 行，帶入參數 i = 4，參數陣列[3, 5, 8, 13, 22, 35]第三個值為 22 ，判斷 22 不等於 8 + 13 回傳 'invalid'，是
8. 回傳 'invalid'