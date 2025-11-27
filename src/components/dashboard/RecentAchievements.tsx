import formatDate from "@/lib/helper";
import { FileText } from "lucide-react";
import { JSX } from "react";

type RecentAchievementsProps = {
  achievements?: ({
    achievement: {
      id: string;
      name: string;
      description: string;
      icon: string; // e.g. "file-text"
    };
  } & {
    id: string;
    studentId: string;
    awardedAt: Date;
    achievementId: string;
  })[];
};

// Map icon names from DB → actual components
const ICON_MAP: Record<string, JSX.Element> = {
  "file-text": <FileText />,
  FileText: <FileText />, // optional fallback
};

const RecentAchievements = ({ achievements }: RecentAchievementsProps) => {
  return (
    <div>
      <h3 className="p-4 bg-gray-800 text-white font-medium">
        Recent Achievements
      </h3>

      <div className="p-4 bg-gray-300 flex flex-col gap-4">
        {achievements?.map((achievement) => {
          const icon =
            ICON_MAP[achievement.achievement.icon] || <FileText />;

          return (
            <div
              key={achievement.id}
              className="flex items-start gap-2 text-sm"
            >
              <div className="mt-1">{icon}</div>

              <div>
                <p className="font-medium">
                  {achievement.achievement.name}
                </p>

                <span className="text-gray-700">
                  Earned {formatDate(achievement.awardedAt.toString())}
                </span>
              </div>
            </div>
          );
        })}

        {achievements?.length === 0 && (
          <p className="text-gray-600 text-sm italic">
            No achievements yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentAchievements;
