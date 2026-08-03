const output=document.getElementById("output");
const input=document.getElementById("answer");
let stage=0;

const finalMessage=`Hello Cln!

If you're reading this...
thank you for saying "yes."

I've been wanting to tell you something for quite a while now, but I could never find the right timing... or maybe I just didn't have enough courage.

So... here I am.

I just wanted you to know that I genuinely think you're cute... and really attractive.

At first, I thought it was just a simple crush that would disappear after a while.

But the more I got to know you...

the more I noticed the little things about you.

The way you talk.

The way you laugh.

The way you smile.

The way you carry yourself.

The little things you probably don't even realize you do.

Somehow... 
they all stayed in my mind.

I have to admit...

I can't stop thinking about you.

You've completely filled my thoughts.

And....................................

Iiiii....

I like you.

Not just because you're pretty.

Not just because you're cute.

I like your flaws.

Your imperfections.

Your personality.

Your vibe.

Your style.

Your humor.

Your random moments.

Even the parts of yourself that you might not like...

I think they make you who you are.

And honestly...

that's someone I really admire.

I know this might come as a surprise.

Maybe you expected this...

or maybe you didn't.

Either way, I don't want you to feel pressured.

You don't have to say yes.

You don't have to force yourself to feel the same way.

I just wanted to be honest with you because keeping these feelings to myself became harder than telling you.

Whatever your answer is...

I'll respect it.

I won't be upset.

I won't think badly of you.

I just hope this message could at least make you smile.

Thank you for taking the time to read everything.

And...

thank you for simply being you.

Kasi nakaka baliw na yung kagandahan mo... CHAROT HAHAHA

Take care, always..!

-Zav`;

function typeWriter(text,speed=30){

    let i=0;

    function typing(){

        if(i<text.length){

            output.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,speed);

            document.getElementById("terminal").scrollTop=999999;
        }

    }

    typing();

}

typeWriter("Hi Cln, there's something very special I want to share with you.\nDo you wanna know it? (yes/no)\n\n");

input.addEventListener("keydown",function(e){

    if(e.key!=="Enter") return;

    let ans=input.value.trim().toLowerCase();

    output.innerHTML+="> "+input.value+"\n\n";

    input.value="";

    if(stage===0){

        if(ans==="yes"){

            stage=1;

            typeWriter("Once you say yes there's no going back.\nAre you sure you want to proceed? (yes/no)\n\n");

        }else{

            typeWriter("Maybe next time :)\n");

            input.disabled=true;
        }

    }

    else if(stage===1){

        if(ans==="yes"){

            stage=2;

            typeWriter(finalMessage,40);

            input.disabled=true;

        }else{

            typeWriter("Mission aborted.\n");

            input.disabled=true;
        }

    }

});
