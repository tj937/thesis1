const output=document.getElementById("output");
const input=document.getElementById("answer");

let stage=0;

const finalMessage=`Hello Cln!

I just wanted to tell you now that I find you cute and attractive...

I have to admit...

I can't stop thinking about you...

Guess you've captured my thoughts completely.

And..............................

Iiiii....

I like you.

But...

I also like your flaws...

your imperfections...

your personality...

your vibe...

your style...

your worst...

and most of all...

your smile!

But no pressure.

You don't have to reciprocate my feelings, Sharlene.

I just needed to get this out of my head for my own peace of mind.

Kasi nakaka baliw na yung kagandahan mo.

CHAROT HAHAHA

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
