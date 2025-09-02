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
                  <span className="text-yellow-300">HP:</span> <span className="text-white">TBA</span>
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
              <CardTitle className="text-white">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Ultra Ezrajal guide is currently being prepared. Check back soon for complete mechanics, 
                strategies, and class builds!
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
              <p className="text-gray-300">
                Detailed mechanics information will be added soon. Stay tuned for updates!
              </p>
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
              <CardTitle className="text-white">Strategy Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Complete strategy guides will be available soon. Check back for detailed tactics and tips!
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="builds" className="space-y-4 text-white">
          <Card 
            className="bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/85 hover:shadow-lg"
            style={{
              borderColor: `${currentTheme}66`,
              boxShadow: `0 0 15px ${currentTheme}20`
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">Class Builds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Optimized class builds with enhancements and potions will be added soon!
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}