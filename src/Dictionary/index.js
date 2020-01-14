// import React from 'react';


// TODO: 
// languages need to be converted to object with string display and array of languages
// subraces need to be added 
// separate racial features into their own object for cleaner reference
// justifications: 
// 1. darkvision is repeated multiple times 
// 2. some features allow for spells to be added
// 3. some add extra skill proficiency options, which prob need to be used later

const AppDictionary = {

    'RACE_DATA': [
        {
            id: 1,
            name: 'Aarakocra',
            summary: 'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.',
            asis: [{
                'Dex': 2,
                'Wis': 1
            }],
            movement: 25,
            size: 'Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.',
            languages: ['Common', 'Aarakocra', 'Auran'],
            lifespan: 'Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.',
            alignment: '',
            features: [
                { 'Talons': 'You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.' },
                { 'Flight': 'You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor.' }
            ],
        },
        {
            id: 2,
            name: 'Aasimar',
            summary: 'Aasimar are placed in the world to serve as guardians of law and good. Their patrons expect them to strike at evil, lead by example, and further the cause of justice.',
            asis: [
                { 'Cha': 2 }
            ],
            movement: 30,
            size: 'Aasimar have the same range of height and weight as humans.',
            languages: ['Common', 'Celestial'],
            lifespan: 'Aasimar mature at the same rate as humans, but they can live up to 160 years.',
            alignment: 'Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.',
            features: [
                { 'Darkvision': 60 },
                { 'Celestial Resistance': 'You have resistance to necrotic damage and radiant damage.' },
                { 'Healing Hands': 'As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can’t use it again until you finish a long rest.' },
                { 'Lightbearer': 'You know the light cantrip. Charisma is your spellcasting ability for it.' }
            ],
            subraces: [
                {
                    id: '2a',
                    name: 'Fallen',
                    summary: 'An aasimar who was touched by dark powers as a youth or who turns to evil in early adulthood can become one of the fallen — a group of aasimar whose inner light has been replaced by shadow.',
                    asis: [
                        { 'Str': 1 },
                    ],
                    features: [
                        { 'Necrotic Shroud': 'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must each succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level. Once you use this trait, you can’t use it again until you finish a long rest.' },
                    ],
                },
                {
                    id: '2b',
                    name: 'Protector',
                    summary: 'Protector aasimar are charged by the powers of good to guard the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness. From a young age, a protector aasimar receives advice and directives that urge to stand against evil.',
                    asis: [
                        { 'Wis': 1 },
                    ],
                    features: [
                        { 'Radiant Soul': 'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can’t use it again until you finish a long rest.' },
                    ],
                },
                {
                    id: '2c',
                    name: 'Scourge',
                    summary: 'Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil — a desire that is, at its best, unflinching and, at its worst, all-consuming. Many scourge aasimar wear masks to block out the world and focus on containing this power, unmasking themselves only in battle.',
                    asis: [
                        { 'Con': 1 },
                    ],
                    features: [
                        { 'Radiant Consumption': 'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can’t use it again until you finish a long rest.' },
                    ],
                },
                {
                    id: '2d',
                    name: 'Variant',
                    summary: 'This aasimar variant originally appeared in the Dungeon Master\'s Guide as an example for creating your own races. Whereas tieflings have fiendish blood in their veins, aasimar are the descendants of celestial beings. These folk generally appear as glorious humans with lustrous hair, flawless skin, and piercing eyes. Aasimar often attempt to pass as humans in order to right wrongs and defend goodness on the Material Plane without drawing undue attention to their celestial heritage. They strive to fit into society, although they usually rise to the top, becoming revered leaders and honorable heroes.',
                    asis: [
                        { 'Wis': 1 },
                    ],
                    features: [
                        { 'Celestial Legacy': 'You know the light cantrip. Once you reach 3rd level, you can cast the lesser restoration spell once with this trait, and you regain the ability to do so when you finish a long rest. Once you reach 5th level, you can cast the daylight spell once with this trait as a 3rd-level spell, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.' },
                    ],
                },
            ]
        },
        {
            id: 3,
            name: 'Bugbear',
            summary: 'Bugbears feature in the nightmare tales of many races — great, hairy beasts that creep through the shadows as quiet as cats.',
            asis: [
                { 'Str': 2 },
                { 'Dex': 1 },
            ],
            movement: 30,
            size: 'Bugbears are between 6 and 8 feet tall and weigh between 250 and 350 pounds. Your size is Medium.',
            languages: ['Common', 'Goblin'],
            lifespan: 'Bugbears reach adulthood at age 16 and live up to 80 years.',
            alignment: 'Bugbears endure a harsh existence that demands each of them to remain self-sufficient, even at the expense of their fellows. They tend to be chaotic evil.',
            features: [
                { 'Darkvision': 60 },
                { 'Long-Limbed': 'When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.' },
                { 'Powerful Build': 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.' },
                { 'Sneaky': 'You are proficient in the Stealth skill.' },
                { 'Surprise Attack': 'If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage to it. You can use this trait only once per combat.' },
            ],
        },
        {
            id: 4,
            name: 'Changeling',
            summary: 'A changeling can shift its face and form with a thought as a form of artistic and emotional expression.',
            asis: [
                { 'Cha': 2 },
                { 'ANY': 1 }
            ],
            movement: 30,
            size: 'Your size is Medium.',
            languages: ['Common', 2],
            lifespan: "Changelings mature slightly faster than humans but share a similar lifespan—typically a century or less. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans.",
            alignment: 'Changelings tend toward pragmatic neutrality, and few changelings embrace evil.',
            features: [
                { 'Changeling Instincts': 'You gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, and Persuasion.' },
                { 'Shapechanger': 'As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can’t duplicate the appearance of a creature you’ve never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren’t changed by this trait. You stay in the new form until you use an action to revert to your true form or until you die.' },
            ],
            subraces: []
        },
        {
            id: 5,
            name: 'Dragonborn',
            summary: 'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
            asis: [
                { 'Str': 2 },
                { 'Cha': 1 },
            ],
            movement: 30,
            size: 'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
            languages: ['Common', 'Draconic'],
            lifespan: 'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
            alignment: 'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains.',
            features: [
                { 'Draconic Ancestry': 'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.' },
                { 'Breath Weapon': 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.' },
                { 'Damage Resistance': 'You have resistance to the damage type associated with your draconic ancestry.' },
            ],
            subraces: []
        },
        {
            id: 6,
            name: 'Dwarf',
            summary: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
            asis: [
                { 'Con': 1 }
            ],
            movement: 25,
            size: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
            languages: ['Common', 'Dwarvish'],
            lifespan: 'Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.',
            alignment: 'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
            features: [
                { 'Darkvision': 60 },
                { 'Dwarven Resilience': 'You have advantage on saving throws against poison, and you have resistance against poison damage.' },
                { 'Dwarven Combat Training': 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.' },
                { 'Tool Proficiency': 'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.' },
                { 'Stonecunning': 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.' },
            ],
            subraces: [
                {
                    id: '6a',
                    name: 'Gray Dwarf (Duergar)',
                    summary: 'The gray dwarves, or duergar, live deep in the Underdark. After delving deeper than any other dwarves, they were enslaved by mind flayers for eons. Although they eventually won their freedom, these grim, ashen-skinned dwarves now take slaves of their own and are as tyrannical as their former masters. Physically similar to other dwarves in some ways, duergar are wiry and lean, with black eyes and bald heads, with the males growing long, unkempt, gray beards. Duergar value toil above all else. Showing emotions other than grim determination or wrath is frowned on in their culture, but they can sometimes seem joyful when at work. They have the typical dwarven appreciation for order, tradition, and impeccable craftsmanship, but their goods are purely utilitarian, disdaining aesthetic or artistic value. Few duergar become adventurers, fewer still on the surface world, because they are a hidebound and suspicious race. Those who leave their subterranean cities are usually exiles. Check with your Dungeon Master to see if you can play a gray dwarf character. Duergar see themselves as the true manifestation of dwarven ideals, clever enough not to be taken in by the treacherous deceptions of Moradin and his false promises. Their period of enslavement and the revolt against the mind flayers led by their god, Laduguer, purged the influence of the other dwarven gods from their souls and thus made them into the superior race. Duergar have no appreciation for beauty, that ability having been erased from their minds by the mind flayers long ago and any thought of recapturing it obliterated by Moradin’s betrayal. The duergar lead bleak, grim lives devoid of happiness or satisfaction, but they see that as their defining strength — the root of duergar pride, as it were — rather than a drawback to be corrected.',
                    asis: [
                        { 'Con': 2 },
                    ],
                    features: [
                        { 'Superior Darkvision': 120 },
                        { 'Extra Language': 'You can speak, read, and write Undercommon.' },
                        { 'Duergar Resilience': 'You have advantage on saving throws against illusions and against being charmed or paralyzed.' },
                        { 'Duergar Magic': 'When you reach 3rd level, you can cast the enlarge/reduce spell on yourself once with this trait, using only the spell’s enlarge option. When you reach 5th level, you can cast the invisibility spell on yourself once with this trait. You don’t need material components for either spell, and you can’t cast them while you’re in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.' },
                        { 'Sunlight Sensitivity': 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.' }
                    ],
                },
                {
                    id: '6b',
                    name: 'Hill',
                    summary: 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.',
                    asis: [
                        { 'Wis': 1 },
                    ],
                    features: [
                        { 'Dwarf Toughness': 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.' },
                    ],
                },
                {
                    id: '6c',
                    name: 'Mountain',
                    summary: 'As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.',
                    asis: [
                        { 'Str': 2 },
                    ],
                    features: [
                        { 'Dwarven Armor Training': 'You have proficiency with light and medium armor.' },
                    ],
                },
                // {
                //     id: 4,
                //     name: 'Mark of Warding',
                //     summary: '',
                //     asis: [
                //         {'': ''},
                //     ],
                //     features: [
                //         {'': ''},
                //     ],
                // },
            ]
        },
        {
            id: 7,
            name: 'Elf',
            summary: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
            asis: [
                { 'Dex': 2 },
            ],
            movement: 30,
            size: 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
            languages: ['Common', 'Elvish'],
            lifespan: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
            alignment: 'Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.',
            features: [
                { 'Darkvision': 60 },
                { 'Keen Senses': 'You have proficiency in the Perception skill.' },
                { 'Fey Ancestry': 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.' },
                { 'Trance': 'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.' }
            ],
            subraces: [
                {
                    id: '7a',
                    name: 'Dark (Drow)',
                    summary: 'Descended from an earlier subrace of elves, the drow were banished from the surface world for following the goddess Lolth down the path of evil. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves, the drow have skin that resembles charcoal or obsidian, as well as stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for white) in shades of lilac, silver, pink, red, and blue. They tend to be smaller and thinner than most elves. Drow adventurers are rare. Check with your Dungeon Master to see if you can play one.',
                    asis: [
                        { 'Cha': 1 },
                    ],
                    features: [
                        { 'Superior Darkvision': 120 },
                        { 'Sunlight Sensitivity': 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.' },
                        { 'Drow Magic': 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.' },
                        { 'Drow Weapon Training': 'You have proficiency with rapiers, shortswords, and hand crossbows.' },
                    ],
                },
                {
                    id: '7b',
                    name: 'Eladrin',
                    summary: 'Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic. An eladrin is associated with one of the four seasons and has coloration reminiscent of that season, which can also affect the eladrin’s mood: Autumn is the season of peace and goodwill, when summer’s harvest is shared with all. Winter is the season of contemplation and dolor, when the vibrant energy of the world slumbers. Spring is the season of cheerfulness and celebration, marked by merriment as winter’s sorrow passes. Summer is the season of boldness and aggression, a time of unfettered energy. Some eladrin remain associated with a particular season for their entire lives, whereas other eladrin transform, adopting characteristics of a new season. When finishing a long rest, any eladrin can change their season. An eladrin might choose the season that is present in the world or perhaps the season that most closely matches the eladrin’s current emotional state. For example, an eladrin might shift to autumn if filled with contentment, another eladrin could change to winter if plunged into sorrow, still another might be bursting with joy and become an eladrin of spring, and fury might cause an eladrin to change to summer. The following tables offer personality suggestions for eladrin of each season. You can roll on the tables or use them as inspiration for characteristics of your own.',
                    asis: [
                        { 'Cha': 1 },
                    ],
                    features: [
                        { 'Fey Step: Autumn': 'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier: Autumn. Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it.' },
                        { 'Fey Step: Winter': 'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier: ' },
                        { 'Fey Step: Spring': 'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier: ' },
                        { 'Fey Step: Summer': 'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier: ' },
                    ],
                },
                {
                    id: '7c',
                    name: 'High Elf',
                    summary: 'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.',
                    asis: [
                        { 'Int': 1 },
                    ],
                    features: [
                        { 'Elf Weapon Training': 'You have proficiency with the longsword, shortsword, shortbow, and longbow.' },
                        { 'Cantrip': 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.' },
                        { 'Extra Language': 1 }
                    ],
                },
                {
                    id: '7d',
                    name: 'Sea Elf',
                    summary: 'Sea elves fell in love with the wild beauty of the ocean in the earliest days of the multiverse. While other elves traveled from realm to realm, the sea elves navigated the deepest currents and explored the waters across a hundred worlds. Today, they live in small, hidden communities in the ocean shallows and on the Elemental Plane of Water.',
                    asis: [
                        { 'Con': 1 },
                    ],
                    features: [
                        { 'Sea Elf Training': 'You have proficiency with the spear, trident, light crossbow, and net.' },
                        { 'Child of the Sea': 'You have a swimming speed of 30 feet, and you can breathe air and water.' },
                        { 'Friend of the Sea': 'Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.' },
                        { 'Languages': 'You can speak, read, and write Aquan.' }
                    ],
                },
                {
                    id: '7e',
                    name: 'Shadar-kai',
                    summary: 'Sworn to the Raven Queen’s service, the mysterious shadar-kai venture into the Material Plane from the Shadowfell to advance her will. Once they were fey like the rest of their elven kin, and now they exist in a strange state between life and death. Eladrin and shadar-kai are like reflections of each other: one bursting with emotion, the other nearly devoid of it.',
                    asis: [
                        { 'Con': 1 },
                    ],
                    features: [
                        { 'Necrotic Resistance': 'You have resistance to necrotic damage.' },
                        { 'Blessing of the Raven Queen': 'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.' },
                    ],
                },
                {
                    id: '7f',
                    name: 'Wood Elf',
                    summary: 'As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. Wood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.',
                    asis: [
                        { 'Wis': 1 },
                    ],
                    features: [
                        { 'Fleet of Foot': 'Your base walking speed increases to 35 feet.' },
                        { 'Mask of the Wild': 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.' }
                    ],
                },
                {
                    id: '7g',
                    name: 'Valenor Wood Elf',
                    summary: 'Elven culture began on the distant continent of Xen’drik. Tens of thousands of years ago, the elves rose up against the giants who ruled that land. Ultimately, the elves fled from Xen’drik and settled the island nation of Aerenal. There they split into two distinct cultures: the introspective Aereni and the warlike Tairnadal. While neither of these cultures have much interest in human activities, a small number of elves have immigrated to Khorvaire over the years and have integrated with the cultures of the Five Nations. As a whole, elves are driven by tradition and respect for the past. Where humans value innovation, elves strive to perfect the techniques of their ancestors. With centuries to devote to their studies, the elves are masters of their chosen crafts; at the same time, their society has changed very little over the last five thousand years, while Khorvaire is constantly evolving. As an elf, consider your relationship with the past. Do you value the traditions of your ancestors? Or do you fear that your people are too mired in the past, and need to find a way forward? Elves of Valenar::: Your people are dedicated to the arts of war. Millenia ago, your ancestors fought an epic war against mighty giants. When they came to Khorvaire, they battled the champions of the goblin empire. The greatest heroes of those struggles live on after death, known as the patron ancestors. When you became an adult, one of the patron ancestors formed a bond with you. Now it is your duty to follow in the footsteps of your patron, living your life as they lived theirs, allowing this champion to live on through you. This is why your people constantly seek out conflict; you need to find challenges worthy of a hero. In creating a Valenar, think about your patron ancestor. Your class should reflect their class; if you’re a wizard, your ancestor was likely a legendary archmage. If you’re a ranger, was your ancestor a famous blademaster, or a stealthy hunter? Was your ancestor chivalrous or merciless? Bold or clever? Whatever their nature, it’s your duty to follow their example. Is this something you proudly embrace, or do you resist it? Each patron ancestor is tied to many Valenar: do you have a particular rival who channels the same ancestor, or one who channels a rival of your ancestor? It’s also important to think about why you are traveling with a group of player characters instead of serving in a Valenar warband. Are you driven by visions from your patron ancestor? Are you pursuing an epic quest that mirrors their legendary deeds? Do you seek vengeance for the death of a friend or ally? Or have you turned away from your people, either by choice or because of the actions of a rival?',
                    asis: [
                        { 'Wis': 1 },
                    ],
                    features: [
                        { 'Valenar Elf': 'A Valenar elf gains proficiency with the scimitar, double scimitar, longbow, and shortbow.' },
                        { 'Fleet of Foot': 'Your base walking speed increases to 35 feet.' },
                        { 'Mask of the Wild': 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.' }
                    ],
                },
                {
                    id: '7h',
                    name: 'Valenor High Elf',
                    summary: 'Elven culture began on the distant continent of Xen’drik. Tens of thousands of years ago, the elves rose up against the giants who ruled that land. Ultimately, the elves fled from Xen’drik and settled the island nation of Aerenal. There they split into two distinct cultures: the introspective Aereni and the warlike Tairnadal. While neither of these cultures have much interest in human activities, a small number of elves have immigrated to Khorvaire over the years and have integrated with the cultures of the Five Nations. As a whole, elves are driven by tradition and respect for the past. Where humans value innovation, elves strive to perfect the techniques of their ancestors. With centuries to devote to their studies, the elves are masters of their chosen crafts; at the same time, their society has changed very little over the last five thousand years, while Khorvaire is constantly evolving. As an elf, consider your relationship with the past. Do you value the traditions of your ancestors? Or do you fear that your people are too mired in the past, and need to find a way forward? Elves of Valenar::: Your people are dedicated to the arts of war. Millenia ago, your ancestors fought an epic war against mighty giants. When they came to Khorvaire, they battled the champions of the goblin empire. The greatest heroes of those struggles live on after death, known as the patron ancestors. When you became an adult, one of the patron ancestors formed a bond with you. Now it is your duty to follow in the footsteps of your patron, living your life as they lived theirs, allowing this champion to live on through you. This is why your people constantly seek out conflict; you need to find challenges worthy of a hero. In creating a Valenar, think about your patron ancestor. Your class should reflect their class; if you’re a wizard, your ancestor was likely a legendary archmage. If you’re a ranger, was your ancestor a famous blademaster, or a stealthy hunter? Was your ancestor chivalrous or merciless? Bold or clever? Whatever their nature, it’s your duty to follow their example. Is this something you proudly embrace, or do you resist it? Each patron ancestor is tied to many Valenar: do you have a particular rival who channels the same ancestor, or one who channels a rival of your ancestor? It’s also important to think about why you are traveling with a group of player characters instead of serving in a Valenar warband. Are you driven by visions from your patron ancestor? Are you pursuing an epic quest that mirrors their legendary deeds? Do you seek vengeance for the death of a friend or ally? Or have you turned away from your people, either by choice or because of the actions of a rival?',
                    asis: [
                        { 'Int': 1 },
                    ],
                    features: [
                        { 'Valenar Elf': 'A Valenar elf gains proficiency with the scimitar, double scimitar, longbow, and shortbow.' },
                        { 'Cantrip': 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.' },
                        { 'Extra Language': 1 }
                    ],
                },
            ]
        },
        {
            id: 8,
            name: 'Firbolg',
            summary: 'Firbolg tribes cloister in remote forest strongholds, preferring to spend their days in quiet harmony with the woods.',
            asis: [
                { 'Wis': 2 },
                { 'Str': 1 },
            ],
            movement: 30,
            size: 'Firbolg are between 7 and 8 feet tall and weigh between 240 and 300 pounds. Your size is Medium.',
            languages: ['Common', 'Elvish', 'Giant'],
            lifespan: 'As humanoids related to the fey, firbolg have long lifespans. A firbolg reaches adulthood around 30, and the oldest of them can live for 500 years.',
            alignment: 'As people who follow the rhythm of nature and see themselves as its caretakers, firbolg are typically neutral good. Evil firbolg are rare and are usually the sworn enemies of the rest of their kind.',
            features: [
                { 'Firbolg Magic': 'You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can’t cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves.' },
                { 'Hidden Step': 'As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can’t use it again until you finish a short or long rest.' },
                { 'Powerful Build': 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.' },
                { 'Speech of Beast and Leaf': 'You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.' },

            ],
            subraces: []
        },
        {
            id: 9,
            name: 'Genasi',
            summary: 'Genasi carry the power of the elemental planes of air, earth, fire, and water in their blood.',
            asis: [
                { 'Con': 2 },
            ],
            movement: 30,
            size: 'Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.',
            languages: ['Common', 'Primordial'],
            lifespan: 'Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.',
            alignment: 'Independent and self-reliant, genasi tend toward a neutral alignment.',
            features: [],
            subraces: [
                {
                    id: '9a',
                    name: 'Air',
                    summary: 'As an air genasi, you are descended from the djinn. As changeable as the weather, your moods shift from calm to wild and violent with little warning, but these storms rarely last long. Air genasi typically have light blue skin, hair, and eyes. A faint but constant breeze accompanies them, tousling the hair and stirring the clothing. Some air genasi speak with breathy voices, marked by a faint echo. A few display odd patterns in their flesh or grow crystals from their scalps.',
                    asis: [
                        { 'Dex': 1 },
                    ],
                    features: [
                        { 'Unending Breath': 'You can hold your breath indefinitely while you’re not incapacitated.' },
                        { 'Mingle with the Wind': 'You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.' }
                    ],
                },
                {
                    id: '9b',
                    name: 'Earth',
                    summary: 'As an earth genasi, you are descended from the cruel and greedy dao, though you aren’t necessarily evil. You have inherited some measure of control over earth, reveling in superior strength and solid power. You tend to avoid rash decisions, pausing long enough to consider your options before taking action. Elemental earth manifests differently from one individual to the next. Some earth genasi always have bits of dust falling from their bodies and mud clinging to their clothes, never getting clean no matter how often they bathe. Others are as shiny and polished as gemstones, with skin tones of deep brown or black, eyes sparkling like agates. Earth genasi can also have smooth metallic flesh, dull iron skin spotted with rust, a pebbled and rough hide, or even a coating of tiny embedded crystals. The most arresting have fissures in their flesh, from which faint light shines.',
                    asis: [
                        { 'Str': 1 },
                    ],
                    features: [
                        { 'Earth Walk': 'You can move across difficult terrain made of earth or stone without expending extra movement.' },
                        { 'Merge with Stone': 'You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.' },
                    ],
                },
                {
                    id: '9c',
                    name: 'Fire',
                    summary: 'As a fire genasi, you have inherited the volatile mood and keen mind of the efreet. You tend toward impatience and making snap judgments. Rather than hide your distinctive appearance, you exult in it. Nearly all fire genasi are feverishly hot as if burning inside, an impression reinforced by flaming red, coal- black, or ash-gray skin tones. The more human-looking have fiery red hair that writhes under extreme emotion, while more exotic specimens sport actual flames dancing on their heads. Fire genasi voices might sound like crackling flames, and their eyes flare when angered. Some are accompanied by the faint scent of brimstone.',
                    asis: [
                        { 'Int': 1 },
                    ],
                    features: [
                        { 'Darkvision': 60 },
                        { 'Fire Resistance': 'You have resistance to fire damage.' },
                        { 'Reach to the Blaze': 'You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.' }
                    ],
                },
                {
                    id: '9d',
                    name: 'Water',
                    summary: 'The lapping of waves, the spray of sea foam on the wind, the ocean depths—all of these things call to your heart. You wander freely and take pride in your independence, though others might consider you selfish. Most water genasi look as if they just finished bathing, with beads of moisture collecting on their skin and hair. They smell of fresh rain and clean water. Blue or green skin is common, and most have somewhat overlarge eyes, blue-black in color. A water genasi’s hair might float freely, swaying and waving as if underwater. Some have voices with undertones reminiscent of whale song or trickling streams.',
                    asis: [
                        { 'Wis': 1 },
                    ],
                    features: [
                        { 'Acid Resistance': 'You have resistance to acid damage.' },
                        { 'Amphibious': 'You can breathe air and water.' },
                        { 'Swim Speed': 30 },
                        { 'Call to the Wave': 'You know the shape water cantrip. When you reach 3rd level, you can cast the create or destroy water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.' },
                    ],
                },
            ]
        },
        {
            id: 10,
            name: 'Gith',
            summary: 'Long ago, the gith rose up to overthrow the mind flayers that held them in servitude, but two factions arose that remain bitter enemies today.',
            asis: [
                { 'Int': 1 }
            ],
            movement: 30,
            size: 'Gith are taller and leaner than humans, with most a slender 6 feet in height.',
            languages: ['Common', 'Gith'],
            lifespan: 'Gith reach adulthood in their late teens and live for about a century.',
            alignment: 'Githyanki tend toward lawful evil. They are aggressive and arrogant, and they remain the faithful servants of their lich-queen, Vlaakith. Renegade githyanki tend toward chaos.',
            features: [],
            subraces: [
                {
                    id: '10a',
                    name: 'Githyanki',
                    summary: 'The brutal githyanki are trained from birth as warriors.',
                    asis: [
                        { 'Str': 2 },
                    ],
                    features: [
                        { 'Decadent Mastery': 'You learn one language of your choice, and you are proficient with one skill or tool of your choice. In the timeless city of Tu’narath, githyanki have bountiful time to master odd bits of knowledge.' },
                        { 'Martial Prodigy': 'You are proficient with light and medium armor and with shortswords, longswords, and greatswords.' },
                        { 'Githyanki Psionics': 'You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait. When you reach 3rd level, you can cast the jump spell once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the misty step spell once with this trait, and you regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells. When you cast them with this trait, they don’t require components.' },
                    ],
                },
                {
                    id: '10b',
                    name: 'Githzerai',
                    summary: 'In their fortresses within Limbo, the githzerai hone their minds to a razor’s edge',
                    asis: [
                        { 'Wis': 2 },
                    ],
                    features: [
                        { 'Mental Discipline': 'You have advantage on saving throws against the charmed and frightened conditions. Under the tutelage of monastic masters, githzerai learn to govern their own minds.' },
                        { 'Githzerai Psionics': 'You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait. When you reach 3rd level, you can cast the shield spell once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect thoughts spell once with this trait, and you regain the ability to do so when you finish a long rest. Wisdom is your spellcasting ability for these spells. When you cast them with this trait, they don’t require components' },
                    ],
                },
            ]
        },
        {
            id: 11,
            name: 'Gnome',
            summary: 'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.',
            asis: [
                { 'Int': 2 },
            ],
            movement: 25,
            size: 'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
            languages: ['Common', 'Gnomish'],
            lifespan: '',
            alignment: 'Svirfneblin believe that survival depends on avoiding entanglements with other creatures and not making enemies, so they favor neutral alignments. They rarely wish others ill, and they are unlikely to take risks on behalf of others.',
            features: [
                { 'Darkvision': 60 },
                { 'Gnome Cunning': 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.' },
            ],
            subraces: [
                {
                    id: '11a',
                    name: 'Deep Gnome',
                    summary: 'Forest gnomes and rock gnomes are the gnomes most commonly encountered in the lands of the surface world. There is another subrace of gnomes rarely seen by any surface-dweller: deep gnomes, also known as svirfneblin. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins.',
                    asis: [
                        { 'Dex': 1 },
                    ],
                    features: [
                        { 'Age': 'Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time.' },
                        { 'Alignment': '' },
                        { 'Superior Darkvision': 120 },
                        { 'Stone Camouflage': 'You have advantage on Dexterity (stealth) checks to hide in rocky terrain.' },
                        { 'Languages': 'Undercommon' }
                    ],
                },
                {
                    id: '11b',
                    name: 'Forest Gnome',
                    summary: 'As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.',
                    asis: [
                        { 'Dex': 1 },
                    ],
                    features: [
                        { 'Natural Illusionist': 'You know the minor illusion cantrip. Intelligence is your spellcasting ability for it' },
                        { 'Speak with Small Beasts': 'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.' },
                    ],
                },
                {
                    id: '11c',
                    name: 'Rock Gnome',
                    summary: 'As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.',
                    asis: [
                        { 'Con': 1 },
                    ],
                    features: [
                        { 'Artificer\'s Lore': 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.' },
                        { 'Tinker': 'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action. Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.' },
                    ],
                },
                // {
                //     id: 4,
                //     name: 'Mark of Scribing',
                //     summary: '',
                //     asis: [
                //         { '': ' },
                //     ],
                //     features: [
                //         {'': ''},
                //         {'': ''},
                //     ],
                // },
            ]
        },
        {
            id: 12,
            name: 'Goblin',
            summary: 'Goblins occupy an uneasy place in a dangerous world, and they react by lashing out at any creatures they believe they can bully.',
            asis: [
                { 'Dex': 2 },
                { 'Con': 1 }
            ],
            movement: 30,
            size: 'Goblins are between 3 and 4 feet tall and weigh between 40 and 80 pounds. Your size is Small.',
            languages: ['Common', 'Goblin'],
            lifespan: 'Goblins reach adulthood at age 8 and live up to 60 years.',
            alignment: 'Goblins are typically neutral evil, as they care only for their own needs. A few goblins might tend toward good or neutrality, but only rarely.',
            features: [
                { 'Darkvision': 60 },
                { 'Fury of the Small': 'When you damage a creature with an attack or a spell and the creature’s size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can’t use it again until you finish a short or long rest.' },
                { 'Nimble Escape': 'You can take the Disengage or Hide action as a bonus action on each of your turns.' },
            ],
            subraces: []
        },
        {
            id: 13,
            name: 'Goliath',
            summary: 'Strong and reclusive, every day brings a new challenge to a goliath.',
            asis: [
                { 'Str': 2 },
                { 'Con': 1 },
            ],
            movement: 30,
            size: 'Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds. Your size is Medium.',
            languages: ['Common', 'Giant'],
            lifespan: 'Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.',
            alignment: 'Goliath society, with its clear roles and tasks, has a strong lawful bent. The goliath sense of fairness, balanced with an emphasis on self- sufficiency and personal accountability, pushes them toward neutrality.',
            features: [
                { 'Natural Athlete': 'You have proficiency in the Athletics skill.' },
                { 'Stone\'s Endurance': 'You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest.' },
                { 'Powerful Build': 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.' },
                { 'Mountain Born': 'You’re acclimated to high altitude, including elevations above 20,000 feet. You’re also naturally adapted to cold climates, as described in chapter 5 of the Dungeon Master’s Guide.' },
            ],
            subraces: [],
        },
        {
            id: 14,
            name: 'Half-elf',
            summary: 'Half-elves combine what some say are the best qualities of their elf and human parents.',
            asis: [
                { 'Cha': 2 },
                { 'ANY': 1 },
                { 'ANY': 1 },
            ],
            movement: 30,
            size: 'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.',
            languages: ['Common', 'Elvish', 1],
            lifespan: 'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
            alignment: 'Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.',
            features: [
                { 'Darkvision': 60 },
                { 'Fey Ancestry': 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.' },
                { 'Skill Versatility': 'You gain proficiency in two skills of your choice.' },
            ],
            subraces: []
        },
        {
            id: 15,
            name: 'Half-orc',
            summary: 'Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.',
            asis: [
                { 'Str': 2 },
                { 'Con': 1 },
            ],
            movement: 30,
            size: 'Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.',
            languages: ['Common', 'Orc'],
            lifespan: 'Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
            alignment: 'Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.',
            features: [
                { 'Darkvision': 60 },
                { 'Menacing': 'You gain proficiency in the Intimidation skill.' },
                { 'Relentless Endurance': 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.' },
                { 'Savage Attacks': 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.' },
            ],
            subraces: []
        },
        {
            id: 16,
            name: 'Halfling',
            summary: 'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.',
            asis: [
                { 'Dex': 2 }
            ],
            movement: 25,
            size: 'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
            languages: ['Common', "Halfling"],
            lifespan: 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
            alignment: 'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
            features: [
                { 'Lucky': 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.' },
                { 'Brave': 'You have advantage on saving throws against being frightened.' },
                { 'Halfling Nimbleness': 'You can move through the space of any creature that is of a size larger than yours.' },
            ],
            subraces: [
                {
                    id: '16a',
                    name: 'Ghostwise Halfling',
                    summary: 'Ghostwise halflings trace their ancestry back to a war among halfling tribes that sent their ancestors into flight from Luiren. Ghostwise halflings are the rarest of the hin, found only in the Chondalwood and a few other isolated forests, clustered in tight-knit clans. Many ghostwise clans select a natural landmark as the center of their territory, and members carry a piece of that landmark with them at all times. Clan warriors known as nightgliders bond with and ride giant owls as mounts. Because these folk are clannish and mistrustful of outsiders, ghostwise halfling adventurers are rare. Ask your DM if you can play a member of this subrace',
                    asis: [
                        { 'Wis': 1 },
                    ],
                    features: [
                        { 'Silent Speech': 'You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.' },
                    ],
                },
                {
                    id: '16b',
                    name: 'Lightfoot Halfling',
                    summary: 'As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.',
                    asis: [
                        { 'Cha': 1 },
                    ],
                    features: [
                        { 'Naturally Stealthy': 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.' },
                    ],
                },
                {
                    id: '16c',
                    name: 'Stout Halfling',
                    summary: 'As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.',
                    asis: [
                        { 'Con': 1 },
                    ],
                    features: [
                        { 'Stout Resilience': 'You have advantage on saving throws against poison, and you have resistance against poison damage.' },
                    ],
                },
            ]
        },
        {
            id: 17,
            name: 'Hobgoblin',
            summary: 'War is the lifeblood of hobgoblins. Its glories are the dreams that inspire them. Its horrors don’t feature in their nightmares.',
            asis: [
                { 'Con': 2 },
                { 'Int': 1 }
            ],
            movement: 30,
            size: 'Hobgoblins are between 5 and 6 feet tall and weigh between 150 and 200 pounds. Your size is Medium.',
            languages: ['Common', 'Goblin'],
            lifespan: 'Hobgoblins mature at the same rate as humans and have lifespans similar in length to theirs.',
            alignment: 'Hobgoblin society is built on fidelity to a rigid, unforgiving code of conduct. As such, they tend toward lawful evil.',
            features: [
                { 'Darkvision': 60 },
                { 'Martial Training': 'You are proficient with two martial weapons of your choice and with light armor.' },
                { 'Saving Face': 'Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can’t use it again until you finish a short or long rest.' },
            ],
            subraces: []
        },
        {
            id: 18,
            name: 'Human',
            summary: 'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
            asis: [
                { 'Str': 1 },
                { 'Dex': 1 },
                { 'Con': 1 },
                { 'Int': 1 },
                { 'Wis': 1 },
                { 'Cha': 1 }
            ],
            movement: 30,
            size: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
            languages: ['Common', 1],
            lifespan: 'Humans reach adulthood in their late teens and live less than a century.',
            alignment: 'Humans tend toward no particular alignment. The best and the worst are found among them.',
            features: [],
            subraces: []
        },
        {
            id: 19,
            name: 'Human Variant',
            summary: 'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds. If your campaign uses the optional feat rules from the Player’s Handbook, your Dungeon Master might allow these variant traits, all of which replace the human’s Ability Score Increase trait.',
            asis: [
                { 'ANY': 2 }
            ],
            movement: 30,
            size: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
            languages: ["Common", 1],
            lifespan: 'Humans reach adulthood in their late teens and live less than a century.',
            alignment: 'Humans tend toward no particular alignment. The best and the worst are found among them.',
            features: [
                { 'Feat': "You gain one feat of your choice." }
            ],
            subraces: []
        },
        {
            id: 20,
            name: 'Kalashtar',
            summary: 'The kalashtar are a compound people created from the union of humanity and renegade spirits from the plane of dreams.',
            asis: [
                { 'Wis': 2 },
                { 'Cha': 1 }
            ],
            movement: 30,
            size: 'Your size is Medium.',
            languages: ['Common', 'Quori', 1],
            lifespan: 'Kalashtar mature and age at the same rate as humans.',
            alignment: 'The noble spirit tied to a kalashtar drives it toward lawful and good behavior. Most kalashtar combine strong self-discipline with compassion for all beings, but some kalashtar resist the virtuous influence of their spirit.',
            features: [
                { 'Dual Mind': 'You have advantage on all Wisdom saving throws.' },
                { 'Mental Discipline': 'You have resistance to psychic damage.' },
                { 'Mind Link': 'You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level. You don’t need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language. When you’re using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait’s range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it.' },
                { 'Severed From Dreams': 'Kalashtar sleep, but they don’t connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like dream, but not to spells and other magical effects that put you to sleep, like sleep.' }
            ],
            subraces: []
        },
        {
            id: 21,
            name: 'Kenku',
            summary: 'Haunted by an ancient crime that robbed them of their wings, the kenku wander the world as vagabonds and burglars who live at the edge of human society.',
            asis: [
                { 'Dex': 2 },
                { 'Wis': 1 }
            ],
            movement: 30,
            size: 'Kenku are around 5 feet tall and weigh between 90 and 120 pounds. Your size is Medium.',
            languages: ['Common', 'Auran'],
            lifespan: 'Kenku have shorter lifespans than humans. They reach maturity at about 12 years old and can live to 60.',
            alignment: 'Kenku are chaotic creatures, rarely making enduring commitments, and they care mostly for preserving their own hides. They are generally chaotic neutral in outlook.',
            features: [
                { 'Expert Forgery': 'You can duplicate other creatures’ handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects.' },
                { 'Kenku Training': 'You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.' },
                { 'Mimicry': 'You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check. You can speak only by using your Mimicry trait.' },
            ],
            subraces: []
        },
        {
            id: 22,
            name: 'Kobold',
            summary: 'Kobolds are typically timid and shy away from conflict, but they are dangerous and vicious if cornered.',
            asis: [
                { 'Dex': 2 },
                { 'Str': -2 }
            ],
            movement: 30,
            size: 'Kobolds are between 2 and 3 feet tall and weigh between 25 and 35 pounds. Your size is Small.',
            languages: ['Common', 'Draconic'],
            lifespan: 'Kobolds reach adulthood at age 6 and can live up to 120 years but rarely do so.',
            alignment: 'Kobolds are fundamentally selfish, making them evil, but their reliance on the strength of their group makes them trend toward law.',
            features: [
                { 'Darkvision': 60 },
                { 'Grovel, Cower, and Beg': 'As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use this trait, you can’t use it again until you finish a short or long rest.' },
                { 'Pack Tactics': 'You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn’t incapacitated.' },
                { 'Sunlight Sensitivity': 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.' },
            ],
            subraces: []
        },
        {
            id: 23,
            name: 'Lizardfolk',
            summary: 'Lizardfolk possess an alien and inscrutable mindset, their desires and thoughts driven by a different set of basic principles than those of warm-blooded creatures.',
            asis: [
                { 'Con': 2 },
                { 'Wis': 1 }
            ],
            movement: 30,
            size: 'Lizardfolk are a little bulkier and taller than humans, and their colorful frills make them appear even larger. Your size is Medium.',
            languages: [],
            lifespan: 'Lizardfolk reach maturity around age 14 and rarely live longer than 60 years.',
            alignment: 'Most lizardfolk are neutral. They see the world as a place of predators and prey, where life and death are natural processes. They wish only to survive, and prefer to leave other creatures to their own devices.',
            features: [
                { 'Swim Speed': 30 },
                { 'Bite': 'Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.' },
                { 'Cunning Artisan': 'As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan’s tools, such as leatherworker’s tools.' },
                { 'Hold Breath': 'You can hold your breath for up to 15 minutes at a time.' },
                { 'Hunter\'s Lore': 'You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival.' },
                { 'Natural Armor': 'You have tough, scaly skin. When you aren’t wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor.' },
                { 'Hungry Jaws': 'In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can’t use this trait again until you finish a short or long rest.' },
            ],
            subraces: []
        },
        {
            id: 24,
            name: 'Orc',
            summary: 'Orcs live a life that has no place for weakness, and every warrior must be strong enough to take what is needed by force.',
            asis: [
                { 'Str': 2 },
                { 'Con': 1 },
            ],
            movement: 30,
            size: 'Orcs are usually over 6 feet tall and weigh between 230 and 280 pounds. Your size is Medium.',
            languages: ['Common', 'Orc'],
            lifespan: 'Orcs reach adulthood at age 12 and live up to 50 years.',
            alignment: 'Orcs are vicious raiders, who believe that the world should be theirs. They also respect strength above all else and believe the strong must bully the weak to ensure that weakness does not spread like a disease. They are usually chaotic evil.',
            features: [
                { 'Darkvision': 60 },
                { 'Aggressive': 'As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.' },
                { 'Menacing': 'You are trained in the Intimidation skill.' },
                { 'Powerful Build': 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.' },
            ],
            subraces: []
        },
        {
            id: 25,
            name: 'Shifter',
            summary: 'Shifters - sometimes called the weretouched - are humanoids with a bestial aspect.',
            asis: [],
            movement: 30,
            size: 'Your size is Medium. ',
            languages: [],
            lifespan: 'Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old.',
            alignment: 'Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments.',
            features: [
                { 'Darkvision': 60 },
                { 'Shifting': 'As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below. Once you shift, you can’t do so again until you finish a short or long rest.' },
                { 'Subrace': 'The beast within shapes each shifter physically and mentally. The four major subraces of shifter include: beasthide, longtooth, swiftstride, and wildhunt. Choose a subrace for your shifter.' }
            ],
            subraces: [
                {
                    id: '25a',
                    name: 'Beasthide',
                    summary: 'Stoic and solid, a beasthide shifter draws strength and stability from the beast within. Beasthide shifters are typically tied to the bear or the boar, but this subrace could embody any creature known for its toughness.',
                    asis: [
                        { 'Con': 2 },
                        { 'Str': 1 },
                    ],
                    features: [
                        { 'Shifting Feature': 'Whenever you shift, you gain 1d6 additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class.' },
                        { 'Natural Athlete': 'You have proficiency in the Athletics skill.' },
                    ],
                },
                {
                    id: '25b',
                    name: 'Longtooth',
                    summary: 'Longtooth shifters are fierce and aggressive, but they form deep bonds with their friends. Many longtooth shifters have canine traits that become more pronounced as they shift, but they might instead draw on tigers, hyenas, or other predators.',
                    asis: [
                        { 'Str': 2 },
                        { 'Dex': 1 }
                    ],
                    features: [
                        { 'Shifting Feature': 'While shifted, you can use your elongated fangs to make an unarmed strike as a bonus action. If you hit with your fangs, you can deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.' },
                        { 'Fierce': 'You have proficiency in the Intimidation skill.' },
                    ],
                },
                {
                    id: '25c',
                    name: 'Swiftstride',
                    summary: 'Swiftstride shifters are graceful and quick. Typically feline in nature, swiftstride shifters are often aloof and difficult to pin down physically or socially.',
                    asis: [
                        { 'Dex': 2 },
                        { 'Cha': 1 },
                    ],
                    features: [
                        { 'Shifting Feature': 'While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn’t provoke opportunity attacks.' },
                        { 'Graceful': 'You have proficiency in the Acrobatics skill.' },
                    ],
                },
                {
                    id: '25d',
                    name: 'Wildhunt',
                    summary: 'Wildhunt shifters are sharp and insightful. Many are constantly alert, ever wary for possible threats. Others focus on their intuition, searching within. Wildhunt shifters are excellent hunters, and they also tend to become the spiritual leaders of shifter communities.',
                    asis: [
                        { 'Wis': 2 },
                        { 'Dex': 1 },
                    ],
                    features: [
                        { 'Shifting Feature': 'While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you, unless you’re incapacitated.' },
                        { 'Natural Tracker': 'You have proficiency in the Survival skill.' },
                    ],
                },
            ]
        },
        {
            id: 26,
            name: 'Tabaxi',
            summary: 'Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales and stories, and lay eyes on all the world’s wonders.',
            asis: [
                { 'Dex': 2 },
                { 'Cha': 1 }
            ],
            movement: 30,
            size: 'Tabaxi are taller on average than humans and relatively slender. Your size is Medium.',
            languages: [],
            lifespan: 'Tabaxi have lifespans equivalent to humans.',
            alignment: 'Tabaxi tend toward chaotic alignments, as they let impulse and fancy guide their decisions. They are rarely evil, with most of them driven by curiosity rather than greed or other dark impulses.',
            features: [
                { 'Darkvision': 60 },
                { 'Feline Agility': 'Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can’t use it again until you move 0 feet on one of your turns.' },
                { 'Cat\'s Claws': 'Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.' },
                { 'Cat\'s Talent': 'You have proficiency in the Perception and Stealth skills.' }

            ],
            subraces: []
        },
        {
            id: 27,
            name: 'Tiefling',
            summary: 'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.',
            asis: [],
            movement: 30,
            size: 'Tieflings are about the same size and build as humans. Your size is Medium.',
            languages: ['Common', 'Infernal'],
            lifespan: 'Tieflings mature at the same rate as humans but live a few years longer.',
            alignment: 'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
            features: [
                { 'Darkvision': 60 },
                { 'Hellish Resistance': 'You have resistance to fire damage.' },
            ],
            subraces: [
                {
                    id: '27a',
                    name: 'Feral Tiefling',
                    summary: '',
                    asis: [
                        { 'Dex': 2 },
                        { 'Int': 1 },
                    ],
                    features: [
                        { 'Infernal Legacy': 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.' },
                    ],
                },
                {
                    id: '27b',
                    name: 'Variant Tiefling',
                    summary: 'Since not all tieflings are of the blood of Asmodeus, some have traits that differ from those in the Player’s Handbook. The Dungeon Master may permit the following variants for your tiefling character, although Devil’s Tongue, Hellfire, and Winged are mutually exclusive. Appearance. Your tiefling might not look like other tieflings. Rather than having the physical characteristics described in the Player’s Handbook, choose 1d4 + 1 of the following features: small horns; fangs or sharp teeth; a forked tongue; catlike eyes; six fingers on each hand; goat-like legs; cloven hoofs; a forked tail; leathery or scaly skin; red or dark blue skin; cast no shadow or reflection; exude a smell of brimstone.',
                    asis: [
                        { 'Cha': 2 },
                        { 'Int': 1 },
                    ],
                    features: [
                        { 'Devil’s Tongue': 'You know the vicious mockery cantrip. When you reach 3rd level, you can cast the charm person spell as a 2nd-level spell once with this trait. When you reach 5th level, you can cast the enthrall spell once with this trait. You must finish a long rest to cast these spells once again with this trait. Charisma is your spellcasting ability for them. This trait replaces the Infernal Legacy trait.' },
                        { 'Hellfire': 'Once you reach 3rd level, you can cast the burning hands spell once per day as a 2nd-level spell. This trait replaces the hellish rebuke spell of the Infernal Legacy trait.' },
                        { 'Winged': 'You have bat-like wings sprouting from your shoulder blades. You have a flying speed of 30 feet while you aren’t wearing heavy armor. This trait replaces the Infernal Legacy trait.' },
                    ],
                },
            ]
        },
        {
            id: 28,
            name: 'Tortle',
            summary: 'What many tortles consider a simple life, others might call a life of adventure. They are nomad survivalists eager to explore the wilderness.',
            asis: [
                { 'Str': 2 },
                { 'Wis': 1 }
            ],
            movement: 30,
            size: 'Tortle adults stand 5 to 6 feet tall and average 450 pounds. Their shells account for roughly one-third of their weight. Your size is Medium.',
            languages: ['Common', 'Aquan'],
            lifespan: 'Young tortles crawl for a few weeks after birth before learning to walk on two legs. They reach adulthood by the age of 15 and live an average of 50 years.',
            alignment: 'Tortles tend to lead orderly, ritualistic lives. They develop customs and routines, becoming more set in their ways as they age. Most are lawful good. A few can be selfish and greedy, tending more toward evil, but it’s unusual for a tortle to shuck off order in favor of chaos.',
            features: [
                { 'Claws': 'Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.' },
                { 'Hold Breath': 'You can hold your breath for up to 1 hour at a time. Tortles aren’t natural swimmers, but they can remain underwater for some time before needing to come up for air.' },
                { 'Natural Armor': 'Due to your shell and the shape of your body, you are ill-suited to wearing armor. Your shell provides ample protection, however; it gives you a base AC of 17 (your Dexterity modifier doesn’t affect this number). You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield’s bonus as normal.' },
                { 'Shell Defense': 'You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can’t increase, you have disadvantage on Dexterity saving throws, you can’t take reactions, and the only action you can take is a bonus action to emerge from your shell.' },
                { 'Survival Instinct': 'You gain proficiency in the Survival skill. Tortles have finely honed survival instincts.' }
            ],
            subraces: []
        },
        {
            id: 29,
            name: 'Triton',
            summary: 'Long-established guardians of the deep ocean floor, in recent years the noble tritons have become increasingly active in the world above.',
            asis: [
                { 'Str': 1 },
                { 'Con': 1 },
            ],
            movement: 30,
            size: 'Tritons are slightly shorter than humans, averaging about 5 feet tall. Your size is Medium.',
            languages: ['Common', 'Primordial'],
            lifespan: 'Tritons reach maturity around age 15 and can live up to 200 years.',
            alignment: 'Tritons tend toward lawful good. As guardians of the darkest reaches of the sea, their culture pushes them toward order and benevolence.',
            features: [
                { 'Swim Speed': 30 },
                { 'Control Air and Water': 'A child of the sea, you can call on the magic of elemental air and water. You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it. Once you cast a spell with this trait, you can’t cast that spell with it again until you finish a long rest. Charisma is your spellcasting ability for these spells.' },
                { 'Emissary of the Sea': 'Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return.' },
                { 'Guardians of the Depths': 'Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment.' }
            ],
            subraces: []
        },
        {
            id: 30,
            name: 'Warforged',
            summary: '',
            asis: [],
            movement: '',
            size: '',
            languages: [],
            matureAge: '',
            lifespan: '',
            alignment: '',
            features: [],
            subraces: []
        },
        {
            id: 31,
            name: 'Yuan-ti Pureblood',
            summary: 'The serpent creatures known as yuan-ti are all that remains of an ancient, decadent human empire.',
            asis: [
                { 'Cha': 2 },
                { 'Int': 1 }
            ],
            movement: 30,
            size: 'Purebloods match humans in average size and weight. Your size is Medium.',
            languages: ['Common', 'Abyssal', 'Draconic'],
            lifespan: 'Purebloods mature at the same rate as humans and have lifespans similar in length to theirs.',
            alignment: 'Purebloods are devoid of emotion and see others as tools to manipulate. They care little for law or chaos and are typically neutral evil.',
            features: [
                { 'Darkvision': 60 },
                { 'Innate Spellcasting': 'You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast suggestion with this trait. Once you cast it, you can’t do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.' },
                { 'Magic Resistance': 'You have advantage on saving throws against spells and other magical effects.' },
                { 'Poison Immunity': 'You are immune to poison damage and the poisoned condition.' }
            ],
            subraces: []
        },
    ],
    'ATTRIBUTES': [
        'Strength',
        'Dexterity',
        'Constitution',
        'Intelligence',
        'Wisdom',
        'Charisma',
    ],
    'LANGUAGES': {
        'ALL': [
            {
                'name': 'Abyssal',
                'script': 'Infernal',
                'typicalSpeakers': 'Demons, chaotic evil outsiders',
            },
            {
                'name': 'Aquan',
                'script': 'Elvish',
                'typicalSpeakers': 'Water-based creatures',
            },
            {
                'name': 'Auran',
                'script': 'Draconic',
                'typicalSpeakers': 'Air-based creatures'
            },
            {
                'name': 'Celestial',
                'script': 'Celestial',
                'typicalSpeakers': 'Celestials (angels, devas)',
            },
            {
                'name': 'Common',
                'script': 'Common',
                'typicalSpeakers': 'Humans, halflings, half-elves, half-orcs'
            },
            {
                'name': 'Deep Speech',
                'script': '--',
                'typicalSpeakers': 'Mind flayers, beholders',
            },
            {
                'name': 'Draconic',
                'script': 'Draconic',
                'typicalSpeakers': 'Kobolds, troglodytes, lizardfolk, dragons, dragonborn',
            },
            {
                'name': 'Dwarvish',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Dwarves'
            },
            {
                'name': 'Elvish',
                'script': 'Elvish',
                'typicalSpeakers': 'Elves'
            },
            {
                'name': 'Giant',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Ogres, giants',
            },
            {
                'name': 'Gnomish',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Gnomes',
            },
            {
                'name': 'Goblin',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Goblinoids, hobgoblins, bugbears',
            },
            {
                'name': 'Gnoll',
                'script': 'Common',
                'typicalSpeakers': 'Gnolls'
            },
            {
                'name': 'Halfling',
                'script': 'Common',
                'typicalSpeakers': 'Halflings'
            },
            {
                'name': 'Ignan',
                'script': 'Draconic',
                'typicalSpeakers': 'Fire-based creatures',
            },
            {
                'name': 'Infernal',
                'script': 'Infernal',
                'typicalSpeakers': 'Devils, Tieflings',
            },
            {
                'name': 'Orc',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Orcs',
            },
            {
                'name': 'Primordial',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Elementals',
            },
            {
                'name': 'Sylvan',
                'script': 'Elvish',
                'typicalSpeakers': 'Fey creatures (dryads, brownies, leprechauns)',
            },
            {
                'name': 'Terran',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Xorns and other earth-based creatures',
            },
            {
                'name': 'Undercommon',
                'script': 'Elvish',
                'typicalSpeakers': 'Drow, Underdark traders',
            },


        ],
        'STANDARD': [
            {
                'name': 'Aquan',
                'script': 'Elvish',
                'typicalSpeakers': 'Water-based creatures',
            },
            {
                'name': 'Auran',
                'script': 'Draconic',
                'typicalSpeakers': 'Air-based creatures'
            },
            {
                'name': 'Common',
                'script': 'Common',
                'typicalSpeakers': 'Humans, halflings, half-elves, half-orcs'
            },
            {
                'name': 'Dwarvish',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Dwarves'
            },
            {
                'name': 'Elvish',
                'script': 'Elvish',
                'typicalSpeakers': 'Elves'
            },
            {
                'name': 'Giant',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Ogres, giants',
            },
            {
                'name': 'Gnomish',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Gnomes',
            },
            {
                'name': 'Goblin',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Goblinoids, hobgoblins, bugbears',
            },
            {
                'name': 'Gnoll',
                'script': 'Common',
                'typicalSpeakers': 'Gnolls'
            },
            {
                'name': 'Halfling',
                'script': 'Common',
                'typicalSpeakers': 'Halflings'
            },
            {
                'name': 'Ignan',
                'script': 'Draconic',
                'typicalSpeakers': 'Fire-based creatures',
            },
            {
                'name': 'Orc',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Orcs',
            },
            {
                'name': 'Terran',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Xorns and other earth-based creatures',
            },
        ],
        'EXOTIC': [
            {
                'name': 'Abyssal',
                'script': 'Infernal',
                'typicalSpeakers': 'Demons, chaotic evil outsiders',
            },
            {
                'name': 'Celestial',
                'script': 'Celestial',
                'typicalSpeakers': 'Celestials (angels, devas)',
            },
            {
                'name': 'Deep Speech',
                'script': '--',
                'typicalSpeakers': 'Mind flayers, beholders',
            },
            {
                'name': 'Draconic',
                'script': 'Draconic',
                'typicalSpeakers': 'Kobolds, troglodytes, lizardfolk, dragons, dragonborn',
            },
            {
                'name': 'Infernal',
                'script': 'Infernal',
                'typicalSpeakers': 'Devils, Tieflings',
            },
            {
                'name': 'Primordial',
                'script': 'Dwarvish',
                'typicalSpeakers': 'Elementals',
            },
            {
                'name': 'Sylvan',
                'script': 'Elvish',
                'typicalSpeakers': 'Fey creatures (dryads, brownies, leprechauns)',
            },
            {
                'name': 'Undercommon',
                'script': 'Elvish',
                'typicalSpeakers': 'Drow, Underdark traders',
            },


        ],
    },
    'SKILLS': {
        ByAttrDep: {
            'Strength': [
                'Athletics'
            ],
            'Dexterity': [
                'Acrobatics',
                'Sleight of Hand',
                'Stealth',
            ],
            'Constitution': [],
            'Intelligence': [
                'Arcana',
                'History',
                'Investigation',
                'Nature',
                'Religion',
            ],
            'Wisdom': [
                'Animal Handling',
                'Insight',
                'Medicine',
                'Perception',
                'Survival'
            ],
            'Charisma': [
                'Deception',
                'Intimidation',
                'Performance',
                'Persuasion',
            ]
        },
        ByAlphabet: [
            "Acrobatics",
            "Animal Handling",
            "Arcana",
            "Athletics",
            "Deception",
            "History",
            "Insight",
            "Intimidation",
            "Investigation",
            "Medicine",
            "Nature",
            "Perception",
            "Performance",
            "Persuasion",
            "Religion",
            "Sleight of Hand",
            "Stealth",
            "Survival",
        ]
    },
    'BACKGROUNDS': [
        // {
        //     'name': 'Custom Background',
        // },
        {
            'name': 'Acolyte',
            "description": "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power. Choose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service. The Gods of the Multiverse section contains a sample pantheon, from the Forgotten Realms setting. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'Religion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Shelter of the Faithful",
                "description": "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Anthropologist',
            "description": "You have always been fascinated by other cultures, from the most ancient and primeval lost lands to the most modern civilizations. By studying other cultures' customs, philosophies, laws, rituals, religious beliefs, languages, and art, you have learned how tribes, empires, and all forms of society in between craft their own destinies and doom. This knowledge came to you not only through books and scrolls, but also through firsthand observation – by visiting far-flung settlements and exploring local histories and customs.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
                { 'name': 'ANY', 'isAutoGranted': false }
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'Religion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Cultural Chameleon",
                "description": "Before becoming an adventurer, you spent much of your adult life away from your homeland, living among people different from your kin. You came to understand these foreign cultures and the ways of their people, who eventually treated you as one of their own. One culture had more of an influence on you than any other, shaping your beliefs and customs. Choose a race whose culture you've adopted.",
            },
            'alternateBackgroundFeature': {
                "name": "Adept Linguist",
                "description": "You can communicate with humanoids who don't speak any language you know. You must observe the humanoids interacting with one another for at least 1 day, after which you learn a handful of important words, expressions, and gestures – enough to communicate on a rudimentary level.",
            },
        },
        {
            'name': 'Archaeologist',
            "description": "An archaeologist learns about the long-lost and fallen cultures of the past by studying their remains – their bones, their ruins, their surviving masterworks, and their tombs. Those who practice archaeology travel to the far corners of the world to root through crumbled cities and lost dungeons, digging in search of artifacts that might tell the stories of monarchs and high priests, wars and cataclysms.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false }
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Cartographer\'s Tools', 'isAutoGranted': false },
                { 'name': 'Navigator\'s Tools', 'isAutoGranted': false },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'History', 'isAutoGranted': true },
                { 'name': 'Survival', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Dust Digger",
                "description": "Prior to becoming an adventurer, you spent most of your young life crawling around in the dust, pilfering relics of questionable value from crypts and ruins. Though you managed to sell a few of your discoveries and earn enough coin to buy proper adventuring gear, you have held onto an item that has great emotional value to you. Roll on the Signature Item table to see what you have, or choose an item from the table.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Black Fist Double Agent',
            "description": "You are an informant for the Tears of Virulence who now lord over Phlan, but are also a double agent for original town guard of Phlan, the Black Fists. For the Tears you’ve been tasked with ferreting out the secrets of Phlan's criminal underworld, insurgency, and the common peoples of Phlan. In exchange for reporting on the activities of dissenters, criminals, and other rebel elements, the Tears of Virulence leave you alone to conduct your affairs in peace. In reality you work for the deposed Black Fists, sharing misinformation with the Tears of Virulence that often helps the Black Fists and other Phlan insurgents. Since the evacuation of Phlan, you are even busier today than you ever were previously, as the number of dissenters among the refugees grows daily, while you are afforded many opportunities to spy on the peoples of Mulmaster and Elventree, to the pleasure of your contact(s) within the Tears of Virulence. ",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Disguise Kit', 'isAutoGranted': true },
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': false },
                { 'name': 'Gaming Set', 'isAutoGranted': false },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Insight', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Double Agent",
                "description": "You have a reliable and trusty contact within the Tears of Virulence garrison in Phlan to whom you pass information and secrets. In exchange, you can get away with minor criminal offenses within the town of Phlan. In addition, your Black Fists contacts can help you secure an audience with the Lord Regent, the Lord Sage, members of the Black Fists, or deposed nobles and authority figures who are sympathetic to the Phlan refugees and insurgents. Note: This feature is a variant of the Noble feature. ",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Caravan Specialist',
            "description": "You are used to life on the road. You pride yourself at having traveled every major tradeway in the Moonsea region, includ-ing the best backroads and shortcuts. When traveling these roads, you know where the best inns, campsites, and water sources are located, as well as potential locations of danger such as ambush. Having worked the roads as long as you have, you have made many aquaintences and find it easy to pick up information and rumors floating from town to town. You are skilled with beasts of burden and handling and repair-ing wagons of all kinds.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false }
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Vehicles (land)', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Animal Handling', 'isAutoGranted': true },
                { 'name': 'Survival', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Wagonmaster",
                "description": "You are used to being in charge of the operation and your reputation for reliability has you on a short list when the job is critical. Experience has taught you to rely on your gut. Othersrecognize this and look to you for direction when a situation gets serious. You are able to identify the most defensible loca-tions for camping. If you are part of a caravan outfit, you areable to attract two additional workers that are loyal to you based on your reputation. You have an excellent memory for maps and geography and can always determine your cardinal directions while traveling. [Note: This feature is a variant of the Outlander feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Charlatan',
            "description": "You have always had a way with people. You know what makes them tick, you can tease out their hearts’ desires after a few minutes of conversation, and with a few leading questions you can read them like they were children’s books. It’s a useful talent, and one that you’re perfectly willing to use for your advantage. You know what people want and you deliver, or rather, you promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when you’re around. The bottle of pink-colored liquid will surely cure that unseemly rash, this ointment — nothing more than a bit of fat with a sprinkle of silver dust — can restore youth and vigor, and there’s a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Disguise Kit', 'isAutoGranted': true },
                { 'name': 'Forgery kit', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Sleight of Hand', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "False Identity",
                "description": "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'City Watch',
            "description": "You have served the community where you grew up, standing as its first line of defense against crime. You aren’t a soldier, directing your gaze outward at possible enemies. Instead, your service to your hometown was to help police its populace, protecting the citizenry from lawbreakers and malefactors of every stripe. You might have been part of the City Watch of Waterdeep, the baton-wielding police force of the City of Splendors, protecting the common folk from thieves and rowdy nobility alike. Or you might have been one of the valiant defenders of Silverymoon, a member of the Silverwatch or even one of the magic-wielding Spellguard. Perhaps you hail from Neverwinter and have served as one of its Wintershield watchmen, the newly founded branch of guards who vow to keep safe the City of Skilled Hands. Even if you’re not city-born or city-bred, this background can describe your early years as a member of law enforcement. Most settlements of any size have their own constables and police forces, and even smaller communities have sheriffs and bailiffs who stand ready to protect their community.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Insight', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Watcher’s Eye",
                "description": "Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you’re more likely to be welcome in the former locations rather than the latter.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Clan Crafter',
            "description": "The Stout Folk are well known for their artisanship and the worth of their handiworks, and you have been trained in that ancient tradition. For years you labored under a dwarf master of the craft, enduring long hours and dismissive, sour-tempered treatment in order to gain the fine skills you possess today. You are most likely a dwarf, but not necessarily—particularly in the North, the shield dwarf clans learned long ago that only proud fools who are more concerned for their egos than their craft turn away promising apprentices, even those of other races. If you aren’t a dwarf, however, you have taken a solemn oath never to take on an apprentice in the craft: it is not for non-dwarves to pass on the skills of Moradin’s favored children. You would have no difficulty, however, finding a dwarf master who was willing to receive potential apprentices who came with your recommendation.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false }
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'History', 'isAutoGranted': true },
                { 'name': 'Insight', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Respect of the Stout Folk",
                "description": "As well respected as clan crafters are among outsiders, no one esteems them quite so highly as dwarves do. You always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer you (and possibly your compatriots) the finest accommodations and assistance.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Cloistered Scholar',
            "description": "As a child, you were inquisitive when your playmates were possessive or raucous. In your formative years, you found your way to one of Faerûn’s great institutes of learning , where you were apprenticed and taught that knowledge is a more valuable treasure than gold or gems. Now you are ready to leave your home—not to abandon it, but to quest for new lore to add to its storehouse of knowledge. The most well known of Faerûn’s fonts of knowledge is Candlekeep. The great library is always in need of workers and attendants, some of whom rise through the ranks to assume roles of greater responsibility and prominence. You might be one of Candlekeep’s own, dedicated to the curatorship of what is likely the most complete body of lore and history in all the world. Perhaps instead you were taken in by the scholars of the Vault of the Sages or the Map House in Silverymoon, and now you have struck out to increase your knowledge and to make yourself available to help those in other places who seek your expertise. You might be one of the few who aid Herald’s Holdfast, helping to catalogue and maintain records of the information that arrives daily from across Faerûn.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'History', 'isAutoGranted': true },
                { 'name': 'Arcanda', 'isAutoGranted': false },
                { 'name': 'Nature', 'isAutoGranted': false },
                { 'name': 'Religion', 'isAutoGranted': false },
            ],
            'backgroundFeature': {
                "name": "Library Access",
                "description": "Though others must often endure extensive interviews and significant fees to gain access to even the most common archives in your library, you have free and easy access to the majority of the library, though it might also have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access. You have a working knowledge of your cloister’s personnel and bureaucracy, and you know how to navigate those connections with some ease. Additionally, you are likely to gain preferential treatment at other libraries across the Realms, as professional courtesy shown to a fellow scholar.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Cormanthor Refugee',
            "description": "You are one of hundreds of refugees that were driven from Hillsfar or that fled the destruction of Myth Drannor and who now shelter in hidden camps under the northern eaves of the Cormanthor Forest. If you up grew in the camps, you have never been to a settlement other than the village of Elventree. As a guest of the elves, you have learned their ways and the ways of the forest. You are also a traumatized, as residual wild magic, energies released by the fall of Thultanar upon Myth Drannor, and the constant fear of raids hunting for nonhumans to fight in Hillsfar's Arena have taken their toll on you, as they have on everyone in the camps. ",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'Elvish', 'isAutoGranted': true }
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Nature', 'isAutoGranted': true },
                { 'name': 'Survival', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Shelter of the Elven Clergy",
                "description": "The clerics of Elventree have vowed to care for the Cormanthor refugees. They will help you when they can, including providing you and your companions with free healing and care at temples, shrines, and other established presences in Elventree. They will also provide you (but only you) with a poor lifestyle. [Note: This feature is a variant of the Acolyte feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Courtier',
            "description": "In your earlier days, you were a personage of some significance in a noble court or a bureaucratic organization. You might or might not come from an upper-class family; your talents, rather than the circumstances of your birth, could have secured you this position. You might have been one of the many functionaries, attendants, and other hangers-on in the Court of Silverymoon, or perhaps you traveled in Waterdeep’s baroque and sometimes cutthroat conglomeration of guilds, nobles, adventurers, and secret societies. You might have been one of the behind-the-scenes law-keepers or functionaries in Baldur’s Gate or Neverwinter, or you might have grown up in and around the castle of Daggerford. Even if you are no longer a full-fledged member of the group that gave you your start in life, your relationships with your former fellows can be an advantage for you and your adventuring comrades. You might undertake missions with your new companions that further the interest of the organization that gave you your start in life. In any event, the abilities that you honed while serving as a courtier will stand you in good stead as an adventurer.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Court Functionary",
                "description": "Your knowledge of how bureaucracies function lets you gain access to the records and inner workings of any noble court or government you encounter. You know who the movers and shakers are, whom to go to for the favors you seek, and what the current intrigues of interest in the group are.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Criminal',
            "description": "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
                { 'name': 'Thieves\' Tools', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Stealth', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Criminal Contact",
                "description": "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Earthspur Miner',
            "description": "You are a down-on your luck miner from the Earthspur Mountains who is no stranger to hardship. You have spent a great deal of time living among the dwarves, goliaths, and denizens of the Underdark that also work mines in the area. At this point, you're just as comfortable working underground as above. You know how to read a seam, dicker for supplies with the deep gnomes, party with dwarves, and find your way back to the surface afterwards. Unfortunately, you haven't struck it rich...yet. Although you've come to Mulmaster looking for work, the tall peaks and deep mines of the Earthspurs still call to you.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'Dwarvish', 'isAutoGranted': true },
                { 'name': 'Undercommon', 'isAutoGranted': true },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Survival', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Deep Mine",
                "description": "You are used to navigating the deep places of the earth. You never get lost in caves or mines if you have either seen an accurate map of them or have been through them before. Furthermore, you are able to scrounge fresh water and food for yourself and as many as five other people each day if you are in a mine or natural caves. [Note: This feature is a variant of the Outlander feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Entertainer',
            "description": "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Disguise Kit', 'isAutoGranted': true },
                { 'name': 'Musical Instrument', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Acrobatics', 'isAutoGranted': true },
                { 'name': 'Performance', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "By Popular Demand",
                "description": "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble’s court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Faceless',
            "description": "Being who you are, you could never be a hero. Whether due to your class, your people, your family, or your sins, something about you prevents you from effectively pursuing the path you’ve chosen. Even so, that doesn’t stop you. You’ve left your old face behind, taking on a new persona, becoming something more. Characters with the faceless background don a disguise — literally or otherwise — as they adventure. This persona might be dramatic or subtle. In a way, though, many characters have such larger than life personalities. Therefore, this background largely focuses on detailing the hero behind the mask.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Disguise Kit', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Intimidation', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Dual Personalities",
                "description": "Most of your fellow adventurers and the world know you as your persona. Those who seek to learn more about you—your weaknesses, your origins, your purpose—find themselves stymied by your disguise. Upon donning a disguise and behaving as your persona, you are unidentifiable as your true self. By removing your disguise and revealing your true face, you are no longer identifiable as your persona. This allows you to change appearances between your two personalities as often as you wish, using one to hide the other or serve as convenient camouflage. However, should someone realize the connection between your persona and your true self, your deception might lose its effectiveness.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Faction Agent',
            "description": "Many organizations active in the North and across the face of Faerûn aren’t bound by strictures of geography. These factions pursue their agendas without regard for political boundaries, and their members operate anywhere the organization deems necessary. These groups employ listeners, rumormongers, smugglers, sellswords, cache-holders (people who guard caches of wealth or magic for use by the faction’s operatives), haven keepers, and message drop minders, to name a few. At the core of every faction are those who don’t merely fulfill a small function for that organization, but who serve as its hands, head, and heart. As a prelude to your adventuring career (and in preparation for it), you served as an agent of a particular faction in Faerûn. You might have operated openly or secretly, depending on the faction and its goals, as well as how those goals mesh with your own. Becoming an adventurer doesn’t necessarily require you to relinquish membership in your faction (though you can choose to do so), and it might enhance your status in the faction.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'backgroundFeature': {
                "name": "Safe Haven",
                "description": "As a faction agent, you have access to a secret network of supporters and operatives who can provide assistance on your adventures. You know a set of secret signs and passwords you can use to identify such operatives, who can provide you with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives for you or risk revealing their true identities.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Far Traveler',
            "description": "Almost all of the common people and other folk that one might encounter along the Sword Coast or in the North have one thing in common: they live out their lives without ever traveling more than a few miles from where they were born. You aren’t one of those folk. You are from a distant place, one so remote that few of the common folk in the North realize that it exists, and chances are good that even if some people you meet have heard of your homeland, they know merely the name and perhaps a few outrageous stories. You have come to this part of Faerûn for your own reasons, which you might or might not choose to share. Although you will undoubtedly find some of this land’s ways to be strange and discomfiting, you can also be sure that some things its people take for granted will be to you new wonders that you’ve never laid eyes on before. By the same token, you’re a person of interest, for good or ill, to those around you almost anywhere you go.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Musical Instrument', 'isAutoGranted': false },
                { 'name': 'Gaming Set', 'isAutoGranted': false },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'Perception', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "All Eyes on You",
                "description": "Your accent, mannerisms, figures of speech, and perhaps even your appearance all mark you as foreign. Curious glances are directed your way wherever you go, which can be a nuisance, but you also gain the friendly interest of scholars and others intrigued by far-off lands, to say nothing of everyday folk who are eager to hear stories of your homeland. You can parley this attention into access to people and places you might not otherwise have, for you and your traveling companions. Noble lords, scholars, and merchant princes, to name a few, might be interested in hearing about your distant homeland and people.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Folk Hero',
            "description": "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': true },
                { 'name': 'Vehicles (Land)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Animal Handling', 'isAutoGranted': true },
                { 'name': 'Survival', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Rustic Hospitality",
                "description": "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Gate Urchin',
            "description": "All traffic into and out of the City of Trade passes through the Hillsfar Gate, making it the ideal place for the destitute to gather to panhandle, busk, gossip, and pick pockets. You grew up on the streets in the shadow of that great steel edifice, which houses both Red Plumes and Guild Mages. Though you may have moved on, you still have friends among them, and that life has had a lasting impact on you.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Musical Instrument', 'isAutoGranted': true },
                { 'name': 'Thives\' Tools', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Sleight of Hand', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Red Plume and Mage Guild Contacts",
                "description": "You made a number of friends among the Red Plumes and the Mage's Guild when you lived at the Hillsfar Gate. They remember you fondly and help you in little ways when they can. You can invoke their assistance in and around Hillsfar to obtain food, as well as simple equipment for temporary use. You can also invoke it to gain access to the low-security areas of their garrisons, halls, and encampments. [Note: This feature is a variant of the Soldier feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Gladiator',
            "description": "A gladiator is as much an entertainer as any minstrel or circus performer, trained to make the arts of combat into a spectacle the crowd can enjoy. This kind of flashy combat is your entertainer routine, though you might also have some skills as a tumbler or actor.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Disguise Kit', 'isAutoGranted': true },
                { 'name': 'Unusual Weapon x1', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Acrobatics', 'isAutoGranted': true },
                { 'name': 'Performance', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "By Popular Demand",
                "description": "You can always find a place to perform in any place that features combat for entertainment — perhaps a gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Guild Artisan',
            "description": "You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Guild Membership",
                "description": "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild’s coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild’s good graces.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Guild Merchant',
            "description": "You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Navigator\'s Tools', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Guild Membership",
                "description": "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild’s coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild’s good graces.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Harborfolk',
            "description": "You are one of the hundreds of small-time fishermen and women who haul the bounty of Mulmaster's freshwater harbor to the city's markets each morning. You have spent countless days rowing in the waters in and around Mulmaster and know them and the other fisherfolk, dockworkers, and port inhabitants better than anyone. Though you have left that life behind, you still visit once in a while.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
                { 'name': 'Vehicles (Water)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Sleight of Hand', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Harborfolk",
                "description": "You grew up on the docks and waters of Mulmaster Harbor. The harborfolk remember you and still treat you as one of them. They welcome you and your companions. While they might charge you for it, they'll always offer what food and shelter they have; they'll even hide you if the City Watch is after you (but not if the Hawks are). [Note: This feature is a variant of the Folk Hero feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Haunted One',
            "description": "You are haunted by something so terrible that you dare not speak of it. You’ve tried to bury it and run away from it, to no avail. Whatever this thing is that haunts you can’t be slain with a sword or banished with a spell. It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, or a demonic whisper in the dark. The burden has taken its toll, isolating you from most people and making you question your sanity. You must find a way to overcome it before it destroys you.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'EXOTIC', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Arcana', 'isAutoGranted': false },
                { 'name': 'Investigation', 'isAutoGranted': false },
                { 'name': 'Religion', 'isAutoGranted': false },
                { 'name': 'Survival', 'isAutoGranted': false },
            ],
            'backgroundFeature': {
                "name": "Heart of Darkness",
                "description": "Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, should you find yourself facing an enemy alone.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Hermit',
            "description": "You lived in seclusion — either in a sheltered community such as a monastery, or entirely alone — for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Herbalism Kit', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Medicine', 'isAutoGranted': true },
                { 'name': 'Religion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Discovey",
                "description": "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Hillsfar Merchant',
            "description": "Before becoming an adventurer, you were a successful merchant operating out Hillsfar, the City of Trade. Your family operated warehouses, organized caravans, managed stores, or owned a ship and has trade contacts throughout the Moonsea region, as well as up and down the length of the Sword Coast. Perhaps they import ore, uncut gems, untreated furs, or grain into the City of Trade, or they export fine cloth, faceted gems, fine furs, or Dragon's Breath, a brandy-like liquor. Regardless, you've largely given that life up for some reason and have chosen to seek adventure instead. Nevertheless, the training you received then, and perhaps the contacts you made, serve you well as an adventurer.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Vehicles (Land)', 'isAutoGranted': true },
                { 'name': 'Vehicles (Water)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Factor",
                "description": "Although you've left the day-to-day life of a merchant behind, your family has assigned you the services of a loyal retainer from the business, a factor, husbanding agent, seafarer, caravan guard, or clerk. This individual is a commoner who can perform mundane tasks for you such as making purchases, delivering messages, and running errands. He or she will not fight for you and will not follow you into obviously dangerous areas (such as dungeons), and will leave if frequently endangered or abused. If he or she is killed, the family assigns you another within a few days. Note: This feature is a variant of the Noble Knight's Retainers feature.",
            },
            'alternateBackgroundFeature': {
                "name": "Trade Contact",
                "description": "You and your family have trade contacts such as caravan masters, shopkeepers, sailors, artisans, and farmers throughout the Moonsea region and all along the Sword Coast. Once per game session, when adventuring in either of those areas, you can use those contacts to get information about the local area or to pass a message to someone in those areas, even across the great distance between the two areas. Note: This feature is a variant of the Criminal Contact and Researcher features.",
            },
        },
        {
            'name': 'Hillsfar Smuggler',
            "description": "Hillsfar is the City of Trade. However, the Great Law of Trade only protects 'legitimate' trade, trade that passes through the city's sole gate, which the Red Plumes monitor and tax. And the Great Law of Humanity banishes non- humans from the city altogether. The two Great Laws create great demand and great risk for smugglers, who shepherd illicit goods and non-humans into and out of the city by secret routes. The Rogues Guild tightly controls all of this activity, taking its cut from sanctioned jobs and exacting punishment for independent jobs. Perhaps you trafficked Dragon's Breath (a brandy-like liquor) to avoid tariffs or contraband to avoid seizure, or maybe you are a human who sympathizes with the non- humans and worked as part of the network of secret routes and safe houses that helps them pass through Hillsfar. Either way, you have contacts in the smuggling community who can help you slip into and out of the city unnoticed, for a price. ",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Forgery Kit', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Perception', 'isAutoGranted': true },
                { 'name': 'Stealth', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Secret Passage",
                "description": "You can call on your contacts within the smuggling community to secure secret passage into or out of Hillsfar for yourself and your adventuring companions, no questions asked, and no Red Plume entanglements. Because you’re calling in a favor, you can’t be certain they will be able to help on your timetable or at all. Your Dungeon Master will determine whether you can be smuggled into or out of the city. In return for your passage, you and your companions may owe the Rogue's Guild a favor and/or may have to pay bribes. [Note: This feature is a variant of the Sailor feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Inheritor',
            "description": "You are the heir to something of great value — not mere coin or wealth, but an object that has been entrusted to you and you alone. Your inheritance might have come directly to you from a member of your family, by right of birth, or it could have been left to you by a friend, a mentor, a teacher, or someone else important in your life. The revelation of your inheritance changed your life, and might have set you on the path to adventure, but it could also come with many dangers, including those who covet your gift and want to take it from you — by force, if need be.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
                { 'name': 'Musical Instrument', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Survival', 'isAutoGranted': true },
                { 'name': 'Arcana', 'isAutoGranted': false },
                { 'name': 'History', 'isAutoGranted': false },
                { 'name': 'Religion', 'isAutoGranted': false },
            ],
            'backgroundFeature': {
                "name": "Inheritance",
                "description": "Choose or randomly determine your inheritance from among the possibilities in the table below. Work with your Dungeon Master to come up with details: Why is your inheritance so important, and what is its full story? You might prefer for the DM to invent these details as part of the game, allowing you to learn more about your inheritance as your character does. The Dungeon Master is free to use your inheritance as a story hook, sending you on quests to learn more about its history or true nature, or confronting you with foes who want to claim it for themselves or prevent you from learning what you seek. The DM also determines the properties of your inheritance and how they figure into the item’s history and importance. For instance, the object might be a minor magic item, or one that begins with a modest ability and increases in potency with the passage of time. Or, the true nature of your inheritance might not be apparent at first and is revealed only when certain conditions are met. When you begin your adventuring career, you can decide whether to tell your companions about your inheritance right away. Rather than attracting attention to yourself, you might want to keep your inheritance a secret until you learn more about what it means to you and what it can do for you. Item options: A document such as a map, a letter, or a journal; a trinket; an article of clothing; a piece of jewelry; an arcane book or formulary; a written story, song, poem, or secret; a tattoo or other body marking.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Inquisitor',
            "description": "Historically, inquisitors were cathar detectives who investigated crimes both mundane and supernatural. They were known for traveling to remote parishes plagued by unexplained murders, and for exposing werewolves living among normal humans. During Avacyn's absence, when the archangel was trapped within the demonic prison known as the Helvault, the inquisitors led a series of brutal forays into Kessig and the Gavony Moorland. They executed suspected lycanthropes with little or no proof, and punished accused heretics in unsanctioned trials. With Avacyn's madness, this savage form of inquisition has become the norm, and inquisitors who still pry into dark mysteries have become a minority.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': true },
                { 'name': 'Thieves\' Tools', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Investigation', 'isAutoGranted': true },
                { 'name': 'Religion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Legal Authority",
                "description": "As an inquisitor of the church, you have the authority to arrest criminals. In the absence of other authorities, you are authorized to pass judgment and even carry out sentencing. If you abuse this power, however, your superiors in the church might strip it from you.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Investigator',
            "description": "Though you hold no special title or position, you are an inveterate seeker of truths. To this end, you find yourself compelled to search in dangerous locations, and are the first to broach understanding or gather clandestine pieces of information. These traits can bring you to intense danger, but they do not hinder their quest for knowledge. You are likely to gather teams meant to explore the unknown, pushing them into action despite any of their natural misgivings. It is your bravado and ingenuity that keeps your team anchored and united against the darkness and its denizens. What you do not anticipate, however, is that your search for the truth may lead you to your own end, or worse.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Insight', 'isAutoGranted': true },
                { 'name': 'Investigation', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Trusted Source",
                "description": "People may see you as a madman seeking information that no one wishes to unearth, but they realize that you are likely to know more than most about the horrors that rampage across the countryside. You may, in fact, have a tidbit of information that may help fell a marauding beast or cure an obscure disease, poison or curse. But more than that, people see in you a hope against the helplessness that plagues their daily existence. As the days grow ever further towards the lip of oblivion, you will be among the few trusted to help the beleaguered, as long as they don’t happen to think that you propagated these terrible events. You are likely to be sought as a voice of reason and are even given information on various perils. A noble may trust you to keep his dark secrets, provided you can help rid him of a supernatural problem. A group of cloistered clerics may turn to you in their darkest hour when their monastery is beset by some unimaginable monster, and these people can become valuable allies and informants as you continue to seek new and mind-numbing truths.",
            },
            'alternateBackgroundFeature': {
                "name": "Agent of the Crown",
                "description": "You are investigating directly under the auspice of some organizational sanction. You may or may not share this information with everyone, but your objectives are aligned with your benefactors. As such, you have a more focused and supportive network of contacts. While you may not garner sympathy or trust from others, you are backed by your organization, and can regularly expect to receive supplies and equipment as long as you are doing your duty, as well as safe houses and assistance from other agents that share your cause. If you are in a large population center, you can make contact with a fellow agent within 1d12 hours, and receive a tangible resupply within 3d12 hours.",
            },
        },
        {
            'name': 'Iron Route Bandit',
            "description": "The Iron Route, once the primary trade route between Phlan and Zhentil Keep, used to be a site of extensive banditry until the Phlan's recent occupation. Your time as an erstwhile bandit has given you plenty of experience in the saddle and a knack for acquiring and appraising other people's mounts, pets, and vehicles among other things. This particular set of skills has become very lucrative for you by working for the underground as a horse thief for a local guild of thieves and other shadowy organizations.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
                { 'name': 'Vehicles (Land)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Animal Handling', 'isAutoGranted': true },
                { 'name': 'Stealth', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Black-Market Breeder",
                "description": "You know how to find people who are always looking for stolen animals & vehicles, whether to provide for animal pit fights, or to supply some desperate rogues the means to get away faster on mounts during an illegal job. This contact not only provides you with information of what such animals & vehicles are in high demand in the area, but also offer to give you favors and information (DM choice) if you bring such animals & vehicles to them. Note: This is a variant of the Criminal Contact feature.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Knight',
            "description": "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them. Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn’t stand on its own—it’s connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you. Is your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them? What’s your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don’t embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family’s good graces, or shunned by the rest of your family? Does your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family? These details help establish your family and your title as features of the world of the campaign. A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status. If you wish to be a knight, choose the Retainers feature (see the sidebar) instead of the Position of Privilege feature. One of your commoner retainers is replaced by a noble who serves as your squire, aiding you in exchange for training on his or her own path to knighthood. Your two remaining retainers might include a groom to care for your horse and a servant who polishes your armor (and even helps you put it on). As an emblem of chivalry and the ideals of courtly love, you might include among your equipment a banner or other token from a noble lord or lady to whom you have given your heart — in a chaste sort of devotion. (This person could be your bond.)",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'History', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Retainers",
                "description": "You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Knight of the Order',
            "description": "You belong to an order of knights who have sworn oaths to achieve a certain goal. The nature of this goal depends on the order you serve, but in your eyes it is without question a vital and honorable endeavor. Faerûn has a wide variety of knightly orders, all of which have a similar outlook concerning their actions and responsibilities. Though the term “knight” conjures ideas of mounted, heavily armored warriors of noble blood, most knightly orders in Faerûn don’t restrict their membership to such individuals. The goals and philosophies of the order are more important than the gear and fighting style of its members, and so most of these orders aren’t limited to fighting types, but are open to all sorts of folk who are willing to battle and die for the order’s cause. The “Knightly Orders of Faerûn” sidebar details several of the orders that are active at present and is designed to help inform your decision about which group you owe allegiance to. KNIGHTLY ORDERS OF FAERÛN: Many who rightfully call themselves “knight” earn that title as part of an order in service to a deity, such as Kelemvor’s Eternal Order or Mystra’s Knights of the Mystic Fire. Other knightly orders serve a government, royal family, or are the elite military of a feudal state, such as the brutal Warlock Knights of Vaasa. Other knighthoods are secular and nongovernmental organizations of warriors who follow a particular philosophy, or consider themselves a kind of extended family, similar to an order of monks. Although there are organizations, such as the Knights of the Shield, that use the trappings of knighthood without necessarily being warriors, most folk of Faerûn who hear the word “knight” think of a mounted warrior in armor beholden to a code. Below are a few knightly organizations. Knights of the Unicorn. The Knights of the Unicorn began as a fad of romantically minded sons and daughters of patriar families in Baldur’s Gate. On a lark, they took the unicorn goddess Lurue as their mascot and went on various adventures for fun. The reality of the dangers they faced eventually sank in, as did Lurue’s tenets. Over time the small group grew and spread, gaining a following in places as far as Cormyr. The Knights of the Unicorn are chivalric adventurers who follow romantic ideals: life is to be relished and lived with laughter, quests should be taken on a dare, impossible dreams should be pursued for the sheer wonder of their completion, and everyone should be praised for their strengths and comforted in their weaknesses.  Knights of Myth Drannor. Long ago, the Knights of Myth Drannor were a famous adventuring band, and Dove Falconhand, one of the famous Seven Sisters, was one of them. The band took its name to honor the great but fallen city, just as the new Knights of Myth Drannor do today. With the city once again in ruins, Dove Falconhand decided to reform the group with the primary goal of building alliances and friendship between the civilized races of the world and goodly people in order to combat evil. The Knights of Myth Drannor once again ride the roads of the Dalelands, and they’ve begun to spread to the lands beyond. Their members, each accepted by Dove herself, are above all valiant and honest.  Knights of the Silver Chalice. The Knights of the Silver Chalice was formed by edict of the demigod Siamorphe in Waterdeep a century ago. Siamorphe’s ethos is the nobility’s right and responsibility to rule, and the demigod is incarnated as a different noble mortal in each generation. By the decree of the Siamorphe at that time, the Knights of the Silver Chalice took it upon themselves to put a proper heir on the throne of Tethyr and reestablish order in that kingdom. Since then they have grown to be the most popular knighthood in Tethyr, a nation that has hosted many knighthoods in fealty to the crown.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': false },
                { 'name': 'Musical Instrument', 'isAutoGranted': false },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Persuasion', 'isAutoGranted': true },
                { 'name': 'Arcana', 'isAutoGranted': false },
                { 'name': 'History', 'isAutoGranted': false },
                { 'name': 'Nature', 'isAutoGranted': false },
                { 'name': 'Religion', 'isAutoGranted': false },
            ],
            'backgroundFeature': {
                "name": "Knightly Regard",
                "description": "You receive shelter and succor from members of your knightly order and those who are sympathetic to its aims. If your order is a religious one, you can gain aid from temples and other religious communities of your deity. Knights of civic orders can get help from the community—whether a lone settlement or a great nation—that they serve, and knights of philosophical orders can find help from those they have aided in pursuit of their ideals, and those who share those ideals. This help comes in the form of shelter and meals, and healing when appropriate, as well as occasionally risky assistance, such as a band of local citizens rallying to aid a sorely pressed knight in a fight, or those who support the order helping to smuggle a knight out of town when he or she is being hunted unjustly.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Mercenary Veteran',
            "description": "As a sell-sword who fought battles for coin, you’re well acquainted with risking life and limb for a chance at a share of treasure. Now, you look forward to fighting foes and reaping even greater rewards as an adventurer. Your experience makes you familiar with the ins and outs of mercenary life, and you likely have harrowing stories of events on the battlefield. You might have served with a large outfit such as the Zhentarim or the soldiers of Mintarn, or a smaller band of sell-swords, maybe even more than one. (See the “Mercenaries of the North” sidebar for a collection of possibilities.) Now you’re looking for something else, perhaps greater reward for the risks you take, or the freedom to choose your own activities. For whatever reason, you’re leaving behind the life of a soldier for hire, but your skills are undeniably suited for battle, so now you fight on in a different way.  MERCENARIES OF THE NORTH: Countless mercenary companies operate up and down the Sword Coast and throughout the North. Most are small-scale operations that employ a dozen to a hundred folk who offer security services, hunt monsters and brigands, or go to war in exchange for gold. Some organizations, such as the Zhentarim, Flaming Fist, and the nation of Mintarn have hundreds or thousands of members and can provide private armies to those with enough funds. A few organizations operating in the North are described below.  The Chill. The cold and mysterious Lurkwood serves as the home of numerous groups of goblinoids that have banded together into one tribe called the Chill. Unlike most of their kind, the Chill refrains from raiding the people of the North and maintains relatively good relations so that they can hire themselves out as warriors. Few city-states in the North are willing to field an army alongside the Chill, but several are happy to quietly pay the Chill to battle the Uthgardt, orcs, trolls of the Evermoors, and other threats to civilization.  Silent Rain. Consisting solely of elves, Silent Rain is a legendary mercenary company operating out of Evereska. Caring little for gold or fame, Silent Rain agrees only to jobs that either promote elven causes or involve destroying orcs, gnolls, and the like. Prospective employers must leave written word (in Elvish) near Evereska, and the Silent Rain sends a representative if interested.  The Bloodaxes. Founded in Sundabar nearly two centuries ago, the Bloodaxes were originally a group of dwarves outcast from their clans for crimes against the teachings of Moradin Soulforger. They began hiring out as mercenaries to whoever in the North would pay them. Since then the mercenary company has broadened its membership to other races, but every member is an exile, criminal, or misfit of some sort looking for a fresh start and a new family among the bold Bloodaxes.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
                { 'name': 'Vehicles (Land)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Mercenary Life",
                "description": "You know the mercenary life as only someone who has experienced it can. You are able to identify mercenary companies by their emblems, and you know a little about any such company, including the names and reputations of its commanders and leaders, and who has hired them recently. You can find the taverns and festhalls where mercenaries abide in any area, as long as you speak the language. You can find mercenary work between adventures sufficient to maintain a comfortable lifestyle (see “Practicing a Profession” under “Downtime Activities” in chapter 8 of the Player’s Handbook).",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Mulmaster Aristocrat',
            "description": "From your hilltop home, you have looked down (literally and perhaps figuratively) on the unwashed masses of Mulmaster for your entire life. Your fur-trimmed robes and training in the visual and performing arts mark you as wealthy and perhaps well-born; you are a member of the City of Danger's aristocracy. None of your immediate family members sits on the Council of Blades or is even a Zor or Zora...yet. Nevertheless, you are one of Mulmaster's elite, and whether you personally covet a higher standing or not, you are at home in the dance halls where the aristocracy gathers to plot, to scheme, to do business, to discuss the arts, and, above all, tosee, and to be seen.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': true },
                { 'name': 'Musical Instrument', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Performance', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Highborn",
                "description": "Mulmaster is run by and for its aristoracy. Every other class of citizen in the city defers to you, and even the priesthood, Soldiery, Hawks, and Cloaks treat you with deference. Other aristocrats and nobles accept you in their circles and likely know you or of you. Your connections can get you the ear of a Zor or Zora under the right circumstances. [Note: This feature is a variant of the Noble feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Noble',
            "description": "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them. Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn’t stand on its own—it’s connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you. Is your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them? What’s your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don’t embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family’s good graces, or shunned by the rest of your family? Does your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family? These details help establish your family and your title as features of the world of the campaign.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'History', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Position of Privilege",
                "description": "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Outlander',
            "description": "You grew up in the wilds, far from civilization and the comforts of town and technology. You’ve witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don’t know the specific features of the terrain, you know the ways of the wild.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Musical Instrument', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Survival', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Wanderer",
                "description": "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Phlan Insurgent',
            "description": "The taking of Phlan by Vorgansharax is a clear memory in your mind. You were going about your everyday business when the green dragon's forces spilled out of the sewers and assailed your home. Many of Phlan's citizens, young and old alike, were captured, killed, or offered as tribute to the Maimed Virulence. You, yourself were one of those captured. But, either with the help of adventurers or through your own wits and sheer determination, you escaped. Rather than flee the region, you've chosen to stay and fight. Finding refuge outside the town and the deadly thicket surrounding it, you strike out against the Tears of the Virulence and their monstrous allies. You've learned to survive in dire and desperate circumstances, with supplies running low and the arrival of reinforcements uncertain. You've grown accustomed to acting under the cover of night, dealing what blows you can to avenge the friends and family you lost within the currently occupied Phlan. You will drive Vorgansharax out, or you die trying. Removed from your life as a townsperson, you've adapted to rough life in the wilds surrounding Phlan. The trade you practiced still influences your outlook, the manner in which you approach situations, and the way you contribute to the resistance movement against the Maimed Virulence. You can roll on the following table to determine what your occupation was before the fall, or choose one that best fits your character (select from either the general column or the specific column, but not both) Fisher /Stojanow River Worker; Hunter / Twilight Marsh Worker; Craftsperson /Mantor's Library Scribe;Priest/Priestess / Clergy of Ilmater; Cook / Laughing Goblin Server; City Watch / Black Fist Guard; Servant / House Sokol Retainer; Unskilled Laborer / Bay of Phlan Dockworker",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': true },
                { 'name': 'Vehicles (Land)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Stealth', 'isAutoGranted': true },
                { 'name': 'Survival', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Guerrilla",
                "description": "You've come to know the surrounding forests, streams, caves, and other natural features in which you can take refuge — or set up ambushes. You can quickly survey your environment for advantageous features. Additionally, you can scavenge around your natural surroundings to cobble together simple supplies (such as improvised torches, rope, patches of fabric, etc.) that are consumed after use. [Note: This feature is a variant of the Outlander feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Phlan Refugee',
            "description": "Gone are the happier days of walking into the Laughing Goblin Inn after a hard day’s labor. Everything has changed, and you are lucky to be alive. Back in Phlan you could count yourself among those street-wise folks who knew when to pay a bribe and who to work with to make a living.  Your ability to listen to the winds of change have saved you before, and this time they allowed you to be one of the lucky few who escaped Phlan with something more than just the shirt on your back. ",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Insight', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Phlan Survivor",
                "description": "Whatever your prior standing was, you are now one of the many refugees that have come to Mulmaster. You are able to find refuge with others from Phlan and those who sympathize with your plight. Within Mulmaster this means that you can find a place to bed down, recover, and hide from the watch with either other refugees from Phlan, or the Zhents within the ghettos. [Note: This feature is a variant of the Folk Hero feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Pirate',
            "description": "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new. Discuss the nature of the ship you previously sailed with your Dungeon Master. Was it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? How famous (or infamous) is it? Is it widely traveled? Is it still sailing, or is it missing and presumed lost with all hands? What were your duties on board — boatswain, captain, navigator, cook, or some other position? Who were the captain and first mate? Did you leave your ship on good terms with your fellows, or on the run? You spent your youth under the sway of a dread pirate, a ruthless cutthroat who taught you how to survive in a world of sharks and savages. You’ve indulged in larceny on the high seas and sent more than one deserving soul to a briny grave. Fear and bloodshed are no strangers to you, and you’ve garnered a somewhat unsavory reputation in many a port town.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Navigator\'s Tools', 'isAutoGranted': true },
                { 'name': 'Vehicles (Water)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Perception', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Bad Reputation",
                "description": "No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Sage',
            "description": "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
            'numberOfExtraLanguages': 2,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 0,
            'toolOptions': [],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Arcana', 'isAutoGranted': true },
                { 'name': 'History', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Researcher",
                "description": "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Sailor',
            "description": "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new. Discuss the nature of the ship you previously sailed with your Dungeon Master. Was it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? How famous (or infamous) is it? Is it widely traveled? Is it still sailing, or is it missing and presumed lost with all hands? What were your duties on board — boatswain, captain, navigator, cook, or some other position? Who were the captain and first mate? Did you leave your ship on good terms with your fellows, or on the run?",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Navigator\'s Tools', 'isAutoGranted': true },
                { 'name': 'Vehicles (Water)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Perception', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Ship's Passage",
                "description": "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you’re calling in a favor, you can’t be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Secret Identity',
            "description": "Even though you are a non-human, despite Hillsfar's Great Law of Humanity, you continue to live in the City of Trade. You do so by maintaining a secret identity, forging documents, and wearing a disguise. Few, if any, know you aren't human. If you're a halfling or gnome, you pass as a little person or a child. If you're a half-elf, half-orc, or genasi, you disguise your non-human features. Other races use a combination of disguise and concealing clothing to hide. Your reasons for doing so are your own. Perhaps you're a dissident or the agent of a foreign power. Maybe you have a relationship with someone you cannot bear to leave. Regardless, this way of life has taken a heavy toll on you.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Disguise Kit', 'isAutoGranted': true },
                { 'name': 'Forgery Kit', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Stealth', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Secret Identity",
                "description": "You have created a secret identity that you use to conceal your true race and that offers a covering explanation for your presence in Hillsfar. In addition, you can forge documents, including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy Note: This feature is a variant of the Charlatan feature.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Shade Fanatic',
            "description": "You grew up at a time when the wizards of Netheril were at war with the elves of Cormanthor. You recall sitting cross-legged hearing the stories of the glorious Thultanthar, also called the Shade Enclave and the City of Shade, and aspired to study there and maybe even did, for a time. Your dreams came crashing down a few years ago when Thultanthar fell from the sky upon Myth Drannor. You know that there was a Netherese Garrison stationed near Hillsfar and have heard rumors that its downfall came from traitors within the ranks.  You remain loyal to Netheril and seek other Shade loyalists and fanatics in the Cormanthor for-est and the areassurroundingHillsfar.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'Netherese', 'isAutoGranted': true },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Forgery Kit', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Intimidation', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Secret Society",
                "description": "You have a special way of communicating with others who feel the same way you do about the Shade.  When you enter a village or larger city you can identify contact who will give you information on those that would hinder your goals and those would help yousimply because of your desire to see the Shade Enclave return in all its glory.  [Note: This feature is a variant of the Criminal feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Soldier',
            "description": "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war. When you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble’s or merchant’s private army, or a mercenary company.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
                { 'name': 'Vehicles (Land)', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Intimidation', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Military Rank",
                "description": "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Spy',
            "description": "At some point or another you secretly gathered information on a group of people or maybe one person. Maybe you were hired by a rival or political enemy, maybe you were searching for military information to help the opposing army, maybe you were trying to fulfil your own agenda, but regardless you are good at finding things and hiding your true self. You are used to living on the edge of danger, and doubly used to doubting people's intentions. Who did you spy for, yourself or some benefactor? Who or what did you spy on? What secrets did you uncover? Why did you stop? Or did you? ",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
                { 'name': 'Thieves\' Tools', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Stealth', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Echo of the Great Game",
                "description": "You have learnt so much of techniques from years of stealth and also trickery about how to not draw attention to yourself. You have an utterly un extraordinary way of walk and also way of talk and also move are deliberately forgettable. Whenever while you’re wearing the common clothes, nobody can remember your face nor any special features of you too, unless until they actively make an effort to do so. You have In an extra advantage that is you know how to write in the special codes that can only be readable by the people who trained in deciphering of it.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Stojanow Prisoner',
            "description": "'We need to leave, now!' Those words still haunt your dreams at night. When everyone was fleeing Phlan, you choose to stay. Whether out of an emotional attachment, or pursuit of riches, you made the decision that would affect the rest of your life. Food became scarcer for those without connections. You became a beggar and to stay alive you bartered information to any interested party with food or gold to spare. You were good at what you did, and thought you were invincible. That changed when you were captured by the Tears of Virulence, the soldiers of Vorgansharax, the Maimed Virulence, for selling secrets to those bent on overthrowing the dragon. They locked you in the cells of Stojanow Gate. The first weeks you hoped to stay alive. As the weeks turned into months and the interrogations continued, you began to pray for death.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': true },
                { 'name': 'Thieves\' Tools', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': true },
                { 'name': 'Perception', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Ex-Convict",
                "description": "The knowledge gained during your incarceration lets you gain insight into local guards and jailors. You know which will accept bribes, or look the other way for you. You can also seek shelter for yourself from authorities with other criminals in the area. [Note: This feature is a variant of the Courtier feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Ticklebelly Nomad',
            "description": "You were born into a nomadic tribe that called the Ticklebelly Hills home. You migrated from location to location, living off the land with your tribe. The tribewould seasonally travel south into the Grass Sea and the Giant’s Cairn, north into the Dragonspine Mountains, and even occasionally east across the Stojanow River to the borders of the Quivering forest.In your migrations, your people have come to know the stone giant tribes that populate the Giant’s Cairn. The dragon cultists came to the hills one day—magic-users wearing purple and riding horrid beasts, black-clad warriors wearing wicked masks, and even soldiers from the nearby town of Phlan. Then the dragon called Vorgansharax arrived and laired in the hills, causing horrid thickets to grow and animals to act unusually. The cultists began raiding nomad camps for victims to offer to the wyrm. Eventually, the dragon moved on to attack Phlan, but life was never again the same for the nomads of the Ticklebelly Hills.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'Giant', 'isAutoGranted': true }
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Herbalism Kit', 'isAutoGranted': true }
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Animal Handling', 'isAutoGranted': true },
                { 'name': 'Nature', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "At Home in the Wild",
                "description": "The wilderness is your home and you are comfortable dwelling in it. You can find a place to hide, rest, or recuperate when out in the wild. This place of rest is secure enough to conceal you from most natural threats. Threats that are supernatural, magical, or are actively seeking you out might do so with difficulty depending on the nature of the threat (as determined by the DM). However, this feature doesn’t shield or conceal you from scrying, mental probing, nor from threats that don’t necessarily require the five senses to find you.[Note:This feature is a variant of the Folk Hero feature.]",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Trade Sheriff',
            "description": "You are one of the many people that make sure the trade routes are clear at ALL times. You assure that the Great Law of Trade is followed at all costs. You work by yourself or in groups to quell bandits and brigands who might stop trade routes from going through. You investigate potential ambushes and possible rumors as to someone wanting to rob or stop caravans. You are as much an investigator as you are law enforcement. You are able to go into a town/village around the Hillsfar area and find a contact that is willing to give you information from rumor to fact. This sometimes comes at a cost of a minor bribe of 1-9 silver pieces.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'Elvish', 'isAutoGranted': true }
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Thieves\' Tools', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Investigation', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Investigative Services",
                "description": "You are part of a small force outside of Hillsfar. You have a special way of communicating with others and they seem to be at ease around you. You can invoke your rank to allow you access to a crime scene or to requisition equipment or horses on a temporary basis. When you enter a town or village around Hillsfar you can identify a contact who will give you information on the local rumors and would help you simply because of your desire to get answers and information for anyone wanting to disrupt trade. Note: This feature is a variant of the Soldier feature.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Urban Bounty Hunter',
            "description": "Before you became an adventurer, your life was already full of conflict and excitement, because you made a living tracking down people for pay. Unlike some people who collect bounties, though, you aren’t a savage who follows quarry into or through the wilderness. You’re involved in a lucrative trade, in the place where you live, that routinely tests your skills and survival instincts. What’s more, you aren’t alone, as a bounty hunter in the wild would be: you routinely interact with both the criminal subculture and other bounty hunters, maintaining contacts in both areas to help you succeed. You might be a cunning thief-catcher, prowling the rooftops to catch one of the myriad burglars of the city. Perhaps you are someone who has your ear to the street, aware of the doings of thieves’ guilds and street gangs. You might be a “velvet mask” bounty hunter, one who blends in with high society and noble circles in order to catch the criminals that prey on the rich, whether pickpockets or con artists. The community where you plied your trade might have been one of Faerûn’s great metropolises, such as Waterdeep or Baldur’s Gate, or a less populous location, perhaps Luskan or Yartar — any place that’s large enough to have a steady supply of potential quarries. As a member of an adventuring party, you might find it more difficult to pursue a personal agenda that doesn’t fit with the group’s objectives — but on the other hand, you can take down much more formidable targets with the help of your companions.",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': false },
                { 'name': 'Musical Instrument', 'isAutoGranted': false },
                { 'name': 'Thieves\' Tools', 'isAutoGranted': false },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Deception', 'isAutoGranted': false },
                { 'name': 'Insight', 'isAutoGranted': false },
                { 'name': 'Persuasion', 'isAutoGranted': false },
                { 'name': 'Stealth', 'isAutoGranted': false },
            ],
            'backgroundFeature': {
                "name": "Ear to the Ground",
                "description": "You are in frequent contact with people in the segment of society that your chosen quarries move through. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city you visit, a person who provides information about the people and places of the local area.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Urchin',
            "description": "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You’ve survived despite all odds, and did so through cunning, strength, speed, or some combination of each. You begin your adventuring career with enough money to live modestly but securely for at least ten days. How did you come by that money? What allowed you to break free of your desperate circumstances and embark on a better life?",
            'numberOfExtraLanguages': 0,
            'languageOptions': [],
            'numberOfToolsGranted': 2,
            'toolOptions': [
                { 'name': 'Disguise Kit', 'isAutoGranted': true },
                { 'name': 'Thieves\' Tools', 'isAutoGranted': true },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Sleight of Hand', 'isAutoGranted': true },
                { 'name': 'Stealth', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "City Secrets",
                "description": "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Uthgardt Tribe Member',
            "description": "Though you might have only recently arrived in civilized lands, you are no stranger to the values of cooperation and group effort when striving for supremacy. You learned these principles, and much more, as a member of an Uthgardt tribe. Your people have always tried to hold to the old ways. Tradition and taboo have kept the Uthgardt strong while the kingdoms of others have collapsed into chaos and ruin. But for the last few generations, some bands among the tribes were tempted to settle, make peace, trade, and even to build towns. Perhaps this is why Uthgar chose to raise up the totems among the people as living embodiments of his power. Perhaps they needed a reminder of who they were and from whence they came. The Chosen of Uthgar led bands back to the old ways, and most of your people abandoned the soft ways of civilization. BARBARIAN TRIBES OF FAERÛN: Though this section details the Uthgardt specifically, either it or the outlander background from the Player’s Handbook can be used for a character whose origin lies with one of the other barbarian tribes in Faerûn. You might be a fair-haired barbarian of the Reghed, dwelling in the shadow of the Reghed Glacier in the far North near Icewind Dale. You might also be of the nomadic Rashemi, noted for their savage berserkers and their masked witches. Perhaps you hail from one of the wood elf tribes in the Chondalwood, or the magic-hating human tribes of the sweltering jungles of Chult. You might have grown up in one of the tribes that had decided to settle down, and now that they have abandoned that path, you find yourself adrift. Or you might come from a segment of the Uthgardt that adheres to tradition, but you seek to bring glory to your tribe by achieving great things as a formidable adventurer. See the “Uthgardt Lands” section of chapter 2 for details on each tribe’s territory and its activities that will help you choose your affiliation.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Artisan\'s Tools', 'isAutoGranted': false },
                { 'name': 'Musical Instrument', 'isAutoGranted': false },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'Athletics', 'isAutoGranted': true },
                { 'name': 'Survival', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Uthgardt Heritage",
                "description": "You have an excellent knowledge of not only your tribe’s territory, but also the terrain and natural resources of the rest of the North. You are familiar enough with any wilderness area that you find twice as much food and water as you normally would when you forage there. Additionally, you can call upon the hospitality of your people, and those folk allied with your tribe, often including members of druid circles, tribes of nomadic elves, the Harpers, and the priesthoods devoted to the gods of the First Circle.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
        {
            'name': 'Waterdhavian Noble',
            "description": "You are a scion of one of the great noble families of Waterdeep. Human families who jealously guard their privilege and place in the City of Splendors, Waterdhavian nobles have a reputation across Faerûn for being eccentric, spoiled, venal, and, above all else, rich. Whether you are a shining example of the reason for this reputation or one who proves the rule by being an exception, people expect things of you when they know your surname and what it means. Your reasons for taking up adventuring likely involve your family in some way: Are you the family rebel, who prefers delving in filthy dungeons to sipping zzar at a ball? Or have you taken up sword or spell on your family’s behalf, ensuring that they have someone of renown to see to their legacy? Work with your DM to come up with the family you are part of —there are around seventy-five lineages in Waterdeep, each with its own financial interests, specialties, and schemes. You might be part of the main line of your family, possibly in line to become its leader one day. Or you might be one of any number of cousins, with less prestige but also less responsibility.",
            'numberOfExtraLanguages': 1,
            'languageOptions': [
                { 'name': 'ANY', 'isAutoGranted': false },
            ],
            'numberOfToolsGranted': 1,
            'toolOptions': [
                { 'name': 'Gaming Set', 'isAutoGranted': false },
                { 'name': 'Musical Instrument', 'isAutoGranted': false },
            ],
            'numberOfSkillsGranted': 2,
            'skillOptions': [
                { 'name': 'History', 'isAutoGranted': true },
                { 'name': 'Persuasion', 'isAutoGranted': true },
            ],
            'backgroundFeature': {
                "name": "Kept in Style",
                "description": "While you are in Waterdeep or elsewhere in the North, your house sees to your everyday needs. Your name and signet are sufficient to cover most of your expenses; the inns, taverns, and festhalls you frequent are glad to record your debt and send an accounting to your family’s estate in Waterdeep to settle what you owe. This advantage enables you to live a comfortable lifestyle without having to pay 2 gp a day for it, or reduces the cost of a wealthy or aristocratic lifestyle by that amount. You may not maintain a less affluent lifestyle and use the difference as income—the benefit is a line of credit, not an actual monetary reward.",
            },
            'alternateBackgroundFeature': {
                'name': '',
                'description': '',
            },
        },
    ],
    'BACKGROUND_FEATURES': [
        {
            "name": "Shelter of the Faithful",
            "conferringBg": "Acolyte",
            "description": "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
        },
        {
            "name": "Cultural Chameleon",
            "conferringBg": "Anthropologist",
            "description": "Before becoming an adventurer, you spent much of your adult life away from your homeland, living among people different from your kin. You came to understand these foreign cultures and the ways of their people, who eventually treated you as one of their own. One culture had more of an influence on you than any other, shaping your beliefs and customs. Choose a race whose culture you've adopted.",
        },
        {
            "name": "Adept Linguist",
            "conferringBg": "Anthropologist",
            "description": "You can communicate with humanoids who don't speak any language you know. You must observe the humanoids interacting with one another for at least 1 day, after which you learn a handful of important words, expressions, and gestures – enough to communicate on a rudimentary level.",
        },
        {
            "name": "Dust Digger",
            "conferringBg": "Archaeologist",
            "description": "Prior to becoming an adventurer, you spent most of your young life crawling around in the dust, pilfering relics of questionable value from crypts and ruins. Though you managed to sell a few of your discoveries and earn enough coin to buy proper adventuring gear, you have held onto an item that has great emotional value to you. Roll on the Signature Item table to see what you have, or choose an item from the table.",
        },
        {
            "name": "Double Agent",
            "conferringBg": "Black Fist Double Agent",
            "description": "You have a reliable and trusty contact within the Tears of Virulence garrison in Phlan to whom you pass information and secrets. In exchange, you can get away with minor criminal offenses within the town of Phlan. In addition, your Black Fists contacts can help you secure an audience with the Lord Regent, the Lord Sage, members of the Black Fists, or deposed nobles and authority figures who are sympathetic to the Phlan refugees and insurgents. Note: This feature is a variant of the Noble feature. ",
        },
        {
            "name": "Wagonmaster",
            "conferringBg": "Caravan Specialist",
            "description": "You are used to being in charge of the operation and your reputation for reliability has you on a short list when the job is critical. Experience has taught you to rely on your gut. Othersrecognize this and look to you for direction when a situation gets serious. You are able to identify the most defensible loca-tions for camping. If you are part of a caravan outfit, you areable to attract two additional workers that are loyal to you based on your reputation. You have an excellent memory for maps and geography and can always determine your cardinal directions while traveling. [Note: This feature is a variant of the Outlander feature.]",
        },
        {
            "name": "False Identity",
            "conferringBg": "Charlatan",
            "description": "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.",
        },
        {
            "name": "Watcher’s Eye",
            "conferringBg": "City Watch",
            "description": "Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you’re more likely to be welcome in the former locations rather than the latter.",
        },
        {
            "name": "Respect of the Stout Folk",
            "conferringBg": "Clan Crafter",
            "description": "As well respected as clan crafters are among outsiders, no one esteems them quite so highly as dwarves do. You always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer you (and possibly your compatriots) the finest accommodations and assistance.",
        },
        {
            "name": "Library Access",
            "conferringBg": "Cloistered Scholar",
            "description": "Though others must often endure extensive interviews and significant fees to gain access to even the most common archives in your library, you have free and easy access to the majority of the library, though it might also have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access. You have a working knowledge of your cloister’s personnel and bureaucracy, and you know how to navigate those connections with some ease. Additionally, you are likely to gain preferential treatment at other libraries across the Realms, as professional courtesy shown to a fellow scholar.",
        },
        {
            "name": "Shelter of the Elven Clergy",
            "conferringBg": "Cormanthor Refugee",
            "description": "The clerics of Elventree have vowed to care for the Cormanthor refugees. They will help you when they can, including providing you and your companions with free healing and care at temples, shrines, and other established presences in Elventree. They will also provide you (but only you) with a poor lifestyle. [Note: This feature is a variant of the Acolyte feature.]",
        },
        {
            "name": "Court Functionary",
            "conferringBg": "Courtier",
            "description": "Your knowledge of how bureaucracies function lets you gain access to the records and inner workings of any noble court or government you encounter. You know who the movers and shakers are, whom to go to for the favors you seek, and what the current intrigues of interest in the group are.",
        },
        {
            "name": "Criminal Contact",
            "conferringBg": "Criminal",
            "description": "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.",
        },
        {
            "name": "Deep Mine",
            "conferringBg": "Earthspur Miner",
            "description": "You are used to navigating the deep places of the earth. You never get lost in caves or mines if you have either seen an accurate map of them or have been through them before. Furthermore, you are able to scrounge fresh water and food for yourself and as many as five other people each day if you are in a mine or natural caves. [Note: This feature is a variant of the Outlander feature.]",
        },
        {
            "name": "By Popular Demand",
            "conferringBg": "Entertainer",
            "description": "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble’s court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.",
        },
        {
            "name": "Dual Personalities",
            "conferringBg": "Faceless",
            "description": "Most of your fellow adventurers and the world know you as your persona. Those who seek to learn more about you—your weaknesses, your origins, your purpose—find themselves stymied by your disguise. Upon donning a disguise and behaving as your persona, you are unidentifiable as your true self. By removing your disguise and revealing your true face, you are no longer identifiable as your persona. This allows you to change appearances between your two personalities as often as you wish, using one to hide the other or serve as convenient camouflage. However, should someone realize the connection between your persona and your true self, your deception might lose its effectiveness.",
        },
        {
            "name": "Safe Haven",
            "conferringBg": "Faction Agent",
            "description": "As a faction agent, you have access to a secret network of supporters and operatives who can provide assistance on your adventures. You know a set of secret signs and passwords you can use to identify such operatives, who can provide you with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives for you or risk revealing their true identities.",
        },
        {
            "name": "All Eyes on You",
            "conferringBg": "Far Traveler",
            "description": "Your accent, mannerisms, figures of speech, and perhaps even your appearance all mark you as foreign. Curious glances are directed your way wherever you go, which can be a nuisance, but you also gain the friendly interest of scholars and others intrigued by far-off lands, to say nothing of everyday folk who are eager to hear stories of your homeland. You can parley this attention into access to people and places you might not otherwise have, for you and your traveling companions. Noble lords, scholars, and merchant princes, to name a few, might be interested in hearing about your distant homeland and people.",
        },
        {
            "name": "Rustic Hospitality",
            "conferringBg": "Folk Hero",
            "description": "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.",
        },
        {
            "name": "Red Plume and Mage Guild Contacts",
            "conferringBg": "Gate Urchin",
            "description": "You made a number of friends among the Red Plumes and the Mage's Guild when you lived at the Hillsfar Gate. They remember you fondly and help you in little ways when they can. You can invoke their assistance in and around Hillsfar to obtain food, as well as simple equipment for temporary use. You can also invoke it to gain access to the low-security areas of their garrisons, halls, and encampments. [Note: This feature is a variant of the Soldier feature.]",
        },
        {
            "name": "By Popular Demand",
            "conferringBg": "Gladiator",
            "description": "You can always find a place to perform in any place that features combat for entertainment — perhaps a gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.",
        },
        {
            "name": "Guild Membership",
            "conferringBg": "Guild Artisan",
            "description": "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild’s coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild’s good graces.",
        },
        {
            "name": "Guild Membership",
            "conferringBg": "Guild Merchant",
            "description": "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild’s coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild’s good graces.",
        },
        {
            "name": "Harborfolk",
            "conferringBg": "Harborfolk",
            "description": "You grew up on the docks and waters of Mulmaster Harbor. The harborfolk remember you and still treat you as one of them. They welcome you and your companions. While they might charge you for it, they'll always offer what food and shelter they have; they'll even hide you if the City Watch is after you (but not if the Hawks are). [Note: This feature is a variant of the Folk Hero feature.]",
        },
        {
            "name": "Heart of Darkness",
            "conferringBg": "Haunted One",
            "description": "Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, should you find yourself facing an enemy alone.",
        },
        {
            "name": "Discovey",
            "conferringBg": "Hermit",
            "description": "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign.",
        },
        {
            "name": "Factor",
            "conferringBg": "Hillsfar Merchant",
            "description": "Although you've left the day-to-day life of a merchant behind, your family has assigned you the services of a loyal retainer from the business, a factor, husbanding agent, seafarer, caravan guard, or clerk. This individual is a commoner who can perform mundane tasks for you such as making purchases, delivering messages, and running errands. He or she will not fight for you and will not follow you into obviously dangerous areas (such as dungeons), and will leave if frequently endangered or abused. If he or she is killed, the family assigns you another within a few days. Note: This feature is a variant of the Noble Knight's Retainers feature.",
        },
        {
            "name": "Trade Contact",
            "conferringBg": "Hillsfar Merchant (alternate)",
            "description": "You and your family have trade contacts such as caravan masters, shopkeepers, sailors, artisans, and farmers throughout the Moonsea region and all along the Sword Coast. Once per game session, when adventuring in either of those areas, you can use those contacts to get information about the local area or to pass a message to someone in those areas, even across the great distance between the two areas. Note: This feature is a variant of the Criminal Contact and Researcher features.",
        },
        {
            "name": "Secret Passage",
            "conferringBg": "Hillsfar Smuggler",
            "description": "You can call on your contacts within the smuggling community to secure secret passage into or out of Hillsfar for yourself and your adventuring companions, no questions asked, and no Red Plume entanglements. Because you’re calling in a favor, you can’t be certain they will be able to help on your timetable or at all. Your Dungeon Master will determine whether you can be smuggled into or out of the city. In return for your passage, you and your companions may owe the Rogue's Guild a favor and/or may have to pay bribes. [Note: This feature is a variant of the Sailor feature.]",
        },
        {
            "name": "Inheritance",
            "conferringBg": "Inheritor",
            "description": "Choose or randomly determine your inheritance from among the possibilities in the table below. Work with your Dungeon Master to come up with details: Why is your inheritance so important, and what is its full story? You might prefer for the DM to invent these details as part of the game, allowing you to learn more about your inheritance as your character does. The Dungeon Master is free to use your inheritance as a story hook, sending you on quests to learn more about its history or true nature, or confronting you with foes who want to claim it for themselves or prevent you from learning what you seek. The DM also determines the properties of your inheritance and how they figure into the item’s history and importance. For instance, the object might be a minor magic item, or one that begins with a modest ability and increases in potency with the passage of time. Or, the true nature of your inheritance might not be apparent at first and is revealed only when certain conditions are met. When you begin your adventuring career, you can decide whether to tell your companions about your inheritance right away. Rather than attracting attention to yourself, you might want to keep your inheritance a secret until you learn more about what it means to you and what it can do for you. Item options: A document such as a map, a letter, or a journal; a trinket; an article of clothing; a piece of jewelry; an arcane book or formulary; a written story, song, poem, or secret; a tattoo or other body marking.",
        },
        {
            "name": "Legal Authority",
            "conferringBg": "Inquisitor",
            "description": "As an inquisitor of the church, you have the authority to arrest criminals. In the absence of other authorities, you are authorized to pass judgment and even carry out sentencing. If you abuse this power, however, your superiors in the church might strip it from you.",
        },
        {
            "name": "Trusted Source",
            "conferringBg": "Investigator",
            "description": "People may see you as a madman seeking information that no one wishes to unearth, but they realize that you are likely to know more than most about the horrors that rampage across the countryside. You may, in fact, have a tidbit of information that may help fell a marauding beast or cure an obscure disease, poison or curse. But more than that, people see in you a hope against the helplessness that plagues their daily existence. As the days grow ever further towards the lip of oblivion, you will be among the few trusted to help the beleaguered, as long as they don’t happen to think that you propagated these terrible events. You are likely to be sought as a voice of reason and are even given information on various perils. A noble may trust you to keep his dark secrets, provided you can help rid him of a supernatural problem. A group of cloistered clerics may turn to you in their darkest hour when their monastery is beset by some unimaginable monster, and these people can become valuable allies and informants as you continue to seek new and mind-numbing truths.",
        },
        {
            "name": "Agent of the Crown",
            "conferringBg": "Investigator (alternate)",
            "description": "You are investigating directly under the auspice of some organizational sanction. You may or may not share this information with everyone, but your objectives are aligned with your benefactors. As such, you have a more focused and supportive network of contacts. While you may not garner sympathy or trust from others, you are backed by your organization, and can regularly expect to receive supplies and equipment as long as you are doing your duty, as well as safe houses and assistance from other agents that share your cause. If you are in a large population center, you can make contact with a fellow agent within 1d12 hours, and receive a tangible resupply within 3d12 hours.",
        },
        {
            "name": "Black-Market Breeder",
            "conferringBg": "Iron Route Bandit",
            "description": "You know how to find people who are always looking for stolen animals & vehicles, whether to provide for animal pit fights, or to supply some desperate rogues the means to get away faster on mounts during an illegal job. This contact not only provides you with information of what such animals & vehicles are in high demand in the area, but also offer to give you favors and information (DM choice) if you bring such animals & vehicles to them. Note: This is a variant of the Criminal Contact feature.",
        },
        {
            "name": "Retainers",
            "conferringBg": "Knight",
            "description": "You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
        },
        {
            "name": "Knightly Regard",
            "conferringBg": "Knight of the Order",
            "description": "You receive shelter and succor from members of your knightly order and those who are sympathetic to its aims. If your order is a religious one, you can gain aid from temples and other religious communities of your deity. Knights of civic orders can get help from the community—whether a lone settlement or a great nation—that they serve, and knights of philosophical orders can find help from those they have aided in pursuit of their ideals, and those who share those ideals. This help comes in the form of shelter and meals, and healing when appropriate, as well as occasionally risky assistance, such as a band of local citizens rallying to aid a sorely pressed knight in a fight, or those who support the order helping to smuggle a knight out of town when he or she is being hunted unjustly.",
        },
        {
            "name": "Mercenary Life",
            "conferringBg": "Mercenary Veteran",
            "description": "You know the mercenary life as only someone who has experienced it can. You are able to identify mercenary companies by their emblems, and you know a little about any such company, including the names and reputations of its commanders and leaders, and who has hired them recently. You can find the taverns and festhalls where mercenaries abide in any area, as long as you speak the language. You can find mercenary work between adventures sufficient to maintain a comfortable lifestyle (see “Practicing a Profession” under “Downtime Activities” in chapter 8 of the Player’s Handbook).",
        },
        {
            "name": "Highborn",
            "conferringBg": "Mulmaster Aristocrat",
            "description": "Mulmaster is run by and for its aristoracy. Every other class of citizen in the city defers to you, and even the priesthood, Soldiery, Hawks, and Cloaks treat you with deference. Other aristocrats and nobles accept you in their circles and likely know you or of you. Your connections can get you the ear of a Zor or Zora under the right circumstances. [Note: This feature is a variant of the Noble feature.]",
        },
        {
            "name": "Position of Privilege",
            "conferringBg": "Noble",
            "description": "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.",
        },
        {
            "name": "Wanderer",
            "conferringBg": "Outlander",
            "description": "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
        },
        {
            "name": "Guerrilla",
            "conferringBg": "Phlan Insurgent",
            "description": "You've come to know the surrounding forests, streams, caves, and other natural features in which you can take refuge — or set up ambushes. You can quickly survey your environment for advantageous features. Additionally, you can scavenge around your natural surroundings to cobble together simple supplies (such as improvised torches, rope, patches of fabric, etc.) that are consumed after use. [Note: This feature is a variant of the Outlander feature.]",
        },
        {
            "name": "Phlan Survivor",
            "conferringBg": "Phlan Refugee",
            "description": "Whatever your prior standing was, you are now one of the many refugees that have come to Mulmaster. You are able to find refuge with others from Phlan and those who sympathize with your plight. Within Mulmaster this means that you can find a place to bed down, recover, and hide from the watch with either other refugees from Phlan, or the Zhents within the ghettos. [Note: This feature is a variant of the Folk Hero feature.]",
        },
        {
            "name": "Bad Reputation",
            "conferringBg": "Pirate",
            "description": "No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities.",
        },
        {
            "name": "Researcher",
            "conferringBg": "Sage",
            "description": "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
        },
        {
            "name": "Ship's Passage",
            "conferringBg": "Sailor",
            "description": "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you’re calling in a favor, you can’t be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.",
        },
        {
            "name": "Secret Identity",
            "conferringBg": "Secret Identity",
            "description": "You have created a secret identity that you use to conceal your true race and that offers a covering explanation for your presence in Hillsfar. In addition, you can forge documents, including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy Note: This feature is a variant of the Charlatan feature.",
        },
        {
            "name": "Secret Society",
            "conferringBg": "Shade Fanatic",
            "description": "You have a special way of communicating with others who feel the same way you do about the Shade.  When you enter a village or larger city you can identify contact who will give you information on those that would hinder your goals and those would help yousimply because of your desire to see the Shade Enclave return in all its glory.  [Note: This feature is a variant of the Criminal feature.]",
        },
        {
            "name": "Military Rank",
            "conferringBg": "Soldier",
            "description": "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.",
        },
        {
            "name": "Echo of the Great Game",
            "conferringBg": "Spy",
            "description": "You have learnt so much of techniques from years of stealth and also trickery about how to not draw attention to yourself. You have an utterly un extraordinary way of walk and also way of talk and also move are deliberately forgettable. Whenever while you’re wearing the common clothes, nobody can remember your face nor any special features of you too, unless until they actively make an effort to do so. You have In an extra advantage that is you know how to write in the special codes that can only be readable by the people who trained in deciphering of it.",
        },
        {
            "name": "Ex-Convict",
            "conferringBg": "Stojanow Prisoner",
            "description": "The knowledge gained during your incarceration lets you gain insight into local guards and jailors. You know which will accept bribes, or look the other way for you. You can also seek shelter for yourself from authorities with other criminals in the area. [Note: This feature is a variant of the Courtier feature.]",
        },
        {
            "name": "At Home in the Wild",
            "conferringBg": "Ticklebelly Nomad",
            "description": "The wilderness is your home and you are comfortable dwelling in it. You can find a place to hide, rest, or recuperate when out in the wild. This place of rest is secure enough to conceal you from most natural threats. Threats that are supernatural, magical, or are actively seeking you out might do so with difficulty depending on the nature of the threat (as determined by the DM). However, this feature doesn’t shield or conceal you from scrying, mental probing, nor from threats that don’t necessarily require the five senses to find you.[Note:This feature is a variant of the Folk Hero feature.]",
        },
        {
            "name": "Investigative Services",
            "conferringBg": "Trade Sheriff",
            "description": "You are part of a small force outside of Hillsfar. You have a special way of communicating with others and they seem to be at ease around you. You can invoke your rank to allow you access to a crime scene or to requisition equipment or horses on a temporary basis. When you enter a town or village around Hillsfar you can identify a contact who will give you information on the local rumors and would help you simply because of your desire to get answers and information for anyone wanting to disrupt trade. Note: This feature is a variant of the Soldier feature.",
        },
        {
            "name": "Ear to the Ground",
            "conferringBg": "Urban Bounty Hunter",
            "description": "You are in frequent contact with people in the segment of society that your chosen quarries move through. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city you visit, a person who provides information about the people and places of the local area.",
        },
        {
            "name": "City Secrets",
            "conferringBg": "Urchin",
            "description": "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.",
        },
        {
            "name": "Uthgardt Heritage",
            "conferringBg": "Uthgardt Tribe Member",
            "description": "You have an excellent knowledge of not only your tribe’s territory, but also the terrain and natural resources of the rest of the North. You are familiar enough with any wilderness area that you find twice as much food and water as you normally would when you forage there. Additionally, you can call upon the hospitality of your people, and those folk allied with your tribe, often including members of druid circles, tribes of nomadic elves, the Harpers, and the priesthoods devoted to the gods of the First Circle.",
        },
        {
            "name": "Kept in Style",
            "conferringBg": "Waterdhavian Noble",
            "description": "While you are in Waterdeep or elsewhere in the North, your house sees to your everyday needs. Your name and signet are sufficient to cover most of your expenses; the inns, taverns, and festhalls you frequent are glad to record your debt and send an accounting to your family’s estate in Waterdeep to settle what you owe. This advantage enables you to live a comfortable lifestyle without having to pay 2 gp a day for it, or reduces the cost of a wealthy or aristocratic lifestyle by that amount. You may not maintain a less affluent lifestyle and use the difference as income—the benefit is a line of credit, not an actual monetary reward.",
        },
    ],
    'EQUIPMENT': {
        'ARTISAN_TOOLS': [
            "Alchemist’s supplies",
            "Brewer’s supplies",
            "Calligrapher's Supplies",
            "Carpenter’s tools",
            "Cartographer’s tools",
            "Cobbler’s tools",
            "Cook’s utensils",
            "Glassblower’s tools",
            "Jeweler’s tools",
            "Leatherworker’s tools",
            "Mason’s tools",
            "Painter’s supplies",
            "Potter’s tools",
            "Smith’s tools",
            "Tinker’s tools",
            "Weaver’s tools",
            "Woodcarver’s tools",
        ],
        'MUSICAL_INSTRUMENTS': [
            "Bagpipes",
            "Drum",
            " Dulcimer ",
            "Flute",
            "Lute",
            "Lyre",
            "Horn",
            "Pan Flute",
            "Shawm",
            "Viol",
        ],
        'MISC': [
            "Navigator’s tools",
            "Thieves’ tools",
            "Vehicles (land)",
            "Vehicles (water)",
        ],
        'GAMING_SET': [
            "Dice Set",
            "Playing Card Set",
        ],
    },
}


export default AppDictionary;

