const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

// 需要混淆的 JS 文件列表（按需添加）
const filesToObfuscate = [
  'background.js',
  'content.js',
  'forwarder.js',
  'popup.js'
];

// 混淆配置（可根据需要调整）
const obfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  deadCodeInjection: true,
  debugProtection: false,      // 设为 true 会阻止调试，但可能影响正常使用
  disableConsoleOutput: false,
  identifierNamesGenerator: 'hexadecimal',
  renameGlobals: false,
  rotateStringArray: true,
  selfDefending: false,        // 建议关闭，否则可能误伤功能
  stringArray: true,
  stringArrayEncoding: ['base64'],
  stringArrayThreshold: 0.75,
  transformObjectKeys: true,
  unicodeEscapeSequence: false
};

filesToObfuscate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`文件不存在，跳过：${file}`);
    return;
  }
  const code = fs.readFileSync(filePath, 'utf8');
  const obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscatorOptions);
  // 覆盖原文件（注意备份！）
  fs.writeFileSync(filePath, obfuscated.getObfuscatedCode(), 'utf8');
  console.log(`已混淆：${file}`);
});