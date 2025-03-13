const excuses = {
    work: {
        professional: [
            "Due to an unexpected system update, I am unable to access my work files at the moment.",
            "I'm dealing with an urgent client escalation and will need to reschedule our meeting.",
            "A sudden compliance audit requires my immediate attention today."
        ],
        believable: [
            "I'm feeling unwell and might need to rest today. I'll make up for the lost time tomorrow.",
            "I had an unexpected plumbing issue at home that I need to get fixed immediately.",
            "My internet is down, and the technician is coming later today to fix it."
        ],
        funny: [
            "My cat just discovered my laptop as a new bed, and negotiations are taking longer than expected.",
            "My morning coffee betrayed me, and now I need to change everything I own.",
            "I got lost in deep thought about work, and now I'm lost... literally."
        ],
        dramatic: [
            "I was about to join the call when a bird flew into my window, and now I'm dealing with the aftermath.",
            "The universe has conspired to trap me in a never-ending loop of household disasters today.",
            "The WiFi gods are against me today. I am but a helpless mortal."
        ]
    },
    school: {
        professional: [
            "I had an unexpected doctor's appointment and couldn't make it to class.",
            "My transportation was delayed due to unforeseen circumstances.",
            "I was unwell and unable to complete the assignment on time."
        ],
        believable: [
            "I had a power outage last night, and I couldn't finish my homework.",
            "I woke up with a severe headache and couldn't focus.",
            "My laptop crashed, and I lost all my notes."
        ],
        funny: [
            "I was abducted by aliens who wanted tutoring on human history. They were not impressed.",
            "I accidentally set my alarm for PM instead of AM. Classic me.",
            "I got lost on my way to class... from my bedroom."
        ],
        dramatic: [
            "I was all set for class when my dog looked at me with those sad eyes... I had to stay.",
            "A squirrel stole my homework. It was a tragic betrayal.",
            "The coffee machine exploded, and now I'm dealing with caffeine withdrawal."
        ]
    }
};

function generateExcuse() {
    const category = document.getElementById("category").value;
    const tone = document.getElementById("tone").value;
    
    if (excuses[category] && excuses[category][tone]) {
        const excuseList = excuses[category][tone];
        const randomExcuse = excuseList[Math.floor(Math.random() * excuseList.length)];
        document.getElementById("excuse").innerText = randomExcuse;
        document.getElementById("result-container").style.display = "block";
    } else {
        document.getElementById("excuse").innerText = "No excuse found!";
    }
}

function copyExcuse() {
    const excuseText = document.getElementById("excuse").innerText;
    navigator.clipboard.writeText(excuseText).then(() => {
        alert("Excuse copied to clipboard!");
    });
}
