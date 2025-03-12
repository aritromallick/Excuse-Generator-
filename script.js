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
        ]
    }
};

// Function to fetch OpenAI API key securely from GitHub Actions
async function getAPIKey() {
    const response = await fetch("api_key.json");
    const data = await response.json();
    return data.apiKey; // Securely inject the key
}

// Function to generate excuses using OpenAI API
async function generateAIExcuse(category, tone) {
    const apiKey = await getAPIKey();  // Fetch API key securely
    const prompt = `Generate a ${tone} excuse for ${category} situations.`;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching AI excuse:", error);
        return "Oops! Something went wrong with AI generation.";
    }
}

async function generateExcuse() {
    const category = document.getElementById("category").value;
    const tone = document.getElementById("tone").value;

    let excuse = "";
    if (excuses[category] && excuses[category][tone]) {
        if (Math.random() > 0.5) {
            const excuseList = excuses[category][tone];
            excuse = excuseList[Math.floor(Math.random() * excuseList.length)];
        } else {
            excuse = await generateAIExcuse(category, tone);
        }
    } else {
        excuse = await generateAIExcuse(category, tone);
    }

    document.getElementById("excuse").innerText = excuse;
    document.getElementById("result-container").style.display = "block";
}

function copyExcuse() {
    const excuseText = document.getElementById("excuse").innerText;
    navigator.clipboard.writeText(excuseText).then(() => {
        alert("Excuse copied to clipboard!");
    });
}