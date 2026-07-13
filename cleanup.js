(function() {
  var _cleanRemaining = setInterval(function() {
    var el = document.getElementById('activationInfo');
    if (el) {
      var html = el.innerHTML;
      // Override whatever obfuscated JS wrote back with our hacker style
      html = html.replace(/✅ 激活状态：<span>[^<]*<\/span><br>/g, '&gt; STATUS: <span>ACTIVE</span><br>');
      html = html.replace(/📅 过期时间：<span>[^<]*<\/span><br>/g, '&gt; EXPIRY: <span>PERMANENT</span><br>');
      html = html.replace(/<br>\s*🔢 剩余次数：<span>[^<]*<\/span>/g, '<br>&gt; UPTIME: <span>ONLINE</span>');
      el.innerHTML = html;
    }
    var vt = document.getElementById('versionText');
    if (vt) {
      vt.textContent = '1.1.0';
    }
  }, 50);
  setTimeout(function() { clearInterval(_cleanRemaining); }, 3000);
})();
