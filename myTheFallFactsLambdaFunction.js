/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            "FACTS": [
                "The Fall are an English post-punk band, formed in 1976 in Prestwich, Greater Manchester, England.",
                "The Fall have undergone many line up changes, with vocalist Mark E. Smith as the founder and only constant member.",
                "The Fall's long term musicians have included drummers Paul Hanley and Karl Burns; guitarists Marc Riley, Craig Scanlon and Brix Smith; and bassist Steve Hanley, whose melodic playing is widely credited with shaping the band's sound from the early 1980s to the mid-1990s.",
                "First associated with the late 1970s punk movement, the Fall's music has undergone numerous stylistic changes, often concurrently with changes in the group's lineup.",
                "The Fall's music has generally been characterised by an abrasive guitar-driven sound, tense bass and drum rhythms, and Smith's cryptic lyrics, described by critic Simon Reynolds as 'a kind of Northern English magic realism that mixed industrial grime with the unearthly and uncanny, voiced through a unique, one-note delivery somewhere between amphetamine-spiked rant and alcohol-addled yarn.'",
                "Although The Fall have never achieved widespread success beyond minor hit singles in the late 1980s, they have maintained a strong cult following.",
                "The Fall have been called 'the most prolific band of the British post-punk movement.'",
                "The Fall have long been associated with late BBC disc jockey John Peel, who championed them from early on in their career and described them as his favourite band, famously explaining, 'they are always different; they are always the same.'",
                "The Fall have released a large number of recordings since their inception in 1976, often inviting use of the tag 'prolific'. Their first release as a group was the EP Bingo-Master's Break Out! (1978), and they have released a studio album at a rate of almost one a year since 1979.",
                "The Fall's first studio album, 'Live at the Witch Trials,' was released in 1979, on the Step Forward record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's second studio album, 'Dragnet,' was released in 1979, on the Step Forward record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's third studio album, 'Grotesque (After the Gramme),' was released in 1980, on the Rough Trade record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's fourth studio album, 'Hex Enduction Hour,' was released in 1982, on the Kamera record label (their first on this label). It reached number 71 on the UK Albums Chart.",
                "The Fall's fifth studio album, 'Room to Live,' was released in 1982, on the Kamera record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's sixth studio album, 'Perverted by Language,' was released in 1983, on the Rough Trade record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's seventh studio album, 'The Wonderful and Frightening World Of...,' was released in 1984, on the Beggars Banquet record label (their first on this label). It reached number 62 on the UK Albums Chart.",
                "The Fall's eighth studio album, 'This Nation's Saving Grace,' was released in 1985, on the Beggars Banquet record label (their second on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's ninth studio album, 'Bend Sinister,' was released in 1986, on the Beggars Banquet record label (their third on this label). It reached number 36 on the UK Albums Chart.",
                "The Fall's tenth studio album, 'The Frenz Experiment,' was released in 1988, on the Beggars Banquet record label (their fourth on this label). It reached number 19 on the UK Albums Chart.",
                "The Fall's eleventh studio album, 'I Am Kurious Oranj,' was released in 1988, on the Beggars Banquet record label (their fifth on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's twelfth studio album, 'Extricate,' was released in 1990, on the Phonogram record label (their first on this label). It reached number 31 on the UK Albums Chart.",
                "The Fall's thirteenth studio album, 'Shift-Work,' was released in 1991, on the Phonogram record label (their second on this label). It reached number 17 on the UK Albums Chart.",
                "The Fall's fourteenth studio album, 'Code: Selfish,' was released in 1992, on the Phonogram record label (their third on this label). It reached number 21 on the UK Albums Chart.",
                "The Fall's fifteenth studio album, 'The Infotainment Scan,' was released in 1993, on the Permanent/Matador record label (their first on this label). It reached number 9 on the UK Albums Chart.",
                "The Fall's sixteenth studio album, 'Middle Class Revolt,' was released in 1994, on the Permanent/Matador record label (their second on this label). It reached number 48 on the UK Albums Chart.",
                "The Fall's seventeenth studio album, 'Cerebral Caustic,' was released in 1995, on the Permanent record label (their third on this label). It reached number 67 on the UK Albums Chart.",
                "The Fall's eighteenth studio album, 'The Light User Syndrome,' was released in 1996, on the Jet record label (their first on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's nineteenth studio album, 'Levitate,' was released in 1997, on the Artful record label (their first on this label). It reached number 117 on the UK Albums Chart.",
                "The Fall's twentieth studio album, 'The Marshall Suite,' was released in 1999, on the Artful record label (their second on this label). It reached number 84 on the UK Albums Chart.",
                "The Fall's twenty-first studio album, 'The Unutterable,' was released in 2000, on the Eagle record label (their first on this label). It reached number 136 on the UK Albums Chart.",
                "The Fall's twenty-second studio album, 'Are You Are Missing Winner,' was released in 2001, on the Cog Sinister/Voiceprint record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's twenty-third studio album, 'The Real New Fall LP (Formerly Country on the Click),' was released in 2003, on the Action record label (their first on this label). It reached number 156 on the UK Albums Chart.",
                "The Fall's twenty-fourth studio album, 'Fall Heads Roll,' was released in 2005, on the Slogan record label (their first on this label). It reached number 115 on the UK Albums Chart.",
                "The Fall's twenty-fifth studio album, 'Reformation! Post-TLC,' was released in 2007, on the Slogan record label (their second on this label). It reached number 78 on the UK Albums Chart.",
                "The Fall's twenty-sixth studio album, 'Imperial Wax Solvent,' was released in 2008, on the Castle record label (their first on this label). It reached number 35 on the UK Albums Chart.",
                "The Fall's twenty-seventh studio album, 'Your Future Our Clutter,' was released in 2010, on the Domino Records record label (their first on this label). It reached number 38 on the UK Albums Chart.",
                "The Fall's twenty-eighth studio album, 'Ersatz GB,' was released in 2011, on the Cherry Red Records record label (their first on this label). It reached number 88 on the UK Albums Chart.",
                "The Fall's twenty-ninth studio album, 'Re-Mit,' was released in 2013, on the Cherry Red Records record label (their second on this label). It reached number 40 on the UK Albums Chart.",
                "The Fall's thirtieth studio album, 'Sub-Lingual Tablet,' was released in 2015, on the Cherry Red Records record label (their third on this label). It reached number 58 on the UK Albums Chart.",
                "The Fall's thirty-first studio album, 'New Facts Emerge,' was released in 2017, on the Cherry Red Records record label (their fourth on this label). It reached number 35 on the UK Albums Chart.",
            ],
            "SKILL_NAME" : "The Fall Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a Fall fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!",
        },
    },
    'en-US': {
        translation: {
            "FACTS": [
                "The Fall are an English post-punk band, formed in 1976 in Prestwich, Greater Manchester, England.",
                "The Fall have undergone many line up changes, with vocalist Mark E. Smith as the founder and only constant member.",
                "The Fall's long term musicians have included drummers Paul Hanley and Karl Burns; guitarists Marc Riley, Craig Scanlon and Brix Smith; and bassist Steve Hanley, whose melodic playing is widely credited with shaping the band's sound from the early 1980s to the mid-1990s.",
                "First associated with the late 1970s punk movement, the Fall's music has undergone numerous stylistic changes, often concurrently with changes in the group's lineup.",
                "The Fall's music has generally been characterised by an abrasive guitar-driven sound, tense bass and drum rhythms, and Smith's cryptic lyrics, described by critic Simon Reynolds as 'a kind of Northern English magic realism that mixed industrial grime with the unearthly and uncanny, voiced through a unique, one-note delivery somewhere between amphetamine-spiked rant and alcohol-addled yarn.'",
                "Although The Fall have never achieved widespread success beyond minor hit singles in the late 1980s, they have maintained a strong cult following.",
                "The Fall have been called 'the most prolific band of the British post-punk movement.'",
                "The Fall have long been associated with late BBC disc jockey John Peel, who championed them from early on in their career and described them as his favourite band, famously explaining, 'they are always different; they are always the same.'",
                "The Fall have released a large number of recordings since their inception in 1976, often inviting use of the tag 'prolific'. Their first release as a group was the EP Bingo-Master's Break Out! (1978), and they have released a studio album at a rate of almost one a year since 1979.",
                "The Fall's first studio album, 'Live at the Witch Trials,' was released in 1979, on the Step Forward record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's second studio album, 'Dragnet,' was released in 1979, on the Step Forward record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's third studio album, 'Grotesque (After the Gramme),' was released in 1980, on the Rough Trade record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's fourth studio album, 'Hex Enduction Hour,' was released in 1982, on the Kamera record label (their first on this label). It reached number 71 on the UK Albums Chart.",
                "The Fall's fifth studio album, 'Room to Live,' was released in 1982, on the Kamera record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's sixth studio album, 'Perverted by Language,' was released in 1983, on the Rough Trade record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's seventh studio album, 'The Wonderful and Frightening World Of...,' was released in 1984, on the Beggars Banquet record label (their first on this label). It reached number 62 on the UK Albums Chart.",
                "The Fall's eighth studio album, 'This Nation's Saving Grace,' was released in 1985, on the Beggars Banquet record label (their second on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's ninth studio album, 'Bend Sinister,' was released in 1986, on the Beggars Banquet record label (their third on this label). It reached number 36 on the UK Albums Chart.",
                "The Fall's tenth studio album, 'The Frenz Experiment,' was released in 1988, on the Beggars Banquet record label (their fourth on this label). It reached number 19 on the UK Albums Chart.",
                "The Fall's eleventh studio album, 'I Am Kurious Oranj,' was released in 1988, on the Beggars Banquet record label (their fifth on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's twelfth studio album, 'Extricate,' was released in 1990, on the Phonogram record label (their first on this label). It reached number 31 on the UK Albums Chart.",
                "The Fall's thirteenth studio album, 'Shift-Work,' was released in 1991, on the Phonogram record label (their second on this label). It reached number 17 on the UK Albums Chart.",
                "The Fall's fourteenth studio album, 'Code: Selfish,' was released in 1992, on the Phonogram record label (their third on this label). It reached number 21 on the UK Albums Chart.",
                "The Fall's fifteenth studio album, 'The Infotainment Scan,' was released in 1993, on the Permanent/Matador record label (their first on this label). It reached number 9 on the UK Albums Chart.",
                "The Fall's sixteenth studio album, 'Middle Class Revolt,' was released in 1994, on the Permanent/Matador record label (their second on this label). It reached number 48 on the UK Albums Chart.",
                "The Fall's seventeenth studio album, 'Cerebral Caustic,' was released in 1995, on the Permanent record label (their third on this label). It reached number 67 on the UK Albums Chart.",
                "The Fall's eighteenth studio album, 'The Light User Syndrome,' was released in 1996, on the Jet record label (their first on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's nineteenth studio album, 'Levitate,' was released in 1997, on the Artful record label (their first on this label). It reached number 117 on the UK Albums Chart.",
                "The Fall's twentieth studio album, 'The Marshall Suite,' was released in 1999, on the Artful record label (their second on this label). It reached number 84 on the UK Albums Chart.",
                "The Fall's twenty-first studio album, 'The Unutterable,' was released in 2000, on the Eagle record label (their first on this label). It reached number 136 on the UK Albums Chart.",
                "The Fall's twenty-second studio album, 'Are You Are Missing Winner,' was released in 2001, on the Cog Sinister/Voiceprint record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's twenty-third studio album, 'The Real New Fall LP (Formerly Country on the Click),' was released in 2003, on the Action record label (their first on this label). It reached number 156 on the UK Albums Chart.",
                "The Fall's twenty-fourth studio album, 'Fall Heads Roll,' was released in 2005, on the Slogan record label (their first on this label). It reached number 115 on the UK Albums Chart.",
                "The Fall's twenty-fifth studio album, 'Reformation! Post-TLC,' was released in 2007, on the Slogan record label (their second on this label). It reached number 78 on the UK Albums Chart.",
                "The Fall's twenty-sixth studio album, 'Imperial Wax Solvent,' was released in 2008, on the Castle record label (their first on this label). It reached number 35 on the UK Albums Chart.",
                "The Fall's twenty-seventh studio album, 'Your Future Our Clutter,' was released in 2010, on the Domino Records record label (their first on this label). It reached number 38 on the UK Albums Chart.",
                "The Fall's twenty-eighth studio album, 'Ersatz GB,' was released in 2011, on the Cherry Red Records record label (their first on this label). It reached number 88 on the UK Albums Chart.",
                "The Fall's twenty-ninth studio album, 'Re-Mit,' was released in 2013, on the Cherry Red Records record label (their second on this label). It reached number 40 on the UK Albums Chart.",
                "The Fall's thirtieth studio album, 'Sub-Lingual Tablet,' was released in 2015, on the Cherry Red Records record label (their third on this label). It reached number 58 on the UK Albums Chart.",
                "The Fall's thirty-first studio album, 'New Facts Emerge,' was released in 2017, on the Cherry Red Records record label (their fourth on this label). It reached number 35 on the UK Albums Chart.",
            ],
            SKILL_NAME: 'American The Fall Facts',
        },
    },
    'en-GB': {
        translation: {
            "FACTS": [
                "The Fall are an English post-punk band, formed in 1976 in Prestwich, Greater Manchester, England.",
                "The Fall have undergone many line up changes, with vocalist Mark E. Smith as the founder and only constant member.",
                "The Fall's long term musicians have included drummers Paul Hanley and Karl Burns; guitarists Marc Riley, Craig Scanlon and Brix Smith; and bassist Steve Hanley, whose melodic playing is widely credited with shaping the band's sound from the early 1980s to the mid-1990s.",
                "First associated with the late 1970s punk movement, the Fall's music has undergone numerous stylistic changes, often concurrently with changes in the group's lineup.",
                "The Fall's music has generally been characterised by an abrasive guitar-driven sound, tense bass and drum rhythms, and Smith's cryptic lyrics, described by critic Simon Reynolds as 'a kind of Northern English magic realism that mixed industrial grime with the unearthly and uncanny, voiced through a unique, one-note delivery somewhere between amphetamine-spiked rant and alcohol-addled yarn.'",
                "Although The Fall have never achieved widespread success beyond minor hit singles in the late 1980s, they have maintained a strong cult following.",
                "The Fall have been called 'the most prolific band of the British post-punk movement.'",
                "The Fall have long been associated with late BBC disc jockey John Peel, who championed them from early on in their career and described them as his favourite band, famously explaining, 'they are always different; they are always the same.'",
                "The Fall have released a large number of recordings since their inception in 1976, often inviting use of the tag 'prolific'. Their first release as a group was the EP Bingo-Master's Break Out! (1978), and they have released a studio album at a rate of almost one a year since 1979.",
                "The Fall's first studio album, 'Live at the Witch Trials,' was released in 1979, on the Step Forward record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's second studio album, 'Dragnet,' was released in 1979, on the Step Forward record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's third studio album, 'Grotesque (After the Gramme),' was released in 1980, on the Rough Trade record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's fourth studio album, 'Hex Enduction Hour,' was released in 1982, on the Kamera record label (their first on this label). It reached number 71 on the UK Albums Chart.",
                "The Fall's fifth studio album, 'Room to Live,' was released in 1982, on the Kamera record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's sixth studio album, 'Perverted by Language,' was released in 1983, on the Rough Trade record label (their second on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's seventh studio album, 'The Wonderful and Frightening World Of...,' was released in 1984, on the Beggars Banquet record label (their first on this label). It reached number 62 on the UK Albums Chart.",
                "The Fall's eighth studio album, 'This Nation's Saving Grace,' was released in 1985, on the Beggars Banquet record label (their second on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's ninth studio album, 'Bend Sinister,' was released in 1986, on the Beggars Banquet record label (their third on this label). It reached number 36 on the UK Albums Chart.",
                "The Fall's tenth studio album, 'The Frenz Experiment,' was released in 1988, on the Beggars Banquet record label (their fourth on this label). It reached number 19 on the UK Albums Chart.",
                "The Fall's eleventh studio album, 'I Am Kurious Oranj,' was released in 1988, on the Beggars Banquet record label (their fifth on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's twelfth studio album, 'Extricate,' was released in 1990, on the Phonogram record label (their first on this label). It reached number 31 on the UK Albums Chart.",
                "The Fall's thirteenth studio album, 'Shift-Work,' was released in 1991, on the Phonogram record label (their second on this label). It reached number 17 on the UK Albums Chart.",
                "The Fall's fourteenth studio album, 'Code: Selfish,' was released in 1992, on the Phonogram record label (their third on this label). It reached number 21 on the UK Albums Chart.",
                "The Fall's fifteenth studio album, 'The Infotainment Scan,' was released in 1993, on the Permanent/Matador record label (their first on this label). It reached number 9 on the UK Albums Chart.",
                "The Fall's sixteenth studio album, 'Middle Class Revolt,' was released in 1994, on the Permanent/Matador record label (their second on this label). It reached number 48 on the UK Albums Chart.",
                "The Fall's seventeenth studio album, 'Cerebral Caustic,' was released in 1995, on the Permanent record label (their third on this label). It reached number 67 on the UK Albums Chart.",
                "The Fall's eighteenth studio album, 'The Light User Syndrome,' was released in 1996, on the Jet record label (their first on this label). It reached number 54 on the UK Albums Chart.",
                "The Fall's nineteenth studio album, 'Levitate,' was released in 1997, on the Artful record label (their first on this label). It reached number 117 on the UK Albums Chart.",
                "The Fall's twentieth studio album, 'The Marshall Suite,' was released in 1999, on the Artful record label (their second on this label). It reached number 84 on the UK Albums Chart.",
                "The Fall's twenty-first studio album, 'The Unutterable,' was released in 2000, on the Eagle record label (their first on this label). It reached number 136 on the UK Albums Chart.",
                "The Fall's twenty-second studio album, 'Are You Are Missing Winner,' was released in 2001, on the Cog Sinister/Voiceprint record label (their first on this label). It failed to chart on the UK Albums Chart.",
                "The Fall's twenty-third studio album, 'The Real New Fall LP (Formerly Country on the Click),' was released in 2003, on the Action record label (their first on this label). It reached number 156 on the UK Albums Chart.",
                "The Fall's twenty-fourth studio album, 'Fall Heads Roll,' was released in 2005, on the Slogan record label (their first on this label). It reached number 115 on the UK Albums Chart.",
                "The Fall's twenty-fifth studio album, 'Reformation! Post-TLC,' was released in 2007, on the Slogan record label (their second on this label). It reached number 78 on the UK Albums Chart.",
                "The Fall's twenty-sixth studio album, 'Imperial Wax Solvent,' was released in 2008, on the Castle record label (their first on this label). It reached number 35 on the UK Albums Chart.",
                "The Fall's twenty-seventh studio album, 'Your Future Our Clutter,' was released in 2010, on the Domino Records record label (their first on this label). It reached number 38 on the UK Albums Chart.",
                "The Fall's twenty-eighth studio album, 'Ersatz GB,' was released in 2011, on the Cherry Red Records record label (their first on this label). It reached number 88 on the UK Albums Chart.",
                "The Fall's twenty-ninth studio album, 'Re-Mit,' was released in 2013, on the Cherry Red Records record label (their second on this label). It reached number 40 on the UK Albums Chart.",
                "The Fall's thirtieth studio album, 'Sub-Lingual Tablet,' was released in 2015, on the Cherry Red Records record label (their third on this label). It reached number 58 on the UK Albums Chart.",
                "The Fall's thirty-first studio album, 'New Facts Emerge,' was released in 2017, on the Cherry Red Records record label (their fourth on this label). It reached number 35 on the UK Albums Chart.",
            ],
            SKILL_NAME: 'British The Fall Facts',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
