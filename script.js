function showScene(sceneKey) {

  const scene = story[sceneKey];

  document.getElementById("story").textContent = scene.text;

  if (scene.image) {
    document.getElementById("scene-image").src = scene.image;
  }

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  scene.choices.forEach(choice => {

    const button = document.createElement("button");
    button.textContent = choice.text;
   
    button.onclick = function () { 
      showScene(choice.next);
    }; 

    choicesDiv.appendChild(button);

  });

}         
    
const story = {

scene1: {
text: "You stand in a dark alley overlooking the royal castle. The Emerald Crown was stolen from the people years ago. Tonight you steal it back.",
image: "castle.jpg",
choices: [
{ text: "Sneak through the rooftops", next: "scene2" },
{ text: "Approach the front gate disguised", next: "scene3" }
]
},

scene2: {
text: "You leap across rooftops toward the castle wall while a patrol walks below.",
image: "rooftop.jpg",
choices: [
{ text: "Wait quietly for them to leave", next: "scene4" },
{ text: "Move quickly before they notice", next: "scene5" }
]
},

scene3: {
text: "Wearing a stolen guard cloak, you approach the gate. Two guards question you.",
image: "gate.jpg",
choices: [
{ text: "Bluff confidently", next: "scene6" },
{ text: "Slip away into the shadows", next: "scene4" }
]
},

scene4: {
text: "You reach the outer wall of the castle.",
image: "wall.jpg",
choices: [
{ text: "Climb the ivy-covered wall", next: "scene7" },
{ text: "Search for a hidden entrance", next: "scene8" }
]
},
 
scene5: { 
text: "Your footsteps echo and a guard shouts from below.",
image: "rooftop.jpg",
choices: [
{ text: "Run and jump to the wall", next: "scene7" },
{ text: "Throw a smoke bomb and hide", next: "scene8" }
]
},
 
scene6: {
text: "The guards begin asking questions you cant answer.",
image: "gate.jpg",
choices: [
{ text: "Knock them out quietly", next: "scene7" },
{ text: "Flee toward the back garden", next: "scene9" }
]
},

scene7: {
text: "You drop into the royal garden. A guard dog begins barking nearby.",
image: "garden.jpg",
choices: [
{ text: "Calm the dog with food", next: "scene10" },
{ text: "Run before it alerts the guards", next: "scene11" }
]
},

scene8: {
text: "Behind some bushes you discover a sewer grate leading under the castle.",
image: "sewer.jpg",
choices: [
{ text: "Crawl through the tunnel", next: "scene12" },
{ text: "Search for another entrance", next: "scene9" }
]
},

scene9: {
text: "You go into a hedge maze behind the castle.",
image: "maze.jpg",
choices: [
{ text: "Climb a hedge", next: "scene10" },
{ text: "Follow the maze quietly", next: "scene11" }
]
},

scene10: {
text: "You reach a servant's entrance along the side of the castle.",
image: "kitchen.jpg",
choices: [
{ text: "Sneak inside", next: "scene13" },
{ text: "Pretend to be a servant", next: "scene14" }
]
},

scene11: {
text: "Inside the corridor, a group of guards run at you.",
image: "corridor.jpg",
choices: [
{ text: "Hide and let them pass", next: "scene13" },
{ text: "Fight through them", next: "scene15" }
]
},

scene12: {
text: "You come from the sewer under the castle through a maintenance hatch.",
image: "sewer.jpg",
choices: [
{ text: "Climb into the lower halls", next: "scene13" },
{ text: "Explore basement tunnels", next: "scene16" }
]
},

scene13: {
text: "Lavish castle corridors stretch ahead.",
image: "corridor.jpg",
choices: [
{ text: "Head toward the throne room", next: "scene17" },
{ text: "Search for the treasury", next: "scene18" }
]
},

scene14: {
text: "In the busy kitchen you blend among servants.",
image: "kitchen.jpg",
choices: [
{ text: "Gather information", next: "scene17" },
{ text: "Slip down a back corridor", next: "scene18" }
]
}, 

scene15: {
text: "The fight alerts the castle guards. Alarms blare.",
image: "corridor.jpg",
choices: [
{ text: "Escape through a window", next: "scene19" },
{ text: "Hide in a chamber", next: "scene20" }
]
},

scene16: {
text: "You pass dungeon cells where prisoners whisper for help.",
image: "dungeon.jpg",
choices: [
{ text: "Free the prisoners", next: "scene21" },
{ text: "Ignore them and continue", next: "scene18" }
]
},

scene17: {
text: "From a balcony you see the king meeting advisors below.",
image: "throne.jpg",
choices: [
{ text: "Eavesdrop", next: "scene22" },
{ text: "Slip toward the vault", next: "scene18" }
]
},

scene18: {
text: "A massive door guards the royal treasure.",
image: "vault.jpg",
choices: [
{ text: "Pick the lock", next: "scene23" },
{ text: "Search for the key", next: "scene24" }
]
},

scene19: {
text: "You escape onto the castle roof as alarms ring below.",
image: "roof.jpg",
choices: [
{ text: "Climb to the vault window", next: "scene23" },
{ text: "Escape early", next: "scene26" }
]
},

scene20: {
text: "You hide inside the king's private study.",
image: "study.jpg",
choices: [
{ text: "Take evidence of corruption", next: "scene22" },
{ text: "Head for the vault", next: "scene23" }
]
},

scene21: {
text: "You free the prisoners. Chaos spreads through the castle.",
image: "dungeon.jpg",
choices: [
{ text: "Use the chaos to reach the vault", next: "scene23" },
{ text: "Help them escape", next: "scene26" }
]
},

scene22: {
text: "You discover a secret passage leading to the vault.",
image: "secret.jpg",
choices: [
{ text: "Take the passage", next: "scene23" },
{ text: "Follow it to the throne room", next: "scene27" }
]
},

scene23: {
text: "The Emerald Crown is before you.",
image: "treasure.jpg",
choices: [
{ text: "Take the jewels and leave", next: "scene26" },
{ text: "Take everything and confront the king", next: "scene27" }
]
},

scene24: {
text: "The guard captain carries the vault key.",
image: "captain.jpg",
choices: [
{ text: "Pickpocket the key", next: "scene23" },
{ text: "Challenge him", next: "scene25" }
]     
},

scene25: {
text: "A duel with the captain begins.",
image: "duel.jpg", 
choices: [
{ text: "Win the duel", next: "scene23" },
{ text: "Escape wounded", next: "scene26" }
]
},

scene26: {
text: "You escape into the night with the jewels, planning to return them to the people.",
image: "escape.jpg",
choices: [
{ text: "Play Again", next: "scene1" }
]
},

scene27: {
text: "You confront the corrupt king in the throne room.",
image: "throne.jpg",
choices: [
{ text: "Reveal the evidence", next: "scene28" },
{ text: "Attack the king", next: "scene29" }
] 
},

scene28: {
text: "The corruption is exposed and the kingdom begins to change.",
image: "crown.jpg",
choices: [
{ text: "Play Again", next: "scene1" }
]
},

scene29: {
text: "The king falls, but chaos spreads through the kingdom.",
image: "crown.jpg",
choices: [
{ text: "Play Again", next: "scene1" }
]
},

scene30: {
text: "Too many alarms sound. Guards surround you. The heist fails.",
image: "capture.jpg",
choices: [
{ text: "Try Again", next: "scene1" }
]
}

};
     
showScene("scene1");    
 
  



          
