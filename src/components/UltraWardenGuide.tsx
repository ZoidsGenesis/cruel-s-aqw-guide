import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ultraWardenImage from "figma:asset/a0a2d3aa4195d3e0d3203ec222d3a2ebd21defc5.png";

const themeColors = {
  "ultra-warden": "#867050",
};

export function UltraWardenGuide() {
  const currentTheme = themeColors["ultra-warden"];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraWardenImage}
          alt="Ultra Warden"
          className="w-full h-auto rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl"
          style={{
            borderColor: `${currentTheme}66`,
            boxShadow: `0 0 30px ${currentTheme}20`,
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

        <TabsContent value="overview" className="space-y-4 text-white">
          <Card 
            className="bg-black/75 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-xl relative"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">Boss Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-yellow-300">Level:</span> <span className="text-white">100</span>
                </div>
                <div>
                  <span className="text-yellow-300">HP:</span> <span className="text-white">1,500,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">Location:</span> <span className="text-white">/join ultrawarden</span>
                </div>
                <div>
                  <span className="text-yellow-300">Type:</span> <span className="text-white">Ultra Boss</span>
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
              <CardTitle className="text-white">Class Compositions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-yellow-300 mb-3">Standard Composition</h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Legion Revenant</li>
                  <li>• Void Highlord</li>
                  <li>• Lord of Order</li>
                  <li>• StoneCrusher</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 mb-3">Pay2Win Composition</h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Legion Revenant</li>
                  <li>• Quantum Chronomancer</li>
                  <li>• Void Highlord</li>
                  <li>• Lord of Order</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mechanics" className="space-y-4 text-white">
          <Card 
            className="bg-black/75 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-xl relative"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">Boss Mechanics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 mb-2">Auto Attacks</h4>
                  <p className="text-gray-200">
                    Hits like a truck, this is what usually 1 shot players at the start of the fight, 
                    isn't much of a trouble once the players have buffs active.
                  </p>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">Celestial Shockwave</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• A HP 1 attack, hits 3 players, making this attack Warden's most annoying ability</li>
                    <li>• This attack triggers every <span className="text-white font-medium">5% HP lost</span>, which means the faster we melt his HP down, the faster he uses this attack</li>
                    <li>• This attack also <span className="text-green-300 font-medium">heals warden</span> for every target hit</li>
                  </ul>
                </div>

                <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 mb-2">Petrification</h4>
                  <p className="text-gray-200">
                    Has <span className="text-white font-medium">7% chance</span> to petrify a player.
                  </p>
                </div>

                <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-500/30">
                  <h4 className="text-yellow-300 mb-2">Berserk</h4>
                  <p className="text-gray-200">
                    Upon reaching <span className="text-white font-medium">30% remaining HP</span>, Ultra Warden goes berserk, 
                    enrages, increasing its Hit Chance by 60%, Crit Chance and Dodge by 30%, and reducing their auto attack cooldown to 1 second.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategy" className="space-y-4 text-white">
          <Card 
            className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 0 15px ${currentTheme}20`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">General Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <p>
                  To not get 1 shot, make sure to wait until we are fully buffed, then start the fight with 
                  <span className="text-yellow-300 font-medium"> AP skill 4</span> or <span className="text-yellow-300 font-medium">LoO skill 5</span>. 
                  His auto's are pretty much only dangerous at the start of the fight.
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
              <CardTitle className="text-white">Shockwave Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <p className="text-purple-300 font-medium mb-2">
                  Shockwave is the most annoying ability, and we have probably all experienced this before:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Dying mid fight due to heals being on cooldown</li>
                  <li>• Dying at the last second to his berserk enhanced Shockwave</li>
                </ul>
                <p className="text-green-300 font-medium mt-4">
                  To survive these:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Have a class with a HoT skill</li>
                  <li>• Time heals properly</li>
                  <li>• Taunt his berserk with LR or loop taunt the entire fight</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="builds" className="space-y-4 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card 
              className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
              style={{
                borderColor: `${currentTheme}66`,
                boxShadow: `0 0 15px ${currentTheme}20`
              }}
            >
              <CardHeader>
                <CardTitle className="text-white">Legion Revenant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Valiance Weapon | Awe Blast</li>
                    <li>• Wizard Class</li>
                    <li>• Base Forge Helm | Wizard</li>
                    <li>• Vainglory Cape | Wizard</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">Potions:</h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Potent Malevolence Elixir / Potent Honor Potion | Scroll of Enrage (SoE)
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
                <CardTitle className="text-white">Void Highlord</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Ravenous/Smite Weapon</li>
                    <li>• Luck Class</li>
                    <li>• Forge Helm</li>
                    <li>• Vainglory Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">Potions:</h5>
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
                <CardTitle className="text-white">Lord of Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Arcana's Concerto Weapon | Awe Blast</li>
                    <li>• Luck Class</li>
                    <li>• Base Forge Helm | Luck Helm</li>
                    <li>• Penitence Cape | Luck Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">Potions:</h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Divine Elixir / Felicitous Philtre | Dark Grip (Member only)
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
                <CardTitle className="text-white">Stone Crusher</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Awe Blast</li>
                    <li>• Wizard Class</li>
                    <li>• Forge | Wizard/Fighter</li>
                    <li>• Absolution | Wizard Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">Potions:</h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Potent Malevolence Elixir / Potent Honor Potion
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