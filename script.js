document.addEventListener("DOMContentLoaded", function () {
    const excuseCategories = {
        "Work/Office": {
            Professional: [
                "I have a client presentation that requires my attention.",
                "An urgent deadline has just been moved up unexpectedly.",
                "Our department is undergoing a mandatory compliance audit.",
                "I have to finalize reports for the quarterly review.",
                "A senior executive scheduled a last-minute meeting.",
                "My manager needs me to stay back for project discussions.",
                "I have a mandatory skills training session to attend."
            ],
            Believable: [
                "I have an unexpected backlog of emails to clear.",
                "My boss just assigned me urgent work before leaving.",
                "There’s a technical issue that I need to resolve.",
                "A last-minute policy update requires my review.",
                "I need to assist a colleague with an urgent task.",
                "There’s a system upgrade that requires my presence.",
                "I have to complete some unfinished client documentation."
            ],
            Sarcastic: [
                "I’m leading an investigation into the disappearance of my motivation.",
                "My keyboard just filed a restraining order against me.",
                "I can’t leave—what if the entire company falls apart?",
                "My inbox just declared war on my sanity.",
                "If I leave now, I might miss another pointless meeting.",
                "I need to personally supervise my chair to ensure it doesn’t roll away.",
                "My computer and I are having trust issues; it just crashed on me."
            ],
            "Over-the-Top": [
                "NASA just called—they need my help calculating a Mars landing.",
                "A secret project at work requires my immediate presence.",
                "I’ve been selected to test a time-travel prototype.",
                "I accidentally opened a black hole in my email inbox.",
                "My manager just discovered I’m actually the CEO in disguise.",
                "Our office printer has gone rogue, and I must negotiate peace.",
                "A corporate spy infiltrated our office, and I have to stop them."
            ]
        },
        "School/College": {
            Professional: [
                "I need to attend an academic seminar for extra credit.",
                "My professor scheduled a mandatory group discussion.",
                "There’s an important research paper submission deadline.",
                "I have an assessment review session today.",
                "Our class has a guest lecturer that I cannot miss.",
                "I have a tutoring session to prepare for final exams.",
                "A faculty meeting requires student representation."
            ],
            Believable: [
                "I have an assignment due tonight that I completely forgot about.",
                "My professor just announced a surprise quiz.",
                "Group project members need my input urgently.",
                "I have to retake a test because of grading errors.",
                "I lost my notes and need to rewrite them before class.",
                "A class was rescheduled, conflicting with my plans.",
                "I have an overdue library book I must return."
            ],
            Sarcastic: [
                "I have to conduct a social experiment called ‘Skipping Class 101.’",
                "My brain is buffering—education overload detected.",
                "I have an appointment with my bed—it’s a long-overdue meeting.",
                "I promised my notes I’d finally spend time with them.",
                "I’m waiting for a sign from the universe to attend class.",
                "My alarm clock betrayed me again.",
                "I’m practicing my ‘absent but present in spirit’ skills."
            ],
            "Over-the-Top": [
                "I discovered that my textbook contains ancient prophecies.",
                "A time traveler told me attending class today would destroy the future.",
                "My pen exploded, and now my homework is unreadable.",
                "A pigeon stole my assignment on my way to school.",
                "I was abducted by aliens, and they asked me about algebra.",
                "A wormhole appeared in the library, and I fell in.",
                "My school was temporarily declared an independent nation."
            ]
        },
        "Social Events": {
            Professional: [
                "I have a networking event that I must attend.",
                "A prior commitment with a business associate conflicts with the event.",
                "I have a personal development seminar scheduled.",
                "I’m working on a side project that needs my focus.",
                "I need to prepare for an important client meeting tomorrow.",
                "A personal mentorship session is scheduled at the same time.",
                "I have an early morning shift that requires me to rest early."
            ],
            Believable: [
                "I have a family dinner I promised to attend.",
                "My pet isn’t feeling well, and I need to take care of them.",
                "I have an early morning appointment and need to sleep early.",
                "I already made other plans for the night.",
                "I have to babysit my younger sibling tonight.",
                "I forgot about an important household chore.",
                "I need a break from socializing to recharge."
            ],
            Sarcastic: [
                "I’d love to come, but my couch just proposed, and I said yes.",
                "I have a very important date... with my blanket and TV.",
                "I accidentally double-booked myself with ‘Doing Absolutely Nothing.’",
                "I have an emergency meeting with my fridge.",
                "I lost the ability to interact with humans after 8 PM.",
                "My social battery is at 1%, and I lost the charger.",
                "I promised my shadow I’d spend quality time with it."
            ],
            "Over-the-Top": [
                "I can’t make it—I just got recruited by the Avengers.",
                "NASA called; I have a last-minute space mission.",
                "I got trapped in an alternate dimension, and I’m still finding my way back.",
                "My evil twin will attend in my place—good luck!",
                "I was mistakenly added to the guest list of a royal gala in Monaco.",
                "I got a mysterious invitation to a secret society meeting.",
                "A time traveler told me skipping this event will save humanity."
            ]
        },
        "Family Obligations": {
            Professional: [
                "I have a family financial planning session today.",
                "A medical appointment for a relative requires my presence.",
                "There’s a family legal discussion that I must attend.",
                "A relative’s milestone celebration is happening today.",
                "I have to assist a family member with urgent paperwork.",
                "My presence is required for a family business discussion.",
                "A relative’s housewarming event is scheduled."
            ],
            Believable: [
                "My grandparents are visiting, and I can’t miss it.",
                "My parents need my help with something urgent at home.",
                "A family member just arrived unexpectedly from out of town.",
                "I promised my mom I’d run errands for her today.",
                "A cousin’s birthday celebration is happening at the same time.",
                "My sibling needs help with their school project.",
                "I’m spending quality time with my family this evening."
            ],
            Sarcastic: [
                "My dog just organized a family meeting, and I have to attend.",
                "My relatives have scheduled an intense gossip session—can’t miss it!",
                "If I skip this, my family will write me out of the inheritance.",
                "I have to explain the internet to my grandma—again.",
                "I’m the designated snack distributor at our family gathering.",
                "My uncle has a conspiracy theory I need to pretend to believe.",
                "My aunt’s cat demanded my presence at dinner."
            ],
            "Over-the-Top": [
                "My great-great-great-grandfather’s ghost summoned me for advice.",
                "I was chosen as the next leader of the family council.",
                "A hidden treasure map just surfaced in our family archives.",
                "My family is reenacting medieval times, and I’m the king.",
                "I have been challenged to a duel by my cousin over a board game.",
                "A secret society in my family is revealing ancient secrets today.",
                "My house just became a time machine, and I need to operate it."
            ]
        },
        "Random Funny": {
            Professional: [
                "I have to oversee the urgent catnip distribution at my workplace.",
                "My cactus needs a virtual conference call with me.",
                "My office chair started a protest; I need to mediate.",
                "I’m running an emergency paperclip inventory check.",
                "The coffee machine just scheduled a mandatory meeting.",
                "My computer screen has a cracked sense of humor.",
                "I’m troubleshooting an imaginary IT issue for my imaginary boss."
            ],
            Believable: [
                "My pet rock just had a meltdown and needs calming down.",
                "I’m organizing my collection of perfectly normal socks.",
                "I need to find my left shoe—it’s hiding again.",
                "My plants are having an existential crisis.",
                "I just realized I left the stove on… for the last 5 hours.",
                "I have a social obligation to be on my couch this evening.",
                "I can’t leave my house; my couch has a strong gravitational pull."
            ],
            Sarcastic: [
                "I’m hosting a ‘watch paint dry’ marathon tonight.",
                "I have to pick up my imaginary friend from the airport.",
                "I’m making my bed mad, so it can’t sleep without me.",
                "I need to babysit my phone while it charges.",
                "My shadow has an appointment; I have to stay home.",
                "I just got my pet hamster elected as mayor of my house.",
                "I need to attend an emergency meeting of the Procrastinators Club."
            ],
            "Over-the-Top": [
                "I’ve been recruited to prevent a sock apocalypse.",
                "My spaghetti was kidnapped by aliens; I need to rescue it.",
                "A dragon just moved into my garage, and we’re negotiating rent.",
                "I have a mystical scroll to translate for the wizard council.",
                "I have to solve the world’s biggest puzzle: my TV remote.",
                "I got an invite to join the Justice League—so, superhero stuff.",
                "I’m about to face a magical duel with my neighbor’s garden gnome."
            ]
        }
    };

    const categorySelect = document.getElementById("category");
    const toneSelect = document.getElementById("tone");
    const generateBtn = document.getElementById("generateBtn");
    const excuseOutput = document.getElementById("excuseOutput");

    generateBtn.addEventListener("click", function () {
        const selectedCategory = categorySelect.value;
        const selectedTone = toneSelect.value;

        if (excuseCategories[selectedCategory] && excuseCategories[selectedCategory][selectedTone]) {
            const excuses = excuseCategories[selectedCategory][selectedTone];
            const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
            excuseOutput.textContent = randomExcuse;
        } else {
            excuseOutput.textContent = "Oops! No excuses found. Try again!";
        }
    });
});
