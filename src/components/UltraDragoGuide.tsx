import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ultraDragoImage from "figma:asset/3461a09351a601e68ef237330391f47112e75c12.png";

const themeColors = {
  "ultra-drago": "#b83e3f",
};

export function UltraDragoGuide() {
  const currentTheme = themeColors["ultra-drago"];
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraDragoImage}
          alt="Ultra Drago"
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
                  <span className="text-white">1,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">
                    Location:
                  </span>{" "}
                  <span className="text-white">
                    /join ultradrago
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
                  <li>• Chaos Avenger (DPS)</li>
                  <li>• Lord of Order (Taunter/Support)</li>
                  <li>• Legion Revenant (Taunter)</li>
                  <li>• Archpaladin (Taunter)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 mb-3">
                  Speedrun Composition
                </h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Chrono Shadowslayer (DPS)</li>
                  <li>• Lord of Order (Support)</li>
                  <li>• Legion Revenant (Taunter)</li>
                  <li>• Archpaladin (Taunter)</li>
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
              <span className="text-white font-medium">2 minutes and 40 seconds</span> time limit. 
              Failure to kill the boss in time will result in team wipe out.
            </p>
          </Card>

          <Card 
            className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 8px 25px ${currentTheme}25`
            }}
          >
            <h4 className="text-orange-300 mb-2">⚔️ Kill Order Priority</h4>
            <p className="text-gray-200">
              You must kill <span className="text-white font-medium">both Algie and Dene</span> before killing Drago.
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
                Judgment Day Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 mb-2">
                    Ultimate Attack Sequence
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • <span className="text-red-300 font-medium">"Judgment Day"</span> begins after{" "}
                      <span className="text-white font-medium">160 seconds</span> of combat
                    </li>
                    <li>
                      • Drago laughs for <span className="text-white font-medium">20 seconds</span>
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">"Judged"</span> is used{" "}
                      <span className="text-gray-400">(Not Tauntable)</span>
                    </li>
                    <li>
                      • If a player somehow survives the attack, <span className="text-red-300 font-medium">instant death</span> 
                      or <span className="text-red-300 font-medium">fatal DoT</span> is applied
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
                Executioner Dene (The Axe)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">
                    Auto Attack Effects
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Spams auto attacks that <span className="text-red-300 font-medium">buff his attack</span> and{" "}
                      <span className="text-red-300 font-medium">debuff your attacks</span>{" "}
                      <span className="text-gray-400">(Not Tauntable)</span>
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Defenses Shattered:</span> Applied to target,{" "}
                      <span className="text-white font-medium">+5% incoming damage and physical damage</span> for 4 seconds{" "}
                      <span className="text-yellow-300">(stacks indefinitely)</span>
                    </li>
                    <li>
                      • <span className="text-blue-300 font-medium">Defense Increasing:</span> Applied to self,{" "}
                      <span className="text-white font-medium">-1% incoming damage per player hit</span>{" "}
                      <span className="text-yellow-300">(stacks indefinitely)</span>
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
                Bowmaster Algie (The Bow)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-300 mb-2">
                    Ranged Attack Mechanics
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Uses <span className="text-orange-300 font-medium">nuke every 12 seconds</span>{" "}
                      <span className="text-gray-400">(Not Tauntable)</span>
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Damage Drained:</span> Applied to target,{" "}
                      <span className="text-white font-medium">-5% outgoing damage</span> for 4 seconds{" "}
                      <span className="text-yellow-300">(stacks indefinitely)</span>
                    </li>
                    <li>
                      • <span className="text-blue-300 font-medium">Damage Increasing:</span> Applied to self,{" "}
                      <span className="text-white font-medium">+1% outgoing damage per player hit</span>{" "}
                      <span className="text-yellow-300">(stacks indefinitely)</span>
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Bleeding:</span> DoT that lasts{" "}
                      <span className="text-white font-medium">20 seconds</span>
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
                Multi-Target Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                  <p className="text-blue-300 font-medium mb-2">🎯 Target Assignment:</p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <span className="text-yellow-300 font-medium">Archpaladin & Lord of Order:</span> Loop taunt{" "}
                      <span className="text-purple-300">Executioner Dene</span> and focus damage on the Axe
                    </li>
                    <li>
                      • <span className="text-green-300 font-medium">Legion Revenant:</span> Spam taunt{" "}
                      <span className="text-green-300">Bowmaster Algie</span>
                    </li>
                    <li>
                      • <span className="text-orange-300 font-medium">LR & DPS:</span> Target{" "}
                      <span className="text-green-300">Bow</span> and kill it <span className="text-white font-medium">first</span>
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
                Kill Order Priority
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-medium mb-2">🗡️ Execution Order:</p>
                  <ol className="space-y-2 ml-4">
                    <li>
                      <span className="text-white font-medium">1.</span> Kill{" "}
                      <span className="text-green-300 font-medium">Bowmaster Algie (The Bow)</span> first
                    </li>
                    <li>
                      <span className="text-white font-medium">2.</span> Kill{" "}
                      <span className="text-purple-300 font-medium">Executioner Dene (The Axe)</span> second
                    </li>
                    <li>
                      <span className="text-white font-medium">3.</span> Finally kill{" "}
                      <span className="text-orange-300 font-medium">Ultra Drago (The King)</span>
                    </li>
                  </ol>
                </div>
                <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                  <p className="text-red-300 font-medium mb-2">⚠️ Critical Rule:</p>
                  <p>
                    You <span className="text-white font-medium">MUST kill both adds</span> before attempting to kill Ultra Drago.
                    Failing to do so will result in failure.
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
                Timing Considerations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-500/30">
                  <p className="text-orange-300 font-medium mb-2">⏱️ Time Management:</p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <span className="text-white font-medium">2:40 total time limit</span> for the entire fight
                    </li>
                    <li>
                      • <span className="text-red-300 font-medium">Judgment Day</span> activates after{" "}
                      <span className="text-white font-medium">2:40 (160 seconds)</span>
                    </li>
                    <li>
                      • Plan to finish all adds and Ultra Drago <span className="text-white font-medium">before 2:40</span>
                    </li>
                    <li>
                      • Focus fire and coordination is <span className="text-yellow-300 font-medium">essential</span> for success
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
                  Chaos Avenger
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Ravenous Weapon | Health Vamp</li>
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
                    <li>• Arcana's Concerto | Awe Blast</li>
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
                    <li>• Base Forge Helm | Wizard</li>
                    <li>• Vainglory/Lament/Penitence Cape | Wizard</li>
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
                  Archpaladin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Ravenous/Praxis Weapon | Awe Blast</li>
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
                    Fate Tonic / Potent Battle Elixir / Scroll of Enrage (SoE)
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