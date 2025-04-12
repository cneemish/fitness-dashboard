
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold mb-4 text-fitness-green">404</h1>
        <p className="text-xl text-white mb-6">Page not found</p>
        <p className="text-zinc-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <Button className="bg-fitness-green text-black hover:bg-fitness-green/90">
            <Home size={16} className="mr-2" /> Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
