import { useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const TabNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const tabs = [
    { id: "plans-pricing", label: "Plans & Pricing", path: "/plans-pricing" },
    { id: "nri-solutions", label: "NRI Solutions", path: "/nri-solutions" },
    { id: "enterprise", label: "Enterprise Solutions", path: "/enterprise" },
    { id: "resources", label: "Resources", path: "/resources" },
  ];

  // Determine active tab based on current path
  const getActiveTab = () => {
    const currentPath = location.pathname;
    return tabs.find(tab => currentPath === tab.path)?.id || "nri-solutions";
  };

  const handleTabChange = (value: string) => {
    const tab = tabs.find(t => t.id === value);
    if (tab) {
      navigate(tab.path);
    }
  };

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <Tabs value={getActiveTab()} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-4">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className="text-xs sm:text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default TabNavigation;