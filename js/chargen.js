const powerTable = {
Alteration:
[
    ["Ability Boost", "Ability Increase", "Alter Ego", "Alternate Form", "Aquatic", "Density"],
    ["Ability Boost", "Ability Increase", "Alter Ego", "Alternate Form", "Aquatic", "Density"],
    ["Duplication", "Extra Body Parts", "Growth", "Invisibility", "Phasing", "Shrinking"],
    ["Duplication", "Extra Body Parts", "Growth", "Invisibility", "Phasing", "Shrinking"],
    ["Animal Mimicry", "Material Mimicry", "Plant Mimicry", "Power Mimicry", "Stretching", "Transformation"],
    ["Animal Mimicry", "Material Mimicry", "Plant Mimicry", "Power Mimicry", "Stretching", "Transformation"]
],
Control:
[
    ["Alteration Ray", "Alteration Ray", "Element Control", "Element Control", "Probability Control", "Time Control"],
    ["Alteration Ray", "Alteration Ray", "Element Control", "Element Control", "Probability Control", "Time Control"],
    ["Energy Control", "Energy Control", "Healing", "Telekinesis", "Telekinesis", "Transmutation"],
    ["Energy Control", "Energy Control", "Healing", "Telekinesis", "Telekinesis", "Transmutation"],
    ["Cosmic Power", "Gadgets", "Gadgets", "Magic", "Nullification", "Servant"],
    ["Cosmic Power", "Gadgets", "Gadgets", "Magic", "Nullification", "Servant"]
],
Defensive:
[
    ["Absorption", "Absorption", "Adaptation", "Force Field", "Force Field", "Force Field"],
    ["Absorption", "Absorption", "Adaptation", "Force Field", "Force Field", "Force Field"],
    ["Immortality", "Life Support", "Life Support", "Life Support", "Reflection", "Reflection"],
    ["Immortality", "Life Support", "Life Support", "Life Support", "Reflection", "Reflection"],
    ["Regeneration", "Regeneration", "Resistance", "Resistance", "Resistance", "Resistance"],
    ["Regeneration", "Regeneration", "Resistance", "Resistance", "Resistance", "Resistance"]
],
Mental:
[
    ["Astral Projection", "Dream Control", "Emotion Control", "Emotion Control", "Illusion", "Images"],
    ["Astral Projection", "Dream Control", "Emotion Control", "Emotion Control", "Illusion", "Images"],
    ["Astral Projection", "Dream Control", "Emotion Control", "Emotion Control", "Illusion", "Images"],
    ["Mental Blast", "Mental Blast", "Mind Control", "Mind Shield", "Telepathy", "Telepathy"],
    ["Mental Blast", "Mental Blast", "Mind Control", "Mind Shield", "Telepathy", "Telepathy"],
    ["Mental Blast", "Mental Blast", "Mind Control", "Mind Shield", "Telepathy", "Telepathy"]
],
Movement:
[
    ["Burrowing", "Dimensional Travel", "Flight", "Flight", "Leaping", "Leaping"],
    ["Burrowing", "Dimensional Travel", "Flight", "Flight", "Leaping", "Leaping"],
    ["Burrowing", "Dimensional Travel", "Flight", "Flight", "Leaping", "Leaping"],
    ["Spinning", "Super-Speed", "Super-Speed", "Swinging", "Teleportation", "Wall-Crawling"],
    ["Spinning", "Super-Speed", "Super-Speed", "Swinging", "Teleportation", "Wall-Crawling"],
    ["Spinning", "Super-Speed", "Super-Speed", "Swinging", "Teleportation", "Wall-Crawling"]
],
Offensive:
[
    ["Affliction", "Binding", "Blast", "Blast", "Strike", "Strike"],
    ["Affliction", "Binding", "Blast", "Blast", "Strike", "Strike"],
    ["Affliction", "Binding", "Blast", "Blast", "Strike", "Strike"],
    ["Aura", "Dazzle", "Dazzle", "Energy Drain", "Fast Attack", "Stunning"],
    ["Aura", "Dazzle", "Dazzle", "Energy Drain", "Fast Attack", "Stunning"],
    ["Aura", "Dazzle", "Dazzle", "Energy Drain", "Fast Attack", "Stunning"]
],
Sensory:
[
    ["Detection", "Detection", "ESP", "Super-Senses", "Super-Senses", "Super-Senses"],
    ["Detection", "Detection", "ESP", "Super-Senses", "Super-Senses", "Super-Senses"],
    ["Detection", "Detection", "ESP", "Super-Senses", "Super-Senses", "Super-Senses"],
    ["Danger Sense", "Danger Sense", "Interface", "Postcognition", "Precognition", "Precognition"],
    ["Danger Sense", "Danger Sense", "Interface", "Postcognition", "Precognition", "Precognition"],
    ["Danger Sense", "Danger Sense", "Interface", "Postcognition", "Precognition", "Precognition"],
]};

const greatPowerTable = {
Alteration:
[
    ["Ability Boost", "Ability Increase", "Alter Ego", "Alternate Form", "Aquatic", "Density"],
    ["Ability Boost", "Ability Increase", "Alter Ego", "Alternate Form", "Aquatic", "Density"],
    ["Dimension Control", "Duplication", "Evolution", "Extra Body Parts", "Gestalt", "Growth"],
    ["Dimension Control", "Duplication", "Evolution", "Extra Body Parts", "Gestalt", "Growth"],
    ["Invisibility", "Mimicry", "Phasing", "Shrinking", "Stretching", "Transformation"],
    ["Invisibility", "Mimicry", "Phasing", "Shrinking", "Stretching", "Transformation"]
],
Control:
[
    ["Alteration Ray", "Alteration Ray", "Continuum Control", "Continuum Control", "Element Control", "Element Control"],
    ["Alteration Ray", "Alteration Ray", "Continuum Control", "Continuum Control", "Element Control", "Element Control"],
    ["Energy Control", "Energy Control", "Healing", "Machine Control", "Matter Control", "Matter Control"],
    ["Energy Control", "Energy Control", "Healing", "Machine Control", "Matter Control", "Matter Control"],
    ["Power Control", "Power Control", "Servant", "Spirit Control", "Wizardry", "Wizardry"],
    ["Power Control", "Power Control", "Servant", "Spirit Control", "Wizardry", "Wizardry"]
],
Defensive:
[
    ["Absorption", "Absorption", "Adaptation", "Force Field", "Force Field", "Force Field"],
    ["Absorption", "Absorption", "Adaptation", "Force Field", "Force Field", "Force Field"],
    ["Immortality", "Life Support", "Life Support", "Life Support", "Reflection", "Reflection"],
    ["Immortality", "Life Support", "Life Support", "Life Support", "Reflection", "Reflection"],
    ["Regeneration", "Regeneration", "Resistance", "Resistance", "Resistance", "Resistance"],
    ["Regeneration", "Regeneration", "Resistance", "Resistance", "Resistance", "Resistance"]
],
Mental:
[
    ["Astral Projection", "Dream Control", "Emotion Control", "Emotion Control", "Illusion", "Images"],
    ["Astral Projection", "Dream Control", "Emotion Control", "Emotion Control", "Illusion", "Images"],
    ["Astral Projection", "Dream Control", "Emotion Control", "Emotion Control", "Illusion", "Images"],
    ["Mental Blast", "Mental Blast", "Mind Control", "Mind Shield", "Telepathy", "Telepathy"],
    ["Mental Blast", "Mental Blast", "Mind Control", "Mind Shield", "Telepathy", "Telepathy"],
    ["Mental Blast", "Mental Blast", "Mind Control", "Mind Shield", "Telepathy", "Telepathy"]
],
Movement:
[
    ["Burrowing", "Dimensional Travel", "Flight", "Flight", "Leaping", "Leaping"],
    ["Burrowing", "Dimensional Travel", "Flight", "Flight", "Leaping", "Leaping"],
    ["Burrowing", "Dimensional Travel", "Flight", "Flight", "Leaping", "Leaping"],
    ["Spinning", "Super-Speed", "Super-Speed", "Swinging", "Teleportation", "Wall-Crawling"],
    ["Spinning", "Super-Speed", "Super-Speed", "Swinging", "Teleportation", "Wall-Crawling"],
    ["Spinning", "Super-Speed", "Super-Speed", "Swinging", "Teleportation", "Wall-Crawling"]
],
Offensive:
[
    ["Affliction", "Aura", "Binding", "Blast", "Blast", "Corrosion"],
    ["Affliction", "Aura", "Binding", "Blast", "Blast", "Corrosion"],
    ["Affliction", "Aura", "Binding", "Blast", "Blast", "Corrosion"],
    ["Dazzle", "Energy Drain", "Fast Attack", "Strike", "Strike", "Stunning"],
    ["Dazzle", "Energy Drain", "Fast Attack", "Strike", "Strike", "Stunning"],
    ["Dazzle", "Energy Drain", "Fast Attack", "Strike", "Strike", "Stunning"]
],
Sensory:
[
    ["Danger Sense", "Danger Sense", "Detection", "Detection", "Environmental Awareness", "ESP"],
    ["Danger Sense", "Danger Sense", "Detection", "Detection", "Environmental Awareness", "ESP"],
    ["Danger Sense", "Danger Sense", "Detection", "Detection", "Environmental Awareness", "ESP"],
    ["Interface", "Postcognition", "Precognition", "Super-Senses", "Super-Senses", "Super-Senses"],
    ["Interface", "Postcognition", "Precognition", "Super-Senses", "Super-Senses", "Super-Senses"],
    ["Interface", "Postcognition", "Precognition", "Super-Senses", "Super-Senses", "Super-Senses"]
]};

const originTable ={
    Gender: ["Non-Binary", "Female", "Female", "Female", "Female", "Female", "Male", "Male", "Male", "Male", "Intersex"],
    Ethnicity: ["Native American", "African", "African", "African", "Caucasian", "Caucasian", "Asian", "Asian", "Latino", "Latino", "Mixed"],
    Manner: ["Shy, quiet, or secretive", "Rebellious and antisocial", "Proud, aloof, or arrogant", "Moody and headstrong", "Friendly and outgoing", "Friendly and outgoing", "Serious and sober", "Fun-loving and playful", "Sneaky and underhanded", "Detached and logical", "Anxious, nervous, or jumpy"],
    ValueWho: ["Child", "Family member", "Family member", "Friend", "Self", "Romantic partner", "Pet", "Mentor", "Public figure", "Personal hero", "Group or organization"],
    ValueWhat: ["Wealth", "Honor", "Knowledge", "Honesty", "Friendship", "Friendship", "Home", "Love", "Power", "Fun", "Vengeance"],
    Attitude: ["Every person is a unique and valuable individual", "People are generally good, given the opportunity", "No one really understands me", "People need strong leadership and guidance", "Neutral towards most people", "Neutral towards most people", "Respect is earned, not given.", "People are generally not to be trusted", "No one will ever hurt me again", "People are endless sources of wonder", "People are terrible and few are worth anything"],
    Birthplace: ["Urban", "Urban", "Suburban", "Suburban", "Rural", "Rural"],
    Status: ["Poor", "Poor", "Middle class", "Middle class", "Middle class", "Well-off", "Well-off", "Wealthy", "Wealthy", "Rich", "Rich"],
    Tragedy: [
        ["betrayed by a loved one and lost everything.", "banished or exiled from home.", "murdered.", "targeted by a sinister organization.", "abducted or vanished without a trace.", "killed by a disaster, terrorist attack, or war."],
        ["betrayed by a loved one and lost everything.", "banished or exiled from home.", "murdered.", "targeted by a sinister organization.", "abducted or vanished without a trace.", "killed by a disaster, terrorist attack, or war."],
        ["betrayed by a loved one and lost everything.", "banished or exiled from home.", "murdered.", "targeted by a sinister organization.", "abducted or vanished without a trace.", "killed by a disaster, terrorist attack, or war."],
        ["convicted of a crime and ", "isolated, living ignorant of the existence of other members of the family.", "killed by disease or toxicity.", "witness to a crime and placed in a protection program.", "displaced from home by a disaster or war.", "divided by an inter-family conflict"],
        ["convicted of a crime and ", "isolated, living ignorant of the existence of other members of the family.", "killed by disease or toxicity.", "witness to a crime and placed in a protection program.", "displaced from home by a disaster or war.", "divided by an inter-family conflict"],
        ["convicted of a crime and ", "isolated, living ignorant of the existence of other members of the family.", "killed by disease or toxicity.", "witness to a crime and placed in a protection program.", "displaced from home by a disaster or war.", "divided by an inter-family conflict"]
    ],
    PastExperience: [
        ["like a family member (sibling or parent) to you.", "a current or former romantic interest.", "a current or former colleague or co-worker.", "a friend turned foe or a foe turned friend.", "is powerfully influential or resourceful (or both).", "is an entire organization or faction."],
        ["like a family member (sibling or parent) to you.", "a current or former romantic interest.", "a current or former colleague or co-worker.", "a friend turned foe or a foe turned friend.", "is powerfully influential or resourceful (or both).", "is an entire organization or faction."],
        ["Connection: You made a connection, contact, or earned a favor from somebody.", "Mentor: You met someone willing to teach and mentor you.", "Opportunity: You found a new opportunity, whether it was a new job, a new invention, or a new way of looking at things.", "Promotion: You received a promotion or a general stepup in your career or recognition of your abilities.", "Renown: You have a particular achievement or quality people remember and respect.", "Windfall: You received some material or financial gains."],
        ["Connection: You made a connection, contact, or earned a favor from somebody.", "Mentor: You met someone willing to teach and mentor you.", "Opportunity: You found a new opportunity, whether it was a new job, a new invention, or a new way of looking at things.", "Promotion: You received a promotion or a general stepup in your career or recognition of your abilities.", "Renown: You have a particular achievement or quality people remember and respect.", "Windfall: You received some material or financial gains."],
        ["Framed: You were framed or falsely accused of something you didn't do.", "Illness: You suffered a physical or mental illness, and may even suffer trouble from it still.", "Imprisoned: You were abducted, held hostage, sent to prison, or otherwise held against your will for some reason.", "Infamy: Your reputation took a hit, justly or unjustly, and you might still be trying to live it down or have something to prove.", "Injured: You suffered an injury, and may even have lasting trouble from it, such as a disability or disfigurement.", "Loss: You suffered a personal loss, such as the death of a loved one, a serious financial setback, or personal tragedy."],
        ["Framed: You were framed or falsely accused of something you didn't do.", "Illness: You suffered a physical or mental illness, and may even suffer trouble from it still.", "Imprisoned: You were abducted, held hostage, sent to prison, or otherwise held against your will for some reason.", "Infamy: Your reputation took a hit, justly or unjustly, and you might still be trying to live it down or have something to prove.", "Injured: You suffered an injury, and may even have lasting trouble from it, such as a disability or disfigurement.", "Loss: You suffered a personal loss, such as the death of a loved one, a serious financial setback, or personal tragedy."]
    ]
}

function originStory(){
    var pastExperience = [];
    var character = {gender: "", ethnicity: "", age: 0, manner: "", valueWho: "", valueWhat: "", attitude: "", birthplace: "", status: "", tragedy: "", pastExperience}
    var toHTML = "";

    character.gender = originTable.Gender[roll2()-2];
    character.ethnicity = originTable.Ethnicity[roll2()-2];
    character.manner = originTable.Manner[roll2()-2];
    character.valueWho = originTable.ValueWho[roll2()-2];
    character.valueWhat = originTable.ValueWhat[roll2()-2];
    character.attitude = originTable.Attitude[roll2()-2];
    character.birthplace = originTable.Birthplace[dice()-1];
    character.status = originTable.Status[roll2()-2];

    //Age
    temp = roll2();
    switch(temp){
        case 2:
        case 3:
            character.age = 10+roll2();
            break;
        case 4:
        case 5:
            character.age = 15+roll2();
            break;
        case 6:
        case 7:
        case 8:
            character.age = 20+roll2();
            break;
        case 9:
        case 10:
            character.age = 30+roll2();
            break;
        case 11:
            character.age = 40+roll2();
            break;
        case 12:
            character.age = 50+roll2();
            break;
    }

    //Tragedy
    if(dice()<4){
        if(dice()<5){
            character.tragedy = "One or more family members were ";
        }
        else{
            character.tragedy = "Their whole family was ";
        }
        character.tragedy += originTable.Tragedy[dice()-1][dice()-1];
        if(character.tragedy.includes("convicted of a crime and ")){
            if(dice()<5){
                character.tragedy += "imprisoned.";
            }
            else{
                character.tragedy += "escaped and in hiding.";
            }
        }
    }
    else{
        character.tragedy = "None.";
    }

    //Events
    var eventCount = roll2();
    while((eventCount > (character.age-15))&&(eventCount > 0)){
        eventCount--;
    }
    var i;
    character.pastExperience = [];
    for(i = 0; i < eventCount; i++){
        var temp = dice()
        var temp2 = "<br>Event #"+((i+1).toString())+": "
        if(temp < 3){
            if(dice() < 4){
                temp2 += "Friend: ";
            }
            else{
                temp2 += "Foe: ";
            }
        }
        temp2 += originTable.PastExperience[temp-1][dice()-1];
        character.pastExperience.push(temp2);
    }

    toHTML +="<div class=\"column\">Gender: "+character.gender+"<br>Ethnicity: "+character.ethnicity+"<br>Age: "+character.age.toString()+"<br>Manner: "+character.manner+"<br>Values Who: "+character.valueWho+"<br>Values What: "+character.valueWhat+"<br>Attitude: "+character.attitude+"<br>Birthplace: "+character.birthplace+"<br>Status: "+character.status+"<br>Tragedy: "+character.tragedy+"</div><div class=\"column\">Life Events("+eventCount.toString()+"): ";

    for(i = 0; i < eventCount; i++){
        toHTML += character.pastExperience[i];
    }
    toHTML += "</div>";

    document.getElementById("Origin Story").innerHTML=toHTML;
}

function rollCharacter(){
    //var attributes = {prowess: 0, coordination: 0, strength: 0, intellect: 0, awareness: 0, willpower: 0};
    var powers = [];
    var specialties = [];
    var character = {origin: "", attributes: {prowess: 0, coordination: 0, strength: 0, intellect: 0, awareness: 0, willpower: 0}, powerCount: 0, powers, specialtyCount: 0, specialties, determination: 0, stamina: 0};

    //Step 1: Roll Origin

    var temp = roll2();
    switch(temp){
        case 2:
        case 3:
        case 4:
            character.origin = "Trained";
            break;
        case 5:
        case 6:
            character.origin = "Transformed";
            break;
        case 7:
            character.origin = "Birthright";
            break;
        case 8:
        case 9:
            character.origin = "Gimmick";
            break;
        case 10:
        case 11:
        case 12:
            character.origin = "Unearthly";
            break;
    }

    //Step 2: Roll Attributes

    var i;
    for(i in character.attributes){
        character.attributes[i] = roll2Adjusted();
    }

    //Step 3: Roll powers

    temp = roll2();
    switch(temp){
        case 2:
        case 3:
        case 4:
            character.powerCount = 2;
            break;
        case 5:
        case 6:
        case 7:
            character.powerCount = 3;
            break;
        case 8:
        case 9:
        case 10:
            character.powerCount = 4;
            break;
        case 11:
        case 12:
            character.powerCount = 5;
            break;
    }
    character.powers = [];
    i = 0;
    var tempTable;
    if(document.getElementById("greatPower").checked){
        tempTable = greatPowerTable;
    }
    else{
        tempTable = powerTable;
    }
    for(i=0;i < character.powerCount;i++){
        temp = (roll2());
        roll1 = dice()-1;
        rollB = dice()-1;
        switch(temp){
            case 2:
            case 3:
                character.powers.push(tempTable.Mental[roll1][rollB]+" "+roll2Adjusted().toString());
                break;
            case 4:
            case 5:
                character.powers.push(tempTable.Control[roll1][rollB]+" "+roll2Adjusted().toString());
                break;
            case 6:
                character.powers.push(tempTable.Defensive[roll1][rollB]+" "+roll2Adjusted().toString());
                break;
            case 7:
                character.powers.push(tempTable.Offensive[roll1][rollB]+" "+roll2Adjusted().toString());
                break;
            case 8:
                character.powers.push(tempTable.Movement[roll1][rollB]+" "+roll2Adjusted().toString());
                break;
            case 9:
            case 10:
                character.powers.push(tempTable.Alteration[roll1][rollB]+" "+roll2Adjusted().toString());
                break;
            case 11:
            case 12:
                character.powers.push(tempTable.Sensory[roll1][rollB]+" "+roll2Adjusted().toString());
                break;
        }


    }

    //Step 4: Specialties

    temp = (roll2());
    switch(temp){
        case 2:
        case 3:
        case 4:
            character.specialtyCount=1;
            break;
        case 5:
        case 6:
        case 7:
            character.specialtyCount=2;
            break;
        case 8:
        case 9:
        case 10:
            character.specialtyCount=3;
            break;
        case 11:
        case 12:
            character.specialtyCount=4;
            break;
    }
    character.specialties = [];
    for(i = 0; i < character.specialtyCount; i++){
        temp = [roll1=dice(),rollB=dice()];
        switch(roll1){
            case 1:
                switch(rollB){
                    case 1:
                        character.specialties.push("Aerial Combat");
                        break;
                    case 2:
                        character.specialties.push("Art");
                        break;
                    case 3:
                    case 4:
                        character.specialties.push("Athletics");
                        break;
                    case 5:
                        character.specialties.push("Business");
                        break;
                    case 6:
                        character.specialties.push("Drive");
                        break;
                }
                break;
            case 2:
                switch(rollB){
                    case 1:
                    case 2:
                        character.specialties.push("Investigation");
                        break;
                    case 3:
                        character.specialties.push("Law");
                        break;
                    case 4:
                    case 5:
                        character.specialties.push("Leadership");
                        break;
                    case 6:
                        character.specialties.push("Linguistics");
                        break;
                }
                break;
            case 3:
                switch(rollB){
                    case 1:
                    case 2:
                        character.specialties.push("Martial Arts");
                        break;
                    case 3:
                        character.specialties.push("Medicine");
                        break;
                    case 4:
                    case 5:
                        character.specialties.push("Mental Resistance");
                        break;
                    case 6:
                        character.specialties.push("Military");
                        break;
                }
                break;
            case 4:
                switch(rollB){
                    case 1:
                        character.specialties.push("Occult");
                        break;
                    case 2:
                        character.specialties.push("Performance");
                        break;
                    case 3:
                        character.specialties.push("Pilot");
                        break;
                    case 4:
                    case 5:
                    case 6:
                        character.specialties.push("Power");
                        break;
                }
                break;
            case 5:
                switch(rollB){
                    case 1:
                        character.specialties.push("Psychiatry");
                        break;
                    case 2:
                    case 3:
                        character.specialties.push("Science");
                        break;
                    case 4:
                        character.specialties.push("Sleight of Hand");
                        break;
                    case 5:
                    case 6:
                        character.specialties.push("Stealth");
                        break;
                }
                break;
            case 6:
                switch(rollB){
                    case 1:
                    case 2:
                        character.specialties.push("Technology");
                        break;
                    case 3:
                        character.specialties.push("Underwater Combat");
                        break;
                    case 4:
                    case 5:
                        character.specialties.push("Weapons");
                        break;
                    case 6:
                        character.specialties.push("Wrestling");
                        break;
                }
                break;
        }
    }

    //Step 6: Qualities

    temp = 0;
    i = 0;
    for(i in character.attributes){
        if(character.attributes[i]>6){
            temp++;
        }
    }
    character.determination = (6 - (character.powerCount + temp));

    character.stamina = character.attributes.willpower + character.attributes.strength;

    document.getElementById("Origin").innerHTML=character.origin;

    document.getElementById("Attributes").innerHTML="Prowess: " + character.attributes.prowess.toString() + " (" + rating(character.attributes.prowess) + ")<br>Coordination: " + character.attributes.coordination.toString() + " (" + rating(character.attributes.coordination) + ")<br>Strength: " + character.attributes.strength.toString() + " (" + rating(character.attributes.strength) + ")<br>Intellect: " + character.attributes.intellect.toString() + " (" + rating(character.attributes.intellect) + ")<br>Awareness: " + character.attributes.awareness.toString() + " (" + rating(character.attributes.awareness) + ")<br>Willpower: " + character.attributes.willpower.toString() + " (" + rating(character.attributes.willpower) + ")";

    powersHTML = "";
    for(i = 0; i < character.powerCount; i++){
        var temp2 = character.powers[i].split(' ');
        temp2 = parseInt(temp2.pop());
        powersHTML += character.powers[i] + " (" + rating(temp2) + ")<br>";
    }

    document.getElementById("Powers").innerHTML=powersHTML;

    specialtiesHTML = "";
    for(i = 0; i < character.specialtyCount; i++){
        specialtiesHTML += character.specialties[i] + "<br>";
    }

    document.getElementById("Specialties").innerHTML=specialtiesHTML;

    document.getElementById("Qualities").innerHTML="Determination: "+character.determination.toString()+"<br>Stamina: "+character.stamina.toString();

    return;
}

function roll2Adjusted(){
    var temp = roll2();
    switch(temp){
        case 2:
            return 1;
            break;
        case 3:
            return 2;
            break;
        case 4:
            return 3;
            break;
        case 5:
        case 6:
            return 4;
            break;
        case 7:
        case 8:
            return 5;
            break;
        case 9:
        case 10:
            return 6;
            break;
        case 11:
            return 7;
            break;
        case 12:
            return 8;
            break;
    }
}

function dice(){
    return Math.ceil(Math.random() * 6);
}

function roll2(){
    var temp = (dice()+dice());
    return temp;
}

function rating(number){
    switch(number){
        case 1:
            return "Weak";

        case 2:
            return "Poor";

        case 3:
            return "Average";

        case 4:
            return "Fair";

        case 5:
            return "Good";

        case 6:
            return "Great";

        case 7:
            return "Incredible";

        case 8:
            return "Amazing";

        case 9:
            return "Fantastic";

        case 10:
            return "Supreme";

    }
}
