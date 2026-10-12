(() => {
  const config = window.VLOG_CONFIG || {};
  const name = config.channelName || "VLOG SPACE";
  const url = config.channelUrl || "https://t.me/YOUR_CHANNEL";
  document.title = `${name} — Rasmiy sahifa`;
  document.querySelectorAll("#brandName, #footerBrand").forEach(el => el.textContent = name);
  document.querySelectorAll(".telegram-link, .vlog-card").forEach(el => {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();