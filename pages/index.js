import Head from 'next/head'
import Footer from '@components/Footer'
import RecipeApp from '@components/RecipeApp'

export default function Home() {
  const recipes = [
    {
      "title": "CHERRY ON TOP",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 banana\n0.5 cup blueberries\n0.5 cup cherries*\n\n*Can substitute cherries with berries"
    },
    {
      "title": "B-LIMEY STRAWBERRY",
      "recipe": "1 cup fresh kale\n1 cup water\n0.5 lime or juiced\n1 cup blueberries\n0.5 cup strawberries"
    },
    {
      "title": "ALMOND PEACH BLUEBERRY",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 peach*\n0.5 cup blueberries\n1 tablespoon almond butter\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "KALE 'N CHERRY",
      "recipe": "1 cup fresh kale\n1 cup almond milk, unsweetened\n1 cup cherries*\n0.5 banana\n0.5 tablespoon cacao powder\n0.5 tablespoon chia seeds\n\n*Can substitute cherries with berries"
    },
    {
      "title": "U-PICK ME UP",
      "recipe": "1 cup fresh spinach\n1 cup green tea, brewed and chilled*\n0.75 cups raspberries\n0.75 cups blueberries\n\n*Use one green tea bag or 2 teaspoons loose leaf"
    },
    {
      "title": "STRAWBERRY CARROT PINEAPPLE",
      "recipe": "1 cup fresh spinach\n1 cup coconut water, unsweetened\n0.5 large carrot*\n0.5 cup strawberries\n0.5 cup pineapple\n\n*Can chop and steam carrots to make them easier to blend, or leave them raw."
    },
    {
      "title": "HAWAIIAN BREEZE",
      "recipe": "1 cup fresh spinach\n0.5 cup coconut water, unsweetened\n0.5 orange, peeled\n0.5 cup pineapple\n0.5 cup mango\n0.5 banana"
    },
    {
      "title": "SHAUNA'S CARROT CAKE",
      "recipe": "1 cup fresh spinach\n0.75 cups almond milk, unsweetened\n1 large carrots*\n0.25-inch fresh ginger, peeled\n0.5 cup pineapple\n0.5 banana\n\n*Can chop and steam carrots to make them easier to blend, or leave them raw."
    },
    {
      "title": "ORANGE JEWELS",
      "recipe": "1 cup fresh spinach\n0.75 cups almond milk, unsweetened\n0.25 lemon, peeled or juiced\n0.5 banana\n1 oranges, peeled"
    },
    {
      "title": "CREAM MACHINE",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 avocado\n0.5 cup mango\n0.5 banana"
    },
    {
      "title": "BANANA RAZZMATAZZ",
      "recipe": "1 cup fresh swiss chard\n1 cup almond milk, unsweetened\n1 bananas\n0.5 cup raspberries"
    },
    {
      "title": "SOUTHERN SWISS",
      "recipe": "1 cup fresh swiss chard\n1 cup water\n0.5 cup strawberries\n1 peaches, pitted*\n1 tablespoons coconut oil\n\n*Can substitute peaches with mango or nectarines."
    },
    {
      "title": "APPLE BERRY PUNCH",
      "recipe": "1 cup fresh swiss chard\n1 cup water\n0.75 cups mixed berries\n1 apples, any variety, core removed"
    },
    {
      "title": "GREEN GRANNY",
      "recipe": "1 cup fresh spinach\n0.75 cups green tea, brewed and chilled*\n0.5 granny smith apple, core removed\n0.5 cup green grapes\n0.5 cup mango\n\n*Use one green tea bag or 2 teaspoons loose leaf."
    },
    {
      "title": "PUMPKIN DREAM PIE",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 cup pumpkin, unsweetened (canned or fresh)\n1 bananas\n0.5 teaspoon pumpkin pie spice\n0.5 teaspoon vanilla extract"
    },
    {
      "title": "JUST PLUMMY",
      "recipe": "1 cup fresh kale\n1 cup coconut water, unsweetened\n1 large plums\n0.5 cup mixed berries"
    },
    {
      "title": "APPLE ALMOND BUTTER & JELLY",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 apple, any variety, core removed\n1 cup grapes, any variety\n1.5 tablespoons almond butter"
    },
    {
      "title": "COCO-MINT MOCHA",
      "recipe": "1 cup fresh spinach\n0.1 cup fresh mint\n1 cup almond milk, unsweetened\n1 pears, core removed*\n1 bananas\n2 tablespoons cacao powder\n\n*Can substitute pears with mango."
    },
    {
      "title": "PEAR-BERRY NUTMEG",
      "recipe": "1 cup fresh kale\n1 cup almond milk, unsweetened\n1 cup blueberries\n0.5 pear, core removed*\n0.1 teaspoon nutmeg\n\n*Can substitute pears with mango."
    },
    {
      "title": "CARAMEL APPLE",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 granny smith apple, core removed\n0.5 banana\n2 medjool dates, pitted\n0.25 teaspoon vanilla extract"
    },
    {
      "title": "DAN'S FAMOUS APPLE PIE",
      "recipe": "1 cup fresh spinach\n0.75 cups almond milk, unsweetened\n1.5 apples, any variety, core removed\n2 medjool dates, pitted\n0.5 teaspoon cinnamon\n0.5 teaspoon nutmeg"
    },
    {
      "title": "CHAI LIKE YOU",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.25-inch fresh ginger, peeled\n1 pears, core removed*\n0.5 banana\n0.5 teaspoon cardamom\n0.5 teaspoon cinnamon\n\n*Can substitute pears with mango."
    },
    {
      "title": "PUMPKIN CHOCOLATE CHIP",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 pear, core removed*\n0.5 banana\n0.5 cup pumpkin, unsweetened (canned or fresh)\n0.5 tablespoon cacao powder\n\n*Can substitute pears with mango."
    },
    {
      "title": "KIWI LIMEADE",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 kiwi, peeled or whole\n1 cup pineapple\n0.5 lime, peeled or juiced"
    },
    {
      "title": "BEGINNER'S LUCK",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 cup pineapple\n0.5 cup mango\n1 banana"
    },
    {
      "title": "QUICK PICK ME UP",
      "recipe": "1 cup fresh spinach\n0.75 cup water\n0.5 grapefruit*\n1 cup pineapple\n\n*Can substitute grapefruit with any variety of citrus fruit."
    },
    {
      "title": "MORNING SUNSHINE",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n1 orange\n0.5 cup pineapple\n1 tablespoon chia seeds"
    },
    {
      "title": "STRAWBERRY DAIQUIRI",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n0.5 grapefruit*\n0.75 cup strawberries\n2 medjool dates, pitted\n\n*Can substitute grapefruit with any variety of citrus fruit."
    },
    {
      "title": "CRANBERRY SPRITZER",
      "recipe": "1 cup fresh kale\n1 cup water\n0.25 cup cranberries*\n1.25 cups pineapple\n0.5 lime, juiced or peeled\n\n*Can substitute cranberries with pomegranate seeds or any type of berries"
    },
    {
      "title": "CRANBERRY CITRUS BLAST",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n0.25 cup cranberries*\n1 oranges, peeled\n0.5 banana\n\n*Can substitute cranberries with pomegranate seeds or any type of berries"
    },
    {
      "title": "CITRUS CRUSH",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n0.5 cup pineapple\n0.5 orange, peeled\n0.5 cup grapes, any variety"
    },
    {
      "title": "COCONUT DREAM",
      "recipe": "1 cup fresh kale\n1 cup coconut milk, unsweetened\n0.5 cup mango\n0.5 cup pineapple\n0.5 banana\n1 tablespoons coconut flakes, unsweetened"
    },
    {
      "title": "OH KALE YEAH",
      "recipe": "1 cup fresh kale\n1 cup water\n0.5 banana\n0.5 cup pineapple\n0.5 cup strawberries"
    },
    {
      "title": "BEACHY DREAMS",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 grapefruit, peeled*\n0.5 cup pineapple\n1 kiwi, peeled or whole\n\n*Can substitute grapefruit with any variety of citrus fruit"
    },
    {
      "title": "SHAUNA'S SANGRIA",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n0.5 apple, any variety, core removed\n0.5 cup strawberries\n0.25 cup grapes, any variety\n0.5 orange, peeled"
    },
    {
      "title": "SWEET JUBILEE",
      "recipe": "1 cup fresh kale\n0.5 cup almond milk, unsweetened\n1 cup grapes, any variety\n0.5 apple, any variety, core removed\n0.5 orange, peeled"
    },
    {
      "title": "FLU FIGHTER",
      "recipe": "1 cup fresh kale\n0.75 cups water\n0.5 banana\n1 oranges, peeled\n0.5 cup strawberries"
    },
    {
      "title": "GINGERLICIOUS",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 banana\n1 apple, any variety, core removed\n0.25-inch fresh ginger, peeled"
    },
    {
      "title": "POM POWER",
      "recipe": "1 cup fresh kale\n1 cup water\n0.5 cup blueberries\n0.5 cup strawberries\n0.5 cup pomegranate seeds*\n\n*Can substitute pomegranate seeds with cranberries or any type of berries"
    },
    {
      "title": "PEACEFUL POMEGRANATE",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.75 cups pomegranate seeds*\n0.75 cups mango\n\n*Can substitute pomegranate seeds with cranberries or any type of berries"
    },
    {
      "title": "BERRIES 'N CREAM",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 avocado\n1 cup mixed berries"
    },
    {
      "title": "BANANA BERRY BLAST",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 cup mixed berries\n0.5 bananas"
    },
    {
      "title": "CARING CARROT",
      "recipe": "1 cup kale\n0.5 cup water\n1 orange, peeled\n0.5 large carrot*\n0.5 cup mango\n\n*Can chop and steam carrot to make easier to blend, or leave raw"
    },
    {
      "title": "PINK FLAMANGO",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 cup strawberries\n0.5 cup mango"
    },
    {
      "title": "STRONG POPEYE",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n1 cup pineapple\n0.5 banana\n0.5 lime, juiced or peeled"
    },
    {
      "title": "KIWI TANGO ",
      "recipe": "1 cup fresh kale\n1 cup coconut milk, unsweetened\n1 kiwi, peeled or whole\n1 cup strawberries"
    },
    {
      "title": "CHOCOLATE DIPPED STRAWBERRIES",
      "recipe": "1 cup fresh kale\n1 cup almond milk, unsweetened\n1 cup strawberries\n0.5 banana\n1 tablespoons cacao powder"
    },
    {
      "title": "CHUNKY MONKEY",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 banana\n0.5 pear, core removed*\n1 tablespoons almond butter\n1 tablespoon cacao powder\n\n*Can substitute pear with mango"
    },
    {
      "title": "BERRY CHERRY JUBILEE",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 cup cherries*\n0.5 cup mixed berries\n0.5 banana\n\n*Can substitute cherries with berries"
    },
    {
      "title": "SIMPLE PEACH",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 cup peaches*\n0.5 banana\n\n*Can substitute peaches with mango or nectarines."
    },
    {
      "title": "BERRY PROTEIN BASH",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n0.5 cup strawberries\n0.5 cup blueberries\n0.5 banana\n0.25 cup almonds, soaked in water overnight"
    },
    {
      "title": "TROPICAL CRUSH",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n1 orange\n0.5 cup pineapple\n0.5 banana"
    },
    {
      "title": "ORANGE JULIUS",
      "recipe": "1 cup fresh spinach\n0.5 cup almond milk, unsweetened\n1.5 oranges\n0.5 banana"
    },
    {
      "title": "PEACH COCONUT DREAM",
      "recipe": "0.5 cups fresh spinach\n0.5 cup coconut water, unsweetened\n1 cup grapes, any variety\n0.5 cup peaches*\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "TROPI-KALE",
      "recipe": "0.5 cup fresh spinach\n0.5 cup fresh kale\n1 cup coconut water, unsweetened\n0.5 banana\n1 cup pineapple "
    },
    {
      "title": "MANGO PASSION",
      "recipe": "0.5 cup fresh spinach\n0.5 cup fresh kale\n1 cup water\n1 cup mango\n0.5 cup pineapple"
    },
    {
      "title": "RAZZY PEACH",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.25 cup raspberries\n0.75 cup peaches*\n0.5 banana\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "PEACHY PEAR",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 ripe pears\n0.5 cup peaches*\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "CILANTRO-MANGO DETOX",
      "recipe": "0.75 cups fresh spinach\n0.25 cup fresh cilantro\n1 cup water\n0.75 cup mango\n0.5 cup pineapple\n0.25 avocado"
    },
    {
      "title": "PINEAPPLE BERRY",
      "recipe": "0.75 cups fresh spinach\n0.5 cup water\n0.5 orange, peeled\n0.25 cup cucumber, peeled\n0.5 cup pineapple\n0.5 cup strawberries"
    },
    {
      "title": "STRAWBERRY BLAST",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 cup strawberries\n0.5 banana"
    },
    {
      "title": "MORNING FUEL",
      "recipe": "1 cup fresh kale\n0.5 cup almond milk, unsweetened\n1 orange, peeled\n0.5 cup pineapple\n0.5 banana\n0.25 avocado"
    },
    {
      "title": "BLUEBERRY KALE PUNCH",
      "recipe": "1 cup fresh kale\n0.5 cup almond milk, unsweetened\n1 orange, peeled\n0.5 cup blueberries\n1 banana"
    },
    {
      "title": "MANGO ORANGE MADNESS",
      "recipe": "1 cup fresh spinach\n1 cup coconut water, unsweetened\n0.5 orange, peeled\n0.5 cup mango\n0.5 banana"
    },
    {
      "title": "LEMON CLEANSER",
      "recipe": "1 cup fresh kale\n1 cup water\n1 cup mango\n0.25 lemon, peeled or juiced\n0.5 banana"
    },
    {
      "title": "RAINBOW LOVE",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 orange, peeled\n0.5 cup strawberries \n0.25 cup blueberries\n0.5 banana"
    },
    {
      "title": "CITRUS BANG",
      "recipe": "1 cup fresh kale\n1 cup coconut water, unsweetened\n0.5 orange, peeled\n0.25 cucumber, peeled\n1 cup pineapple\n0.25 lemon, peeled or juiced"
    },
    {
      "title": "SIMPLY CHERRY",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 cup cherries, pitted*\n0.5 banana\n\n*Can substitute cherries with berries"
    },
    {
      "title": "SWEET DREAM",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 cup mango\n0.5 banana\n1 tablespoon almond butter\n0.5 teaspoon cinnamon\n0.1 teaspoon cayenne pepper"
    },
    {
      "title": "CHAZBERRY",
      "recipe": "1 cup fresh spinach\n1 cup water\n1 cup cherries, pitted*\n0.5 cup raspberries\n\n*Can substitute cherries with berries"
    },
    {
      "title": "CHERRY TART",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 cup pineapple\n0.5 cup cherries, pitted\n0.5 banana\n\n*Can substitute cherries with berries"
    },
    {
      "title": "ALMOND BUTTER CUP",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 bananas\n1.5 tablespoons cacao\n1 tablespoon almond butter"
    },
    {
      "title": "CITRUS BREEZE ",
      "recipe": "1 cup fresh spinach\n0.75 cups water\n1 orange, peeled\n0.25 cup mango\n0.25 cup pineapple\n0.5 banana"
    },
    {
      "title": "MANGO GREEN-A COLADA",
      "recipe": "1 cup fresh kale\n1 cup coconut milk, unsweetened\n1 cup mango\n0.5 cup pineapple"
    },
    {
      "title": "PINEAPPLE UPSIDE DOWN CAKE",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n0.5 cup pineapple\n0.5 cup cherries, pitted*\n0.5 banana\n\n*Can substitute cherries with berries"
    },
    {
      "title": "COCO-CHERRY BERRY COOLER",
      "recipe": "1 cup fresh kale\n1 cup coconut milk, unsweetened\n1 cup cherries, pitted*\n0.5 cup blueberries\n\n*Can substitute cherries with berries"
    },
    {
      "title": "SWEET FREEDOM",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n0.5 cup strawberries\n0.5 cup blueberries\n0.5 banana"
    },
    {
      "title": "SUMMER ORCHARD",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 peach, pitted*\n0.5 large plum, pitted\n1 apricots, pitted\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "ROCKIN' RASPBERRY",
      "recipe": "1 cup fresh kale\n1 cup coconut water, unsweetened\n1 cup raspberries\n0.5 green apple, cored"
    },
    {
      "title": "PINEAPPLE APRICOT GINGER BLISS",
      "recipe": "1 cup fresh spinach\n1 cup water\n0.5 cup pineapple\n3 apricots, pitted\n0.5-inch fresh ginger"
    },
    {
      "title": "STRAW-BANA PEACH",
      "recipe": "1 cup fresh kale\n0.5 cup water\n0.5 orange, peeled\n0.5 peach, pitted*\n0.5 cup strawberries\n0.5 banana\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "PLUMBERRY BEET",
      "recipe": "1 cup fresh kale\n1 cup coconut water, unsweetened\n1 cup raspberries\n0.5 large plum, pitted\n0.25 beet, diced (raw)"
    },
    {
      "title": "GRAPE LIME RICKEY",
      "recipe": "1 cup fresh spinach\n0.5 cup water\n1.5 cups grapes, red or purple\n0.5 lime, peeled"
    },
    {
      "title": "STRAWBERRY PATCH",
      "recipe": "1 cup fresh chard, red or swiss\n1 cup almond milk, unsweetened\n1 cup strawberries\n0.5 banana"
    },
    {
      "title": "CARROT MANGO PEACH",
      "recipe": "1 cup fresh chard, red or swiss\n1 cup water\n0.5 cup mango\n0.5 large carrot, chopped\n0.5 peach, pitted*\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "PEACHES 'N CREAM",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 peach, pitted*\n0.5 banana\n0.1 teaspoon cinnamon\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "RAZZY PEACH MELBA",
      "recipe": "1 cup fresh spinach\n1 cup almond milk, unsweetened\n1 peach, pitted*\n0.5 cup raspberries\n0.25 teaspoon vanilla extract\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "WATERMELON FRESCA",
      "recipe": "1 cup fresh spinach\n0.5 cup water\n0.75 cups watermelon, seeded\n0.75 cups strawberries\n0.5-inch fresh ginger"
    },
    {
      "title": "MELON BERRY",
      "recipe": "1 cup fresh spinach\n1.5 cups watermelon, seeded\n0.5 cup frozen mixed berries"
    },
    {
      "title": "BLACKBERRIES AND CREAM",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n1 cup blackberries\n0.5 banana"
    },
    {
      "title": "BLACKBERRY PEACH COBBLER",
      "recipe": "1 cup fresh spinach\n1 cup coconut milk, unsweetened\n1 cup blackberries\n0.5 peach, pitted*\n1 tablespoons flaxseed, whole or ground\n0.1 teaspoon cinnamon\n\n*Can substitute peaches with mango or nectarines"
    },
    {
      "title": "BERRY CITRUS-ADE",
      "recipe": "1 cup fresh kale\n0.5 cup water\n0.5 orange, peeled\n1.25 cups frozen mixed berries\n0.25 lemon, peeled"
    },
    {
      "title": "PAPAYA SUNRISE",
      "recipe": "1 cup fresh spinach\n1 cup coconut water, unsweetened\n0.5 orange, peeled\n0.5 cup papaya, seeded\n0.5 cup strawberries"
    },
    {
      "title": "KIWI STRAWBERRY PUNCH",
      "recipe": "1 cup fresh spinach\n1 cup coconut water, unsweetened\n1 cup strawberries\n1 kiwifruit (peeled is optional)"
    },
    {
      "title": "MELONA",
      "recipe": "1 cup fresh spinach\n0.5 cup almond milk, unsweetened\n1 cup honeydew\n0.5 banana\n0.25 teaspoon vanilla extract"
    },
    {
      "title": "HONEY-KISSED NECTARINES",
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
        <RecipeApp recipes={recipes} />
      </main>

      <Footer />
    </div>
  )
}
