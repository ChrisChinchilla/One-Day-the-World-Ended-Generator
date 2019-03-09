// TODO: Optimise

exports.generateLexicon = function() {
  let tracery = require("tracery-grammar");

  let dictionarySearch = require("./search.js");
  // TODO: Better to pass in one go?
  let verbs = dictionarySearch.typeSearch("Verb");
  let outcomes = dictionarySearch.typeSearch("Outcome");
  let persons = dictionarySearch.typeSearch("Person");
  let descriptions = dictionarySearch.typeSearch("Description");

  const grammar = tracery.createGrammar({
    people: persons,
    adjective: descriptions,
    outcome: outcomes,
    origin: ["One day the world ended because of #adjective.a# #people#."]
  });
  // TODO: What came next? A world of #outcome#
  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar.flatten("#origin#");
};

exports.generateFeatures = function() {
  let tracery = require("tracery-grammar");

  let dictionarySearch = require("./search.js");
  // TODO: Better to pass in one go?
  let features = dictionarySearch.typeSearch("Feature");

  const grammar = tracery.createGrammar({
    features: features,
    origin: ["#features#"]
  });

  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar.flatten("#origin#");
};

exports.generateBackgrounds = function() {
  let tracery = require("tracery-grammar");

  let dictionarySearch = require("./search.js");
  // TODO: Better to pass in one go?
  let backgrounds = dictionarySearch.typeSearch("Background");

  const grammar = tracery.createGrammar({
    backgrounds: backgrounds,
    origin: ["#backgrounds#"]
  });

  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar.flatten("#origin#");
};

exports.generateItems = function() {
  let tracery = require("tracery-grammar");

  let dictionarySearch = require("./search.js");
  // TODO: Better to pass in one go?
  let items = dictionarySearch.typeSearch("Item");

  const grammar = tracery.createGrammar({
    items: items,
    origin: ["#items#"]
  });

  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar.flatten("#origin#");
};

exports.generateStats = function() {
  let brainsStat = Math.floor(Math.random() * 5) + 1;
  let braunStat = Math.floor(Math.random() * 5) + 1;
  let charsimaStat = Math.floor(Math.random() * 5) + 1;

  var character = {
    Brains: brainsStat,
    Braun: braunStat,
    Charisma: charsimaStat
  };

  return character;
};

exports.generateWorld = function() {
  let tracery = require("tracery-grammar");

  let dictionarySearch = require("./search.js");
  // TODO: Better to pass in one go?
  let persons = dictionarySearch.typeSearch("Person");
  let descriptions = dictionarySearch.typeSearch("Description");
  let places = dictionarySearch.typeSearch("Place");
  // TODO: A better way
  let things = dictionarySearch.typeSearch("Thing");
  let creatures = dictionarySearch.typeSearch("Creature");
  var thingscreatures = things.concat(creatures);

  const grammar = tracery.createGrammar({
    people: persons,
    adjective: descriptions,
    place: places,
    thingcreature: thingscreatures,
    origin: [
      "One day the world ended because of: #adjective# #people#, #place#, #thingcreature#."
    ]
  });
  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar.flatten("#origin#");
};

exports.generateSetting = function() {
  let tracery = require("tracery-grammar");

  let dictionarySearch = require("./search.js");
  // TODO: Better to pass in one go?
  let outcomes = dictionarySearch.typeSearch("Outcome");
  let concepts = dictionarySearch.typeSearch("Concept");

  const grammar = tracery.createGrammar({
    outcome: outcomes,
    concept: concepts,
    origin: ["A World where: #outcome#, #concept#."]
  });
  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar.flatten("#origin#");
};
