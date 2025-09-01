import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ultraDarkonImage from "figma:asset/55141f87848af1b9f3cc2493ec73bdcbb5f88080.png";

const themeColors = {
  "ultra-darkon": "#b83e3f",
};

export function UltraDarkonGuide() {
  const currentTheme = themeColors["ultra-darkon"];
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraDarkonImage}
          alt="Ultra Darkon"
          className="w-full h-auto rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl"
          style={{
            borderColor: `${currentTheme}66`,
            boxShadow: `0 0 30px ${currentTheme}20`
          }}
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList 
          className="grid w-full grid-cols-4 bg-black/80 backdrop-blur-sm transition-all duration-500 p-1"
          style={{
            borderColor: `${currentTheme}66`,
            border: `1px solid ${currentTheme}66`
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
        </TabsList>

        <TabsContent
          value="overview"
          className="space-y-4 text-white"
        >
          <Card 
            className="bg-black/75 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-xl relative"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`
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
                  <span className="text-white">100</span>
                </div>
                <div>
                  <span className="text-yellow-300">HP:</span>{" "}
                  <span className="text-white">22,222,222</span>
                </div>
                <div>
                  <span className="text-yellow-300">
                    Location:
                  </span>{" "}
                  <span className="text-white">
                    /join ultradarkon
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
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Class Compositions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-yellow-300 mb-3">
                  Standard Composition
                </h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Legion Revenant (Taunter)</li>
                  <li>• Lord of Order (Support)</li>
                  <li>• LightCaster (Time-Heal/DPS)</li>
                  <li>• Stone Crusher (Taunter/Support)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 mb-3">
                  Speedrun Composition
                </h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Legion Revenant (Taunter)</li>
                  <li>• Lord of Order (Support/Taunter)</li>
                  <li>• Chrono Shadowslayer (DPS)</li>
                  <li>• Paladin Chronomancer (Support)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="bg-red-900/30 p-4 rounded-lg border border-red-500/30"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25`
            }}
          >
            <h4 className="text-red-300 mb-2">⏰ Time Limit Warning</h4>
            <p className="text-gray-200">
              <span className="text-white font-medium">4 minutes and 30 seconds</span> time limit. 
              Darkon will nuke all players if the fight exceeds this duration.
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
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Core Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 mb-2">
                    Universal Mechanics
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Darkon reduces his <span className="text-blue-300 font-medium">defense every 30 seconds</span>
                    </li>
                    <li>
                      • Inflicts <span className="text-red-300 font-medium">90% current HP damage every 12 seconds</span>
                    </li>
                    <li>
                      • Three distinct phases with different debuff mechanics
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
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                First Phase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">
                    Phase Mechanics
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • <span className="text-red-300 font-medium">50% hit chance reduction</span> from auto attacks{" "}
                      <span className="text-gray-400">(Not Tauntable)</span>
                    </li>
                    <li>
                      • <span className="text-purple-300 font-medium">Elegy of Madness</span> cast every 5 seconds{" "}
                      <span className="text-yellow-300">(Tauntable)</span>
                    </li>
                    <li>
                      • If still affected by Elegy when recast → <span className="text-red-300 font-medium">Captive Audience</span> (4-second stun, stacks infinitely)
                    </li>
                    <li>
                      • Musical note stacking: <span className="text-white font-medium">do, re, mi, fa, so, ka, ti, do dusk</span>
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Team wipe</span> if Darkon reaches "do, dusk"
                    </li>
                    <li>
                      • <span className="text-orange-300 font-medium">+100% crit damage</span> per 90% HP nuke{" "}
                      <span className="text-gray-400">(Not Tauntable)</span> <span className="text-green-300">(Praxisable)</span>
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
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Second Phase (~15M HP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-300 mb-2">
                    Phase Mechanics
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Removes all previous stacks
                    </li>
                    <li>
                      • Auto attacks <span className="text-blue-300 font-medium">reduce haste by 6%</span> (stacks to 22){" "}
                      <span className="text-gray-400">(Not Tauntable)</span>
                    </li>
                    <li>
                      • <span className="text-green-300 font-medium">Seed attacks</span> every 5 seconds (3 stacks max){" "}
                      <span className="text-yellow-300">(Tauntable)</span>
                    </li>
                    <li>
                      • <span className="text-white font-medium">Stack 1:</span> Removes haste debuff
                    </li>
                    <li>
                      • <span className="text-orange-300 font-medium">Stack 2:</span> +1000% crit rate, -1000% crit damage (attacks heal Darkon, heals damage players)
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Stack 3:</span> Instant death
                    </li>
                    <li>
                      • <span className="text-orange-300 font-medium">+50% crit damage</span> per 90% HP nuke (stacks to 22){" "}
                      <span className="text-gray-400">(Not Tauntable)</span> <span className="text-green-300">(Praxisable)</span>
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
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Third Phase (~4.5M HP)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 mb-2">
                    Phase Mechanics
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • <span className="text-green-300 font-medium">Darkon heals to 90% HP</span> (Can't be decayed)
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Massive damage</span> to all players at phase start{" "}
                      <span className="text-blue-300">(Quixable)</span>
                    </li>
                    <li>
                      • Removes all previous buffs
                    </li>
                    <li>
                      • Auto attacks <span className="text-red-300 font-medium">reduce heal by 80%</span>
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Devastating damage</span> for 50 seconds from phase start
                    </li>
                    <li>
                      • <span className="text-purple-300 font-medium">Dirge of Astravia</span> every 5 seconds{" "}
                      <span className="text-yellow-300">(Tauntable)</span>
                    </li>
                    <li>
                      • Increases <span className="text-blue-300 font-medium">mana consumption by 25%</span> (stacks to 22)
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">High DoT</span> applied per 90% HP nuke{" "}
                      <span className="text-gray-400">(Not Tauntable)</span> <span className="text-green-300">(Praxisable, but DoT is not)</span>
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
              boxShadow: `0 0 15px ${currentTheme}20`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Action Pattern
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                  <p className="text-blue-300 font-medium mb-2">⚡ Critical Pattern Understanding:</p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <span className="text-yellow-300 font-medium">Battle Start:</span> Always 6 actions → 90% HP nuke
                    </li>
                    <li>
                      • <span className="text-white font-medium">After:</span> Always 5 actions → 90% HP nuke
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Phase Shifts</span> (15M HP and 4.5M HP) can disrupt this pattern
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 p-3 rounded-lg">
                  <p className="text-purple-300 font-medium mb-2">🎯 Priority Order (Highest to Lowest):</p>
                  <ol className="space-y-1 ml-4">
                    <li>1. <span className="text-red-300 font-medium">Phase Shift</span></li>
                    <li>2. <span className="text-orange-300 font-medium">90% HP Nuke</span></li>
                    <li>3. <span className="text-yellow-300 font-medium">Special Tauntable Attacks</span></li>
                    <li>4. <span className="text-gray-300 font-medium">Auto Attacks</span></li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 0 15px ${currentTheme}20`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Standard Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-green-900/20 p-3 rounded-lg">
                  <p className="text-green-300 font-medium mb-2">🛡️ LR/LOO/SC/LC Composition:</p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <span className="text-yellow-300">Legion Revenant & Lord of Order</span> loop taunting
                    </li>
                    <li>
                      • <span className="text-blue-300">Decent speed</span>, usually safe strategy
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-blue-300 font-medium mb-2">💙 LR/LOO/PCM/CSS Composition:</p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <span className="text-yellow-300">Legion Revenant & Lord of Order</span> loop taunting
                    </li>
                    <li>
                      • <span className="text-green-300">Paladin Chronomancer</span> times heals perfectly
                    </li>
                    <li>
                      • <span className="text-green-300 font-medium">Safest</span> (depending on PCM skill), <span className="text-yellow-300 font-medium">faster</span> than standard
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
              boxShadow: `0 0 15px ${currentTheme}20`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Key Strategy Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-medium mb-2">💚 PCM Healing Strategy:</p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <span className="text-white font-medium">Heal every 2 Darkon actions</span>
                    </li>
                    <li>
                      • <span className="text-yellow-300 font-medium">Ensure team is full health after action 4</span>
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Don't heal at action 5</span> - next action is 90% HP nuke (won't kill)
                    </li>
                    <li>
                      • <span className="text-blue-300 font-medium">Heal after the 90% HP nuke</span> instead
                    </li>
                    <li>
                      • <span className="text-orange-300">Exception:</span> DoT in third phase CAN kill
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-500/30">
                  <p className="text-orange-300 font-medium mb-2">🔶 Lord of Order Timing:</p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <span className="text-red-300 font-medium">Stop using skill 5</span> at 12 million HP
                    </li>
                    <li>
                      • <span className="text-green-300 font-medium">Resume skill 5</span> at 4.6 million HP
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
                boxShadow: `0 0 15px ${currentTheme}20`
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
                    <li>• Arcana Weapon | Awe Blast</li>
                    <li>• Wizard Class</li>
                    <li>• Base Forge | Wizard Helm</li>
                    <li>• Penitence | Wizard Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Potent Malevolence Elixir / Scroll of Enrage (SoE)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
              style={{
                borderColor: `${currentTheme}66`,
                boxShadow: `0 0 15px ${currentTheme}20`
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
                    <li>• Arcana's Concerto Weapon | Awe Blast</li>
                    <li>• Luck Class</li>
                    <li>• Base Forge | Luck</li>
                    <li>• Absolution | Luck</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Divine Elixir / Potent Honor Potion
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
              style={{
                borderColor: `${currentTheme}66`,
                boxShadow: `0 0 15px ${currentTheme}20`
              }}
            >
              <CardHeader>
                <CardTitle className="text-white">
                  LightCaster
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Praxis/Ravenous | Health Vamp</li>
                    <li>• Wizard Class</li>
                    <li>• Base Forge | Wizard Helm</li>
                    <li>• Penitence | Wizard Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Potent Malevolence Elixir / Potent Honor Potion
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
              style={{
                borderColor: `${currentTheme}66`,
                boxShadow: `0 0 15px ${currentTheme}20`
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
                    <li>• Valiance Weapon | Health Vamp</li>
                    <li>• Wizard Class</li>
                    <li>• Anima | Wizard/Fighter</li>
                    <li>• Absolution | Wizard Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Divine Elixir / Scroll of Enrage (SoE)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}