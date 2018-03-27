# txt.cmd - CODE IS LAW (In collaboration with …)
![alt tekst](Udklip.PNG) 
![alt tekst](Udklip2.PNG)
![alt tekst](Udklip3.PNG)

[Try out code now](https://rawgit.com/Margretexie/Mini_ex/master/mini_ex7/empty-example/index.html)

# E-litterature
This weeks theme is e-litterature that utilizes written text/audio text as the main medium to convey a kind of message. 
# Our Program
## Technical aspect 
This is a program that contains a canvas, a text object and 10 different buttons with each their functions that affects the text object. We chose to use object oriented programming so we could easily manipulate with the objects attributes under the different circumstances. As seen in the code ``txt.text=’...’`` is a syntax we’ve used several times, since the text is the main object of the program. Other attributes we’ve manipulated with are ``txt.color, txt.ypos/xpos, txt.size, txt.font`` and so on.

Another big aspect of the program is the 10 buttons. We’ve created if-statements to decide whether the buttons are pressed, not pressed(or in some cases pressed second time). This is done by Boolean statements (true/false), in our case we’ve used the numbers 1 and 0 to check if the statements are true or false. 
``` javascript
function txtdrop(){
  if (drop == 0){
    drop = 1;
    dropst = 1;
  } else{
    drop = 0;
  }
}
```
A more detailed description of the code’s different parts is commented inside the code.

## Conceptual aspect
Our program was inspired by the notion of “executive code”, how language becomes executable in code and becomes actions of the programmers wish.This reminded us of the notion of “Code is law” and The Word:
>"In the beginning was the Word, and the Word was with God, and the Word was God" (John, 1:1,)

In our program you interact with a text-object by using 10 buttons, labeled ‘The 10 commandments’, on the right side. Each button makes the text-element perform an action but also react on that action much in the same way as a human would. This feedback gives the computer a form of voice or personality. Reacting on things like being dropped on the ‘ground’ by writing **Hurt** or changing color på writing **Pretty**. 

In a way this feels like you are commanding the computer to do certain things by using english language instead of programming languages. Further supporting the idea of humanizing the computer. In this perspective you become the word, the God that commands the computer to do certain things. In its strong believe in you it does whatever you tell it to without hesitation. 

#Vocable Code and our program
This is individual comments that each of us made as we analyzed our work using the text ‘Vocable Code’.
*Each of you in the group analyze your own e-lit work by using the text 'Vocable Code': what is the aesthetic aspects of your program in particular to the relationship between code and language?*

Margrete:

Teis:
> "Programs are operative inasmuch as they do what they say, but moreover they do what they say at the moment of saying it" (p.35 Vocable code by Geoff Cox)

>"Programmers bring bodily meaning to their work by applying models of human perception, and by trying to account for the ways that other social bodies are drawn into the process of meaning production"(p.26 Vocable code by Geoff Cox)

> "The meanings of words are not derived from an inherent logical structure alone that manipulates symbols into particular sequences (like a program), but also from their social usage." (p.32 Vocable code by Geoff Cox)

> “Writing in a computer programming language is phrasing instructions for
an utter idiot.” (Florian Cramer, “Language”, in Fuller op. cit., p.171)


