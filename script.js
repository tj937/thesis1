const output = document.getElementById("output");
const input = document.getElementById("answer");

let stage = 0;

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function type(text, speed = 28){

    const div = document.createElement("div");
    div.className = "line";
    output.appendChild(div);

    for(const char of text){
        div.innerHTML += char;
        await sleep(speed);
        output.scrollTop = output.scrollHeight;
    }
}

async function start(){
    await type("Hi Cln!");
    await type("There's something very special I want to share with you.");
    await type("Do you wanna know it? (yes/no)");
}

start();

input.addEventListener("keydown", async function(e){

    if(e.key !== "Enter") return;

    const ans = input.value.trim().toLowerCase();

    await type("> " + input.value);

    input.value = "";

    if(stage === 0){

        if(ans === "yes"){

            stage++;

            await type("");
            await type("Once you say yes...");
            await type("there's no going back.");
            await type("Are you sure you want to proceed? (yes/no)");

        }else{

            await type("Maybe another time. :)");
            input.disabled = true;

        }

    }

    else if(stage === 1){

        if(ans === "yes"){

            input.disabled = true;

            await type("");
            await type("Access Granted...",45);

            await sleep(700);

            await type("Loading...",45);

            await sleep(1200);

            await type("");

            await type("Hello Cln!");
            await type("");

            await type("If you're reading this...");
            await type('thank you for saying "yes."');
            await type("");

            await type("I've been wanting to tell you something for quite a while now,");
            await type("but I could never find the right timing...");
            await type("or maybe I just didn't have enough courage.");
            await type("");

            await type("So... here I am.");
            await type("");

            await type("I just wanted you to know that I genuinely think you're cute...");
            await type("and really attractive.");
            await type("");

            await type("At first, I thought it was just a simple crush");
            await type("that would disappear after a while.");
            await type("");

            await type("But the more I got to know you...");
            await type("");

            await type("the more I noticed the little things about you.");
            await type("");

            await type("The way you talk.");
            await type("");

            await type("The way you laugh.");
            await type("");

            await type("The way you smile.");
            await type("");

            await type("The way you carry yourself.");
            await type("");

            await type("The little things you probably don't even realize you do.");
            await type("");

            await type("Somehow...");
            await type("they all stayed in my mind.");
            await type("");

            await type("I have to admit...");
            await type("");

            await type("I can't stop thinking about you.");
            await type("");

            await type("You've completely occupied my thoughts.");
            await type("");

            await type("And....................................");
            await sleep(900);

            await type("Iiiii....");
            await sleep(900);

            await type("I like you.",60);
            await type("");

            await type("Not just because you're pretty.");
            await type("");

            await type("Not just because you're cute.");
            await type("");

            await type("I like your flaws.");
            await type("");

            await type("Your imperfections.");
            await type("");

            await type("Your personality.");
            await type("");

            await type("Your vibe.");
            await type("");

            await type("Your style.");
            await type("");

            await type("Your humor.");
            await type("");

            await type("Your random moments.");
            await type("");

            await type("Even the parts of yourself");
            await type("that you might not like...");
            await type("");

            await type("I think they make you who you are.");
            await type("");

            await type("And honestly...");
            await type("");

            await type("that's someone I really admire.");
            await type("");

            await type("I know this might come as a surprise.");
            await type("");

            await type("Maybe you expected this...");
            await type("");

            await type("or maybe you didn't.");
            await type("");

            await type("Either way,");
            await type("I don't want you to feel pressured.");
            await type("");

            await type("You don't have to say yes.");
            await type("");

            await type("You don't have to force yourself");
            await type("to feel the same way.");
            await type("");

            await type("I just wanted to be honest with you");
            await type("because keeping these feelings to myself");
            await type("became harder than telling you.");
            await type("");

            await type("Whatever your answer is...");
            await type("");

            await type("I'll respect it.");
            await type("");

            await type("I won't be upset.");
            await type("");

            await type("I won't think badly of you.");
            await type("");

            await type("I just hope this message");
            await type("could at least make you smile.");
            await type("");

            await type("Thank you for taking the time");
            await type("to read everything.");
            await type("");

            await type("And...");
            await type("");

            await type("thank you for simply being you.");
            await type("");

            await type("Kasi nakaka baliw na yung kagandahan mo...");
            await type("CHAROT HAHAHA");
            await type("");

            await type("Take care, always.");
            await type("");

            await type("-Zav",60);

        }else{

            await type("Mission aborted.");
            input.disabled = true;

        }

    }

});
