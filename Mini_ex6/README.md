## Mini exercise 6

![alt text](https://github.com/Solution0/Aesthetic-Programming/blob/Github-Desktop/Mini_ex6/capture.gif)
**URL:** https://rawgit.com/Solution0/Aesthetic-Programming/Github-Desktop/Mini_ex6/program/index.html

## Generativity
This weeks theme was generativity. The challenge was to make a program that was bound by a few rules. If done correctly(and by using noise/random) the endproduct would be somehow different from one instance to another. 

## Survivability
In this mini exercise i drew my inspiration from the survivability of civilizations and species through time. I wanted to express this because the rule-based generativity reminded me of the factors in real life. How I am this person because I was born in this country, at a specific time, surrounded by specific people, in a specific climate and so on... Were I to change my time of birth by only a couple of minutes it might create a [butterfly effect](https://www.urbandictionary.com/define.php?term=butterfly%20effect) that ripples through time to majorly change the person I am today. 

I've translated this unto the program as follows:
A lifeform is represented by a circle. It starts at a random place with a random color. The size of the lifeform is somewhat random and so is the growth over time. As the lifeform grows it intersects other lifeforms (confrontation) resulting in the smaller/weaker lifeform taking the color of the bigger. The random growth simulates a fight and therefore gives the weaker lifeform to get an upperhand even though it started the confrontation as the smallest. As time progresses fewer and fewer colors will appear on the screen. When a couple of lifeforms share a color they each have a 'king' defined as the biggest circle in the colored group. For one color to overrule another they need to have a bigger lifeform intersecting with the other color's 'king'. 

## Rules:
- Make 100 lifeforms randomly on the canvas
- Grow them by a somewhat random amount each frame
- Check if lifeforms intersect with any other lifeform but itself. 
- If lifeforms intersect, let the bigger one dictate the color of the smaller
