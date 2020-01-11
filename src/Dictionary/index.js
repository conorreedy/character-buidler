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
    'LANGUAGES': [
        {
            'name': 'Abyssal',
            'script': 'Infernal',
            'typicalSpeakers': 'Demons, chaotic evil outsiders'
        },
        {
            'name': 'Aquan',
            'script': 'Elvish',
            'typicalSpeakers': 'Water-based creatures'
        },
        {
            'name': 'Auran',
            'script': 'Draconic',
            'typicalSpeakers': 'Air-based creatures'
        },
        {
            'name': 'Celestial',
            'script': 'Celestial',
            'typicalSpeakers': 'Celestials (angels, devas)'
        },
        {
            'name': 'Common',
            'script': 'Common',
            'typicalSpeakers': 'Humans, halflings, half-elves, half-orcs'
        },
        {
            'name': 'Deep Speech',
            'script': '--',
            'typicalSpeakers': 'Mind flayers, beholders'
        },
        {
            'name': 'Draconic',
            'script': 'Draconic',
            'typicalSpeakers': 'Kobolds, troglodytes, lizardfolk, dragons, dragonborn'
        },
        {
            'name': 'Druidic',
            'script': 'Druidic',
            'typicalSpeakers': 'Druids (only)'
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
        {
            'name': 'Custom Background',
        },

    ]
}


export default AppDictionary;