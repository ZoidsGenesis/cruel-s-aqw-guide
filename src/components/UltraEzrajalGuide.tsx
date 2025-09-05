import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ultraEzrajalImage from "figma:asset/068abc3ba3f628802dbcddea741a2853d8b70055.png";

const themeColors = {
  "ultra-ezrajal": "#a87220",
};

export function UltraEzrajalGuide() {
  const currentTheme = themeColors["ultra-ezrajal"];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraEzrajalImage}
          alt="Ultra Ezrajal"
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
                  <span className="text-yellow-300">HP:</span> <span className="text-white">2,500,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">Location:</span> <span className="text-white">/join ultraezrajal</span>
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
              <CardTitle className="text-white">Standard Composition</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-gray-200 ml-4">
                <li>• Legion Revenant</li>
                <li>• Lord of Order</li>
                <li>• Archpaladin</li>
                <li>• VDK/CAV/QCM/CSH for DPS</li>
              </ul>
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
                  <h4 className="text-red-300 mb-2">Skill Locking</h4>
                  <p className="text-gray-200">
                    This ultra has the ability to lock one of our aggressive skills based on whatever is used, randomly. 
                    Meaning, you can either use 1 skill once and get it locked instantly, or use it 5 times and not get it locked at all.
                  </p>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">Nuke</h4>
                  <p className="text-gray-200">
                    Every 8 seconds, Ezrajal will use a skill that can't be taunted, hits all players, and deals unavoidable true damage.
                  </p>
                </div>

                <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 mb-2">Counter Attack</h4>
                  <p className="text-gray-200">
                    Every 40 seconds, Ezrajal will trigger a counter attack, meaning we need to stop attacking for the duration, 
                    otherwise Ezrajal will deflect our attacks to ourselves.
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
              <CardTitle className="text-white">Skill Locking Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <p>
                  The good news is, his skill locking does target awe/forge enhancements, meaning, if we can get him to lock it, 
                  we will be able to freely use our skills. Keep in mind that he only locks aggro skills/enhancement, 
                  meaning our heals, buffs, and friendly target skills cannot actually be locked.
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
              <CardTitle className="text-white">Nuke/HP Check</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <ul className="space-y-2 ml-4">
                  <li>• Have at least <span className="text-white font-medium">2900-3000 HP</span></li>
                  <li>• Time heals. Do not spam them, wait for Ezrajal to use his nuke, which is every 8 seconds. Easy to anticipate.</li>
                </ul>
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
              <CardTitle className="text-white">Counter Attack Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <ul className="space-y-2 ml-4">
                  <li>• Either kill him before he counter (under 40 seconds), or simply stop attacking (Press ESC) when <span className="text-orange-300 font-medium">"Ultra Ezrajal Prepares a Counter Attack!"</span> text shows up.</li>
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
                    <li>• Arcana Weapon | Awe Blast</li>
                    <li>• Wizard Class</li>
                    <li>• Base Forge Helm | Wizard</li>
                    <li>• Vainglory/Lament/Penitence Cape | Wizard</li>
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
                    <li>• Ravenous/Praxis Weapon | Awe Blast</li>
                    <li>• Luck Class</li>
                    <li>• Base Forge Helm | Luck</li>
                    <li>• Lament Cape | Luck</li>
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
                <CardTitle className="text-white">Chaos Avenger</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Ravenous Weapon | Health Vamp</li>
                    <li>• Luck Class</li>
                    <li>• Anima Helm | Luck</li>
                    <li>• Vainglory Cape | Luck</li>
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}