const COLORS = ["#bdd9f4","#fdfcff", "#fff496", "#b65b54", "#fff6a7"];

const generateSpaceLayer = (size, selector, totalStars, duration,border) => {
    const layer = [];
    for (let i = 0; i < totalStars; i++){
        const color  = COLORS[Math.floor(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color},${x}vw ${y +100}vh 0 ${color}`); 
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size",size)
    container.style.setProperty("--duration",duration)
    container.style.setProperty("--border",border)
    
    
}

generateSpaceLayer("1px", ".space1", 200, "10s","50%");
generateSpaceLayer("2px", ".space2", 100, "15s", "50%");
generateSpaceLayer("5px", ".space3", 50, "25s", "50%");

function musica(){
    document.getElementById("audio-music").play();
}

