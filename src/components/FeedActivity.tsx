
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FeedActivity as FeedActivityType } from "@/lib/types";
import { users, challenges, activities, recognitions } from "@/lib/mock-data";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";

interface FeedActivityProps {
  activity: FeedActivityType;
}

const FeedActivity = ({ activity }: FeedActivityProps) => {
  const user = users.find((u) => u.id === activity.user);
  const challenge = activity.challenge
    ? challenges.find((c) => c.id === activity.challenge)
    : null;
  const recognitionItem = activity.recognition
    ? recognitions.find((r) => r.id === activity.recognition)
    : null;
  const activityItem = activity.activity
    ? activities.find((a) => a.id === activity.activity)
    : null;

  if (!user) return null;

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Format relative time
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: es });
  };

  // Determine activity text based on type
  const getActivityText = () => {
    switch (activity.type) {
      case "join-challenge":
        return (
          <span>
            se unió al reto{" "}
            <Link
              to={`/challenges/${challenge?.id}`}
              className="font-medium text-sinapsis-blue hover:text-sinapsis-blue-dark"
            >
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
            <span className="font-medium">{recognitionItem?.title}</span>
          </span>
        );
      case "interest-activity":
        return (
          <span>
            está interesado en{" "}
            <Link
              to="/activities"
              className="font-medium text-sinapsis-blue hover:text-sinapsis-blue-dark"
            >
              {activityItem?.title}
            </Link>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-3 p-4 bg-white rounded-lg shadow-sm">
      <Avatar>
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm">
          <Link
            to={`/profile/${user.id}`}
            className="font-medium hover:text-sinapsis-green"
          >
            {user.name}
          </Link>{" "}
          {getActivityText()}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {getRelativeTime(activity.date)}
        </p>
      </div>
    </div>
  );
};

export default FeedActivity;
