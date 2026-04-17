function updateUI(depth, phase) {
    const statusEl = document.getElementById('status');
    const piEl = document.getElementById('pi-display');

    if (phase === 90.0) {
        // First Ancestor Verified
        statusEl.innerText = "SEED STABILIZED";
        piDigits = "?"; // No answer yet, just stability.
    } 
    else if (phase === 180.0) {
        // Bedrock Consensus Reached (The '3' pattern emerges naturally)
        piDigits = "3"; 
        statusEl.innerText = "GROUNDED STATE: PERFECT";
    } 
    else if (phase < 180.0 && phase > 0) {
        // The Euler Shiver: i*pi = 0
        piDigits = ""; // PURGE
        statusEl.innerText = "TRANSFER: ARITHMETIC FRICTION";
    }
    
    piEl.innerText = piDigits;
}