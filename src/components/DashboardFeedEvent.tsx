
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { FeedActivity } from "@/lib/types";
import { users, challenges, activities, recognitions } from "@/lib/mock-data";

interface DashboardFeedEventProps {
  activity: FeedActivity;
}

const DashboardFeedEvent = ({ activity }: DashboardFeedEventProps) => {
  const user = users.find((u) => u.id === activity.user);
  const challenge = activity.challenge 
    ? challenges.find((c) => c.id === activity.challenge) 
    : null;
  const recognition = activity.recognition
    ? recognitions.find((r) => r.id === activity.recognition)
    : null;
  const activityItem = activity.activity
    ? activities.find((a) => a.id === activity.activity)
    : null;

  if (!user) return null;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getActivityText = () => {
    switch (activity.type) {
      case "join-challenge":
        return (
          <span>
            se unió al reto{" "}
            <Link to={`/challenges/${challenge?.id}`} className="font-medium text-sinapsis-blue hover:text-sinapsis-blue-dark">
              {challenge?.title}
            </Link>
          </span>
        );
      case "complete-profile":
        return <span>completó su perfil</span>;
      case "receive-recognition":
        return (
          <span>
            recibió el reconocimiento{" "}
            <span className="font-medium">{recognition?.title}</span>
          </span>
        );
      case "interest-activity":
        return (
          <span>
            está interesado en{" "}
            <Link to="/activities" className="font-medium text-sinapsis-blue hover:text-sinapsis-blue-dark">
              {activityItem?.title}
            </Link>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
      <Avatar className="w-10 h-10">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm">
          <Link to={`/profile/${user.id}`} className="font-medium hover:text-sinapsis-green">
            {user.name}
          </Link>{" "}
          {getActivityText()}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {formatDistanceToNow(new Date(activity.date), { addSuffix: true, locale: es })}
        </p>
      </div>
    </div>
  );
};

export default DashboardFeedEvent;
