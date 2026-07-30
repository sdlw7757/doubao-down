const sharp = require('sharp');

sharp({
  create: {
    width: 128,
    height: 128,
    channels: 4,
    background: { r: 56, g: 132, b: 255, alpha: 1 }
  }
})
.composite([{
  input: Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAALlJREFUeJzt2rENwjAQBdBfERZoWIIR2IARWIAVWIAFWIARGIENCjZgBEZgBI9iSyycb/zni5Ou+NJVtnwpIsLeeyEE997D3ntIKYFEBFiSJCEiAogIEBGYc4KIwJwTRATGnCAiMOYEEYExJ4gIjDlBRGDMCWNOmHPCmBPmnDDmhDEnjDlhzAljThhzwpgTxpww5oQxJ4w5YcwJY04Y8KYE8acMOaEMSfMOeG9BxEBRMScE0QExpyw1tpr++0rPj+9cv98AThMfZ1eAAAAAElFTkSuQmCC',
    'base64'
  ),
  raw: { width: 64, height: 64, channels: 4 }
}])
.png()
.toFile('icon.png')
.then(() => console.log('ok'))
.catch(err => console.error(err));
