const fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
  // 输出空行
  console.log('');

  if(!files.length) {
    return console.log(' \033[31m No files to show! \033[39m \n');
  }

  console.log('Select which file or directory you want to see \n');

  function file(i) {
    let filename = files[i];

    // 这里用到fs.stat方法
    fs.stat(__dirname + '/' + filename, function (err, stat) {
      if (stat.isDirectory()) {
        console.log(' ' + i + ' \033[36m' + filename + '/\033[39m');
      } else {
        console.log(' ' + i + ' \033[90m' + filename + '\033[39m');
      }

      i++;
      if (i === files.length) {
        console.log('');

        // 这里输出不用console.log，就不用换行
        process.stdout.write(' \033[33m Enter you choice: \033[39m');
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
      } else {
        file(i); // 调用函数，列出文件名或者提醒用户输入
      }
    });
  }

  file(0);
});
