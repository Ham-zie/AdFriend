document.addEventListener("DOMContentLoaded", () => {
    const adSelectors = ["iframe", "div[class*='ad']", "div[id*='ad']"];
    const quotes = [
      "Believe in yourself!", 
      "You are capable of amazing things!", 
      "Every day is a second chance!", 
      "Keep pushing forward!", 
      "You got this!",
      "Dream big and dare to fail!",
      "Stay positive, work hard, make it happen!",
      "Happiness depends upon ourselves.",
      "Don’t wait. The time will never be just right!",
      "Your limitation—it’s only your imagination."
    ];
    
    function createWidget(content) {
      const widget = document.createElement("div");
      widget.className = "positive-widget";
      widget.textContent = content;
      widget.style.padding = "20px";
      widget.style.background = "linear-gradient(135deg, #4CAF50, #66BB6A)";
      widget.style.color = "#fff";
      widget.style.fontSize = "18px";
      widget.style.textAlign = "center";
      widget.style.borderRadius = "12px";
      widget.style.boxShadow = "0px 6px 15px rgba(0,0,0,0.2)";
      widget.style.margin = "10px";
      widget.style.fontWeight = "bold";
      widget.style.display = "flex";
      widget.style.justifyContent = "center";
      widget.style.alignItems = "center";
      widget.style.minHeight = "120px";
      widget.style.transition = "transform 0.3s ease-in-out";
      widget.style.cursor = "pointer";
      
      widget.addEventListener("mouseover", () => {
        widget.style.transform = "scale(1.05)";
      });
      
      widget.addEventListener("mouseout", () => {
        widget.style.transform = "scale(1)";
      });
      
      return widget;
    }
    
    function replaceAds() {
      adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(ad => {
          const widget = createWidget(quotes[Math.floor(Math.random() * quotes.length)]);
          ad.replaceWith(widget);
        });
      });
    }
    
    replaceAds();
    
    new MutationObserver(replaceAds).observe(document.body, { childList: true, subtree: true });
  });
  