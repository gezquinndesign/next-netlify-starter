import React from 'react'
import Head from 'next/head'
import Footer from '@components/Footer'
import RecipeApp from '@components/RecipeApp'

export default function Home() {
  const recipes = [
    {
      "title": "CHERRY ON TOP",
      "slug": "cherry-on-top",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 banana\n0.5 cup blueberries\n0.5 cup cherries*\n\n*Can substitute cherries with berries"
    },
    {
      "title": "B-LIMEY STRAWBERRY",
      "slug": "b-limey-strawberry",
      "recipe": "1 cup fresh kale\n1 cup water\n0.5 lime or juiced\n1 cup blueberries\n0.5 cup strawberries"
    },
    {
      "title": "ALMOND PEACH BLUEBERRY",
      "slug": "almond-peach-blueberry",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 peach*\n0.5 cup blueberries\n1 tablespoon almond butter\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "KALE 'N CHERRY",
      "slug": "kale-n-cherry",
      "recipe": "1 cup fresh kale\n1 cup almond milk, unsweetened\n1 cup cherries*\n0.5 banana\n0.5 tablespoon cacao powder\n0.5 tablespoon chia seeds\n\n*Can substitute cherries with berries"
    },
    {
      "title": "U-PICK ME UP",
      "slug": "u-pick-me-up",
      "recipe": "1 cup fresh spinach\n1 cup green tea, brewed and chilled*\n0.75 cups raspberries\n0.75 cups blueberries\n\n*Use one green tea bag or 2 teaspoons loose leaf"
    },
    {
      "title": "STRAWBERRY CARROT PINEAPPLE",
      "slug": "strawberry-carrot-pineapple",
      "recipe": "1 cup fresh spinach\n1 cup coconut water, unsweetened\n0.5 large carrot*\n0.5 cup strawberries\n0.5 cup pineapple\n\n*Can chop and steam carrots to make them easier to blend, or leave them raw."
    },
    {
      "title": "HAWAIIAN BREEZE",
      "slug": "hawaiian-breeze",
      "recipe": "1 cup fresh spinach\n0.5 cup coconut water, unsweetened\n0.5 orange, peeled\n0.5 cup pineapple\n0.5 cup mango\n0.5 banana"
    },
    {
      "title": "SHAUNA'S CARROT CAKE",
      "slug": "shauna-s-carrot-cake",
      "recipe": "1 cup fresh spinach\n0.75 cups almond milk, unsweetened\n1 large carrots*\n0.25-inch fresh ginger, peeled\n0.5 cup pineapple\n0.5 banana\n\n*Can chop and steam carrots to make them easier to blend, or leave them raw."
    },
    {
      "title": "ORANGE JEWELS",
      "slug": "orange-jewels",
      "recipe": "1 cup fresh spinach\n0.75 cups almond milk, unsweetened\n0.25 lemon, peeled or juiced\n0.5 banana\n1 oranges, peeled"
    },
    {
      "title": "CREAM MACHINE",
      "slug": "cream-machine",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 avocado\n0.5 cup mango\n0.5 banana"
    },
    {
      "title": "BANANA RAZZMATAZZ",
      "slug": "banana-razzmatazz",
      "recipe": "1 cup fresh swiss chard\n1 cup almond milk, unsweetened\n1 bananas\n0.5 cup raspberries"
    },
    {
      "title": "SOUTHERN SWISS",
      "slug": "southern-swiss",
      "recipe": "1 cup fresh swiss chard\n1 cup water\n0.5 cup strawberries\n1 peaches, pitted*\n1 tablespoons coconut oil\n\n*Can substitute peaches with mango or nectarines."
    },
    {
      "title": "APPLE BERRY PUNCH",
      "slug": "apple-berry-punch",
      "recipe": "1 cup fresh swiss chard\n1 cup water\n0.75 cups mixed berries\n1 apples, any variety, core removed"
    },
    {
      "title": "GREEN GRANNY",
      "slug": "green-granny",
      "recipe": "1 cup fresh spinach\n0.75 cups green tea, brewed and chilled*\n0.5 granny smith apple, core removed\n0.5 cup green grapes\n0.5 cup mango\n\n*Use one green tea bag or 2 teaspoons loose leaf."
    },
    {
      "title": "PUMPKIN DREAM PIE",
      "slug": "pumpkin-dream-pie",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 cup pumpkin, unsweetened (canned or fresh)\n1 bananas\n0.5 teaspoon pumpkin pie spice\n0.5 teaspoon vanilla extract"
    },
    {
      "title": "JUST PLUMMY",
      "slug": "just-plummy",
      "recipe": "1 cup fresh kale\n1 cup coconut water, unsweetened\n1 large plums\n0.5 cup mixed berries"
    },
    {
      "title": "APPLE ALMOND BUTTER & JELLY",
      "slug": "apple-almond-butter-jelly",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 apple, any variety, core removed\n1 cup grapes, any variety\n1.5 tablespoons almond butter"
    },
    {
      "title": "COCO-MINT MOCHA",
      "slug": "coco-mint-mocha",
      "recipe": "1 cup fresh spinach\n0.1 cup fresh mint\n1 cup almond milk, unsweetened\n1 pears, core removed*\n1 bananas\n2 tablespoons cacao powder\n\n*Can substitute pears with mango."
    },
    {
      "title": "PEAR-BERRY NUTMEG",
      "slug": "pear-berry-nutmeg",
      "recipe": "1 cup fresh kale\n1 cup almond milk, unsweetened\n1 cup blueberries\n0.5 pear, core removed*\n0.1 teaspoon nutmeg\n\n*Can substitute pears with mango."
    },
    {
      "title": "CARAMEL APPLE",
      "slug": "caramel-apple",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 granny smith apple, core removed\n0.5 banana\n2 medjool dates, pitted\n0.25 teaspoon vanilla extract"
    },
    {
      "title": "DAN'S FAMOUS APPLE PIE",
      "slug": "dan-s-famous-apple-pie",
      "recipe": "1 cup fresh spinach\n0.75 cups almond milk, unsweetened\n1.5 apples, any variety, core removed\n2 medjool dates, pitted\n0.5 teaspoon cinnamon\n0.5 teaspoon nutmeg"
    },
    {
      "title": "CHAI LIKE YOU",
      "slug": "chai-like-you",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.25-inch fresh ginger, peeled\n1 pears, core removed*\n0.5 banana\n0.5 teaspoon cardamom\n0.5 teaspoon cinnamon\n\n*Can substitute pears with mango."
    },
    {
      "title": "PUMPKIN CHOCOLATE CHIP",
      "slug": "pumpkin-chocolate-chip",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 pear, core removed*\n0.5 banana\n0.5 cup pumpkin, unsweetened (canned or fresh)\n0.5 tablespoon cacao powder\n\n*Can substitute pears with mango."
    },
    {
      "title": "KIWI LIMEADE",
      "slug": "kiwi-limeade",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 kiwi, peeled or whole\n1 cup pineapple\n0.5 lime, peeled or juiced"
    },
    {
      "title": "BEGINNER'S LUCK",
      "slug": "beginner-s-luck",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 cup pineapple\n0.5 cup mango\n1 banana"
    },
    {
      "title": "QUICK PICK ME UP",
      "slug": "quick-pick-me-up",
      "recipe": "1 cup fresh spinach\n0.75 cup water\n0.5 grapefruit*\n1 cup pineapple\n\n*Can substitute grapefruit with any variety of citrus fruit."
    },
    {
      "title": "MORNING SUNSHINE",
      "slug": "morning-sunshine",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n1 orange\n0.5 cup pineapple\n1 tablespoon chia seeds"
    },
    {
      "title": "STRAWBERRY DAIQUIRI",
      "slug": "strawberry-daiquiri",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n0.5 grapefruit*\n0.75 cup strawberries\n2 medjool dates, pitted\n\n*Can substitute grapefruit with any variety of citrus fruit."
    },
    {
      "title": "CRANBERRY SPRITZER",
      "slug": "cranberry-spritzer",
      "recipe": "1 cup fresh kale\n1 cup water\n0.25 cup cranberries*\n1.25 cups pineapple\n0.5 lime, juiced or peeled\n\n*Can substitute cranberries with pomegranate seeds or any type of berries"
    },
    {
      "title": "CRANBERRY CITRUS BLAST",
      "slug": "cranberry-citrus-blast",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n0.25 cup cranberries*\n1 oranges, peeled\n0.5 banana\n\n*Can substitute cranberries with pomegranate seeds or any type of berries"
    },
    {
      "title": "CITRUS CRUSH",
      "slug": "citrus-crush",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n0.5 cup pineapple\n0.5 orange, peeled\n0.5 cup grapes, any variety"
    },
    {
      "title": "COCONUT DREAM",
      "slug": "coconut-dream",
      "recipe": "1 cup fresh kale\n1 cup coconut milk, unsweetened\n0.5 cup mango\n0.5 cup pineapple\n0.5 banana\n1 tablespoons coconut flakes, unsweetened"
    },
    {
      "title": "OH KALE YEAH",
      "slug": "oh-kale-yeah",
      "recipe": "1 cup fresh kale\n1 cup water\n0.5 banana\n0.5 cup pineapple\n0.5 cup strawberries"
    },
    {
      "title": "BEACHY DREAMS",
      "slug": "beachy-dreams",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 grapefruit, peeled*\n0.5 cup pineapple\n1 kiwi, peeled or whole\n\n*Can substitute grapefruit with any variety of citrus fruit"
    },
    {
      "title": "SHAUNA'S SANGRIA",
      "slug": "shauna-s-sangria",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n0.5 apple, any variety, core removed\n0.5 cup strawberries\n0.25 cup grapes, any variety\n0.5 orange, peeled"
    },
    {
      "title": "SWEET JUBILEE",
      "slug": "sweet-jubilee",
      "recipe": "1 cup fresh kale\n0.5 cup almond milk, unsweetened\n1 cup grapes, any variety\n0.5 apple, any variety, core removed\n0.5 orange, peeled"
    },
    {
      "title": "FLU FIGHTER",
      "slug": "flu-fighter",
      "recipe": "1 cup fresh kale\n0.75 cups water\n0.5 banana\n1 oranges, peeled\n0.5 cup strawberries"
    },
    {
      "title": "GINGERLICIOUS",
      "slug": "gingerlicious",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 banana\n1 apple, any variety, core removed\n0.25-inch fresh ginger, peeled"
    },
    {
      "title": "POM POWER",
      "slug": "pom-power",
      "recipe": "1 cup fresh kale\n1 cup water\n0.5 cup blueberries\n0.5 cup strawberries\n0.5 cup pomegranate seeds*\n\n*Can substitute pomegranate seeds with cranberries or any type of berries"
    },
    {
      "title": "PEACEFUL POMEGRANATE",
      "slug": "peaceful-pomegranate",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.75 cups pomegranate seeds*\n0.75 cups mango\n\n*Can substitute pomegranate seeds with cranberries or any type of berries"
    },
    {
      "title": "BERRIES 'N CREAM",
      "slug": "berries-n-cream",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 avocado\n1 cup mixed berries"
    },
    {
      "title": "BANANA BERRY BLAST",
      "slug": "banana-berry-blast",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 cup mixed berries\n0.5 bananas"
    },
    {
      "title": "CARING CARROT",
      "slug": "caring-carrot",
      "recipe": "1 cup kale\n0.5 cup water\n1 orange, peeled\n0.5 large carrot*\n0.5 cup mango\n\n*Can chop and steam carrot to make easier to blend, or leave raw"
    },
    {
      "title": "PINK FLAMANGO",
      "slug": "pink-flamango",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 cup strawberries\n0.5 cup mango"
    },
    {
      "title": "STRONG POPEYE",
      "slug": "strong-popeye",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n1 cup pineapple\n0.5 banana\n0.5 lime, juiced or peeled"
    },
    {
      "title": "KIWI TANGO ",
      "slug": "kiwi-tango",
      "recipe": "1 cup fresh kale\n1 cup coconut milk, unsweetened\n1 kiwi, peeled or whole\n1 cup strawberries"
    },
    {
      "title": "CHOCOLATE DIPPED STRAWBERRIES",
      "slug": "chocolate-dipped-strawberries",
      "recipe": "1 cup fresh kale\n1 cup almond milk, unsweetened\n1 cup strawberries\n0.5 banana\n1 tablespoons cacao powder"
    },
    {
      "title": "CHUNKY MONKEY",
      "slug": "chunky-monkey",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 banana\n0.5 pear, core removed*\n1 tablespoons almond butter\n1 tablespoon cacao powder\n\n*Can substitute pear with mango"
    },
    {
      "title": "BERRY CHERRY JUBILEE",
      "slug": "berry-cherry-jubilee",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 cup cherries*\n0.5 cup mixed berries\n0.5 banana\n\n*Can substitute cherries with berries"
    },
    {
      "title": "SIMPLE PEACH",
      "slug": "simple-peach",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 cup peaches*\n0.5 banana\n\n*Can substitute peaches with mango or nectarines."
    },
    {
      "title": "BERRY PROTEIN BASH",
      "slug": "berry-protein-bash",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 cup strawberries\n0.5 cup blueberries\n0.5 banana\n0.25 cup almonds, soaked in water overnight"
    },
    {
      "title": "TROPICAL CRUSH",
      "slug": "tropical-crush",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n1 orange\n0.5 cup pineapple\n0.5 banana"
    },
    {
      "title": "ORANGE JULIUS",
      "slug": "orange-julius",
      "recipe": "1 cup fresh spinach\n0.5 cup almond milk, unsweetened\n1.5 oranges\n0.5 banana"
    },
    {
      "title": "PEACH COCONUT DREAM",
      "slug": "peach-coconut-dream",
      "recipe": "0.5 cups fresh spinach\n0.5 cup coconut water, unsweetened\n1 cup grapes, any variety\n0.5 cup peaches*\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "TROPI-KALE",
      "slug": "tropi-kale",
      "recipe": "0.5 cup fresh spinach\n0.5 cup fresh kale\n1 cup coconut water, unsweetened\n0.5 banana\n1 cup pineapple "
    },
    {
      "title": "MANGO PASSION",
      "slug": "mango-passion",
      "recipe": "0.5 cup fresh spinach\n0.5 cup fresh kale\n1 cup water\n1 cup mango\n0.5 cup pineapple"
    },
    {
      "title": "RAZZY PEACH",
      "slug": "razzy-peach",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.25 cup raspberries\n0.75 cup peaches*\n0.5 banana\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "PEACHY PEAR",
      "slug": "peachy-pear",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 ripe pears\n0.5 cup peaches*\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "CILANTRO-MANGO DETOX",
      "slug": "cilantro-mango-detox",
      "recipe": "0.75 cups fresh spinach\n0.25 cup fresh cilantro\n1 cup water\n0.75 cup mango\n0.5 cup pineapple\n0.25 avocado"
    },
    {
      "title": "PINEAPPLE BERRY",
      "slug": "pineapple-berry",
      "recipe": "0.75 cups fresh spinach\n0.5 cup water\n0.5 orange, peeled\n0.25 cup cucumber, peeled\n0.5 cup pineapple\n0.5 cup strawberries"
    },
    {
      "title": "STRAWBERRY BLAST",
      "slug": "strawberry-blast",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 cup strawberries\n0.5 banana"
    },
    {
      "title": "MORNING FUEL",
      "slug": "morning-fuel",
      "recipe": "1 cup fresh kale\n0.5 cup almond milk, unsweetened\n1 orange, peeled\n0.5 cup pineapple\n0.5 banana\n0.25 avocado"
    },
    {
      "title": "BLUEBERRY KALE PUNCH",
      "slug": "blueberry-kale-punch",
      "recipe": "1 cup fresh kale\n0.5 cup almond milk, unsweetened\n1 orange, peeled\n0.5 cup blueberries\n1 banana"
    },
    {
      "title": "MANGO ORANGE MADNESS",
      "slug": "mango-orange-madness",
      "recipe": "1 cup fresh spinach\n1 cup coconut water, unsweetened\n0.5 orange, peeled\n0.5 cup mango\n0.5 banana"
    },
    {
      "title": "LEMON CLEANSER",
      "slug": "lemon-cleanser",
      "recipe": "1 cup fresh kale\n1 cup water\n1 cup mango\n0.25 lemon, peeled or juiced\n0.5 banana"
    },
    {
      "title": "RAINBOW LOVE",
      "slug": "rainbow-love",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 orange, peeled\n0.5 cup strawberries \n0.25 cup blueberries\n0.5 banana"
    },
    {
      "title": "CITRUS BANG",
      "slug": "citrus-bang",
      "recipe": "1 cup fresh kale\n1 cup coconut water, unsweetened\n0.5 orange, peeled\n0.25 cucumber, peeled\n1 cup pineapple\n0.25 lemon, peeled or juiced"
    },
    {
      "title": "SIMPLY CHERRY",
      "slug": "simply-cherry",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 cup cherries, pitted*\n0.5 banana\n\n*Can substitute cherries with berries"
    },
    {
      "title": "SWEET DREAM",
      "slug": "sweet-dream",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 cup mango\n0.5 banana\n1 tablespoon almond butter\n0.5 teaspoon cinnamon\n0.1 teaspoon cayenne pepper"
    },
    {
      "title": "CHAZBERRY",
      "slug": "chazberry",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 cup cherries, pitted*\n0.5 cup raspberries\n\n*Can substitute cherries with berries"
    },
    {
      "title": "CHERRY TART",
      "slug": "cherry-tart",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 cup pineapple\n0.5 cup cherries, pitted\n0.5 banana\n\n*Can substitute cherries with berries"
    },
    {
      "title": "ALMOND BUTTER CUP",
      "slug": "almond-butter-cup",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 bananas\n1.5 tablespoons cacao\n1 tablespoon almond butter"
    },
    {
      "title": "CITRUS BREEZE ",
      "slug": "citrus-breeze",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n1 orange, peeled\n0.25 cup mango\n0.25 cup pineapple\n0.5 banana"
    },
    {
      "title": "MANGO GREEN-A COLADA",
      "slug": "mango-green-a-colada",
      "recipe": "1 cup fresh kale\n1 cup coconut milk, unsweetened\n1 cup mango\n0.5 cup pineapple"
    },
    {
      "title": "PINEAPPLE UPSIDE DOWN CAKE",
      "slug": "pineapple-upside-down-cake",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n0.5 cup pineapple\n0.5 cup cherries, pitted*\n0.5 banana\n\n*Can substitute cherries with berries"
    },
    {
      "title": "COCO-CHERRY BERRY COOLER",
      "slug": "coco-cherry-berry-cooler",
      "recipe": "1 cup fresh kale\n1 cup coconut milk, unsweetened\n1 cup cherries, pitted*\n0.5 cup blueberries\n\n*Can substitute cherries with berries"
    },
    {
      "title": "SWEET FREEDOM",
      "slug": "sweet-freedom",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n0.5 cup strawberries\n0.5 cup blueberries\n0.5 banana"
    },
    {
      "title": "SUMMER ORCHARD",
      "slug": "summer-orchard",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 peach, pitted*\n0.5 large plum, pitted\n1 apricots, pitted\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "ROCKIN' RASPBERRY",
      "slug": "rockin-raspberry",
      "recipe": "1 cup fresh kale\n1 cup coconut water, unsweetened\n1 cup raspberries\n0.5 green apple, cored"
    },
    {
      "title": "PINEAPPLE APRICOT GINGER BLISS",
      "slug": "pineapple-apricot-ginger-bliss",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 cup pineapple\n3 apricots, pitted\n0.5-inch fresh ginger"
    },
    {
      "title": "STRAW-BANA PEACH",
      "slug": "straw-bana-peach",
      "recipe": "1 cup fresh kale\n0.5 cup water\n0.5 orange, peeled\n0.5 peach, pitted*\n0.5 cup strawberries\n0.5 banana\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "PLUMBERRY BEET",
      "slug": "plumberry-beet",
      "recipe": "1 cup fresh kale\n1 cup coconut water, unsweetened\n1 cup raspberries\n0.5 large plum, pitted\n0.25 beet, diced (raw)"
    },
    {
      "title": "GRAPE LIME RICKEY",
      "slug": "grape-lime-rickey",
      "recipe": "1 cup fresh spinach\n0.5 cup water\n1.5 cups grapes, red or purple\n0.5 lime, peeled"
    },
    {
      "title": "STRAWBERRY PATCH",
      "slug": "strawberry-patch",
      "recipe": "1 cup fresh chard, red or swiss\n1 cup almond milk, unsweetened\n1 cup strawberries\n0.5 banana"
    },
    {
      "title": "CARROT MANGO PEACH",
      "slug": "carrot-mango-peach",
      "recipe": "1 cup fresh chard, red or swiss\n1 cup water\n0.5 cup mango\n0.5 large carrot, chopped\n0.5 peach, pitted*\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "PEACHES 'N CREAM",
      "slug": "peaches-n-cream",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 peach, pitted*\n0.5 banana\n0.1 teaspoon cinnamon\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "RAZZY PEACH MELBA",
      "slug": "razzy-peach-melba",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 peach, pitted*\n0.5 cup raspberries\n0.25 teaspoon vanilla extract\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "WATERMELON FRESCA",
      "slug": "watermelon-fresca",
      "recipe": "1 cup fresh spinach\n0.5 cup water\n0.75 cups watermelon, seeded\n0.75 cups strawberries\n0.5-inch fresh ginger"
    },
    {
      "title": "MELON BERRY",
      "slug": "melon-berry",
      "recipe": "1 cup fresh spinach\n1.5 cups watermelon, seeded\n0.5 cup frozen mixed berries"
    },
    {
      "title": "BLACKBERRIES AND CREAM",
      "slug": "blackberries-and-cream",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n1 cup blackberries\n0.5 banana"
    },
    {
      "title": "BLACKBERRY PEACH COBBLER",
      "slug": "blackberry-peach-cobbler",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n1 cup blackberries\n0.5 peach, pitted*\n1 tablespoons flaxseed, whole or ground\n0.1 teaspoon cinnamon\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "BERRY CITRUS-ADE",
      "slug": "berry-citrus-ade",
      "recipe": "1 cup fresh kale\n0.5 cup water\n0.5 orange, peeled\n1.25 cups frozen mixed berries\n0.25 lemon, peeled"
    },
    {
      "title": "PAPAYA SUNRISE",
      "slug": "papaya-sunrise",
      "recipe": "1 cup fresh spinach\n1 cup coconut water, unsweetened\n0.5 orange, peeled\n0.5 cup papaya, seeded\n0.5 cup strawberries"
    },
    {
      "title": "KIWI STRAWBERRY PUNCH",
      "slug": "kiwi-strawberry-punch",
      "recipe": "1 cup fresh spinach\n1 cup coconut water, unsweetened\n1 cup strawberries\n1 kiwifruit (peeled is optional)"
    },
    {
      "title": "MELONA",
      "slug": "melona",
      "recipe": "1 cup fresh spinach\n0.5 cup almond milk, unsweetened\n1 cup honeydew\n0.5 banana\n0.25 teaspoon vanilla extract"
    },
    {
      "title": "HONEY-KISSED NECTARINES",
      "slug": "honey-kissed-nectarines",
      "recipe": "1 cup fresh spinach\n0.5 cup coconut water, unsweetened\n1.5 nectarines\n0.75 cups honeydew"
    }
  ]

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main>
        <RecipeApp recipes={recipes}  />
      </main>

      <Footer />
    </div>
  )
}
