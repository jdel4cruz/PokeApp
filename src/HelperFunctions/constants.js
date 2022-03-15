// A massive switch statement that based on the key, if the value is true update it with something I can use in a stringbuilder later
export const evoConditions = (data, key) => {
  let property = data[key];

  switch (key) {
    case "affection":
      data[key] = `with ${property} affection`;
      break;
    case "atkIsGreater":
      data[key] = `with atk ${
        property > 0 ? "greater than" : property < 0 ? "less than" : "equal to"
      } defense`;
      break;
    case "beauty":
      data[key] = "max beauty";
      break;
    case "gender":
      data[key] = `a ${property.name}`;
      break;
    case "happiness":
      data[key] = "with max happiness";
      break;
    case "heldItem":
      property.name = property.name.replaceAll("-", " ");
      property.name = capitalizeFirstLetterEachWord(property.name);
      data[key] = `with ${property.name} held`;
      break;
    case "learnedMove":
      property.name = property.name.replace("-", " ");
      data[key] = `with ${property.name} learned`;
      break;
    case "level":
      data[key] = `to level ${property}`;
      break;
    case "location":
      data[key] = `Not available through from the API`;
      break;
    case "moveType":
      data[key] = `with ${property.name} type move learned`;
      break;
    case "needsRain":
      data[key] = "while raining";
      break;
    case "time":
      data[key] = `during ${property}`;
      break;
    case "tradeWith":
      property.name = property.name.replaceAll("-", " ");
      data[key] = `with ${property.name}`;
      break;
    case "useItem":
      property.name = property.name.replaceAll("-", " ");
      property.name = capitalizeFirstLetterEachWord(property.name);

      data[key] = `${property.name}`;
      break;
    case "evoTrigger":
      property.name = property.name.replaceAll("-", " ");
      property.name = property.name.replace(" item", "");
      property.name =
        property.name.charAt(0).toUpperCase() + property.name.slice(1);

      data[key] = `${property.name}`;
      break;
    default:
      console.log(`${key} was not found under pokemon properties`);
  }
};

// Takes the values in the evoCondition object within the pokemon object, combines them, and adds the result as a property for the pokemon object
export const buildEvoCondition = (pokemon) => {
  const evoConditions = pokemon.pokemon_v2_pokemonevolutions[0];

  let evoCondition = evoConditions.evoTrigger;

  Object.keys(evoConditions).forEach((key) => {
    if (key != "evoTrigger" && key != "level") {
      evoCondition = `${evoCondition} ${evoConditions[key]}`;
    }
  });

  if (evoConditions.level) {
    evoCondition = `${evoCondition} ${evoConditions.level}`;
  }

  pokemon.evoCondition = evoCondition;
};

// Assigns an item category to an item based on category/attribute provided by API. This was done due to the API's categories likely being too obscure for a user
export const generateItemCategory = (item) => {
  switch (item.rawCategory.id) {
    case 37:
      item.category = "TM";
      break;
    case 24:
      item.category = "Sellable";
      break;
    case 21:
      item.category = "Key Item";
      break;
    case 10:
      item.category = "Evolution";
      break;
    default:
      break;
  }

  for (let element of item.attributes) {
    const attribute = element.attribute;
    let foundCategory = false;

    switch (attribute.id) {
      case 7:
        item.category = "Held Item";
        foundCategory = true;
        break;
      case 4:
        item.category = "Battle Item";
        foundCategory = true;
        break;
      case 2:
        item.category = "Consumable";
        foundCategory = true;
        break;
      default:
        break;
    }

    if (foundCategory) {
      break;
    }
  }
};

const capitalizeFirstLetterEachWord = (string) => {
  const words = string.split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords.join(" ");
};
