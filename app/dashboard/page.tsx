"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";
import { Models } from "appwrite";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      router.push("/");
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      router.push("/");
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Logo className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">
                BalanceBox
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">
                {user.name || user.email}
              </span>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="border-4 border-dashed border-gray-700 rounded-lg h-96 flex items-center justify-center">
          <p className="text-muted-foreground text-lg">
            Welcome to your dashboard
          </p>
        </div>
      </main>
    </div>
  );
}