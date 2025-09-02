import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ultraAvatarTyndariusImage from "figma:asset/0d6038d5a081fb6ae4e3baed609ab931dc0c2147.png";

const themeColors = {
  "ultra-avatar-tyndarius": "#f3b233",
};

export function UltraAvatarTyndariusGuide() {
  const currentTheme = themeColors["ultra-avatar-tyndarius"];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraAvatarTyndariusImage}
          alt="Ultra Avatar Tyndarius"
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
                  <span className="text-yellow-300">HP:</span> <span className="text-white">6,000,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">Location:</span> <span className="text-white">/join ultratyndarius</span>
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
              <CardTitle className="text-white">Ultra Fire Orbs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="text-yellow-300">Count:</span> <span className="text-white">2 Orbs</span>
                </div>
                <div>
                  <span className="text-yellow-300">HP per Orb:</span> <span className="text-white">700,000</span>
                </div>
                <div className="mt-3">
                  <p className="text-gray-300">
                    The Orbs do most of the debuffing, and they are the ones we should be taunting.
                    Taunting Tyndarius in most cases isn't really necessary as long as orbs are taunted.
                  </p>
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
              <CardTitle className="text-white">Team Composition</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-yellow-300 mb-3">Standard Composition</h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Chaos Avenger (DPS)</li>
                  <li>• Legion Revenant (Taunter)</li>
                  <li>• Lord of Order (Support)</li>
                  <li>• Archpaladin (Taunter)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 mb-3">Alternative DPS Options</h4>
                <p className="text-gray-200">Can use QCM/CSS/DoT/AI as DPS</p>
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
                <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 mb-2">Drawing Power</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Applies drawing power to itself, increasing All Out by <span className="text-white font-medium">100%</span> for <span className="text-white font-medium">15 seconds</span></li>
                    <li>• Message: <span className="text-yellow-300 italic">"Ultra Avatar Tyndarius powers up, dealing double damage!"</span></li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-300 mb-2">Elusion</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Applies elusion to itself, increasing dodge by <span className="text-white font-medium">50%</span> and hit chance by <span className="text-white font-medium">200%</span> for <span className="text-white font-medium">20 seconds</span></li>
                    <li>• Message: <span className="text-yellow-300 italic">"Ultra Tyndarius grows elusive, becoming harder to hit and more accurate!"</span></li>
                  </ul>
                </div>

                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 mb-2">Imminent Doom</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Applies Imminent Doom to itself, increasing crit chance by <span className="text-white font-medium">120%</span> for <span className="text-white font-medium">15 seconds</span></li>
                    <li>• Message: <span className="text-yellow-300 italic">"Ultra Tyndarius strikes more precisely, gaining crit chance!"</span></li>
                  </ul>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">Key Insight</h4>
                  <p className="text-gray-200">
                    <span className="text-yellow-300 font-medium">He is pretty weak without his balls.</span> The orbs are the main threat and priority target.
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
              <CardTitle className="text-white">Standard Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-green-900/20 p-3 rounded-lg">
                  <p className="text-green-300 font-medium mb-2">Opening Move:</p>
                  <p>AP needs to go in first and quickly apply 4th skill (Seal) to prevent Tyndarius from 1-shotting.</p>
                </div>
                
                <div>
                  <h4 className="text-yellow-300 mb-2">Primary Focus</h4>
                  <p>In general, we need to take down orbs as quickly as possible, with scrolls of enrage to taunt them, halting them from applying too much debuffs at the players.</p>
                </div>

                <div>
                  <h4 className="text-yellow-300 mb-2">Critical Timing</h4>
                  <p>Since orb's debuffs stack indefinitely, the longer they're up, the weaker we get. Therefore, the faster orbs go down, the less amount of taunt we need.</p>
                </div>

                <div>
                  <h4 className="text-yellow-300 mb-2">Taunting Strategy</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• LR helping CAV to taunt also works, so CAV could use their 6th slot for a damage boosting potion</li>
                    <li>• People might use Scroll of Enrage on AP to taunt Tyndarius, but using a damage potion is also a good (if not better) option to help kill orbs faster</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-yellow-300 mb-2">Role Assignments</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• <span className="text-blue-300">LoO and AP:</span> Focus on Tyndarius, debuffing his massive damage attacks</li>
                    <li>• <span className="text-red-300">LR and DPS:</span> Work together on destroying orbs. They can either pick the same or different orbs, as long as they are killed relatively quickly</li>
                  </ul>
                </div>
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
                <CardTitle className="text-white">Chaos Avenger</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Ravenous/Dauntless Weapon</li>
                    <li>• Luck Class</li>
                    <li>• Anima Helm</li>
                    <li>• Vainglory Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">Potions:</h5>
                  <p className="text-sm text-gray-200">
                    Fate Tonic / Potent Battle Elixir / Potent Honor Potion | Scroll of Enrage (can also be used to loop taunt with oneself)
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
                <CardTitle className="text-white">Legion Revenant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Valiance/Arcana Weapon</li>
                    <li>• Wizard Class</li>
                    <li>• Wizard Helm</li>
                    <li>• Vainglory Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">Potions:</h5>
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
                <CardTitle className="text-white">Archpaladin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Awe Blast Weapon</li>
                    <li>• Luck Class</li>
                    <li>• Forge Helm</li>
                    <li>• Vainglory Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">Potions:</h5>
                  <p className="text-sm text-gray-200">
                    Fate Tonic / Potent Battle Elixir / Scroll of Enrage (SoE)
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
                    <li>• Arcana's Concerto Weapon</li>
                    <li>• Luck Class</li>
                    <li>• Forge Helm</li>
                    <li>• Absolution Cape</li>
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}