var fs=require("fs");

console.log("准备写入文件！");
fs.writeFile('input.txt','write file',function(err){
  if(err){
    return console.log(err);
  }
  console.log("数据写入成功！");
  console.log("---------------");
  console.log("读取写入的数据");

  fs.readFile('input.txt',function(err,data){
    if(err){
       return console.error(err);
    }
    console.log("异步读取文件数据："+data.toString());
  });	
});
