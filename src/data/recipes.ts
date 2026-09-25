import type { Recipe } from "../types";

export const recipes: Recipe[] = [
  {
    id: "dun-lai",
    title: "Cantonese Steamed Milk Egg Pudding (Dun Lai)",
    tags: ["dessert", "cantonese", "steamed"],
    cookTimeMins: 30, // estimate
    ingredientGroups: [
      {
        name: "Milk Mix",
        items: ["1 cup cream", "1 ⅓ cup milk", "⅓ cup white sugar"],
      },
      {
        name: "Egg Mix",
        items: ["4 egg whites", "5 drops vanilla essence"],
      },
    ],
    steps: [
      "Add boiling water to ½ full ramekins to warm them up.",
      "Microwave the Milk Mix for 3 minutes in a measuring jug between 55c to 60c. Stir with spatula. Do not go above 60c.",
      "Stir the Egg Mix with Braun whisk just mixed well. Not froth.",
      "Add about ⅓ Milk Mix to egg white to temper. Then add to the rest of the milk.",
      "Stir well with spatula.",
      "Add boiling water to steamer.",
      "Pour water out of ramekins and fill with combined milk egg mix.",
      "Cover with foil.",
      "Place in a steamer for 10 minutes at 7 on induction.",
      "Turn off heat and leave for a further 10 minutes.",
    ],
  },
  {
    id: "ham-potato-hash",
    title: "Ham Potato Hash",
    tags: ["breakfast", "savoury", "one-pan"],
    cookTimeMins: 35, // estimate
    ingredientGroups: [
      {
        name: "Hash",
        items: [
          "100g ham diced",
          "350-400g potato diced",
          "1 medium onion diced",
          "1 capsicum diced",
          "1 tbsp oil (or leftover steak butter etc)",
          "1 tsp smoked paprika",
          "2 garlic minced",
          "Seasonings: salt, pepper and msg",
        ],
      },
      {
        name: "Toppings",
        items: [
          "1 egg (recommended)",
          "Chilli Crisp / Lime juice",
          "Chilli Crisp / yogurt",
        ],
      },
    ],
    steps: [
      "Optional: The night before, dice the potatoes. Mix with salt and water. Put it in a microwaveable box.",
      "Microwave diced potatoes with a little water for 4 minutes on high.",
      "Heat pan on medium and add oil.",
      "Once hot add onion and cook for 3 minutes stirring every so often until a little translucent.",
      "Add in capsicum and cook for 5 minutes.",
      "Add potatoes to the pan and cook for 4 minutes on medium high. Press down every so often. The potatoes should have some nice color.",
      "Add ham, garlic minced, smoked paprika, salt, pepper and msg to the pan and mix together.",
      "Cook for 4 minutes on medium. Press down every so often.",
      "Stir and cook for 4 minutes on medium. Press down every so often.",
      "The hash has been finished and serve on a plate.",
      "Using the same pan, cook an egg and serve on top.",
      "Add your toppings on top of egg.",
    ],
  },
  {
    id: "chilli-crisp",
    title: "Chilli Crisp Sauce",
    description:
      "You can also buy fried shallots and fried garlic to skip some of the prep stage.",
    sourceUrl: "https://www.chilipeppermadness.com/recipes/chili-crisp/",
    tags: ["sauce", "condiment", "spicy"],
    cookTimeMins: 60, // estimate, excludes overnight rest
    ingredientGroups: [
      {
        name: "Infusion",
        items: [
          "1 ½ cups peanut oil",
          "2 cayenne peppers, roughly chopped",
          "2 shallot, roughly chopped",
          "10 cloves garlic, roughly chopped",
          "1 teaspoon ground sichuan peppercorns (or Black peppercorns)",
          "1 (3-inch) cinnamon stick (optional)",
          "4 star anise pods (optional)",
          "2 birdseye chillies, finely chopped (optional)",
        ],
      },
      {
        name: "Spice Blend",
        items: [
          "2 tablespoon red chili flakes",
          "2 tablespoon Gochugaru",
          "1 tablespoon soy sauce",
          "1 teaspoon sugar",
          "1 tablespoon sesame seeds",
          "1 teaspoon Lamyong Mushroom Seasoning",
          "1 teaspoon msg",
          "1 teaspoon black vinegar",
        ],
      },
      {
        name: "Optional Crunch",
        items: ["¼ cup roasted peanuts, crushed"],
      },
    ],
    steps: [
      "Optional: Toast Gochugaru, sesame seeds, red chilli flakes until fragrant on medium heat. Then add to a metal heat resistant pot you’ll be pouring the water later on this.",
      "Add the oil to a small pot along with the Infusion ingredients.",
      "Simmer: Heat the oil to medium-low. Simmer for 40-50 minutes, until the ingredients in the pot brown and become crispy (you can increase heat if it isn’t happening on medium-low). Add the optional peanuts about 20 minutes in if using.",
      "Prepare the Spice Blend ingredients while the oil simmers, take a separate heat-proof bowl and mix together the chili flakes, Gochugaru, soy sauce, sugar, Lamyong Mushroom Seasoning, and sesame seeds.",
      "Place a strainer over the heat-proof bowl (with the spice blend) and carefully strain the hot oil into the bowl. The hot oil will sizzle as it hits the spices and seeds.",
      "Discard the cinnamon stick and star anise.",
      "Remove the remaining fried solids (pepper, shallot, garlic, peppercorns) from the strainer. Set aside on a paper towel and allow to cool & crisp.",
      "Once cooled and crisp, swirl the fried bits and the crushed roasted peanuts back into the chili oil mixture.",
      "Store: Cover and refrigerate overnight to let the flavors develop. Stir well before serving.",
    ],
    notes: [
      "Storage: Store in a sealed jar in the refrigerator. It will last for roughly 1 month.",
      "Serving Suggestions: Spoon over eggs, rice bowls, noodles, dumplings, or grilled meats.",
      "Variations: You can adjust the heat by using different peppers (like Habaneros for extra heat) or changing the ratio of chili flakes.",
    ],
  },
];
