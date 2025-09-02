import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import { ScrollArea } from "./components/ui/scroll-area";
import { Separator } from "./components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Sword,
  Shield,
  Crown,
  Skull,
  Flame,
  Zap,
  Volume2,
  User,
  Eye,
  Lock,
  Wrench,
} from "lucide-react";
import { DiscordIcon } from "./components/DiscordIcon";
import championDrakathImage from "figma:asset/ea747cd7ef0f62b7f10a916bab2973f734662889.png";
import ultraNulgathImage from "figma:asset/071c2b26a2311bd10eedb84b4ab7e6b3f520087a.png";
import ultraDageImage from "figma:asset/3f95d1ffc35d266e13456f747e0f1cd22d633657.png";
import ultraAvatarTyndariusImage from "figma:asset/0d6038d5a081fb6ae4e3baed609ab931dc0c2147.png";
import ultraEzrajalImage from "figma:asset/068abc3ba3f628802dbcddea741a2853d8b70055.png";
import ultraWardenImage from "figma:asset/a0a2d3aa4195d3e0d3203ec222d3a2ebd21defc5.png";
import ultraEngineerImage from "figma:asset/8110d333b30749a024128b856a3be05752a3c105.png";
import malgorImage from "figma:asset/6776654411d094ea986745c617458e0bfb7d55c1.png";
import cruelLogo from "figma:asset/337a7d9ed614b4dbbc2134f4b3a94da58330a8aa.png";
import { UltraDageGuide } from "./components/UltraDageGuide";
import { UltraDarkonGuide } from "./components/UltraDarkonGuide";
import { UltraDragoGuide } from "./components/UltraDragoGuide";
import { UltraGramielGuide } from "./components/UltraGramielGuide";
import { UltraAvatarTyndariusGuide } from "./components/UltraAvatarTyndariusGuide";
import { UltraEzrajalGuide } from "./components/UltraEzrajalGuide";
import { UltraWardenGuide } from "./components/UltraWardenGuide";
import { UltraEngineerGuide } from "./components/UltraEngineerGuide";
import { UltraSpeakerGuide } from "./components/UltraSpeakerGuide";

const bosses = [
  {
    id: "champion-drakath",
    name: "Champion Drakath",
    icon: Crown,
    description: "Champion of Chaos",
    difficulty: "Ultra",
  },
  {
    id: "ultra-nulgath",
    name: "Ultra Nulgath",
    icon: Skull,
    description: "The Archfiend",
    difficulty: "Ultra",
  },
  {
    id: "ultra-dage",
    name: "Ultra Dage",
    icon: Shield,
    description: "The Dark Lord",
    difficulty: "Ultra",
  },
  {
    id: "ultra-darkon",
    name: "Ultra Darkon",
    icon: Sword,
    description: "The Conductor",
    difficulty: "Ultra",
  },
  {
    id: "ultra-drago",
    name: "Ultra Drago",
    icon: Flame,
    description: "The Tyrant of Astravia",
    difficulty: "Ultra",
  },
  {
    id: "ultra-gramiel",
    name: "Ultra Gramiel",
    icon: Zap,
    description: "The Graceful",
    difficulty: "Ultra",
  },
  {
    id: "ultra-speaker",
    name: "Malgor",
    icon: Volume2,
    description: "The First Speaker",
    difficulty: "Ultra",
  },
  {
    id: "ultra-avatar-tyndarius",
    name: "Ultra Avatar Tyndarius",
    icon: User,
    description: "And his balls",
    difficulty: "Ultra",
  },
  {
    id: "ultra-ezrajal",
    name: "Ultra Ezrajal",
    icon: Eye,
    description: "The Antechamber",
    difficulty: "Ultra",
  },
  {
    id: "ultra-warden",
    name: "Ultra Warden",
    icon: Lock,
    description: "The Reliquary",
    difficulty: "Ultra",
  },
  {
    id: "ultra-engineer",
    name: "Ultra Engineer",
    icon: Wrench,
    description: "The Apex",
    difficulty: "Ultra",
  },
];

const themeColors = {
  "champion-drakath": "#9333ea", // Purple - default
  "ultra-nulgath": "#375d4f",
  "ultra-dage": "#3976af",
  "ultra-darkon": "#b83e3f",
  "ultra-drago": "#b83e3f",
  "ultra-gramiel": "#dad6af",
  "ultra-speaker": "#d0181b",
  "ultra-avatar-tyndarius": "#f3b233",
  "ultra-ezrajal": "#a87220",
  "ultra-warden": "#867050",
  "ultra-engineer": "#6fafea",
};

export default function App() {
  const [selectedBoss, setSelectedBoss] = useState(
    "champion-drakath",
  );
  const [animateIcon, setAnimateIcon] = useState(false);
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

  const currentBoss = bosses.find(
    (boss) => boss.id === selectedBoss,
  );

  const currentTheme =
    themeColors[selectedBoss as keyof typeof themeColors];

  // Set favicon
  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'shortcut icon';
    favicon.href = cruelLogo;
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }, []);

  // Trigger icon animation when boss changes
  useEffect(() => {
    setAnimateIcon(true);
    const timer = setTimeout(() => setAnimateIcon(false), 600);
    return () => clearTimeout(timer);
  }, [selectedBoss]);

  // Ripple effect function
  const createRipple = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(
      button.offsetWidth,
      button.offsetHeight,
    );
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: ${currentTheme}40;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;

    button.style.position = "relative";
    button.style.overflow = "hidden";
    button.appendChild(ripple);

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  };

  // Add dynamic styles for tab active states and optimized background
  const dynamicStyles = `
    .tabs-trigger[data-state="active"] {
      background-color: ${currentTheme} !important;
      box-shadow: 0 0 20px ${currentTheme}60 !important;
      transform: scale(1.05);
      animation: glow 2s ease-in-out infinite alternate;
    }
    .tabs-trigger:not([data-state="active"]):hover {
      background-color: ${currentTheme}30 !important;
      box-shadow: 0 0 10px ${currentTheme}40 !important;
    }
    
    /* Optimized Static Background */
    .dark-gaming-bg {
      background: 
        radial-gradient(ellipse at top left, ${currentTheme}12 0%, transparent 50%),
        radial-gradient(ellipse at top right, ${currentTheme}08 0%, transparent 50%),
        radial-gradient(ellipse at bottom center, ${currentTheme}06 0%, transparent 70%),
        linear-gradient(135deg, rgb(8 15 32) 0%, rgb(15 25 45) 30%, rgb(5 10 25) 70%, rgb(8 15 32) 100%);
      position: relative;
      transition: all 1s ease-in-out;
    }
    
    /* Subtle accent overlay */
    .dark-gaming-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 25% 25%, ${currentTheme}15 0%, transparent 40%),
        radial-gradient(circle at 75% 75%, ${currentTheme}10 0%, transparent 45%);
      opacity: 0.7;
      z-index: -1;
    }
    
    @keyframes glow {
      from {
        box-shadow: 0 0 20px ${currentTheme}60;
      }
      to {
        box-shadow: 0 0 30px ${currentTheme}80, 0 0 40px ${currentTheme}40;
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    .float-animation {
      animation: float 3s ease-in-out infinite;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: dynamicStyles }}
      />
      <div className="min-h-screen dark-gaming-bg">
        {/* Main Content Container */}
        <div className="relative z-10">
          {/* Header */}
          <header
            className="border-b bg-black/30 backdrop-blur-md transition-all duration-500 relative z-20"
            style={{
              borderColor: `${currentTheme}50`,
              boxShadow: `0 4px 20px ${currentTheme}20`,
            }}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center gap-4">
                <img
                  src={cruelLogo}
                  alt="Cruel's Logo"
                  className="h-12 w-12 object-contain transition-all duration-300 hover:rotate-12 hover:scale-110"
                  style={{
                    filter: `drop-shadow(0 0 10px ${currentTheme}40)`,
                  }}
                />
                <div>
                  <h1 className="text-3xl font-bold text-white transition-all duration-300 hover:scale-105">
                    Cruel's AQW Ultra Guide
                  </h1>
                  <p
                    className="transition-colors duration-500"
                    style={{ color: currentTheme }}
                  >
                    Aenaen The Most Handsome Cruel
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 py-8 relative z-15">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <Card
                  className="bg-black/85 backdrop-blur-md transition-all duration-500 hover:bg-black/90 relative"
                  style={{
                    borderColor: `${currentTheme}66`,
                    boxShadow: `0 8px 32px ${currentTheme}20, inset 0 1px 0 ${currentTheme}20`,
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-white">
                      Ultra Bosses
                    </CardTitle>
                    <CardDescription
                      className="transition-colors duration-500"
                      style={{ color: `${currentTheme}cc` }}
                    >
                      Select a boss to view the complete guide
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-96">
                      <div className="p-4 space-y-2">
                        {bosses.map((boss) => {
                          const IconComponent = boss.icon;
                          return (
                            <Button
                              key={boss.id}
                              variant={
                                selectedBoss === boss.id
                                  ? "default"
                                  : "ghost"
                              }
                              className={`w-full justify-start gap-3 h-auto p-3 transition-all duration-300 transform hover:scale-105 ${
                                selectedBoss === boss.id
                                  ? "text-white shadow-lg"
                                  : "text-gray-300 hover:shadow-md"
                              }`}
                              style={{
                                backgroundColor:
                                  selectedBoss === boss.id
                                    ? currentTheme
                                    : "transparent",
                                boxShadow:
                                  selectedBoss === boss.id
                                    ? `0 0 20px ${currentTheme}40`
                                    : "none",
                              }}
                              onMouseEnter={(e) => {
                                if (selectedBoss !== boss.id) {
                                  e.currentTarget.style.backgroundColor = `${currentTheme}20`;
                                  e.currentTarget.style.boxShadow = `0 0 15px ${currentTheme}30`;
                                } else {
                                  e.currentTarget.style.boxShadow = `0 0 25px ${currentTheme}60`;
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (selectedBoss !== boss.id) {
                                  e.currentTarget.style.backgroundColor =
                                    "transparent";
                                  e.currentTarget.style.boxShadow =
                                    "none";
                                } else {
                                  e.currentTarget.style.boxShadow = `0 0 20px ${currentTheme}40`;
                                }
                              }}
                              onClick={(e) => {
                                // Add click animation and ripple effect
                                createRipple(e);
                                e.currentTarget.style.transform =
                                  "scale(0.95)";
                                setTimeout(() => {
                                  e.currentTarget.style.transform =
                                    "scale(1.05)";
                                }, 100);
                                setSelectedBoss(boss.id);
                              }}
                            >
                              <IconComponent className="h-5 w-5" />
                              <div className="text-left flex-1">
                                <div className="font-medium">
                                  {boss.name}
                                </div>
                                <div className="text-xs opacity-70">
                                  {boss.description}
                                </div>
                              </div>
                            </Button>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card
                  className="bg-black/85 backdrop-blur-md transition-all duration-500 hover:bg-black/90 relative"
                  style={{
                    borderColor: `${currentTheme}66`,
                    boxShadow: `0 8px 32px ${currentTheme}20, inset 0 1px 0 ${currentTheme}20`,
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {currentBoss && (
                        <>
                          <currentBoss.icon
                            className={`h-8 w-8 transition-all duration-500 ${animateIcon ? "animate-pulse scale-125" : ""}`}
                            style={{
                              color: currentTheme,
                              filter: `drop-shadow(0 0 10px ${currentTheme}60)`,
                            }}
                          />
                          <div>
                            <CardTitle className="text-2xl text-white">
                              {currentBoss.name}
                            </CardTitle>
                            <CardDescription
                              className="transition-colors duration-500"
                              style={{
                                color: `${currentTheme}cc`,
                              }}
                            >
                              {currentBoss.description}
                            </CardDescription>
                          </div>
                          <Badge
                            variant="destructive"
                            className="ml-auto"
                          >
                            {currentBoss.difficulty}
                          </Badge>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {selectedBoss === "champion-drakath" ? (
                      <ChampionDrakathGuide />
                    ) : selectedBoss === "ultra-nulgath" ? (
                      <UltraNulgathGuide />
                    ) : selectedBoss === "ultra-dage" ? (
                      <UltraDageGuide />
                    ) : selectedBoss === "ultra-darkon" ? (
                      <UltraDarkonGuide />
                    ) : selectedBoss === "ultra-drago" ? (
                      <UltraDragoGuide />
                    ) : selectedBoss === "ultra-gramiel" ? (
                      <UltraGramielGuide />
                    ) : selectedBoss ===
                      "ultra-avatar-tyndarius" ? (
                      <UltraAvatarTyndariusGuide />
                    ) : selectedBoss === "ultra-ezrajal" ? (
                      <UltraEzrajalGuide />
                    ) : selectedBoss === "ultra-warden" ? (
                      <UltraWardenGuide />
                    ) : selectedBoss === "ultra-engineer" ? (
                      <UltraEngineerGuide />
                    ) : selectedBoss === "ultra-speaker" ? (
                      <UltraSpeakerGuide />
                    ) : (
                      <div className="py-12"></div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer
            className="border-t bg-black/30 backdrop-blur-md mt-16 transition-all duration-500 relative z-20"
            style={{
              borderColor: `${currentTheme}50`,
              boxShadow: `0 -4px 20px ${currentTheme}20`,
            }}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <Button
                    variant="outline"
                    className="text-white border-2 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 px-4 py-2"
                    style={{
                      borderColor: `${currentTheme}60`,
                      color: `${currentTheme}cc`,
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${currentTheme}80`;
                      e.currentTarget.style.backgroundColor = `${currentTheme}10`;
                      e.currentTarget.style.boxShadow = `0 0 15px ${currentTheme}30`;
                      e.currentTarget.style.color = currentTheme;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${currentTheme}60`;
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.color = `${currentTheme}cc`;
                    }}
                    onClick={() => setAboutDialogOpen(true)}
                  >
                    About Cruel
                  </Button>
                  
                  <Dialog open={aboutDialogOpen} onOpenChange={setAboutDialogOpen}>
                    <DialogContent 
                      className="bg-black/90 backdrop-blur-md border text-white max-w-2xl"
                      style={{
                        borderColor: `${currentTheme}66`,
                        boxShadow: `0 8px 32px ${currentTheme}20`,
                      }}
                    >
                      <DialogHeader>
                        <DialogTitle 
                          className="text-2xl"
                          style={{ color: currentTheme }}
                        >
                          About Cruel
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Information about Cruel and the guide creator
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-6">
                        <div 
                          className="text-center p-12 rounded-lg border"
                          style={{
                            borderColor: `${currentTheme}30`,
                            backgroundColor: `${currentTheme}05`,
                          }}
                        >
                          <p className="text-gray-400 italic">
                            Content coming soon...
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className="text-gray-300 transition-colors duration-500"
                    style={{ color: `${currentTheme}cc` }}
                  >
                    Need help with ultra clears?
                  </span>
                  <a
                    href="https://discord.gg/aqwcruel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: currentTheme,
                      boxShadow: `0 0 15px ${currentTheme}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 25px ${currentTheme}60`;
                      e.currentTarget.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 15px ${currentTheme}40`;
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    <DiscordIcon className="h-5 w-5" />
                    <span>Join Our Discord</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

function ChampionDrakathGuide() {
  const currentTheme = themeColors["champion-drakath"];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={championDrakathImage}
          alt="Champion Drakath"
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
                  <span className="text-white">100</span>
                </div>
                <div>
                  <span className="text-yellow-300">HP:</span>{" "}
                  <span className="text-white">20,000,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">
                    Location:
                  </span>{" "}
                  <span className="text-white">
                    /join championdrakath
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
                  <li>• Lord of Order (Support)</li>
                  <li>• Stone Crusher (Support)</li>
                  <li>• Archpaladin (Support)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 mb-3">
                  Speedrun Composition
                </h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Legion Revenant (Taunter/DPS)</li>
                  <li>• Lord of Order (Support)</li>
                  <li>• Chrono Shadowslayer (DPS)</li>
                  <li>• Paladin Chronomancer (Taunter)</li>
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
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Boss Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 mb-2">
                    Damage Mechanics
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Always does exactly{" "}
                      <span className="text-white font-medium">
                        3,000 damage
                      </span>{" "}
                      every 2M HP lost (18M, 16M, 14M, 12M, etc){" "}
                      <span className="text-yellow-300">
                        (Tauntable)
                      </span>
                    </li>
                    <li>
                      • Increased damage to{" "}
                      <span className="text-red-300 font-medium">
                        3,500
                      </span>{" "}
                      every 2M HP lost starting at 8M until 4M
                      HP{" "}
                      <span className="text-yellow-300">
                        (Tauntable)
                      </span>
                    </li>
                    <li>
                      • Drakath gains{" "}
                      <span className="text-purple-300">
                        increased evasion
                      </span>{" "}
                      at 4M HP
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
                Standard Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div>
                  <h4 className="text-yellow-300 mb-2">
                    Chaos Avenger (CAV)
                  </h4>
                  <p>
                    Solo taunt with skill 3 every Drakath's 2M
                    HP lost (taunt at 18.1M, 16.1M, 14.1M,
                    12.1M, 8.1M, 6.1M, 4.1M HP).
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-300 mb-2">
                    Archpaladin (AP)
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      • Time skill 4 (Righteous Seal) in every
                      Drakath's 2M HP lost to help decrease
                      damage output
                    </li>
                    <li>
                      • Heal timing after Drakath's nukes in
                      every 2M HP lost
                    </li>
                    <li>
                      • Coordinate with LoO to time heal so both
                      classes can time heal and Quix (LoO skill
                      5)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-300 mb-2">
                    Stone Crusher (SC)
                  </h4>
                  <p>
                    Always use skill 3 first before skill 4 to
                    avoid sudden mana drop.
                  </p>
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
                Speedrun Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div>
                  <h4 className="text-yellow-300 mb-2">
                    Legion Revenant (LR)
                  </h4>
                  <p>Taunt 16M and 12M only.</p>
                </div>
                <div>
                  <h4 className="text-yellow-300 mb-2">
                    Paladin Chronomancer (PCM)
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Taunt 18M, 14M, 8M, 6M, 4M</li>
                    <li>
                      • Time heal below 10M - heal as soon as
                      basic attack hits for faster CD
                    </li>
                    <li>
                      • Coordinate with LoO to time heal and
                      Quix
                    </li>
                    <li>• Use skill 4 then skill 3 for HoT</li>
                    <li>
                      • Apply HoT just before next basic attack
                      connects to maximize duration
                    </li>
                    <li>
                      • Stop healing skills when HoT is active
                      to conserve mana
                    </li>
                    <li>
                      • Stop healing skills when Quix is applied
                      to conserve mana
                    </li>
                    <li>
                      • Always spam skill 5 whenever available
                      to regenerate mana
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
                  Chaos Avenger
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>
                      • Dauntless/Ravenous Weapon | Health Vamp
                    </li>
                    <li>• Lucky Class</li>
                    <li>• Anima Helm | Lucky</li>
                    <li>• Vainglory Cape | Lucky</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Fate Tonic / Potent Battle Elixir / Potent
                    Honor Potion | Felicitous Philtre (Spam)
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
                    <li>
                      • Arcana's Concerto Weapon | Awe Blast
                    </li>
                    <li>• Lucky Class</li>
                    <li>• Base Forge Helm | Lucky</li>
                    <li>• Absolution Cape | Lucky</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Divine Elixir / Felicitous
                    Philtre | Dark Grip (Member only)
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
                    <li>• Valiance Weapon | Awe Blast</li>
                    <li>• Wizard Class</li>
                    <li>• Anima Helm | Wizard</li>
                    <li>• Absolution Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Divine Elixir / Potent Honor
                    Potion
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
                  Archpaladin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>
                      • Ravenous/Praxis/Lacerate Weapon | Awe
                      Blast
                    </li>
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
                    Fate Tonic / Potent Battle Elixir /
                    Felicitous Philtre | Potent Honor Potion
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

function UltraNulgathGuide() {
  const currentTheme = themeColors["ultra-nulgath"];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <img
          src={ultraNulgathImage}
          alt="Ultra Nulgath"
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
                  <span className="text-white">100</span>
                </div>
                <div>
                  <span className="text-yellow-300">HP:</span>{" "}
                  <span className="text-white">10,000,000</span>
                </div>
                <div>
                  <span className="text-yellow-300">
                    Location:
                  </span>{" "}
                  <span className="text-white">
                    /join ultranulgath
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
                  <li>• Archpaladin (Taunter)</li>
                  <li>• Lord of Order (Support)</li>
                  <li>• Dragon of Time (DPS)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 mb-3">
                  Speedrun Composition
                </h4>
                <ul className="space-y-1 text-gray-200 ml-4">
                  <li>• Legion Revenant (Taunter)</li>
                  <li>• Verus Doomknight (Taunter)</li>
                  <li>• Lord of Order (Support)</li>
                  <li>• Chrono Shadowslayer (DPS)</li>
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
              boxShadow: `0 8px 25px ${currentTheme}25, inset 0 1px 0 ${currentTheme}15`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">
                Boss Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 mb-2">
                    Contract System
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Contract of Frailty:
                      </span>{" "}
                      Reduces defense by{" "}
                      <span className="text-white font-medium">
                        50%
                      </span>{" "}
                      for 10 seconds{" "}
                      <span className="text-yellow-300">
                        (Tauntable)
                      </span>
                    </li>
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Contract of Despair:
                      </span>{" "}
                      Applied to targets with Frailty. Reduces
                      dodge and crit chance by{" "}
                      <span className="text-white font-medium">
                        75%
                      </span>{" "}
                      and outgoing damage by{" "}
                      <span className="text-white font-medium">
                        50%
                      </span>{" "}
                      for 10 seconds
                    </li>
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Contract of Stagnation:
                      </span>{" "}
                      Applied to targets with Despair. Reduces
                      defense and physical defense by{" "}
                      <span className="text-white font-medium">
                        100%
                      </span>
                      , haste by{" "}
                      <span className="text-white font-medium">
                        50%
                      </span>
                      , and incoming healing by{" "}
                      <span className="text-white font-medium">
                        80%
                      </span>{" "}
                      for 10 seconds
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-purple-300 mb-2">
                    Behold the Power of the Abyss
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Occurs every{" "}
                      <span className="text-white font-medium">
                        14 seconds
                      </span>{" "}
                      <span className="text-red-300">
                        (Not Tauntable)
                      </span>
                    </li>
                    <li>
                      • Damage{" "}
                      <span className="text-white font-medium">
                        stacks
                      </span>{" "}
                      each time the Overfiend Blade dies
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="text-orange-300 mb-2">
                    Overfiend Blade
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • Applies{" "}
                      <span className="text-red-300 font-medium">
                        instant death
                      </span>{" "}
                      if not killed
                    </li>
                    <li>
                      •{" "}
                      <span className="text-red-300 font-medium">
                        Fatal DOT
                      </span>{" "}
                      in 40 seconds if blade is still alive
                    </li>
                    <li>
                      •{" "}
                      <span className="text-yellow-300">
                        Ignores focus
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
                General Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-blue-300 font-medium mb-2">
                    Key Strategy Point:
                  </p>
                  <p>
                    For both strategies, DPS can kill the blade
                    first if the DPS is not enough to kill
                    Nulgath in 45 seconds.{" "}
                    <span className="text-yellow-300">
                      (Not needed if the DPS is potted)
                    </span>
                  </p>
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
                Standard Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <p>
                  Have two taunters ready and make them loop
                  taunt Nulgath.
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
                Safe and Best Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <p className="text-green-300 font-medium mb-2">
                  Optimal Taunt Timing:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>
                    •{" "}
                    <span className="text-yellow-300">
                      First taunter:
                    </span>{" "}
                    Taunt Nulgath{" "}
                    <span className="text-white font-medium">
                      4 seconds after
                    </span>{" "}
                    the battle starts and when the taunt icon
                    from second taunter fades
                  </li>
                  <li>
                    •{" "}
                    <span className="text-yellow-300">
                      Second taunter:
                    </span>{" "}
                    Taunt every time the{" "}
                    <span className="text-purple-300 font-medium">
                      "Behold"
                    </span>{" "}
                    text appears
                  </li>
                </ul>
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
                    <li>• Arcana Weapon</li>
                    <li>• Wizard Class</li>
                    <li>• Base Forge | Wizard Helm</li>
                    <li>
                      • Vainglory/Lament/Penitence | Wizard Cape
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Potent Malevolence Elixir /
                    Scroll of Enrage (SoE)
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
                  Archpaladin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>
                      • Ravenous/Praxis Weapon | Awe Blast
                    </li>
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
                    Fate Tonic / Potent Battle Elixir / Scroll
                    of Enrage (SoE)
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
                    <li>
                      • Arcana's Concerto Weapon | Awe Blast
                    </li>
                    <li>• Luck Class</li>
                    <li>• Base Forge Helm | Luck Helm</li>
                    <li>• Penitence Cape | Luck Cape</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Sage Tonic / Divine Elixir / Felicitous
                    Philtre | Dark Grip (Member only)
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
                  Dragon of Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Enhancements:
                  </h5>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Elysium Weapon | Mana Vamp</li>
                    <li>• Wizard/Healer Class</li>
                    <li>• Pneuma Helm | Wizard/Healer</li>
                    <li>• Vainglory Cape | Wizard/Healer</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-yellow-300 mb-2">
                    Potions:
                  </h5>
                  <p className="text-sm text-gray-200">
                    Unstable Sage Tonic / Unstable Malevolence
                    Elixir / Potent Honor Potion
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