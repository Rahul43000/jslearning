console.log("============Stape1=========");
console.log("***function type:function with no Argument and no Return type***");
console.log("**function type:function with Argument and  return type***");
console.log("*********stage2*********");
 function myPersonalDetail(){
       console.log("Name:RU");
       console.log('city:pune');
       console.log('PINCOD:424001');
 }
  myPersonalDetail();

  console.log("function type:function with argument and no retun type");
  console.log("=====Addition function========");
  function addThreeValue(ValueOne,ValueTwo,ValueThree){
    console.log("Value = ",ValueOne,ValueTwo,ValueThree);
    var result=ValueOne+ValueTwo+ValueThree;
    console.log("Result of addition= ",+result);
  }
  addThreeValue(10.23,600,40);
  addThreeValue("Hallo","Good","Morning");

  console.log("==========BANK DETAIL=========");
  function bankdetail(){
  console.log("Bank Name:SBI" , "Account number:2345547"  ,"city:dhule")
  console.log("Bank name: HDFC" ,"Account number: 4565789", "city: pune" );

  }
  bankdetail()
