import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ultraEngineerImage from "figma:asset/8110d333b30749a024128b856a3be05752a3c105.png";

const themeColors = {
  "ultra-engineer": "#6fafea",
};

export function UltraEngineerGuide() {
  const currentTheme = themeColors["ultra-engineer"];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraEngineerImage}
          alt="Ultra Engineer"
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
                  <span className="text-yellow-300">HP:</span> <span className="text-white">1,000,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">Location:</span> <span className="text-white">/join ultraengineer</span>
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
              <CardTitle className="text-white">Drone Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-900/20 p-3 rounded-lg">
                  <h4 className="text-red-300 mb-2">Attack Drone</h4>
                  <p className="text-gray-200">HP: <span className="text-white font-medium">100,000</span></p>
                </div>
                <div className="bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="text-blue-300 mb-2">Defense Drone</h4>
                  <p className="text-gray-200">HP: <span className="text-white font-medium">250,000</span></p>
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
                <li>• Verus Doomknight (DPS)</li>
                <li>• Legion Revenant</li>
                <li>• Lord of Order (Support)</li>
                <li>• Archpaladin</li>
              </ul>
              <p className="text-gray-300 mt-3 text-sm">
                CAV/QCM/CSS/DOT/VHL can also work for DPS
              </p>
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
                  <h4 className="text-red-300 mb-2">Drone Immunity</h4>
                  <p className="text-gray-200">
                    While <span className="text-white font-medium">Attack Drone</span> and <span className="text-white font-medium">Defense Drone</span> are alive, 
                    <span className="text-red-300 font-medium"> Ultra Engineer does not take any damage.</span>
                  </p>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">Devastator Beam</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>• Basically is his nuke, triggers every <span className="text-white font-medium">45 seconds</span></li>
                    <li>• <span className="text-red-300">Ignores focus</span>, always hits</li>
                    <li>• Damage is <span className="text-green-300">divided by the number of players</span> in combat</li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="text-blue-300 mb-2">Defense Drone Counter Attack</h4>
                  <p className="text-gray-200">
                    Every <span className="text-white font-medium">20 seconds</span>, Defense Drone will charge for 
                    <span className="text-white font-medium"> 2 seconds</span>, and then apply 
                    <span className="text-orange-300 font-medium"> Counter Attack</span> to itself for 
                    <span className="text-white font-medium"> 6 seconds</span>.
                  </p>
                </div>

                <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 mb-2">Drone Aggression</h4>
                  <p className="text-gray-200">
                    These 2 drones are <span className="text-red-300 font-medium">aggressive towards movements</span>, so try not to walk towards them unless we are starting the fight.
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
              <CardTitle className="text-white">Drone Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-red-900/20 p-3 rounded-lg">
                  <p className="text-red-300 font-medium mb-2">Critical Point:</p>
                  <p>
                    Since it takes <span className="text-white font-medium">0 damage</span> while 
                    <span className="text-red-300 font-medium"> ANY</span> of the drones are active, we will need to kill both drones 
                    <span className="text-yellow-300 font-medium">almost at relatively the same time</span> to maintain the efficiency of the fight.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-yellow-300 mb-2">Target Priority:</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Defense Drone has significantly more HP than Attack Drone</li>
                    <li>• It also does counter attack every 20 seconds</li>
                    <li>• <span className="text-green-300 font-medium">All players ideally need to target Defense Drone first</span></li>
                    <li>• Eventually Attack Drone will die on its own due to <span className="text-blue-300">area of effect damage from LR and AP</span></li>
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
              <CardTitle className="text-white">Devastator Beam Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div>
                  <h4 className="text-purple-300 mb-2">Heal Timing:</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Upon reaching <span className="text-white font-medium">45 seconds</span>, AP/LoO need to save their heals</li>
                    <li>• Wait until <span className="text-purple-300 font-medium">"Ultra Engineer Charges His Devastator Beam!"</span> text shows up</li>
                    <li>• <span className="text-green-300 font-medium">Wait until the beam hits and heal immediately</span></li>
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
              <CardTitle className="text-white">Opening Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div>
                  <h4 className="text-orange-300 mb-2">First Opening Damage:</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• DEF and ATK drones do <span className="text-red-300 font-medium">quick opening damage</span></li>
                    <li>• <span className="text-green-300 font-medium">Healers need to have their heals ready</span> to heal those first opening damage</li>
                    <li>• At the same time, <span className="text-yellow-300 font-medium">don't panic and try not to waste heals</span></li>
                  </ul>
                </div>
                
                <div className="bg-red-900/20 p-3 rounded-lg mt-4">
                  <p className="text-red-300 font-medium">
                    Remember: Boss will not lose HP if either drone is up.
                  </p>
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
                <CardTitle className="text-white">Verus Doomknight</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">Enhancements:</h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Dauntless</li>
                    <li>• Luck Class</li>
                    <li>• Anima</li>
                    <li>• Vainglory</li>
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}