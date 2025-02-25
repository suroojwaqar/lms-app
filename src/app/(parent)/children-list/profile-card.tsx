import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  MessageCircle,
  Users,
  Layout,
  Facebook,
  Twitter,
  Globe
} from "lucide-react";

interface ProfileCardProps {
  variant?: "blue" | "green" | "orange";
  name?: string;
  status?: string;
  activityLevel?: number;
  stats?: {
    messages: number;
    followers: number;
    posts: number;
  };
  description?: string;
  avatarUrl?: string;
}

export default function ModernProfileCard({
  variant = "blue",
  name = "Alessa Robert",
  status = "Active | Male | Born 23.05.1992",
  activityLevel = 87,
  stats = {
    messages: 1256,
    followers: 8562,
    posts: 189
  },
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  avatarUrl = "/placeholder.svg?height=100&width=100"
}: ProfileCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "green":
        return "from-emerald-400 to-teal-500";
      case "orange":
        return "from-orange-400 to-amber-500";
      default:
        return "from-blue-400 to-indigo-500";
    }
  };

  return (
    <Card className="w-full max-w-xs overflow-hidden group">
      <div
        className={`relative bg-gradient-to-br ${getVariantStyles()} p-6 pb-24`}
      >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="relative">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden backdrop-blur-sm transition-transform group-hover:scale-105">
                <img
                  src={avatarUrl || "/placeholder.svg"}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full border-4 border-white" />
            </div>
          </div>
          <h3 className="mt-4 text-center font-semibold text-xl text-white">
            {name}
          </h3>
          <p className="text-center text-sm text-white/80">{status}</p>
        </div>
      </div>

      <CardContent className="relative -mt-20 bg-white dark:bg-gray-900 rounded-t-3xl px-6 pt-6 pb-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Activity Level</span>
            <span className="text-sm text-muted-foreground">
              {activityLevel}%
            </span>
          </div>
          <Progress value={activityLevel} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
            <MessageCircle className="w-5 h-5 mx-auto mb-1 text-primary" />
            <span className="block text-lg font-semibold">
              {stats.messages}
            </span>
            <span className="text-xs text-muted-foreground">Messages</span>
          </div>
          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
            <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
            <span className="block text-lg font-semibold">
              {stats.followers}
            </span>
            <span className="text-xs text-muted-foreground">Followers</span>
          </div>
          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
            <Layout className="w-5 h-5 mx-auto mb-1 text-primary" />
            <span className="block text-lg font-semibold">{stats.posts}</span>
            <span className="text-xs text-muted-foreground">Posts</span>
          </div>
        </div>

        <p className="text-sm text-center text-muted-foreground mb-6">
          {description}
        </p>

       
      </CardContent>
    </Card>
  );
}
