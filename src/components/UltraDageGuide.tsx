import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ultraDageImage from "figma:asset/3f95d1ffc35d266e13456f747e0f1cd22d633657.png";

const themeColors = {
  "ultra-dage": "#3976af",
};

export function UltraDageGuide() {
  const currentTheme = themeColors["ultra-dage"];
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraDageImage}
          alt="Ultra Dage"
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
                  <span className="text-white">6,500,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">
                    Location:
                  </span>{" "}
                  <span className="text-white">
                    /join ultradage
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
                  <li>• Chaos Avenger (Solo Taunter)</li>
                  <li>• Verus Doomknight (DPS)</li>
                  <li>• Lord of Order (Support)</li>
                  <li>• Archpaladin (Support)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 mb-3">
                  Speedrun Composition
                </h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Chaos Avenger (Solo Taunter)</li>
                  <li>• Verus Doomknight (DPS)</li>
                  <li>• Chrono Shadowslayer (DPS)</li>
                  <li>• Archfiend (DPS)</li>
                </ul>
              </div>
            </CardContent>
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
                Boss Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-300 mb-2">
                    Auto Attack Effects
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Applies <span className="text-blue-300 font-medium">Cloaks of Darkness</span> - buffs Dage's defense{" "}
                      <span className="text-yellow-300">(Tauntable)</span>
                    </li>
                    <li>
                      • Applies <span className="text-blue-300 font-medium">Aetherna Nox</span> - debuffs players' defense{" "}
                      <span className="text-yellow-300">(Tauntable)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-300 mb-2">
                    Noxious Decay
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Occurs every <span className="text-white font-medium">8 seconds</span>{" "}
                      <span className="text-red-300">(Not Tauntable)</span>
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Reverses healing skills</span> - healing becomes damage
                    </li>
                    <li>
                      • <span className="text-yellow-300">Critical:</span> Do not use healing skills during this fight
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 mb-2">
                    Charge Attack
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Occurs every <span className="text-white font-medium">15 seconds</span>
                    </li>
                    <li>
                      • Deals <span className="text-red-300 font-medium">massive damage</span> - can one-shot players
                    </li>
                    <li>
                      • <span className="text-yellow-300">Survival:</span> Step to the{" "}
                      <span className="text-white font-medium">light zone</span> to prevent getting one-shotted
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">
                    Soul Feast (60 Second Mechanic)
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Dage <span className="text-green-300 font-medium">heals himself</span> after 60 seconds
                    </li>
                    <li>
                      • Charges for <span className="text-white font-medium">10 seconds</span> before unleashing devastating damage
                    </li>
                    <li>
                      • Message: <span className="text-purple-300 font-medium">"I will feast on your souls, mortals!"</span>
                    </li>
                    <li>
                      • <span className="text-yellow-300">Tauntable and Quixable</span>
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
                General Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                  <p className="text-red-300 font-medium mb-2">❌ Critical Rule:</p>
                  <p>
                    <span className="text-white font-medium">Do not use any healing skills</span> when fighting Dage due to Noxious Decay reversing heals into damage.
                  </p>
                </div>
                <div className="bg-yellow-900/20 p-3 rounded-lg">
                  <p className="text-yellow-300 font-medium mb-2">⚠️ Exception:</p>
                  <p>
                    There is a small window where you can heal when Dage charges Disposal, but normally the fight won't last that long.
                  </p>
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
                Strategy #1: Most Common
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-blue-300 font-medium mb-2">🛡️ Chaos Avenger Solo Loop Taunt:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Equip <span className="text-yellow-300 font-medium">Scroll of Enrage</span></li>
                    <li>• Solo loop taunt using <span className="text-white font-medium">skill 3 and 6</span></li>
                    <li>• Most reliable and widely used strategy</li>
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
                Strategy #2: Not Recommended
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-gray-900/20 p-3 rounded-lg border border-gray-500/30">
                  <p className="text-gray-300 font-medium mb-2">🥷 Ninja Class Evasion:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Use <span className="text-purple-300 font-medium">Ninja class</span></li>
                    <li>• Spam <span className="text-white font-medium">Shadow Blade</span> to make all Dage's attacks miss</li>
                    <li>• <span className="text-red-300">Issues:</span> Time limit, Shadow Blade doesn't always proc</li>
                    <li>• <span className="text-red-300">Not recommended</span> due to unreliability</li>
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
                Strategy #3: Expert Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-gold-900/20 p-3 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-300 font-medium mb-2">⚡ Precision Timing:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• <span className="text-red-300 font-medium">Very strict timing required</span></li>
                    <li>• <span className="text-green-300 font-medium">Fastest strategy</span></li>
                    <li>• <span className="text-orange-300 font-medium">Very high skill ceiling</span></li>
                    <li>• Chaos Avenger times <span className="text-white font-medium">skill 3</span> correctly to taunt all auto attacks</li>
                    <li>• Can use <span className="text-yellow-300">potion slot instead of Scroll of Enrage</span></li>
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
                  Chaos Avenger
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Dauntless/Ravenous Weapon | Health Vamp</li>
                    <li>• Luck Class</li>
                    <li>• Anima Helm | Luck</li>
                    <li>• Vainglory Cape | Luck</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Fate Tonic / Potent Battle Elixir / Scroll of Enrage | Potent Honor Potion (No taunt strat)
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
                  Verus Doomknight
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Ravenous Weapon | Spiral Carve</li>
                    <li>• Luck Class</li>
                    <li>• Anima Helm | Luck</li>
                    <li>• Vainglory Cape | Luck</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Fate Tonic / Potent Battle Elixir / Potent Honor Potion
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
                    <li>• Health Vamp</li>
                    <li>• Luck Class</li>
                    <li>• Base Forge Helm | Luck</li>
                    <li>• Penitence Cape | Luck</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Fate Tonic|Body Tonic / Potent Battle Elixir / Scroll of Lifesteal (Safer) | Scroll of Mystify (Faster)
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
                  Archpaladin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Dauntless | Health Vamp</li>
                    <li>• Luck Class</li>
                    <li>• Base Forge Helm | Luck</li>
                    <li>• Lament Cape | Luck</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Fate Tonic / Potent Battle Elixir / Potent Honor Potion
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