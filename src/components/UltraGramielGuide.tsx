import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import ultraGramielImage from "figma:asset/600c1d9002f64fd70d1ed4ba138a3769b66e3d04.png";
import gramielChartImage from "figma:asset/a18271b457cd4494a5d1ef3c0fe31d8deeb7d907.png";

const themeColors = {
  "ultra-gramiel": "#dad6af",
};

export function UltraGramielGuide() {
  const currentTheme = themeColors["ultra-gramiel"];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraGramielImage}
          alt="Ultra Gramiel"
          className="w-full h-auto rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl"
          style={{
            borderColor: `${currentTheme}66`,
            boxShadow: `0 0 30px ${currentTheme}20`,
          }}
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList
          className="grid w-full grid-cols-5 bg-black/80 backdrop-blur-sm transition-all duration-500 p-1"
          style={{
            borderColor: `${currentTheme}66`,
            border: `1px solid ${currentTheme}66`,
          }}
        >
          <TabsTrigger
            value="overview"
            className="tabs-trigger text-white transition-all duration-300 hover:scale-105"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="mechanics"
            className="tabs-trigger text-white transition-all duration-300 hover:scale-105"
          >
            Mechanics
          </TabsTrigger>
          <TabsTrigger
            value="strategy"
            className="tabs-trigger text-white transition-all duration-300 hover:scale-105"
          >
            Strategy
          </TabsTrigger>
          <TabsTrigger
            value="builds"
            className="tabs-trigger text-white transition-all duration-300 hover:scale-105"
          >
            Class Builds
          </TabsTrigger>
          <TabsTrigger
            value="chart"
            className="tabs-trigger text-white transition-all duration-300 hover:scale-105"
          >
            Gramiel Chart
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="overview"
          className="space-y-4 text-white"
        >
          <Card
            className="bg-black/75 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-xl relative"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Boss Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-yellow-300">
                    Level:
                  </span>{" "}
                  <span className="text-white">95</span>
                </div>
                <div>
                  <span className="text-yellow-300">HP:</span>{" "}
                  <span className="text-white">7,500,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">
                    Location:
                  </span>{" "}
                  <span className="text-white">
                    /join ultragramiel
                  </span>
                </div>
                <div>
                  <span className="text-yellow-300">Type:</span>{" "}
                  <span className="text-white">Ultra Boss</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-black/75 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-xl relative"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Class Composition
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-yellow-300 mb-3">
                  Standard Composition (Safest)
                </h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Legion Revenant (Taunter)</li>
                  <li>• Lord of Order (Taunter)</li>
                  <li>• Stone Crusher (Taunter)</li>
                  <li>• Shaman (Taunter)</li>
                </ul>
                <p className="text-gray-300 text-sm mt-2">
                  Lord of Order and Shaman on one Crystal,
                  Legion Revenant and Stone Crusher on the
                  other.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25`,
            }}
          >
            <h4 className="text-orange-300 mb-2">
              ⚔️ Two-Phase Fight
            </h4>
            <p className="text-gray-200">
              This fight is divided into{" "}
              <span className="text-white font-medium">
                Phase 1
              </span>{" "}
              (Grace Crystals alive) and{" "}
              <span className="text-white font-medium">
                Phase 2
              </span>{" "}
              (Grace Crystals destroyed). Each phase has
              completely different mechanics.
            </p>
          </Card>
        </TabsContent>

        <TabsContent
          value="mechanics"
          className="space-y-4 text-white"
        >
          <Card
            className="bg-black/75 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-xl relative"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Phase 1: Grace Crystal Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-300 mb-2">
                    Crystal Charge Attack
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Pulse charges for{" "}
                      <span className="text-white font-medium">
                        4 seconds
                      </span>{" "}
                      then applies{" "}
                      <span className="text-red-300 font-medium">
                        Grace Shattered
                      </span>{" "}
                      for 20 seconds
                    </li>
                    <li>
                      •{" "}
                      <span className="text-yellow-300">
                        First stack:
                      </span>{" "}
                      Reduces Damage Resistance and Physical
                      Resistance by{" "}
                      <span className="text-white font-medium">
                        25%
                      </span>
                    </li>
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Second stack:
                      </span>{" "}
                      Reduces respective stats by{" "}
                      <span className="text-red-300 font-medium">
                        2500%
                      </span>{" "}
                      (essentially instant death)
                    </li>
                    <li>
                      • Message:{" "}
                      <span className="text-orange-300">
                        "The Grace Crystal prepares a defense
                        shattering attack!"
                      </span>
                    </li>
                    <li>
                      •{" "}
                      <span className="text-white font-medium">
                        14s cooldown
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 mb-2">
                    Unstable Crystal Explosion
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Used when{" "}
                      <span className="text-white font-medium">
                        one grace crystal is destroyed
                      </span>
                    </li>
                    <li>
                      • Message:{" "}
                      <span className="text-red-300">
                        "The remaining Grace Crystal is
                        unstable, destroy it quickly!"
                      </span>
                    </li>
                    <li>
                      • Charges for{" "}
                      <span className="text-white font-medium">
                        5 seconds
                      </span>
                      , then uses{" "}
                      <span className="text-red-300 font-medium">
                        Crystal Explosion (Instant death)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-black/75 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-xl relative"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Phase 2: Gramiel Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">
                    Auto Attack & Vendetta System
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Auto attacks apply{" "}
                      <span className="text-red-300 font-medium">
                        Celestial Ruin
                      </span>{" "}
                      - reduces{" "}
                      <span className="text-white font-medium">
                        MAG & PHYS resistance by 40%
                      </span>{" "}
                      (stacks)
                    </li>
                    <li>
                      • Applies{" "}
                      <span className="text-purple-300 font-medium">
                        Vendetta
                      </span>{" "}
                      when taunted
                    </li>
                    <li>
                      • Each taunter gets{" "}
                      <span className="text-white font-medium">
                        2 stacks of vendetta each turn
                      </span>{" "}
                      (6s focus : 2.25 AA cooldown)
                    </li>
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Dangerous:
                      </span>{" "}
                      Taunting more than once per player
                      increases Vendetta stacks
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 mb-2">
                    Empowered Scorching Light (Mini Nuke)
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Occurs every{" "}
                      <span className="text-white font-medium">
                        10 seconds
                      </span>
                    </li>
                    <li>
                      • Deals{" "}
                      <span className="text-red-300 font-medium">
                        80% of current HP
                      </span>{" "}
                      damage
                    </li>
                    <li>
                      • Applies{" "}
                      <span className="text-blue-300 font-medium">
                        Death's Door
                      </span>{" "}
                      to each player with Vendetta
                    </li>
                    <li>
                      • If T1-T4 taunted,{" "}
                      <span className="text-white font-medium">
                        all will get Death's Door
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 mb-2">
                    Channeling/Unleashed Grace (LIBERATOR)
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Triggers every time mini nuke has been
                      used{" "}
                      <span className="text-white font-medium">
                        3 times (30 seconds)
                      </span>
                    </li>
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Instant kill
                      </span>{" "}
                      players with{" "}
                      <span className="text-white font-medium">
                        5 stacks of vendetta
                      </span>
                    </li>
                    <li>
                      • This is why each taunter must not taunt
                      more than{" "}
                      <span className="text-white font-medium">
                        2 times max
                      </span>
                    </li>
                    <li>
                      • Charges for{" "}
                      <span className="text-white font-medium">
                        5 seconds
                      </span>{" "}
                      before damage
                    </li>
                    <li>
                      • Removes debuffs (Celestial Ruin and
                      Vendetta stacks)
                    </li>
                    <li>
                      • Message:{" "}
                      <span className="text-red-300">
                        "All servants of the liberator must
                        die!"
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-300 mb-2">
                    Celestial Rapture/Vanquish (HP Thresholds)
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • HP threshold skill at{" "}
                      <span className="text-white font-medium">
                        70%, 40%, 10% HP
                      </span>
                    </li>
                    <li>
                      • Message:{" "}
                      <span className="text-green-300">
                        "The Shadow Fiend leads their aid to
                        those at Death's Door"
                      </span>
                    </li>
                    <li>
                      • Charges for{" "}
                      <span className="text-white font-medium">
                        4 seconds
                      </span>
                    </li>
                    <li>
                      • Applies{" "}
                      <span className="text-blue-300 font-medium">
                        invulnerable
                      </span>{" "}
                      to self and players with Death's
                      Door/Vendetta
                    </li>
                    <li>
                      • Removes Vendetta stacks, Death's Door
                      stays
                    </li>
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Vanquish:
                      </span>{" "}
                      Instant-kill players{" "}
                      <span className="text-white font-medium">
                        without vulnerable
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="strategy"
          className="space-y-4 text-white"
        >
          <Card
            className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 0 15px ${currentTheme}20`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Phase 1 Strategy: Grace Crystals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                  <p className="text-blue-300 font-medium mb-2">
                    💎 Crystal Management:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • Since crystals shatter defense and{" "}
                      <span className="text-white font-medium">
                        each player can't tank more than one
                        shatter
                      </span>
                    </li>
                    <li>
                      • Divide players into{" "}
                      <span className="text-yellow-300 font-medium">
                        two players on each Crystal
                      </span>
                    </li>
                    <li>
                      • Have them{" "}
                      <span className="text-white font-medium">
                        take turns to taunt shatter
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-500/30">
                  <p className="text-orange-300 font-medium mb-2">
                    ⚖️ HP Balancing:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • Keep both Crystals at{" "}
                      <span className="text-white font-medium">
                        relatively the same amount of health
                      </span>
                    </li>
                    <li>
                      • Any HP imbalance must be{" "}
                      <span className="text-yellow-300 font-medium">
                        fixable under 5 seconds
                      </span>
                    </li>
                    <li>
                      • Otherwise the unstable crystal will
                      apply{" "}
                      <span className="text-red-300 font-medium">
                        instant death
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 0 15px ${currentTheme}20`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Phase 2 Strategy: Gramiel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/30">
                  <p className="text-purple-300 font-medium mb-2">
                    🔄 Taunt Rotation:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • All 4 players continue to taunt in{" "}
                      <span className="text-white font-medium">
                        loop pattern: T1-T2-T3-T4
                      </span>
                    </li>
                    <li>
                      • Can assign the order of taunters
                      yourself,{" "}
                      <span className="text-yellow-300">
                        no particular order required
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-medium mb-2">
                    ⏰ Phase 2 Start Timing:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • Gramiel charges for{" "}
                      <span className="text-white font-medium">
                        5 seconds
                      </span>{" "}
                      at phase start
                    </li>
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Wait until 5s are up
                      </span>{" "}
                      before starting taunts
                    </li>
                    <li>
                      • This is important so T1 won't waste
                      their taunt
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-900/20 p-3 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-300 font-medium mb-2">
                    💀 Death's Door Strategy:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • T1-T4 will fully get Death's Door for{" "}
                      <span className="text-white font-medium">
                        24 seconds
                      </span>
                    </li>
                    <li>
                      • Need to wait for{" "}
                      <span className="text-purple-300 font-medium">
                        Liberator (30s mark)
                      </span>{" "}
                      so everyone gets Death's Door
                    </li>
                    <li>
                      • This triggers{" "}
                      <span className="text-blue-300 font-medium">
                        invulnerable
                      </span>
                      , allowing survival of Vanquish
                    </li>
                    <li>
                      • Players survive assuming they only taunt{" "}
                      <span className="text-white font-medium">
                        1-2x in 30 seconds
                      </span>{" "}
                      (less than 5 vendetta stacks)
                    </li>
                  </ul>
                </div>
                <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                  <p className="text-red-300 font-medium mb-2">
                    🚫 Damage Rush Prevention:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      •{" "}
                      <span className="text-white font-medium">
                        Can't rush damage
                      </span>{" "}
                      - need to wait at least{" "}
                      <span className="text-yellow-300 font-medium">
                        24 seconds
                      </span>{" "}
                      for Death's Door to apply to 4 players
                    </li>
                    <li>
                      • When Gramiel charges{" "}
                      <span className="text-green-300 font-medium">
                        Celestial Rapture
                      </span>{" "}
                      (HP threshold), he stops auto attacks -{" "}
                      <span className="text-yellow-300">
                        skip taunting
                      </span>
                    </li>
                    <li>
                      • He receives{" "}
                      <span className="text-white font-medium">
                        0 damage
                      </span>{" "}
                      during charge - stop taunting
                    </li>
                    <li>
                      • Once he starts receiving damage again,{" "}
                      <span className="text-white font-medium">
                        restart taunts (T1-T2-T3-T4)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="builds"
          className="space-y-4 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
              style={{
                borderColor: `${currentTheme}66`,
                boxShadow: `0 0 15px ${currentTheme}20`,
              }}
            >
              <CardHeader>
                <CardTitle className="text-white">
                  Legion Revenant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Health Vamp</li>
                    <li>• Wizard Class</li>
                    <li>• Wizard Helm</li>
                    <li>• Absolution Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Potent Malevolence Elixir /
                    Scroll of Enrage
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
              style={{
                borderColor: `${currentTheme}66`,
                boxShadow: `0 0 15px ${currentTheme}20`,
              }}
            >
              <CardHeader>
                <CardTitle className="text-white">
                  Stone Crusher
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Valiance</li>
                    <li>• Healer Class</li>
                    <li>• Anima Helm</li>
                    <li>• Absolution Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Might Tonic / Divine Elixir / Scroll of
                    Enrage
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
              style={{
                borderColor: `${currentTheme}66`,
                boxShadow: `0 0 15px ${currentTheme}20`,
              }}
            >
              <CardHeader>
                <CardTitle className="text-white">
                  Lord of Order
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Valiance</li>
                    <li>• Luck Class</li>
                    <li>• Anima Helm</li>
                    <li>• Penitence Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Fate Tonic / Divine Elixir / Scroll of
                    Enrage (SoE)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
              style={{
                borderColor: `${currentTheme}66`,
                boxShadow: `0 0 15px ${currentTheme}20`,
              }}
            >
              <CardHeader>
                <CardTitle className="text-white">
                  Shaman
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Elysium</li>
                    <li>• Wizard Class</li>
                    <li>• Wizard Helm</li>
                    <li>• Vainglory Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Potent Malevolence Elixir /
                    Scroll of Enrage
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent
          value="chart"
          className="space-y-4 text-white"
        >
          <Card
            className="bg-black/75 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-xl relative"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Gramiel Strategy Chart
              </CardTitle>
              <p className="text-gray-300 text-sm">
                Thanks to{" "}
                <span className="text-yellow-300 font-medium">
                  Lilicht
                </span>{" "}
                for creating this comprehensive strategy chart.
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="cursor-pointer transition-all duration-300 hover:scale-105 border-0 bg-transparent p-0 w-full">
                      <img
                        src={gramielChartImage}
                        alt="Gramiel Strategy Chart by Lilicht"
                        className="w-full h-auto rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl"
                        style={{
                          borderColor: `${currentTheme}66`,
                          boxShadow: `0 0 20px ${currentTheme}20`,
                        }}
                      />
                      <p className="text-gray-400 text-sm mt-3">
                        🔍 Click to zoom in/out
                      </p>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] bg-black/95 border-0 p-4">
                    <DialogTitle className="sr-only">
                      Gramiel Strategy Chart - Zoomed View
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      Full-size view of the Ultra Gramiel
                      strategy chart created by Lilicht, showing
                      detailed mechanics and class builds for
                      the two-phase encounter.
                    </DialogDescription>
                    <div className="relative">
                      <img
                        src={gramielChartImage}
                        alt="Gramiel Strategy Chart by Lilicht - Zoomed View"
                        className="w-full h-auto rounded-lg shadow-2xl"
                        style={{
                          maxHeight: "85vh",
                          objectFit: "contain",
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-black/80 rounded-lg px-3 py-2">
                        <p className="text-white text-sm">
                          Created by{" "}
                          <span className="text-yellow-300 font-medium">
                            Lilicht
                          </span>
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-6 space-y-4">
                <Card className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-300 mb-2">
                    💡 How to Use
                  </h4>
                  <p className="text-gray-200">
                    This chart provides a{" "}
                    <span className="text-white font-medium">
                      visual overview
                    </span>{" "}
                    of the entire Ultra Gramiel strategy. Use it
                    alongside the detailed mechanics and
                    strategy tabs for the complete understanding
                    of this complex encounter.
                  </p>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}